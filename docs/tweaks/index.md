# Maintenance and recovery

Run commands as your regular user unless a section explicitly uses the live ISO or chroot.

## Routine maintenance

Read [Arch Linux news](https://archlinux.org/news/) before upgrading, then perform a full system upgrade:

```bash
sudo pacman -Syu
```

If you use AUR packages, also review and apply their updates with your helper, rebuilding packages affected by library changes. Restart affected applications and services; reboot after kernel updates to use the new kernel.

Review `.pacnew` and `.pacsave` files using `pacdiff` from `pacman-contrib`. Merge changes deliberately rather than overwriting your configuration:

```bash
sudo pacdiff
```

`pacdiff` defaults to `vimdiff`; install `vim` or set `DIFFPROG` to an installed diff editor you know how to use.

Inspect orphaned and foreign packages periodically:

```bash
pacman -Qdt
pacman -Qm
```

Review each candidate before removing it. An orphan may still be useful to you. See [System maintenance](https://wiki.archlinux.org/title/System_maintenance) and [package cache cleanup](/post-installation/#package-cache-and-regular-updates).

## Memory and swap

Keep the default swappiness until you have measured a problem. Swappiness controls the relative cost of swapping versus filesystem paging; it is not a percentage of RAM usage at which swapping starts. See the [kernel documentation](https://docs.kernel.org/admin-guide/sysctl/vm.html#swappiness).

For compressed swap in RAM, install `zram-generator` and create `/etc/systemd/zram-generator.conf`:

```bash
sudo pacman -S zram-generator
sudo nano /etc/systemd/zram-generator.conf
```

A simple configuration is:

```ini
[zram0]
zram-size = min(ram / 2, 4096)
```

Reboot to activate it, then check `zramctl` and `swapon --show`. This allocates a compressed swap device up to half of RAM, capped at 4 GiB. Zram cannot store a hibernation image; hibernation needs disk-backed swap and resume configuration. See [Zram](https://wiki.archlinux.org/title/Zram).

If the desktop becomes unresponsive under memory pressure, consider `earlyoom` after checking which OOM policy is already active. Do not stack multiple OOM daemons without understanding their interaction. To choose earlyoom:

```bash
sudo pacman -S earlyoom
sudo systemctl enable --now earlyoom.service
```

It can terminate applications with unsaved work; review its configuration for your workload.

## Backups

### Personal files

Back up personal files to another device or remote storage and test restoring them. Déjà Dup is one option:

```bash
sudo pacman -S deja-dup
```

Include documents, saves, credentials and application data you need. `.config` and `.local/share` often contain important state; do not exclude them wholesale. Caches can usually be excluded. A synchronized folder is not by itself a versioned backup.

Encryption of your system disk does not encrypt a backup stored elsewhere. Configure encryption on the backup destination when it contains private data.

### System snapshots

[Timeshift](https://github.com/linuxmint/timeshift) can create rsync snapshots of the ext4 system used here:

```bash
sudo pacman -S timeshift cronie
sudo systemctl enable --now cronie.service
```

Configure the destination and schedule in Timeshift. Its Btrfs mode requires a supported subvolume layout; it is not applicable to this ext4 installation. Timeshift excludes user data by default and is not a substitute for a separate personal backup.

Upstream supports GRUB2 for bootloader restoration. With systemd-boot, plan to restore the ESP and boot entries separately using the recovery procedure below. Keep a separate backup of `/boot`, `/etc` and, for encryption, the [LUKS header](/encryption/#header-backup-and-ssd-discard).

### Package and service lists

Record explicitly installed repository and foreign packages separately:

```bash
pacman -Qqen > packages-official.txt
pacman -Qqem > packages-foreign.txt
systemctl list-unit-files --state=enabled > enabled-services.txt
systemctl --user list-unit-files --state=enabled > enabled-user-services.txt
```

Save these with your backups. After reinstalling and fully upgrading, restore available official packages with:

```bash
sudo pacman -S --needed - < packages-official.txt
```

Review foreign packages individually and rebuild them from trusted sources. Package names and availability may have changed. Re-enable needed services deliberately, distinguishing system services from user services.

## Recover from the installation ISO

Boot a current ISO in the same firmware mode, connect to the internet and identify the devices with `lsblk -f`. Run the following as root in the live ISO, substituting your actual partitions.

For the unencrypted example:

```bash
mount /dev/nvme0n1p2 /mnt
```

For the encrypted example, use these commands instead:

```bash
cryptsetup open /dev/nvme0n1p2 cryptroot
vgchange -ay main
mount /dev/mapper/main-root /mnt
```

On UEFI, mount the ESP before entering the system. Also mount any separate filesystems needed for the repair:

```bash
mount --mkdir /dev/nvme0n1p1 /mnt/boot
arch-chroot /mnt
```

On BIOS, skip the ESP mount and run `arch-chroot /mnt` directly. Inspect the error and configuration before changing packages. If an upgrade was interrupted, complete a full `pacman -Syu`; reinstall affected packages if necessary.

After fixing initramfs configuration or reinstalling kernel packages:

```bash
mkinitcpio -P
```

For GRUB, regenerate `/boot/grub/grub.cfg` with `grub-mkconfig -o /boot/grub/grub.cfg`. If its boot files need reinstalling, repeat the appropriate [GRUB installation](/installation/install-bootloader#grub) command first.

For systemd-boot, use `bootctl --esp-path=/boot install` if the boot manager needs reinstalling. Restore or recreate the loader entries and verify their kernel paths and root/encryption options. If the ESP was lost, reinstall the kernel packages while it is mounted, then regenerate the initramfs; reinstalling the boot manager alone does not restore kernels.

Exit the chroot, unmount with `umount -R /mnt`, then reboot. Keep the ISO available until you have verified a successful boot.
