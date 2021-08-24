---
layout: article-detail
title:  Cookie Management
category: "Built-In Features"
category-url: built-in-features
---

Insomnia automatically stores cookies from every response and sends them with requests when needed (just like a web browser would).

Managing Cookies
Each workspace has its own cookie jar. Cookies can be added, viewed, modified or deleted within the cookie manager, accessible button at the top of the sidebar.

Changing Cookie Sending/Storing Behavior
As noted previous, the storing and sending of cookies is done automatically. However, it is possible to change this behavior on a per-request basis, within the request settings dialog. The request settings dialog can be accessed via the request options dropdown beside each request in the sidebar.

[Option] Send Cookies Automatically
Enabling this option will cause Insomnia to automatically send cookies with the request via the Cookie header.

[Option] Store Cookies Automatically
Enabling this option will cause Insomnia to save any cookies received via the Set-Cookie header automatically.

Referencing Cookie Values
Sometimes it is necessary to reference the value of a cookie within part of a request. For example, it is common to receive a CSRF token in as a cookie values and pass it as a header or form value in a subsequent request.

This can be done using the Request Template Tag.

Conclusion
Cookies are an integral part of most web applications but are notoriously difficult to work with. Hopefully, the tools Insomnia provides will make your experience working with cookies much more enjoyable.
