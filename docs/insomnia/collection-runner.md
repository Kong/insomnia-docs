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

#### Example: CSV

You can setup variables by the name they have on the sample data file of your choice, for example:

```csv
Title,ReleaseYear,Developer
Command & Conquer: Tiberian Dawn,1995,Westwood Studios
Command & Conquer: Red Alert,1996,Westwood Studios
Command & Conquer: Tiberian Sun,1999,Westwood Studios
Command & Conquer: Red Alert 2,2000,Westwood Studios
...
```

Means that anywhere on your requests you can setup `Title`, `ReleaseYear` and `Developer`, like:

![example template var](/assets/images/example-collection-runner-setup-templatevar.png)

And when running the collection runner they will be replaced in place.

![example collection run variables results](/assets/images/example-result-collection-runner-variables.png)

{:.alert .alert-primary}
**Note**: It is also allowed to reference values from CSV or JSON in the same manner as referencing environment, with [Template Tags](/insomnia/template-tags/). And variables from data files will take precedence over [environment variables](/insomnia/environment-variables/).


#### Example: JSON

JSON also works with runner, this is an example:
```json
[
    {"id": 1, "deviceName": "device1" },
    {"id": 2, "deviceName": "device2" }
]
```

## Test Results in the Collection Tab

With the Collection Runner, we have also introduced a new **Test Results** section.

Any tests that you define in [pre-request](/insomnia/pre-request-script) or [after-response](/insomnia/after-response-script) scripts will appear when you execute them via the Collection Runner.

![collection run test results](/assets/images/collection-run-test-results.png)

You can filter tests by status (e.g., Passed, Failed, All, Skipped) and browse through test results from previous collection runs.

The **Test Results** section is also available when you run tests for an individual request without using the Collection Runner.

{:.alert .alert-primary}
**Note**: The test results shown in the Requests and in the Collection Runner are not to be confused with [Insomnia's Unit Testing feature](/insomnia/unit-testing).

##

The collection runner exposes several interfaces which help you to work with it in scripts.

### Get Information of the Active Request

The `insomnia.execution.location` and `insomnia.execution.location.current` exposes the path of the active request and the last element of path, for example:

```javascript
// Let's assume that the active request is located in: TopRequestGroup/RequestGroup/Request1

console.log(insomnia.execution.location);
// It will output: ["TopRequestGroup", "RequestGroup`", "Request1"]

console.log(insomnia.execution.location.current);
// It will output: Request1
```

### Skip the Current Request
The `insomnia.execution.skipRequest` allows to skip the current active request in the pre-request script, for example, in the [pre-request scripts](/insomnia/pre-request-script):

```javascript
// The runner will skip the current request and move to the next one (if exists)
insomnia.execution.skipRequest();
```

### Dynamically Set the Next Request

The `insomnia.execution.setNextRequest` accepts request id or request name as the next request. Currently you are able to call it in the [pre-request script](/insomnia/pre-request-script), for example:

```javascript
// The runner will move to the specified request (if exists), by skipping some requests
insomnia.execution.setNextRequest("requestName");
```

```javascript
// Request id is also supported
insomnia.execution.setNextRequest("req_23590845293c4005b2127e211369f069");
```
This allows to dynamically change the workflow.

### Abort the Execution

The `insomnia.execution.setNextRequest` can be used to redirect to a request for teardown, so that the exeuction will be ended.

## Run with CLI

The Run button dropdown includes an option to generate the CLI command which can be used to run the same collection using inso CLI. This command can be used in combination with [setup-inso](https://github.com/kong/setup-inso) to run this collection in a GitHub action. More information about the CLI options can be found in the [CLI docs section](/inso-cli/cli-command-reference)
