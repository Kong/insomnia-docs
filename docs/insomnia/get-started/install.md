---
layout: article-detail
title:  Install Insomnia
---

Insomnia is available on macOS, Windows, and Linux. If you haven't already downloaded Insomnia, visit the [Download Page](https://insomnia.rest/download).

<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active side-tabs" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">macOS</button>
    <button class="nav-link side-tabs" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Windows</button>
    <button class="nav-link side-tabs" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Linux</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <div class="alert alert-primary">
    <b>Note</b>: The minimum macOS version supported is macOS 10.12 Sierra.
    </div>
    <a href="https://insomnia.rest/download">Download Insomnia on macOS</a> or use <a href="https://brew.sh/">Homebrew</a>:
<br/><br/>
<pre class="highlight"><code>brew install --cask insomnia</code></pre>
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
<a href="https://insomnia.rest/download">Download Insomnia on Windows</a>
<br/><br/>
The Windows application is a generic installer <code>.exe</code>.
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
<h2>Ubuntu and Debian</h2>
The Debian package apt repository can be added and installed using <code>apt-get</code>:
<br/><br/>

1. Add the package to sources:
<pre class="highlight"><code>
curl -1sLf \
  'https://packages.konghq.com/public/insomnia/setup.deb.sh' \
  | sudo -E distro=ubuntu codename=focal bash
</code></pre>

2. Refresh repository sources and install Insomnia:
<pre class="highlight"><code>
sudo apt-get update
sudo apt-get install insomnia
</code></pre>

You can also download the older <a href="https://cloudsmith.io/~kong/repos/insomnia-legacy">year-versioned Debian packages</a> or the <a href="https://cloudsmith.io/~kong/repos/insomnia">latest Debian packages</a> directly from our package hosting.
<br/><br/>
<h2>Snap</h2>

<a href="https://snapcraft.io/">Snap</a> is a cross-platform package format that supports convenient auto-updates. You can install <a href="https://snapcraft.io/insomnia">Insomnia on Snapcraft</a> or install it directly:
<br/><br/>
<pre class="highlight"><code>sudo snap install insomnia</code></pre>

You can also run a <a href="https://updates.insomnia.rest/downloads/release/latest?app=com.insomnia.app">AppImage package</a> as an executable.
<br/><br/>
<h3>Troubleshooting Linux Installations</h3>

Use the following recommendations if you're encountering problems while installing Insomnia on Linux:
<br/><br/>
<ul>
    <li>The <code>/tmp</code> folder must allow execution</li>
    <li>After installing Snap, you may need <a href="https://bugs.launchpad.net/ubuntu/+source/snapd/+bug/1631514"><code>systemctl restart snapd.service</code></a></li>
    <li>Insomnia is only compatible with 64-bit systems</li>
</ul>
  </div>
</div>

## Install older Insomnia versions

To roll back to a previous Insomnia version, download the version from the [GitHub Releases](https://github.com/kong/insomnia/releases). This is only intended for debugging and emergencies, as the app will try to update itself after it launches.
