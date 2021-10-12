---
layout: article-detail
title:  Unit and Stress Testing
category: Testing
category-url: testing
---

Insomnia does not have a built-in capability for stress-testing, however there are plenty of tools to do so. Please refer to these following links for further information and use:

* [k6](https://k6.io/docs/testing-guides/api-load-testing/)
* [locust](https://locust.io/)
* [loader](https://loader.io/)

The remainder of this document covers how to use the Unit Testing functionality within Insomnia. Currently, unit testing is only available to Design Documents, although you don't strictly need an OpenAPI specification to write them.

## How to create a Unit Test Suite

1. Import and select your OpenAPI Document as a Design Document.
2. Navigate to the **Debug** tab to ensure that the requests are generated and work.
3. Navigate to the **Test** tab and click **New Test Suite**.
4. After naming your test suite, click **Create Suite**.

## How to delete a Unit Test Suite

1. Click dropdown arrow on the test suite you’d like to delete in the sidebar.
2. Click **Delete Suite**.

## How to create a Unit Test

Unit tests in Insomnia rely on the [Chai framework](https://www.chaijs.com/api/bdd/).

1. Select the Unit Test Suite you wish to create a Unit Test in and click the “New Test” button.
2. You will be presented with a dialog modal asking you to name the Unit Test.
3. Once you have named your Unit Test, click “Create Test”, you will now be presented with the Unit Test interface which contains the Unit Test name, debug request dropdown, delete button, run button, and Unit Test code editor button where you can write your unit test in JavaScript.
4. Click the arrow to show the code editor to be able to edit the test.
5. Select the request you would like to use for your unit test from the **Select Request** dropdown (we suggest using a simple GET request for your first unit test).
6. Run the test to ensure that it works correctly.

### How do I test response bodies?

You can test the response payload by accessing the `.data` attribute of the response variable:

```ts
	const response = await insomnia.send();
	expect(response.data).to.be.an('string');
```

### How do I test JSON payloads?

By default, `response.data` will be a string. If you want to validate it as JSON, you must first convert `response.data` to JSON using `JSON.parse`:

```ts
	const response = await insomnia.send();
	const body = JSON.parse(response.data);

	expect(body).to.be.an('array');
```

### How do I test JSON payload properties?

Since unit tests rely on the Chai library for unit testing we can test properties easily once we have converted our response payload to JSON:

```ts
	const response = await insomnia.send();
	const body = JSON.parse(response.data);
	const item = body[0];

	expect(body).to.be.an('array');
	expect(item).to.be.an('object');
	expect(item).to.have.property('id');
```

### How do I test multiple requests in a single unit test?

1. You can add additional requests, or target a specific request by pressing CTRL+Space while the unit test code area is focused, from the dropdown menu you can select to run the current selected request or a request by a specific id.
2. When choosing to send a request by ID, you will be presented with a modal asking which request to send.
3. The code editor will be pre-populated with the request/response boilerplate for the request selected.

### How do I chain requests?

Chaining requests is as simple as following the request chaining guide, and then selecting the chained request from the **Select Request** dropdown.

### How do I change request values?

Since unit tests rely on the requests and the selected environment under the debug tab, the only way to alter a request being made in a unit test is to alter the request, and its environment variables under the debug tab.

### How can I debug my unit test?

1. Open [DevTools](/insomnia/introduction-to-plugins#debug-in-the-insomnia-app).
2. Open the **console** tab. It should be open by default.

Now that we have opened DevTools and have the console open, we can `console.log` values in our unit test to the console:

```ts
	const response = await insomnia.send();
	const body = JSON.parse(response.data);
	const item = body[0];

	console.log(item);
```

### How do I run my Unit Tests in CI?

Run unit tests in CI (like GitHub Actions or Azure DevOps) using [git sync](/insomnia/git-sync) and [Inso CLI](/inso-cli/cli-command-reference/inso-run-test) with the `inso run test` command.

### How to rename a Unit Test?

Rename a unit test by double clicking on the unit test’s name and changing the contents.

The value is saved when you click outside the editable area.

### How to delete a Unit Test?

Delete a unit test by clicking the **Delete** icon next to a test.
