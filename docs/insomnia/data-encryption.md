---
layout: article-detail
title:  Data Encryption
category: Security
category-url: security
---

HTTP requests often contain sensitive information like API keys, usernames, and passwords. This is why Insomnia treats security with such a high priority, implementing many of the same techniques used by industry-leading password managers like 1Password, LastPass, DashLane, and others.

As detailed above, the user’s password is used to derive a secret key, which is then used to encrypt the account private key. Once decrypted, the private key can then be used to decrypt the keys for the Resource Group.

Now you may be asking why all these keys are necessary. Why not just encrypt and decrypt data using the user’s password directly? There are few key scenarios that make having this many keys necessary.

### Scenario 1 – Changing Passwords

The ability for a user to change passwords is one reason that data is not directly encrypted using a password. If the user has large amounts of encrypted data, changing the password would mean decrypting and re-encrypting all data with the new password. This would quickly become too slow with even medium sized amounts of data.

### Scenario 2 – Sharing a Resource Group

The ability to share Resource Groups is the reason that every Resource Group needs its own key, and every account needs a public/private keypair to securely share said key. Here’s an example involving two users, Jane and Bob.

For Jane to share a Resource Group with Bob, she must encrypt the Resource Group’s key with Bob’s public key and store it on the server ( M_Link). Now, Bob can use his account’s private key to decrypt the Resource Group’s key and gain access to the data. This is a classic example of the Diffie–Hellman key exchange being put to good use.

Conclusions and Wrap Up
Now you should have a basic understanding of how Insomnia paid plans use industry-leading best practices to keep your data safe, and allow you to focus on what matters most.
