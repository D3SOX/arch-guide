# Partitioning and formatting

For encryption, follow the [encryption page](/encryption/) instead of this page and the mounting page. It returns you to base installation.

## Identify the disk

```bash
lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINTS,MODEL
```

The examples use `/dev/nvme0n1`, with partitions such as `/dev/nvme0n1p1`. SATA disks commonly use `/dev/sda` and `/dev/sda1`. Substitute your actual devices throughout.

::: danger Data loss
Partitioning and formatting can destroy existing data. Check the disk model, size and existing partitions before writing changes. Only format partitions intended for this installation.
:::

Use the interactive terminal partition editor:

```bash
cfdisk /dev/nvme0n1
```

## UEFI with GPT

For a new disk, create a GPT partition table and this layout:

| Example partition | Size | Type | Mount point |
| --- | --- | --- | --- |
| `/dev/nvme0n1p1` | 1 GiB | EFI System | `/boot` |
| `/dev/nvme0n1p2` | Remaining space | Linux filesystem | `/` |

Both bootloaders in this guide use the ESP at `/boot`, so it holds the kernels and initramfs images too. If reusing an existing ESP, check its free space and **do not format it**. An undersized shared ESP needs a different layout; see [EFI system partition](https://wiki.archlinux.org/title/EFI_system_partition).

For a new ESP only:

```bash
mkfs.fat -F32 -n EFI /dev/nvme0n1p1
```

Format the new root partition:

```bash
mkfs.ext4 -L ROOT /dev/nvme0n1p2
```

## BIOS

Use GRUB. On a DOS/MBR partition table, create a Linux root partition; there is no ESP. On GPT, also create a 1 MiB **BIOS boot** partition (gdisk type `ef02`), leaving it unformatted and unmounted. Format only the Linux root partition with ext4, substituting its actual device in the command above.

See [GRUB installation](https://wiki.archlinux.org/title/GRUB#Installation) for firmware-specific requirements.

## Optional home and swap partitions

A separate `/home` partition is optional. If creating one, format it with `mkfs.ext4` and mount it after root. Do not format an existing home filesystem you intend to keep.

Swap size depends on workload and whether you need hibernation. You can start without disk swap and configure [zram](/tweaks/#memory-and-swap) later. Zram cannot hold a hibernation image. For hibernation, plan disk-backed swap and [resume configuration](https://wiki.archlinux.org/title/Power_management/Suspend_and_hibernate#Hibernation) before choosing sizes.

If you created a swap partition, replace the example device below with that partition:

```bash
mkswap -L SWAP /dev/nvme0n1p3
swapon /dev/nvme0n1p3
```
