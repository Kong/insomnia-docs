---
layout: article-detail
title:  Import and Export Data
category: "Get Started"
category-url: get-started
---

Insomnia supports importing and exporting. Currently, the supported import formats are Insomnia, Postman v2, HAR, OpenAPI (versions 3.0, 3.1), Swagger, WSDL, and cURL.

## Export Data

Export a Document, Collection, or a single request.

From the Document or Collection name dropdown menu, select **Import/Export**. Select an option from the **Export Data** dropdown menu.

Alternatively, in **Preferences** and under the **Data** tab, select an option from the **Export Data** dropdown menu. If you're inside a Document or Collection, you'll have the option to export that specific Document or Collection.

If you've selected to export a Document or Collection, choose to export the whole set or individual requests.

## Import Data

Import data from a file, URL, or Clipboard.

From the Document or Collection name dropdown menu, select **Import/Export**. Select an option from the **Import Data** dropdown menu.

Alternatively, in **Preferences** and under the **Data** tab, select an option from the **Import Data** dropdown menu.

Also, you can paste copied cURL command straight to URL bar.

## Export Special Resources and Resource Types

The following outlines special resource IDs, used to map to data, and resource types, used to outline what's included and excluded from an export file.

{:.alert .alert-primary}
**Note**: The [Insomnia Importers Package](https://github.com/Kong/insomnia/tree/develop/packages/insomnia/src/utils/importers) has support for migrating older export versions to the latest, as well as supporting external formats like HAR, Postman, Swagger/OpenAPI, and Curl. If you want to contribute new formats, feel free to submit a pull request to the [insomnia-importers](https://github.com/Kong/insomnia/tree/develop/packages/insomnia/src/utils/importers) on GitHub.

### Special Resource IDs

Special resource IDs are used to map to data in an active workspace. They look like variables within the export file. Some example special resource IDs are:

{:.table .table-striped}
Resource ID | Description
----------- | -----------
`__WORKSPACE_ID__` | Maps to the ID of the currently active workspace
`__BASE_ENVIRONMENT_ID__` | Maps to the ID of the active workspace base environment
`__<NAME>_<NUMBER>__` |  Any value matching this format will deterministically generate a new ID at import time

## Resource Types

We offer a variety of resource types. Resource types outline what is included and excluded from an export file. Some responses and metadata models aren't exported.

See all resource types listed under [data.resources](https://github.com/Kong/insomnia/blob/7abde2a01700f587179941b3231fb1078fcb1e41/packages/insomnia-app/app/common/export.ts#L185-L198).
