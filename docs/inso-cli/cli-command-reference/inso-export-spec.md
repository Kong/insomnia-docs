---
layout: article-detail
title:  inso export spec
category: "CLI Command Reference"
category-url: inso-cli
---

This command will extract and export the raw OpenAPI specification from the data store. If the `--output` option is not specified, the specification will print to console.

## Command

`inso export spec [identifier]`

`identifier` can be a specification name, or id. If this is not provided, you will be prompted to select a spec.

## Options

{:.table .table-striped}
Option  | Alias | Description
----- | ------ | -------
`--output <path>` | -o | Save the specification to a file in the working directory.

## Examples

When running in the example [git-repo](https://github.com/Kong/insomnia/tree/develop/packages/insomnia-inso/src/db/fixtures/git-repo) directory

Not specifying any arguments will prompt:

`inso export spec`

Scope by the specification name or id:

`inso export spec spc_46c5a4`
`inso export spec "Sample Specification"`

Saving configuration output to file:

`inso export spec spc_46c5a4 --output output.yaml`
`inso export spec spc_46c5a4 > output.yaml`
