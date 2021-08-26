---
layout: article-detail
title:  Import and Export Data
category: "Get Started"
category-url: get-started
---

Insomnia supports the ability to import multiple file types. Right now, the supported formats are Insomnia, Postman v2, HAR, OpenAPI, Swagger, WSDL, and Curl.

To import of export data, go to **Preferences**, then the **Data** tab. 

![The Data tab in Preferences allows you to import or export data via dropdown options.](/assets/images/import-export-data.png)
_The Data tab in Preferences allows you to import or export data via dropdown options._

## Export Format Specification

The following outlines the export format specification. 

{:.alert .alert-primary}
**Note**: The [Insomnia Importers Package](https://github.com/kong/insomnia/tree/develop/packages/insomnia-importers) has support for migrating older export versions to the latest, as well as supporting external formats like HAR, Postman, Swagger/OpenAPI, and Curl. If you want to contribute new formats, feel free to submit a pull request to the insomnia-importers package of Insomnia.

```
Root Export Object
{
  "_type": "export",
  "__export_format": 3,
  "__export_date": "2017-01-10T23:15:55.928Z",
  "__export_source": "insomnia.desktop.app:v4.0.13",
  "resources": [{
    "_type": "request",
    "url": "https://google.com"
  }, {
    "...": "..."
  }]
}
```

{:.table .table-striped}
Key | Description
---- | ---------
_type | Only possible value currently is export
__export_format | Specifies the data schema of the export
__export_data | ISO timestamp of the time of export
resources | All exported resources (see below for resource types)

```
Common Resource Properties
{
  "_type": "resource_type",
  "_id": "type_111",
  "parentId": "type_4567",
  "created": 1484090000356,
  "modified": 1484090000356,
  "...": "..."
}
```

{:.table .table-striped}
Key | Description
---- | ---------
_type | See below sections for possible resource types
_id | Id representing the resource
parentID | Resource ID of parent object (folder or workspace)
created | When the resource was created
modified | When the resource was last modified

Special Resource IDs
__WORKSPACE_ID__
Maps to the ID of the currently active workspace

__BASE_ENVIRONMENT_ID__
Maps to the ID of the active workspace’s base environment

__<NAME>_<NUMBER>__
Any value matching this format will deterministically generate a new ID at import time.

```
[{
  "_type": "workspace",
  "_id": "__WORKSPACE_1__"
}, {
  "_type": "request",
  "_id": "__REQUEST_1__",
  "parentId": "__WORKSPACE_1__"
}]
```

## Resource Types
These are the possible resource types that can be imported/exported.

* workspace
* environment
* request_group
* request

### Resource Type: workspace

```
{
  "_type": "workspace",
  "_id": "__WORKSPACE_ID__",
  "parentId": null,
  "created": 1484090000356,
  "modified": 1484090000356,
  "name": "My API Project",
  "description": "This the API for https://api.insomnia.rest/"
}
```

{:.table .table-striped}
Key | Description
---- | ---------
name | Name of workspace
description | Plain text description of workspace
Resource Type | environment

```
{
  "_type": "environment",
  "_id": "__ENVIRONMENT_1__",
  "parentId": "__WORKSPACE_ID__",
  "name": "Development",
  "data": {
    "base_url": "https://insomnia.rest",
    "user_id": "user_123",
    "...": "..."
  }
}
```

{:.table .table-striped}
Key | Description
---- | ---------
name | Name of environment
data{} | User-defined data representing the environment
Resource Type | request_group

```
{
  "_type": "request_group",
  "_id": "__FOLDER_2__",
  "name": "New Folder",
  "parentId": "__FOLDER_1__",
  "created": 1484090000356,
  "modified": 1484090000356,
  "metaSortKey": 1,
  "environment": {
    "url": "{{ base_url }}/my/awesome/path",
    "...": "..."
  }
}
```

{:.table .table-striped}
Key | Description
---- | ---------
name | Name of the folder
metaSortKey | Sort priority relative to its siblings
environment |  User-defined environment override data
Resource Type | request

```
{
  "_type": "request",
  "_id": "__REQUEST_1__",
  "parentId": "__FOLDER_2__",
  "created": 1484090000356,
  "modified": 1484090000356,
  "name": "My Request",
  "method": "POST",
  "url": "https://insomnia.rest/foo/bar",
  "body": {
    "mimeType": "multipart/form-data",
    "text": "",
    "params": [{
      "type": "file",
      "name": "my_file",
      "fileName": "/home/amy/hello.txt",
      "disabled": false
    }, {
      "type": "text",
      "name": "foo",
      "value": "bar",
      "disabled": false
    }, {
      "type": "text",
      "name": "blah",
      "value": "bar",
      "disabled": true
    }]
  },
  "parameters": [{
    "name": "limit",
    "value": "10",
    "disabled": false
  }],
  "headers": [{
    "name": "Content-Type",
    "value": "application/json",
    "disabled": false
  }],
  "authentication": {
    "username": "User",
    "password": "Pass"
  },
  "metaSortKey": 10
}
```

{:.table .table-striped}
Key | Description
---- | ---------
name | Name of the request
metaSortKey | Sort priority relative to its siblings
method | Request method (GET, POST, …).
url | Absolute URL of the request
body{} | Body of the request
mimeType | Mime type of posted data
text | Plain text posted data
fileName | File path to binary body
params[] | List of form parameter objects
name | Name of the parameter
type | Either text or file
value | Value of the parameter
fileName | File path of param
disabled | If true, the entry will be ignored
parameters[] | Array of URL query parameters
name | Name of parameter
value | Value of parameter
disabled | If true, the entry will be ignored
headers[] | Array of HTTP header objects
name | Name of parameter
value | Value of parameter
disabled | If true, the entry will be ignored
authentication{} | HTTP authentication (currently only basic auth supported)
username | Username for HTTP Basic Auth
password | Password for HTTP Basic Auth