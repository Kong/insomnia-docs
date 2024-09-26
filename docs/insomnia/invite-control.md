---
layout: article-detail
title: Invite Controls
category: "Invite Controls"
category-url: enterprise
---

{:.alert .alert-primary}
**Note**: This feature is only available for Enterprise subscriptions.

![Invite controls - intro](/assets/images/invite-control-intro.png)

To access it, an enterprise owner needs to go into their Enterprise Controls and then into Invite Controls.

With the new Invite Control enterprise capability, you can now determine which domains are allowed to be invited to work on your organizations and projects. This ensures that external users aren't mistakenly invited.

While the decision to invite someone is still entirely under the control of the organization's admins, setting up Invite Control rules further ensures that only approved domains can be added to your projects, collections, and design specs. For example, if an admin mistakenly invites someone they shouldn't have (such as a user with a personal email address instead of a corporate email), Invite Control can catch the error immediately and prevent the invite from being sent.

The capability to invite users to an organization can be entirely disabled with the Invite Control feature as well.

![Invite control - starting point](/assets/images/invite-control-start.png)

When configuring domains that are allowed for invites across your organization, or on a specific organization, you can choose between the following options:

- **All domains**: Any domain will be permitted for invites.
- **Only verified domains**: Only domains that you previously added to your [Domains setup](/insomnia/manage-domains) will be permitted for invites.
- **Custom domains**: Domains that you define specific to one or more organizations, which don't necessarily need to be added to your [Domains setup](/insomnia/manage-domains).

![Invite control - allowed domains menu](/assets/images/invite-control-allowed-domains.png)

Once you set up the domain rules for invites according to your preferences for each organization in your enterprise, you may also see users who are not in compliance with the rules you defined (e.g., their email domains are not part of the settings you chose). In those cases, you'll be shown an option in the list of organizations within the Invite Controls menu to remove the users (both members and pending invites) that are not in compliance with the defined invite rule.

![Invite control - setup example](/assets/images/invite-control-setup-example.png)

This capability, in addition to [Storage Control](/insomnia/storage-control) and the many other enterprise governance, compliance, and security capabilities in Insomnia, helps to ensure that your API assets are always secure and accessible only by authorized individuals in your organization.
