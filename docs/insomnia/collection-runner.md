---
layout: article-detail
title: Collection Runner
category: "Collection Runner"
category-url: built-in-features
---

The Collection Runner allows you to run your collections an unlimited number of times, whether you are storing your data locally, on Git, or in the cloud. You can easily test and verify that your collections are functioning properly and that the APIs you are consuming remain consistent.

To open the Collection Runner, go to one of your collections (or the `Collection` tab) and click the **Run** button.

![collection run button](/assets/images/collection-run-button.png)

The Collection Runner allows you to arrange the execution order of your requests and run multiple iterations of your tests:

![collection run request order](/assets/images/collection-run-request-order.png)

### Using Sample Data

You can use your own sample data to feed into the iterations of the Collection Runner.

To do this, upload a custom CSV or JSON file. The variables detected from these files can be used in your pre-request and after-response scripts, and will take precedence over any environment variables with the same name.

![collection run preview data](/assets/images/collection-runner-preview-data.png)

## Test Results in the Collection Tab

With the Collection Runner, we have also introduced a new **Test Results** section.

Any tests that you define in [pre-request](/insomnia/pre-request-script) or [after-response](/insomnia/after-response-script) scripts will appear when you execute them via the Collection Runner.

![collection run test results](/assets/images/collection-run-test-results.png)

You can filter tests by status (e.g., Passed, Failed, All, Skipped) and browse through test results from previous collection runs.

The **Test Results** section is also available when you run tests for an individual request without using the Collection Runner.

{:.alert .alert-primary}
**Note**: The test results shown in the Requests and in the Collection Runner are not to be confused with [Insomnia's Unit Testing feature](/insomnia/unit-testing).


## Run with CLI

The Run button dropdown includes an option to generate the CLI command which can be used to run the same collection using inso CLI. This command can be used in combination with [setup-inso](https://github.com/kong/setup-inso) to run this collection in a GitHub action. More information about the CLI options can be found in the [CLI docs section](/inso-cli/cli-command-reference)
