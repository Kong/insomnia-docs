---
layout: article-detail
title:  inso run collection
category: "CLI Command Reference"
category-url: inso-cli
---

The `inso run collection` command is used to manually run collections to test the functionality of your API. It will execute any requests specified and associated scripts including any after response tests. You can also use this to automate collection runs on CI/CD pipelines.

## Command

```bash
inso run collection [identifier]
```

This prompts user for collection and environment selection. After selection it will execute the selected collection against the selected environment. You may choose to specify the collection and environment directly as well, see examples below.

## Options

The options currently supported are:

{:.table .table-striped}

| Option                      | Alias | Description                                                                     |
| --------------------------- | ----- | ------------------------------------------------------------------------------- |
| `--env <identifier>`        | -e    | the environment to use - an environment name or id                              |
| `--env-var`                |       | specifies environment variables in a key=value format. Multiple CLI environment variables can be added by using --env-var multiple times, for example: --env-var "this=that" --env-var "alpha=beta".                    |
| `--reporter <value>`        | -r    | reporter to use, options are dot, list, spec, min and progress (default: spec ) |
| `--requestNamePattern <regex>` | -t    | run requests that match the regex                                                  |
| `--bail`                    | -b    | abort ("bail") after the first request failure                                     |
| `--item`                |   -i    | runs only the specified folder UID or request UID from the collection. Multiple items can be run in order by specifying -i/--item multiple times, for example: inso run collection collectionUID -i folder1UID -i folder2UID                    |
| `--delay-request`                |       | specifies a delay (in milliseconds) between requests. The default is 0.                    |
| `--iteration-count`                |   -n    | specifies the number of times the collection will run when used in conjunction with the iteration data file.                    |
| `--iteration-data`                |   -d    | specifies a data source file (JSON or CSV) to be used for iteration. You can specify a local file path or a URL to the data file.                    |
| `--disableCertValidation`   |       | disable certificate validation for requests with SSL                         |

## Global Flags

{:.table .table-striped}

| Option                | Alias | Description                                                                                                                                                                                                               |
| --------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--workingDir <path>` |       | Specify a working directory/file, to find .insomnia folder, *.db.json, export.yaml                                                                                                                                                                                              |

## Examples

```bash
inso run collection wrk_5b5ab6 --reporter progress --bail
```

```bash
inso run collection -w ~/simple.yaml -e env_2eecf85b7f wrk_0702a5
```

```bash
inso run collection -d ~/files/runner-data.json -w ~/three-requests.yml -n 2 -i req_3fd28aabbb18447abab1f45e6ee4bdc1 -e env_86e135 --verbose
```
