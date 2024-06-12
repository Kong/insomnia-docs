---
layout: article-detail
title: Verify Signatures for Signed Inso CLI Images
category: "Inso CLI"
category-url: inso-cli
---

Inso CLI Docker container images are now signed using `cosign` with signatures published to a Docker Hub repository.

This guide provides steps to verify signatures for signed Inso CLI Docker container images in two different ways:

* A minimal example, used to verify an image without leveraging any annotations
* A complete example, leveraging optional annotations for increased trust

For the minimal example, you only need Docker image details, a GitHub repo name, and a GitHub workflow filename.

For the complete example, you need the same details as the minimal example, as well as any of the optional annotations you wish to verify:

| Shorthand | Description | Example Value |
|---|---|---|
| `<repo>` | Github repository | `insomnia` |
| `<workflow filename>` | Github workflow filename | `release-publish.yml` |
| `<workflow name>` | Github workflow name | `Release Publish` |

Because Kong uses Github Actions to build and release, Kong also uses Github's OIDC identity to sign images, which is why many of these details are Github-related.

## Examples

### Prerequisites

For both examples, you need to:

1. Ensure `cosign` is installed.

2. Collect the necessary image details.

3. Set the `COSIGN_REPOSITORY` environment variable:

   ```sh
   export COSIGN_REPOSITORY=kong/notary
   ```

{:.important .no-icon}
> Github owner is case-sensitive (`Kong/insomnia` vs `kong/insomnia`).

### Minimal example

Run the `cosign verify ...` command:

```sh
cosign verify \
   kong/<image>:<tag>@sha256:<digest> \
   --certificate-oidc-issuer='https://token.actions.githubusercontent.com' \
   --certificate-identity-regexp='https://github.com/Kong/<repo>/.github/workflows/<workflow filename>'
```

Here's the same example using sample values instead of placeholders:

```sh
cosign verify \
   'kong/inso:9.3.0-beta.4@sha256:e1fd25efe702d5e2095f5595f8b452f50b65aa8e8e1209863fbef3f241d364c8' \
   --certificate-oidc-issuer='https://token.actions.githubusercontent.com' \
   --certificate-identity-regexp='https://github.com/Kong/insomnia/.github/workflows/release-publish.yml'
```

### Complete example

```sh
cosign verify \
   <image>:<tag>@sha256:<digest> \
   --certificate-oidc-issuer='https://token.actions.githubusercontent.com' \
   --certificate-identity-regexp='https://github.com/Kong/<repo>/.github/workflows/<workflow filename>' \
   -a repo='Kong/<repo>' \
   -a workflow='<workflow name>'
```

Here's the same example using sample values instead of placeholders:

```sh
cosign verify \
   'kong/inso:9.3.0-beta.4@sha256:e1fd25efe702d5e2095f5595f8b452f50b65aa8e8e1209863fbef3f241d364c8' \
   --certificate-oidc-issuer='https://token.actions.githubusercontent.com' \
   --certificate-identity-regexp='https://github.com/Kong/insomnia/.github/workflows/release-publish.yml' \
   -a repo='Kong/insomnia' \
   -a workflow='Release Publish'
```
