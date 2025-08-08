---
layout: article-detail
title: Verifying Build Provenance for Inso CLI Binaries
category: "Verifying Build Provenance for Signed Inso CLI Binaries"
category-url: inso-cli-binary-build-provenance
---

Kong produces build provenance for Inso CLI binary artifacts, which can be verified using `cosign` / `slsa-verifier`.

This guide provides steps to verify build provenance for signed Inso CLI binary artifacts in two different ways:

* A minimal example, used to verify an binary artifacts without leveraging any annotations
* A complete example, leveraging optional annotations for increased trust

For the minimal example, you only need a compressed binary file(s) and provenance file.

For the complete example, you need the same details as the minimal example, as well as any of the optional annotations you wish to verify:

| Shorthand | Description | Example Value |
|---|---|---|
| `<repo>` | GitHub repository | `insomnia-ee` |
| `version` | Artifact version to download | `9.3.0` |
| `<binary-files>` | Single / Space separated isno binary files | `inso-*-9.3.0.{pkg,tar.xz,zip}` |
| `<provenance-file>` | Binary provenance file | `inso-provenance.intoto.jsonl` |

Because Kong uses GitHub Actions to build and release, Kong also uses GitHub's OIDC identity to generate build provenance for binary artifacts, which is why many of these details are GitHub-related.

## Examples

### Prerequisites

For both examples, you need to:

1. Ensure `slsa-verifier` is installed.

2. [Download Inso Binaries](https://updates.insomnia.rest/downloads/release/latest?app=com.insomnia.inso&channel=stable) with file pattern `inso-*.{pkg,tar.xz,zip}`

3. [Download Inso Binary Provenance Attestation](https://updates.insomnia.rest/downloads/release/latest?app=com.insomnia.inso&channel=stable) with pattern `inso-provenance.intoto.jsonl`

{:.important .no-icon}
> The GitHub owner is case-sensitive (`Kong/insomnia-ee` vs `kong/insomnia-ee`).

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
   --provenance-path 'inso-provenance.intoto.jsonl' \
   --source-uri 'github.com/Kong/insomnia-ee' \
   inso-*-9.3.0.{zip,tar.xz,pkg}
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
   --provenance-path 'inso-provenance.intoto.jsonl' \
   --source-uri 'github.com/Kong/insomnia-ee' \
   --build-workflow-input 'version=9.3.0' \
   inso-*-9.3.0.{zip,tar.xz,pkg}
```
