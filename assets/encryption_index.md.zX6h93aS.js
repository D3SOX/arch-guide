import{_ as t,o as s,c as a,V as e}from"./chunks/framework.7PbM1ooI.js";const u=JSON.parse('{"title":"Encryption","description":"","frontmatter":{},"headers":[],"relativePath":"encryption/index.md","filePath":"encryption/index.md","lastUpdated":1706016480000}'),i={name:"encryption/index.md"},n=e(`<h1 id="encryption" tabindex="-1">Encryption <a class="header-anchor" href="#encryption" aria-label="Permalink to &quot;Encryption&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This guide will mostly care for UEFI systems. Steps shouldn&#39;t be much different for non-UEFI systems. Have a look at the Arch wiki regarding <a href="https://wiki.archlinux.org/index.php/Dm-crypt" target="_blank" rel="noreferrer">system encryption</a> for more information.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This guide uses X, Y and Z as placeholders. Adjust them accordingly to your setup. Additionally, &quot;sd&quot; could be different depending on the used connection method of your drive.</p></div><p>In this guide, the encryption configuration we want to achieve is this:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>                |----------|----------------------|</span></span>
<span class="line"><span>                |   Swap   |   Other partitions   |</span></span>
<span class="line"><span>                |          |   e.g. / or /home    |</span></span>
<span class="line"><span>|---------------|---------------------------------|</span></span>
<span class="line"><span>|   Grub boot   |   Encrypted container (LUKS)    |</span></span>
<span class="line"><span>|---------------|---------------------------------|</span></span></code></pre></div><p>At first, we have a <code>/boot</code> partition that contains the Grub bootloader as well as the necessary files for UEFI. Then we have an encrypted container that uses LUKS that contains the swap and other partitions, like the root partition or <code>/home</code>. All your data as well as the system will be encrypted as a result of that.</p><p>This results in you having to type in a password directly after booting, which will unlock the encrypted LUKS container and then boot the system normally.</p><h2 id="partitioning" tabindex="-1">Partitioning <a class="header-anchor" href="#partitioning" aria-label="Permalink to &quot;Partitioning&quot;">​</a></h2><p>To get a brief overview of the disks, use the command</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fdisk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span></span></code></pre></div><p>After you got the disk to use, run</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gdisk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sdX</span></span></code></pre></div><p>to partition the disk accordingly. For more information on how to use gdisk, see the <a href="https://wiki.archlinux.org/index.php/GPT_fdisk" target="_blank" rel="noreferrer">Arch wiki</a>. For completeness, the most used commands are:</p><table><thead><tr><th>Command</th><th>What does this do?</th></tr></thead><tbody><tr><td><code>o</code></td><td>New partition table</td></tr><tr><td><code>n</code></td><td>Create new partition</td></tr><tr><td><code>w</code></td><td>Write table to disk</td></tr></tbody></table><p>After partitioning, you want to have a layout that looks like this:</p><table><thead><tr><th>Partition</th><th>Usage</th><th>Size</th><th>Partition code</th><th>Partition type</th></tr></thead><tbody><tr><td><code>/dev/sdXY</code></td><td>Grub boot</td><td>Depends, <a href="/installation/partitioning-formatting.html#efi-system">300M are recommended</a></td><td><code>ef00</code></td><td>EFI System</td></tr><tr><td><code>/dev/sdXZ</code></td><td>LUKS container</td><td>Remaining</td><td><code>8E00</code></td><td>Linux Filesystem</td></tr></tbody></table><h2 id="the-crypt-container" tabindex="-1">The crypt container <a class="header-anchor" href="#the-crypt-container" aria-label="Permalink to &quot;The crypt container&quot;">​</a></h2><h3 id="create-crypt-container" tabindex="-1">Create crypt container <a class="header-anchor" href="#create-crypt-container" aria-label="Permalink to &quot;Create crypt container&quot;">​</a></h3><p>Now we create a crypt container on <code>sdXZ</code> using LUKS. For more information, see these two pages on the Arch wiki regarding dm-crypt:</p><ul><li><a href="https://wiki.archlinux.org/index.php/Dm-crypt/Encrypting_an_entire_system#LVM_on_LUKS" target="_blank" rel="noreferrer">Encrypting an entire system: LVM on LUKS</a></li><li><a href="https://wiki.archlinux.org/index.php/Dm-crypt/Device_encryption#Encryption_options_for_LUKS_mode" target="_blank" rel="noreferrer">Device encryption: Encryption options for LUKS mode</a></li></ul><p>Encrypt <code>dev/sdXZ</code>. You will be prompted for a password. <strong>Care for different keyboard layouts when typing in the password!</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cryptsetup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> luksFormat -c aes-xts-plain64 -s </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">512</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sdXZ</span></span></code></pre></div><p>Now open the encrypted container and map it to the device <code>cryptroot</code>. You will be prompted for the encryption password.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cryptsetup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> open /dev/sdXZ cryptroot</span></span></code></pre></div><h3 id="creating-lvm-within-the-luks-container" tabindex="-1">Creating LVM within the LUKS container <a class="header-anchor" href="#creating-lvm-within-the-luks-container" aria-label="Permalink to &quot;Creating LVM within the LUKS container&quot;">​</a></h3><p>We currently have an (open and) encrypted container, but no LVM inside. To do this, we first have to create a volume group. We will call it <code>main</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vgcreate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main /dev/mapper/cryptroot</span></span></code></pre></div><p>Now we create the partitions we need. Since we just want a swap partition and a root partition, we need these two commands. If you want additional partitions, e.g. for a separate home partition, adjust the following commands (in the other sections, too) according to your needs. For recommendations regarding the swap size, see the <a href="/installation/partitioning-formatting.html#swap">partitioning section of this guide</a>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lvcreate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">G main -n swap</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lvcreate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">%FREE main -n root</span></span></code></pre></div><h3 id="create-the-filesystems" tabindex="-1">Create the filesystems <a class="header-anchor" href="#create-the-filesystems" aria-label="Permalink to &quot;Create the filesystems&quot;">​</a></h3><p>Now we format the newly created volumes and partitions. The UEFI partition needs to be of type <code>fat32</code>. Additionally, this will get you a <code>ext4</code> root partition. You can adjust this freely if you like.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkfs.fat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -F</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sdXY</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkswap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/mapper/main-swap</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkfs.ext4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/mapper/main-root</span></span></code></pre></div><h3 id="mounting-the-system" tabindex="-1">Mounting the system <a class="header-anchor" href="#mounting-the-system" aria-label="Permalink to &quot;Mounting the system&quot;">​</a></h3><p>Mount the system</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/mapper/main-root /mnt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /mnt/boot</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/sdXY /mnt/boot</span></span></code></pre></div><p>Additionally, enable the swap</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">swapon</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/mapper/main-swap</span></span></code></pre></div><p>When following the guide for a normal installation, you can go back to the <a href="/installation/base-installation.html">base installation page</a> now.</p><h2 id="adjust-linux-kernel-hooks" tabindex="-1">Adjust linux kernel hooks <a class="header-anchor" href="#adjust-linux-kernel-hooks" aria-label="Permalink to &quot;Adjust linux kernel hooks&quot;">​</a></h2><p>Edit the file <code>/etc/mkinitcpio.conf</code> to contain the following line</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">HOOKS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=(base udev autodetect modconf block filesystems keyboard keymap encrypt lvm2 fsck)</span></span></code></pre></div><p>After that, run the command to create the initial ramdisk environment</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkinitcpio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span></span></code></pre></div><h2 id="install-grub" tabindex="-1">Install grub <a class="header-anchor" href="#install-grub" aria-label="Permalink to &quot;Install grub&quot;">​</a></h2><p>Before installing grub, we have to mount the efi variables and install important packages</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> efivarfs efivarfs /sys/firmware/efi/efivars</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grub efibootmgr dosfstools</span></span></code></pre></div><p>Additionally, install the microcode packages for your cpu, e.g. <code>intel-ucode</code> or <code>amd-ucode</code>.</p><p>Now find the UUID of the root partition (in the line starting with <code>/dev/sdXZ</code>) and note it down</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blkid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;UUID=&quot;</span></span></code></pre></div><p>Adjust <code>/etc/default/grub</code> because of the encryption. Replace <code>&lt;UUID&gt;</code> with the UUID of the device you found earlier.</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GRUB_CMDLINE_LINUX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cryptdevice=UUID=&lt;UUID&gt;:cryptroot root=/dev/mapper/main-root&quot;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you want to type the password with the keyboard layout of your home country, you can adjust the line like this with the languages of your choice. This example uses the german keyboard layout.</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GRUB_CMDLINE_LINUX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cryptdevice=UUID=&lt;UUID&gt;:cryptroot root=/dev/mapper/main-root lang=de locale=de_DE.UTF-8&quot;</span></span></code></pre></div></div><p>After that, you can install grub. Use the following commands to do that. <strong>Make sure no errors are reported here.</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grub-install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --target=x86_64-efi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --efi-directory=/boot</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --bootloader-id=arch_grub</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recheck</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --debug</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grub-mkconfig</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /boot/grub/grub.cfg</span></span></code></pre></div><p>When following the guide for a normal installation, you can go back to the <a href="/installation/configure-system.html">configure system page</a> now.</p><h2 id="additional-resources" tabindex="-1">Additional resources <a class="header-anchor" href="#additional-resources" aria-label="Permalink to &quot;Additional resources&quot;">​</a></h2><p>For more information, you can visit the following pages:</p><ul><li><a href="https://wiki.archlinux.org/index.php/Dm-crypt" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/Dm-crypt</a></li><li><a href="https://www.timoschindler.de/arch-linux-uefi-boot-mit-grub-und-verschluesseltem-lvm/" target="_blank" rel="noreferrer">https://www.timoschindler.de/arch-linux-uefi-boot-mit-grub-und-verschluesseltem-lvm/</a> (German)</li></ul><p>This guide tries to sum them all up in one neat page.</p>`,59),o=[n];function l(p,h,r,d,c,k){return s(),a("div",null,o)}const y=t(i,[["render",l]]);export{u as __pageData,y as default};
