import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.297a338e.js";const h=JSON.parse('{"title":"Mount file systems","description":"","frontmatter":{},"headers":[],"relativePath":"installation/mount-filesystems.md","filePath":"installation/mount-filesystems.md","lastUpdated":1698404108000}'),e={name:"installation/mount-filesystems.md"},l=o(`<h1 id="mount-file-systems" tabindex="-1">Mount file systems <a class="header-anchor" href="#mount-file-systems" aria-label="Permalink to &quot;Mount file systems&quot;">​</a></h1><p>💽 Mount root filesystem:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/dev/sdXY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/mnt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mount</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/dev/sdXY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/mnt</span></span></code></pre></div><p>▶️ Only UEFI</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/mnt/boot/efi</span></span>
<span class="line"><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/dev/sdXY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/mnt/boot/efi</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/mnt/boot/efi</span></span>
<span class="line"><span style="color:#6F42C1;">mount</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/dev/sdXY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/mnt/boot/efi</span></span></code></pre></div><p>🏠 If you created a separate home partition:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/mnt/home</span></span>
<span class="line"><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/dev/sdXY</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/mnt/home</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/mnt/home</span></span>
<span class="line"><span style="color:#6F42C1;">mount</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/dev/sdXY</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/mnt/home</span></span></code></pre></div>`,7),t=[l];function p(c,r,i,d,y,m){return a(),n("div",null,t)}const u=s(e,[["render",p]]);export{h as __pageData,u as default};
