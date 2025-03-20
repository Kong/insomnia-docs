---
layout: article-detail
title:  Secrets Management
category: Security
category-url: security
---


Insomnia offers built-in Secrets Management so users can store and use secret variables locally. 

## Secret Environment Variables

Secret environment variable is a newly added environment variable type which allows users to store their secret variables locally.

By default, Insomnia does not save the vault key, so users must store it securely, as it will be required after re-login or when accessing Insomnia on another device.
If the vault key is forgotten, users can reset it, but this will permanently delete all secret variables for security reasons.
Unlike normal environment variables, secret environment variables are stored as encrypted text rather than plain text, their values remain masked unless used in a request, and they are automatically added to a vault namespace when referenced.
For example, a secret variable named foo would be accessed as {{ vault.foo }}.

## Store Secrets

1. Generate a vault key in the Preferences page

    ![Generate a Vault Key](/assets/images/generate-vault.png)

1. Create a new **sub private environment** within any **global environment**.

    ![create a sub private environment](/assets/images/add-private-environment.png)

1. Add your environment variable to the newly created sub private environment, choose the environment type to `Secret`.

    ![add a secret](/assets/images/choose-secret.png)


## External Vault Integration (Enterprise feature)

For users already using external vault services, Insomnia now supports integration with the following vault service providers:

* [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)
* [GCP Secret Manager](https://cloud.google.com/security/products/secret-manager?hl=en)
* [Hashicorp Vault](https://www.vaultproject.io/)

By integration with external vaults, Insomnia will retrieve the secret values from the external vault automatically when sending requests.

### Configure AWS

1. Navigate to the **Preferences page** and select the **Cloud Credentials** tab. Click **Add Credentials**, choose AWS, and enter your temporary security credentials.
    ![Input AWS](/assets/images/input-aws.png)
1. Open the AWS Secrets Manager from the context menu. 
    ![AWS Context](/assets/images/aws-context.png)
1. Fill the information needed for retrieving the secrets, like secret name, secret version and secret type

### Configure GCP

1. Navigate to the **Preferences page** and select the **Cloud Credentials** tab. Click **Add Credentials**, choose GCP, and enter your temporary security credentials and authenticate with GCP.
    ![Input GCP](/assets/images/input-aws.png)
1. Open the GCP Secrets Manager from the context menu. 
    ![GCP Context](/assets/images/aws-context.png)
1. Fill the information needed for retrieving the secrets, like secret name, secret version and secret type

### Configure Hashicorp Vault

1. Navigate to the **Preferences page** and select the **Cloud Credentials** tab. Click **Add Credentials**, choose Hashicorp, and enter your credentials.
    ![Input Hashicorp](/assets/images/input-aws.png)
1. For Hashicorp vault server environment choose On-Premises. You can input either [AppRole](https://developer.hashicorp.com/vault/docs/auth/approle) or [Token](https://developer.hashicorp.com/vault/docs/auth/token) for authentication.
    ![Hashicorp Config](/assets/images/hashi-config.png)
1. Fill the information needed:  `input Organization Id`,` Project Id`, `App Name`, `Version` and `Secret Name`.

By default, all secrets retrieved from cloud vault services are stored in memory for 30 minutes. Insomnia will automatically fetch the secret again if the cache expires or does not exist. Users can configure the cache duration and manually reset the cache in the **Cloud Credentials tab** within the **Preferences page**.