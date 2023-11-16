---
layout: article-detail
title:  Using Custom Linting with Inso CLI
category: "Using Custom Linting with Inso CLI"
category-url: inso-custom-linting
---

This tutorial will guide you through the process of implementing custom linting for your OpenAPI Specification (OAS) files using Inso CLI and Insomnia. Custom linting allows you to apply specific rules that suit your project's requirements, ensuring your API specifications maintain high quality and consistency.

### Step 1: Create Your Custom Spectral Ruleset File

First, you need to create a Spectral ruleset file. This file can be in YAML, YML, JSON, or JS format. For example, create a file named `.spectral.yml` and define your custom rules in it.

### Step 2: Place the Ruleset File in the Correct Directory

Place your `.spectral.(yaml|yml|json|js)` file in the same directory as your OAS file (`oas.yaml`).

### Step 3: Run Inso CLI Lint Command

Open your terminal and navigate to the directory containing your OAS file and the custom Spectral ruleset file. Run the following command:

```bash
inso lint spec ./oas.yaml
```

The Inso CLI will automatically detect the `.spectral` file in the directory and use it to lint your `oas.yaml` file according to the custom rules you've defined.

### Step 4: Review the Output

Inspect the output in your terminal. It will display any issues found based on your custom linting rules. Make necessary adjustments to your OAS file based on these results.

> For custom linting on Insomnia refer to [this document](https://docs.insomnia.rest/insomnia/linting#custom-linting).
