---
layout: article-detail
title:  Client Certificates
category: "Built-In Features"
category-url: built-in-features
---

Client certificates are used by some APIs to as a means of authentication. Insomnia supports assigning a client certificate to a specific domain name and will automatically use them automatically whenever a request to that domain is sent.

## Import Certificates

Insomnia supports `PFX` (Mac) and `PEM` (Windows and Linux) certificates. 

To import a new certificate, click **Document Settings** or **Collection Settings** then the **Client Certificates** tab. 

![Access client certificate settings via Document or Collection Settings.](/assets/images/document-settings.png)
_Depending on whether you are working with a Document or Collection, access client certificate settings via Document Settings or Collection Settings._

Once you click **New Certificate** in the **Client Certificates** tab, you will be prompted to fill out the following information. 

* `Host`: certificate will be sent when the host (and port if specified) matches
* `PFX`: certificate in `PFX` or `PKCS12` format (only supported on Mac)
* `CRT File + Key File`: certificate and key pair (only supported on Windows and Linux)
* `Passphrase`: An optional passphrase for the certificate, if required

After importing a certificate, it will show up in the main certificates list in the **Client Certificates** tab. From here, the certificate can be enabled, disabled, or deleted.