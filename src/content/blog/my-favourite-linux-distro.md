---
title: 'Мой идеальный дистрибутив'
description: 'Документирование попыток настроек Linux-дистрибутива'
pubDate: 'May 31 2026'
heroImage: '../../../images/distro/labwc-desktop.jpg'
---

## Базовые компоненты
- Операционная система: **[Void Linux](https://voidlinux.org)**
- Оконный менеджер: **[labwc](https://labwc.github.io)**
- Статус-бар: **[Waybar](https://waybar.org)**
- Загрузчик: **[rEFInd](https://www.rodsbooks.com/refind)**
- Терминал: **[Alacritty](https://alacritty.org)**
- Шелл: **[fish](https://fishshell.com)** + **[starship](https://starship.rs)**
- Меню: **[fuzzel](https://codeberg.org/dnkl/fuzzel)**
- Звук: **[PipeWire](https://pipewire.org)**
- Сеть: **[iwd](https://archive.kernel.org/oldwiki/iwd.wiki.kernel.org)**
- Проводник: **[Dolphine](https://apps.kde.org/dolphin/)**

### Примечание
1. Использование **[yambar](https://github.com/neonkore/yambar)** оказалось неудобным из-за невозможности создания полупрозрачного "островка" поверх других окон
2. На компьютере с видеокартой NVIDIA приоритет был отдан **[GRUB](https://www.gnu.org/software/grub)** с кастомной темой из [сборника с GitHub](https://github.com/jacksaur/Gorgeous-GRUB), а не rEFInd, из-за необходимости передачи параметров конфигурации для корректной загрузки

## Программное обеспечение
### Интерфейс
- **[swaybg](https://swaybg.com)** - установка обоев рабочего стола
- **[wlr-randr](https://gitlab.freedesktop.org/emersion/wlr-randr)** - управление герцовкой мониторов

#### Скрипты
Выбор случайного файла изображения (`random_image_path.sh`):

```sh
#!/bin/sh
IMAGES_PATH="$HOME/Images/Wallpapers"
cd $IMAGES_PATH
ls | sort -R | tail -1
```

Установка случайно выбранного изображения в качестве обоев рабочего стола (`set_random_wallpaper.sh`):

```sh
#!/bin/fish

swaybg -i (echo ~/Images/Wallpapers/(sh ~/.config/swaybg/scripts/random_image_path.sh)) &> /dev/null &
```

### Базовый минимум
#### Буфер обмена
- **[wl-clipboard](https://github.com/bugaevc/wl-clipboard)**
- **[cliphist](https://github.com/sentriz/cliphist)**
- **[wtype](https://github.com/atx/wtype)**

#### Скриншоты
- **[grim](https://gitlab.freedesktop.org/emersion/grim) + [slurp](https://github.com/emersion/slurp)** для снимка экрана и выбора области соответственно

Скрипт копирования выбранной области экрана в буфер обмена (`screenshot_area.sh`):

```sh
!#/bin/bash
grim -g "$(slurp)" - | wl-copy
```

### Питание
- **[swaylock](https://github.com/swaywm/swaylock)** + **[swayidle](https://github.com/swaywm/swayidle)** + **[wlopm](https://sr.ht/~leon_plickat/wlopm)** - блокировка экрана
- **[polkit](https://github.com/polkit-org/polkit)** - спящий режим
- **[tlp](https://linrunner.de/tlp)** - оптимизация для работы от аккумулятора

#### Скрипты
```sh
#!/bin/bash
swayidle -w \
  timeout 300 'swaylock -f -c 000000' \
  timeout 600 'wlopm --off \*' \
  resume 'wlopm --on \*' \
  before-sleep 'swaylock -f -c 000000' >/dev/null 2>&1 &
```

### Бредик
- Замена **[sudo](https://www.sudo.ws/sudo)** на **[doas](https://github.com/Duncaen/OpenDoas)**


## Дополнительная информация
### Разбиение диска
- EFI - fat32 - 1G (`/boot/efi`)
- SWAP - 4G
- Оставшееся - BTRF (`/`)

### Горячие клавиши
#### labwc
- `W` + `p` - вызов меню
- `W` + `v` - вызов меню выбора Emoji
- `W` + `f` - открытие браузера
- `W` + `l` - блокировка экрана
- `A` + `S` - переключение раскладки
- `W` + `Return` - открытие терминала
- `W` + `S` + `s` - копирование скриншота выбранной области в буфер обмена
- `PrtSc` - копирование скриншота всего экрана в буфер обмена


##### Примечание:
1. **Пояснение обозначений:** *W* - клавиша *Win/Super*, *S* - клавиша *Shift*, *Return* - клавиша *Enter*, *A* - клавиша *Alt*
2. Шаблон файла конфигурации по умолчанию находится по пути `/usr/share/doc/labwc/rc.xml`, для безопасного внесения изменений, можно скопировать в `~/.config/labwc/rc.xml`
