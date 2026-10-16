# Reboot

Before leaving the chroot, confirm:

- `/etc/fstab` has the intended root and, on UEFI, `/boot` mounts.
- Your user has a password and sudo access.
- NetworkManager and your chosen display manager are enabled. For a console-first legacy NVIDIA installation, leave the display manager disabled.
- `mkinitcpio -P` and bootloader installation completed without errors.
- Encrypted installations have `lvm2`, the systemd encryption hooks and the correct LUKS UUID in their boot configuration.

Exit, unmount and reboot:

```bash
exit
umount -R /mnt
reboot
```

Remove the installation media when the machine restarts. Log in as your regular user and continue with [post-installation](/post-installation/). If the system does not boot, use the [recovery steps](/tweaks/#recover-from-the-installation-iso).
