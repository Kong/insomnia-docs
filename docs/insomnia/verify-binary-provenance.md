---
layout: article-detail
title: Verifying Build Provenance for Signed Insomnia Binaries
category: "Verifying Build Provenance for Signed Insomnia Binaries"
category-url: security
---

Kong produces build provenance for Insomnia Application binary artifacts, which can be verified using `cosign` / `slsa-verifier`.

This guide provides steps to verify build provenance for signed Insomnia Application binary artifacts in two different ways:

* A minimal example, used to verify an binary artifacts without leveraging any annotations
* A complete example, leveraging optional annotations for increased trust

For the minimal example, you only need a compressed binary file(s) and provenance file.

For the complete example, you need the same details as the minimal example, as well as any of the optional annotations you wish to verify:

| Shorthand | Description | Example Value |
|---|---|---|
| `<repo>` | GitHub repository | `insomnia` |
| `version` | Artifact version to download | `9.3.0` |
| `<binary-files>` | Single / Space separated isnomnia binary files | `Insomnia.Core-9.3.0.{snap,tar.gz,zip,rpm,dmg,deb,exe,AppImage}` |
| `<provenance-file>` | Binary provenance file | `inso-provenance.intoto.jsonl` |

Because Kong uses GitHub Actions to build and release, Kong also uses GitHub's OIDC identity to generate build provenance for binary artifacts, which is why many of these details are GitHub-related.

## Examples

### Prerequisites

For both examples, you need to:

1. Ensure `slsa-verifier` is installed.

2. [Download Insomnia Core Application Binaries](https://updates.insomnia.rest/downloads/release/latest?app=com.insomnia.app&channel=stable) with file pattern `Insomnia.Core-<version>.{snap,tar.gz,zip,rpm,dmg,deb,exe,AppImage}`

3. [Download Insomnia Binary Provenance Attestation](https://updates.insomnia.rest/downloads/release/latest?app=com.insomnia.app&channel=stable) with pattern `insomnia-provenance.intoto.jsonl`

{:.important .no-icon}
> The GitHub owner is case-sensitive (`Kong/insomnia` vs `kong/insomnia`).

### Minimal example

#### Using slsa-verifier

Run the `slsa-verifier verify-artifact...` command:

```sh
slsa-verifier verify-artifact \
   --print-provenance \
   --provenance-path '<provenance-file>' \
   --source-uri 'github.com/Kong/<repo>' \
   <binary-files>
```

Here's the same example using sample values instead of placeholders:

```sh
slsa-verifier verify-artifact \
   --print-provenance \
   --provenance-path 'insomnia-provenance.intoto.jsonl' \
   --source-uri 'github.com/Kong/insomnia' \
   Insomnia.Core-9.3.0.{snap,tar.gz,zip,rpm,dmg,deb,AppImage,exe}
```

The command will print "Verified SLSA provenance" if successful:

```sh
...
PASSED: Verified SLSA provenance
```

### Complete example

#### Using slsa-verifier

Run the `slsa-verifier verify-artifact ...` command:

```sh
slsa-verifier verify-artifact \
   --print-provenance \
   --provenance-path '<provenance-file>' \
   --source-uri 'github.com/Kong/<repo>' \
   --build-workflow-input 'version=9.3.0' \
   <binary-files>
```

Here's the same example using sample values instead of placeholders:

```sh
slsa-verifier verify-artifact \
   --print-provenance \
   --provenance-path 'insomnia-provenance.intoto.jsonl' \
   --source-uri 'github.com/Kong/insomnia' \
   --build-workflow-input 'version=9.3.0' \
   Insomnia.Core-9.3.0.{snap,tar.gz,zip,rpm,dmg,deb,AppImage,exe}
```
