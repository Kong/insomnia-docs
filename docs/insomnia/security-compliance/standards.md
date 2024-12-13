---
layout: article-detail
title:  Insomnia security standards
---

<!--Reference page that combines the following: https://docs.insomnia.rest/insomnia/security-features, https://docs.insomnia.rest/insomnia/security-standards (as FAQ at the end), https://docs.insomnia.rest/insomnia/signup-and-auth, https://docs.insomnia.rest/insomnia/analytics-collected, https://docs.insomnia.rest/insomnia/data-encryption. I've copied all the content from the other pages into this page already and deleted them. Content on this page will need to be revised. -->

## Key Security Data Features

When you create an Insomnia account, you gain access to end-to-end encrypted project data sync. Simply sign into your account and your data will be there, seamlessly synced across all of your (and optionally your teams') devices.

Insomnia believes that it is your right to know how your sensitive project data is transported and handled, so this document is an effort to explain exactly how it works.

If you find that any part of this document is incorrect, missing, or wrong, please don't hesitate to reach out.

## Key Security Data Features

This section gives a high level overview of Insomnia project data sync security. If you read anything in this document, it should be this section.

### What End-To-End encryption means

E2EE means that all encryption keys are generated locally, all encryption is performed before sending any data over the network, and all decryption is performed after receiving data from the network. At no point in the sync process can the Insomnia servers, or an intruder read or access sensitive application project data.

## What is project data?

Project data are your  API design specifications, collections, tests and other files that you choose to share with others in your organization through Insomnia's hosted data synchronization service.

Please note that the Insomnia service may provide you the ability to develop tests for your API design specifications, as well as other functionality, using artificial intelligence tools. Data you provide to use these AI tools are not end-to-end encrypted and so this document does not apply to such data.

### Encryption algorithms we use

All data is encrypted using randomly generated 256 bit symmetric keys for use with AES-GCM-256 (Galois Counter Mode).

### Resetting Passphrases

Losing your passphrase means losing the ability to decrypt your account keys. If you lose your passphrase there is no way to access your project data that is not stored by you locally, and there is nothing Insomnia can do to help apart from resetting your passphrase as well as your account.

You can reset your passphrase through the "[Forgot Passphrase](/insomnia/forgot-passphrase)" flow. Once you go through the "[Forgot Passphrase](/insomnia/forgot-passphrase)" flow and define a new passphrase, you'll lose access to your previous encrypted project data.

If you have been invited to collaborate with other organizations, you can reset your passphrase and then ask to be invited back. You will only be able to retrieve data for the organizations that you are invited back to.

If you have shared your personal organizations or project data, you can ask other users with Admin permissions to also re-invite you after resetting the passphrase.

### Unencrypted Fields

By default, project data resources within the Insomnia application are fully encrypted before being sent to the server. However, both id and name of each resource are attached in plaintext before uploading.

### Local data is not encrypted on disk

Insomnia currently stores application project data locally on disk in raw form. E2EE only applies to project data that is transmitted over the network. It is still possible for malicious software to access the project data stored on your machine. Please take the usual precautions to keep your local project data safe.

## Useful Definitions

Here are definitions for the common things that will be talked about.

### Data Models

The following are data models we use.

{:.table .table-striped}
Data Model | Definition
---------- | ---------
`M_Account` | A user that can log in
`M_Resource` | An entity that can be synced (eg. Request, Workspace, etc.)
`M_ResourceGroup` | A group of M_Resource that can be shared as one
`M_Link` | A relationship linking a M_Account to M_ResourceGroup

### Keys and Salts

The following are keys and salts we use.

{:.table .table-striped}
Name | Description | Stored?
----- | ------ | -----
`PUB_Account` | Public key for M_Account | Yes
`PRV_Account` | Private key for M_Account | Yes 🔒
`SYM_Account` | Symmetric key for M_Account | Yes 🔒
`SYM_ResourceGroup` | Symmetric Key for data encryption  | No
`SYM_Link` | Encrypted form of SYM_ResourceGroup | Yes 🔒
`SLT_Auth_1` | Salt for PBKDF2 of passphrase for auth | Yes
`SLT_Auth_2` | Salt for SRP authentication process | Yes
`SLT_Enc` | Salt for PBKDF2 of passphrase for encryption | Yes
`SEC_PWD_Auth` | Secret derived from passphrase using SLT_Auth_1 | No
`SEC_PWD_Enc` | Secret derived from passphrase using SLT_Enc | No
`SRP_Verifier` | Verification string used for SRP | Yes

{:.alert .alert-primary}
**Note**: `SYM_Link` and `SYM_ResourceGroup` are essentially the same thing, but are defined separately for the purpose of discussion. This will become clear later on.

## Security Standards

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

* We regularly update the Insomnia desktop application.
* Security, and hotfix patches are handled on a case-by-case basis and can occur at any time.

**Do you retain server logs, or event logs?**

* All server logs stored are kept within GCP and only accessed by engineers authorized to manage the Insomnia servers.

**Do you maintain documentation when an incident/event occurs?**

* When an incident occurs, we perform an internal post-mortem and disseminate information accordingly, either through the site in the form of a blog post, or through social media/support on a case-by-case basis.

**In case of a breach, do you notify customers?**

* Yes, via email.

**What is your primary point of contact?**

* [Open Source](https://github.com/kong/insomnia)
* [Support channels](https://insomnia.rest/support)

## FAQ

### Signup and Authentication

Since the passphrase you choose at registration time is used during the encryption process (although indirectly), it's vital that it's never sent or stored on the server in an easily crackable form. To help with this goal, Insomnia uses the [Secure Remote Passwords (SRP)](http://srp.stanford.edu/) encrypted key exchange protocol.

You can read more about the exact SRP implementation that Insomnia paid plans use in [RFC-2945](https://datatracker.ietf.org/doc/html/rfc2945).

For a detailed description of SRP, see [Mozilla's Node SRP](https://github.com/mozilla/node-srp).

#### How Account Creation Works

These are the steps taken on the client during account creation.

1. Randomly generate 256 bit keys and salts `SYM_Account`, `SLT_Auth_1`, `SLT_Auth_2`, `SLT_Encryption`
2. Generate `PUB_Account`/`PRV_Account` keypair for RSA-OAEP SHA-256
3. Generate `SEC_PWD_Auth` using the following steps
    1. Combine `SLT_Auth1` with email address using HKDF SHA-256 to form a new salt `SLT_TMP_1`
    2. Run 100,000 iterations of PBKDF2 SHA-256 with SLT_TMP_1
4. Generate SEC_PWD_Enc using the following steps
    1. Combine SLT_Enc with email address using HKDF SHA-256 to form a new salt `SLT_TMP_2`
    2. Run 100,000 iterations of PBKDF2 SHA-256 with `SLT_TMP_2`
5. Generate SRP_Verifier using `SLT_Auth_2`, email address, `SEC_PWD_Auth`
6. Encrypt SYM_Account using `SEC_PWD`
7. Encrypt PRV_Account using `SYM_Account`
8. Send `M_Account` object to server for creation

Once the account is created, the server will send a verification email to the user. Once the user receives this email, they can attempt to log in.

#### How Account Login Works

These are the steps taken on the client during login.

1. Derive `SEC_PWD_Auth` using same steps as in Account Creation
2. Use `SLT_Auth_2` to perform SRP exchange
3. Store SRP-generated `K` locally to use as session key

Now that we know how signup and authentication are performed, we can talk about data encryption.

### User Analytics Collected

If you are logged into your Insomnia account or if you have not opted out of analytics in the desktop application, we collect information about your usage. If you use the Insomnia desktop application without an account, we provide you with the choice to opt out to avoid sending us this information in the desktop application user interface.

We collect usage analytics to evaluate user behavior for the purpose of guiding product decisions.

If you use the application without an Insomnia account, you can edit your preference on sharing analytics data with Insomnia via the Insomnia app Preference Page by scrolling down to the **Network Activity** section and checking or unchecking the box next to **Send Usage Statistics**.

If you are logged into your Insomnia account, or if you are using the Insomnia application without an account and have not opted out of collection, this is the format of the JSON data body for a sent event:

```json
{
  "anonymousId": "device-Specific-UUID-here",
  "context": {
 "app": {
   "name": "Insomnia",
   "version": "8.2.0"
 },
 "library": {
   "name": "@segment/analytics-node",
   "version": "1.0.0"
 },
 "os": {
   "name": "mac",
   "version": "14.0.0"
 }
  },
  "event": "Request Executed",
  "integrations": {},
  "messageId": "node-next-message-specific-id-here",
  "originalTimestamp": "2023-10-10T09:57:53.346Z",
  "properties": {
 "mimeType": "application/json",
 "preferredHttpVersion": "default"
  },
  "receivedAt": "2023-10-10T09:58:05.056Z",
  "sentAt": null,
  "timestamp": "2023-10-10T09:57:53.346Z",
  "type": "track",
  "writeKey": "REDACTED"
}
```

Please also see our [Privacy Policy](https://insomnia.rest/privacy) for information about personal data we process in connection with Insomnia products and services.

### Data Encryption

HTTP requests often contain sensitive information like API keys, usernames, and passwords. This is why Insomnia treats security with such a high priority, implementing many of the same techniques used by industry-leading password managers like [1Password](https://1password.com/), [LastPass](https://www.lastpass.com/), [DashLane](https://www.dashlane.com/), and others.

As detailed above, the user's password is used to derive a secret key, which is then used to encrypt the account private key. Once decrypted, the private key can then be used to decrypt the keys for the Resource Group.

Now you may be asking why all these keys are necessary. Why not just encrypt and decrypt data using the user's password directly? There are few key scenarios that make having this many keys necessary.

### Forgot Passphrase

Due to the usage of [SRP](https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol) to handle logging into the Insomnia App, the Insomnia Cloud never stores a user's passphrase in any form.  In addition, the derivation of encryption keys based on the user's password means that all user data is encrypted in a manner that requires the user's password to decrypt.

When Insomnia Passwords are forgotten, this means that synced Insomnia Request data cannot be decrypted.  Please create passwords with care.

### Sharing a Resource Group

The ability to share Resource Groups is the reason that every Resource Group needs its own key, and every account needs a public/private key-pair to securely share said key. Here's an example involving two users, Jane and Bob.

For Jane to share a Resource Group with Bob, she must encrypt the Resource Group's key with Bob's public key and store it on the server (`M_Link`). Now, Bob can use his account's private key to decrypt the Resource Group's key and gain access to the data. This is a classic example of the [Diffie-Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) being put to good use.
