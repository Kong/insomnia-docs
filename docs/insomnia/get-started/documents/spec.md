---
layout: article-detail
title: Import an OpenAPI Spec
---
Insomnia supports importing and exporting. Currently, the supported import formats are: 

* Insomnia
* [Postman v2](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html)
* HTTP Archive (HAR)
* OpenAPI 3.0 and 3.1 
* Swagger
* Web Services Description Language (WDSL)
* cURL
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link side-tabs" id="nav-import-tab" data-bs-toggle="tab" data-bs-target="#nav-import" type="button" role="tab" aria-controls="nav-import" aria-selected="true">Import Data</button>
    <button class="nav-link active side-tabs" id="nav-export-tab" data-bs-toggle="tab" data-bs-target="#nav-export" type="button" role="tab" aria-controls="nav-export" aria-selected="false">Export Data</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade" id="nav-import" role="tabpanel" aria-labelledby="nav-import-tab">
    <h2>Import Data</h2>
    <p>Insomnia allows you to import data from a file, URL, or clipboard.</p>
    <h3>Steps to Import Data</h3>
    <p><b>From a Document or a Collection:</b></p>
    <ul>
      <li>Open the Document or Collection dropdown menu.</li>
      <li>Select <b>Import/Export</b>.</li>
      <li>Choose an option from the <b>Import Data</b> dropdown menu.</li>
    </ul>
    <p><b>From Preferences:</b></p>
    <ul>
      <li>Go to <b>Preferences</b>.</li>
      <li>Navigate to the <b>Data</b> tab.</li>
      <li>Select an option from the <b>Import Data</b> dropdown menu.</li>
    </ul>
    <p>Additionally, you can paste copied cURL commands directly into the URL bar.</p>
  </div>
  <div class="tab-pane fade show active" id="nav-export" role="tabpanel" aria-labelledby="nav-export-tab">
    <h2>Export Data</h2>
    <p>You can export a Document, Collection, or a single request in Insomnia.</p>
    <h3>Steps to Export Data</h3>
    <p><b>From Document or Collection:</b></p>
    <ul>
      <li>Open the Document or Collection name dropdown menu.</li>
      <li>Select <b>Import/Export</b>.</li>
      <li>Choose an option from the <b>Export Data</b> dropdown menu.</li>
    </ul>
    <p><b>From Preferences:</b></p>
    <ul>
      <li>Go to <b>Preferences</b>.</li>
      <li>Navigate to the <b>Data</b> tab.</li>
      <li>Select an option from the <b>Export Data</b> dropdown menu.</li>
    </ul>
    <p>If you have selected to export a Document or Collection, you can choose to export the entire set or individual requests within it.</p>
  </div>
</div>


## Resources and Resource Types

### Resource IDs

Resource IDs are used to map to data in an active workspace. They look like variables within the export file. Some example special resource IDs are:

{:.table .table-striped}
Resource ID | Description
----------- | -----------
`__WORKSPACE_ID__` | Maps to the ID of the currently active workspace
`__BASE_ENVIRONMENT_ID__` | Maps to the ID of the active workspace base environment
`__<NAME>_<NUMBER>__` |  Any value matching this format will deterministically generate a new ID at import time

### Resource Types

We offer a variety of resource types. Resource types outline what is included and excluded from an export file. Some responses and metadata models aren't exported.

See all resource types listed under [data.resources](https://github.com/Kong/insomnia/blob/7abde2a01700f587179941b3231fb1078fcb1e41/packages/insomnia-app/app/common/export.ts#L185-L198).

### Importers Package and Contribution

The [Insomnia Importers Package](https://github.com/Kong/insomnia/tree/develop/packages/insomnia/src/utils/importers) supports migrating older export versions to the latest version, and external formats like HAR, Postman, Swagger/OpenAPI, and cURL. If you want to contribute new formats, submit a pull request to [insomnia-importers](https://github.com/Kong/insomnia/tree/develop/packages/insomnia/src/utils/importers) on GitHub.