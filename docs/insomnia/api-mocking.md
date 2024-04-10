---
layout: article-detail
title:  Insomnia API Mocking Overview
category: "Requests and Responses"
category-url: requests-and-responses
---

API mocks are useful for simulating an api endpoint. For example we are building a front end and the backend API is under construction and unstable. Using Insomnia we can customize responses from a set of API paths to simulate a static API. This mocked URL will then be available to replace our front end API backend URL.

## Insomnia Cloud Mocks

By default a Kong Insomnia user can create API mocks which can be accessed at mock.insomnia.rest
These mocks can be collaborated with a team and accessed by anyone.

## Self-hosted Mocks

Enterprise plans have access to self-hosted mocks providing unrestricted access and more control over who can use them.

## Mock extractor

From the request collection screen, on the response pane to the right we can use the new Mock tab to extract the most recent response and API path from the currently selected request to build out an API mock. This is a time saver when we already have our response structures within in insomnia that we would like to be made avaiable from our API mock.
