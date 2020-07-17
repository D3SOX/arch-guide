# Install Bootloader

If you don't know which one you should use re-visit [Live Setup/Check if booted in BIOS or UEFI](./live-setup.md#check-if-booted-in-bios-or-uefi)

## UEFI
```bash
pacman -S grub os-prober efibootmgr dosfstools mtools gptfdisk fatresize
grub-install --target=x86_64-efi --bootloader-id=grub_uefi --efi-directory=/boot/efi --recheck
grub-mkconfig -o /boot/grub/grub.cfg
```

## BIOS
```bash
pacman -S grub os-prober
grub-install --target=i386-pc --recheck /dev/sdX
grub-mkconfig -o /boot/grub/grub.cfg
```
