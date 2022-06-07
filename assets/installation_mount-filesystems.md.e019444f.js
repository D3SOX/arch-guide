import{_ as s,c as a,o as e,a as n}from"./app.962f199f.js";const f='{"title":"Mount file systems","description":"","frontmatter":{},"headers":[],"relativePath":"installation/mount-filesystems.md","lastUpdated":1654607006000}',t={name:"installation/mount-filesystems.md"},o=n(`<h1 id="mount-file-systems" tabindex="-1">Mount file systems <a class="header-anchor" href="#mount-file-systems" aria-hidden="true">#</a></h1><p>\u{1F4BD} Mount root filesystem:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mount /dev/sdXY /mnt</span></span>
<span class="line"></span></code></pre></div><p>\u25B6\uFE0F Only UEFI</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir -p /mnt/boot/efi</span></span>
<span class="line"><span style="color:#A6ACCD;">mount /dev/sdXY /mnt/boot/efi</span></span>
<span class="line"></span></code></pre></div><p>\u{1F3E0} If you created a separate home partition:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir /mnt/home</span></span>
<span class="line"><span style="color:#A6ACCD;">mount /dev/sdXY /mnt/home</span></span>
<span class="line"></span></code></pre></div>`,7),p=[o];function l(c,i,r,d,m,_){return e(),a("div",null,p)}var y=s(t,[["render",l]]);export{f as __pageData,y as default};
