---
layout: article-detail
title:  Install Insomnia
category: "Get Started"
category-url: get-started
---

Insomnia is available on macOS, Windows, and Linux. If you haven't already downloaded Insomnia, visit the [Download Page](https://insomnia.rest/download).

<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active side-tabs" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">MacOS</button>
    <button class="nav-link side-tabs" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Windows</button>
    <button class="nav-link side-tabs" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Linux</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <div class="alert alert-primary">
    <b>Note</b>: The minimum macOS version supported is macOS 10.12 Sierra.
    </div>
    Get Insomnia on macOS through a download, or by using Brew.
<br/><br/>
<a href="https://insomnia.rest/download">Download</a> and double-click the disk image. When prompted, drag Insomnia to your <b>Applications</b> folder. This ensures future updates can be installed correctly.
<br/><br/>
macOS users can also install Insomnia using <a href="https://brew.sh/">Brew Cask</a> via the Insomnia package:
<br/><br/>
<pre class="highlight"><code>brew install --cask insomnia</code></pre>
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
Get Insomnia on Windows through a download or by downloading our portable version.
<br/><br/>
The Windows application is a generic installer <code>.exe</code>. Double click the installer file to install Insomnia in your existing filesystem. This option is recommended, as it will enable automatic app updates.
<br/><br/>
There is also a <a href="https://updates.insomnia.rest/downloads/release/latest?app=com.insomnia.app">portable version</a> that can be run in place, and without any installation.
<br/><br/>
<h3>Uninstall on Windows</h3>
To uninstall Insomnia from a Windows computer, go to the settings menu on Windows and select <b>Apps</b>.
<br/><br/>
From the Add/Remove Programs section, click on the app and select to uninstall.
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
Insomnia runs on common Linux distributions.
<br/><br/>
<h3>Ubuntu and Debian</h3>

The Debian package apt repository can be added and installed using <code>apt-get</code>.
<br/><br/>
<pre class="highlight"><code># Add to sources
echo "deb [trusted=yes arch=amd64] https://download.konghq.com/insomnia-ubuntu/ default all" \
    | sudo tee -a /etc/apt/sources.list.d/insomnia.list

# Refresh repository sources and install Insomnia
sudo apt-get update
sudo apt-get install insomnia
</code></pre>

You can also download the <a href="https://download.konghq.com/insomnia-ubuntu/">latest Debian package</a>.
<br/><br/>
<h3>Snap</h3>

<a href="https://snapcraft.io/">Snap</a> is a new cross-platform package format that supports convenient auto-updates. You can view <a href="https://snapcraft.io/insomnia">Insomnia on Snapcraft</a> or install it directly with the following command.
<br/><br/>
<pre class="highlight"><code>sudo snap install insomnia</code></pre>

There's also a <a href="https://updates.insomnia.rest/downloads/release/latest?app=com.insomnia.app">portable AppImage package</a> that can be run directly as an executable.
<br/><br/>
<h3>Troubleshooting Linux Installations</h3>

Here are some issues that have caused problems for Linux users in the past:
<br/><br/>
<ul>
    <li><code>/tmp</code> folder must allow execution</li>
    <li>After installed snap, you might need <a href="https://bugs.launchpad.net/ubuntu/+source/snapd/+bug/1631514"><code>systemctl restart snapd.service</code></a></li>
    <li>Insomnia is only compatible with 64-bit systems</li>
</ul>
  </div>
</div>

## Previous Insomnia Versions

To roll back to a previous Insomnia version, download the version from [GitHub Releases](https://github.com/kong/insomnia/releases). This process is only intended for debugging and emergencies, as the app will try to update itself after it launches.
