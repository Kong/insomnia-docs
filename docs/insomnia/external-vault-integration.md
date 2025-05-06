---
layout: article-detail
title:  External Vault Integration (Enterprise feature)
category: Secret Management
category-url: secret management
---

For users already using external vault services, Insomnia now supports integration with the following vault service providers:

- [AWS Secrets Manager](#aws-secrets-manager)
- [GCP Secret Manager](#gcp-secret-manager)
- [HashiCorp Vault](#hashicorp-vault)
- [Azure Key Vault](#azure-key-vault)
  
By integration with external vaults, Insomnia will retrieve the secret values from the external vault automatically when sending requests.

### AWS Secrets Manager

[AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) is a service that securely stores, manages, and retrieves sensitive data.

Once integrated with AWS Secrets Manager in Insomnia, you can link environment variables to secrets stored in AWS Secrets Manager and automatically retrieve them when sending requests.

1. Navigate to the **Preferences page** and select the **Cloud Credentials** tab. Click **Add Credentials**, choose **AWS**, and enter your temporary security credentials.
    ![Input AWS](/assets/images/input-aws.png)
2. Open the **AWS Secrets Manager** from the context menu.
    ![Context](/assets/images/external-vault-context-menu.png)
3. Fill the information needed for retrieving the secrets, like `secret name`, `secret version` and `secret type`

### GCP Secret Manager

[GCP Secret Manager](https://cloud.google.com/security/products/secret-manager) is a service that securely stores, manages, and retrieves sensitive data.

Once integrated with GCP Secret Manager in Insomnia, you can link environment variables to secrets stored in GCP Secret Manager and automatically retrieve them when sending requests.

1. Navigate to the **Preferences page** and select the **Cloud Credentials** tab. Click **Add Credentials**, choose **GCP**, and select your local [service account key](https://cloud.google.com/iam/docs/keys-create-delete) file to authenticate with GCP.
    ![Input GCP](/assets/images/input-gcp.png)
2. Open the **GCP Secrets Manager** from the context menu.
    ![Context](/assets/images/external-vault-context-menu.png)
3. Fill the information needed for retrieving the secrets, like `secret name` and `secret version`.

### HashiCorp Vault

[HashiCorp Vault](https://www.vaultproject.io/) is a service that securely stores, manages, and retrieves sensitive data.

Once integrated with HashiCorp Vault in Insomnia, you can link environment variables to secrets stored in HashiCorp Vault and automatically retrieve them when sending requests.

1. Navigate to the **Preferences page** and select the **Cloud Credentials** tab. Click **Add Credentials**, choose **HashiCorp**, and enter your credentials.
2. For HashiCorp vault server environment choose On-Premises. You can input either [AppRole](https://developer.HashiCorp.com/vault/docs/auth/approle) or [Token](https://developer.HashiCorp.com/vault/docs/auth/token) for authentication.
    ![HashiCorp Config](/assets/images/hashi-config-onPremises.png)
  
3. For HashiCorp cloud vault environment choose Cloud. You should input the [service principal](https://developer.HashiCorp.com/hcp/docs/hcp/iam/service-principal#create-a-service-principal) Client Id and Client Secret.
    ![HashiCorp Config Cloud](/assets/images/hashi-config-cloud.png)
4. Open the **HashiCorp Vault** from the context menu.
    ![Context](/assets/images/external-vault-context-menu.png)
5. When filling the information needed, we will show different config form based on the HashiCorp environment.

   For cloud environment, filling the information needed: `input Organization Id`, `Project Id`, `App Name`, `Version and Secret Name`.

   For vault server environment, Insomnia supports retrieving secrets from [KV secret engine](https://developer.HashiCorp.com/vault/docs/secrets/kv) for version v1 & v2, so users must choose the `secret engine version` then filling the information.

### Azure Key Vault

[Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault) is a service that securely stores, manages, and retrieves sensitive data.

Once integrated with Azure Key Vault in Insomnia, you can link environment variables to secrets stored in Azure Key Vault and automatically retrieve them when sending requests.

1. Navigate to the **Preferences page** and select the **Cloud Credentials** tab. Click **Add Credentials**, choose **Azure**.
2. You will be redirected to your browser to authorize Insomnia to access your Azure account. After authorization, you will be redirected back to Insomnia, where a new credential will be added. The credential’s name will be your Azure account username.
3. Open the **Azure Key Vault** from the context menu.
    ![Context](/assets/images/external-vault-context-menu.png)
4. Fill the information needed for retrieving the secrets, like `Secret Identifier`.

### External Vault Secrets Cache Mechanism

By default, all secrets retrieved from cloud vault services are stored in memory for 30 minutes. Insomnia will automatically fetch the secret again if the cache expires or does not exist. Users can configure the cache duration and manually reset the cache in the **Cloud Credentials tab** within the **Preferences page**.

### External Vault Integration In Inso CLI

[Inso CLI](/inso-cli/introduction) allows you to use Insomnia application functionality in your terminal and CI/CD environments for automation.

If you want to run [collection command](/inso-cli/cli-command-reference/inso-run-collection) with external vault integration in CI/CD pipelines, you need to expose extra environment variables for authentication purpose.

Here's the list of environment variables needed for different cloud service providers:

#### AWS

- Temporary security credentials

```sh
INSOMNIA_AWS_TYPE = 'temporary'
INSOMNIA_AWS_ACCESSKEYID = <Access Key ID >
INSOMNIA_AWS_SECRETACCESSKEY = <Secret Access Key>
INSOMNIA_AWS_SESSIONTOKEN = <Session Token>
INSOMNIA_AWS_REGION = <AWS Resource Region>
```

- Credential File
  
```sh
INSOMNIA_AWS_TYPE = 'file'
INSOMNIA_AWS_SECTION = <Section Name In AWS Credential File>
INSOMNIA_AWS_FILEPATH = <AWS Credential File Path> (Optional)
INSOMNIA_AWS_ENABLECACHE = <Option To Enable File Cache> (Optional)
INSOMNIA_AWS_REGION = <AWS Resource Region>
```

- SSO Credential

```sh
INSOMNIA_AWS_TYPE = 'sso'
INSOMNIA_AWS_SECTION = <Profile Name In AWS Config File>
INSOMNIA_AWS_CONFIGFILEPATH = <AWS Config File Path> (Optional)
INSOMNIA_AWS_FILEPATH = <AWS Credential File Path> (Optional)
INSOMNIA_AWS_ENABLECACHE = <Option To Enable File Cache> (Optional)
INSOMNIA_AWS_REGION = <AWS Resource Region>
```

#### GCP

```sh
INSOMNIA_GCP_SERVICEACCOUNTKEYFILEPATH = <GCP Service Account Key File Path>
```

### HashiCorp

- Hashicorp Cloud Platform

```sh
INSOMNIA_HASHICORP_TYPE = 'cloud'
INSOMNIA_HASHICORP_CLIENT_ID = <HCP Service Principal Client Id>
INSOMNIA_HASHICORP_CLIENT_SECRET = <HCP Service Principal Client Secret>
```

- HashiCorp Vault Server
  - App Role

    ```sh
    INSOMNIA_HASHICORP_TYPE = 'onPrem'
    INSOMNIA_HASHICORP_AUTHMETHOD = 'appRole'
    INSOMNIA_HASHICORP_SERVERADDRESS = <Hashicorp Vault Server Address>
    INSOMNIA_HASHICORP_ROLE_ID = <Hashicorp Vault Server App Role ID>
    INSOMNIA_HASHICORP_SECRET_ID = <Hashicorp Vault Server App Role Secret ID>
    ```

  - Token
  
    ```sh
    INSOMNIA_HASHICORP_TYPE = 'onPrem'
    INSOMNIA_HASHICORP_AUTHMETHOD = 'token'
    INSOMNIA_HASHICORP_SERVERADDRESS = <Hashicorp Vault Server Address>
    INSOMNIA_HASHICORP_ACCESS_TOKEN = <Hashicorp Vault Server Access Token>
    ```
