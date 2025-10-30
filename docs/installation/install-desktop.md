# Install Desktop

## Display Server

🖥️ Choose between Xorg or Wayland as your display server

### Xorg

Xorg is a traditional display server

```bash
pacman -S xorg-server xorg-xinit xorg-xrandr xorg-xfontsel xorg-xlsfonts xorg-xkill xorg-xinput xorg-xwininfo
```

### Wayland

Wayland is a modern display server protocol. Most desktop environments (GNOME, KDE Plasma, etc.) include Wayland support out of the box — you typically do not install `wayland` by itself.

If you choose a desktop environment (e.g., GNOME, KDE Plasma, Xfce, Cinnamon), the display server is handled for you and Wayland support is included where applicable. You don't need to install Wayland separately.

See also <https://wiki.archlinux.org/title/Wayland>

## Desktop Environment

🗔 You need to select a desktop environment

- For beginners coming from Windows I recommend KDE Plasma or Cinnmaon.
- For a very resource friendy desktop I recommend Xfce or LXQt
- **The instructions for KDE Plasma are tested by me because I use it. Others should work but you may need some extra packages for productive use (pull requests are welcome)**

### KDE Plasma

```bash
pacman -S plasma kdialog kcalc icoutils libappimage konsole dolphin kdegraphics-thumbnailers svgpart ffmpegthumbs kdenetwork-filesharing gwenview kimageformats ark kate okular kcron kdf filelight print-manager
```

If you want to use KDE Connect (Pairing with Android phone)

```bash
pacman -S kdeconnect sshfs
```

See also <https://wiki.archlinux.org/title/KDE>

### Xfce

```bash
pacman -S xfce4 xfce4-goodies
```

See also <https://wiki.archlinux.org/title/Xfce>

### GNOME

```bash
pacman -S gnome gnome-extra
```

See also <https://wiki.archlinux.org/title/GNOME>

### LXDE

```bash
pacman -S lxde lxdm-gtk3
```

See also <https://wiki.archlinux.org/title/LXDE>

### LXQt

```bash
pacman -S lxqt breeze-icons pcmanfm-qt qterminal lxqt-sudo polkit-qt5
```

See also <https://wiki.archlinux.org/title/LXQt>

### Cinnamon

```bash
pacman -S cinnamon cinnamon-translations nemo-fileroller nemo-image-converter nemo-preview xed xreader gnome-terminal
```

See also <https://wiki.archlinux.org/title/Cinnamon>

### Budgie

```bash
pacman -S budgie-desktop network-manager-applet
```

See also <https://wiki.archlinux.org/title/Budgie>

### Mate

```bash
pacman -S mate mate-extra
```

See also <https://wiki.archlinux.org/title/MATE>

### Deepin

```bash
pacman -S deepin deepin-extra
nano /etc/lightdm/lightdm.conf
# append this line to use the deepin specific greeter
greeter-session=lightdm-deepin-greeter
```

See also <https://wiki.archlinux.org/title/Deepin>

## Display/Desktop Manager

🖥️ A display manager is basically your login screen where you enter your user details and select your Desktop Environment

### LXDM (Included with LXDE)

```bash
pacman -S lxdm-gtk3
systemctl enable lxdm
```

See also <https://wiki.archlinux.org/title/LXDM>

### SDDM (Included with KDE Plasma)

```bash
pacman -S sddm
systemctl enable --now sddm
```

See also <https://wiki.archlinux.org/title/SDDM>

### GDM (Included with GNOME/Budgie/MATE)

```bash
pacman -S gdm
systemctl enable --now gdm
```

See also <https://wiki.archlinux.org/title/GDM>

### LightDM

```bash
pacman -S lightdm lightdm-gtk-greeter
systemctl enable --now lightdm
```

See also <https://wiki.archlinux.org/title/LightDM>
