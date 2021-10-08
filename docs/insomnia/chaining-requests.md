---
layout: article-detail
title:  Chaining Requests
category: "Requests and Responses"
category-url: requests-and-responses
---

Insomnia provides the ability to extract values from the responses of other requests. This is commonly referred to as chaining because the dependency upon another request forms a link.

Request chaining may be difficult to understand at first, especially if the concepts of [Template Tags](/insomnia/template-tags) or [Environment Variables](/insomnia/environment-variables) are unfamiliar. I suggest first taking a look at those if you are having trouble getting started.

First, let's take a look at some examples that chaining may be useful for.

## Common Uses

To help explain request chaining, here are some common use cases:

* use token from login response as an Authorization header
* use id from POST `/item in PUT /items/<id>`
* use entire body from one response to upload to another

There are many other ways to use chaining, but those are the most commonly used examples.

## Chaining Basics

To get started, select one of three Response tags from the autocomplete dropdown. You can invoke the dropdown be pressing CTRL+Space or by typing starting characters of the tag (respo...). The response tag can be used anywhere that environment variables are supported (URL, headers, request body, environments, etc).

Reference the id property of a created resource from another request. Then, click the tag to select the request and specify the desired parameters. This will open a dialog where you can configure the tag.

{:.alert .alert-primary}
**Note**: Use this tag inside an Environment Variable to prevent duplicated effort

Now, you can configure the tag parameters and see what the result will be in the Live Preview section of the dialog.

{:.alert .alert-primary}
**Note**: Value is dynamically extracted from the last successful response of the request being referenced.

Data can be extracted from multiple parts of a response. I'll explain the differences now.

## Response Reference Types

There are three types of response tags, each for referencing a different part of the response.

### Raw Body

The Raw Body reference type will reference the entire body contents of a request. This can be useful if you download something in one request that needs to be uploaded in another.

### Body Attribute
The Body reference type makes it possible to pull specific attributes out of a response body. It allows you to use either JSONPath or XPath queries (depending on the Content-Type) to extract specific attributes from a response body.

{:.alert .alert-primary}
**Note**: This reference type only works on JSON or XML responses

For example, a login request may respond with a JSON object that looks like {"auth_token": "secret-token"}. This will allow you to use a JSONPath filter of $.auth_token to reference the token itself in a subsequent request.

### Header Value
The Header reference type is for pulling specific header values out of a response, which can be useful for referencing nonce values or other useful information.

## Conclusion

HTTP APIs often have dependencies between endpoints. For example, after creating a resource, it is often required to use that resources ID to fetch or update it. The response tag enables the ability to satisfy these dependencies and eliminate the need to constantly be copying and pasting these values manually. There may be a slight learning curve, but it's definitely worth getting to know these tags, as they can save tremendous amounts of time in the future.
