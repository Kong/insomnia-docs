---
layout: article-detail
title:  Import and Export Data
category: "Get Started"
category-url: get-started
---

Insomnia supports importing and exporting. Currently, the supported import formats are Insomnia, Postman v2, HAR, OpenAPI, Swagger, WSDL, and cURL.

To import or export data, go to **Preferences**, then the **Data** tab. 

![The Data tab in Preferences allows you to import or export data via dropdown options.](/assets/images/import-export-data.png)
_The Data tab in Preferences allows you to import or export data via dropdown options._

## Export Special Resources and Resource Types

The following outlines special resource IDs, used to map to data, and resource types, used to outline what's included and excluded from an export file. 

{:.alert .alert-primary}
**Note**: The [Insomnia Importers Package](https://github.com/kong/insomnia/tree/develop/packages/insomnia-importers) has support for migrating older export versions to the latest, as well as supporting external formats like HAR, Postman, Swagger/OpenAPI, and Curl. If you want to contribute new formats, feel free to submit a pull request to the [insomnia-importers](https://www.npmjs.com/package/insomnia-importers) NPM package.

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
