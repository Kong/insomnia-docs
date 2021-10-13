---
layout: article-detail
title:  inso lint spec
category: "CLI Command Reference"
category-url: inso-cli
---

This command adds the ability to lint and validate your OpenAPI specification. Lint results will be printed to the console, and Inso will exit with an appropriate exit code.

## Command

`inso lint spec [identifier]`

Lint the given specification, the user will be prompted to select a specification if one is not passed as an option.

`identifier` can be a specification name, or id

## Examples

When running in the example [git-repo](https://github.com/Kong/insomnia/tree/develop/packages/insomnia-inso/src/db/fixtures/git-repo) directory

Not specifying any arguments will prompt

`inso lint spec`

Scope by the specification name or id

`inso lint spec spc_46c5a4`
`inso lint spec "Sample Specification"`
