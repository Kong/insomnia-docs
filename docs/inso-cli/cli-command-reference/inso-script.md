---
layout: article-detail
title:  inso script
category: "CLI Command Reference"
category-url: inso-cli
---

The Inso config file supports scripts, akin to NPM scripts defined in a package.json file. These scripts can be executed by running `inso script <name>`, or `inso <name>`. Any options passed to this command, will be forwarded to the script being executed.

### Command

`inso script <name>`

`name` is required, and must be a script defined in the loaded config file.

### Examples

When running in the example git-repo directory, with the following inso config file.

```yaml
# .insorc.yaml

scripts:
  lint: lint spec "Sample Specification"

  gen-conf: generate config "Sample Specification"
  gen-conf:k8s: gen-conf --type kubernetes<br>
```

Run commands with or without the script prefix.

`inso script gen-conf`
`inso gen-conf`

If a conflict exists with another command (eg. lint), you must prefix with `script`.

```bash
inso script lint
inso lint          # will not work
```

Any options passed during script execution will be forwarded to the script.

```bash
inso gen-conf                       # generates declarative config (default)
inso gen-conf:k8s                   # generates kubernetes config
inso gen-conf:k8s -t declarative    # generates declarative config
inso gen-conf:k8s -o output.yaml    # generates kubernetes config to output.yaml
```
