---
layout: article-detail
title:  Key Security Data Features
category: Security
category-url: security
---

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
