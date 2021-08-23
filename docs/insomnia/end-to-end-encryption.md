---
layout: article-detail
title:  End-to-End Encryption
category: Security
category-url: security
---

When signing up for Insomnia Sync, you gain access to end-to-end encrypted data sync. Simply sign into your account and your data will be there, seamlessly synced across all of your (and optionally your teams’) devices.

Insomnia believes that it is your right to know how your sensitive data is transported and handled, so this document is an effort to explain exactly how it works.

If you find any part of this document that are incorrect, missing, or wrong, please don’t hesitate to reach out.

Key Security Features
This section gives a high level overview of Insomnia paid plans security. If you read anything in this document, it should be this section.

What End-To-End encryption means
E2EE means that all encryption keys are generated locally, all encryption is performed before sending any data over the network, and all decryption is performed after receiving data from the network. At no point in the sync process can the Insomnia servers, or an intruder read or access sensitive application data.

Not even Insomnia can access your data
Insomnia never sends unencrypted data or keys that can be used to decrypt data to the server. This means that neither Insomnia, network spies, or server hackers can gain access to your sensitive data. You can rest assured that your data is safe on your machine.

Encryption algorithms used?
All data is encrypted using randomly generated 256 bit symmetric keys for use with AES-GCM-256 (Galois Counter Mode).

Passwords cannot be reset
Losing your password means losing the ability to decrypt your account keys. If you lose your password there is no way to access your data, and there is nothing Insomnia can do to help apart from resetting your account. You can change your password but you need a copy of your old one to do so.

Unencrypted Fields
By default, resources within the application are fully encrypted before being sent to the server. However, both id and name of each resource are attached in plaintext before uploading.

Local data is not encrypted on disk
Insomnia currently stores application data on disk in raw form. E2EE only applies to data that is transmitted over the network. It is still possible for malicious software to access the application data stored on your machine. Please take the usual precautions to keep your local data safe.

Useful Definitions
In order to avoid too much explanation in this document, here are definitions for the common things that will be talked about.

Let’s start by defining the data models.

Data Model	Definition
M_Account	A user that can log in
M_Resource	An entity that can be synced (eg. Request, Workspace, etc.)
M_ResourceGroup	A group of M_Resource that can be shared as one
M_Link	A relationship linking a M_Account to M_ResourceGroupThere are a lot of keys and salts used in the encryption/decryption process, so let’s define those too.
Name	Description	Stored?
PUB_Account	Public key for M_Account	Yes
PRV_Account	Private key for M_Account	Yes 🔒
SYM_Account	Symmetric key for M_Account	Yes 🔒
SYM_ResourceGroup	Symmetric Key for data encryption	No
SYM_Link	Encrypted form of SYM_ResourceGroup	Yes 🔒
SLT_Auth_1	Salt for PBKDF2 of password for auth	Yes
SLT_Auth_2	Salt for SRP authentication process	Yes
SLT_Enc	Salt for PBKDF2 of password for encryption	Yes
SEC_PWD_Auth	Secret derived from password using SLT_Auth_1	No
SEC_PWD_Enc	Secret derived from password using SLT_Enc	No
SRP_Verifier	Verification string used for SRP	Yes
NOTE: SYM_Link and SYM_ResourceGroup are essentially the same thing, but are defined separately for the purpose of discussion. This will become clear later on.

Signup and Authentication Overview
Since the password you choose at registration time is used during the encryption process (although indirectly), it is vital that it is never sent or stored on the server in an easily crackable form. To help with this goal, Insomnia uses the Secure Remote Passwords (SRP) encrypted key exchange protocol.

You can read more about the exact SRP implementation that Insomnia paid plans use in RFC-2945.

SRP is an interactive protocol which allows a server to confirm that some client knows a password, and to derive a strong shared session key, without revealing what the password is to an eavesdropper. In addition, the server does not hold the actual password: instead it stores a “verifier” created by the client. If the server’s private data is revealed (by a server compromise), the verifier cannot be used directly to impersonate the client. [1]

How It Works – Account Creation

These are the steps taken on the client during account creation.

Randomly generate 256 bit keys and salts SYM_Account, SLT_Auth_1, SLT_Auth_2, SLT_Encryption
Generate PUB_Account/PRV_Account keypair for RSA-OAEP SHA-256
Generate SEC_PWD_Auth using the following steps
Combine SLT_Auth1 with email address using HKDF SHA-256 to form a new salt SLT_TMP_1
Run 100,000 iterations of PBKDF2 SHA-256 with SLT_TMP_1
Generate SEC_PWD_Enc using the following steps
Combine SLT_Enc with email address using HKDF SHA-256 to form a new salt SLT_TMP_2
Run 100,000 iterations of PBKDF2 SHA-256 with SLT_TMP_2
Generate SRP_Verifier using SLT_Auth_2, email address, SEC_PWD_Auth
Encrypt SYM_Account using SEC_PWD
Encrypt PRV_Account using SYM_Account
Send M_Account object to server for creation
Once the account is created, the server will send a verification email to the user. Once the user receives this email, they can attempt to log in.

How It Works – Account Login

These are the steps taken on the client during login.

Derive SEC_PWD_Auth using same steps as in Account Creation
Use SLT_Auth_2 to perform SRP exchange
Store SRP-generated K locally to use as session key
Now that we know how signup and authentication are performed, we can talk about data encryption.

Data Encryption Overview
HTTP requests often contain sensitive information like API keys, usernames, and passwords. This is why Insomnia treats security with such a high priority, implementing many of the same techniques used by industry-leading password managers like 1Password, LastPass, DashLane, and others.

As detailed above, the user’s password is used to derive a secret key, which is then used to encrypt the account private key. Once decrypted, the private key can then be used to decrypt the keys for the Resource Group.

Now you may be asking why all these keys are necessary. Why not just encrypt and decrypt data using the user’s password directly? There are few key scenarios that make having this many keys necessary.

Scenario 1 – Changing Passwords

The ability for a user to change passwords is one reason that data is not directly encrypted using a password. If the user has large amounts of encrypted data, changing the password would mean decrypting and re-encrypting all data with the new password. This would quickly become too slow with even medium sized amounts of data.

Scenario 2 – Sharing a Resource Group

The ability to share Resource Groups is the reason that every Resource Group needs its own key, and every account needs a public/private keypair to securely share said key. Here’s an example involving two users, Jane and Bob.

For Jane to share a Resource Group with Bob, she must encrypt the Resource Group’s key with Bob’s public key and store it on the server ( M_Link). Now, Bob can use his account’s private key to decrypt the Resource Group’s key and gain access to the data. This is a classic example of the Diffie–Hellman key exchange being put to good use.

Conclusions and Wrap Up
Now you should have a basic understanding of how Insomnia paid plans use industry-leading best practices to keep your data safe, and allow you to focus on what matters most.

Resources, Information, and Libraries
The following is a short list of some of the materials we found useful when doing the initial research and design for the Insomnia paid plans architecture.

Whitepapers and Information
1Password For Teams Whitepaper
Dashlane Security Whitepaper

Specifications and Resources
Stanford SRP Homepage
SRP RFC-2945
Galois/Counter Mode
Information Security StackExchange

Libraries
Node Forge Encryption Toolbelt
Mozilla node-srp
Stanford Javascript Crypto Library