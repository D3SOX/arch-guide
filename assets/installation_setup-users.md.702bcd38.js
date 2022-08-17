import{_ as s,c as a,o as e,a as n}from"./app.06b4d43c.js";const _=JSON.parse('{"title":"Setup users","description":"","frontmatter":{},"headers":[{"level":2,"title":"Set root password","slug":"set-root-password"},{"level":2,"title":"Add your user","slug":"add-your-user"},{"level":2,"title":"Enable sudo","slug":"enable-sudo"}],"relativePath":"installation/setup-users.md","lastUpdated":1660733218000}'),o={name:"installation/setup-users.md"},r=n(`<h1 id="setup-users" tabindex="-1">Setup users <a class="header-anchor" href="#setup-users" aria-hidden="true">#</a></h1><h2 id="set-root-password" tabindex="-1">Set root password <a class="header-anchor" href="#set-root-password" aria-hidden="true">#</a></h2><p>\u{1F511} Use a strong and complicated password</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">passwd</span></span>
<span class="line"></span></code></pre></div><h2 id="add-your-user" tabindex="-1">Add your user <a class="header-anchor" href="#add-your-user" aria-hidden="true">#</a></h2><p>\u{1F9D1} This will be your user you&#39;ll use to log in. For group reference see <a href="https://wiki.archlinux.org/index.php/Users_and_groups#Group_list" target="_blank" rel="noreferrer">https://wiki.archlinux.org/index.php/Users_and_groups#Group_list</a></p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">useradd -m -G audio,video,input,wheel,sys,log,rfkill,lp,adm -s /bin/bash yourusername</span></span>
<span class="line"><span style="color:#A6ACCD;">passwd yourusername</span></span>
<span class="line"></span></code></pre></div><p>\u{1F3B0} If you want to force your user to change password after first login:</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">chage -d 0 yourusername</span></span>
<span class="line"></span></code></pre></div><h2 id="enable-sudo" tabindex="-1">Enable sudo <a class="header-anchor" href="#enable-sudo" aria-hidden="true">#</a></h2><p>\u{1F9D0} This will give your user administrative privileges</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">EDITOR=nano visudo</span></span>
<span class="line"></span></code></pre></div><p>\u{1F4A5} Uncomment (remove the # in front of) the following lines</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">%wheel ALL=(ALL) ALL</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),l=[r];function t(p,d,i,c,u,h){return e(),a("div",null,l)}const b=s(o,[["render",t]]);export{_ as __pageData,b as default};