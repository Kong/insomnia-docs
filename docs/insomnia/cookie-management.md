---
layout: article-detail
title:  Cookie Management
category: "Built-In Features"
category-url: built-in-features
---

Insomnia automatically stores cookies from every response and sends them with requests when needed (just like a web browser would).

## Manage Cookies

Each workspace has its own cookie jar. Cookies can be added, viewed, modified, or deleted within the cookie manager. The cookie manager is accessible via the **Cookies** button. 

![Click the Cookies button to get to the cookie manager.](/assets/images/cookies-button.png)
_The Cookies button enables you to access the cookie manager._

## Change Cookie Sending and Storing Behavior

Cookie storing and sending is done automatically. However, it is possible to change this behavior on a per-request basis, within the request settings dialog. The request settings dialog can be accessed via the request options dropdown beside each request in the sidebar.

![Cookie settings appear under individual request dropdown menus.](/assets/images/cookie-settings.png)
_Access the cookie settings in an individual request dropdown menu._

### Send Cookies Automatically

Enabling this option will cause Insomnia to automatically send cookies with the request via the Cookie header.

### Store Cookies Automatically

Enabling this option will cause Insomnia to save any cookies received via the Set-Cookie header automatically.

## Reference Cookie Values

Sometimes it is necessary to reference the value of a cookie within part of a request. For example, it is common to receive a CSRF token in as a cookie values and pass it as a header or form value in a subsequent request.

This can be done using the Request Template Tag.
