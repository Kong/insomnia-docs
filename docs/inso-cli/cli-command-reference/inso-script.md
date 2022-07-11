---
layout: article-detail
title:  inso script
category: "CLI Command Reference"
category-url: inso-cli
---

The [Inso config file](/inso-cli/configuration/) supports scripts, similar to NPM scripts defined in a `package.json` file. These scripts can be executed by running `inso script <name>`, or `inso <name>`. Any options passed to this command will be forwarded to the script being executed.

## Command

```bash
inso script <name>
```

`name` is required, and must be a script defined in the loaded [configuration file](/inso-cli/configuration).

## Global Flags

{:.table .table-striped}
Option  | Alias | Description
----- | ------ | -------
`--output <path>` | -o | Save the specification to a file in the working directory.
`--workingDir <path>` || Specify a working directory.
`--src <path>` || Specify the V4 export file or the Insomnia app data directory. You can use this option to set a Git data directory. If not specified, `inso-cli` looks for an `.insomnia` folder in the working directory by default.

## Examples

The following commands work when running in the example [git-repo](https://github.com/Kong/insomnia/tree/develop/packages/insomnia-inso/src/db/fixtures/git-repo) directory with the sample yaml file.

```yaml
# .insorc.yaml

scripts:
  lint: lint spec "Sample Specification"

  gen-conf: generate config "Sample Specification"
  gen-conf:k8s: gen-conf --type kubernetes
```

Run commands with or without the `script` prefix:

```bash
inso script gen-conf
```

```bash
inso gen-conf
```

If a conflict exists with another command (such as `lint`), you must prefix the command with `script`.

```bash
inso script lint
inso lint          # will not work
```

Any options passed during script execution will be forwarded to the script:

```bash
inso gen-conf                       # generates declarative config (default)
inso gen-conf:k8s                   # generates kubernetes config
inso gen-conf:k8s -t declarative    # generates declarative config
inso gen-conf:k8s -o output.yaml    # generates kubernetes config to output.yaml
```
