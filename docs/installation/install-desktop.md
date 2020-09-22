# Install Desktop

## Display Server
🖥️ Xorg is the display server we will use
```bash
pacman -S xorg-server xorg-xinit xorg-xrandr xorg-xfontsel xorg-xlsfonts xorg-xkill xorg-xinput xorg-xwininfo
```

## Desktop Environment

🗔 You need to select a desktop environment

- For beginners coming from Windows I recommend KDE Plasma or Cinnmaon.
- For a very resource friendy desktop I recommend Xfce or LXQt
- **The instructions for KDE Plasma are tested by me because I use it. Others should work but you may need some extra packages for productive use (pull requests are welcome)**

### KDE Plasma
```bash
pacman -S plasma kdialog packagekit-qt5 kcalc icoutils libappimage konsole dolphin kdegraphics-thumbnailers svgpart ffmpegthumbs kdenetwork-filesharing gwenview kimageformats ark kate okular kcron kdf filelight print-manager
```
If you want to use KDE Connect (Pairing with Android phone)
```bash
pacman -S kdeconnect sshfs
```
See also <https://wiki.archlinux.org/index.php/KDE>
### Xfce
```bash
pacman -S xfce4 xfce4-goodies
```
See also <https://wiki.archlinux.org/index.php/Xfce>
### GNOME
```bash
pacman -S gnome gnome-extra
```
See also <https://wiki.archlinux.org/index.php/GNOME>
### LXDE
```bash
pacman -S lxde lxdm-gtk3
```
See also <https://wiki.archlinux.org/index.php/LXDE>
### LXQt
```bash
pacman -S lxqt breeze-icons pcmanfm-qt qterminal lxqt-sudo polkit-qt5
```
See also <https://wiki.archlinux.org/index.php/LXQt>
### Cinnamon
```bash
pacman -S cinnamon cinnamon-translations nemo-fileroller nemo-image-converter nemo-preview xed xreader gnome-terminal metacity gnome-shell
```
See also <https://wiki.archlinux.org/index.php/Cinnamon>
### Budgie
```bash
pacman -S budgie-desktop network-manager-applet gnome
```
See also <https://wiki.archlinux.org/index.php/Budgie>
### Mate
```bash
pacman -S mate mate-extra gdm
```
See also <https://wiki.archlinux.org/index.php/MATE>
### Deepin
```bash
pacman -S deepin deepin-extra
nano /etc/lightdm/lightdm.conf
greeter-session=lightdm-deepin-greeter
```
See also <https://wiki.archlinux.org/index.php/Deepin>

## Display/Desktop Manager
🖥️ A display manager is basically your login screen where you enter your user details and select your Desktop Environment

### LXDM (Included with LXDE)
```bash
pacman -S lxdm-gtk3
systemctl enable lxdm
```
See also <https://wiki.archlinux.org/index.php/LXDM>

### SDDM (Included with KDE Plasma)
```bash
pacman -S sddm
systemctl enable sddm
```
See also <https://wiki.archlinux.org/index.php/SDDM>

### GDM (Included with GNOME/Budgie/MATE)
```bash
pacman -S gdm
systemctl enable gdm
```
See also <https://wiki.archlinux.org/index.php/GDM>

### LightDM
```bash
pacman -S lightdm lightdm-gtk-greeter
systemctl enable lightdm
```
See also <https://wiki.archlinux.org/index.php/LightDM>
