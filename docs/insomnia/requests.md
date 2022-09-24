---
layout: article-detail
title:  Requests
category: "Requests and Responses"
category-url: requests-and-responses
---

Insomnia supports sending requests via [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), [gRPC](https://grpc.io/docs), [GraphQL](https://graphql.org), and [WebSockets](https://websockets.spec.whatwg.org/).

To learn how to repurpose parts of your request, see
[Environment Variables](/insomnia/environment-variables).

## Send an HTTP request

Send an HTTP method request in a Document or Collection. The following instructions
assume you're starting with an empty Document or Collection.

In addition to standard HTTP methods, Insomnia supports [Custom HTTP Methods](#custom-http-methods).

1. In a Document, select the **Debug** tab, then **New Request**. In a Collection, select **New Request**.
1. From the **New Request** modal:
   1. Click **HTTP Request**
   1. Double-click on **New Request** on the lefthand pane to rename the request.
   1. Select a method from the dropdown next to the URL text box.
1. Enter the API URL in the request URL input field.
1. To add authentication, go to the **Auth** tab. Use the **Auth** dropdown to select your authentication method.
1. When you have entered your request URL and authentication, click **Send**.

See [Request Options](#request-options) to customize your request.

### Request Options

Modify any HTTP method or GraphQL request with the following options.

{:.table .table-striped}
Option | Description
------ | ------------
Body | Select a body type from the Body dropdown menu on the tab. Add content that you want to send in the body of the request.
Auth | The authentication for the request. Select an authentication type from the Auth dropdown menu on the tab.
Query | Add query parameters to your request URL. For example, `?page=1`.
Header | Add a header to your request. For example, `Content-Type: application/json`.
Docs | The request description.

### Custom HTTP Methods

Add your own custom HTTP methods through the **New Request** modal dropdown or the methods dropdown.

1. Click on **Custom Method**.
1. An **HTTP Method** modal will appear. Enter your method name.
1. Click **Done**.

To access existing custom methods, click on **Custom Method** in the methods dropdown.

## Send a gRPC request

Send a gRPC method request in a Document or Collection. The following instructions
assume you're starting with an empty Document or Collection.

1. In a Document, select the **Debug** tab, then **New Request**. In a Collection, select **New Request**.
1. In the **New Request** modal:
   1. Double-click on **New Request** on the lefthand pane to rename the request.
   1. Select **gRPC** from the dropdown.
1. You'll be taken to a **Select Proto File** modal.
1. Click **Add Directory** or **Add Proto File**.
1. Add your directory or upload your Proto File. Insomnia will automatically detect the streaming types and modify the first tab as such.
1. Enter your API URL and click **Start**.

See [gRPC Request Options](#grpc-request-options) to customize your request.

### gRPC request options

Modify any gRPC request with the following options.

{:.table .table-striped}
Option | Description
------ | ------------
[*Streaming Type*](https://grpc.io/docs/what-is-grpc/core-concepts/#rpc-life-cycle) <small>Example: `Unary`</small> | The body of the request. The tab displays the streaming type, auto-detected from the Proto File or directory.<br><br>Streaming types are: Unary, Server Streaming, Client Streaming, and Bidirectional Streaming.
Headers | Add [gRPC metadata](https://grpc.io/docs/what-is-grpc/core-concepts/#metadata) to your request. For example, `Content-Type: application/grpc`.

## Send a GraphQL request

Send a GraphQL method request in a Document or Collection. The following instructions
assume you're starting with an empty Document or Collection.

1. In a Document, select the **Debug** tab, then **New Request**. In a Collection, select **New Request**.
1. In the **New Request** modal:
   1. Double-click on **New Request** on the lefthand pane to rename the request.
   1. Select **POST** from the dropdown.
   1. Another dropdown will appear to the right. Open it and select **GraphQL Query**.
1. Enter the API URL in the request URL input field.
1. In the GraphQL body tab, add you GraphQL schema.
1. To add authentication, go to the **Auth** tab. Use the **Auth** dropdown to select your authentication method.
1. When you have entered your request URL and authentication, click **Start** or **Send**.

See [Request Options](#request-options) to customize your request.

## Send a WebSocket request
Send a Websocket request in a Document or Collection.  The following instructions assume you're starting with an empty Document or Collection.

1. In a Document, select the **Debug** tab, then **New Request**. In a Collection, select **New Request**.
1. From the **New Request** modal:
   1. Click on **WebSocket Request**
   1. Double-click on **New Request** on the lefthand pane to rename the request.
1. Enter the API URL in the request URL input field.
1. To add authentication, go to the **Auth** tab. Use the **Auth** dropdown to select your authentication method.
1. Enter the request URL and authentication method, and click **Connect**.
1. To send messages while connected to a Websocket API:
   1. Click the message editor pane, underneath the **Send** button.
   1. Compose the message you want to send.
      1. Click on the down arrow next to the **JSON** tab, and select **Raw** to compose a raw message.
   1. Click **Send**
1. View WebSocket events by clicking on the **Events** tab on the right-hand pane.
   1. View event details by clicking an event.
1. To disconnect the WebSocket connection, click **Disconnect**.

See [Request Options](#request-options) to customize your request.