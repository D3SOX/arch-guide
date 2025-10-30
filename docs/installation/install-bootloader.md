# Install Bootloader

::: tip
When doing disk encryption, finish the steps on the [encryption page](/encryption/#adjust-linux-kernel-hooks).
It will guide you back to the main installation when needed.
:::

If you don't know which one you should use re-visit [Live Setup/Check if booted in BIOS or UEFI](./live-setup.md#check-if-booted-in-bios-or-uefi)

## BIOS

```bash
pacman -S grub
grub-install --target=i386-pc --recheck /dev/sdX
grub-mkconfig -o /boot/grub/grub.cfg
```

[Enable OS Prober](#enable-os-prober) also applies here for enabling detection of other operating systems.

## UEFI

You can choose between GRUB or systemd-boot for UEFI systems.

### GRUB

```bash
pacman -S grub efibootmgr dosfstools mtools gptfdisk fatresize
grub-install --target=x86_64-efi --bootloader-id=grub_uefi --efi-directory=/boot/efi --recheck
grub-mkconfig -o /boot/grub/grub.cfg
```

### Enable OS Prober

To enable other OS detection

```bash
pacman -S os-prober
sed -i 's/^#\?GRUB_DISABLE_OS_PROBER=.*/GRUB_DISABLE_OS_PROBER=false/' /etc/default/grub
grub-mkconfig -o /boot/grub/grub.cfg
```

See also <https://wiki.archlinux.org/title/GRUB>

### systemd-boot

systemd-boot is a simple UEFI boot manager that integrates with systemd. It's already included with systemd.

```bash
bootctl install
```

Create the loader configuration file:

```bash
nano /boot/loader/loader.conf
```

Add the following:

```
default  arch
timeout  4
editor   0
```

Create a boot entry for Arch Linux. First, find your root partition's PARTUUID (or use the filesystem UUID):

```bash
blkid -s PARTUUID -o value /dev/sdXn
```

Replace `/dev/sdXn` with your actual root partition device.

Create the boot entry:

```bash
nano /boot/loader/entries/arch.conf
```

Add the following (replace `<your-root-partition-uuid>` with the PARTUUID from above). If your ESP is mounted at `/boot/efi`, ensure `linux`/`initrd` paths are correct for that mount:

```
title   Arch Linux
linux   /vmlinuz-linux
initrd  /intel-ucode.img  # or /amd-ucode.img
initrd  /initramfs-linux.img
options root=PARTUUID/<your-root-partition-uuid> rw
```

::: tip Note
If you're using encryption or other special configurations, you may need to adjust the `options` line (e.g. `rd.luks.name=... root=/dev/mapper/...`). Refer to the [Arch Wiki](https://wiki.archlinux.org/title/systemd-boot) for advanced configurations. Consider using systemd's `kernel-install` and unified kernel images (UKI) for automatic entry management.
:::