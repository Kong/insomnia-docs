---
layout: article-detail
title:  Unit and Stress Testing
category: Testing
category-url: testing
---

Insomnia does not have a built-in capability for stress-testing, however there are plenty of tools to do so. Please refer to these following links for further information and use. k6, locust, loader.

The remainder of this document covers how to use the Unit Testing functionality within Insomnia. Currently, unit testing is only available to Design Documents, although you don't strictly need an OpenAPI specification to write them.

How to create a Unit Test Suite
Import & Select your OpenAPI Document as a Design Document.

Navigate to the Debug tab to ensure that the requests are generated and work:

Head over to the Test tab and click “New Test Suite”, after naming your test suite click "Create Suite":

How to delete a Unit Test Suite
Click dropdown arrow on the test suite you’d like to delete in the sidebar

and then click “Delete Suite”

How to create a Unit Test
Unit tests in Insomnia rely on the Chai framework. Below you will learn how to create a unit test.

Select the Unit Test Suite you wish to create a Unit Test in and click the “New Test” button:


You will be presented with a dialog modal asking you to name the Unit Test:


Once you have named your Unit Test, click “Create Test”, you will now be presented with the Unit Test interface which contains the Unit Test name, debug request dropdown, delete button, run button, and Unit Test code editor button where you can write your unit test in JavaScript:


Click the arrow to show the code editor to be able to edit the test:


Select the request you would like to use for your unit test from the “-- Select Request —” dropdown (we suggest using a simple GET request for your first unit test):


And run the test to ensure that it works correctly:


How do I test response bodies?
You can test the response payload by accessing the .data attribute of the response variable:

	const response = await insomnia.send();
	expect(response.data).to.be.an(‘string’);
How do I test JSON payloads?
By default response.data will be a string if you wish to validate it as JSON you must first convert response.data to JSON using JSON.parse:

	const response = await insomnia.send();
	const body = JSON.parse(response.data);

	expect(body).to.be.an(‘array’);
How do I test JSON payload properties?
Since unit tests rely on the chai library for unit testing we can test properties easily once we have converted our response payload to JSON:

	const response = await insomnia.send();
	const body = JSON.parse(response.data);
	const item = body[0];

	expect(body).to.be.an(‘array’);
	expect(item).to.be.an(‘object’);
	expect(item).to.have.property(‘id’);
How do I test multiple requests in a single unit test?
You can add additional requests, or target a specific request by pressing CTRL+Space while the unit test code area is focused, from the dropdown menu you can select to run the current selected request or a request by a specific id:



When choosing to send a request by ID, you will be presented with a modal asking which request to send:



The code editor will be pre-populated with the request / response boilerplate for the request selected:



How do I chain requests?
Chaining requests is as simple as following the request chaining guide, and then selecting the chained request from the "-- Select Request --" dropdown.

How do I change request values?
Since unit tests rely on the requests and the selected environment under the debug tab, the only way to alter a request being made in a unit test is to alter the request, and it’s environment variables under the debug tab.

An example is when you’re missing an environment variable:



Let’s add the petId to our request environment, and click Done:



Now when you run a request the unit test will use this value:



The same goes for authentication, queries, headers, and request body.

How can I debug my unit test?
First, open the developer tools:



Now open the “console” tab, it should be open by default:



Now that we have opened the dev tools and have the console open, we can console log values in our unit test to the console:

	const response = await insomnia.send();
	const body = JSON.parse(response.data);
	const item = body[0];

	console.log(item);
You should now see something like the following after running your unit test:



How do I run my Unit Tests in CI?
You can run unit tests in CI (like GitHub Actions or Azure DevOps) using git sync and the companion CLI, Inso, with the run test command.

How to rename a Unit Test?
You can rename a unit test by double clicking on the unit test’s name and changing the contents once editable:



Once you click outside of the editable area the value is saved.

How to delete a Unit Test?
You can delete a unit test by clicking the “Delete” icon next to a test.

