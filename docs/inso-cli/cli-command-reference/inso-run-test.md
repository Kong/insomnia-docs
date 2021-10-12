---
layout: article-detail
title:  inso run test
category: "CLI Command Reference"
category-url: inso-cli
---

With the introduction of Unit Testing in Insomnia, this command adds the functionality to execute unit tests written inside Insomnia in your terminal or in a CI/CD environment. On execution, Inso CLI will report test results, and exit with an appropriate exit code.

### Command

`inso run test [identifier]`

This prompts user for unit test suite and environment selection. After selection it will execute the selected unit test suite against the selected environment. You may choose to specify the suite and environment directly as well, see examples below.

`identifier` can be the name or id of a workspace, document, or unit test suite.

### Options

{:.table .table-striped}
Option |  Alias |  Description
`--env <identifier>`| -e | the environment to use - an environment name or id
`--reporter <value>` |	-r	| reporter to use, options are dot, list, spec, min and progress (default: spec )
`--test-name-pattern <regex>` | -t | run tests that match the regex
`--bail` | -b | abort ("bail") after the first test failure
`--keep-file` | | do not delete the generated test file (useful for debugging)

### Examples

When running in the example git-repo directory

Not specifying any arguments will prompt

`inso run test`

Scope by the document name or id

`inso run test "Sample Specification" --env "OpenAPI env"`

`inso run test spc_46c5a4 --env env_env_ca046a`

Scope by the a test suite name or id

`inso run test "Math Suite" --env "OpenAPI env"`

`inso run test uts-7f0f85 --env env_env_ca046a`

Scope by test name regex, and control test running and reporting

`inso run test "Sample Specification" --testNamePattern Math --env env_env_ca046a`

`inso run test spc_46c5a4 --reporter progress --bail --keepFile`
