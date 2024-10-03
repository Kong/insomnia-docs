---
layout: article-detail
title:  CLI Command Reference
category: "Inso CLI"
category-url: inso-cli
---

This reference guide provides in-depth information about the Inso CLI commands.

## Command Overview

{:.table .table-striped}

Command | Description
------- | -----------
[inso run test](/inso-cli/cli-command-reference/inso-run-test) | Execute unit tests written in Insomnia via a CLI.
[inso run collection](/inso-cli/cli-command-reference/inso-run-collection) | Run Insomnia request collection via a CLI.
[inso lint spec](/inso-cli/cli-command-reference/inso-lint-spec) | Lint an OpenAPI specification (the latest version supports OpenAPI 3.1) via a CLI. (Custom Lint Ruleset support is in progress).
[inso export spec](/inso-cli/cli-command-reference/inso-export-spec) | Export the raw OpenAPI specification from the Insomnia data store.
[inso script](/inso-cli/cli-command-reference/inso-script) | Execute any scripts defined in the Inso CLI configuration file.

## Global Flags

{:.table .table-striped}

Option  | Alias | Description
----- | ------ | -------
`--output <path>` | -o | Save the specification to a file in the working directory.
`--workingDir <path>` | -w | Specify a working directory/file, to find .insomnia folder, *.db.json, export.yaml
