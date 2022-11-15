---
layout: article-detail
title:  inso lint spec
category: "CLI Command Reference"
category-url: inso-cli
---

The `inso lint spec` command lints and validates your OpenAPI specification. Lint results will be printed to the console, and Inso CLI will exit with an exit code. Inso CLI will exit with a non-zero exit code if linting fails.

## Command

```bash
inso lint spec [identifier]
```

Lint the given specification, the user will be prompted to select a specification if one is not passed as an option.

[`identifier`](/inso-cli/introduction/#the-identifier-argument) can be a specification name or id.

### Lint rules

At the moment Inso CLI uses Spectral's default `oas` Ruleset Definition. For more information refer to the [OpenAPI ruleset reference documentation](https://meta.stoplight.io/docs/spectral/docs/reference/openapi-rules.md).

## Global Flags

{:.table .table-striped}
Option  | Alias | Description
----- | ------ | -------
`--output <path>` | -o | Save the specification to a file in the working directory.
`--workingDir <path>` || Specify a working directory.
`--src <path>` || Specify the V4 export file or the Insomnia app data directory. You can use this option to set a Git data directory. If not specified, `inso-cli` looks for an `.insomnia` folder in the working directory by default.


## Examples

The following commands work when running in the example [git-repo](https://github.com/Kong/insomnia/tree/develop/packages/insomnia-inso/src/db/fixtures/git-repo) directory.

When you don't specify any arguments, you'll be prompted with:

```bash
inso lint spec
```

Scope linting by the specification name or ID:

```bash
inso lint spec spc_46c5a4
```

```bash
inso lint spec "Sample Specification"
```
