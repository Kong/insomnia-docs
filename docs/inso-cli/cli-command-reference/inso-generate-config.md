---
layout: article-detail
title:  inso generate config
category: "CLI Command Reference"
category-url: inso-cli
---

Similar to the Kong Kubernetes and Declarative config plugins for Insomnia, this command can generate configuration from an API specification, using openapi-2-kong.

### Command

`inso generate config [identifier]`

Execute the given specification, the user will be prompted to select a specification if one is not passed as an option. This can also be a file on your filesystem.

`identifier` can be a specification name, or id, or a file path.

### Options

{:.table .table-striped}
Optio | Alias | Description
----- | ----- | ------
`--type <type>` |	-t	| type of configuration to generate, options are kubernetes and declarative (default: declarative )
`--output <path>`	| -o | save the generated config to a file in the working directory

### Examples

When running in the example git-repo directory, not specifying any arguments will prompt:

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
