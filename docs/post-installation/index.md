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

The Arch User Repository is a community-driven repository for Arch users. `paru` is a popular AUR helper that allows installing AUR packages.

::: code-group

```bash [paru]
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -rsi
cd .. && rm -rf paru
```

```bash [yay]
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -rsi
cd .. && rm -rf yay
```

:::

This guide shows commands for both `paru` and `yay` where applicable.

### Hold up

::: warning
Be careful when using AUR packages. You might need to re-build them when the dependencies in the repositories get updated.  
I recommend installing [rebuild-detector](https://github.com/maximbaz/rebuild-detector) to get notified when a package needs to be re-built.  
::: code-group

```bash [paru]
paru -S rebuild-detector
```

```bash [yay]
yay -S rebuild-detector
```
::::

### Cheat sheet

<div id="aur-cheat-sheet-paru" class="aur-cheat-sheet" data-helper="paru">

- `paru` Update system
- `paru xyz` Install xyz
- `paru -Rns xyz` Uninstall xyz
- `paru -Rdd xyz` Force remove xyz (should not be used)
- `paru -c` Uninstall not explicitly installed optional dependencies
- `paru -Si xyz` Show remote package
- `paru -Qi xyz` Show local package
- `paru -Qq` List installed packages
- `paru -Qqe` List explicitly installed packages
</div>

<div id="aur-cheat-sheet-yay" class="aur-cheat-sheet" data-helper="yay">

- `yay` Update system
- `yay xyz` Install xyz
- `yay -Rns xyz` Uninstall xyz
- `yay -Rdd xyz` Force remove xyz (should not be used)
- `yay -Yc` Uninstall not explicitly installed optional dependencies
- `yay -Si xyz` Show remote package
- `yay -Qi xyz` Show local package
- `yay -Qq` List installed packages
- `yay -Qqe` List explicitly installed packages
</div>

## Graphical package manager

📦 I recommend only to use `yay`/`paru` to update and install packages but (especially if you are a beginner) you may want a graphical package manager

### Simple GTK

::: code-group

```bash [paru]
paru -S gnome-packagekit
```

```bash [yay]
yay -S gnome-packagekit
```

:::

### Simple Qt

::: code-group

```bash [paru]
paru -S apper
```

```bash [yay]
yay -S apper
```

:::

### Complex GTK (Most beginner-friendly)

::: code-group

```bash [paru]
paru -S pamac-aur
```

```bash [yay]
yay -S pamac-aur
```

:::

### Complex Qt

::: code-group

```bash [paru]
paru -S octopi
```

```bash [yay]
yay -S octopi
```

:::

🛒 If you want an even easier to use GUI, you can install a Software Center. They can't install AUR packages though.

### GTK Software Center

::: code-group

```bash [paru]
paru -S gnome-software gnome-software-packagekit-plugin
```

```bash [yay]
yay -S gnome-software gnome-software-packagekit-plugin
```

:::

### Qt Software Center

::: code-group

```bash [paru]
paru -S discover packagekit-qt5
```

```bash [yay]
yay -S discover packagekit-qt5
```

:::
- GTK Software Center: `yay -S gnome-software`
- Qt Software Center: `yay -S discover packagekit-qt6`

## Media Codecs

::: code-group

```bash [paru]
paru -S gst-libav gst-plugins-base gst-plugins-good gst-plugins-bad gst-plugins-ugly gstreamer-vaapi x265 x264 lame
```

```bash [yay]
yay -S gst-libav gst-plugins-base gst-plugins-good gst-plugins-bad gst-plugins-ugly gstreamer-vaapi x265 x264 lame
```

:::

## Qt theme on GTK Desktop

If you use a GTK desktop and want Qt apps to use your GTK Theme you have 2 choices

You need to install the Qt5 Style plugins for both

::: code-group

```bash [paru]
paru -S qt5-styleplugins
```

```bash [yay]
yay -S qt5-styleplugins
```

:::

### Convert GTK2 theme

🧮 This may not look good with every GTK Theme

```bash
echo "export QT_QPA_PLATFORMTHEME=gtk2" >> ~/.profile
```

### Qt5

You can use Qt5Ct instead

::: code-group

```bash [paru]
paru -S qt5ct
echo "export QT_QPA_PLATFORMTHEME=qt5ct" >> ~/.profile
```

```bash [yay]
yay -S qt5ct
echo "export QT_QPA_PLATFORMTHEME=qt5ct" >> ~/.profile
```

:::

## If you want to read APFS Partitions

💽 If you have a Hackintosh installation you can use this to access your files from it

::: code-group

```bash [paru]
paru -S linux-apfs-rw-dkms-git
```

```bash [yay]
yay -S linux-apfs-rw-dkms-git
```

:::

## Fonts

### General Fonts

🗛 Those are some essential font packages

:::: code-group

```bash [paru]
paru -S adobe-source-sans-pro-fonts ttf-dejavu ttf-opensans noto-fonts freetype2 terminus-font ttf-bitstream-vera ttf-dejavu ttf-droid ttf-fira-mono ttf-fira-sans ttf-freefont ttf-inconsolata ttf-liberation libertinus-font
```

```bash [yay]
yay -S adobe-source-sans-pro-fonts ttf-dejavu ttf-opensans noto-fonts freetype2 terminus-font ttf-bitstream-vera ttf-dejavu ttf-droid ttf-fira-mono ttf-fira-sans ttf-freefont ttf-inconsolata ttf-liberation libertinus-font
```

::::
If you want you can install all available fonts which takes about 1 GB of space

```bash
yay -S all-repository-fonts
```

### Windows Fonts

🗛 If you want the Windows/Microsoft fonts (f.e. for Office Suites and required by certain games under Wine)

#### With an existing Windows Installation / ISO

When you have an existing Windows Installation / ISO you can use the following package script

```bash
git clone https://aur.archlinux.org/ttf-ms-win11.git
cd ttf-ms-win11
```

Read `PKGBUILD` and copy all Windows files into the directory and then run `makepkg -rsi --skipchecksums`

#### Without an existing Windows Installation / ISO

:::tip 

There's a package that automatically downloads and extracts the fonts

```bash
yay -S ttf-ms-win11-auto
```

:::


### macOS Fonts

🗚 If you want the San Francisco Font by Apple

```bash
yay -S otf-san-francisco otf-san-francisco-mono
```

## Nano syntax highlighting

📃 This package provides syntax highlighting enhancements to the nano text editor

```bash
yay -S nano-syntax-highlighting
```

## Auto clean package cache

⚠️The cache can get huge over time so it is strongly encouraged to install a hook like this

🗑️ This install a configurable hook to cleanup the pacman package cache

```bash
yay -S paccache-hook
sudo nano /etc/paccache-hook.conf # Configure to your liking
```
