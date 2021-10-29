---
layout: article-detail
title:  Configuration
category: "Inso CLI"
category-url: inso-cli
---

Inso CLI can be configured with a configuration file, allowing you to specify options and scripts. For example, when running in a CI environment, you may choose to specify the steps as scripts in a config file, so that the same commands can be run both locally and in CI.

Inso CLI uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for configuration file management, meaning any of the following items found in the working tree are automatically used:

* `inso` property in `package.json`
* `.insorc` file in JSON or YAML format
* `.insorc.json` file
* `.insorc.yaml`, `.insorc.yml`, or `.insorc.js` file
* `inso.config.js` file exporting a JS object

Alternatively, you can use the `--config <file>` global option to specify an exact file to use, if it exists outside the directory tree.

## Options

Options from the config file are combined with option defaults and any explicit overrides specified in script or command invocations. This combination is in the following priority order: 

1. command options
2. config file options
3. default options

Any options specified in this file will apply to all scripts and manual commands. You can override these options by specifying them explicitly, when invoking a script or command.

Only [global options](/inso-cli/introduction/#global-options) can be set in the config file.

## Scripts

Scripts can have any name, and can be nested. Scripts must be prefixed with `inso`. Each command behaves the same way, as described in [Options](#options).

## Example

```yaml
# .insorc.yaml

options:
  ci: false
scripts:
  test-spec: inso run test Demo --env DemoEnv --reporter progress
  test-spec:200s: inso testSpec --testNamePattern 200
  test-spec:404s: inso testSpec --testNamePattern 404

  test-math-suites: inso run test uts_8783c30a24b24e9a851d96cce48bd1f2 --env DemoEnv 
  test-request-suite: inso run test uts_bce4af --env DemoEnv --bail

  lint: inso lint spec Demo # must be invoked as `inso script lint`

  gen-conf: inso generate config "Designer Demo" --type declarative
  gen-conf:k8s: inso gen-conf --type kubernetes
```
