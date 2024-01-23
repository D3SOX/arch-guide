import{_ as a,o as s,c as i,V as e}from"./chunks/framework.7PbM1ooI.js";const u=JSON.parse('{"title":"Install Desktop","description":"","frontmatter":{},"headers":[],"relativePath":"installation/install-desktop.md","filePath":"installation/install-desktop.md","lastUpdated":1706016480000}'),t={name:"installation/install-desktop.md"},n=e(`<h1 id="install-desktop" tabindex="-1">Install Desktop <a class="header-anchor" href="#install-desktop" aria-label="Permalink to &quot;Install Desktop&quot;">​</a></h1><h2 id="display-server" tabindex="-1">Display Server <a class="header-anchor" href="#display-server" aria-label="Permalink to &quot;Display Server&quot;">​</a></h2><p>🖥️ Xorg is the display server we will use</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xorg-server xorg-xinit xorg-xrandr xorg-xfontsel xorg-xlsfonts xorg-xkill xorg-xinput xorg-xwininfo</span></span></code></pre></div><h2 id="desktop-environment" tabindex="-1">Desktop Environment <a class="header-anchor" href="#desktop-environment" aria-label="Permalink to &quot;Desktop Environment&quot;">​</a></h2><p>🗔 You need to select a desktop environment</p><ul><li>For beginners coming from Windows I recommend KDE Plasma or Cinnmaon.</li><li>For a very resource friendy desktop I recommend Xfce or LXQt</li><li><strong>The instructions for KDE Plasma are tested by me because I use it. Others should work but you may need some extra packages for productive use (pull requests are welcome)</strong></li></ul><h3 id="kde-plasma" tabindex="-1">KDE Plasma <a class="header-anchor" href="#kde-plasma" aria-label="Permalink to &quot;KDE Plasma&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plasma kdialog packagekit-qt5 kcalc icoutils libappimage konsole dolphin kdegraphics-thumbnailers svgpart ffmpegthumbs kdenetwork-filesharing gwenview kimageformats ark kate okular kcron kdf filelight print-manager</span></span></code></pre></div><p>If you want to use KDE Connect (Pairing with Android phone)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kdeconnect sshfs</span></span></code></pre></div><p>See also <a href="https://wiki.archlinux.org/index.php/KDE" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/KDE</a></p><h3 id="xfce" tabindex="-1">Xfce <a class="header-anchor" href="#xfce" aria-label="Permalink to &quot;Xfce&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xfce4 xfce4-goodies</span></span></code></pre></div><p>See also <a href="https://wiki.archlinux.org/index.php/Xfce" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/Xfce</a></p><h3 id="gnome" tabindex="-1">GNOME <a class="header-anchor" href="#gnome" aria-label="Permalink to &quot;GNOME&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnome gnome-extra</span></span></code></pre></div><p>See also <a href="https://wiki.archlinux.org/index.php/GNOME" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/GNOME</a></p><h3 id="lxde" tabindex="-1">LXDE <a class="header-anchor" href="#lxde" aria-label="Permalink to &quot;LXDE&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lxde lxdm-gtk3</span></span></code></pre></div><p>See also <a href="https://wiki.archlinux.org/index.php/LXDE" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/LXDE</a></p><h3 id="lxqt" tabindex="-1">LXQt <a class="header-anchor" href="#lxqt" aria-label="Permalink to &quot;LXQt&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lxqt breeze-icons pcmanfm-qt qterminal lxqt-sudo polkit-qt5</span></span></code></pre></div><p>See also <a href="https://wiki.archlinux.org/index.php/LXQt" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/LXQt</a></p><h3 id="cinnamon" tabindex="-1">Cinnamon <a class="header-anchor" href="#cinnamon" aria-label="Permalink to &quot;Cinnamon&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cinnamon cinnamon-translations nemo-fileroller nemo-image-converter nemo-preview xed xreader gnome-terminal metacity gnome-shell</span></span></code></pre></div><p>See also <a href="https://wiki.archlinux.org/index.php/Cinnamon" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/Cinnamon</a></p><h3 id="budgie" tabindex="-1">Budgie <a class="header-anchor" href="#budgie" aria-label="Permalink to &quot;Budgie&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> budgie-desktop network-manager-applet gnome</span></span></code></pre></div><p>See also <a href="https://wiki.archlinux.org/index.php/Budgie" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/Budgie</a></p><h3 id="mate" tabindex="-1">Mate <a class="header-anchor" href="#mate" aria-label="Permalink to &quot;Mate&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mate mate-extra gdm</span></span></code></pre></div><p>See also <a href="https://wiki.archlinux.org/index.php/MATE" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/MATE</a></p><h3 id="deepin" tabindex="-1">Deepin <a class="header-anchor" href="#deepin" aria-label="Permalink to &quot;Deepin&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deepin deepin-extra</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/lightdm/lightdm.conf</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># append this line to use the deepin specific greeter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">greeter-session</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lightdm-deepin-greeter</span></span></code></pre></div><p>See also <a href="https://wiki.archlinux.org/index.php/Deepin" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/Deepin</a></p><h2 id="display-desktop-manager" tabindex="-1">Display/Desktop Manager <a class="header-anchor" href="#display-desktop-manager" aria-label="Permalink to &quot;Display/Desktop Manager&quot;">​</a></h2><p>🖥️ A display manager is basically your login screen where you enter your user details and select your Desktop Environment</p><h3 id="lxdm-included-with-lxde" tabindex="-1">LXDM (Included with LXDE) <a class="header-anchor" href="#lxdm-included-with-lxde" aria-label="Permalink to &quot;LXDM (Included with LXDE)&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lxdm-gtk3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable lxdm</span></span></code></pre></div><p>See also <a href="https://wiki.archlinux.org/index.php/LXDM" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/LXDM</a></p><h3 id="sddm-included-with-kde-plasma" tabindex="-1">SDDM (Included with KDE Plasma) <a class="header-anchor" href="#sddm-included-with-kde-plasma" aria-label="Permalink to &quot;SDDM (Included with KDE Plasma)&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sddm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable sddm</span></span></code></pre></div><p>See also <a href="https://wiki.archlinux.org/index.php/SDDM" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/SDDM</a></p><h3 id="gdm-included-with-gnome-budgie-mate" tabindex="-1">GDM (Included with GNOME/Budgie/MATE) <a class="header-anchor" href="#gdm-included-with-gnome-budgie-mate" aria-label="Permalink to &quot;GDM (Included with GNOME/Budgie/MATE)&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gdm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable gdm</span></span></code></pre></div><p>See also <a href="https://wiki.archlinux.org/index.php/GDM" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/GDM</a></p><h3 id="lightdm" tabindex="-1">LightDM <a class="header-anchor" href="#lightdm" aria-label="Permalink to &quot;LightDM&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lightdm lightdm-gtk-greeter</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable lightdm</span></span></code></pre></div><p>See also <a href="https://wiki.archlinux.org/index.php/LightDM" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/LightDM</a></p>`,50),l=[n];function h(p,r,d,o,k,c){return s(),i("div",null,l)}const m=a(t,[["render",h]]);export{u as __pageData,m as default};
