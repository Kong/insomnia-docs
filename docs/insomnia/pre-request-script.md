---
layout: article-detail
title:  Insomnia Pre-request Script Overview
category: "Requests and Responses"
category-url: requests-and-responses
---

The pre-request script is allowed to be executed before sending a request. In script, some tasks can be executed.

For example, manipulating environment variables, manipulating the active request or sending requests.

## Migration from existing Scripts

Pre-request scripts from Postman should just work in Insomnia. But there are still several differences should be taken care:

- Top level await is allowed. 
- Global environment `insomnia.globals` and iteration data `insomnia.iterationData` are not supported yet.
- `CollectionVariables` is mapped to `baseEnvironment` in Insomnia.
- Deprecated postman interfaces are not supported yet, such as `postman.setEnvironmentVariable`.
- Callbacks (such as in the `SendRequest` method) should be wrapped with `Promise`, or execution could return before their results have been resolved. (There are examples below).

Please also let us know if you’ve seen some incompatible issues.


## Examples
These example snippets are some common tasks which could be helpful in scripting:

### Variables Manipulation

```javascript
insomnia.environment.set("env", "env value");
insomnia.variables.set("var", "var value");
insomnia.baseEnvironment.set("baseEnv", "base env value");
// collectionVariables operations are applied to the base environment
insomnia.collectionVariables.set("collectionEnv", "collection variable value");

const env = insomnia.environment.get("env");
const variable = insomnia.variables.get("var");
const baseEnv = insomnia.baseEnvironment.get("baseEnv");

console.log(env, variable, baseEnv);

insomnia.environment.unset("env");
insomnia.collectionVariables.unset("baseEnv");
```

### Variables Intepolation
```javascript
insomnia.environment.set('name', 'pre-request script');
const welcome = pm.environment.replaceIn("Hello {{name}}.");
console.log(welcome);
```

### Update Active Request URL, Query Params or Headers
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
```javascript
// raw content
insomnia.request.body.update({
	mode: 'raw',
	raw: 'rawContent',
});

// urlencoded content
insomnia.request.body.update({
	mode: 'urlencoded',
	urlencoded: [
			{ key: 'k1', value: 'v1' },
			{ key: 'k2', value: 'v2' },
	],
});
```

### Update Active Request Authorization Type
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
