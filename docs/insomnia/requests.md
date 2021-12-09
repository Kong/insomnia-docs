---
layout: article-detail
title:  Requests
category: "Requests and Responses"
category-url: requests-and-responses
---

Insomnia supports sending requests via [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), [gRPC](https://grpc.io/docs), and [GraphQL](https://graphql.org).

To learn how to repurpose parts of your request, see
[Environment Variables](/insomnia/environment-variables).

## Send an HTTP method request

Send an HTTP method request in a Document or Collection. The following instructions
assume you're starting with an empty Document or Collection.

In addition to standard HTTP methods, Insomnia supports [Custom HTTP Methods](#custom-http-methods).

1. In a Document, select the **Debug** tab, then **New Request**. In a Collection, select **New Request**.
1. In the **New Request** modal:
   1. Enter a request name.
   1. Select a method from the dropdown.
   1. Click **Create**.
1. Enter the API URL in the request URL input.
1. To add authentication, go to the **Auth** tab. Use the **Auth** dropdown to select your authentication method.
1. When you have entered your request URL and authentication, click **Send**.

See [Request Options](#request-options) to customize your request.

## Send a gRPC request

Send a gRPC method request in a Document or Collection. The following instructions
assume you're starting with an empty Document or Collection.

1. In a Document, select the **Debug** tab, then **New Request**. In a Collection, select **New Request**.
1. In the **New Request** modal:
   1. Enter a request name.
   1. Select **gRPC** from the dropdown.
   1. Click **Create**.
1. You'll be taken to a **Select Proto File** modal.
1. Click **Add Directory** or **Add Proto File**.
1. Add your directory or upload your Proto File. Insomnia will automatically detect the streaming types and modify the first tab as such.
1. Enter your API URL and click **Start**.

See [gRPC Request Options](#grpc-request-options) to customize your request.

## gRPC Request Options

Modify any gRPC request with the following options.

{:.table .table-striped}
Option | Description
------ | ------------
*Streaming Type* <small>Example: `Unary`</small> | The body of the request. The tab displays the streaming type, auto-detected from the Proto File or directory.<br><br>Streaming types are: Unary, Server Streaming, Client Streaming, and Bidirectional Streaming.
Headers | Add a header to your request. For example, `Content-Type: application/grpc`.

## Send a GraphQL request

Send a GraphQL method request in a Document or Collection. The following instructions
assume you're starting with an empty Document or Collection.

1. In a Document, select the **Debug** tab, then **New Request**. In a Collection, select **New Request**.
1. In the **New Request** modal:
   1. Enter a request name.
   1. Select **POST** from the dropdown.
   1. Another dropdown will appear to the right. Open it and select **GraphQL Query**.
   1. Click **Create**.
1. Enter the API URL in the request URL input.
1. In the GraphQL body tab, add you GraphQL schema.
1. To add authentication, go to the **Auth** tab. Use the **Auth** dropdown to select your authentication method.
1. When you have entered your request URL and authentication, click **Send**.

See [Request Options](#request-options) to customize your request.

## Request Options

Modify any HTTP method or GraphQL request with the following options.

{:.table .table-striped}
Option | Description
------ | ------------
Body | Select a body type from the Body dropdown menu on the tab. Add content that you want to send in the body of the request.
Auth | Select an authentication type from the Auth dropdown menu on the tab. The authentication for the request.
Query | Add query parameters to your request URL. For example, `?page=1`.
Header | Add a header to your request. For example, `Content-Type: application/json`.
Docs | The request description.

## Custom HTTP Methods

Add your own custom HTTP methods through the **New Request** modal dropdown or the methods dropdown.

1. Click on **Custom Method**.
1. An **HTTP Method** modal will appear. Enter your method name.
1. Click **Done**.

To access existing custom methods, click on **Custom Method** in the methods dropdown.
