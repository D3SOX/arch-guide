# Gaming

Run these commands as your regular user after installation. Start with the [graphics driver packages](/installation/useful-packages#graphics-drivers), including the matching 32-bit driver packages for Steam. Enable multilib in `/etc/pacman.conf` and run `sudo pacman -Syu` before installing 32-bit packages.

## Steam and Lutris

```bash
sudo pacman -S steam lutris
```

When pacman asks for a Vulkan driver provider, select the one matching your GPU. On hybrid systems, install the drivers needed by both GPUs.

Use Steam's supplied Proton first. Select a compatibility tool in a game's properties when needed. Lutris manages runners for games outside Steam; use its current runner integration rather than a separately downloaded nightly Wine package. See [Steam](https://wiki.archlinux.org/title/Steam) and [Lutris](https://wiki.archlinux.org/title/Lutris).

If a game specifically needs GE-Proton, [ProtonUp-Qt](https://github.com/DavidoTek/ProtonUp-Qt) can install it for supported launchers. `protonup-qt` is an optional AUR package:

```bash
paru -S protonup-qt
```

Use `yay` instead if that is your installed helper. The old Wine-GE project is archived; its [upstream README](https://github.com/GloriousEggroll/wine-ge-custom) points to the umu-based approach for running GE-Proton outside Steam. Follow your launcher's current integration.

## Standalone Wine

For Windows applications outside a managed launcher:

```bash
sudo pacman -S wine
```

`wine-staging` is an alternative when an application needs staging patches. Current Arch Wine packages use the new WoW64 mode, so do not copy old lists of dozens of `lib32-*` Wine dependencies. Steam's 32-bit graphics requirements still apply separately.

Existing 32-bit-only Wine prefixes may need recreation for the [WoW64 transition](https://archlinux.org/news/transition-to-the-new-wow64-wine-and-wine-staging/). Back up saves and application data before replacing a prefix; do not delete it blindly.

Modern Wine supports NTSync, and Arch packages supply its module-loading integration. Different Proton or Wine runners can use different synchronization implementations. Keep system-wide file-descriptor limits at their defaults unless a specific runner documents a need to change them. See [Wine synchronization primitives](https://wiki.archlinux.org/title/Wine#Synchronization_primitives).

## Optional performance tools

GameMode can temporarily change selected system settings while a game runs:

```bash
sudo pacman -S gamemode lib32-gamemode
```

For Steam games, set the launch option to `gamemoderun %command%` if you want to use it. See [GameMode](https://wiki.archlinux.org/title/GameMode) for configuration and testing.

For supported GPU monitoring and controls, [LACT](https://github.com/ilya-zlobintsev/LACT) is available in the official repositories:

```bash
sudo pacman -S lact
sudo systemctl enable --now lactd.service
```

Check hardware support before changing power, voltage or clock settings. NVIDIA users can also install `nvidia-settings`, although some controls are unavailable in Wayland sessions.

## Optional kernels

The standard Arch kernel is a suitable starting point. If you want to compare `linux-zen`, keep `linux` installed as a recovery option:

```bash
sudo pacman -S linux-zen
```

External modules need matching headers, such as `linux-zen-headers`. For Turing-or-newer NVIDIA hardware using the current driver, switch to `nvidia-open-dkms` and install headers for **every** installed kernel. Let pacman handle the conflicting prebuilt module package in the normal transaction. Legacy GPUs require their matching legacy DKMS branch; do not force-remove dependencies.

Regenerate initramfs images and check for module build errors:

```bash
sudo mkinitcpio -P
```

With GRUB:

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

With systemd-boot, copy your working `/boot/loader/entries/arch.conf` to `arch-zen.conf`, retain its root/encryption options, and change the title, `linux` and `initrd` lines to:

```text
title Arch Linux Zen
linux /vmlinuz-linux-zen
initrd /initramfs-linux-zen.img
```

Check `bootctl list` and the files in `/boot` before rebooting. Keep the original entry available.

More hardware-specific guidance is in [Gaming](https://wiki.archlinux.org/title/Gaming).
