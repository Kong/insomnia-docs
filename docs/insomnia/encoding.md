---
layout: article-detail
title:  Encoding
category: "Built-In Features"
category-url: built-in-features
---

Insomnia automatically encodes special characters in request URLs. Auto-encoding can cause issues for some users who want to send non-encoded special characters. 

Check the exact request URL sent using the **Timeline** tab. 

![The Timeline tab appears on the right-side panel after a request is sent.](/assets/images/timeline-tab.png)
_Upon sending a request, check the Timeline tab to see the encoded values sent._

## Troubleshoot Special Character Issues

The following are options for troubleshooting special character issues. 

* Encode your own request URL using an encoding tool like [urlencoder](https://www.urlencoder.org/) or [W3Schools](https://www.w3schools.com/tags/ref_urlencode.ASP).
* Disable automatic encoding completely (likely too disruptive of a change)
In this scenario, there could be a Template Tag for encoding values explicitly
* Add option on each query parameter to enable or disable encoding
* Add global workspace-level setting to enable or disable encoding
* Have a character allowlist for encoding
* Use the [Insomnia encoder plugin](https://github.com/sypbiz/insomnia-plugin-encode-uri)
