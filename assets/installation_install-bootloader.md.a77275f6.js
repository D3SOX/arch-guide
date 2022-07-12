import{_ as a,c as e,o as s,a as o}from"./app.cbe8ab49.js";const f=JSON.parse('{"title":"Install Bootloader","description":"","frontmatter":{},"headers":[{"level":2,"title":"UEFI","slug":"uefi"},{"level":2,"title":"BIOS","slug":"bios"}],"relativePath":"installation/install-bootloader.md","lastUpdated":1657637696000}'),n={name:"installation/install-bootloader.md"},t=o(`<h1 id="install-bootloader" tabindex="-1">Install Bootloader <a class="header-anchor" href="#install-bootloader" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When doing disk encryption, finish the steps on the <a href="/encryption/#adjust-linux-kernel-hooks">encryption page</a>. It will guide you back to the main installation when needed.</p></div><p>If you don&#39;t know which one you should use re-visit <a href="./live-setup.html#check-if-booted-in-bios-or-uefi">Live Setup/Check if booted in BIOS or UEFI</a></p><h2 id="uefi" tabindex="-1">UEFI <a class="header-anchor" href="#uefi" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pacman -S grub os-prober efibootmgr dosfstools mtools gptfdisk fatresize</span></span>
<span class="line"><span style="color:#A6ACCD;">grub-install --target=x86_64-efi --bootloader-id=grub_uefi --efi-directory=/boot/efi --recheck</span></span>
<span class="line"><span style="color:#A6ACCD;">grub-mkconfig -o /boot/grub/grub.cfg</span></span>
<span class="line"></span></code></pre></div><h2 id="bios" tabindex="-1">BIOS <a class="header-anchor" href="#bios" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pacman -S grub os-prober</span></span>
<span class="line"><span style="color:#A6ACCD;">grub-install --target=i386-pc --recheck /dev/sdX</span></span>
<span class="line"><span style="color:#A6ACCD;">grub-mkconfig -o /boot/grub/grub.cfg</span></span>
<span class="line"></span></code></pre></div>`,7),l=[t];function i(r,c,p,d,h,u){return s(),e("div",null,l)}var g=a(n,[["render",i]]);export{f as __pageData,g as default};