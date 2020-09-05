# Live Setup

At this point, I assume you're already in the archiso. Make sure you are using the latest version which can be found on the [official download site](https://www.archlinux.org/download/)

## Set keyboard layout
⌨️ The default keymap is US. Available layouts can be listed with:
```bash
ls /usr/share/kbd/keymaps/**/*.map.gz
```
Set your keymap (replace `yourkeymap` with your keymap e.g. `de-latin1`)
```bash
loadkeys yourkeymap
```

## If you use WiFi to connect to your router
📶 Use this tool to connect to your network
```bash
iwctl
device list
# your device name might be different (replace wlan0)
station wlan0 scan
station wlan0 get-networks
# replace <SSID> with your network name from the previous command
station wlan0 connect <SSID>
exit
```

## Check internet connection
```bash
ping -c 3 archlinux.org
```

## Sync time
🕒 Ensure the system clock is accurate
```bash
timedatectl set-ntp true
```

## Check if booted in BIOS or UEFI
```bash
ls /sys/firmware/efi/efivars
```
If the directory does not exist, the system may be booted in Legacy BIOS Mode.
Most likely you want to do a UEFI install so please double check if your system supports UEFI and you selected the correct entry in the boot menu (In most cases prefixed with UEFI)
