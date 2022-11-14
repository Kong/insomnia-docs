---
layout: article-detail
title:  Install Inso CLI
category: "Inso CLI"
category-url: inso-cli
---

Install Inso CLI using our single executable commands for your operating system.

## Install Single Executable

Inso CLI can be downloaded and run as a single executable on MacOS, Windows, and Linux. Download the release artifacts from [GitHub Releases](https://updates.insomnia.rest/downloads/release/latest?app=com.insomnia.inso&channel=stable).

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
  On MacOS, download the MacOS zip or pkg from <a href="https://updates.insomnia.rest/downloads/release/latest?app=com.insomnia.inso&channel=stable">GitHub</a> or use Homebrew. If you use the pkg option, click through the prompt window as you normally would when downloading an app from the internet.
<br/><br/>
<h4>Extract the Zip File</h4>
If you download the zip file, extract it from Finder or with the following command:
<br/><br/>
<pre class="highlight"><code>tar -xf inso-macos-2.4.1.zip</code></pre>
  Check that Inso CLI was properly installed with the following command:
<br/><br/>
<pre class="highlight"><code>./inso --version</code></pre>
<h4>Use Homebrew</h4>
Install Inso CLI using Homebrew with the following command:
<br/><br/>
<pre class="highlight"><code>brew install inso</code></pre>
Check that Inso CLI was properly installed with the following command:
<br/><br/>
<pre class="highlight"><code>inso --version</code></pre>
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
  On Windows, download the Windows zip file from <a href="https://updates.insomnia.rest/downloads/release/latest?app=com.insomnia.inso&channel=stable">GitHub</a>. Then, extract the executable using Windows Explorer, or via the following command:
  <br/><br/>
<pre class="highlight"><code>tar -xf inso-windows-2.4.1.zip</code></pre>
Check that Inso CLI was properly installed with the following command:
<br/><br/>
<pre class="highlight"><code>./inso --version</code></pre>
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">On Linux, download the Linux tar file from <a href="https://updates.insomnia.rest/downloads/release/latest?app=com.insomnia.inso&channel=stable">GitHub</a>. Extract the file by using the following command:
  <br/><br/>
  <pre class="highlight"><code>tar -xf inso-linux-2.4.1.tar.xz</code></pre>
  Check that Inso CLI was properly installed with the following command:
<br/><br/>
<pre class="highlight"><code>./inso --version</code></pre>
  </div>
</div>
