---
layout: article-detail
title:  Secret Environment Variables
category: Secret Management
category-url: secret management
---

Secret environment variable is an environment variable type which allows users to store their secret variables locally.

By default, Insomnia does not save the vault key, so users must store it securely, as it will be required after re-login or when accessing Insomnia on another device.
If the vault key is forgotten, users can reset it, but this will permanently delete all secret variables for security reasons.

Unlike normal environment variables, secret environment variables are stored as encrypted text rather than plain text, their values remain masked unless used in a request, and they are automatically added to a vault namespace when referenced.

For example, a secret variable named ```foo``` can be accessed as ```vault.foo```.

## Store Secrets

1. Generate a vault key in the Preferences page

    ![Generate a Vault Key](/assets/images/generate-vault.png)

2. Create a new **sub private environment** within any **global environment**.

    ![create a sub private environment](/assets/images/add-private-environment.png)

3. Add your environment variable to the newly created sub private environment, choose the environment type to `Secret`.

    ![add a secret](/assets/images/choose-secret.png)