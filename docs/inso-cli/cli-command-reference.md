---
layout: article-detail
title:  CLI Command Reference
category: "Inso CLI"
category-url: inso-cli
---

This reference guide provides in-depth information about the Inso CLI commands. 

* [inso generate config](#inso-generate-config)
* [inso run test](#inso-run-test)
* inso lint spec


## inso generate config

Similar to the Kong Kubernetes and Declarative config plugins for Insomnia, this command can generate configuration from an API specification, using openapi-2-kong.

### Options

{:.table .table-striped}
Option	| Alias	| Description
----- | ----- | ------
`--type <type>` |	-t	| type of configuration to generate, options are kubernetes and declarative (default: declarative )
`--output <path>`	| -o | save the generated config to a file in the working directory

### Commands
inso generate config [identifier]
Execute the given specification, the user will be prompted to select a specification if one is not passed as an option. This can also be a file on your filesystem.

identifier can be a specification name, or id, or a file path

### Examples
When running in the example git-repo directory

Not specifying any arguments will prompt

`inso generate config`

Scope by the specification name or id

`inso generate config spc_46c5a4`
`inso generate config "Sample Specification"`

Scope by a file on the filesystem

`inso generate config spec.yaml`
`inso generate config spec.yaml --workingDir another/dir<br>`

Saving configuration output to file

`inso generate config spc_46c5a4 --output output.yaml`
`inso generate config spc_46c5a4 > output.yaml`

Changing configuration output type

`inso generate config "Sample Specification" --type kubernetes`

## inso run test

With the introduction of Unit Testing in Insomnia, this command adds the functionality to execute unit tests written inside Insomnia in your terminal or in a CI/CD environment. On execution, Inso CLI will report test results, and exit with an appropriate exit code.

### Options

{:.table .table-striped}
Option |	Alias |	Description
`--env <identifier>`| -e | the environment to use - an environment name or id
`--reporter <value>` |	-r	| reporter to use, options are dot, list, spec, min and progress (default: spec )
`--test-name-pattern <regex>` | -t	| run tests that match the regex
`--bail` | -b | abort ("bail") after the first test failure
`--keep-file` | | do not delete the generated test file (useful for debugging)

### Commands
inso run test [identifier]
This prompts user for unit test suite and environment selection. After selection it will execute the selected unit test suite against the selected environment. You may choose to specify the suite and environment directly as well, see examples below.

identifier can be the name or id of a workspace, document, or unit test suite.

Examples
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

More examples: #2338.

## inso lint spec

This command adds the ability to lint and validate your OpenAPI specification. Lint results will be printed to the console, and Inso will exit with an appropriate exit code.

Commands
inso lint spec [identifier]
Lint the given specification, the user will be prompted to select a specification if one is not passed as an option.

identifier can be a specification name, or id

Examples
When running in the example git-repo directory

Not specifying any arguments will prompt

$ inso lint spec
Scope by the specification name or id

$ inso lint spec spc_46c5a4
$ inso lint spec "Sample Specification"