---
layout: article-detail
title:  Unit Testing
category: Testing
category-url: testing
---

{:.alert .alert-primary}
**Note**: Unit testing is only available for Design Documents at this time.

Insomnia provides a way to test your APIs, all within the Test tab in Documents. Organize multiple tests under test suites and run them all at once.

Unit tests in Insomnia rely on the [Mocha](https://mochajs.org/) framework, and [Chai](https://www.chaijs.com/api/bdd/) for assertions.

## Test Suites

Test Suites are made up of multiple tests that can all be run at with one click.

### Create a Test Suite

1. Import and select your OpenAPI Specification as a Design Document. Alternatively, add a request to a Document manually (not from an OpenAPI spec).
1. Click the **Debug** tab to ensure that the requests are generated and work.
1. Click the **Test** tab and click **New Test Suite**.
1. After naming your test suite, click **Create Suite**.

In the middle panel, add individual tests. These will all belong to your Test Suite.

### Delete a Test Suite

1. In the left-side panel, hover over the Test Suite you want to delete.
1. A down arrow will appear. Click it to open the dropdown menu.
1. Click **Delete Suite**.

## Unit Tests

Unit tests are individual tests made up of one or more requests and an expected outcome.

### Create a Unit Test

1. In the Test Suite you want to add the test to, click the **New Test** button.
1. A modal will appear. Name your test.
1. Click **Create Test**.
1. You'll be taken back to the app **Test** page where your tests will all be listed in the middle column.
1. Select the request you want to configure for testing from the **Select Request** dropdown.
1. For additional manual configuration, click the arrow to the left of the test. A code editor area will appear where you can manually edit the test using JavaScript.
1. Click on the right-side arrow to on the individual test to run it, and to verify you've set it up correctly.

### Rename a Unit Test

Rename a unit test by double clicking on the unit test name and changing the contents. The value is saved automatically when you click outside the editable area.

### Delete a Unit Test

To delete a unit test, click on the trashcan icon next to the individual test. You'll be asked to confirm deletion.

### Test Multiple Requests in a Unit Test

1. Within a unit test, click the left-side arrow icon to open the JavaScript code editor.
2. Press CTRL+Space in the code editor to open template options.
3. Click either **Send Current Request** or **Send Request by ID**.

### Test a Response Body

Test the response payload by accessing the `.data` attribute of the response variable.

Manually add the following JavaScript to an individual test. Access the JavaScript code editor by clicking the left-side dropdown arrow on a test.

```ts
const response = await insomnia.send();
expect(response.data).to.be.an('string');
```

### Test a JSON payload

By default, `response.data` will be a string. To validate it as JSON, convert `response.data` to JSON using `JSON.parse`.

Manually add the following JavaScript to an individual test. Access the JavaScript code editor by clicking the left-side dropdown arrow on a test.

```ts
const response = await insomnia.send();
const body = JSON.parse(response.data);

expect(body).to.be.an('array');
```

### Test JSON Payload Properties

Since unit tests rely on the [Chai library](https://www.chaijs.com/api/bdd/) for assertions, test properties after converting a response payload to JSON.

Manually add the following JavaScript to an individual test. Access the JavaScript code editor by clicking the left-side dropdown arrow on a test.

```ts
const response = await insomnia.send();
const body = JSON.parse(response.data);
const item = body[0];

expect(body).to.be.an('array');
expect(item).to.be.an('object');
expect(item).to.have.property('id');
```

### Chain Requests

Refer to [Chaining Requests](/insomnia/chaining-requests) and select the chained request from the **Select Request** dropdown.

### Change Request Values

Alter request values in the **Debug** tab.

### Debug a Unit Test

1. Open [DevTools](/insomnia/introduction-to-plugins#debug-in-the-insomnia-app).
1. Open the **console** tab. It should be open by default.

You can now `console.log` values in your unit test to the console.

Manually add the following JavaScript to an individual test. Access the JavaScript code editor by clicking the left-side dropdown arrow on a test.

```ts
const response = await insomnia.send();
const body = JSON.parse(response.data);
const item = body[0];

console.log(item);
```

### Run Unit Tests in CI

Run unit tests in CI (like GitHub Actions or Azure DevOps) using [git sync](/insomnia/git-sync) and [Inso CLI](/inso-cli/cli-command-reference/inso-run-test) with the `inso run test` command.

Learn more about [Continuous Integration](/inso-cli/continuous-integration/) in Insomnia.
