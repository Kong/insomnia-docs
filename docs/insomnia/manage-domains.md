---
layout: article-detail
title: Manage Domains
category: "Manage Domains"
category-url: enterprise
---

{:.alert .alert-primary}
**Note**: This feature is only available for Enterprise subscriptions.

Owners of Insomnia Enterprise subscriptions can manage domains that are accepted when using SSO and/or in invite controls.

![manage domains example](/assets/images/manage-domains.png)

## Verifying a New Domain

To add a new domain, click on the `+ New Domain` button. You will be prompted to enter the domain name and to choose between:

- **Unique verification record**: The default option to verify a domain or parent domain of your choosing.
- **Root domain verification record**: Used when you want to verify a subdomain of an existing domain that you have already verified.

After you create the domain, you will be shown a TXT record that you'll need to add to your DNS configuration. This can vary depending on how you handle domains in your organization.

![domain verify example](/assets/images/domain-verify-example.png)

If you are having trouble verifying the TXT record, please contact your enterprise or organization network administrator and share the TXT record with them.

{:.alert .alert-primary}
**Note**: If you only wish to manage domains that can be used in invite controls and are not interested in using the SSO feature, you can skip verification or verify later.