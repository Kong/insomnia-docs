---
layout: article-detail
title:  Install Inso CLI
category: "Inso CLI"
category-url: inso-cli
---

Install Inso CLI via NPM or using single executable.

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

## Install single executable

Inso CLI can be downloaded and run as a single executable on MacOS, Windows, and Linux. Download the release artifacts from [GitHub Releases](https://github.com/Kong/insomnia/releases/tag/lib%402.4.0).

### Windows

On Windows, you will need to extract the executable using [7zip](https://www.7-zip.org/), or via the command prompt:

```sh
tar -xf inso-windows-2.4.0.zip
./inso --version
```

### MacOS

Inso CLI can also be installed via Homebrew on MacOS:

```bash
brew install inso
```
