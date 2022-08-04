---
layout: article-detail
title:  User Analytics Collected
category: Security
category-url: security
---

When you first download Insomnia, you were asked if you wanted to send analytics data to the Insomnia team about your Insomnia Apps performance and your behavior in the app. This article is a description of what analytics are collected and sent.

You can edit your preference on sharing analytics data with Insomnia via the Insomnia app Preference Page by scrolling down to the **Network Activity** section and checking or unchecking the box next to **Send Usage Statistics**

# Error Data Collection
When you opt-in to collection of analytics, the Insomnia app will send anonymized action event data to Kong that may be later used to evaluate user behavior in the purpose of guiding product decisions.

Here is the format of the JSON data body of the event sent:

```
{
  "anonymousId": "device-specific-UUID-here",
  "context": {
    "app": {
      "name": "Insomnia",
      "version": "2021.7.2"
    },
    "library": {
      "name": "analytics-node",
      "version": "4.0.1"
    },
    "os": {
      "name": "mac",
      "version": "12.2.0"
    }
  },
  "event": event_name,
  "integrations": {},
  }
  ```