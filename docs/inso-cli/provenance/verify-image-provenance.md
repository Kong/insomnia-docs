---
layout: article-detail
title: Verifying Build Provenance for Signed Inso CLI Images
category: "Verifying Build Provenance for Signed Inso CLI Images"
category-url: inso-cli-image-build-provenance
---

Kong produces build provenance for Inso CLI docker container images, which can be verified using `cosign` / `slsa-verifier` with attestations published to a Docker Hub repository.

This guide provides steps to verify build provenance for signed Inso CLI Docker container images in two different ways:

* A minimal example, used to verify an image without leveraging any annotations
* A complete example, leveraging optional annotations for increased trust

For the minimal example, you only need a Docker manifest digest and a GitHub repo name.

{:.important .no-icon}
> The Docker manifest digest is required for build provenance verification. The manifest digest can be different from the platform specific image digest for a specific distribution.

For the complete example, you need the same details as the minimal example, as well as any of the optional annotations you wish to verify:

| Shorthand | Description | Example Value |
|---|---|---|
| `<repo>` | GitHub repository | `insomnia` |
| `<workflow name>` | GitHub workflow name | `Release Publish` |
| `<workflow trigger>` | Github workflow trigger name | `workflow_dispatch` |
| `<version>` | version | `9.3.0-beta.4` |

Because Kong uses GitHub Actions to build and release, Kong also uses GitHub's OIDC identity to generate build provenance for container images, which is why many of these details are GitHub-related.

## Examples

### Prerequisites

For both examples, you need to:

1. Ensure `cosign` / `slsa-verifier` is installed.

2. Ensure `regctl` is installed.

3. Collect the necessary image details.

4. Parse the `<manifest_digest>` for the image using `regctl`.

   ```sh
   regctl manifest digest <image>:<tag>
   ```

5. Set the `COSIGN_REPOSITORY` environment variable:

   ```sh
   export COSIGN_REPOSITORY=kong/notary
   ```

{:.important .no-icon}
> The GitHub owner is case-sensitive (`Kong/insomnia` vs `kong/insomnia`).

### Minimal example

#### Using Cosign

Run the `cosign verify-attestation ...` command:

```sh
cosign verify-attestation \
   <image>:<tag>@sha256:<manifest_digest> \
   --type='slsaprovenance' \
   --certificate-oidc-issuer='https://token.actions.githubusercontent.com' \
   --certificate-identity-regexp='^https://github.com/slsa-framework/slsa-github-generator/.github/workflows/generator_container_slsa3.yml@refs/tags/v[0-9]+.[0-9]+.[0-9]+$'
```

Here's the same example using sample values instead of placeholders:

```sh
cosign verify-attestation \
   'kong/inso:9.3.0-beta.4@sha256:e1fd25efe702d5e2095f5595f8b452f50b65aa8e8e1209863fbef3f241d364c8' \
   --type='slsaprovenance' \
   --certificate-oidc-issuer='https://token.actions.githubusercontent.com' \
   --certificate-identity-regexp='^https://github.com/slsa-framework/slsa-github-generator/.github/workflows/generator_container_slsa3.yml@refs/tags/v[0-9]+.[0-9]+.[0-9]+$'
```

The command will exit with `0` when the `cosign` verification is completed:

```sh
...
echo $?
0
```

#### Using slsa-verifier

Run the `slsa-verifier verify-image ...` command:

```sh
slsa-verifier verify-image \
   <image>:<tag>@sha256:<manifest_digest> \
   --print-provenance \
   --provenance-repository kong/notary \
   --source-uri 'github.com/Kong/<repo>'
```

Here's the same example using sample values instead of placeholders:

```sh
slsa-verifier verify-image \
   'kong/inso:9.3.0-beta.4@sha256:e1fd25efe702d5e2095f5595f8b452f50b65aa8e8e1209863fbef3f241d364c8' \
   --print-provenance \
   --provenance-repository kong/notary \
   --source-uri 'github.com/Kong/insomnia'
```

The command will print "Verified SLSA provenance" if successful:

```sh
...
PASSED: Verified SLSA provenance
```

### Complete example

#### Using Cosign

Run the `cosign verify-attestation ...` command:

```sh
cosign verify-attestation \
   <image>:<tag>@sha256:<manifest_digest> \
   --type='slsaprovenance' \
   --certificate-oidc-issuer='https://token.actions.githubusercontent.com' \
   --certificate-identity-regexp='^https://github.com/slsa-framework/slsa-github-generator/.github/workflows/generator_container_slsa3.yml@refs/tags/v[0-9]+.[0-9]+.[0-9]+$' \
   --certificate-github-workflow-repository='Kong/<repo>' \
   --certificate-github-workflow-name='<workflow name>' \
   --certificate-github-workflow-trigger='<workflow trigger>'
```

Here's the same example using sample values instead of placeholders:

```sh
cosign verify-attestation \
   'kong/inso:9.3.0-beta.4@sha256:e1fd25efe702d5e2095f5595f8b452f50b65aa8e8e1209863fbef3f241d364c8' \
   --type='slsaprovenance' \
   --certificate-oidc-issuer='https://token.actions.githubusercontent.com' \
   --certificate-identity-regexp='^https://github.com/slsa-framework/slsa-github-generator/.github/workflows/generator_container_slsa3.yml@refs/tags/v[0-9]+.[0-9]+.[0-9]+$' \
   --certificate-github-workflow-repository='Kong/insomnia' \
   --certificate-github-workflow-name='Release Publish' \
   --certificate-github-workflow-trigger='workflow_dispatch'
```

#### Using slsa-verifier

Run the `slsa-verifier verify-image ...` command:

```sh
slsa-verifier verify-image \
   <image>:<tag>@sha256:<manifest_digest> \
   --print-provenance \
   --provenance-repository kong/notary \
   --build-workflow-input 'version=9.3.0-beta.4' \
   --source-uri 'github.com/Kong/<repo>'
```

Here's the same example using sample values instead of placeholders:

```sh
slsa-verifier verify-image \
   'kong/inso:9.3.0-beta.4@sha256:e1fd25efe702d5e2095f5595f8b452f50b65aa8e8e1209863fbef3f241d364c8' \
   --print-provenance \
   --provenance-repository kong/notary \
   --build-workflow-input 'version=9.3.0-beta.4' \
   --source-uri 'github.com/Kong/insomnia'
```
