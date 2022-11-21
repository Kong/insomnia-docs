---
layout: article-detail
title:  Security Standards
category: Security
category-url: security
---

This document addresses common questions we get about our security standards.

**How is data processed when sent to Insomnia servers?**

* Information is sent over TLS
* Information sent is end-to-end encrypted

**Where is our information stored?**

* Information is stored in GCP, in US Central region
* Information inside of GCP is stored within Postgres

**Do we have any compliance certifications?**

Not at the moment.

**Do you have any penetration test results from external parties?**

Not at the moment.

**What authentication is implemented by the application?**

* Secure Remote Passwords (SRP) encrypted key exchange protocol.

**How often do you release major updates, and or security patches?**

* Major updates are usually released once a month, or every two weeks depending on the scope.
* Security, and hotfix patches are handled on a case-by-case basis and can occur at any time.

**Do you retain server logs, or event logs?**

* All server logs stored, are kept within GCP, and only accessed by engineers authorized to manage the Insomnia servers.

**Do you maintain documentation when an incident/event occurs?**

* When an incident occurs, we perform an internal post-mortem and delegate information accordingly. Either through the site in the form of a blog post, or through social media/support on a case-by-case basis.

**In case of a breach, do you notify customers?**

* Yes, via email.

**What is your primary point of contact?**

* [Open Source](https://github.com/kong/insomnia)
* [Support channels](https://insomnia.rest/support)
