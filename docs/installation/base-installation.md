# Base installation

## Mirrors

Optionally rank nearby HTTPS mirrors. Replace Germany with your country:

```bash
reflector --country Germany --age 15 --protocol https --sort rate --save /etc/pacman.d/mirrorlist
```

## Install the base system

Run this from the live ISO. Append `amd-ucode` for an AMD CPU or `intel-ucode` for an Intel CPU. For the encrypted layout, also append **`lvm2`**; `cryptsetup` is installed as a dependency of the base system.

```bash
pacstrap -K /mnt base linux linux-firmware networkmanager nano sudo man-db man-pages pciutils less
```

The default `microcode` initramfs hook includes installed CPU microcode. See [Microcode](https://wiki.archlinux.org/title/Microcode).

Kernel headers and DKMS are only needed for external kernel modules. Install headers matching each kernel when you need them.

## Generate fstab and enter the system

For this fresh installation, write the filesystem table and inspect it. Re-running this command replaces the file, so preserve any manual edits first:

```bash
genfstab -U /mnt > /mnt/etc/fstab
cat /mnt/etc/fstab
arch-chroot /mnt
```

The remaining installation commands run as root inside this chroot until the reboot page tells you to exit.
