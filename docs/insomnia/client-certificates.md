---
layout: article-detail
title:  Client Certificates
category: "Built-In Features"
category-url: built-in-features
---

Client certificates are used by some APIs to as a means of authentication. Insomnia supports assigning a client certificate to a specific domain name and will automatically use them automatically whenever a request to that domain is sent.

Importing Certificates
Insomnia supports PFX (Mac), and PEM (Windows and Linux) certificates. To import a new certificate, open the Document/Collection Settings dialog – accessible from the top-left menu – and click on the Client Certificates tab. From here, you can add new certificates and view existing ones.

Now lets walk through how to import one.

If you’re familiar with client certificates, the only field needing explanation should be the Host field.

Host: certificate will be sent when the host (and port if specified) matches
PFX: certificate in PFX or PKCS12 format (Only supported on Mac)
CRT File + Key File: certificate and key pair (only supported on Windows and Linux)
Passphrase: An optional passphrase for the certificate if required
After importing a certificate, it will show up in the main certificates list. From here, it can be enabled/disabled or deleted.