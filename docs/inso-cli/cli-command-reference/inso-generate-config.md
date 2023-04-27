---
layout: article-detail
title:  inso generate config
category: "CLI Command Reference"
category-url: inso-cli
---

The `inso generate config` command generates a configuration from an API specification by using [openapi-2-kong](https://github.com/Kong/insomnia/tree/develop/packages/openapi-2-kong). The command works similarly to generating a [declarative configuration](/insomnia/declarative-config) file or [Kubernetes manifest](/insomnia/kong-for-kubernetes) from within Insomnia.

For more in-depth information on working with other Kong products, see:

* [Kong Declarative Config (for decK)](/insomnia/declarative-config/)
* [Kong for Kubernetes](/insomnia/kong-for-kubernetes)

## Command

```bash
inso generate config [identifier]
```

[`identifier`](/inso-cli/introduction/#the-identifier-argument) is a specification name, or id, or a file path.

## Options

{:.table .table-striped}
Option | Alias | Description
----- | ----- | ------
`--type <type>` | `-t` | type of configuration to generate, options are `kubernetes` and `declarative` (default: `declarative`)
`--output <path>` | `-o` | save the generated config to a file in the working directory. When not specified, will write the config to `/dev/stdout` without logging extraneous usage information.
`--format` | `-f` | output format, either `yaml` or `json`. This option only applies to type `declarative`, and will be ignored for type `kubernetes` (default: `yaml`)
`--kongVersion <value>` | `-k` | version of target Kong instance, options are [legacy, 3] (default: legacy)
`--tags <tags>` | | comma-separated list of tags to apply to each entity

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
inso generate config
```

Scope configuration generation by the Document name or ID:

```bash
inso generate config spc_46c5a4
```

```bash
inso generate config "Sample Specification"
```

Scope configuration generation by a file on the filesystem:

```bash
inso generate config spec.yaml
```

```bash
inso generate config spec.yaml --workingDir another/dir
```

Save the configuration output to a file:

```bash
inso generate config spc_46c5a4 --output output.yaml
```

```bash
inso generate config spc_46c5a4 > output.yaml
```

Save the configuration output to a file with json output:

```bash
inso generate config spc_46c5a4 --output output.json --format json
```

Add tags to your generated configuration:
`inso generate config spec.yaml --workingDir another/dir`

```bash
inso generate config spec.yaml --tags first
```

```bash
inso generate config spec.yaml --tags "first,second"
```

Change the generated configuration output type to either `declarative` or `kubernetes`:

```bash
inso generate config spc_46c5a4 --type declarative
```

```bash
inso generate config "Sample Specification" --type kubernetes
```
