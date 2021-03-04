# Useful packages

## General packages
```bash
pacman -S linux-headers linux-lts-headers dkms
pacman -S jshon expac git wget acpid avahi net-tools xdg-user-dirs
systemctl enable acpid avahi-daemon systemd-timesyncd
```

If system is running on a SSD
```bash
systemctl enable fstrim.timer
```

## Media Codecs
```bash
pacman -S gst-libav gst-plugins-base gst-plugins-good gst-plugins-bad gst-plugins-ugly gstreamer-vaapi gst-transcoder x265 x264 lame
```

## Printer support
🖨️ Add some packages needed for printing and scanning
### General packages
```bash
pacman -S system-config-printer foomatic-db foomatic-db-engine gutenprint gsfonts cups cups-pdf cups-filters sane
systemctl enable cups.service saned.socket
```
### Qt Scan Application
Use this if you use KDE Plasma or LXQt
```bash
pacman -S skanlite
```
### GTK Scan Application
Use this if you use another desktop environment
```bash
pacman -S simple-scan
```
### UI for HP Printers
🖨 Install this if you have a HP Printer
```bash
pacman -S hplip
```

## Bluetooth support
🔵 Add some packages needed for proper bluetooth support
```bash
pacman -S bluez bluez-utils pulseaudio-bluetooth
systemctl enable bluetooth
```

## Input Driver
These are some packages needed for certain input devices to function properly. It does no harm to install them, even if you wouldn't need them
```bash
pacman -S xf86-input-synaptics xf86-input-libinput xf86-input-evdev
```
When installing inside a virtual machine:
```bash
pacman -S xf86-input-vmmouse
```

## Graphics Driver

### Mesa
This is useful for all GPUs
```bash
pacman -S mesa lib32-mesa
```
### Vulkan
This is useful for all GPUs
```bash
pacman -S vulkan-icd-loader lib32-vulkan-icd-loader
```
### Open Source drivers
Only install this if you use an AMD or Intel GPU or want to use the open source NVIDIA driver (Nouveau, not developed by NVIDIA)
```bash
pacman -S <driver>
```
- `xf86-video-amdgpu` is for newer AMD GPUs
- `xf86-video-nouveau` is the open source NVIDIA driver
- `xf86-video-intel` is the open source Intel driver (You probably want to leave this out and it will use the modesetting driver. For more information refer to [the wiki](https://wiki.archlinux.org/index.php/Intel_graphics#Installation))
- `xf86-video-ati` is for older AMD GPUs
- `xf86-video-vmware` for VirtualBox, VMWare, QEMU
- `xf86-video-fbdev` for Hyper-V
- If you don't know it you can install all but it could happen that the internal graphics card is used if you install the driver for it

### Nvidia proprietary driver
Only install these packages if you are using a NVIDIA GPU
```bash
pacman -S nvidia nvidia-lts nvidia-utils lib32-nvidia-utils libvdpau lib32-libvdpau
```
### AMD Utils
Only install these packages if you are using an AMD GPU
```bash
pacman -S libva-mesa-driver lib32-libva-mesa-driver mesa-vdpau lib32-mesa-vdpau libva-vdpau-driver lib32-libva-vdpau-driver amdvlk lib32-amdvlk
```
### Intel Utils
Only install this package if you are using an Intel GPU
```bash
pacman -S vulkan-intel
```

### Add kernel module
```bash
nano /etc/mkinitcpio.conf
```
Change `MODULES=()` to
- `MODULES=(amdgpu)` if you installed `xf86-video-amdgpu`
- `MODULES=(nvidia)` if you installed `nvidia`
- `MODULES=(i915)` if you installed `xf86-video-intel`
- for any other driver you can skip this step

and run
```bash
mkinitcpio -P
```

## Networking
🖧 Those are essential networking tools
```bash
pacman -S networkmanager networkmanager-openvpn networkmanager-pptp networkmanager-vpnc
systemctl enable NetworkManager
```
### WiFi connection
📶 Those are essential tools if you connect to the internet via WiFi
```bash
pacman -S wireless_tools wpa_supplicant ifplugd dialog
```

## Some archive and file system utils
🗄️ Important tools for archives and file systems
```bash
pacman -S p7zip unrar unarchiver unzip unace xz rsync
pacman -S nfs-utils cifs-utils ntfs-3g exfat-utils
```

## Sound
🔊 Some essential packages for sound
```bash
pacman -S alsa-utils pulseaudio-alsa pulseaudio-equalizer
```
Control app for Qt Desktop (KDE Plasma or LXQt)
```bash
pacman -S pavucontrol-qt
```
Control app for GTK Desktop (another desktop environment)
```bash
pacman -S pavucontrol
```

🔇 PulseAudio fix notifications muting some media players
```bash
nano /etc/pulse/default.pa
```
💥 Comment (add # in front of) `# load-module module-role-cork`

## ADB
If you want the Android Debug Bridge working with your user:
```bash
pacman -S android-tools android-udev
usermod -aG adbusers yourusername
```

## Other shells

🐚 You may want to use another shell than bash
### zsh (Z Shell)
```bash
pacman -S zsh zsh-completions
chsh -s /usr/bin/zsh yourusername
```
### fish (Friendly interactive shell)
```bash
pacman -S fish
chsh -s /usr/bin/fish yourusername
```
