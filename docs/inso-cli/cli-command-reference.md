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
[inso generate config](/inso-cli/cli-command-reference/inso-generate-config) | Execute the given specification. The user will be prompted to select a specification if one is not passed as an option. This can also be a file on your filesystem.
[inso run test](/inso-cli/cli-command-reference/inso-run-test) | This prompts user for unit test suite and environment selection. After selection, it will execute the selected unit test suite against the selected environment.
[inso lint spec](/inso-cli/cli-command-reference/inso-lint-spec) | Lint the given specification, the user will be prompted to select a specification if one is not passed as an option.
[inso export spec](/inso-cli/cli-command-reference/inso-export-spec) | Export the given specification, the user will be prompted to select a specification if one is not passed as an option. This can also be a file on your filesystem.
[inso script](/inso-cli/cli-command-reference/inso-script) | Any options passed to this command will be forwarded to the script being executed.
