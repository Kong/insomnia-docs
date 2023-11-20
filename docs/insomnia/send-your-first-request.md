---
layout: article-detail
title:  Send Your First Request
category: "Get Started"
category-url: get-started
---

Insomnia is an API client that enables you to send API requests outside of your terminal, and without writing any code. This means you don't have to write any finicky cURL requests or backend code to quickly retrieve information, push content to a database, and do anything else a given API enables you to do.

In this guide, we'll talk specifically about HTTP requests. This will give us common ground to send off a first request together. If you want to learn to send gRPC and GraphQL requests, see our more comprehensive [Requests documentation](/insomnia/requests).

- [API Request Basics](#api-request-basics)
- [Send a Request to Insomnia Website](#send-a-request-to-insomnia-website)

## API Request Basics

Here's some common terminology that'll help you navigate the world of APIs:

- **Request**: A structured attempt to communicate with an API.
- **Endpoint**: A request-able URL. For example, I could have an API with the base URL `petstore.com` with the endpoint `/inventory`. If I make a request to `petstore.com/inventory`, I'll get back a list of the pet store's product inventory.

An API request is composed of discrete elements that let you interact with an API. Some common elements you may need are:

- **URL**: The address where the API is hosted.
- **Request type**: In the HTTP protocol, common request types include the following:
  - `GET`: returns information from an API.
  - `POST`: sends data you've entered, and returns a confirmation that the data you sent was received.
  - `PATCH` and `PUT`: sends data that modifies a record that an API has access to.
  - `DELETE`: deletes a record that an API has access to.
- **Authentication**: The credentials required to access API endpoints. Not all APIs require authentication, and there are a lot of different types of authentication. Learn more about [Authentication](/insomnia/authentication/).

## Send a Request to Insomnia Website

In this section, we're going to send a `GET` request to the Insomnia website. Feel free to interchange the Insomnia website URL with any web URL you'd like to return in the Preview panel.

1. From your Insomnia dashboard, create a new Document or Collection.
1. In a Document, select the **Debug** tab, then **New Request**. In a Collection, select **New Request**.
1. In the **New Request** modal:
   1. Enter a request name like `Return Insomnia website`.
   1. Select a `GET` method from the dropdown.
   1. Click **Create**.
1. Enter `insomnia.rest` in the request URL input.
1. Click **Send**.

    ![The Insomnia site should appear in the Preview right side panel.](/assets/images/request-insomnia-site.png)
    _Once you've clicked Send on your request, you should see the Insomnia website in the right-side Preview panel. Note that this screenshot shows a Document (not a Collection)._

Congrats! You've now used Insomnia to send your first request to the Insomnia website. For more complex request options, see our [Request documentation](/insomnia/requests).
