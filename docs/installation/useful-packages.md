# Drivers and useful packages

Install the graphics and audio packages needed by your desktop before continuing to the bootloader page. The remaining sections are optional. Commands run as root inside the chroot.

## Graphics drivers

Identify your hardware:

```bash
lspci -k | grep -A 3 -E '(VGA|3D|Display)'
```

Install drivers for each GPU you use, including both GPUs on a hybrid laptop. The commands below target current hardware; consult the linked wiki pages for older generations.

### AMD

```bash
pacman -S mesa vulkan-radeon
```

For Steam and other 32-bit graphics applications, enable multilib and add:

```bash
pacman -S lib32-mesa lib32-vulkan-radeon
```

VA-API support is included in Mesa. See [AMDGPU](https://wiki.archlinux.org/title/AMDGPU) for older GPUs and hardware video acceleration.

### Intel

```bash
pacman -S mesa vulkan-intel
```

For 32-bit graphics applications:

```bash
pacman -S lib32-mesa lib32-vulkan-intel
```

Video acceleration packages depend on the GPU generation; see [Intel graphics](https://wiki.archlinux.org/title/Intel_graphics). The legacy `xf86-video-intel` Xorg driver is not a default requirement.

### NVIDIA

Select the driver by GPU generation. The current open kernel modules support **Turing and newer**, not every NVIDIA card. For the `linux` kernel installed by this guide:

```bash
pacman -S nvidia-open nvidia-utils
```

For Steam, add `lib32-nvidia-utils` after enabling multilib. Use `nvidia-open-lts` with `linux-lts`, or `nvidia-open-dkms` plus matching kernel headers for other kernels.

Maxwell, Pascal and Volta need the legacy `nvidia-580xx-dkms` AUR branch and matching `nvidia-580xx-utils` (plus `lib32-nvidia-580xx-utils` for 32-bit applications). These require [AUR setup](/post-installation/#aur-packages) as a regular user and headers for each installed kernel. For a fresh install on this hardware, complete the base system and boot into a console first; postpone enabling a graphical login until the driver is installed. If you already enabled a display manager, disable that service before rebooting. Older cards need other legacy branches or Nouveau. Do not mix legacy and current NVIDIA userspace libraries.

Read [NVIDIA](https://wiki.archlinux.org/title/NVIDIA) for the hardware support table, hybrid graphics and power-management caveats. Arch's [driver transition notice](https://archlinux.org/news/nvidia-590-driver-drops-pascal-support-main-packages-switch-to-open-kernel-modules/) explains the package change.

### Initramfs and virtual machines

Keep the default `kms` hook for in-tree drivers. Only add explicit modules when your hardware requires them, preserving any existing `MODULES` entries; see [early KMS](https://wiki.archlinux.org/title/Kernel_mode_setting#Early_KMS_start). The next page regenerates the initramfs after configuration.

For a VM, install guest integration appropriate to its hypervisor and virtual GPU: [VirtualBox](https://wiki.archlinux.org/title/VirtualBox/Install_Arch_Linux_as_a_guest), [VMware](https://wiki.archlinux.org/title/VMware/Install_Arch_Linux_as_a_guest), or [QEMU](https://wiki.archlinux.org/title/QEMU). The VMware Xorg driver is not a universal VM driver.

## Audio

Use PipeWire with WirePlumber:

```bash
pacman -S pipewire pipewire-alsa pipewire-pulse wireplumber alsa-utils
```

The user services start with the desktop session; do not enable them as system services. Install `pipewire-jack` only if you need JACK compatibility. Plasma includes volume controls; `pavucontrol` or `pavucontrol-qt` are optional alternatives. See [PipeWire](https://wiki.archlinux.org/title/PipeWire).

## Bluetooth

```bash
pacman -S bluez bluez-utils
systemctl enable bluetooth.service
```

Plasma includes Bluedevil; other desktops can use their own Bluetooth settings or `blueman`. PipeWire does not need `pulseaudio-bluetooth`.

## Printing and scanning

Start with driverless printing for supported IPP printers:

```bash
pacman -S cups
systemctl enable cups.service
```

For network printer discovery, install `avahi` and enable `avahi-daemon.service`. Use Plasma's `print-manager` or `system-config-printer` to add printers. Install `gutenprint`, `hplip` or other device-specific drivers only if your model needs them. See [CUPS](https://wiki.archlinux.org/title/CUPS).

For supported network scanners, install `sane-airscan` with `skanlite` (Qt) or `simple-scan` (GTK). Supported USB IPP devices may need `ipp-usb`. Local scanning does not require enabling `saned.socket`; see [SANE](https://wiki.archlinux.org/title/SANE).

## SSD maintenance

For supported SSDs:

```bash
systemctl enable fstrim.timer
```

Encrypted systems also need a deliberate [discard configuration](/encryption/#header-backup-and-ssd-discard). The timer alone cannot trim through a LUKS mapping that blocks discard.

## File tools and network shares

Install what you use, for example:

```bash
pacman -S 7zip unzip unrar rsync xdg-user-dirs
```

Use `exfatprogs` for native exFAT filesystem tools. Linux includes the `ntfs3` driver; `ntfs-3g` remains an alternative. Network shares may need `nfs-utils` or `cifs-utils`, and GTK file managers commonly use `gvfs` integrations.

NetworkManager is already installed and enabled. Add VPN plugins only for the VPN you use; do not enable another network manager for the same interface.

## Android tools

For ADB access as your regular user:

```bash
pacman -S android-tools android-udev
usermod -aG adbusers yourusername
```

## Alternative shells

For Zsh:

```bash
pacman -S zsh zsh-completions
chsh -s /usr/bin/zsh yourusername
```

Or for Fish:

```bash
pacman -S fish
chsh -s /usr/bin/fish yourusername
```
