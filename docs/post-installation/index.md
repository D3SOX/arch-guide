# Post-installation

Run these commands after reboot as your regular user. Commands needing administrative privileges use `sudo`.

## Network and keyboard

Connect Wi-Fi through your desktop's network settings or `nmtui`. The installed system uses NetworkManager; the ISO's `iwctl` setup is separate.

Set your keyboard layout in the desktop settings. For X11 sessions and display managers that use the system X11 layout, this example sets German:

```bash
sudo localectl set-x11-keymap de
```

This does not replace `/etc/vconsole.conf`, which controls the console and the encrypted-root unlock prompt. If you change that file on an encrypted system, regenerate the initramfs with `sudo mkinitcpio -P`.

## AUR packages

Use `sudo pacman -S package` for official repository packages. The [Arch User Repository](https://wiki.archlinux.org/title/Arch_User_Repository) contains user-maintained build instructions, not officially supported binary packages. Review the `PKGBUILD`, install scripts and source URLs before building, including when a helper offers to show changes.

Install build prerequisites:

```bash
sudo pacman -S --needed base-devel git
```

Choose one optional helper. Run `makepkg` as your regular user, never root. After cloning, read the build files before running the final command:

::: code-group

```bash [paru]
git clone https://aur.archlinux.org/paru.git
cd paru
less PKGBUILD
makepkg -si
cd ..
```

```bash [yay]
git clone https://aur.archlinux.org/yay.git
cd yay
less PKGBUILD
makepkg -si
cd ..
```

:::

Examples below use `paru`; substitute `yay` if that is your helper.

| Task | Command |
| --- | --- |
| Upgrade repository and AUR packages | `paru -Syu` |
| Install an AUR package | `paru -S package` |
| Inspect installed package information | `pacman -Qi package` |
| Remove a package and unneeded dependencies | `sudo pacman -Rns package` |
| List foreign packages, including AUR packages | `pacman -Qm` |

Review removal lists before confirming. Do not bypass dependency checks to force a package replacement.

AUR packages may need rebuilding after library upgrades. The official `rebuild-detector` package helps find affected packages:

```bash
sudo pacman -S rebuild-detector
```

## Software centers and Flatpak

For Plasma:

```bash
sudo pacman -S discover flatpak fwupd
```

For GNOME:

```bash
sudo pacman -S gnome-software flatpak fwupd
```

Configure remotes using the [Flatpak setup instructions](https://flathub.org/en/setup/Arch). These software centers can manage Flatpaks and supported firmware updates. Repository package support depends on installed backends such as PackageKit; they do not replace AUR review or Arch's manual upgrade interventions. This guide uses pacman for repository packages.

[Bazaar](https://flathub.org/apps/io.github.kolunmi.Bazaar) is another Flatpak-focused option. After configuring Flathub:

```bash
flatpak install flathub io.github.kolunmi.Bazaar
```

## Media codecs

For applications using GStreamer:

```bash
sudo pacman -S gst-libav gst-plugins-base gst-plugins-good gst-plugins-bad gst-plugins-ugly
```

Install `gst-plugin-va` if you need GStreamer VA-API acceleration and have a supported video driver. Other players may use their own codec stack; see [GStreamer](https://wiki.archlinux.org/title/GStreamer).

## Fonts

A small general-purpose selection is:

```bash
sudo pacman -S noto-fonts noto-fonts-emoji ttf-liberation
```

Add `noto-fonts-cjk` for Chinese, Japanese and Korean coverage. Choose additional fonts for the languages and applications you use instead of installing every font package. See [Fonts](https://wiki.archlinux.org/title/Fonts).

### Windows and macOS fonts

If you need Microsoft fonts, the AUR's `ttf-ms-win11` build instructions describe the required files from a Windows installation or ISO. Review the current `PKGBUILD` and its licensing requirements, supply the matching sources, and build normally with `makepkg -si`. Resolve source or checksum mismatches instead of disabling integrity checks.

Apple's San Francisco fonts are optional and have their own licensing terms. Check the current AUR build instructions for `otf-san-francisco` and `otf-san-francisco-mono` if you need them.

## Qt applications on GTK desktops

`qt6ct` can configure Qt 6 applications outside Plasma. Follow [Qt's configuration guidance](https://wiki.archlinux.org/title/Qt#Configuration) for setting `QT_QPA_PLATFORMTHEME=qt6ct` in your session's environment. Do not set it globally on Plasma, which supplies its own integration. A Wayland session does not necessarily read `~/.profile`.

## APFS access

The official repository contains `linux-apfs-rw-dkms`. Install the headers for your kernel alongside it, for example `linux-headers` for `linux`:

```bash
sudo pacman -S linux-headers linux-apfs-rw-dkms
```

The [upstream driver](https://github.com/linux-apfs/linux-apfs-rw) mounts read-only by default. Write support is experimental and can corrupt data; encrypted APFS volumes are unsupported. Keep valuable data backed up and use read-only access.

## Nano syntax highlighting

Optional additional syntax definitions are available with:

```bash
sudo pacman -S nano-syntax-highlighting
```

Follow the package's configuration instructions to enable the definitions you need.

## Package cache and regular updates

Use the official cache-cleaning timer, which retains three versions of cached packages by default:

```bash
sudo pacman -S pacman-contrib
sudo systemctl enable --now paccache.timer
```

Keeping recent packages helps with recovery. Read [system maintenance and backups](/tweaks/) before your next upgrade.
