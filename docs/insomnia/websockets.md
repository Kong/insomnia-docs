---
layout: article-detail
title:  Websockets
category: "Built-In Features"
category-url: built-in-features
---

[The Websocket protocol](https://websockets.spec.whatwg.org/) allows data to be passed bi-directionally between client and server over a persistent connection.

Insomnia supports making Websocket requests alongside REST, GraphQL, and gRPC.

## Create a Request
In order to create a new Websocket request, click on + in the sidebar.

Then, in the dropdown method, click on the option **Websocket Request**.  A new request will be created.

To rename the request, double click on the request tile in the lefthand side bar.  Type in the name for the request and hit the enter key.

## Making a Websocket Connection
Enter the websocket url in the URL bar of your websocket request.  If needed, you can set your Authentication by clicking on the authentication tab.  Then, click on the down arrow to choose the Authentication method.  Headers can be set in the Header tab.

Click on the **Connect** button next to the URL bar.  When there is a successful Websocket connection made, **CONNECTED** will appear on the url bar and the **Connect** button will turn into a **Disconnect** button.  On the event panel, a "Connected Successfully" event log will appear.  To see more details about the connection, click on **Timeline**.

## Sending a Websocket Message
Click on the **JSON** tab.  To send raw data, click on the down arrow next to the **JSON** tab and click on **Raw**.

Click in the text editor below the **Send** button.  Type the message to be sent.  When finished, click **Send**.  On the **Events** panel, the sent message will be displayed as part of the event log.  To see more details about the message sent, click on the sent message log.  Details will appear below in the **Preview** section.


## Receiving Websocket Events
Events received from a connected Websocket connection will display on the **Events** panel, as they are recieved.  All new events will populate the top of the **Events** panel and move down as new events come in.

To see details about received events, click on th event in the **Events** panel.  A preview box will open below the events log, containing the recieved event details.

## Environment Variables and Template Tags

The 2022.6 release of Insomnia introduces support for environment variables and template tags within Websockets. Environment variables and Nunjucks templating can be used in both the URL bar and message body.

## Known limitations
1. Version 2022.6 of Insomnia does not support custom websockets.
1. Insomnia Sync of Websocket requests on teams where members are using Insomnia version 2022.6 and Insomnia versions < 2022.6 will result in the lose of synced Websocket requests.  If your team or Individual setup is using Insomnia Sync to sync Websocket requests, please ensure that all devices associated are on Insomnia 2022.6.
