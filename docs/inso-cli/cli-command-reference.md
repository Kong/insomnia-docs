---
layout: article-detail
title:  CLI Command Reference
category: "Inso CLI"
category-url: inso-cli
---

This reference guide provides in-depth information about the Inso CLI commands. 

* [inso generate config](#inso-generate-config)
* [inso run test](#inso-run-test)
* [inso lint spec](#inso-lint-spec)
* [inso export spec](#inso-export-spec)
* [inso script](#inso-script)

## inso generate config
<hr>

Similar to the Kong Kubernetes and Declarative config plugins for Insomnia, this command can generate configuration from an API specification, using openapi-2-kong.

### Options

{:.table .table-striped}
Option	| Alias	| Description
----- | ----- | ------
`--type <type>` |	-t	| type of configuration to generate, options are kubernetes and declarative (default: declarative )
`--output <path>`	| -o | save the generated config to a file in the working directory

### Commands

`inso generate config [identifier]`

Execute the given specification, the user will be prompted to select a specification if one is not passed as an option. This can also be a file on your filesystem.

`identifier` can be a specification name, or id, or a file path. 

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
<hr>

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

`inso run test [identifier]`

This prompts user for unit test suite and environment selection. After selection it will execute the selected unit test suite against the selected environment. You may choose to specify the suite and environment directly as well, see examples below.

`identifier` can be the name or id of a workspace, document, or unit test suite.

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

More examples: #2338.

## inso lint spec
<hr>

This command adds the ability to lint and validate your OpenAPI specification. Lint results will be printed to the console, and Inso will exit with an appropriate exit code.

### Commands

`inso lint spec [identifier]`

Lint the given specification, the user will be prompted to select a specification if one is not passed as an option.

`identifier` can be a specification name, or id

### Examples
When running in the example git-repo directory

Not specifying any arguments will prompt

`inso lint spec`

Scope by the specification name or id

`inso lint spec spc_46c5a4`
`inso lint spec "Sample Specification"`

## inso export spec
<hr>

This command will extract and export the raw OpenAPI specification from the data store. If the --output option is not specified, the specification will print to console.

### Options

{:.table .table-striped}
Option	| Alias	| Description
----- | ------ | -------
`--output <path>` | -o | save the specification to a file in the working directory

### Commands

`inso export spec [identifier]`

Export the given specification, the user will be prompted to select a specification if one is not passed as an option. This can also be a file on your filesystem.

`identifier` can be a specification name, or id

### Examples

When running in the example git-repo directory

Not specifying any arguments will prompt

`inso export spec`

Scope by the specification name or id

`inso export spec spc_46c5a4`
`inso export spec "Sample Specification"`

Saving configuration output to file

`inso export spec spc_46c5a4 --output output.yaml` 
`inso export spec spc_46c5a4 > output.yaml`

## inso script
<hr>

The Inso config file supports scripts, akin to NPM scripts defined in a package.json file. These scripts can be executed by running inso script <name> , or simply inso <name> as this is the default command. Any options passed to this command, will be forwarded to the script being executed.

### Commands

`inso script <name>`

`name` is required, and must be a script defined in the loaded config file

### Examples

When running in the example git-repo directory, with the following inso config file.

```
# .insorc.yaml
scripts:
  lint: lint spec "Sample Specification"

  gen-conf: generate config "Sample Specification"
  gen-conf:k8s: gen-conf --type kubernetes<br>
```

Run commands with or without the script prefix

`inso script gen-conf`
`inso gen-conf`

If a conflict exists with another command (eg. lint ), you must prefix with script

`inso script lint`
`inso lint 			      # will not work`

Any options passed during script execution will be forwarded to the script

```
inso gen-conf                       # generates declarative config (default)
inso gen-conf:k8s                   # generates kubernetes config
inso gen-conf:k8s -t declarative    # generates declarative config
inso gen-conf:k8s -o output.yaml    # generates kubernetes config to output.yaml
```