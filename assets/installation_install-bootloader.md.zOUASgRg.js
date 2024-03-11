import{_ as s,o as i,c as a,a4 as t}from"./chunks/framework.xR9aiOhR.js";const g=JSON.parse('{"title":"Install Bootloader","description":"","frontmatter":{},"headers":[],"relativePath":"installation/install-bootloader.md","filePath":"installation/install-bootloader.md","lastUpdated":1710118299000}'),e={name:"installation/install-bootloader.md"},n=t(`<h1 id="install-bootloader" tabindex="-1">Install Bootloader <a class="header-anchor" href="#install-bootloader" aria-label="Permalink to &quot;Install Bootloader&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When doing disk encryption, finish the steps on the <a href="/encryption/#adjust-linux-kernel-hooks">encryption page</a>. It will guide you back to the main installation when needed.</p></div><p>If you don&#39;t know which one you should use re-visit <a href="./live-setup#check-if-booted-in-bios-or-uefi">Live Setup/Check if booted in BIOS or UEFI</a></p><h2 id="uefi" tabindex="-1">UEFI <a class="header-anchor" href="#uefi" aria-label="Permalink to &quot;UEFI&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> os-prober</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> efibootmgr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dosfstools</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mtools</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gptfdisk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fatresize</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grub-install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --target=x86_64-efi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --bootloader-id=grub_uefi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --efi-directory=/boot/efi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recheck</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grub-mkconfig</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /boot/grub/grub.cfg</span></span></code></pre></div><h2 id="bios" tabindex="-1">BIOS <a class="header-anchor" href="#bios" aria-label="Permalink to &quot;BIOS&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> os-prober</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grub-install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --target=i386-pc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recheck</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sdX</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grub-mkconfig</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /boot/grub/grub.cfg</span></span></code></pre></div>`,7),l=[n];function h(o,p,r,k,d,c){return i(),a("div",null,l)}const b=s(e,[["render",h]]);export{g as __pageData,b as default};
