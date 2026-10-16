# Install a desktop

Choose one desktop and one display manager. These commands still run inside the chroot; enable services here without `--now`. They start after reboot. If your GPU needs a legacy AUR driver, install the desktop packages but skip enabling its display manager until you have followed the [NVIDIA instructions](/installation/useful-packages#nvidia).

## KDE Plasma

Plasma is the main desktop used in this guide. [Plasma 6.8](https://kde.org/announcements/plasma/6/6.8.0/) uses Wayland; X11 applications run through Xwayland.

```bash
pacman -S plasma konsole dolphin kate ark gwenview okular xorg-xwayland
systemctl enable plasmalogin.service
```

The `plasma` group includes [Plasma Login Manager](https://wiki.archlinux.org/title/Plasma_Login_Manager). Accept the group selection to install it. SDDM is an alternative; if choosing it, install `sddm` and enable `sddm.service` instead. Enable only one login service.

Optional applications include `kcalc`, `filelight`, `kdegraphics-thumbnailers`, `ffmpegthumbs` and `kdeconnect`. Install `sshfs` if you need KDE Connect's filesystem browsing.

See [KDE](https://wiki.archlinux.org/title/KDE) for session and hardware troubleshooting.

## Other desktops

Install only the row you choose. The display manager column identifies the additional package and service to enable. Consult the linked desktop page for session-specific setup; Wayland support varies between desktops.

| Desktop | Packages or groups | Display manager |
| --- | --- | --- |
| [GNOME](https://wiki.archlinux.org/title/GNOME) | `gnome` (`gnome-extra` optional) | `gdm`; enable `gdm.service` |
| [Xfce](https://wiki.archlinux.org/title/Xfce) | `xorg-server xfce4 xfce4-goodies` | LightDM, below |
| [LXDE](https://wiki.archlinux.org/title/LXDE) | `xorg-server lxde lxdm` | Enable `lxdm.service` |
| [LXQt](https://wiki.archlinux.org/title/LXQt) | `xorg-server lxqt breeze-icons sddm` | Enable `sddm.service`; see the wiki for the separate Wayland setup |
| [Cinnamon](https://wiki.archlinux.org/title/Cinnamon) | `xorg-server cinnamon xed xreader gnome-terminal` | LightDM, below |
| [Budgie](https://wiki.archlinux.org/title/Budgie) | `budgie gdm` | Enable `gdm.service`; current Budgie uses Wayland |
| [MATE](https://wiki.archlinux.org/title/MATE) | `xorg-server mate mate-extra` | LightDM, below |
| [Deepin](https://wiki.archlinux.org/title/Deepin) | `deepin deepin-extra` | Follow its wiki's LightDM and greeter configuration |

For rows using LightDM:

```bash
pacman -S lightdm lightdm-gtk-greeter
nano /etc/lightdm/lightdm.conf
```

Set `greeter-session=lightdm-gtk-greeter` in the `[Seat:*]` section, then enable the service:

```bash
systemctl enable lightdm.service
```

Xorg normally uses the modesetting driver and libinput. Do not install every graphics driver or legacy input driver. Wayland desktops provide their own compositor; installing the `wayland` package alone does not create a desktop session.
