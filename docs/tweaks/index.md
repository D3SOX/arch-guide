# Some fixes and tweaks

## Performance tweaks

### Decrease swappiness

You may want to decrease the swappiness if you have enough RAM, so the system only uses swap when it absolutely has to

```bash
sudo nano /etc/sysctl.d/99-swappiness.conf
```

```ini
vm.swappiness = 10
```

### Install OOM killer

An Out Of Memory (OOM) killer terminates applications when you would otherwise run out of memory.
::: warning
⚠️ This may lead to data loss if an application with unsaved data is killed.
:::

```bash
yay -S earlyoom
```

## Compatibility tweaks

🐛 This will fix some bugs and compatibility issues

### Citra Emulator

```bash
sudo ln -sf /usr/lib/libncursesw.so.6 /usr/lib/libtinfo.so.5
yay -S libsndio-61-compat
```

### Spotify local files

```bash
yay -S ffmpeg-compat-57 ffmpeg
```

## Fix on shutdown "Failed to start user manager service for user 174" (sddm)

```bash
sudo chage --expiredate -1 sddm
```

## Force Color Emoji

```bash
yay -S ttf-joypixels
```

If the default font includes some emoji characters, they will be used over the characters provided by a dedicated emoji font, resulting in inconsistent display. Use the following config to enforce rendering emojis via JoyPixels.
::: warning
⚠️ Be aware that there is a bug when you do not have the [Windows Fonts](/post-installation/#windows-fonts) installed. See <https://bugs.archlinux.org/task/66080>
:::

```bash
sudo nano /etc/fonts/conf.d/75-joypixels.conf
```

::: details Click me to view the code
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>

    <!--
    Treat this file as a reference and modify as necessary if you are not satisfied with the results.


    This config attempts to guarantee that colorful emojis from JoyPixels will be displayed,
    no matter how badly the apps and websites are written.

    It uses a few different tricks, some of which introduce conflicts with other fonts.
    -->


    <!--
    This adds a generic family 'emoji',
    aimed for apps that don't specify specific font family for rendering emojis.
    -->
    <match target="pattern">
        <test qual="any" name="family"><string>emoji</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <!--
    This adds JoyPixels as a final fallback font for the default font families.
    In this case, JoyPixels will be selected if and only if no other font can provide a given symbol.

    Note that usually other fonts will have some glyphs available (e.g. Symbola or DejaVu fonts),
    causing some emojis to be rendered in black-and-white.
    -->
    <match target="pattern">
        <test name="family"><string>sans</string></test>
        <edit name="family" mode="append"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test name="family"><string>serif</string></test>
        <edit name="family" mode="append"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test name="family"><string>sans-serif</string></test>
        <edit name="family" mode="append"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test name="family"><string>monospace</string></test>
        <edit name="family" mode="append"><string>JoyPixels</string></edit>
    </match>

    <!--
    Recognize legacy ways of writing JoyPixels family name.
    -->
    <match target="pattern">
        <test qual="any" name="family"><string>EmojiOne</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>Emoji One</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>EmojiOne Color</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>EmojiOne Mozilla</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <!--
    Use JoyPixels when other popular fonts are being specifically requested.

    It is quite common that websites would only request Apple and Google emoji fonts.
    These aliases will make JoyPixels be selected in such cases to provide good-looking emojis.

    This obviously conflicts with other emoji fonts if you have them installed.
    -->
    <match target="pattern">
        <test qual="any" name="family"><string>Apple Color Emoji</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>Segoe UI Emoji</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>Segoe UI Symbol</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>Noto Color Emoji</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>NotoColorEmoji</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>Android Emoji</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>Noto Emoji</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>Twitter Color Emoji</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>Twemoji</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>Twemoji Mozilla</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>TwemojiMozilla</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>EmojiTwo</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>Emoji Two</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>EmojiSymbols</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>

    <match target="pattern">
        <test qual="any" name="family"><string>Symbola</string></test>
        <edit name="family" mode="assign" binding="same"><string>JoyPixels</string></edit>
    </match>
</fontconfig>
```
:::

## Desktop icons for nemo

```bash
gsettings set org.nemo.desktop show-desktop-icons true
```

## Backup / Restore

### System

I recommend Timeshift to back up your system. Install it with

```bash
yay -S timeshift cronie
systemctl enable --now cronie
```

For more information please refer to <https://github.com/teejee2008/timeshift>

### Personal files

I recommend Déjà Dup to back up your personal files. Install it with

```bash
yay -S deja-dup
```

You may want to exclude certain folders (like Nextcloud or other cloud services, Games, .cache, .config and .local/share if you don't want to back up your program config files)

### Packages / Services List

See <https://wiki.archlinux.org/index.php/Pacman/Tips_and_tricks#List_of_installed_packages>

#### Backup

```bash
yay -Qqe > pkglist.txt
systemctl list-unit-files --state=enabled > enabled-services.txt
```

#### Restore

```bash
yay -S --needed - < pkglist.txt
# Re-enable services with systemctl enable
```
