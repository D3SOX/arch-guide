# Configure the system

Use `nano` to edit files: Ctrl+O followed by Enter saves, and Ctrl+X exits.

## Hostname

Replace `myhostname` with your computer's name:

```bash
echo myhostname > /etc/hostname
```

## Locale and keyboard

Edit `/etc/locale.gen` and uncomment the UTF-8 locales you need, including `en_US.UTF-8` if using the example below:

```bash
nano /etc/locale.gen
locale-gen
echo LANG=en_US.UTF-8 > /etc/locale.conf
```

Set your console keymap before generating the initramfs. This example uses German; choose the layout you used in the live ISO:

```bash
echo KEYMAP=de-latin1 > /etc/vconsole.conf
```

Desktop keyboard layouts are configured separately after login.

## Time and networking

Replace `Region/City` with your timezone, for example `Europe/Berlin`:

```bash
ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
hwclock --systohc
systemctl enable systemd-timesyncd.service NetworkManager.service
```

NetworkManager handles the installed system's network connections. Wi-Fi credentials from the ISO are not copied automatically; connect again after reboot.

## Pacman

Edit `/etc/pacman.conf`. For Steam or other software requiring 32-bit libraries, uncomment both lines of the multilib repository:

```ini
[multilib]
Include = /etc/pacman.d/mirrorlist
```

Optionally enable `Color` and set `ParallelDownloads = 5` in the options section. After changing repositories, perform a full upgrade:

```bash
pacman -Syu
```

Avoid partial upgrades such as refreshing databases and installing packages without upgrading the system. See [System maintenance](https://wiki.archlinux.org/title/System_maintenance).
