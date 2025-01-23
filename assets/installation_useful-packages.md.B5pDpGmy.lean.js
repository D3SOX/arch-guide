import{_ as i,c as a,a2 as e,o as t}from"./chunks/framework.BXzywdaw.js";const c=JSON.parse('{"title":"Useful packages","description":"","frontmatter":{},"headers":[],"relativePath":"installation/useful-packages.md","filePath":"installation/useful-packages.md","lastUpdated":1737638362000}'),n={name:"installation/useful-packages.md"};function l(h,s,p,r,d,k){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="useful-packages" tabindex="-1">Useful packages <a class="header-anchor" href="#useful-packages" aria-label="Permalink to &quot;Useful packages&quot;">​</a></h1><h2 id="general-packages" tabindex="-1">General packages <a class="header-anchor" href="#general-packages" aria-label="Permalink to &quot;General packages&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux-headers</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dkms</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jshon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> expac</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> acpid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> avahi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net-tools</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xdg-user-dirs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> acpid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> avahi-daemon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemd-timesyncd</span></span></code></pre></div><p>If system is running on an SSD</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fstrim.timer</span></span></code></pre></div><h2 id="printer-support" tabindex="-1">Printer support <a class="header-anchor" href="#printer-support" aria-label="Permalink to &quot;Printer support&quot;">​</a></h2><p>🖨️ Add some packages needed for printing and scanning</p><h3 id="general-packages-1" tabindex="-1">General packages <a class="header-anchor" href="#general-packages-1" aria-label="Permalink to &quot;General packages&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> system-config-printer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foomatic-db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foomatic-db-engine</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gutenprint</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gsfonts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cups</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cups-pdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cups-filters</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sane</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cups.service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> saned.socket</span></span></code></pre></div><h3 id="qt-scan-application" tabindex="-1">Qt Scan Application <a class="header-anchor" href="#qt-scan-application" aria-label="Permalink to &quot;Qt Scan Application&quot;">​</a></h3><p>Use this if you use KDE Plasma or LXQt</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> skanlite</span></span></code></pre></div><h3 id="gtk-scan-application" tabindex="-1">GTK Scan Application <a class="header-anchor" href="#gtk-scan-application" aria-label="Permalink to &quot;GTK Scan Application&quot;">​</a></h3><p>Use this if you use another desktop environment</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> simple-scan</span></span></code></pre></div><h3 id="ui-for-hp-printers" tabindex="-1">UI for HP Printers <a class="header-anchor" href="#ui-for-hp-printers" aria-label="Permalink to &quot;UI for HP Printers&quot;">​</a></h3><p>🖨 Install this if you have an HP Printer</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hplip</span></span></code></pre></div><h2 id="input-driver" tabindex="-1">Input Driver <a class="header-anchor" href="#input-driver" aria-label="Permalink to &quot;Input Driver&quot;">​</a></h2><p>These are some packages needed for certain input devices to function properly. It does no harm to install them, even if you wouldn&#39;t need them</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xf86-input-synaptics</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xf86-input-libinput</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xf86-input-evdev</span></span></code></pre></div><p>When installing inside a virtual machine:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xf86-input-vmmouse</span></span></code></pre></div><h2 id="graphics-driver" tabindex="-1">Graphics Driver <a class="header-anchor" href="#graphics-driver" aria-label="Permalink to &quot;Graphics Driver&quot;">​</a></h2><h3 id="mesa" tabindex="-1">Mesa <a class="header-anchor" href="#mesa" aria-label="Permalink to &quot;Mesa&quot;">​</a></h3><p>This is useful for all GPUs</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mesa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lib32-mesa</span></span></code></pre></div><h3 id="vulkan" tabindex="-1">Vulkan <a class="header-anchor" href="#vulkan" aria-label="Permalink to &quot;Vulkan&quot;">​</a></h3><p>This is useful for all GPUs</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vulkan-icd-loader</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lib32-vulkan-icd-loader</span></span></code></pre></div><h3 id="open-source-drivers" tabindex="-1">Open Source drivers <a class="header-anchor" href="#open-source-drivers" aria-label="Permalink to &quot;Open Source drivers&quot;">​</a></h3><p>Only install this if you use an AMD or Intel GPU or want to use the open source NVIDIA driver (Nouveau, not developed by NVIDIA)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">drive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><ul><li><code>xf86-video-amdgpu</code> is for newer AMD GPUs</li><li><code>xf86-video-nouveau</code> is the open source NVIDIA driver</li><li><code>xf86-video-intel</code> is the open source Intel driver (You probably want to leave this out, and it will use the modesetting driver. For more information refer to <a href="https://wiki.archlinux.org/index.php/Intel_graphics#Installation" target="_blank" rel="noreferrer">the wiki</a>)</li><li><code>xf86-video-ati</code> is for older AMD GPUs</li><li><code>xf86-video-vmware</code> for VirtualBox, VMWare, QEMU</li><li><code>xf86-video-fbdev</code> for Hyper-V</li><li>If you don&#39;t know it you can install all, but it could happen that the internal graphics card is used if you install the driver for it</li></ul><h3 id="nvidia-proprietary-driver" tabindex="-1">Nvidia proprietary driver <a class="header-anchor" href="#nvidia-proprietary-driver" aria-label="Permalink to &quot;Nvidia proprietary driver&quot;">​</a></h3><p>Only install these packages if you are using an NVIDIA GPU</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nvidia</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nvidia-utils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lib32-nvidia-utils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libvdpau</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lib32-libvdpau</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">Warning</p><p>NVIDIA&#39;s Linux drivers have a bad reputation when it comes to stability and compatibility with all systems. If you experience any problems later on consult <a href="https://wiki.archlinux.org/title/NVIDIA" target="_blank" rel="noreferrer">https://wiki.archlinux.org/title/NVIDIA</a> for troubleshooting.</p></div><h3 id="amd-utils" tabindex="-1">AMD Utils <a class="header-anchor" href="#amd-utils" aria-label="Permalink to &quot;AMD Utils&quot;">​</a></h3><p>Only install these packages if you are using an AMD GPU</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libva-mesa-driver</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lib32-libva-mesa-driver</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mesa-vdpau</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lib32-mesa-vdpau</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libva-vdpau-driver</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lib32-libva-vdpau-driver</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vulkan-radeon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lib32-vulkan-radeon</span></span></code></pre></div><h3 id="intel-utils" tabindex="-1">Intel Utils <a class="header-anchor" href="#intel-utils" aria-label="Permalink to &quot;Intel Utils&quot;">​</a></h3><p>Only install this package if you are using an Intel GPU</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vulkan-intel</span></span></code></pre></div><h3 id="early-kms-start" tabindex="-1">Early KMS start <a class="header-anchor" href="#early-kms-start" aria-label="Permalink to &quot;Early KMS start&quot;">​</a></h3><p>Some systems require early KMS start to work properly. Read the <a href="https://wiki.archlinux.org/title/Kernel_mode_setting#Early_KMS_start" target="_blank" rel="noreferrer">Arch Wiki entry</a> about it</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/mkinitcpio.conf</span></span></code></pre></div><p>Change <code>MODULES=()</code> to</p><ul><li><code>MODULES=(amdgpu)</code> if you installed <code>xf86-video-amdgpu</code></li><li><code>MODULES=(nvidia nvidia_modeset nvidia_uvm nvidia_drm)</code> if you installed <code>nvidia</code></li><li><code>MODULES=(i915)</code> if you are using Intel graphics</li><li>for any other driver you can skip this step</li></ul><p>Remove <code>kms</code> inside <code>HOOKS=()</code> if you installed <code>nvidia</code></p><p>and run</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkinitcpio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span></span></code></pre></div><h2 id="networking" tabindex="-1">Networking <a class="header-anchor" href="#networking" aria-label="Permalink to &quot;Networking&quot;">​</a></h2><p>🖧 Those are essential networking tools</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> networkmanager</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> networkmanager-openvpn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> networkmanager-pptp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> networkmanager-vpnc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NetworkManager</span></span></code></pre></div><h3 id="wi-fi-connection" tabindex="-1">Wi-Fi connection <a class="header-anchor" href="#wi-fi-connection" aria-label="Permalink to &quot;Wi-Fi connection&quot;">​</a></h3><p>📶 Those are essential tools if you connect to the internet via Wi-Fi</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wireless_tools</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wpa_supplicant</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ifplugd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dialog</span></span></code></pre></div><h2 id="some-archive-and-file-system-utils" tabindex="-1">Some archive and file system utils <a class="header-anchor" href="#some-archive-and-file-system-utils" aria-label="Permalink to &quot;Some archive and file system utils&quot;">​</a></h2><p>🗄️ Important tools for archives and file systems</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> p7zip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unrar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unarchiver</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsync</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nfs-utils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cifs-utils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ntfs-3g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exfat-utils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gvfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> udisks2</span></span></code></pre></div><h2 id="sound" tabindex="-1">Sound <a class="header-anchor" href="#sound" aria-label="Permalink to &quot;Sound&quot;">​</a></h2><p>🔊 Some essential packages for sound</p><h3 id="pulseaudio" tabindex="-1">PulseAudio <a class="header-anchor" href="#pulseaudio" aria-label="Permalink to &quot;PulseAudio&quot;">​</a></h3><p>Default audio server for Linux</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alsa-utils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pulseaudio-alsa</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pulseaudio-equalizer</span></span></code></pre></div><p>See <a href="https://wiki.archlinux.org/title/PulseAudio" target="_blank" rel="noreferrer">https://wiki.archlinux.org/title/PulseAudio</a></p><h4 id="fix-muting-some-media-players" tabindex="-1">Fix muting some media players <a class="header-anchor" href="#fix-muting-some-media-players" aria-label="Permalink to &quot;Fix muting some media players&quot;">​</a></h4><p>🔇 PulseAudio by default might mute media applications when entering a voice call. To disable this:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/pulse/default.pa.d</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/pulse/default.pa.d/no-cork.pa</span></span></code></pre></div><p>Put this in the file and save it:</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">unload-module module-role-cork</span></span></code></pre></div><p>Source: <a href="https://wiki.archlinux.org/index.php/PulseAudio#Disable_muting_media_on_entering_voice_call_(module-role-cork)" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/PulseAudio#Disable_muting_media_on_entering_voice_call_(module-role-cork)</a></p><h3 id="pipewire" tabindex="-1">PipeWire <a class="header-anchor" href="#pipewire" aria-label="Permalink to &quot;PipeWire&quot;">​</a></h3><p>Alternatively use can PipeWire:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alsa-utils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pipewire</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pipewire-pulse</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pipewire-jack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wireplumber</span></span></code></pre></div><p>See <a href="https://wiki.archlinux.org/title/PipeWire" target="_blank" rel="noreferrer">https://wiki.archlinux.org/title/PipeWire</a></p><h3 id="control-app" tabindex="-1">Control app <a class="header-anchor" href="#control-app" aria-label="Permalink to &quot;Control app&quot;">​</a></h3><p>For Qt based desktops (e.g. KDE Plasma or LXQt)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pavucontrol-qt</span></span></code></pre></div><p>For GTK based desktop (another desktop environment)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pavucontrol</span></span></code></pre></div><h2 id="bluetooth-support" tabindex="-1">Bluetooth support <a class="header-anchor" href="#bluetooth-support" aria-label="Permalink to &quot;Bluetooth support&quot;">​</a></h2><p>🔵 Add some packages needed for proper bluetooth support</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bluez</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bluez-utils</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bluetooth</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># only if you installed PulseAudio in the previous step:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pulseaudio-bluetooth</span></span></code></pre></div><h2 id="adb" tabindex="-1">ADB <a class="header-anchor" href="#adb" aria-label="Permalink to &quot;ADB&quot;">​</a></h2><p>If you want the Android Debug Bridge working with your user:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android-tools</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android-udev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usermod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -aG</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> adbusers</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yourusername</span></span></code></pre></div><h2 id="other-shells" tabindex="-1">Other shells <a class="header-anchor" href="#other-shells" aria-label="Permalink to &quot;Other shells&quot;">​</a></h2><p>🐚 You may want to use another shell than bash</p><h3 id="zsh-z-shell" tabindex="-1">zsh (Z Shell) <a class="header-anchor" href="#zsh-z-shell" aria-label="Permalink to &quot;zsh (Z Shell)&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh-completions</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/zsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yourusername</span></span></code></pre></div><h3 id="fish-friendly-interactive-shell" tabindex="-1">fish (Friendly interactive shell) <a class="header-anchor" href="#fish-friendly-interactive-shell" aria-label="Permalink to &quot;fish (Friendly interactive shell)&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fish</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/fish</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yourusername</span></span></code></pre></div>`,94)]))}const F=i(n,[["render",l]]);export{c as __pageData,F as default};