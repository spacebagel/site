---
title: 'Работа с диском в Linux'
description: 'Работа с диском в Linux'
pubDate: 'May 07 2026'
heroImage: '../../assets/placeholder.png'
---
   
## 1. Работа с дисками и разделами

### Просмотр информации о дисках

```bash
fdisk -l</code>  # Вывод списка разделов и дисков
lsblk</code># Отображение всех блочных устройств
blkid</code># Просмотр UUID разделов
```
   
<img src="../../images/guides-images/linux/fdisk-l-command.png">


### Создание и управление разделами

```bash
fdisk /dev/sdX # Утилита для работы с MBR
gdisk /dev/sdX # Утилита для работы с GPT
# Основные команды в fdisk/gdisk:
# n — создать раздел, d — удалить, w — сохранить изменения
```

**Примечание:** X - буква нужного диска (например: sda, sdb)

<img src="../../images/guides-images/linux/fdisk-with-a-disk-command.png">

`m` - вывод всех доступных команд fdisk

<img src="../../images/guides-images/linux/fdisk-command-list.png">


`m` - вывод всех доступных команд gdisk

<img src="../../images/guides-images/linux/gdisk-command-list.png">
 
## 2. Файловые системы

### Проверка и фикс

```bash
fsck /dev/sdXN</code>   # Проверка целостности
ntfsfix /dev/sdXN</code># Исправление ошибок NTFS
```

<img src="../../images/guides-images/linux/create-and-check-ntfs-linux.png">

### Управление файловыми системами

```bash
mount /dev/sdXN /MOUNT_PATH</code>   # Монтирование раздела
umount /MOUNT_PATH</code>  # Демонтирование раздела
df -h</code># Просмотр свободного места на разделах
du -sh /dev/sdXN</code>    # Просмотр размера каталога
```

<img src="../../images/guides-images/linux/mount-umout-linux-command.png">

### Работа с файловыми системами

```bash
mkfs /dev/sdXN</code># Создание файловой системы
tune2fs -l /dev/sdXN</code>    # Просмотр параметров файловой системы ext*
ntfsundelete /dev/sdXN</code>  # Восстановление удаленных файлов на NTFS
```

**Примечание:** для работы с NTFS требуется установка пакета ntfs-3g.


<img src="../../images/guides-images/linux/add-filesystem-linux.png">

## 3. Файлы, каталоги и ссылки

### Мягкая и жесткая ссылка

```bash
ln FILE LINK_FILE</code>  # Жесткая ссылка
ln -s FILE LINK_FILE</code>    # Мягкая ссылка
```

<img src="../../images/guides-images/linux/hard-and-soft-links-linux.png">

### Базовые команды для работы с файлами

```bash
nano PATH</code># Редактирование файла в текстовом редакторе nano
cp PATH_1 PATH_2</code>   # Копирование файла
mv PATH_1 PATH_1</code>   # Перемещение/переименование файла
rm PATH</code>  # Удаление файла
touch PATH</code>    # Создание пустого файла или обновление времени изменения
cat PATH</code> # Просмотр содержимого файла
```

**Примечание:** под PATH понимается путь до файла с его именем FOLDER/FILE.XX

<img src="../../images/guides-images/linux/base-file-linux-commands.png">

### Поиск и информация

```bash
ls</code>   # Просмотр содержимого каталога
which COMMAND</code>  # Поиск исполняемого файла в PATH
whereis COMMAND</code># Поиск бинарников, исходников и man-страниц
command -v COMMAND</code>  # Альтернативная команда поиска бинариников
alias COMMAND</code>  # Поиск псевдонимов команды
```

**Примечание:** под COMMAND понимается имя команды

<img src="../../images/guides-images/linux/find-files-arch-commands.png">