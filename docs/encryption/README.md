---
sidebar: auto
---

# Encryption

::: warning
This guide will mostly care for UEFI systems. Steps shouldn't be much different for non-UEFI systems. Have a look at the
arch wiki regarding [system encryption](https://wiki.archlinux.org/index.php/Dm-crypt) for more information.
:::

::: tip
This guide uses X, Y and Z as placeholders. Adjust them accordingly to your setup. Additionally, "sd" could be different depending
on the used connection method of your drive.
:::

In this guide, the encryption configuration we want to achieve is this:
```
                |----------|----------------------|
                |   Swap   |   Other partitions   |
                |          |   e.g. / or /home    |
|---------------|---------------------------------|
|   Grub boot   |   Encrypted container (LUKS)    |
|---------------|---------------------------------|
```

At first, we have a `/boot` partition that contains the Grub bootloader as well as the necessary files for UEFI.
Then we have an encrypted container that uses LUKS that contains the swap and other partitions, like the root partition or `/home`.
All your data as well as the system will be encrypted as a result of that.

This results in you having to type in a password directly after booting, which will unlock the encrypted LUKS container and then boot
the system normally.

## Partitioning
To get a brief overview of the disks, use the command
```bash
fdisk -l
```
After you got the disk to use, run
```bash
gdisk /dev/sdX
```
to partition the disk accordingly. For more information on how to use gdisk, see the [arch wiki](https://wiki.archlinux.org/index.php/GPT_fdisk).
For completeness, the most used commands are:
| Command | What does this do?   |
| ------- | -------------------- |
| `o`     | New partition table  |
| `n`     | Create new partition |
| `w`     | Write table to disk  |

After partitioning, you want to have a layout that looks like this:
| Partition   | Usage          | Size                                                                                   | Partition code  | Partition type   |
| ----------- | -------------- | -------------------------------------------------------------------------------------- | --------------- | ---------------- |
| `/dev/sdXY` | Grub boot      | Depends, [300M are recommended](/installation/partitioning-formatting.html#efi-system) | `ef00`          | EFI System       |
| `/dev/sdXZ` | LUKS container | Remaining                                                                              | `8E00`          | Linux Filesystem |

## The crypt container
### Create crypt container
Now we create a crypt container on `sdXZ` using LUKS. For more information, see these two pages on the arch wiki regarding dm-crypt:
- [Encrypting an entire system: LVM on LUKS](https://wiki.archlinux.org/index.php/Dm-crypt/Encrypting_an_entire_system#LVM_on_LUKS)
- [Device encryption: Encryption options for LUKS mode](https://wiki.archlinux.org/index.php/Dm-crypt/Device_encryption#Encryption_options_for_LUKS_mode)

Encrypt `dev/sdXZ`. You will be prompted for a password. **Care for different keyboard layouts when typing in the password!**
```bash
cryptsetup luksFormat -c aes-xts-plain64 -s 512 /dev/sdXZ
```
Now open the encrypted container and map it to the device `cryptroot`. You will be prompted for the encryption password.
```bash
cryptsetup open /dev/sdXZ cryptroot
```

### Creating LVM within the LUKS container
We currently have an (open and) encrypted container, but no LVM inside. To do this, we first have to create a volume group.
We will call it `main`:
```bash
vgcreate main /dev/mapper/cryptroot
```
Now we create the partitions we need. Since we just want a swap partition and a root partition, we need these two commands. If you want
additional partitions, e.g. for a separate home partition, adjust the following commands (in the other sections, too) according to your
needs. For recommendations regarding the swap size, see the [partitioning section of this guide](/installation/partitioning-formatting.html#swap).
```bash
lvcreate -L 32G main -n swap
lvcreate -l 100%FREE main -n root
```

### Create the filesystems
Now we format the newly created volumes and partitions. The UEFI partition needs to be of type `fat32`. Additionally, this will get you
a `ext4` root partition. You can adjust this freely if you like.
```bash
mkfs.fat -F 32 /dev/sdXY
mkswap /dev/mapper/main-swap
mkfs.ext4 /dev/mapper/main-root
```

### Mounting the system
Mount the system
```bash
mount /dev/mapper/main-root /mnt
mkdir /mnt/boot
mount /dev/sda1 /mnt/boot
```
Additionally, enable the swap
```bash
swapon /dev/mapper/main-swap
```

## Adjust linux kernel hooks
Edit the file `/etc/mkinitcpio.conf` to contain the following line
```
HOOKS=(base udev autodetect modconf block filesystems keyboard keymap encrypt lvm2 fsck)
```

After that, run the command to create the initial ramdisk environment
```bash
mkinitcpio -P
```

## Install grub
Before installing grub, we have to mount the efi variables and install important packages
```bash
mount -t efivarfs efivarfs /sys/firmware/efi/efivars
pacman -S grub efibootmgr dosfstools
```
Additionally, install the microcode packages for your cpu, e.g. `intel-ucode` or `amd-ucode`.

Now find the UUID of the boot partition (in the line starting with `/dev/sdXY`) and note it down
```bash
blkid | grep "UUID="
```

Adjust `/etc/default/grub` because of the encryption. Replace `<UUID>` with the UUID of the device you found earlier.
```
GRUB_CMDLINE_LINUX="cryptdevice=UUID=<UUID>:main root=/dev/mapper/main-root"
```
::: tip
If you want to type the password with the keyboard layout of your home country, you can adjust the line like this with
the languages of your choice. This example uses the german keyboard layout.
```
GRUB_CMDLINE_LINUX="cryptdevice=UUID=<UUID>:main root=/dev/mapper/main-root lang=de locale=de_DE.UTF-8"
```
:::

After that, you can install grub. Use the following commands to do that. **Make sure no errors are reported here.**
```
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=arch_grub --recheck --debug
grub-mkconfig -o /boot/grub/grub.cfg
```

## Additional resources
For more information, you can visit the following pages:
- <https://wiki.archlinux.org/index.php/Dm-crypt>
- <https://www.timoschindler.de/arch-linux-uefi-boot-mit-grub-und-verschluesseltem-lvm/> (German)

This guide tries to sum them all up in one neat page.