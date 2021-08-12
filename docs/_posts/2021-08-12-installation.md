---
layout: post
title:  Installation
date:   2021-08-12 10:19:32 -0700
categories: get-started
---

Insomnia is available on Mac, Windows, and Linux. If you have not yet downloaded Insomnia, visit the Downloads Page.

### Mac

Download and double-click the disk image. When prompted drag Insomnia to your Applications folder. This will ensure that future updates can be installed correctly.

The minimum OS version supported is macOS 10.12 (Sierra).
macOS users can also install Insomnia using Brew Cask via the insomnia package:

`brew install --cask insomnia`

### Windows

The Windows application is a generic installer .exe. Double click the installer file to install Insomnia.

There is also a portable version that can be ran without any installation.

### Linux
There are many distributions of Linux in the world. Insomnia should be able to run on the most popular ones.

Ubuntu/Debian
There is a Debian package apt repository that can be added and installed using apt-get. You can also manually download the latest debian package here.

```
Add to sources
echo "deb [trusted=yes arch=amd64] https://download.konghq.com/insomnia-ubuntu/ default all" \
    | sudo tee -a /etc/apt/sources.list.d/insomnia.list

# Refresh repository sources and install Insomnia
sudo apt-get update
sudo apt-get install insomnia
```

#### Other Linux Distributions

Snap is a new cross-platform package format that supports convenient auto-updates. You can view Insomnia on Snapcraft or install it directly with the following command.

`sudo snap install insomnia`

There is also a portable AppImage package that can be run directly as an executable. Double click the package or run it from the command line.

#### Troubleshooting Linux Installations
Here are some issues that have caused problems for Linux users in the past

* /tmp folder must allow execution
* after installed snap, you might need systemctl restart snapd.service (More details)
* Insomnia is only compatible with 64-bit systems

### Previous Versions

To roll-back, you can download a previous version from the Releases Page. Keep in mind that this process is only intended for debugging and emergencies, as the app will try to update itself after it launches.