# Encryption

This alternative installs ext4 and optional swap inside LVM on LUKS2, with a separate unencrypted ESP at `/boot`. It covers UEFI with either GRUB or systemd-boot. Start here after [live setup](/installation/live-setup).

The root filesystem and swap are encrypted; the bootloader, kernel and initramfs on the ESP are not. This does not protect the boot files against tampering. [Secure Boot](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot) and [unified kernel images](https://wiki.archlinux.org/title/Unified_kernel_image) require additional setup.

## Partition the disk

Check the target carefully. The following operations destroy data on the partitions you format. Replace the NVMe examples with your actual devices.

```bash
lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS,MODEL
cfdisk /dev/nvme0n1
```

Use GPT and create:

| Partition | Size | Type | Purpose |
| --- | --- | --- | --- |
| `/dev/nvme0n1p1` | 1 GiB | EFI System (`ef00` in gdisk) | `/boot` |
| `/dev/nvme0n1p2` | Remaining space | Linux LUKS (`8309` in gdisk) | Encrypted container |

Preserve an existing ESP when dual booting. Do not format it; check that it has room for kernels and initramfs images.

## Create the encrypted container

Use the intended console keyboard layout when entering the passphrase:

```bash
cryptsetup luksFormat --type luks2 /dev/nvme0n1p2
cryptsetup open /dev/nvme0n1p2 cryptroot
pvcreate /dev/mapper/cryptroot
vgcreate main /dev/mapper/cryptroot
```

The following optional swap volume is 4 GiB. Change its size for your workload, or skip it if using zram. Hibernation needs sufficiently large disk swap and separate [resume configuration](https://wiki.archlinux.org/title/Power_management/Suspend_and_hibernate#Hibernation).

```bash
lvcreate -L 4G -n swap main
```

Create root using most of the remaining space, leaving room in the volume group for maintenance such as ext4's `e2scrub`:

```bash
lvcreate -l 95%FREE -n root main
mkfs.ext4 -L ROOT /dev/mapper/main-root
```

If you created the swap volume:

```bash
mkswap /dev/mapper/main-swap
swapon /dev/mapper/main-swap
```

Format the ESP **only if it is new**:

```bash
mkfs.fat -F32 -n EFI /dev/nvme0n1p1
```

Mount root and the ESP:

```bash
mount /dev/mapper/main-root /mnt
mount --mkdir /dev/nvme0n1p1 /mnt/boot
findmnt -R /mnt
```

Continue with [base installation](/installation/base-installation), adding `lvm2` to `pacstrap`. Follow the sidebar through system configuration, users, desktop and useful packages. The bootloader page returns to the next section before generating the initramfs.

## Configure the initramfs

Run this section inside the installed system's chroot, after setting `/etc/vconsole.conf`. Ensure the tools are installed:

```bash
pacman -S --needed lvm2 cryptsetup
nano /etc/mkinitcpio.conf
```

Use this systemd-based hook sequence:

```bash
HOOKS=(base systemd autodetect microcode modconf kms keyboard sd-vconsole block sd-encrypt lvm2 filesystems fsck)
```

`sd-vconsole` supplies the console keymap, `sd-encrypt` unlocks LUKS, and `lvm2` activates the root volume. Do not mix this sequence with the BusyBox `encrypt`/`keymap` hooks.

Find the UUID of the **outer LUKS partition**, not the filesystem or logical volume:

```bash
cryptsetup luksUUID /dev/nvme0n1p2
```

Return to [bootloader installation](/installation/install-bootloader) and use this UUID in its encrypted-root instructions. That page generates the initramfs for all installed kernels.

## Header backup and SSD discard

Back up the LUKS header to separate, protected storage. Replace the output path with a mounted external backup location:

```bash
cryptsetup luksHeaderBackup /dev/nvme0n1p2 --header-backup-file /path/on/external/storage/arch-luks-header.img
```

Keep this backup private: an old header and its old passphrase can still decrypt the data even after you change the current passphrase. See [LUKS header backup](https://wiki.archlinux.org/title/Dm-crypt/Device_encryption#Backup_and_restore).

Enabling `fstrim.timer` alone does not pass discard through LUKS. Allowing discard is optional and reveals allocation patterns; review [dm-crypt SSD support](https://wiki.archlinux.org/title/Dm-crypt/Specialties#Discard/TRIM_support_for_solid_state_drives_(SSD)) before changing it.

Reference: [LVM on LUKS](https://wiki.archlinux.org/title/Dm-crypt/Encrypting_an_entire_system#LVM_on_LUKS).
