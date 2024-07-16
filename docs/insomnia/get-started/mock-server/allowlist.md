---
layout: article-detail
title:  Allowlist for Insomnia
---

For enterprise users utilizing Insomnia, it's crucial to ensure that specific domains are allowlisted in your network. This step is essential to guarantee that all features of Insomnia, including updates, synchronization, documentation, and necessary backend services work without any hindrance in environments with restricted internet access.

If you have issues after allowlisting Insomnia hostnames, contact your IT support or reach out to Insomnia's customer service at <support@insomnia.rest> or <https://support.konghq.com/support/s/>.

## Hostnames to allowlist

Ensure the following domains are allowlisted to use Insomnia:

| Hostname | Description |
| -------- | ----------- |
| `insomnia.rest` | Main website for Insomnia. |
| `ai.insomnia.rest` | Handles AI-related features in Insomnia. |
| `api.insomnia.rest` | API endpoint for Insomnia services. |
| `docs.insomnia.rest` | Provides access to Insomnia's documentation and user guides. |
| `mock.insomnia.rest` | Used for the Insomnia app's [mocking feature](/insomnia/api-mocking). |
| `updates.insomnia.rest` | For receiving software updates and patches. |
| `auth.insomnia.rest` | Manages authentication processes for Insomnia. |
| `insomnia-prod.us.auth0.com` | A domain linked to authentication used for secure logins. |
| `djvq2ky33rnc.cloudfront.net` | A CDN domain for hosting static assets related to Insomnia. |
| `api.segment.io` | Used for analytics and telemetry within Insomnia. |
| `o1147619.ingest.sentry.io` | Used for error reporting and monitoring to enhance the application's stability and performance. |

You might need to restart your firewall or web filter after adding these to the allowlist.

{:.note}
> **Individual Insomnia users:** If you’re an individual user, ask your IT department to allowlist these hostnames to enable full functionality of Insomnia in your workspace.
