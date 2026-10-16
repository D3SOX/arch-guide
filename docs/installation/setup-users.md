# Set up users

Set a root password for recovery:

```bash
passwd
```

Create your regular account, replacing `yourusername`:

```bash
useradd -m -G wheel -s /bin/bash yourusername
passwd yourusername
```

Desktop sessions receive device access through logind. Do not add broad device-access groups such as `input`, `disk` or `video` by default. See [Users and groups](https://wiki.archlinux.org/title/Users_and_groups).

Give the wheel group administrative access using the validated sudo editor:

```bash
EDITOR=nano visudo
```

Uncomment this rule:

```text
%wheel ALL=(ALL:ALL) ALL
```
