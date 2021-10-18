---
layout: article-detail
title:  Kong Declarative Config (for decK)
category: "Work with Other Kong Products"
category-url: kong-products
---

{:.alert .alert-primary}
**Note**: This feature is currently only available on Design Documents.

Insomnia creates a preformatted [decK](https://docs.konghq.com/deck) file when you add endpoints to a Document. You can do this through the UI, as explained below. Or by using the Inso CLI command [inso generate config](/inso-cli/cli-command-reference/inso-generate-config).

You can also upload a Declarative Config file directly to your Kong instance. Learn how from the Kong Docs [Loading the Declarative Configuration File](https://docs.konghq.com/gateway-oss/2.5.x/db-less-and-declarative-config/#loading-the-declarative-configuration-file).

Once you have added your endpoints, click on the arrow next to your Document name. In the dropdown menu, click **Declarative Config**.

![Next to the Document name, click the arrow to access the dropdown menu and click Declarative Config](/assets/images/declarative-config.png)

Also see: [OpenAPI 2 Kong Declarative Config](https://github.com/Kong/insomnia/tree/develop/packages/openapi-2-kong#kong-declarative-config).
