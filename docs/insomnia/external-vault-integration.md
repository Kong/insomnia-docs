---
layout: article-detail
title:  External Vault Integration (Enterprise feature)
category: Secret Management
category-url: secret management
---

For users already using external vault services, Insomnia now supports integration with the following vault service providers:

* [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)
* [GCP Secret Manager](https://cloud.google.com/security/products/secret-manager?hl=en)
* [HashiCorp Vault](https://www.vaultproject.io/)

By integration with external vaults, Insomnia will retrieve the secret values from the external vault automatically when sending requests.

### Configure AWS

1. Navigate to the **Preferences page** and select the **Cloud Credentials** tab. Click **Add Credentials**, choose AWS, and enter your temporary security credentials.
    ![Input AWS](/assets/images/input-aws.png)
2. Open the **AWS Secrets Manager** from the context menu.
    ![Context](/assets/images/external-vault-context-menu.png)
3. Fill the information needed for retrieving the secrets, like `secret name`, `secret version` and `secret type`

### Configure GCP

1. Navigate to the **Preferences page** and select the **Cloud Credentials** tab. Click **Add Credentials**, choose GCP, and select your local [service account key](https://cloud.google.com/iam/docs/keys-create-delete) file to authenticate with GCP.
    ![Input GCP](/assets/images/input-gcp.png)
2. Open the **GCP Secrets Manager** from the context menu.
    ![Context](/assets/images/external-vault-context-menu.png)
3. Fill the information needed for retrieving the secrets, like `secret name` and `secret version`.

### Configure HashiCorp Vault

1. Navigate to the **Preferences page** and select the **Cloud Credentials** tab. Click **Add Credentials**, choose HashiCorp, and enter your credentials.
2. For HashiCorp vault server environment choose On-Premises. You can input either [AppRole](https://developer.HashiCorp.com/vault/docs/auth/approle) or [Token](https://developer.HashiCorp.com/vault/docs/auth/token) for authentication.
    ![HashiCorp Config](/assets/images/hashi-config-onPremises.png)
  
3. For HashiCorp cloud vault environment choose Cloud. You should input the [service principal](https://developer.HashiCorp.com/hcp/docs/hcp/iam/service-principal#create-a-service-principal) Client Id and Client Secret.
    ![HashiCorp Config Cloud](/assets/images/hashi-config-cloud.png)
4. Open the **HashiCorp Vault** from the context menu.
    ![Context](/assets/images/external-vault-context-menu.png)
5. When filling the information needed, we will show different config form based on the HashiCorp environment.

   For cloud environment, filling the information needed: `input Organization Id`, `Project Id`, `App Name`, `Version and Secret Name`.

   For vault server environment, Insomnia supports retrieving secrets from [KV secret engine](https://developer.HashiCorp.com/vault/docs/secrets/kv) for version v1 & v2, so users must choose the `secret engine version` then filling the information.

### External Vault Secrets Cache Mechanism

By default, all secrets retrieved from cloud vault services are stored in memory for 30 minutes. Insomnia will automatically fetch the secret again if the cache expires or does not exist. Users can configure the cache duration and manually reset the cache in the **Cloud Credentials tab** within the **Preferences page**.
