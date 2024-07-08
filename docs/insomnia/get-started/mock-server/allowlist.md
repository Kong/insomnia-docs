---
layout: article-detail
title:  Allowlist for Insomnia
category: "Get Started"
category-url: get-started
---

<!-- for docs rework: revise this page like we normally would -->

## Introduction

For enterprise users utilizing Insomnia, it's crucial to ensure that specific domains are whitelisted in your network. This step is essential to guarantee that all features of Insomnia, including updates, synchronization, and documentation, work without any hindrance in environments with restricted internet access.

## Domains to Whitelist

To fully utilize Insomnia, please ensure the following domains are whitelisted:

- **insomnia.rest**: Main website for Insomnia.

- **ai.insomnia.rest**: Handles AI-related features within Insomnia.

- **api.insomnia.rest**: API endpoint for Insomnia services.

- **docs.insomnia.rest**: Provides access to Insomnia documentation and user guides.

- **mock.insomnia.rest**: Used for Insomnia App's Mocking feature.

- **updates.insomnia.rest**: For receiving software updates and patches.

- **auth.insomnia.rest**: Manages authentication processes for Insomnia.

- **insomnia-prod.us.auth0.com**: A domain linked to authentication used for secure logins.

- **djvq2ky33rnc.cloudfront.net**: A CDN domain for hosting static assets related to Insomnia.

- **api.segment.io**: Used for analytics and telemetry within Insomnia.

- **o1147619.ingest.sentry.io**:  Used for error reporting and monitoring to enhance the application's stability and performance.

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
