---
layout: article-detail
title:  Integrating Insomnia Enterprise with Microsoft Azure/Entra ID SAML 2.0
category: "Integrating Insomnia Enterprise with Microsoft Azure/Entra ID SAML 2.0"
category-url: enterprise-configure-azure-saml
---

This guide provides instructions for setting up Single Sign-On (SSO) for Insomnia Enterprise using Azure's Microsoft Entra SAML integration, ensuring secure and efficient user authentication.

#### Configuring Insomnia Enterprise

- **Access Enterprise Controls:** In Insomnia, navigate to "Enterprise Controls."
- **Create SSO Connection:** Click to create a new SSO Connection.
- **SSO Configuration:** Set up your company domain in Insomnia and keep the page open to transfer details between Insomnia and Azure.

#### Setting up Azure Integration

1. **Access Azure Portal:** Open a separate page and go to your Azure Portal.
2. **Navigate to Enterprise Applications:** Go to Microsoft Entra ID > Enterprise Applications.
3. **Add New Application:** In the Microsoft Entra Gallery, select "Microsoft Entra SAML Toolkit."

   ![microsoft entra gallery](../assets/images/microsoft-entra-gallery.jpg)

3. **Configure Application:** Rename the toolkit (e.g., "Insomnia") and press "Create."

   ![microsoft entra toolkit](../assets/images/microsoft-entra-toolkit.jpg)

4. **Edit Single-Sign-On Properties:** Access the Single-Sign-On properties for further configuration.

   ![microsoft entra saml start](../assets/images/microsoft-entra-saml-start.jpg)

#### Configuring SAML Settings

5. **Basic SAML Configuration:** Copy the Identifier from Insomnia into Azure's Identifier field.

   ![microsoft entra saml identity id](../assets/images/microsoft-entra-saml-identity-id.jpg)

6. **Setting Reply and Sign-On URLs:** Copy the SSO URL from Insomnia into both the Reply URL and the Sign-On URL in Azure.

    ![insomnia copy microsoft entra saml into org config](../assets/images/insomnia-copy-microsoft-entra-saml-into-org-config.jpg)

    ![microsoft entra saml add sign on url](../assets/images/microsoft-entra-saml-add-sign-on-url.jpg)

    ![microsoft entra saml reply url](../assets/images/microsoft-entra-saml-reply-url.jpg)

7. **Attributes and Claims:** Create an email attribute in Azure that points to `user.mail`.

    ![microsoft entra saml add email attribute](../assets/images/microsoft-entra-saml-add-email-attribute.jpg)

8. **Login URL Transfer:** Copy the Login URL from Azure into Insomnia.

    ![microsoft entra saml copy login url.jpg](../assets/images/microsoft-entra-saml-copy-login-url.jpg)

9. **Import Signing Certificate:** Transfer the base64 version of the Signing certificate from Azure to Insomnia.

    ![microsoft entra saml signing certificate](../assets/images/microsoft-entra-saml-signing-certificate.jpg)

#### Finalizing User Setup

10. **Assign Users in Azure/Entra:** Assign users to the Enterprise application in Azure.

    ![microsoft entra assign users](../assets/images/microsoft-entra-assign-users.jpg)

11. **Invite Users in Insomnia:** Invite the same users to your organization in Insomnia.

    ![insomnia enterprise sso invite user](../assets/images/insomnia-enterprise-sso-invite-user.jpg)

#### Completion

Once these steps are completed, users receiving invites and signing up/logging in via Azure SSO will securely access Insomnia Enterprise.

![microsoft insomnia login example](../assets/images/microsoft-insomnia-login-example.jpg)

This process ensures a streamlined integration between Insomnia Enterprise and Azure Microsoft Entra SAML for effective SSO implementation.
