---
layout: article-detail
title:  inso generate config
category: "CLI Command Reference"
category-url: inso-cli
---

The `inso generate config` command generates a configuration from an API specification by using [openapi-2-kong](https://github.com/Kong/insomnia/tree/develop/packages/openapi-2-kong). It works similarly to the [Kong Kubernetes](https://insomnia.rest/plugins/insomnia-plugin-kong-kubernetes-config) and [Declarative config](https://insomnia.rest/plugins/insomnia-plugin-kong-declarative-config) plugins for Insomnia.

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
`--type <type>` |	-t	| type of configuration to generate, options are `kubernetes` and `declarative` (default: `declarative`)
`--output <path>`	| -o | save the generated config to a file in the working directory
`--tags <tags>` | | comma-separated list of tags to apply to each entity

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
