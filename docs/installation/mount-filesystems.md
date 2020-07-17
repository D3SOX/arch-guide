# Mount file systems
💽 Mount root filesystem:
```bash
mount /dev/sdXY /mnt
```

▶️ Only UEFI
```bash
mkdir -p /mnt/boot/efi
mount /dev/sdXY /mnt/boot/efi
```

🏠 If you created a separate home partiton:
```bash
mkdir /mnt/home
mount /dev/sdXY /mnt/home
```
