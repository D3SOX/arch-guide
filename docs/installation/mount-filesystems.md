# Mount filesystems

Mount root first, substituting the root partition you created:

```bash
mount /dev/nvme0n1p2 /mnt
```

For UEFI, mount the EFI system partition at `/boot` inside the new system:

```bash
mount --mkdir /dev/nvme0n1p1 /mnt/boot
```

For BIOS, skip the ESP mount. If you created a separate home partition, mount it at `/mnt/home` using `mount --mkdir` and its actual device.

Check the result before installing:

```bash
findmnt -R /mnt
```

On UEFI, `/mnt/boot` must be mounted before `pacstrap` so the kernel and initramfs are written to the ESP.
