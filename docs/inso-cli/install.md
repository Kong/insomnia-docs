---
layout: article-detail
title:  Install Inso CLI
category: "Inso CLI"
category-url: inso-cli
---

Install Inso CLI using our single executable commands for your operating system, or by using NPM.

## Install Single Executable

Inso CLI can be downloaded and run as a single executable on MacOS, Windows, and Linux. Download the release artifacts from [GitHub Releases](https://github.com/Kong/insomnia/releases/tag/lib%402.4.0).

To use our single executable options, select your operating system.

<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active side-tabs" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">MacOS</button>
    <button class="nav-link side-tabs" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Windows</button>
    <button class="nav-link side-tabs" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Linux</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  On MacOS, Inso CLI can also be installed via Homebrew:
<br/><br/>
<pre class="highlight"><code>brew install inso</code></pre>
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  On Windows, extract the executable using <a href="https://www.7-zip.org/">7zip</a>, or via the command prompt:
  <br/><br/>
<pre class="highlight"><code>tar -xf inso-windows-2.4.0.zip
./inso --version</code></pre>
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">On Linux, download the Linux tar file from <a href="https://github.com/Kong/insomnia/releases/tag/lib%402.4.0">GitHub</a>. Extract the file by using the following command where <code>{name}</code> is the tar file name:
  <br/><br/>
  <pre class="highlight"><code>tar -xf {name}.tar.xz</code></pre>
  </div>
</div>

## Install via NPM

{:.alert .alert-primary}
**Note**: Inso CLI is currently only compatible with **Node.js 12.x LTS**. If you need to work with multiple Node.js versions on your local machine, you can use a tool like [nvm](https://github.com/nvm-sh/nvm) (MacOS and Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (Windows) to manage your versions.

### Prerequisites

Before you start, install [Node.js](https://nodejs.org/en/download). If you're unsure if you have Node.js installed already (or which version), you can run the following command in your terminal:

```bash
node --version
```

If a version number prints, then you have Node.js installed. If the version is not 12, set up [nvm](https://github.com/nvm-sh/nvm) on your local machine to work with Node.js 12.

### Install Globally

Once you have installed Node.js, you can install Inso CLI globally on your system by running the following command in your terminal:

```bash
npm install --global insomnia-inso
```

Test that Inso CLI is installed by running:

```bash
inso --version
```
