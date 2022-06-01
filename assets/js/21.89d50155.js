(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{397:function(a,t,s){"use strict";s.r(t);var e=s(26),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"post-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-installation"}},[a._v("#")]),a._v(" Post-Installation")]),a._v(" "),s("h2",{attrs:{id:"set-x11-keymap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-x11-keymap"}},[a._v("#")]),a._v(" Set X11 Keymap")]),a._v(" "),s("p",[a._v("⌨️ It's recommended to set this to your keymap. Some Display Manager and Desktop Environments use this (replace "),s("code",[a._v("yourkeymap")]),a._v(" with your keymap e.g. "),s("code",[a._v("de")]),a._v(")")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("localectl set-x11-keymap yourkeymap\n")])])]),s("h2",{attrs:{id:"wi-fi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wi-fi"}},[a._v("#")]),a._v(" Wi-Fi")]),a._v(" "),s("p",[a._v("📶 You can use "),s("code",[a._v("nmtui")]),a._v(" or "),s("code",[a._v("wifi-menu")]),a._v(" to configure your network profile")]),a._v(" "),s("h2",{attrs:{id:"oh-my-zsh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh"}},[a._v("#")]),a._v(" Oh My Zsh")]),a._v(" "),s("p",[a._v("🤖 A delightful & open source framework for Zsh")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n")])])]),s("h2",{attrs:{id:"oh-my-fish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-fish"}},[a._v("#")]),a._v(" Oh my Fish")]),a._v(" "),s("p",[a._v("🤖 The Fishshell Framework")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -L https://get.oh-my.fish "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" fish\n")])])]),s("h2",{attrs:{id:"aur-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aur-setup"}},[a._v("#")]),a._v(" AUR Setup")]),a._v(" "),s("p",[a._v("The Arch User Repository is a community-driven repository for Arch users. "),s("code",[a._v("yay")]),a._v(" is a pacman wrapper that allows installing AUR packages")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://aur.archlinux.org/yay.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" yay\nmakepkg -rsi\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf yay\n")])])]),s("p",[s("code",[a._v("paru")]),a._v(" is a good alternative to "),s("code",[a._v("yay")]),a._v(". It's easy to use due to its similarity with yay's CLI.\nTo install it, simply execute the following commands.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://aur.archlinux.org/paru.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" paru\nmakepkg -rsi\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf paru\n")])])]),s("h3",{attrs:{id:"cheat-sheet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cheat-sheet"}},[a._v("#")]),a._v(" Cheat sheet")]),a._v(" "),s("p",[a._v("(Unless explicitly mentioned, this also applies to "),s("code",[a._v("paru")]),a._v(")")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("yay")]),a._v(" Update system")]),a._v(" "),s("li",[s("code",[a._v("yay xyz")]),a._v(" Install xyz")]),a._v(" "),s("li",[s("code",[a._v("yay -Rns xyz")]),a._v(" Uninstall xyz")]),a._v(" "),s("li",[s("code",[a._v("yay -Rdd xyz")]),a._v(" Force remove xyz (should not be used)")]),a._v(" "),s("li",[s("code",[a._v("yay -Yc")]),a._v(" / "),s("code",[a._v("paru -c")]),a._v(" Uninstall not explicitly installed optional dependencies")]),a._v(" "),s("li",[s("code",[a._v("yay -Si xyz")]),a._v(" Show remote package")]),a._v(" "),s("li",[s("code",[a._v("yay -Qi xyz")]),a._v(" Show local package")]),a._v(" "),s("li",[s("code",[a._v("yay -Qq")]),a._v(" List installed packages")]),a._v(" "),s("li",[s("code",[a._v("yay -Qqe")]),a._v(" List explicitly installed packages")])]),a._v(" "),s("h2",{attrs:{id:"if-you-want-a-graphical-package-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-you-want-a-graphical-package-manager"}},[a._v("#")]),a._v(" If you want a graphical package manager")]),a._v(" "),s("p",[a._v("📦 I recommend only to use "),s("code",[a._v("yay")]),a._v("/"),s("code",[a._v("paru")]),a._v(" to update and install packages but (especially if you are a beginner) you may want a graphical package manager")]),a._v(" "),s("ul",[s("li",[a._v("Simple GTK: "),s("code",[a._v("yay -S gnome-packagekit")])]),a._v(" "),s("li",[a._v("Simple Qt: "),s("code",[a._v("yay -S apper")])]),a._v(" "),s("li",[a._v("Complex GTK: "),s("code",[a._v("yay -S pamac-aur")]),a._v(" (Most beginner-friendly)")]),a._v(" "),s("li",[a._v("Complex Qt: "),s("code",[a._v("yay -S octopi")])])]),a._v(" "),s("h2",{attrs:{id:"media-codecs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#media-codecs"}},[a._v("#")]),a._v(" Media Codecs")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S gst-libav gst-plugins-base gst-plugins-good gst-plugins-bad gst-plugins-ugly gstreamer-vaapi gst-transcoder x265 x264 lame\n")])])]),s("h2",{attrs:{id:"qt-theme-on-gtk-desktop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qt-theme-on-gtk-desktop"}},[a._v("#")]),a._v(" Qt theme on GTK Desktop")]),a._v(" "),s("p",[a._v("If you use a GTK desktop and want Qt apps to use your GTK Theme you have 2 choices")]),a._v(" "),s("p",[a._v("You need to install the Qt5 Style plugins for both")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S qt5-styleplugins\n")])])]),s("h3",{attrs:{id:"convert-gtk2-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#convert-gtk2-theme"}},[a._v("#")]),a._v(" Convert GTK2 theme")]),a._v(" "),s("p",[a._v("🧮 This may not look good with every GTK Theme")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"export QT_QPA_PLATFORMTHEME=gtk2"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.profile\n")])])]),s("h3",{attrs:{id:"qt5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qt5"}},[a._v("#")]),a._v(" Qt5")]),a._v(" "),s("p",[a._v("You can use Qt5Ct instead")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S qt5ct\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"export QT_QPA_PLATFORMTHEME=qt5ct"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.profile\n")])])]),s("h2",{attrs:{id:"if-you-want-to-read-apfs-partitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-you-want-to-read-apfs-partitions"}},[a._v("#")]),a._v(" If you want to read APFS Partitions")]),a._v(" "),s("p",[a._v("💽 If you have a Hackintosh installation you can use this to access your files from it")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S linux-apfs-rw-dkms-git\n")])])]),s("h2",{attrs:{id:"fonts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fonts"}},[a._v("#")]),a._v(" Fonts")]),a._v(" "),s("h3",{attrs:{id:"general-fonts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-fonts"}},[a._v("#")]),a._v(" General Fonts")]),a._v(" "),s("p",[a._v("🗛 Those are some essential font packages")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S adobe-source-sans-pro-fonts ttf-dejavu ttf-opensans noto-fonts freetype2 terminus-font ttf-bitstream-vera ttf-dejavu ttf-droid ttf-fira-mono ttf-fira-sans ttf-freefont ttf-inconsolata ttf-liberation libertinus-font\n")])])]),s("p",[a._v("If you want you can install all available fonts which takes about 1 GB of space")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S all-repository-fonts\n")])])]),s("h3",{attrs:{id:"windows-fonts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-fonts"}},[a._v("#")]),a._v(" Windows Fonts")]),a._v(" "),s("p",[a._v("🗛 If you want the Windows/Microsoft fonts (f.e. for Office Suites and required by certain games under Wine)")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://aur.archlinux.org/ttf-ms-win11.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ttf-ms-win11\n")])])]),s("p",[a._v("Read "),s("code",[a._v("PKGBUILD")]),a._v(" and copy all Windows files into the directory and then run "),s("code",[a._v("makepkg -rsi --skipchecksums")])]),a._v(" "),s("h3",{attrs:{id:"macos-fonts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-fonts"}},[a._v("#")]),a._v(" macOS Fonts")]),a._v(" "),s("p",[a._v("🗚 If you want the San Francisco Font by Apple")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S --mflags --skipchecksums otf-san-francisco otf-san-francisco-mono\n")])])]),s("h2",{attrs:{id:"nano-syntax-highlighting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nano-syntax-highlighting"}},[a._v("#")]),a._v(" Nano syntax highlighting")]),a._v(" "),s("p",[a._v("📃 This package provides syntax highlighting enhancements to the nano text editor")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S nano-syntax-highlighting\n")])])]),s("h2",{attrs:{id:"auto-clean-package-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-clean-package-cache"}},[a._v("#")]),a._v(" Auto clean package cache")]),a._v(" "),s("p",[a._v("🗑️ This will clear the package cache to only keep 1 version after every action")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yay -S pacman-contrib\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /etc/pacman.d/hooks\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v(" /etc/pacman.d/hooks/clean_package_cache.hook\n")])])]),s("details",{staticClass:"custom-block details"},[s("summary",[a._v("Click me to view the code")]),a._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token section"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("Trigger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Operation")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("Upgrade")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Operation")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("Install")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Operation")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("Remove")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("Package")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Target")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("*")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token section"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("Action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Description")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("Cleaning pacman cache...")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("When")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("PostTransaction")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/usr/bin/paccache -rk 2")]),a._v("\n")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);