---
layout: article-detail
title:  inso run test
category: "CLI Command Reference"
category-url: inso-cli
---

The `inso run test` command enables you to execute unit tests written inside Insomnia from your terminal or in a CI/CD environment. On execution, Inso CLI will report test results, and exit with an exit code. Inso CLI will exit with a non-zero exit code if linting fails.

## Command

```bash
inso run test [identifier]
```

This prompts user for unit test suite and environment selection. After selection it will execute the selected unit test suite against the selected environment. You may choose to specify the suite and environment directly as well, see examples below.

[`identifier`](/inso-cli/introduction/#the-identifier-argument) can be the name or id of a Document, or unit test suite.

## Options

The test runner is built on top of Mocha, thus many of the options behave as they would in Mocha. The options currently supported are:

{:.table .table-striped}
Option |  Alias | Description
------ | -------| -----------
`--env <identifier>`| -e | the environment to use - an environment name or id
`--reporter <value>` |	-r	| reporter to use, options are dot, list, spec, min and progress (default: spec )
`--testNamePattern <regex>` | -t | run tests that match the regex
`--bail` | -b | abort ("bail") after the first test failure
`--keepFile` | | do not delete the generated test file (useful for debugging)
`--disableCertValidation` | | disable certificate validation for requests with SSL

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
inso run test
```

Scope tests to the Document name or ID:

```bash
inso run test "Sample Specification" --env "OpenAPI env"
```

```bash
inso run test spc_46c5a4 --env env_env_ca046a
```

Scope tests to a test suite name or ID:

```bash
inso run test "Math Suite" --env "OpenAPI env"
```

```bash
inso run test uts-7f0f85 --env env_env_ca046a
```

Scope tests by test name regex, and control test running and reporting:

```bash
inso run test "Sample Specification" --testNamePattern Math --env env_env_ca046a
```

```bash
inso run test spc_46c5a4 --reporter progress --bail --keepFile
```
