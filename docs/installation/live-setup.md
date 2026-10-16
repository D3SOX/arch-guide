# Live setup

Download a current ISO from the [official download page](https://archlinux.org/download/) and follow its signature verification instructions before booting it.

## Set the keyboard layout

The console defaults to US. List layouts, then load yours; this example uses German:

```bash
localectl list-keymaps
loadkeys de-latin1
```

Use the same layout when entering encryption passwords and configuring the installed system.

## Connect to the internet

Wired networking normally connects automatically. For Wi-Fi, enter `iwctl`, then run the following commands inside its prompt, replacing `wlan0` and the network name:

```text
device list
station wlan0 scan
station wlan0 get-networks
station wlan0 connect "Your network name"
exit
```

Check connectivity and synchronize the clock:

```bash
ping -c 3 archlinux.org
timedatectl set-ntp true
```

## Check the firmware mode

```bash
ls /sys/firmware/efi/efivars
```

If this directory exists, the ISO booted in UEFI mode. Otherwise it booted in BIOS mode. For a UEFI installation, reboot and select the UEFI entry for your USB drive if necessary.
