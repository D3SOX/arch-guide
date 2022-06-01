(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{390:function(a,e,t){"use strict";t.r(e);var r=t(26),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"install-desktop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-desktop"}},[a._v("#")]),a._v(" Install Desktop")]),a._v(" "),t("h2",{attrs:{id:"display-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#display-server"}},[a._v("#")]),a._v(" Display Server")]),a._v(" "),t("p",[a._v("🖥️ Xorg is the display server we will use")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S xorg-server xorg-xinit xorg-xrandr xorg-xfontsel xorg-xlsfonts xorg-xkill xorg-xinput xorg-xwininfo\n")])])]),t("h2",{attrs:{id:"desktop-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#desktop-environment"}},[a._v("#")]),a._v(" Desktop Environment")]),a._v(" "),t("p",[a._v("🗔 You need to select a desktop environment")]),a._v(" "),t("ul",[t("li",[a._v("For beginners coming from Windows I recommend KDE Plasma or Cinnmaon.")]),a._v(" "),t("li",[a._v("For a very resource friendy desktop I recommend Xfce or LXQt")]),a._v(" "),t("li",[t("strong",[a._v("The instructions for KDE Plasma are tested by me because I use it. Others should work but you may need some extra packages for productive use (pull requests are welcome)")])])]),a._v(" "),t("h3",{attrs:{id:"kde-plasma"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kde-plasma"}},[a._v("#")]),a._v(" KDE Plasma")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S plasma kdialog packagekit-qt5 kcalc icoutils libappimage konsole dolphin kdegraphics-thumbnailers svgpart ffmpegthumbs kdenetwork-filesharing gwenview kimageformats ark kate okular kcron kdf filelight print-manager\n")])])]),t("p",[a._v("If you want to use KDE Connect (Pairing with Android phone)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S kdeconnect sshfs\n")])])]),t("p",[a._v("See also "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/KDE",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/KDE"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"xfce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xfce"}},[a._v("#")]),a._v(" Xfce")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S xfce4 xfce4-goodies\n")])])]),t("p",[a._v("See also "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Xfce",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/Xfce"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"gnome"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gnome"}},[a._v("#")]),a._v(" GNOME")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S gnome gnome-extra\n")])])]),t("p",[a._v("See also "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/GNOME",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/GNOME"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"lxde"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lxde"}},[a._v("#")]),a._v(" LXDE")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S lxde lxdm-gtk3\n")])])]),t("p",[a._v("See also "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/LXDE",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/LXDE"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"lxqt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lxqt"}},[a._v("#")]),a._v(" LXQt")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S lxqt breeze-icons pcmanfm-qt qterminal lxqt-sudo polkit-qt5\n")])])]),t("p",[a._v("See also "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/LXQt",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/LXQt"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"cinnamon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cinnamon"}},[a._v("#")]),a._v(" Cinnamon")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S cinnamon cinnamon-translations nemo-fileroller nemo-image-converter nemo-preview xed xreader gnome-terminal metacity gnome-shell\n")])])]),t("p",[a._v("See also "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Cinnamon",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/Cinnamon"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"budgie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#budgie"}},[a._v("#")]),a._v(" Budgie")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S budgie-desktop network-manager-applet gnome\n")])])]),t("p",[a._v("See also "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Budgie",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/Budgie"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"mate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mate"}},[a._v("#")]),a._v(" Mate")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S mate mate-extra gdm\n")])])]),t("p",[a._v("See also "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/MATE",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/MATE"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"deepin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deepin"}},[a._v("#")]),a._v(" Deepin")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S deepin deepin-extra\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v(" /etc/lightdm/lightdm.conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# append this line to use the deepin specific greeter")]),a._v("\ngreeter-session"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("lightdm-deepin-greeter\n")])])]),t("p",[a._v("See also "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Deepin",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/Deepin"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"display-desktop-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#display-desktop-manager"}},[a._v("#")]),a._v(" Display/Desktop Manager")]),a._v(" "),t("p",[a._v("🖥️ A display manager is basically your login screen where you enter your user details and select your Desktop Environment")]),a._v(" "),t("h3",{attrs:{id:"lxdm-included-with-lxde"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lxdm-included-with-lxde"}},[a._v("#")]),a._v(" LXDM (Included with LXDE)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S lxdm-gtk3\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" lxdm\n")])])]),t("p",[a._v("See also "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/LXDM",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/LXDM"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"sddm-included-with-kde-plasma"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sddm-included-with-kde-plasma"}},[a._v("#")]),a._v(" SDDM (Included with KDE Plasma)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S sddm\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" sddm\n")])])]),t("p",[a._v("See also "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/SDDM",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/SDDM"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"gdm-included-with-gnome-budgie-mate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gdm-included-with-gnome-budgie-mate"}},[a._v("#")]),a._v(" GDM (Included with GNOME/Budgie/MATE)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S gdm\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" gdm\n")])])]),t("p",[a._v("See also "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/GDM",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/GDM"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"lightdm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lightdm"}},[a._v("#")]),a._v(" LightDM")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pacman -S lightdm lightdm-gtk-greeter\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" lightdm\n")])])]),t("p",[a._v("See also "),t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/LightDM",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wiki.archlinux.org/index.php/LightDM"),t("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);