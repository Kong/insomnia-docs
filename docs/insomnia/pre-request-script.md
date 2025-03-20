---
layout: article-detail
title:  Insomnia Pre-request Script Overview
category: "Requests and Responses"
category-url: requests-and-responses
---

The pre-request script feature allows users to execute tasks before a request is sent.

This applies for example to cases where you might need:

- Manipulate environment variables, authentication, ...
- Manipulate the contents a given request
- Send other requests before that will provide data you need to run a given request

## Migrating from Postman pre-request scripts

Pre-request scripts exported from Postman should also work when imported into Insomnia.

There are some differences to be aware about:

- Top level awaits are allowed.
- Global environment `insomnia.globals` and iteration data `insomnia.iterationData` are not supported yet.
- `CollectionVariables` is mapped to `baseEnvironment` in Insomnia.
- Deprecated `postman` interfaces are not supported yet, such as `postman.setEnvironmentVariable`.

If you notice any incompatibility issues, please report these by create a [new issue on GitHub](https://github.com/kong/insomnia/issues).

## Examples

These example snippets are some common tasks which could be helpful in scripting:

### Variables Manipulation

The `insomnia` object serves as a handler for interacting with various types of variables. It offers a range of methods tailored for accessing the base environment, and the active environment.

```javascript
// set a variable in environment
insomnia.environment.set("env", "env value");
// set a variable in base environment
insomnia.baseEnvironment.set("baseEnv", "base env value");
// set a variable in variables
insomnia.variables.set("var", "var value");
// collectionVariables operations are applied to the base environment
insomnia.collectionVariables.set("collectionEnv", "collection variable value");

// get values from different scopes
const env = insomnia.environment.get("env");
const variable = insomnia.variables.get("var");
const baseEnv = insomnia.baseEnvironment.get("baseEnv");

// print values
console.log(env, variable, baseEnv);

// unset values
insomnia.environment.unset("env");
insomnia.collectionVariables.unset("baseEnv");
```

### Variables Interpolation

The `replaceIn` method can render a string with existing variables. For example, this script interpolates a string with the variable `name`.

```javascript
insomnia.environment.set('name', 'pre-request script');
const welcome = insomnia.environment.replaceIn("Hello {{name}}.");
console.log(welcome);
```

## Accessing Folder-level Environment from Script
In Insomnia, multiple requests can be grouped within a folder, allowing for organization based on different use cases. These parent folders can influence request behavior in various ways, such as overriding project-level environment values and defining common headers.

Parent folders can also be accessed from both pre-request and after-response scripts. Insomnia provides APIs specifically for retrieving parent folder information.

## Parent Folder Related APIs

### The Folder Getter method


```js
const myFolder = insomnia.parentFolders.get(myFolderName);
```
* The `get` method accepts either a folder name or a folder ID.

* It searches for the folder from the bottommost parent folder to the top. If multiple parent folders share the same name, it returns the first one found.
* If no matching folder is found, it returns `undefined`.

Similar methods, such as `insomnia.parentFolders.getById` and `insomnia.parentFolders.getByName`, explicitly accept a folder ID or folder name.

### The Folder Object

The folder object contains information about the related folder, including its ID, name, and folder-level environment:

```js
const myFolder = insomnia.parentFolders.get(‘myFolderName’);
console.log(myFolder.id);
console.log(myFolder.name);
console.log(myFolder.environment.toObject);
```

### Accessing Folder-level Environment values
Folder-level environment values in Insomnia function similarly to standard environment values. The key difference is that folder-level environment values take precedence over other environment values, such as project-level and global environment values. When rendering, folder-level environment values override any values with the same name defined at the project or global level.

Folder-level environment values can be accessed through the folder object. Here’s an example of reading a value:

```js
const myFolder = insomnia.parentFolders.get(‘myRequestFolder’);
const urlValue = myFolder.environment.get(‘url’);
```
In this example, Insomnia searches for a parent folder named `myRequestFolder` and retrieves the folder-level environment value `url`.
Note: `myFolder` could be `undefined`, so it should be checked before use.

Additionally, a folder-level environment value can be persisted as follows:

```js
const myFolder = insomnia.parentFolders.get(‘myRequestFolder’);
myFolder.environment.set(‘url’, ‘https://insomnia.rest’);
```

Furthermore, the folder-level environment object also supports the same methods as the project environment such as unset, has and so on.

### Searching a Folder-level Environment Value
It also provides an API for quickly searching a folder-level environment value from bottom to top, for example:
```js
const myEnv = insomnia.parentFolders.findValue(‘envKey‘);
```
This interface searches the `envKey` from bottom parent folder to top parent folder, until it has found the key, and returns the value.
If not found, it returns `undefined`.


### Update Active Request URL, Query Params or Headers

It is also allowed to modify the active request. In the pre-request script, "the active request" represents the upcoming request that is about to be executed. `insomnia.request` allows users to manipulate different aspects of the request configuration before its execution, enabling them to fine-tune parameters or make adjustments as needed.

```javascript
// manipulating method
insomnia.request.method = 'POST';

// manipulating query params
insomnia.request.url.addQueryParams('k1=v1');
insomnia.request.url.addQueryParams('k2=v2');
console.log(insomnia.request.url.getQueryString());

// manipulating headers
insomnia.request.addHeader({key: 'X-Header-Name-1', value: 'value1' });
insomnia.request.addHeader({key: 'X-Header-Name-2', value: 'value2' });
insomnia.request.removeHeader('X-Header-Name-1');
```

### Update Active Request Body

Of course, the pre-request script also provides a way to modify the active request's body.
Currently it supports several modes:

- `raw`
- `file`
- `formdata`
- `urlencoded`
- `graphql`

The `raw` mode is allowed to set any string value as the body, by specifying the `raw` field.

```javascript
// raw content
insomnia.request.body.update({
 mode: 'raw',
 raw: 'rawContent',
});
```

In the `urlencoded` mode, key value pairs will be added and the body will be sent as `application/x-www-form-urlencoded`.

```javascript
// urlencoded content
insomnia.request.body.update({
 mode: 'urlencoded',
 urlencoded: [
   { key: 'k1', value: 'v1' },
   { key: 'k2', value: 'v2' },
 ],
});
```

This is an example of modifying the active GQL request to github.

```javascript
insomnia.request.url = 'https://api.github.com/graphql';
insomnia.request.method = 'POST';
insomnia.request.body.update({
  mode: 'graphql',
  graphql: {
    query: `query($number_of_repos:Int!) {
      viewer {
        name
     repositories(last: $number_of_repos) {
           nodes {
             name
       }
     }
   }
}`,
    operationName: undefined,
    variables: {   "number_of_repos": 3},
  },
});
```

It also supports sending a file from local:

```javascript
insomnia.request.body.update({
 mode: 'file',
 file: "/Users/<user name>/tmp.csv",
});
```

Finally, this is an example of `multipart/form-data` request.

```javascript
insomnia.request.method = 'POST'
insomnia.request.body.update({
  mode: 'formdata',
  header: {
    'Content-Type': 'multipart/form-data',
  },
  formdata: [
    { key: 'k1', type: 'text', value: 'v1' },
    { key: 'k2', type: 'file', value: "/Users/<user name>/tmp.csv" },
  ],
});
```

### Update Active Request Authorization Type

`insomnia.request.auth` provides a way to set different authn or authz types.

This is an example of setting `bearer` auth.

```javascript
// bearer
insomnia.request.auth.update(
    {
        type: 'bearer',
        bearer: [
            {key: 'token', value: 'tokenValue'},
            {key: 'prefix', value: 'CustomTokenPrefix'},
        ],
    },
    'bearer'
);

This is an example of setting `basic` auth.
// basic
insomnia.request.auth.update(
    {
        type: 'basic',
        basic: [
            {key: 'username', value: 'myName'},
            {key: 'password', value: 'myPwd'},
        ],
    },
    'basic'
);
```

### Update the Proxy Temporarily

```javascript
// print current proxy url
console.log(insomnia.request.proxy.getProxyUrl());

// update it
insomnia.request.proxy.update({
 host: '127.0.0.1',
 match: 'https://httpbin.org',
 port: 8080,
 tunnel: false,
 authenticate: false,
 username: '',
 password: '',
});
```

### Update the Certificates

```javascript
// print the original one
console.log('key:', insomnia.request.certificate.key.src);
console.log('cert:', insomnia.request.certificate.cert.src);
console.log('passphrass:', insomnia.request.certificate.passphrass);
console.log('pfx:', insomnia.request.certificate.pfx.src);

// update
insomnia.request.certificate.update({
    disabled: true,
    key: {src: 'my.key'},
    cert: {src: 'my.cert'},
    passphrase: '',
    pfx: {src: ''},
});
```

### Send a Request (Simple Mode)

Please make sure that callbacks are wrapped with Promise.

```javascript
const resp = await new Promise((resolve, reject) => {
    insomnia.sendRequest(
        'https://httpbin.org/anything',
        (err, resp) => {
            if (err != null) {
                reject(err);
            } else {
                resolve(resp);
            }
        }
    );
});

insomnia.environment.set('prevResponse', resp.code);
```

### Send a Request (Advanced Mode)

Send a request with raw content.

```javascript
const rawReq = {
    url: 'httpbin.org/anything',
    method: 'POST',
    header: {
        'Content-Type': 'text/plain',
    },
    body: {
        mode: 'raw',
        raw: 'rawContent',
    },
};

const resp = await new Promise((resolve, reject) => {
    insomnia.sendRequest(
        rawReq,
        (err, resp) => {
            if (err != null) {
                reject(err);
            } else {
                resolve(resp);
            }
        }
    );
});
```

Send a request with `urlencoded` content.

```javascript
const urlencodedReq = {
    url: 'httpbin.org/anything',
    method: 'POST',
    header: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: {
        mode: 'urlencoded',
        urlencoded: [
            { key: 'k1', value: 'v1' },
            { key: 'k2', value: 'v2' },
        ],
    },
};

const resp = await new Promise((resolve, reject) => {
    insomnia.sendRequest(
        urlencodedReq,
        (err, resp) => {
            if (err != null) {
                reject(err);
            } else {
                resolve(resp);
            }
        }
    );
});
```

Send a GraphQL request.

```javascript
const gqlReq = {
    url: 'httpbin.org/anything',
    method: 'POST',
    header: {
        'Content-Type': 'application/graphql',
    },
    body: {
        mode: 'graphql',
        graphql: {
            query: 'query',
            operationName: 'operation',
            variables: 'var',
        },
    },
};

const resp = await new Promise((resolve, reject) => {
    insomnia.sendRequest(
        gqlReq,
        (err, resp) => {
            if (err != null) {
                reject(err);
            } else {
                resolve(resp);
            }
        }
    );
});
```

Send a request with `application/octet-stream` content.

```javascript
const fileReq = {
    url: 'httpbin.org/anything',
    method: 'POST',
    header: {
        'Content-Type': 'application/octet-stream',
    },
    body: {
        mode: 'file',
        file: "${getFixturePath('files/rawfile.txt')}",
    },
};

const resp = await new Promise((resolve, reject) => {
    insomnia.sendRequest(
        fileReq,
        (err, resp) => {
            if (err != null) {
                reject(err);
            } else {
                resolve(resp);
            }
        }
    );
});
```

Send a request with `application/octet-stream` content.

```javascript
const formdataReq = {
    url: 'httpbin.org/anything',
    method: 'POST',
    header: {},
    body: {
        mode: 'formdata',
        formdata: [
            { key: 'k1', type: 'text', value: 'v1' },
            { key: 'k2', type: 'file', value: "${getFixturePath('files/rawfile.txt')}" },
        ],
    },
};

const resp = await new Promise((resolve, reject) => {
    insomnia.sendRequest(
        formdataReq,
        (err, resp) => {
            if (err != null) {
                reject(err);
            } else {
                resolve(resp);
            }
        }
    );
});
```

### External libraries

The `require` method grants access to the built-in library modules within the scripts. Below is a list of the available libraries.

- ajv
- atob
- btoa
- chai
- cheerio
- crypto-js
- csv-parse
- lodash
- moment
- postman-collection
- tv4
- uuid
- xml2js

The following NodeJS modules are also available:

- assert
- buffer
- events
- path
- querystring
- punycode
- stream
- string-decoder
- timers
- url
- util

And this is an example of using `uuid` to generate an id:

```javascript
const uuid = require('uuid');
insomnia.environment.set('user_id', uuid.v4());
console.log(insomnia.environment.get('user_id'));
```
