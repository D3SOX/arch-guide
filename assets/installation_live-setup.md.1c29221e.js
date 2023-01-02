import{_ as s,c as e,o as a,a as n}from"./app.bbaf4cd4.js";const C=JSON.parse('{"title":"Live Setup","description":"","frontmatter":{},"headers":[{"level":2,"title":"Set keyboard layout","slug":"set-keyboard-layout","link":"#set-keyboard-layout","children":[]},{"level":2,"title":"If you use Wi-Fi to connect to your router","slug":"if-you-use-wi-fi-to-connect-to-your-router","link":"#if-you-use-wi-fi-to-connect-to-your-router","children":[]},{"level":2,"title":"Check internet connection","slug":"check-internet-connection","link":"#check-internet-connection","children":[]},{"level":2,"title":"Sync time","slug":"sync-time","link":"#sync-time","children":[]},{"level":2,"title":"Check if booted in BIOS or UEFI","slug":"check-if-booted-in-bios-or-uefi","link":"#check-if-booted-in-bios-or-uefi","children":[]}],"relativePath":"installation/live-setup.md","lastUpdated":1672666366000}'),o={name:"installation/live-setup.md"},t=n(`<h1 id="live-setup" tabindex="-1">Live Setup <a class="header-anchor" href="#live-setup" aria-hidden="true">#</a></h1><p>At this point, I assume you&#39;re already in the archiso. Make sure you are using the latest version which can be found on the <a href="https://www.archlinux.org/download/" target="_blank" rel="noreferrer">official download site</a></p><h2 id="set-keyboard-layout" tabindex="-1">Set keyboard layout <a class="header-anchor" href="#set-keyboard-layout" aria-hidden="true">#</a></h2><p>⌨️ The default keymap is US. Available layouts can be listed with:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/share/kbd/keymaps/</span><span style="color:#A6ACCD;">**</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">.map.gz</span></span>
<span class="line"></span></code></pre></div><p>Set your keymap (replace <code>yourkeymap</code> with your keymap e.g. <code>de-latin1</code>)</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">loadkeys</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yourkeymap</span></span>
<span class="line"></span></code></pre></div><h2 id="if-you-use-wi-fi-to-connect-to-your-router" tabindex="-1">If you use Wi-Fi to connect to your router <a class="header-anchor" href="#if-you-use-wi-fi-to-connect-to-your-router" aria-hidden="true">#</a></h2><p>📶 Use this tool to connect to your network</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight has-diff"><code><span class="line"><span style="color:#FFCB6B;">iwctl</span></span>
<span class="line"><span style="color:#FFCB6B;">device</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># your device name might be different (replace wlan0)</span></span>
<span class="line"><span style="color:#FFCB6B;">station</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wlan0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">scan</span></span>
<span class="line"><span style="color:#FFCB6B;">station</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wlan0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get-networks</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># replace &lt;SSID&gt; with your network name from the previous command</span></span>
<span class="line"><span style="color:#FFCB6B;">station</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wlan0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connect</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">SSI</span><span style="color:#A6ACCD;">D</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span></span>
<span class="line"></span></code></pre></div><h2 id="check-internet-connection" tabindex="-1">Check internet connection <a class="header-anchor" href="#check-internet-connection" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">ping</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">archlinux.org</span></span>
<span class="line"></span></code></pre></div><h2 id="sync-time" tabindex="-1">Sync time <a class="header-anchor" href="#sync-time" aria-hidden="true">#</a></h2><p>🕒 Ensure the system clock is accurate</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">timedatectl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set-ntp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span></code></pre></div><h2 id="check-if-booted-in-bios-or-uefi" tabindex="-1">Check if booted in BIOS or UEFI <a class="header-anchor" href="#check-if-booted-in-bios-or-uefi" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/sys/firmware/efi/efivars</span></span>
<span class="line"></span></code></pre></div><p>If the directory does not exist, the system may be booted in Legacy BIOS Mode. Most likely you want to do a UEFI install so please double-check if your system supports UEFI and you selected the correct entry in the boot menu (In most cases prefixed with UEFI)</p>`,18),l=[t];function c(p,i,r,y,d,h){return a(),e("div",null,l)}const b=s(o,[["render",c]]);export{C as __pageData,b as default};