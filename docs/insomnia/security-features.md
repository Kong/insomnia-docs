---
layout: article-detail
title:  Key Security Features
category: Security
category-url: security
---

When signing up for Insomnia Sync, you gain access to end-to-end encrypted data sync. Simply sign into your account and your data will be there, seamlessly synced across all of your (and optionally your teams’) devices.

Insomnia believes that it is your right to know how your sensitive data is transported and handled, so this document is an effort to explain exactly how it works.

If you find that any part of this document is incorrect, missing, or wrong, please don’t hesitate to reach out.

## Key Security Features

This section gives a high level overview of Insomnia paid plans security. If you read anything in this document, it should be this section.

### What End-To-End encryption means

E2EE means that all encryption keys are generated locally, all encryption is performed before sending any data over the network, and all decryption is performed after receiving data from the network. At no point in the sync process can the Insomnia servers, or an intruder read or access sensitive application data.

### Not even Insomnia can access your data

Insomnia never sends unencrypted data or keys that can be used to decrypt data to the server. This means that neither Insomnia, network spies, or server hackers can gain access to your sensitive data. You can rest assured that your data is safe on your machine.

### Encryption algorithms we use

All data is encrypted using randomly generated 256 bit symmetric keys for use with AES-GCM-256 (Galois Counter Mode).

### Passwords cannot be reset

Losing your password means losing the ability to decrypt your account keys. If you lose your password there is no way to access your data, and there is nothing Insomnia can do to help apart from resetting your account. You can change your password but you need a copy of your old one to do so.

### Unencrypted Fields

By default, resources within the application are fully encrypted before being sent to the server. However, both id and name of each resource are attached in plaintext before uploading.

### Local data is not encrypted on disk

Insomnia currently stores application data on disk in raw form. E2EE only applies to data that is transmitted over the network. It is still possible for malicious software to access the application data stored on your machine. Please take the usual precautions to keep your local data safe.

## Useful Definitions

Here are definitions for the common things that will be talked about.


### Data Models

The following are data models we use.

{:.table .table-striped}
Data Model | Definition
---------- | ---------
`M_Account`	| A user that can log in
`M_Resource` |	An entity that can be synced (eg. Request, Workspace, etc.)
`M_ResourceGroup`	| A group of M_Resource that can be shared as one
`M_Link` | A relationship linking a M_Account to M_ResourceGroup


### Keys and Salts

The following are keys and salts we use.

{:.table .table-striped}
Name |	Description	| Stored?
----- | ------ | -----
`PUB_Account` |	Public key for M_Account |	Yes
`PRV_Account`	| Private key for M_Account	| Yes 🔒
`SYM_Account`	| Symmetric key for M_Account |	Yes 🔒
`SYM_ResourceGroup`	| Symmetric Key for data encryption	 | No
`SYM_Link` | Encrypted form of SYM_ResourceGroup |	Yes 🔒
`SLT_Auth_1` |	Salt for PBKDF2 of password for auth |	Yes
`SLT_Auth_2` |	Salt for SRP authentication process |	Yes
`SLT_Enc`	| Salt for PBKDF2 of password for encryption |	Yes
`SEC_PWD_Auth` |	Secret derived from password using SLT_Auth_1 | No
`SEC_PWD_Enc`	| Secret derived from password using SLT_Enc |	No
`SRP_Verifier` | Verification string used for SRP	| Yes

{:.alert .alert-primary}
**Note**: `SYM_Link` and `SYM_ResourceGroup` are essentially the same thing, but are defined separately for the purpose of discussion. This will become clear later on.
