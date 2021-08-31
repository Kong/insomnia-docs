---
layout: article-detail
title:  Introduction to Inso CLI
category: "Inso CLI"
category-url: inso-cli
---

Inso CLI (command line interface) for Insomnia is built on Node.js and the Insomnia core libraries. It allows you to use Insomnia application functionality in your terminal and CI/CD environments. Inso CLI provides powerful automation capabilities.

## Usage

Make sure that your terminal's current working directory contains a `.insomnia` directory, or that you have Insomnia installed with a specification.

All of the Inso CLI commands will prompt for the information they need, if not provided. For example, if the unit test suite to run is not provided, Inso will prompt according to the data source, and can be disabled via a `--ci` global option.

## Global Options

Global options are valid with any Inso command, in conjunction with command specific options.

{:.table .table-striped}
Global option	|  Alias |	Description
--------- | ------- | ---------
`--workingDir <dir>` |	-w	| set working directory
`--appDataDir <dir>` | -a	| set the app data directory
`--config <path>`	| | path to the configuration file
`--ci`	| |	run in CI, disables all prompts
`--verbose`	| |	show additional logs while running a command
`--printOptions`	| | print the loaded options
`--version`	| -v |	output the version number
`--help`	| -h | display help for a command

## Datasource

Inso CLI will first try to find a `.insomnia` directory in its working directory. This directory is generated in a git repository when using git sync in Insomnia. When Inso is used in a CI environment, it will always run against the `.insomnia` directory.

If Inso cannot find the `.insomnia` directory, it will try to run against the Insomnia app data directory (if found). You can override both the working directory, and the app data directory, using the `--workingDir` and `--appDataDir` global options.

## Inso CLI is open source

Inso CLI is fully open-source, find it on [GitHub](https://github.com/Kong/insomnia/tree/develop/packages/insomnia-inso)!