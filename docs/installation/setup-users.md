# Setup users

## Set root password
🔑 Use a strong and complicated password
```bash
passwd
```

## Add your user
🧑 This will be your user you use to log in. For group reference see <https://wiki.archlinux.org/index.php/Users_and_groups#Group_list>
```bash
useradd -m -G audio,video,input,wheel,sys,log,rfkill,lp,adm -s /bin/bash yourusername
passwd yourusername
```
🎰 If you want to force your user to change password after first login:
```bash
chage -d 0 yourusername
```

## Enable sudo
🧐 This will give your user administrative privileges
```bash
EDITOR=nano visudo
```
💥 Uncomment (remove the # in front of) the following lines
```
%wheel ALL=(ALL) ALL
```
