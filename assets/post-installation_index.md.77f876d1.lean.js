import{_ as a,v as s,b as n,R as o}from"./chunks/framework.73379b53.js";const u=JSON.parse('{"title":"Post-Installation","description":"","frontmatter":{},"headers":[],"relativePath":"post-installation/index.md","filePath":"post-installation/index.md","lastUpdated":1690909231000}'),e={name:"post-installation/index.md"},l=o(`<h1 id="post-installation" tabindex="-1">Post-Installation <a class="header-anchor" href="#post-installation" aria-label="Permalink to &quot;Post-Installation&quot;">​</a></h1><h2 id="set-x11-keymap" tabindex="-1">Set X11 Keymap <a class="header-anchor" href="#set-x11-keymap" aria-label="Permalink to &quot;Set X11 Keymap&quot;">​</a></h2><p>⌨️ It&#39;s recommended to set this to your keymap. Some Display Manager and Desktop Environments use this (replace <code>yourkeymap</code> with your keymap e.g. <code>de</code>)</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">localectl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set-x11-keymap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yourkeymap</span></span></code></pre></div><h2 id="wi-fi" tabindex="-1">Wi-Fi <a class="header-anchor" href="#wi-fi" aria-label="Permalink to &quot;Wi-Fi&quot;">​</a></h2><p>📶 You can use <code>nmtui</code> or <code>wifi-menu</code> to configure your network profile</p><h2 id="oh-my-zsh" tabindex="-1">Oh My Zsh <a class="header-anchor" href="#oh-my-zsh" aria-label="Permalink to &quot;Oh My Zsh&quot;">​</a></h2><p>🤖 A delightful &amp; open source framework for Zsh</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span></code></pre></div><h2 id="oh-my-fish" tabindex="-1">Oh my Fish <a class="header-anchor" href="#oh-my-fish" aria-label="Permalink to &quot;Oh my Fish&quot;">​</a></h2><p>🤖 The Fishshell Framework</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://get.oh-my.fish</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">fish</span></span></code></pre></div><h2 id="aur-setup" tabindex="-1">AUR Setup <a class="header-anchor" href="#aur-setup" aria-label="Permalink to &quot;AUR Setup&quot;">​</a></h2><p>The Arch User Repository is a community-driven repository for Arch users. <code>yay</code> is a pacman wrapper that allows installing AUR packages</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://aur.archlinux.org/yay.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yay</span></span>
<span class="line"><span style="color:#FFCB6B;">makepkg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rsi</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">..</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yay</span></span></code></pre></div><p><code>paru</code> is a good alternative to <code>yay</code>. It&#39;s easy to use due to its similarity with yay&#39;s CLI. To install it, simply execute the following commands.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://aur.archlinux.org/paru.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">paru</span></span>
<span class="line"><span style="color:#FFCB6B;">makepkg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rsi</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">..</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">paru</span></span></code></pre></div><p>In the following commands replace <code>yay</code> with <code>paru</code>.</p><h3 id="hold-up" tabindex="-1">Hold up <a class="header-anchor" href="#hold-up" aria-label="Permalink to &quot;Hold up&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Be careful when using AUR packages. You might need to re-build them when the dependencies in the repositories get updated.<br> I recommend installing <a href="https://github.com/maximbaz/rebuild-detector" target="_blank" rel="noreferrer">rebuild-detector</a> to get notified when a package needs to be re-built.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rebuild-detector</span></span></code></pre></div></div><h3 id="cheat-sheet" tabindex="-1">Cheat sheet <a class="header-anchor" href="#cheat-sheet" aria-label="Permalink to &quot;Cheat sheet&quot;">​</a></h3><p>(Unless explicitly mentioned, this also applies to <code>paru</code>)</p><ul><li><code>yay</code> Update system</li><li><code>yay xyz</code> Install xyz</li><li><code>yay -Rns xyz</code> Uninstall xyz</li><li><code>yay -Rdd xyz</code> Force remove xyz (should not be used)</li><li><code>yay -Yc</code> / <code>paru -c</code> Uninstall not explicitly installed optional dependencies</li><li><code>yay -Si xyz</code> Show remote package</li><li><code>yay -Qi xyz</code> Show local package</li><li><code>yay -Qq</code> List installed packages</li><li><code>yay -Qqe</code> List explicitly installed packages</li></ul><h2 id="graphical-package-manager" tabindex="-1">Graphical package manager <a class="header-anchor" href="#graphical-package-manager" aria-label="Permalink to &quot;Graphical package manager&quot;">​</a></h2><p>📦 I recommend only to use <code>yay</code>/<code>paru</code> to update and install packages but (especially if you are a beginner) you may want a graphical package manager</p><ul><li>Simple GTK: <code>yay -S gnome-packagekit</code></li><li>Simple Qt: <code>yay -S apper</code></li><li>Complex GTK: <code>yay -S pamac-aur</code> (Most beginner-friendly)</li><li>Complex Qt: <code>yay -S octopi</code></li></ul><p>🛒 If you want an even easier to use GUI, you can install a Software Center. They can&#39;t install AUR packages though.</p><ul><li>GTK Software Center: <code>yay -S gnome-software gnome-software-packagekit-plugin</code></li><li>Qt Software Center: <code>yay -S discover packagekit-qt5</code></li></ul><h2 id="media-codecs" tabindex="-1">Media Codecs <a class="header-anchor" href="#media-codecs" aria-label="Permalink to &quot;Media Codecs&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gst-libav</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gst-plugins-base</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gst-plugins-good</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gst-plugins-bad</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gst-plugins-ugly</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gstreamer-vaapi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">x265</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">x264</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lame</span></span></code></pre></div><h2 id="qt-theme-on-gtk-desktop" tabindex="-1">Qt theme on GTK Desktop <a class="header-anchor" href="#qt-theme-on-gtk-desktop" aria-label="Permalink to &quot;Qt theme on GTK Desktop&quot;">​</a></h2><p>If you use a GTK desktop and want Qt apps to use your GTK Theme you have 2 choices</p><p>You need to install the Qt5 Style plugins for both</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">qt5-styleplugins</span></span></code></pre></div><h3 id="convert-gtk2-theme" tabindex="-1">Convert GTK2 theme <a class="header-anchor" href="#convert-gtk2-theme" aria-label="Permalink to &quot;Convert GTK2 theme&quot;">​</a></h3><p>🧮 This may not look good with every GTK Theme</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">export QT_QPA_PLATFORMTHEME=gtk2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.profile</span></span></code></pre></div><h3 id="qt5" tabindex="-1">Qt5 <a class="header-anchor" href="#qt5" aria-label="Permalink to &quot;Qt5&quot;">​</a></h3><p>You can use Qt5Ct instead</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">qt5ct</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">export QT_QPA_PLATFORMTHEME=qt5ct</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.profile</span></span></code></pre></div><h2 id="if-you-want-to-read-apfs-partitions" tabindex="-1">If you want to read APFS Partitions <a class="header-anchor" href="#if-you-want-to-read-apfs-partitions" aria-label="Permalink to &quot;If you want to read APFS Partitions&quot;">​</a></h2><p>💽 If you have a Hackintosh installation you can use this to access your files from it</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">linux-apfs-rw-dkms-git</span></span></code></pre></div><h2 id="fonts" tabindex="-1">Fonts <a class="header-anchor" href="#fonts" aria-label="Permalink to &quot;Fonts&quot;">​</a></h2><h3 id="general-fonts" tabindex="-1">General Fonts <a class="header-anchor" href="#general-fonts" aria-label="Permalink to &quot;General Fonts&quot;">​</a></h3><p>🗛 Those are some essential font packages</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">adobe-source-sans-pro-fonts</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ttf-dejavu</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ttf-opensans</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">noto-fonts</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">freetype2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">terminus-font</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ttf-bitstream-vera</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ttf-dejavu</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ttf-droid</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ttf-fira-mono</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ttf-fira-sans</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ttf-freefont</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ttf-inconsolata</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ttf-liberation</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libertinus-font</span></span></code></pre></div><p>If you want you can install all available fonts which takes about 1 GB of space</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all-repository-fonts</span></span></code></pre></div><h3 id="windows-fonts" tabindex="-1">Windows Fonts <a class="header-anchor" href="#windows-fonts" aria-label="Permalink to &quot;Windows Fonts&quot;">​</a></h3><p>🗛 If you want the Windows/Microsoft fonts (f.e. for Office Suites and required by certain games under Wine)</p><h4 id="with-an-existing-windows-installation-iso" tabindex="-1">With an existing Windows Installation / ISO <a class="header-anchor" href="#with-an-existing-windows-installation-iso" aria-label="Permalink to &quot;With an existing Windows Installation / ISO&quot;">​</a></h4><p>When you have an existing Windows Installation / ISO you can use the following package script</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://aur.archlinux.org/ttf-ms-win11.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ttf-ms-win11</span></span></code></pre></div><p>Read <code>PKGBUILD</code> and copy all Windows files into the directory and then run <code>makepkg -rsi --skipchecksums</code></p><h4 id="without-an-existing-windows-installation-iso" tabindex="-1">Without an existing Windows Installation / ISO <a class="header-anchor" href="#without-an-existing-windows-installation-iso" aria-label="Permalink to &quot;Without an existing Windows Installation / ISO&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>There&#39;s a package that automatically downloads and extracts the fonts</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ttf-ms-win11-auto</span></span></code></pre></div></div><h3 id="macos-fonts" tabindex="-1">macOS Fonts <a class="header-anchor" href="#macos-fonts" aria-label="Permalink to &quot;macOS Fonts&quot;">​</a></h3><p>🗚 If you want the San Francisco Font by Apple</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">otf-san-francisco</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">otf-san-francisco-mono</span></span></code></pre></div><h2 id="nano-syntax-highlighting" tabindex="-1">Nano syntax highlighting <a class="header-anchor" href="#nano-syntax-highlighting" aria-label="Permalink to &quot;Nano syntax highlighting&quot;">​</a></h2><p>📃 This package provides syntax highlighting enhancements to the nano text editor</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nano-syntax-highlighting</span></span></code></pre></div><h2 id="auto-clean-package-cache" tabindex="-1">Auto clean package cache <a class="header-anchor" href="#auto-clean-package-cache" aria-label="Permalink to &quot;Auto clean package cache&quot;">​</a></h2><p>🗑️ This will clear the package cache to only keep 1 version after every action</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman-contrib</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/pacman.d/hooks</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nano</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/pacman.d/hooks/clean_package_cache.hook</span></span></code></pre></div><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[Trigger]</span></span>
<span class="line"><span style="color:#F07178;">Operation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Upgrade</span></span>
<span class="line"><span style="color:#F07178;">Operation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Install</span></span>
<span class="line"><span style="color:#F07178;">Operation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Remove</span></span>
<span class="line"><span style="color:#F07178;">Type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Package</span></span>
<span class="line"><span style="color:#F07178;">Target</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#89DDFF;">[Action]</span></span>
<span class="line"><span style="color:#F07178;">Description</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Cleaning pacman cache...</span></span>
<span class="line"><span style="color:#F07178;">When</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> PostTransaction</span></span>
<span class="line"><span style="color:#F07178;">Exec</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /usr/bin/paccache -rk 2</span></span></code></pre></div></details>`,67),t=[l];function p(c,i,r,y,h,d){return s(),n("div",null,t)}const A=a(e,[["render",p]]);export{u as __pageData,A as default};
