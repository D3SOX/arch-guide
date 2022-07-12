import{_ as a,c as s,o as e,a as n}from"./app.cbe8ab49.js";const g=JSON.parse('{"title":"Post-Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Set X11 Keymap","slug":"set-x11-keymap"},{"level":2,"title":"Wi-Fi","slug":"wi-fi"},{"level":2,"title":"Oh My Zsh","slug":"oh-my-zsh"},{"level":2,"title":"Oh my Fish","slug":"oh-my-fish"},{"level":2,"title":"AUR Setup","slug":"aur-setup"},{"level":3,"title":"Cheat sheet","slug":"cheat-sheet"},{"level":2,"title":"If you want a graphical package manager","slug":"if-you-want-a-graphical-package-manager"},{"level":2,"title":"Media Codecs","slug":"media-codecs"},{"level":2,"title":"Qt theme on GTK Desktop","slug":"qt-theme-on-gtk-desktop"},{"level":3,"title":"Convert GTK2 theme","slug":"convert-gtk2-theme"},{"level":3,"title":"Qt5","slug":"qt5"},{"level":2,"title":"If you want to read APFS Partitions","slug":"if-you-want-to-read-apfs-partitions"},{"level":2,"title":"Fonts","slug":"fonts"},{"level":3,"title":"General Fonts","slug":"general-fonts"},{"level":3,"title":"Windows Fonts","slug":"windows-fonts"},{"level":3,"title":"macOS Fonts","slug":"macos-fonts"},{"level":2,"title":"Nano syntax highlighting","slug":"nano-syntax-highlighting"},{"level":2,"title":"Auto clean package cache","slug":"auto-clean-package-cache"}],"relativePath":"post-installation/index.md","lastUpdated":1657637696000}'),l={name:"post-installation/index.md"},o=n(`<h1 id="post-installation" tabindex="-1">Post-Installation <a class="header-anchor" href="#post-installation" aria-hidden="true">#</a></h1><h2 id="set-x11-keymap" tabindex="-1">Set X11 Keymap <a class="header-anchor" href="#set-x11-keymap" aria-hidden="true">#</a></h2><p>\u2328\uFE0F It&#39;s recommended to set this to your keymap. Some Display Manager and Desktop Environments use this (replace <code>yourkeymap</code> with your keymap e.g. <code>de</code>)</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">localectl set-x11-keymap yourkeymap</span></span>
<span class="line"></span></code></pre></div><h2 id="wi-fi" tabindex="-1">Wi-Fi <a class="header-anchor" href="#wi-fi" aria-hidden="true">#</a></h2><p>\u{1F4F6} You can use <code>nmtui</code> or <code>wifi-menu</code> to configure your network profile</p><h2 id="oh-my-zsh" tabindex="-1">Oh My Zsh <a class="header-anchor" href="#oh-my-zsh" aria-hidden="true">#</a></h2><p>\u{1F916} A delightful &amp; open source framework for Zsh</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sh -c </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="oh-my-fish" tabindex="-1">Oh my Fish <a class="header-anchor" href="#oh-my-fish" aria-hidden="true">#</a></h2><p>\u{1F916} The Fishshell Framework</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">curl -L https://get.oh-my.fish </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> fish</span></span>
<span class="line"></span></code></pre></div><h2 id="aur-setup" tabindex="-1">AUR Setup <a class="header-anchor" href="#aur-setup" aria-hidden="true">#</a></h2><p>The Arch User Repository is a community-driven repository for Arch users. <code>yay</code> is a pacman wrapper that allows installing AUR packages</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git clone https://aur.archlinux.org/yay.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> yay</span></span>
<span class="line"><span style="color:#A6ACCD;">makepkg -rsi</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> .. </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> rm -rf yay</span></span>
<span class="line"></span></code></pre></div><p><code>paru</code> is a good alternative to <code>yay</code>. It&#39;s easy to use due to its similarity with yay&#39;s CLI. To install it, simply execute the following commands.</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git clone https://aur.archlinux.org/paru.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> paru</span></span>
<span class="line"><span style="color:#A6ACCD;">makepkg -rsi</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> .. </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> rm -rf paru</span></span>
<span class="line"></span></code></pre></div><h3 id="cheat-sheet" tabindex="-1">Cheat sheet <a class="header-anchor" href="#cheat-sheet" aria-hidden="true">#</a></h3><p>(Unless explicitly mentioned, this also applies to <code>paru</code>)</p><ul><li><code>yay</code> Update system</li><li><code>yay xyz</code> Install xyz</li><li><code>yay -Rns xyz</code> Uninstall xyz</li><li><code>yay -Rdd xyz</code> Force remove xyz (should not be used)</li><li><code>yay -Yc</code> / <code>paru -c</code> Uninstall not explicitly installed optional dependencies</li><li><code>yay -Si xyz</code> Show remote package</li><li><code>yay -Qi xyz</code> Show local package</li><li><code>yay -Qq</code> List installed packages</li><li><code>yay -Qqe</code> List explicitly installed packages</li></ul><h2 id="if-you-want-a-graphical-package-manager" tabindex="-1">If you want a graphical package manager <a class="header-anchor" href="#if-you-want-a-graphical-package-manager" aria-hidden="true">#</a></h2><p>\u{1F4E6} I recommend only to use <code>yay</code>/<code>paru</code> to update and install packages but (especially if you are a beginner) you may want a graphical package manager</p><ul><li>Simple GTK: <code>yay -S gnome-packagekit</code></li><li>Simple Qt: <code>yay -S apper</code></li><li>Complex GTK: <code>yay -S pamac-aur</code> (Most beginner-friendly)</li><li>Complex Qt: <code>yay -S octopi</code></li></ul><h2 id="media-codecs" tabindex="-1">Media Codecs <a class="header-anchor" href="#media-codecs" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S gst-libav gst-plugins-base gst-plugins-good gst-plugins-bad gst-plugins-ugly gstreamer-vaapi gst-transcoder x265 x264 lame</span></span>
<span class="line"></span></code></pre></div><h2 id="qt-theme-on-gtk-desktop" tabindex="-1">Qt theme on GTK Desktop <a class="header-anchor" href="#qt-theme-on-gtk-desktop" aria-hidden="true">#</a></h2><p>If you use a GTK desktop and want Qt apps to use your GTK Theme you have 2 choices</p><p>You need to install the Qt5 Style plugins for both</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S qt5-styleplugins</span></span>
<span class="line"></span></code></pre></div><h3 id="convert-gtk2-theme" tabindex="-1">Convert GTK2 theme <a class="header-anchor" href="#convert-gtk2-theme" aria-hidden="true">#</a></h3><p>\u{1F9EE} This may not look good with every GTK Theme</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">export QT_QPA_PLATFORMTHEME=gtk2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.profile</span></span>
<span class="line"></span></code></pre></div><h3 id="qt5" tabindex="-1">Qt5 <a class="header-anchor" href="#qt5" aria-hidden="true">#</a></h3><p>You can use Qt5Ct instead</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S qt5ct</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">export QT_QPA_PLATFORMTHEME=qt5ct</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.profile</span></span>
<span class="line"></span></code></pre></div><h2 id="if-you-want-to-read-apfs-partitions" tabindex="-1">If you want to read APFS Partitions <a class="header-anchor" href="#if-you-want-to-read-apfs-partitions" aria-hidden="true">#</a></h2><p>\u{1F4BD} If you have a Hackintosh installation you can use this to access your files from it</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S linux-apfs-rw-dkms-git</span></span>
<span class="line"></span></code></pre></div><h2 id="fonts" tabindex="-1">Fonts <a class="header-anchor" href="#fonts" aria-hidden="true">#</a></h2><h3 id="general-fonts" tabindex="-1">General Fonts <a class="header-anchor" href="#general-fonts" aria-hidden="true">#</a></h3><p>\u{1F5DB} Those are some essential font packages</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S adobe-source-sans-pro-fonts ttf-dejavu ttf-opensans noto-fonts freetype2 terminus-font ttf-bitstream-vera ttf-dejavu ttf-droid ttf-fira-mono ttf-fira-sans ttf-freefont ttf-inconsolata ttf-liberation libertinus-font</span></span>
<span class="line"></span></code></pre></div><p>If you want you can install all available fonts which takes about 1 GB of space</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S all-repository-fonts</span></span>
<span class="line"></span></code></pre></div><h3 id="windows-fonts" tabindex="-1">Windows Fonts <a class="header-anchor" href="#windows-fonts" aria-hidden="true">#</a></h3><p>\u{1F5DB} If you want the Windows/Microsoft fonts (f.e. for Office Suites and required by certain games under Wine)</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git clone https://aur.archlinux.org/ttf-ms-win11.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> ttf-ms-win11</span></span>
<span class="line"></span></code></pre></div><p>Read <code>PKGBUILD</code> and copy all Windows files into the directory and then run <code>makepkg -rsi --skipchecksums</code></p><h3 id="macos-fonts" tabindex="-1">macOS Fonts <a class="header-anchor" href="#macos-fonts" aria-hidden="true">#</a></h3><p>\u{1F5DA} If you want the San Francisco Font by Apple</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S --mflags --skipchecksums otf-san-francisco otf-san-francisco-mono</span></span>
<span class="line"></span></code></pre></div><h2 id="nano-syntax-highlighting" tabindex="-1">Nano syntax highlighting <a class="header-anchor" href="#nano-syntax-highlighting" aria-hidden="true">#</a></h2><p>\u{1F4C3} This package provides syntax highlighting enhancements to the nano text editor</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S nano-syntax-highlighting</span></span>
<span class="line"></span></code></pre></div><h2 id="auto-clean-package-cache" tabindex="-1">Auto clean package cache <a class="header-anchor" href="#auto-clean-package-cache" aria-hidden="true">#</a></h2><p>\u{1F5D1}\uFE0F This will clear the package cache to only keep 1 version after every action</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S pacman-contrib</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo mkdir /etc/pacman.d/hooks</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/pacman.d/hooks/clean_package_cache.hook</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-ini"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">[Trigger]</span></span>
<span class="line"><span style="color:#F07178;">Operation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Upgrade</span></span>
<span class="line"><span style="color:#F07178;">Operation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Install</span></span>
<span class="line"><span style="color:#F07178;">Operation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Remove</span></span>
<span class="line"><span style="color:#F07178;">Type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Package</span></span>
<span class="line"><span style="color:#F07178;">Target</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#89DDFF;">[Action]</span></span>
<span class="line"><span style="color:#F07178;">Description</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Cleaning pacman cache...</span></span>
<span class="line"><span style="color:#F07178;">When</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> PostTransaction</span></span>
<span class="line"><span style="color:#F07178;">Exec</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /usr/bin/paccache -rk 2</span></span>
<span class="line"></span></code></pre></div></details>`,58),p=[o];function t(c,i,r,d,h,y){return e(),s("div",null,p)}var A=a(l,[["render",t]]);export{g as __pageData,A as default};