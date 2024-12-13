---
layout: article-detail
title: Insomnia After-Response Script Overview
category: "Requests and Responses"
category-url: requests-and-responses
---

Starting with the [release of Insomnia 9.3.0](https://konghq.com/blog/product-releases/insomnia-9-3-ga), the concept of after-response scripts (also known as post-request scripts or test scripts in other applications) has been introduced. These scripts are executed following the completion of a request.

In after-response scripts, you can perform similar scripting activities as you would in pre-request scripts. For more details on pre-request scripts, see the documentation [here](https://docs.insomnia.rest/insomnia/pre-request-script).

These scripts can be utilized for:

- Performing tests and assertions on the response.
- Storing certain parts of the response into environment variables.
- Any other script you would apply in [pre-request scripts](https://docs.insomnia.rest/insomnia/pre-request-script).

For tests and assertions you can use `insomnia.test` and `insomnia.expect` functions:

```js
insomnia.test('Check if status is 200', () => {
  insomnia.expect(insomnia.response.code).to.eql(200);
});
```

Here are some examples `insomnia.expect` calls you can make:

```js
insomnia.expect(200).to.eql(200);
insomnia.expect('uname').to.be.a('string');
insomnia.expect('a').to.have.lengthOf(1);
insomnia.expect('xxx_customer_id_yyy').to.include("customer_id");
insomnia.expect(201).to.be.oneOf([201,202]);
insomnia.expect(199).to.be.below(200);

// Testing objects
insomnia.expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
insomnia.expect({a: 1, b: 2}).to.have.any.keys('a', 'b');
insomnia.expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
insomnia.expect({a: 1}).to.have.property('a');
insomnia.expect({a: 1, b: 2}).to.be.an('object').that.has.all.keys('a', 'b');
```

You can also access various response attributes:

```js
const status = insomnia.response.status;
const responseTime = insomnia.response.responseTime;
const jsonBody = insomnia.response.json();
const textBody = insomnia.response.text();
const header = insomnia.response.headers.find(header => header.key === 'Content-Type');
const cookies = insomnia.response.cookies.toObject();
```

Example of storing response body parts into the environment:

```js
insomnia.environment.set("whole_response", insomnia.response.json());

// Storing a specific field
const jsonBody = insomnia.response.json();
insomnia.environment.set("specific_field", jsonBody.specific_field);
```

Similar to pre-request scripts, after-response scripts allow for actions such as importing libraries, setting delays, and sending requests at the end of the script.

```js
const atob = require('atob');

await new Promise((resolve) => setTimeout(resolve, 1000));

const resp = await new Promise((resolve, reject) => {
  insomnia.sendRequest(
    'https://mock.insomnia.rest',
    (err, resp) => {
      err ? reject(err) : resolve(resp);
    }
  );
});
```

## Migrating from Postman post-request scripts

After-response scripts exported from Postman should also work when imported into Insomnia.

There are some differences to be aware about:

- Top level awaits are allowed.
- Global environment `insomnia.globals` and iteration data `insomnia.iterationData` are not supported yet.
- `CollectionVariables` is mapped to `baseEnvironment` in Insomnia.
- Deprecated `postman` interfaces are not supported yet, such as `postman.setEnvironmentVariable`.

If you notice any incompatibility issues, please report these by create a [new issue on GitHub](https://github.com/kong/insomnia/issues).
