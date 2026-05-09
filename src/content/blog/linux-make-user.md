---
title: 'Добавление пользователя в Arch Linux'
description: 'Работа с диском в Linux'
pubDate: 'May 07 2026'
heroImage: '../../assets/placeholder.png'
---
   
Чтобы добавить нового пользователя, достаточно воспользоваться командой `useradd USERNAME`

<img src="../../images/guides-images/linux/useradd-arch-command.png">

Без пароля в учётной записи мало смысла, поэтому нужно его добавить. Сделать это можно от рута командой: 
```
passwd USERNAME
```

<img src="../../images/guides-images/linux/passwd-arch-command.png">

Если попытаться использовать sudo с созданным пользователем, это приведёт к ошибке: *"USERNAME is not in the sudoers file"*

<img src="../../images/guides-images/linux/is-not-int-the-sudoers-file.png">

Использовать sudo от нового пользователя можно, если внести изменения в файл */etc/sudoers* от рута в текстовом редакторе, например: `nano /etc/sudoers`

<img src="../../images/guides-images/linux/nano-sudoers-arch-command.png">

А именно - раскомментировать строку *%wheel ALL=(ALL:ALL) ALL*

<img src="../../images/guides-images/linux/sudoers-wheel-line.png">

После чего, добавить пользователя в группу *wheel* командой `usermod -a -G wheel USERNAME`

<img src="../../images/guides-images/linux/usermod-arch-command.png">
