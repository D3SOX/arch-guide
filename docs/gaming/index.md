# Gaming

## Video driver

If you followed [Installation/Useful packages/Graphics Driver](../installation/useful-packages.md#graphics-driver)
your graphics driver & Vulkan should be already set-up correctly

## Graphics card configuration tool

### AMD

:::: code-group

```bash [paru]
paru -S radeon-profile-git radeon-profile-daemon-git
```

```bash [yay]
yay -S radeon-profile-git radeon-profile-daemon-git
```

::::

```bash
systemctl enable --now radeon-profile-daemon
```

### NVIDIA

:::: code-group

```bash [paru]
paru -S nvidia-settings
```

```bash [yay]
yay -S nvidia-settings
```

::::

## Wine

### Libraries

Recommended by [Lutris](https://github.com/lutris/docs/blob/master/WineDependencies.md#archendeavourosmanjaroother-arch-derivatives)

:::: code-group

```bash [paru]
paru -S --needed wine-staging giflib lib32-giflib libpng lib32-libpng libldap lib32-libldap gnutls lib32-gnutls mpg123 lib32-mpg123 openal lib32-openal v4l-utils lib32-v4l-utils libpulse lib32-libpulse libgpg-error lib32-libgpg-error alsa-plugins lib32-alsa-plugins alsa-lib lib32-alsa-lib libjpeg-turbo lib32-libjpeg-turbo sqlite lib32-sqlite libxcomposite lib32-libxcomposite libxinerama lib32-libxinerama libgcrypt lib32-libgcrypt libxslt lib32-libxslt libva lib32-libva gtk3 lib32-gtk3 gst-plugins-base-libs lib32-gst-plugins-base-libs vulkan-icd-loader lib32-vulkan-icd-loader
```

```bash [yay]
yay -S --needed wine-staging giflib lib32-giflib libpng lib32-libpng libldap lib32-libldap gnutls lib32-gnutls mpg123 lib32-mpg123 openal lib32-openal v4l-utils lib32-v4l-utils libpulse lib32-libpulse libgpg-error lib32-libgpg-error alsa-plugins lib32-alsa-plugins alsa-lib lib32-alsa-lib libjpeg-turbo lib32-libjpeg-turbo sqlite lib32-sqlite libxcomposite lib32-libxcomposite libxinerama lib32-libxinerama libgcrypt lib32-libgcrypt libxslt lib32-libxslt libva lib32-libva gtk3 lib32-gtk3 gst-plugins-base-libs lib32-gst-plugins-base-libs vulkan-icd-loader lib32-vulkan-icd-loader
```

::::

:::: code-group

```bash [paru]
paru -S vkd3d lib32-vkd3d faudio lib32-faudio
```

```bash [yay]
yay -S vkd3d lib32-vkd3d faudio lib32-faudio
```

::::

### Custom Wine/Proton

For custom Proton, I recommend GloriousEgroll's builds. For [Steam](https://github.com/GloriousEggroll/proton-ge-custom/) and [Lutris](https://github.com/GloriousEggroll/wine-ge-custom/).
These can be installed using [ProtonUp-Qt](https://github.com/DavidoTek/ProtonUp-Qt)
:::: code-group

```bash [paru]
paru -S protonup-qt
```

```bash [yay]
yay -S protonup-qt
```

::::

For custom Wine, I recommend [Tk-Glitch](https://github.com/Frogging-Family/wine-tkg-git/) which can be downloaded from [here](https://nightly.link/Frogging-Family/wine-tkg-git/workflows/wine-arch/master/wine-tkg-build.zip) and installed with:

:::: code-group

```bash [paru]
unzip wine-tkg-build.zip && paru -U wine-tkg-*.pkg.tar.zst
```

```bash [yay]
unzip wine-tkg-build.zip && yay -U wine-tkg-*.pkg.tar.zst
```

::::

## Programs

Install basic gaming tools

:::: code-group

```bash [paru]
paru -S lutris steam gamemode lib32-gamemode
```

```bash [yay]
yay -S lutris steam gamemode lib32-gamemode
```

::::

## Custom kernel

:::: warning
If you are using NVIDIA and want to use a custom kernel you need to use `nvidia-dkms` since `nvidia` is just for the mainline `linux` kernel and `nvidia-lts` for `linux-lts`

:::: code-group

```bash [paru]
paru -Rdd nvidia
paru -S nvidia-dkms
```

```bash [yay]
yay -Rdd nvidia
yay -S nvidia-dkms
```

::::

Alternatively you can use [nvidia-all](https://github.com/Frogging-Family/nvidia-all) to get the latest NVIDIA driver for all kernels
::::

### Zen

:::: code-group

```bash [paru]
paru -S linux-zen linux-zen-headers
```

```bash [yay]
yay -S linux-zen linux-zen-headers
```

::::

### Tk-Glitch

See [linux-tkg](https://github.com/Frogging-Family/linux-tkg)

### After installing

You need to re-generate your grub config

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

## Tweak Esync

If this command prints out a value which is equal or greater to `524288` you're all set

```bash
ulimit -Hn
```

However, if it doesn't, or you want to further improve it:

```bash
sudo nano /etc/systemd/system.conf
sudo nano /etc/systemd/user.conf
```

append this in both files

```ini
DefaultLimitNOFILE=1024:1048576
```

Source: <https://github.com/zfigura/wine/blob/master/README.esync>

## Other tweaks

The Arch wiki has a page dedicated to [Gaming](https://wiki.archlinux.org/index.php/gaming) with a few other tweaks you might want to look into.
