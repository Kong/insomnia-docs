---
layout: article-detail
title:  Kong for Kubernetes
category: "Work with Other Kong Products"
category-url: kong-products
---

{:.alert .alert-primary}
**Note**: This feature is currently only available on Design Documents with OpenAPI 3.0.X and 3.1 specifications.

Insomnia can take a Document and output a Kubernetes manifest. You can do this either through the UI, as explained below. Or by using the Inso CLI command [inso generate config](/inso-cli/cli-command-reference/inso-generate-config).

Once you have added your OpenAPI spec, click on the arrow next to your Document name. In the dropdown menu, click **Kong for Kubernetes**.

![Next to the Document name, click the arrow to access the dropdown menu and click Kong for Kubernetes](/assets/images/kong-for-kubernetes.png)

We use [OpenAPI 2 Kong Declarative Config](https://github.com/Kong/insomnia/tree/develop/packages/openapi-2-kong#kong-declarative-config) to generate the Kong for Kubernetes file.
