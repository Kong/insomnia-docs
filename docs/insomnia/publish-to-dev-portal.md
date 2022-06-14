---
layout: article-detail
title:  Publish API to Dev Portal
category: "Work with Other Kong Products"
category-url: kong-products
---

Insomnia offers the ability to publish a Document to [Kong Dev Portal](https://docs.konghq.com/enterprise/latest/developer-portal/).

{:.alert .alert-primary}
**Note**: **Publish to Dev Portal** is currently not configured to use with the Konnect (cloud) Dev Portal. You can only publish Documents to an on-prem Dev Portal.

From the Dashboard, click the three dot menu on a Document. Select **Deploy to Dev Portal** and a modal will open. Enter the following information.

* **Kong API URL**: Your API URL is based on your Gateway install. If you have a default local testing setup, this value will be `http://localhost:8001`.
* **Kong Workspace Name**: Your Workspace name. The default Workspace in Dev Portal is called `default`. View your Workspaces from within the on-prem admin portal.
* **Kong RBAC Token** (optional): If you have RBAC enabled on your Dev Portal, enter your token to indicate your access level.

![Publish Dev Portal Menu](/assets/images/publish-devportal-menu.png)

Once you enter this information, the application will attempt to connect to your Kong on-prem Dev Portal. If successful, you will be prompted to name your file. Include the file extension (ex. `.yaml`).
