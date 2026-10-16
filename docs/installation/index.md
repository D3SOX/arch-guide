# Introduction

This guide installs Arch Linux with ext4, NetworkManager, PipeWire and a desktop of your choice. The main path uses UEFI and KDE Plasma on Wayland. GRUB on BIOS and LVM on LUKS encryption are covered as alternatives.

Read the pages in sidebar order. Commands in the installation section run as root in the live ISO, then inside `arch-chroot` where indicated. After reboot, use your regular user and `sudo` for administrative commands. Replace example device names, usernames and UUIDs before running commands.

The partitioning examples describe a fresh installation. Back up existing data first. For dual boot, preserve the existing EFI system partition and other operating systems' partitions; consult the [dual-boot documentation](https://wiki.archlinux.org/title/Dual_boot_with_Windows) before changing the layout.

## References and maintenance

Use the [ArchWiki installation guide](https://wiki.archlinux.org/title/Installation_guide) alongside these instructions. This guide includes personal choices and does not cover every hardware configuration.

Read [Arch Linux news](https://archlinux.org/news/) before upgrades: some changes require manual intervention. You can subscribe to [arch-announce](https://lists.archlinux.org/mailman3/lists/arch-announce.lists.archlinux.org/).

Content reviewed on 16 October 2026 against upstream documentation and package listings. The revised installation paths have not yet been boot-tested in a VM.

The original guide was inspired by [Ezarch](https://sourceforge.net/projects/ezarch/files/Project_Files/).
