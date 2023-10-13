---
layout: article-detail
title:  User Analytics Collected
category: Security
category-url: security
---

If you are logged into your Insomnia account or if you have not opted out of analytics in the desktop application, we collect information about your usage. If you use the Insomnia desktop application without an account, we provide you with the choice to opt out to avoid sending us this information in the desktop application user interface.

We collect usage analytics to evaluate user behavior for the purpose of guiding product decisions.

If you use the application without an Insomnia account, you can edit your preference on sharing analytics data with Insomnia via the Insomnia app Preference Page by scrolling down to the **Network Activity** section and checking or unchecking the box next to **Send Usage Statistics**.

If you are logged into your Insomnia account, or if you are using the Insomnia application without an account and have not opted out of collection, this is the format of the JSON data body for a sent event:

```json
{
  "anonymousId": "device-Specific-UUID-here",
  "context": {
 "app": {
   "name": "Insomnia",
   "version": "8.2.0"
 },
 "library": {
   "name": "@segment/analytics-node",
   "version": "1.0.0"
 },
 "os": {
   "name": "mac",
   "version": "14.0.0"
 }
  },
  "event": "Request Executed",
  "integrations": {},
  "messageId": "node-next-message-specific-id-here",
  "originalTimestamp": "2023-10-10T09:57:53.346Z",
  "properties": {
 "mimeType": "application/json",
 "preferredHttpVersion": "default"
  },
  "receivedAt": "2023-10-10T09:58:05.056Z",
  "sentAt": null,
  "timestamp": "2023-10-10T09:57:53.346Z",
  "type": "track",
  "writeKey": "REDACTED"
}
```

Please also see our [Privacy Policy](https://insomnia.rest/privacy) for information about personal data we process in connection with Insomnia products and services.
