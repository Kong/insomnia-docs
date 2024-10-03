---
layout: article-detail
title:  inso run collection
category: "CLI Command Reference"
category-url: inso-cli
---

The `inso run collection` command is used to manually run collections to test the functionality of your API. You can also use this to automate collection runs on CI/CD pipelines.

## Command

```bash
inso run collection [identifier]
```

This prompts user for collection and environment selection. After selection it will execute the selected collection against the selected environment. You may choose to specify the collection and environment directly as well, see examples below.

## Options


The test runner is built on top of Mocha, thus many of the options behave as they would in Mocha. The options currently supported are:

{:.table .table-striped}

| Option                      | Alias | Description                                                                     |
| --------------------------- | ----- | ------------------------------------------------------------------------------- |
| `--env <identifier>`        | -e    | the environment to use - an environment name or id                              |
| `--reporter <value>`        | -r    | reporter to use, options are dot, list, spec, min and progress (default: spec ) |
| `--testNamePattern <regex>` | -t    | run tests that match the regex                                                  |
| `--bail`                    | -b    | abort ("bail") after the first test failure                                     |
| `--keepFile`                |       | do not delete the generated test file (useful for debugging)                    |
| `--disableCertValidation`   |       | disable certificate validation for requests with SSL                         |

## Global Flags


{:.table .table-striped}

| Option                | Alias | Description                                                                                                                                                                                                               |
| --------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--workingDir <path>` |       | Specify a working directory.                                                                                                                                                                                              |
| `--src <path>`        |       | Specify the V4 export file or the Insomnia app data directory. You can use this option to set a Git data directory. If not specified, `inso-cli` looks for an `.insomnia` folder in the working directory by default.  |

## Examples


```bash
inso run collection "My Collection" --testNamePattern Math --env env_env_ca046a
```

```bash
inso run collection wrk_5b5ab6 --reporter progress --bail
```
