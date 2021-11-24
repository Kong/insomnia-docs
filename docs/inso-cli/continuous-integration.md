---
layout: article-detail
title:  Continuous Integration
category: "Inso CLI"
category-url: inso-cli
---

Inso CLI has been designed to run in a Continuous Integration (CI) environment, disables prompts, and provides exit codes to pass or fail the CI workflow.

An example workflow run in Github Actions does the following:

1. Checks out branch
2. Downloads [Setup Inso GitHub Action](https://github.com/marketplace/actions/setup-inso)
3. Runs linting
4. Runs unit tests
5. Generates a [Declarative Configuration](/insomnia/declarative-config) file

## Setup Inso Workflow

The following is a sample yaml version of the steps outlined above.

```yaml
# .github/workflows/test.yml

name: Test

jobs:
  Linux:
    name: Validate API spec
    runs-on: ubuntu-latest
    steps:
      - name: Checkout branch
        uses: actions/checkout@v1
      - uses: kong/setup-inso@v1
        with:
          inso-version: 2.4.0
      - name: Lint
        run: inso lint spec "Designer Demo" --ci
      - name: Run test suites
        run: inso run test "Designer Demo" --env UnitTest --ci
      - name: Generate declarative config
        run: inso generate config "Designer Demo" --type declarative --ci
```
