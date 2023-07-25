---
layout: article-detail
title:  Proxy
category: "Get Started"
category-url: get-started
---

Insomnia does not automatically detect system-wide proxy settings. A proxy can be set up manually. Set your HTTP, HTTPS, SOCKS4 or SOCKS5 proxy server and reroute all future requests through that server by accessing Preferences via the cog icon > **General** > **HTTP Network Proxy**.

{:.alert .alert-primary}
**Note**: Proxy server settings apply to all traffic going through the Insomnia application, and cannot be restricted to entities such as Collections and individual requests.

Example usage of HTTP or HTTPS proxy

```bash
http://localhost:8005
```

For SOCKS4 or SOCKS5 proxy, one of the following prefixes should be used before the hostname depending on the verion (**socks4h://**, **socks5h://**)

```bash
socks5h://localhost:8005
```

You can also add a comma-separated list of hostnames to the **No Proxy** box and they will be exempt from going through the proxy server.

## Authentication

Insomnia supports proxy server authentication via Basic Auth, digest, and NTLM.

If your proxy server requires Basic Auth, you can include the credentials in the URL in the following way:

```bash
http://username:password@localhost:8005
```
