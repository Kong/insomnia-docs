---
layout: article-detail
title:  Install Insomnia
category: "Get Started"
category-url: get-started
---

Insomnia is available on macOS, Windows, and Linux. If you haven't already downloaded Insomnia, visit the [Download Page](https://insomnia.rest/download).

## Mac

{:.alert .alert-primary}
**Note**: The minimum macOS version supported is macOS 10.12 Sierra.

Get Insomnia on macOS through a download, or by using Brew.

[Download](https://insomnia.rest/download) and double-click the disk image. When prompted, drag Insomnia to your **Applications** folder. This ensures future updates can be installed correctly.

macOS users can also install Insomnia using [Brew Cask](https://brew.sh/) via the Insomnia package:

```bash
brew install --cask insomnia
```

## Windows

Get Insomnia on Windows through a download or by downloading our portable version.

The Windows application is a generic installer `.exe`. Double click the installer file to install Insomnia in your existing filesystem. This option is recommended, as it will enable automatic app updates.

There is also a [portable version](https://github.com/Kong/insomnia/releases/tag/core%402021.6.0) that can be run in place, and without any installation.

### Uninstall on Windows

To uninstall Insomnia from a Windows computer simply go to the settings menu on Windows and select **Apps**.

From the Add/Remove Programs section, click on the app and select to uninstall.

## Linux

Insomnia runs on common Linux distributions.

### Ubuntu and Debian

The Debian package apt repository can be added and installed using `apt-get`.

```bash
# Add to sources
echo "deb [trusted=yes arch=amd64] https://download.konghq.com/insomnia-ubuntu/ default all" \
    | sudo tee -a /etc/apt/sources.list.d/insomnia.list

# Refresh repository sources and install Insomnia
sudo apt-get update
sudo apt-get install insomnia
```

You can also download the [latest Debian package](https://download.konghq.com/insomnia-ubuntu/).

### Snap

[Snap](https://snapcraft.io/) is a new cross-platform package format that supports convenient auto-updates. You can view [Insomnia on Snapcraft](https://snapcraft.io/insomnia) or install it directly with the following command.

```bash
sudo snap install insomnia
```

There's also a [portable AppImage package](https://github.com/Kong/insomnia/releases/tag/core%402021.6.0) that can be run directly as an executable.

### Troubleshooting Linux Installations

Here are some issues that have caused problems for Linux users in the past:

* `/tmp` folder must allow execution
* After installed snap, you might need [`systemctl restart snapd.service`](https://bugs.launchpad.net/ubuntu/+source/snapd/+bug/1631514)
* Insomnia is only compatible with 64-bit systems

## Previous Insomnia Versions

To roll back to a previous Insomnia version, download the version from [GitHub Releases](https://github.com/kong/insomnia/releases). This process is only intended for debugging and emergencies, as the app will try to update itself after it launches.
