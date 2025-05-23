---
layout: article-detail
title:  Introduction to Inso CLI
category: "Inso CLI"
category-url: inso-cli
---

Inso CLI (Command Line Interface) for Insomnia is built on Node.js and the Insomnia core libraries. It allows you to use Insomnia application functionality in your terminal and CI/CD environments for automation.

Inso CLI is open source on [GitHub](https://github.com/Kong/insomnia/tree/develop/packages/insomnia-inso).

{:.alert .alert-primary}
**Note**: At this time, Inso CLI only works with Design Documents, and not Request Collections.

## Usage

[Install Inso CLI](/inso-cli/install) to get started.

In your terminal, work in a directory that contains an `.insomnia` directory. Alternatively, ensure you have Insomnia installed with at least one Design Document.

All of the Inso CLI commands will prompt for more information, if needed. For example, if the unit test suite to run is not provided, Inso will prompt according to the data source. Prompts for more information can be disabled using the `--ci` global option.

## Global Options

Global options are valid with any Inso command, in conjunction with command-specific options.

{:.table .table-striped}

Global option |  Alias | Description
--------- | ------- | ---------
`--version` | -v | output the version number
`--workingDir <dir>` | -w | set working directory, for both input (Git) and output (export a spec)
`--config <path>` | | path to the configuration file
`--verbose` | | show additional logs while running a command
`--printOptions` | | print the loaded options
`--ci` | | run in CI, disables all prompts
`--help` | -h | display help for a command

{:.alert .alert-primary}
**Note**: We have deprecated the options `--appDataDir <dir>` and `--src <file or dir>`. Please use `-w` or `--workingDir` instead to define the location of the Insomnia v4 export file or the Insomnia app data directory.

## Data Sources

Inso CLI can work with three data sources.

* Insomnia app data directory. Inso CLI will attempt to locate the directory based on your operating system. To overwrite the default location, search for app data using `-w` and the [Application Data](/insomnia/application-data) location of your operating system.
* Git data directory if [Git Sync](/insomnia/git-sync) is set up and no `-w` is set. For example, when running in CI, InsoCLI will find the `.insomnia` directory at the root of the repository automatically, but you can override the location using `--workingDir`.
* Insomnia export file. Search for an export file using `-w`.

{:.alert .alert-primary}
**Note**: The `.insomnia` directory is generated automatically in your git repository when using [Git Sync](/insomnia/git-sync).

### Data Search Flow

Inso CLI will first try to find a `.insomnia` directory in its working directory. This directory is generated in a git repository when using [Git Sync](/insomnia/git-sync). When Inso is used in a CI environment, it will automatically run against the `.insomnia` directory at the root of the repository, unless you specify a `--workingDir` option.

If Inso CLI cannot find the `.insomnia` directory, it will try to run against the Insomnia app data directory. You can override both the working directory, and the app data directory, using the `--workingDir` global options.

## The identifier Argument

Insomnia database ids are quite long, for example: `wrk_012d4860c7da418a85ffea7406e1292a`. When specifying an identifier for Inso CLI, similar to Git hashes, you may choose to truncate it and use the first `x` characters (for example, `wrk_012d486`), which is likely to be unique. If in the rare chance the short id is not unique against the data, Inso CLI will indicate that.

The identifier can also be the entity name. For example, if a unit test suite ID is "uts_012d4860c7da418a85ffea7406e1292a" and the unit test suite name is "foobar", both of the following will work:

`inso run test uts_012d48`
`inso run test foobar`

Additionally, if the `identifier` argument is omitted from the command, Inso CLI will search in the database for the information it needs, and prompt the user. Prompts can be disabled with the `--ci` global option.

## OpenAPI to Kong Gateway configuration

You can combine Insomnia's CLI with Kong Gateway's **decK CLI** to automatically generate Kong Gateway configurations from your OpenAPI specifications, while ensuring that they are tested and linted with Insomnia in the meantime.

To learn more read the official documentation for [decK's configuration generation](https://docs.konghq.com/deck/latest/guides/apiops/#configuration-generation).
