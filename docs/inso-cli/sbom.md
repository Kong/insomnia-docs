---
layout: article-detail
title: Software Bill of Materials
category: "Inso CLI"
category-url: inso-cli
---

A software bill of materials (SBOM) is an inventory of all software components (proprietary and open source), open source licenses, and dependencies in a given product. A software bill of materials (SBOM) provides visibility into the software supply chain and any license compliance, security, and quality risks that may exist.

We are generating SBOMs for both inso binaries and docker container images.

## Download SBOM

1. Navigate to Insomnia [GitHub Releases](https://updates.insomnia.rest/downloads/release/latest?app=com.insomnia.inso&channel=stable)

2. Download the below SBOMs as needed:

* SBOMs for Inso Binaries:  `sbom.spdx.json` and `sbom.cyclonedx.json`
* SBOMs for Inso Docker Images:
  * Linux: `image-inso-*-sbom.spdx.json` and `image-inso-*-sbom.cyclonedx.json`
