import{_ as e,c as a,o as s,a as n}from"./app.962f199f.js";const b='{"title":"Gaming","description":"","frontmatter":{},"headers":[{"level":2,"title":"Video driver","slug":"video-driver"},{"level":2,"title":"Graphics card configuration tool","slug":"graphics-card-configuration-tool"},{"level":3,"title":"AMD","slug":"amd"},{"level":3,"title":"NVIDIA","slug":"nvidia"},{"level":2,"title":"Wine","slug":"wine"},{"level":3,"title":"Libraries","slug":"libraries"},{"level":3,"title":"Custom Wine/Proton","slug":"custom-wine-proton"},{"level":2,"title":"Programs","slug":"programs"},{"level":2,"title":"Custom kernel","slug":"custom-kernel"},{"level":3,"title":"Zen","slug":"zen"},{"level":3,"title":"Tk-Glitch","slug":"tk-glitch"},{"level":3,"title":"After installing","slug":"after-installing"},{"level":2,"title":"Tweak Esync","slug":"tweak-esync"},{"level":2,"title":"Other tweaks","slug":"other-tweaks"}],"relativePath":"gaming/index.md","lastUpdated":1654607006000}',l={name:"gaming/index.md"},i=n(`<h1 id="gaming" tabindex="-1">Gaming <a class="header-anchor" href="#gaming" aria-hidden="true">#</a></h1><h2 id="video-driver" tabindex="-1">Video driver <a class="header-anchor" href="#video-driver" aria-hidden="true">#</a></h2><p>If you followed <a href="./../installation/useful-packages.html#graphics-driver">Installation/Useful packages/Graphics Driver</a> your graphics driver &amp; Vulkan should be already set-up correctly</p><h2 id="graphics-card-configuration-tool" tabindex="-1">Graphics card configuration tool <a class="header-anchor" href="#graphics-card-configuration-tool" aria-hidden="true">#</a></h2><h3 id="amd" tabindex="-1">AMD <a class="header-anchor" href="#amd" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S radeon-profile-git radeon-profile-daemon-git</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> --now radeon-profile-daemon</span></span>
<span class="line"></span></code></pre></div><h3 id="nvidia" tabindex="-1">NVIDIA <a class="header-anchor" href="#nvidia" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S nvidia-settings</span></span>
<span class="line"></span></code></pre></div><h2 id="wine" tabindex="-1">Wine <a class="header-anchor" href="#wine" aria-hidden="true">#</a></h2><h3 id="libraries" tabindex="-1">Libraries <a class="header-anchor" href="#libraries" aria-hidden="true">#</a></h3><p>Recommended by <a href="https://github.com/lutris/docs/blob/master/WineDependencies.md#archantergosmanjaroother-arch-derivatives" target="_blank" rel="noopener noreferrer">Lutris</a></p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S --needed wine-staging giflib lib32-giflib libpng lib32-libpng libldap lib32-libldap gnutls lib32-gnutls mpg123 lib32-mpg123 openal lib32-openal v4l-utils lib32-v4l-utils libpulse lib32-libpulse libgpg-error lib32-libgpg-error alsa-plugins lib32-alsa-plugins alsa-lib lib32-alsa-lib libjpeg-turbo lib32-libjpeg-turbo sqlite lib32-sqlite libxcomposite lib32-libxcomposite libxinerama lib32-libgcrypt libgcrypt lib32-libxinerama ncurses lib32-ncurses opencl-icd-loader lib32-opencl-icd-loader libxslt lib32-libxslt libva lib32-libva gtk3 lib32-gtk3 gst-plugins-base-libs lib32-gst-plugins-base-libs</span></span>
<span class="line"></span></code></pre></div><p>Other packages not listed by Lutris</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S vkd3d lib32-vkd3d faudio lib32-faudio</span></span>
<span class="line"></span></code></pre></div><h3 id="custom-wine-proton" tabindex="-1">Custom Wine/Proton <a class="header-anchor" href="#custom-wine-proton" aria-hidden="true">#</a></h3><p>For custom Proton, I recommend <a href="https://github.com/GloriousEggroll/proton-ge-custom/releases" target="_blank" rel="noopener noreferrer">GloriousEgroll</a>or <a href="https://github.com/Frogging-Family/wine-tkg-git/releases" target="_blank" rel="noopener noreferrer">Tk-Glitch</a></p><p>Tk-Glitch also provides a wine version which can be installed with <code>yay -U wine-tkg*.pkg.tar.zst</code></p><h2 id="programs" tabindex="-1">Programs <a class="header-anchor" href="#programs" aria-hidden="true">#</a></h2><p>Install basic gaming tools</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S lutris steam gamemode lib32-gamemode</span></span>
<span class="line"></span></code></pre></div><h2 id="custom-kernel" tabindex="-1">Custom kernel <a class="header-anchor" href="#custom-kernel" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you are using NVIDIA and want to use a custom kernel you need to use <code>nvidia-dkms</code> since <code>nvidia</code> is just for the mainline <code>linux</code> kernel and <code>nvidia-lts</code> for <code>linux-lts</code></p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -Rdd nvidia</span></span>
<span class="line"><span style="color:#A6ACCD;">yay -S nvidia-dkms</span></span>
<span class="line"></span></code></pre></div><p>Alternatively you can use <a href="https://github.com/Frogging-Family/nvidia-all" target="_blank" rel="noopener noreferrer">nvidia-all</a> to get the latest NVIDIA driver for all kernels</p></div><h3 id="zen" tabindex="-1">Zen <a class="header-anchor" href="#zen" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay -S linux-zen linux-zen-headers</span></span>
<span class="line"></span></code></pre></div><h3 id="tk-glitch" tabindex="-1">Tk-Glitch <a class="header-anchor" href="#tk-glitch" aria-hidden="true">#</a></h3><p>See <a href="https://github.com/Frogging-Family/linux-tkg" target="_blank" rel="noopener noreferrer">linux-tkg</a></p><h3 id="after-installing" tabindex="-1">After installing <a class="header-anchor" href="#after-installing" aria-hidden="true">#</a></h3><p>You need to re-generate your grub config</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo grub-mkconfig -o /boot/grub/grub.cfg</span></span>
<span class="line"></span></code></pre></div><h2 id="tweak-esync" tabindex="-1">Tweak Esync <a class="header-anchor" href="#tweak-esync" aria-hidden="true">#</a></h2><p>If this command prints out a value which is equal or greater to <code>524288</code> you&#39;re all set</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">ulimit</span><span style="color:#A6ACCD;"> -Hn</span></span>
<span class="line"></span></code></pre></div><p>However, if it doesn&#39;t, or you want to further improve it:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo nano /etc/systemd/system.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano /etc/systemd/user.conf</span></span>
<span class="line"></span></code></pre></div><p>append this in both files</p><div class="language-ini"><span class="copy"></span><pre><code><span class="line"><span style="color:#F07178;">DefaultLimitNOFILE</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">1024:1048576</span></span>
<span class="line"></span></code></pre></div><p>Source: <a href="https://github.com/zfigura/wine/blob/master/README.esync" target="_blank" rel="noopener noreferrer">https://github.com/zfigura/wine/blob/master/README.esync</a></p><h2 id="other-tweaks" tabindex="-1">Other tweaks <a class="header-anchor" href="#other-tweaks" aria-hidden="true">#</a></h2><p>The Arch wiki has a page dedicated to <a href="https://wiki.archlinux.org/index.php/gaming" target="_blank" rel="noopener noreferrer">Gaming</a> with a few other tweaks you might want to look into.</p>`,39),r=[i];function o(t,p,c,d,h,g){return s(),a("div",null,r)}var m=e(l,[["render",o]]);export{b as __pageData,m as default};
