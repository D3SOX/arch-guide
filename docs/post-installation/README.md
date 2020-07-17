---
sidebar: auto
---

# Post-Installation

## Set X11 Keymap
⌨️ It's recommended to set this to your keymap. Some Display Manager and Desktop Environments use this (replace `yourkeymap` with your keymap e.g. `de-latin1`)
```bash
localectl set-x11-keymap yourkeymap
```

## WiFi
📶 You can use `nmtui` or `wifi-menu` to configure your network profile

## Oh My Zsh
🤖 A delightful & open source framework for Zsh
```bash
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## Oh my Fish
🤖 The Fishshell Framework
```bash
curl -L https://get.oh-my.fish | fish
```

## AUR Setup
The Arch User Repository is a community-driven repository for Arch users. `yay` is a pacman wrapper that allows installing AUR packages
```bash
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -rsi
cd .. && rm -rf yay
```
## Yay Cheat sheet
- `yay` Update system
- `yay xyz` Install xyz
- `yay -Rns xyz` Uninstall xyz
- `yay -Rdd xyz` Force remove xyz (should not be used)
- `yay -Yc` Uninstall not explicitly installed optional dependencies
- `yay -Si xyz` Show remote package
- `yay -Qi xyz` Show local package
- `yay -Qq` List installed packages
- `yay -Qqe` List explicitly installed packages

## Firefox for KDE Plasma
Chromium based browsers make use of kdialog for file dialogs. Firefox does not.
OpenSUSE created a patched firefox which integrates better into the KDE Plasma Desktop.
```bash
yay -S firefox-kde-opensuse-rpm
```

## If you want a graphical package manager
📦 I recommend only to use ```yay``` to update and install packages but (especially if you are a beginner) you may want a graphical package manager
- Simple GTK: ```yay -S gnome-packagekit```
- Simple Qt: ```yay -S apper```
- Complex GTK: ```yay -S pamac-aur```
- Complex Qt: ```yay -S octopi```

## If you use a GTK desktop and want Qt apps to use your GTK Theme
🧮 This may not look good with every GTK Theme
```bash
yay -S qt5-styleplugins
echo "export QT_QPA_PLATFORMTHEME=gtk2" >> ~/.profile
```

## If you want to read APFS Partitions
💽 If you have a Hackintosh installation you can use this to access your files from it
```bash
yay -S linux-apfs-dkms-git
```

## Graphics card configuration tool

### AMD
```bash
yay -S radeon-profile-git radeon-profile-daemon-git
systemctl enable --now radeon-profile-daemon
```
### NVIDIA
```bash
yay -S nvidia-settings
```

## Fonts

### General Fonts
🗛 Those are some essential font packages
```bash
yay -S adobe-source-sans-pro-fonts ttf-dejavu ttf-opensans noto-fonts freetype2 terminus-font ttf-bitstream-vera ttf-dejavu ttf-droid ttf-fira-mono ttf-fira-sans ttf-freefont ttf-inconsolata ttf-liberation ttf-linux-libertine
```

### Windows Fonts
🗛 If you want the Windows/Microsoft fonts (f.e. for Office Suites and required by certain games under Wine)
```bash
git clone https://aur.archlinux.org/ttf-ms-win10.git
cd ttf-ms-win10
```
READ PKGBUILD and copy all windows files into the directory and then run `makepkg -rsi`

### macOS Fonts
🗚 If you want the San Francisco Font by Apple
```bash
yay -S otf-san-francisco-pro otf-san-francisco-mono
```

## Nano syntax highlighting
📃 This package provides syntax highlighting enhancements to the nano text editor
```bash
yay -S nano-syntax-highlighting
```

## Auto clean package cache
🗑️ This will clear the package cache to only keep 1 version after every action

```bash
sudo mkdir /etc/pacman.d/hooks
sudo nano /etc/pacman.d/hooks/clean_package_cache.hook
```
::: details Click me to view the code
```ini
[Trigger]
Operation = Upgrade
Operation = Install
Operation = Remove
Type = Package
Target = *
[Action]
Description = Cleaning pacman cache...
When = PostTransaction
Exec = /usr/bin/paccache -rk 2
```
:::

## Theming

If you are using KDE Plasma, I do not recommend using the built-in installation methods, as in my experience they're very buggy.

::: tip
These are the themes that I'm using on my KDE Plasma setup
:::

### General
Icon Theme
```bash
yay -S la-capitaine-icon-theme korla-icon-theme
```
Cursor Theme
```bash
yay -S capitaine-cursors
```

### Plasma & Qt
Plasma, Kvantum, SDDM Style
```bash
yay -S kvantum-qt5 whitesur-kde-theme-git
```
Color
```bash
yay -S materia-kde
```
Wallpaper
```bash
yay -S dynamic-wallpaper-mojave-kde-git dynamic-wallpaper-catalina-kde-git
```
Window Decoration
```bash
yay -S hello-kde-git
```
Effects
```bash
yay -S kwin-effects-appear1 kwin-effects-disappear1 kwin-effects-yet-another-magic-lamp kwin-scripts-forceblur
```
Latte Dock
```bash
yay -S latte-dock kwin-scripts-window-colors
```

### GTK & GNOME
GTK Theme
```bash
yay -S whitesur-gtk-theme-git
```
Wallpaper
```bash
yay -S dynamic-wallpaper-mojave-gnome-timed-git dynamic-wallpaper-catalina-gnome-timed-git
```
