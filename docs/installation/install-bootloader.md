# Install a bootloader

Finish system configuration, desktop selection and driver installation first. Choose **one** bootloader: systemd-boot or GRUB for UEFI, GRUB for BIOS. These commands run inside the chroot.

## Generate the initramfs

For the encrypted layout, first complete [Configure the initramfs](/encryption/#configure-the-initramfs), then return here. For an unencrypted installation, keep the current default hooks in `/etc/mkinitcpio.conf`.

Confirm `/etc/vconsole.conf` contains your keyboard layout and the correct CPU microcode package is installed. Generate images for all installed kernels:

```bash
mkinitcpio -P
```

Resolve any errors before continuing. On UEFI, check that `/boot` is the mounted ESP and contains `vmlinuz-linux` and `initramfs-linux.img`:

```bash
findmnt /boot
ls -lh /boot
```

## UEFI: systemd-boot

Install the boot manager included with systemd:

```bash
bootctl --esp-path=/boot install
nano /boot/loader/loader.conf
```

Use:

```text
default arch.conf
timeout 4
editor no
```

For an unencrypted root filesystem, obtain its filesystem UUID:

```bash
blkid -s UUID -o value /dev/nvme0n1p2
```

Create `/boot/loader/entries/arch.conf`, replacing `ROOT_FILESYSTEM_UUID`:

```text
title Arch Linux
linux /vmlinuz-linux
initrd /initramfs-linux.img
options root=UUID=ROOT_FILESYSTEM_UUID rw
```

The microcode hook includes installed CPU microcode in the initramfs, so this entry does not need a separate microcode image. Keep comments on separate lines in boot entry files.

For the encrypted layout, replace the entire `options` line with the following, using the UUID reported by `cryptsetup luksUUID` for the outer LUKS partition:

```text
options rd.luks.name=LUKS_UUID=cryptroot root=/dev/mapper/main-root rw
```

Inspect the installed entry:

```bash
bootctl --esp-path=/boot list
```

See [systemd-boot](https://wiki.archlinux.org/title/Systemd-boot) for boot manager updates, additional kernels and dual boot. Each extra kernel needs its own entry unless you configure automatic entry management.

## GRUB

### UEFI installation

The ESP must be mounted at `/boot`:

```bash
pacman -S grub efibootmgr
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
```

### BIOS installation

Use the whole disk, not a partition. A GPT disk also needs the unformatted BIOS boot partition described on the partitioning page:

```bash
pacman -S grub
grub-install --target=i386-pc /dev/nvme0n1
```

### Encrypted root

For the UEFI encrypted layout in this guide, edit `/etc/default/grub` and set the following, replacing `LUKS_UUID` with the outer partition's LUKS UUID. Preserve any other options you deliberately configured:

```ini
GRUB_CMDLINE_LINUX="rd.luks.name=LUKS_UUID=cryptroot root=/dev/mapper/main-root"
```

GRUB reads the unencrypted `/boot`; the initramfs unlocks root. This layout does not require `GRUB_ENABLE_CRYPTODISK`.

### Other operating systems

If you want GRUB to detect another installed OS, install `os-prober`, mount the relevant OS filesystems as described in the [GRUB documentation](https://wiki.archlinux.org/title/GRUB#Detecting_other_operating_systems), and set this in `/etc/default/grub`:

```ini
GRUB_DISABLE_OS_PROBER=false
```

### Generate the configuration

For every GRUB installation, finish with:

```bash
grub-mkconfig -o /boot/grub/grub.cfg
```

Check for errors and confirm it found the installed kernel. Regenerate this file after changing GRUB settings or adding a kernel.
