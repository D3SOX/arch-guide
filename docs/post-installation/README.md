---
sidebar: auto
---

# Post-Installation

## Set X11 Keymap
⌨️ It's recommended to set this to your keymap. Some Display Manager and Desktop Environments use this (replace `yourkeymap` with your keymap e.g. `de`)
```bash
localectl set-x11-keymap yourkeymap
```

## Wi-Fi
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

## If you want a graphical package manager
📦 I recommend only to use ```yay``` to update and install packages but (especially if you are a beginner) you may want a graphical package manager
- Simple GTK: ```yay -S gnome-packagekit```
- Simple Qt: ```yay -S apper```
- Complex GTK: ```yay -S pamac-aur``` (Most beginner-friendly)
- Complex Qt: ```yay -S octopi```

## Qt theme on GTK Desktop

If you use a GTK desktop and want Qt apps to use your GTK Theme you have 2 choices

You need to install the Qt5 Style plugins for both
```bash
yay -S qt5-styleplugins
```

### Convert GTK2 theme

🧮 This may not look good with every GTK Theme
```bash
echo "export QT_QPA_PLATFORMTHEME=gtk2" >> ~/.profile
```
### Qt5
You can use Qt5Ct instead
```bash
yay -S qt5ct
echo "export QT_QPA_PLATFORMTHEME=qt5ct" >> ~/.profile
```

## If you want to read APFS Partitions
💽 If you have a Hackintosh installation you can use this to access your files from it
```bash
yay -S linux-apfs-dkms-git
```

## Fonts

### General Fonts
🗛 Those are some essential font packages
```bash
yay -S adobe-source-sans-pro-fonts ttf-dejavu ttf-opensans noto-fonts freetype2 terminus-font ttf-bitstream-vera ttf-dejavu ttf-droid ttf-fira-mono ttf-fira-sans ttf-freefont ttf-inconsolata ttf-liberation libertinus-font
```

### Windows Fonts
🗛 If you want the Windows/Microsoft fonts (f.e. for Office Suites and required by certain games under Wine)
```bash
git clone https://aur.archlinux.org/ttf-ms-win10.git
cd ttf-ms-win10
```
Read `PKGBUILD` and copy all Windows files into the directory and then run `makepkg -rsi --skipchecksums`

### macOS Fonts
🗚 If you want the San Francisco Font by Apple
```bash
yay -S --mflags --skipchecksums otf-san-francisco otf-san-francisco-mono
```

## Nano syntax highlighting
📃 This package provides syntax highlighting enhancements to the nano text editor
```bash
yay -S nano-syntax-highlighting
```

## Auto clean package cache
🗑️ This will clear the package cache to only keep 1 version after every action

```bash
yay -S pacman-contrib
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
