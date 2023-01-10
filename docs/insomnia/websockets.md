---
layout: article-detail
title:  WebSockets
category: "debug"
category-url: debug
---

[The WebSocket protocol](https://WebSockets.spec.whatwg.org/) allows data to be passed bi-directionally between client and server over a persistent connection.

Insomnia supports making WebSocket requests alongside REST, GraphQL, and gRPC.

## Create a Request
In order to create a new WebSocket request, click on **+** in the sidebar.

Then, from the dropdown menu, click on the option **WebSocket Request**.  A new request will be created.

To rename the request, double-click on the request tile in the lefthand sidebar.  Type in the name of the request and press the enter key.

## Making a WebSocket Connection
Enter the WebSocket url in the URL field of your WebSocket request.

You can set an authentication by clicking on the authentication tab, then, clicking on the down arrow to choose the authentication method. Headers can be set in the Header tab.

Click the **Connect** button next to the URL bar. When there is a successful WebSocket connection, **CONNECTED** will appear in the URL bar, and the **Connect** button will display **Disconnect**.  On the event panel, a "Connected Successfully" event log will appear.  To see more details about the connection, click **Timeline**.

## Sending a WebSocket Message
Click on the **JSON** tab.  To send raw data, click on the down arrow next to the **JSON** tab, then click on **Raw**.

Select the text editor below the **Send** button. Type the message you want to send, and click **Send**.  On the **Events** panel, the sent message will be displayed as part of the event log. To see more details about the message, click on the sent message log.  Details will appear in the **Preview** section.


## Receiving WebSocket events
Events received from a connected WebSocket connection will display on the **Events** panel, when they are received. All new events will populate the top of the **Events** panel and move down as new events come in.

To see details about received events, click on the event in the **Events** panel.  A preview box will open below the events log, containing the received event details.

## Environment variables and template tags

The 2022.6 release of Insomnia introduces support for environment variables and template tags within WebSockets. Environment variables and Nunjucks templating can be used in both the URL bar and message body.

## Known limitations
1. Version 2022.6 of Insomnia does not support custom WebSockets.
1. Insomnia sync of WebSocket requests on teams where members are using Insomnia version 2022.6 and Insomnia versions < 2022.6 will result in the loss of synced WebSocket requests. If your team or Individual setup is using Insomnia Sync to sync WebSocket requests, please ensure that all devices associated are on Insomnia 2022.6.
