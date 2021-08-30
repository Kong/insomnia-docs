---
layout: article-detail
title: Signup and Authentication
category: Security
category-url: security
---

Since the password you choose at registration time is used during the encryption process (although indirectly), it's vital that it's never sent or stored on the server in an easily crackable form. To help with this goal, Insomnia uses the [Secure Remote Passwords (SRP)](http://srp.stanford.edu/) encrypted key exchange protocol.

You can read more about the exact SRP implementation that Insomnia paid plans use in [RFC-2945](https://datatracker.ietf.org/doc/html/rfc2945).

For a detailed description of SRP, see [Mozilla's Node SRP](https://github.com/mozilla/node-srp).

### How Account Creation Works

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

### How Account Login Works

These are the steps taken on the client during login.

1. Derive `SEC_PWD_Auth` using same steps as in Account Creation
2. Use `SLT_Auth_2` to perform SRP exchange
3. Store SRP-generated `K` locally to use as session key

Now that we know how signup and authentication are performed, we can talk about data encryption.