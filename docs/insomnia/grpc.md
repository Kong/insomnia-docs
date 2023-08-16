---
layout: article-detail
title:  gRPC
category: "debug"
category-url: debug
---

With the growing emergence of IoT, microservices and mesh networks, APIs need to be more performant and scalable than ever before. This has given rise to the growing adoption of [gRPC](https://grpc.io/), a high-performance, open source, universal RPC framework developed at Google.

Insomnia supports making gRPC requests alongside REST, GraphQL, and WebSockets.

## Create a Request

In order to create a new gRPC request, click on + in the sidebar and then **New Request**.

Then, in the modal that opens, set a name for your request and select **gRPC** from the method drop-down. Click **Create**.

You will be prompted to select a proto file. Click on **Add Proto File** and select a proto file from your file system. You can get an example proto file from [grpcb.in](https://grpcb.in/). Once added, it should be automatically selected. Click save.

You should now see a request in the sidebar, and on clicking **Select Method** you should see the services from your proto file listed.

## Proto File Management

In the current iteration, Insomnia allows you to upload your proto file or collection of proto files (a directory) to a workspace and consume it with multiple requests. Insomnia will ingest the contents of your proto file(s), and it will not be linked with the source file on your file-system. This means, if you add your proto file into Insomnia, and then change the source file, you will need to re-upload it.

As such, a proto file also cannot import a different proto file from your file system, because the relative path link will be lost. You can upload a directory which contains multiple proto files, and they can import other proto files within that directory structure (see below). In future iterations we intend to extend the ways in which you can input a proto file, including keeping in sync with the file system, loading from a network location.

### Add a Local Proto File

We added a proto file when creating a request above. Whenever you need to select a proto file, you will be given the option to add a new one. In the example above, we added a proto file when creating a new request, but lets say we now want to change the proto file linked to the current request by adding a new one. Navigate to the request, and select **click to change proto file**.

This will open the proto files modal again, and list the one we added earlier. Click **Add Proto File**, and add a new one. We now see two proto files added to the workspace.

### Add a Local Directory

Click **Add Directory** to add multiple at once.

"root.proto" imports all other proto files listed in the **Library** directory.

### Use gRPC Server Reflection

**Available in Insomnia version 2022.7.0 and later.**

Insomnia supports [gRPC Server Reflection](https://github.com/grpc/grpc/blob/master/doc/server-reflection.md) as of version 2022.7.0.

If the server you are sending requests to supports gRPC Server Reflection, you can use this as an alternative to adding local Protobuf files to Insomnia. To use reflection, create a new gRPC request and enter the [service host](#tlsssl) (e.g., `grpcs://grpcb.in:9001`). Next, click on the button to the right with a sync icon (it shows "Click to use server reflection" on hover). If reflection is working properly, you should be able to click "Select Method" and choose an RPC from the dropdown which is populated with a list of RPCs from the reflection server. Finally, add a request body and click "Send".

### Rename a Local Proto File

Double click on a proto file name in order to edit it. Files inside a directory cannot be renamed.

### Re-upload a Local Proto File

Click on the upload button and select a proto file from your file system. This can be any file, it does not have to be the exact same file. Just remember, when you re-upload a proto file, all requests that link to the file you have changed, will also update. Ideally you will only re-upload the same proto file, when the service definition has changed, rather than a new file altogether.

### Delete a Local Proto File

Click on the delete button. You will be prompted with a confirmation message indicating that requests that use that proto file are likely to break because the source proto file information has been lost. In the future, we intend to expand on proto file deletion to allow for more control over dependent requests.

## Make requests

Insomnia supports all four RPC types defined by gRPC. These are: [Unary](https://grpc.io/docs/what-is-grpc/core-concepts/#unary-rpc), [Client Streaming](https://grpc.io/docs/what-is-grpc/core-concepts/#client-streaming-rpc), [Server Streaming](https://grpc.io/docs/what-is-grpc/core-concepts/#server-streaming-rpc), and [Bidirectional Streaming](https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc). The following examples use [hello.proto](https://github.com/moul/pb/blob/master/hello/hello.proto) from grpcb.in.

### Unary

`/hello.HelloService/SayHello` is unary RPC. You send a single message, and the server responds with a single message.

Specify a body, and click **Send**.

### Server Streaming

`/hello.HelloService/LotsOfReplies` is server streaming RPC. You send a single message, and the server responds with multiple messages.

Specify a body, and click **Send**.

{:.alert .alert-primary}
**Note**: It's up to the server how quickly it responds. In the example below, the second request uses grpcbin.proto, where the server stream responses much slower, and is easier to visualize.

### Client Streaming

`/hello.HelloService/LotsOfGreetings` is client streaming RPC. You send a multiple messages, and the server responds with single message.

Click start to open a channel with the server. Now, edit the body with the contents of your first message, and press the **Stream** button to send that message. You should see a read-only snapshot of the message appear as a tab. You can now edit the contents in the Body tab again, and press "Stream" each time you want to send a new message. Once all messages have been sent, click **Commit** and the server should respond accordingly.

### Bidirectional Streaming

`/hello.HelloService/BiDiHello` is bidirectional streaming RPC. You send multiple messages, and the server responds with multiple messages.

As the name suggests, this is a combination of server and client streaming. As such, the steps to send messages are identical to client streaming above, and the manner in which the server chooses to respond is identical to server streaming. Be sure to press "commit" once you have finished sending all your messages, and allow the server to terminate the connection.

## Cancel a Request

Any time a request has been sent (unary, server streaming) or a stream is open (client and bidirectional streaming), the "Send" or "Start" button will change to "Cancel". Pressing this will terminate the connection and show an appropriate message. You can have multiple requests running concurrently, and cancel them individually.

## TLS/SSL

Often a gRPC endpoint will be secured by TLS, and Insomnia will allow you to connect to these endpoints using simple SSL. The ability to provide custom certificates is coming in the future.

In order to enable TLS, prefix the host with `grpcs://`.

For example, grpcb.in has an unsecured endpoint at `grpcb.in:9000`, and a secured endpoint at `grpcb.in:9001`.

Making a request to `grpcb.in:9001` will fail.

Making a request to `grpcs://grpcb.in:9001` will succeed.

## Environment Variables and Template Tags

The 2021.1 release of Insomnia introduces support for environment variables and template tags within gRPC. Environment variables and Nunjucks templating can be used in both the URL bar and message body.

## Known limitations

As of version 2021.1, gRPC in Insomnia does not include:

* Support for running gRPC requests in unit tests
* Support for request chaining
* Support for gRPC deadlines
* Persistence of request/responses and history
* Moving gRPC requests between workspaces
  * If a folder that contains a gRPC request is moved to a different workspace, the request will be moved but the proto file will not.
