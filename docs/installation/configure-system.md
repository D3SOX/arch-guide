# Configure system

## The nano text editor

Nano is the text editor we will use in this tutorial. Basic Usage:

- Move with arrow keys
- `CTRL + O` and then `ENTER` to save
- `CTRL + X` to exit

## Setup hostname

📛 This will be the name of your PC on your network  (Replace `myhostname`)

```bash
echo myhostname > /etc/hostname
nano /etc/hosts
```

Add these lines

```
127.0.0.1   localhost
::1         localhost
127.0.1.1   myhostname.localdomain  myhostname
```

## Setup locale

🌐 Uncomment (remove the # in front of) all languages you need

```bash
nano /etc/locale.gen
```

🏁 Generate locales

```bash
locale-gen
```

🔘 Set locale

```bash
echo LANG=en_US.UTF-8 > /etc/locale.conf
export LANG=en_US.UTF-8
```

⌨️ Set tty keymap (replace `yourkeymap` with your keymap e.g. `de-latin1`)

```bash
echo KEYMAP=yourkeymap > /etc/vconsole.conf
```

## Setup time & date

📅 You can tab-complete your stuff after zoneinfo

```bash
ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
hwclock --systohc --utc
```

## Configure pacman

Edit pacman configuration file

```bash
nano /etc/pacman.conf
```

### Setup multilib

👾 multilib is a repository which contains 32-bit libraries and is disabled by default (needed for some games & software; highly recommended to enable)

💥 Uncomment (remove the # in front of) the following lines

```ini
[multilib]
Include = /etc/pacman.d/mirrorlist
```

### Enable parallel downloads

🌐 Depending on your internet connection enabling parallel downloads may speed up the package download process

💥 Uncomment (remove the # in front of) this line and set it to your desired value

```ini
ParallelDownloads = 5
```

### Extra candy

🍬 If you want some extra candy you can uncomment `Color` and `VerbosePkgLists` and add `ILoveCandy` under `Misc options`.

### After configuring

```bash
pacman -Syu
```
