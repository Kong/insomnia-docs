---
layout: article-detail
title:  Install Inso CLI
category: "Inso CLI"
category-url: inso-cli
---

{:.alert .alert-primary}
**Note**: Inso CLI is currently only compatible with **Node.js 12.x LTS**. If you need to work with multiple Node.js versions on your local machine, you can use a tool like [nvm](https://github.com/nvm-sh/nvm) (MacOS and Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (Windows) to manage your versions.

## Prerequisites

Before you start, install [Node.js](https://nodejs.org/en/download). If you're unsure if you have Node.js installed already (or which version), you can run the following command in your terminal:

`node --version`

If a version number prints, then you have Node.js installed. If the version is not 12, set up [nvm](https://github.com/nvm-sh/nvm) on your local machine to work with Node.js 12.

## Install Globally

Once you have installed Node.js, you can install Inso CLI globally on your system by running the following command in your terminal:

`npm install -g insomnia-inso`

Test that Inso CLI is installed by running:

`inso --version`
