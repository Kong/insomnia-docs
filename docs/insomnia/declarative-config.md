---
layout: article-detail
title:  Kong Declarative Config (for decK)
category: "Work with Other Kong Products"
category-url: kong-products
---

{:.alert .alert-primary}
**Note**: This feature is currently only available on Design Documents with OpenAPI 3.0.X and 3.1 specifications.

Insomnia creates a preformatted [decK](https://docs.konghq.com/deck) file when you add endpoints to a Document. You can do this through the UI, as explained below. Or by using the Inso CLI command [inso generate config](/inso-cli/cli-command-reference/inso-generate-config).

You can also upload a Declarative Config file directly to your [Kong Gateway instance](https://docs.konghq.com/gateway-oss). Learn how from the Kong Docs [Loading the Declarative Configuration File](https://docs.konghq.com/gateway-oss/2.5.x/db-less-and-declarative-config/#loading-the-declarative-configuration-file).

## Get a Declarative Config File Through Insomnia

1. Open a Document.
2. Add an OpenAPI 3.0 Specification. If you have another Swagger version, use a tool like [editor.swagger.io](https://editor.swagger.io/) to convert to OpenAPI 3.0.
3. Click on the arrow next to the Document name.
4. In the dropdown menu, click **Declarative Config**.

![Next to the Document name, click the arrow to access the dropdown menu and click Declarative Config](/assets/images/declarative-config.png)

## Authentication in Declarative Config

The generated Declarative Configuration file contains authentication plugin information. `openid-connect`, as seen in the example screenshot below, is only compatible with Kong Gateway Enterprise. Ensure you define authentication that's compatible with your Kong Gateway instance.

See [Security Plugins](https://github.com/Kong/insomnia/tree/develop/packages/openapi-2-kong#security-plugins) in the [OpenAPI 2 Kong Declarative Config](https://github.com/Kong/insomnia/tree/develop/packages/openapi-2-kong#kong-declarative-config) for a list of authentication types and their corresponding plugins.

![In the generated file, you will see authentication plugins defined.](/assets/images/dec-config-auth.png)

We use [OpenAPI 2 Kong Declarative Config](https://github.com/Kong/insomnia/tree/develop/packages/openapi-2-kong#kong-declarative-config) to generate the Declarative Config file.
