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
