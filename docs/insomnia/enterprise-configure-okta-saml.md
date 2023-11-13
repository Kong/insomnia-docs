---
layout: article-detail
title:  Integrating Insomnia Enterprise with Okta SAML 2.0
category: "Integrating Insomnia Enterprise with Okta SAML 2.0"
category-url: enterprise-configure-okta-saml
---

This guide outlines the steps for setting up Single Sign-On (SSO) for Insomnia Enterprise using Okta's SAML integration, ensuring a secure and efficient user authentication process.

#### Creating a New Application Integration in Okta

1. **Navigate to Okta:** Go to Applications > Applications.
2. **Initiate the Integration:** Click on "Create App Integration".
   ![okta create app integration](../assets/images/okta-create-app-integration.jpg)
3. **Choose Sign-in Method:** Select "SAML 2.0" as the sign-in method.
   ![okta saml 2](../assets/images/okta-select-saml-2.jpg)

#### Configuring the Application in Okta

4. **General Settings:** Complete the general settings form and proceed.
   ![okta set app name](../assets/images/okta-app-set-name.jpg)
5. **SSO Configuration in Insomnia:** Define your organization's domain identifier.
   ![insomnia enterprise sso set domain](../assets/images/insomnia-enterprise-sso-set-domain.jpg)
6. **Transfer SSO Details:** Copy the Single Sign-On URL and the Audience URI from Insomnia to Okta.
   ![okta app set sso and audience uri](../assets/images/okta-app-set-sso-and-audience-uri.jpg)
7. **Define Attributes:** Add an Attribute Statement. Set the name as `email` and map it to `user.email`. Complete the app integration setup.
   ![okta attribute email](../assets/images/okta-attribute-email.jpg)

#### Setting up Insomnia Enterprise

8. **Finalize SSO Setup:** In Insomnia, paste the "Sign on URL" and the "Signing certificate" from Okta.
   ![okta copy sign on url and signing cert](../assets/images/okta-copy-sign-on-url-and-signing-cert.jpg)
   ![insomnia enterprise sso copy sign on url and cert](../assets/images/insomnia-enterprise-sso-copy-sign-on-url-and-cert.jpg)
9. **Verify Connection:** Check for the message "Your SAML connection has been successfully updated" in Insomnia.
   ![insomnia enterprise sso create success](../assets/images/insomnia-enterprise-sso-create-success.jpg)

#### User Management

10. **Assigning Users in Okta:** Assign users to the application.
    ![okta app assign user](../assets/images/okta-app-assign-user.jpg)
11. **Inviting Users in Insomnia:** Invite the same users in the Insomnia organization dashboard.
    ![insomnia enterprise sso invite user](../assets/images/insomnia-enterprise-sso-invite-user.jpg)
12. **User Onboarding:** Users can log in using Okta, set an encryption passphrase, and accept the enterprise invitation.
    ![insomnia enterprise sso login](../assets/images/insomnia-enterprise-sso-login.jpg)
    ![accept invite enterprise user](../assets/images/accept-invite-enterprise-user.jpg)

Follow these steps to successfully integrate Insomnia Enterprise with Okta SAML for a streamlined and secure SSO experience.
