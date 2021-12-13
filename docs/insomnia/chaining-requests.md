---
layout: article-detail
title:  Chaining Requests
category: "Requests and Responses"
category-url: requests-and-responses
---

Insomnia allows chaining requests, or the ability to extract values from the responses of other requests. Values are passed using [Template Tags](/insomnia/template-tags) and [Environment Variables](/insomnia/environment-variables).

The following are common use cases for chaining requests:

* use a token from a login response as an Authorization header
* use the ID from POST `/items` in PUT `/items/{id}`
* use an entire body from one response in another request

## Select Response Tag

In an empty URL bar or following a URL symbol such as `/` or `=`, either press CTRL+Space to open the autocomplete dropdown or start typing "response".

There are three response options:

* **Response - Body Attribute**
  * Works on JSON and XML responses, pulling attributes from a response body.

    Use either JSONPath or XPath queries (depending on the Content-Type) to extract specific attributes from a response body. For example, a login request may respond with a JSON object that looks like `{"auth_token": "secret-token"}`. This allows you to use a JSONPath filter of `$.auth_token` to reference the token itself in a subsequent request.
* **Response - Raw Body**
  * References the entire body contents of a request. This can be useful if you download content in one request that needs to be uploaded in another.
* **Response - Header**
  * Pulls specific header values out of a response.

The Response tag can be used anywhere [Environment Variables](https://docs.insomnia.rest/insomnia/environment-variables) are supported.

## Configure a Tag

Click on the tag in the URL bar to configure it. An **Edit Tag** modal will open. Select options from the first four fields:

* **Function to Perform**: select the function to perform or value to reference.
* **Attribute**: select the value to perform the action on.
* **Request**: select the request to apply the configure onto.
* **Trigger Behavior**: select the application behavior that populates the tag. Click on the cog button to select either Static Value or Environment Variable.
* **Live Preview**: outputs what the tag populates.

![The Edit Tag modal enables you to customize the tag functionality.](/assets/images/configure-tag.png)
_In the Edit Tag modal, customize the tag functionality._
