---
layout: article-detail
title:  Integrating Insomnia Enterprise with Okta OpenID Connect
category: "Integrating Insomnia Enterprise with Okta OpenID Connect"
category-url: enterprise-configure-okta-oidc
---

This guide outlines the steps for setting up Single Sign-On (SSO) for Insomnia Enterprise using Okta's OIDC integration, ensuring a secure and efficient user authentication process.

#### Configuring Insomnia Enterprise

- **Access Enterprise Controls:** In Insomnia, navigate to "Enterprise Controls."
- **Create SSO Connection:** Click to create a new SSO Connection.
- **SSO Configuration:** Set up your company domain in Insomnia and keep the page open to transfer details between Insomnia and Okta.

#### Creating a New Application Integration in Okta

1. **Navigate to Okta:** Go to Applications > Applications.
2. **Initiate the Integration:** Click on "Create App Integration".

   ![okta create app integration](../assets/images/okta-create-app-integration.jpg)

3. **Choose Sign-in Method:** Select "OIDC - OpenID Connect" as the sign-in method.

   ![okta saml 2](../assets/images/okta-select-oidc.png)

#### Configuring the Application in Okta

1. **Transfer SSO Details:** Copy the SSO URL from Insomnia to Okta.

   ![okta set app name and Sign-in redirect URI](../assets/images/okta-app-oidc-name.png)

2. **Set Issuer:** Set the issuer in Okta.

   ![okta set issue](../assets/images/okta-set-issuer.png)

3. **Transfer SSO Details:** Copy the client id, client secrets and the issuer URL from Okta to Insomnia.

   ![okta client id and secrets](../assets/images/okta-copy-oidc.png)

4. **SSO Configuration in Insomnia:** Define your organization's domain identifier.

   ![insomnia enterprise sso set domain](../assets/images/insomnia-set-oidc.png)

#### User Management

1. **Assigning Users in Okta:** Assign users to the application.

    ![okta app assign user](../assets/images/okta-oidc-assign-people.png)

2. **Inviting Users in Insomnia:** Invite the same users in the Insomnia organization dashboard.

    ![insomnia enterprise sso invite user](../assets/images/insomnia-enterprise-sso-invite-user.jpg)

3. **User Onboarding:** Users can log in using Okta, set an encryption passphrase, and accept the enterprise invitation.

    ![insomnia enterprise sso login](../assets/images/insomnia-enterprise-sso-login.jpg)

    ![accept invite enterprise user](../assets/images/accept-invite-enterprise-user.jpg)

Follow these steps to successfully integrate Insomnia Enterprise with Okta SAML for a streamlined and secure SSO experience.
