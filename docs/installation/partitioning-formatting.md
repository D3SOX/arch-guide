# Partitioning & Formatting

::: tip
In the following X and Y are placeholders. Replace them with your corresponding device and partition number. "sd" could also be different if you don't connect your hard drive via SCSI/SATA
:::

## Partitioning

::: tip
If you want to do disk encryption, go to the [encryption page](/encryption/). It will guide you back to the main installation when needed.
:::

### List partition table

To get an overview you can list your partition table to find out the device you want to use
```bash
fdisk -l
```

### Start partitioning tool
▶️ Text-based
```bash
fdisk /dev/sdX
```
▶️ UEFI only text-based
```bash
gdisk /dev/sdX
```
▶️ Graphical (Recommended for beginners)
```bash
cfdisk /dev/sdX
```
▶️ UEFI only Graphical (Recommended for beginners)
```bash
cgdisk /dev/sdX
```

### Create partitions

#### Decide partition table type
 - BIOS: You can use both but this guide uses DOS
 - UEFI: You need to use GPT

#### GPT (UEFI)

| Needed | Partition | Partition type       | Mount point   |
|--------|-----------|----------------------|---------------|
| ✔️      | /dev/sdXY | EFI system partition | /mnt/boot/efi |
| ❌      | /dev/sdXY | Linux swap           | -             |
| ✔️      | /dev/sdXY | Linux                | /mnt          |
| ❌      | /dev/sdXY | Linux                | /mnt/home     |

#### DOS (BIOS)

| Needed | Partition | Partition type | Mount point | Flags    |
|--------|-----------|----------------|-------------|----------|
| ❌      | /dev/sdXY | Linux swap     | -           | -        |
| ✔️      | /dev/sdXY | Linux          | /mnt        | Bootable |
| ❌      | /dev/sdXY | Linux          | /mnt/home   | -        |

#### GPT (BIOS)


### Size recommendations

#### EFI system
- At least: 150MB
- Recommended: 300MB

#### Swap

Taken from <https://docs.voidlinux.org/installation/live-images/partitions.html>

| System RAM | Recommended swap space | Swap space if using hibernation |
|------------|------------------------|---------------------------------|
| < 2GB      | 2x the amount of RAM   | 3x the amount of RAM            |
| 2-8GB      | Equal to amount of RAM | 2x the amount of RAM            |
| 8-64GB     | At least 4GB           | 1.5x the amount of RAM          |
| 64GB       | At least 4GB           | Hibernation not recommended     |

## Format partitions

### EFI system partition
```bash
mkfs.fat -F32 -n EFI /dev/sdXY
```

### Create root filesystem
💽 This will create the filesystem where the system will be installed on
```bash
mkfs.ext4 -L ROOT /dev/sdXY
```

### Create home partition filesystem
🏠 If you created a separate home partition
```bash
mkfs.ext4 -L HOME /dev/sdXY
```

### Create Swap
```bash
mkswap -L SWAP /dev/sdXY
swapon /dev/sdXY
```
