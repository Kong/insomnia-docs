---
layout: article-detail
title:  Insomnia Whitelisting Guide for Enterprise Users
category: "Insomnia Whitelisting Guide for Enterprise Users"
category-url: enterprise-ip-whitelist-guide
---

## Introduction

For enterprise users utilizing Insomnia, it's crucial to ensure that specific domains are whitelisted in your network. This step is essential to guarantee that all features of Insomnia, including updates, synchronization, and documentation, work without any hindrance in environments with restricted internet access.

## Domains to Whitelist

To fully utilize Insomnia, please ensure the following domains are whitelisted:

- **insomnia.rest**: Main website for Insomnia.

- **ai.insomnia.rest**: Redirects to [https://app.insomnia.rest/ai](https://app.insomnia.rest/ai).

- **ai-helper.insomnia.rest**: Handles AI-Generated Testing related features within Insomnia, introduced in [Insomnia 8.x release](https://konghq.com/blog/product-releases/insomnia-8-0#h-introducing-insomnia-ai-for-automatically-generated-api-tests).

- **api.insomnia.rest**: API endpoint for Insomnia services.

- **docs.insomnia.rest**: Provides access to Insomnia documentation and user guides.

- **mock.insomnia.rest**: Used for Insomnia App's Mocking feature.

- **updates.insomnia.rest**: For receiving software updates and patches.

- **auth.insomnia.rest**: Manages authentication processes for Insomnia.

- **insomnia-prod.us.auth0.com**: A domain linked to authentication used for secure logins.

- **djvq2ky33rnc.cloudfront.net**: A CDN domain for hosting static assets related to Insomnia.

- **api.segment.io**: Used for analytics and telemetry within Insomnia.

- **o1147619.ingest.sentry.io**:  Used for error reporting and monitoring to enhance the application's stability and performance.

- **js.stripe.com**, **m.stripe.com**, **m.stripe.network**: Used for non-enterprise users. Please make sure these are unblocked to prevent billing issues if you are on an Individual/Team plan.

## Whitelisting Steps

### For IT Administrators

Follow these steps to add the domains to your network's whitelist:

1. **Access Firewall or Network Security Settings:**
   - Log in to your firewall or web filter's administrative interface.

2. **Find the Whitelisting Section:**
   - Locate the area where you can list allowed websites or domains.

3. **Input the Domains:**
   - Add each of the above domains to the whitelist section. Ensure you save the changes after adding each domain.

4. **Implement the Changes:**
   - Apply the changes, which may necessitate restarting the firewall or web filter service.

### For Individual Users

If you're an individual user, contact your IT department with this list and request these domains be whitelisted to enable full functionality of Insomnia in your workspace.

## Conclusion

Whitelisting these domains ensures uninterrupted access to all functionalities of Insomnia, including updates, documentation, and necessary backend services. Should you experience issues post-whitelisting, it's advisable to seek assistance from your IT support or reach out to Insomnia's customer service at <support@insomnia.rest> OR <https://support.konghq.com/support/s/>.
