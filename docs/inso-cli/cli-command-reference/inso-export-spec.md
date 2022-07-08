---
layout: article-detail
title:  inso export spec
category: "CLI Command Reference"
category-url: inso-cli
---

The `inso export spec` command extracts and exports the raw OpenAPI specification from the data store. If the `--output` option is not specified, the specification will print to console.

## Command

```bash
inso export spec [identifier]
```

[`identifier`](/inso-cli/introduction/#the-identifier-argument) can be a specification name, or id. If this is not provided, you will be prompted to select a spec.

## Global Flags

{:.table .table-striped}
Option  | Alias | Description
----- | ------ | -------
`--output <path>` | -o | Save the specification to a file in the working directory.
`--workingDir <path>` || Specify a working directory.  This is the directory that the exported file will reside in.
`--src <path>` || Specify the V4 export file or the Insomnia app data directory. You can use this option to set a Git data directory. If not specified, `inso-cli` looks for an `.insomnia` folder in the working directory by default.

## Examples

The following commands work when running in the example [git-repo](https://github.com/Kong/insomnia/tree/develop/packages/insomnia-inso/src/db/fixtures/git-repo) directory.

When you don't specify any arguments, you'll be prompted to choose a spec:

```bash
inso export spec
```

Scope exporting by the specification name or ID:

```bash
inso export spec spc_46c5a4
```

```bash
inso export spec "Sample Specification"
```

Save an exported configuration output to a file:

```bash
inso export spec spc_46c5a4 --output output.yaml
```

```bash
inso export spec spc_46c5a4 > output.yaml
```
