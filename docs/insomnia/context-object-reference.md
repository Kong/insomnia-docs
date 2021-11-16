---
layout: article-detail
title:  Context Object Reference
category: "Plugins"
category-url: plugins
---

This document is a Context object reference. Context methods provide helpers for plugins to communicate, interact, and integrate with Insomnia. For example, these can be used to show an alert or alter a request header.

## context.request

The request context contains helpers to interact with an Insomnia request.

```ts
interface RequestContext {
    getId(): string;
    getName(): string;
    getUrl(): string;
    setUrl(url: string): void;
    getMethod(): string;
    setMethod(method: string): void;
    getHeaders(): Array<{ name: string, value: string }>;
    getHeader(name: string): string | null;
    hasHeader(name: string): boolean;
    removeHeader(name: string): void;
    setHeader(name: string, value: string): void;
    addHeader(name: string, value: string): void;
    getParameter(name: string): string | null;
    getParameters(): Array<{name: string, value: string}>;
    setParameter(name: string, value: string): void;
    hasParameter(name: string): boolean;
    addParameter(name: string, value: string): void;
    removeParameter(name: string): void;
    getBody(): RequestBody;
    setBody(body: RequestBody): void;
    getEnvironmentVariable(name: string): any;
    getEnvironment(): Object;
    setAuthenticationParameter(name: string, value: string): void;
    getAuthentication(): Object;
    setCookie(name: string, value: string): void;
    settingSendCookies(enabled: boolean): void;
    settingStoreCookies(enabled: boolean): void;
    settingEncodeUrl(enabled: boolean): void;
    settingDisableRenderRequestBody(enabled: boolean): void;
    settingFollowRedirects(enabled: boolean): void;
};

interface RequestBody {
  mimeType?: string;
  text?: string;
  fileName?: string;
  params?: RequestBodyParameter[];
}

interface RequestBodyParameter {
  name: string;
  value: string;
  description?: string;
  disabled?: boolean;
  multiline?: string;
  id?: string;
  fileName?: string;
  type?: string;
}
```

### Example: Set Content-Type header on every POST request

```ts
// Request hook to set header on every request
module.exports.requestHooks = [
  context => {
    if (context.request.getMethod().toUpperCase() === 'POST') {
      context.request.setHeader('Content-Type', 'application/json');
    }
  }
];
```

### Example: Alter request body

```ts
// Replace "FOO" with "BAR" within a request body before sending
const regexp = new RegExp(/FOO/, 'g');

module.exports.requestHooks = [
  context => {
    const body = context.request.getBody();
    context.request.setBody({
      ...body,
      text: body.text.replace(regexp, 'BAR'),
    });
  }
];
```

### Example: Override request body

```ts
module.exports.requestHooks = [
  context => {
    context.request.setBody({
      mimeType: 'application/json',
      text: JSON.stringify({ foo: 'bar' }),
    });
  }
];
```

## context.response

The response context contains helpers to interact with an Insomnia response.

```ts
interface ResponseContext {
    getRequestId(): string;
    getStatusCode(): number;
    getStatusMessage(): string;
    getBytesRead(): number;
    getTime(): number;
    getBody(): Buffer | null;
    getBodyStream(): Readable;
    setBody(body: Buffer);
    getHeader(name: string): string | Array<string> | null;
    getHeaders(): Array<{ name: string, value: string }> | undefined;
    hasHeader(name: string): boolean,
}

```

### Example: Save response to file

This example shows how you can write a response to a file.

```ts
const fs = require('fs');

// Response hook to save response to file
module.exports.responseHooks = [
  context => {
   context.response.getBodyStream().pipe(
      fs.createWriteStream('/Users/gschier/Desktop/response-body.txt')
    );
  }
];
```

### Example: Alter a response body

The response body works with [NodeJS Buffers](https://nodejs.org/api/buffer.html). To change the response body through a plugin, you'll need to translate to and from a Buffer.

The below example ties into `responseHooks` and shows how to work with the NodeJS Buffers to:

* Convert a Buffer to a string
* Parse a string to a JS object
* Modify the response by:
  * Generating a random number
  * Prompting to user for information in a modal
* Convert the JS object to a string and then to a Buffer

```ts
const bufferToJsonObj = buf => JSON.parse(buf.toString('utf-8'));
const jsonObjToBuffer = obj => Buffer.from(JSON.stringify(obj), 'utf-8');

module.exports.responseHooks = [
  async ctx => {
    try{
      const resp = bufferToJsonObj(ctx.response.getBody());
      
      // Modify
      resp.__randomNumber = Math.random();

      // If you want something from a user, use a prompt:
      const promptResult = await ctx.app.prompt('Type something', { defaultValue: 'abcd' });
      resp.__customValue = promptResult;

      ctx.response.setBody(jsonObjToBuffer(resp));
    } catch {
      // no-op
    }
  }
]
```
_This example adds a `__randomNumber` and `__customValue` property to a JSON response. Update the functionality as needed._

## context.store

Plugins can store persistent data via the storage context. Data is only accessible to the plugin that stored it.

```ts
interface StoreContext {
    hasItem(key: string): Promise<boolean>;
    setItem(key: string, value: string): Promise<void>;
    getItem(key: string): Promise<string | null>;
    removeItem(key: string): Promise<void>;
    clear(): Promise<void>;
    all(): Promise<Array<{ key: string, value: string }>>;
}
```

## context.app

The app context contains a general set of helpers that are global to the application.

```ts
interface AppContext {
    getInfo(): { version: string, platform: string };
    alert(title: string, message?: string): Promise<void>;

    dialog(title: string, body: HTMLElement, options?: {
        onHide?:() => void;
        tall?: boolean;
        skinny?: boolean;
        wide?: boolean;
    }): void;

    prompt(title: string, options?: {
        label?: string;
        defaultValue?: string;
        submitName?: string;
        cancelable?: boolean;
    }): Promise<string>;

    getPath(name: string): string;
    
    showSaveDialog(options?: {
        defaultPath?: string;
    }): Promise<string | null>;

    clipboard: {
      readText(): string;
      writeText(text: string): void;
      clear(): void;
    };
}
```

## context.data

The data context contains helpers related to importing and exporting Insomnia workspaces.

```ts
interface ImportOptions {
    workspaceId?: string;
    workspaceScope?: 'design' | 'collection';
}

interface DataContext {
    import: {
        uri(uri: string, options?: ImportOptions): Promise<void>;
        raw(text: string, options?: ImportOptions): Promise<void>;
    },
    export: {
        insomnia(options?: { 
            includePrivate?: boolean,
            format?: 'json' | 'yaml',
        }): Promise<string>;
        har(options?: { includePrivate?: boolean }): Promise<string>;
    }
}
```

## context.network

The network context contains helpers related to sending network requests.

```ts
interface NetworkContext {
    sendRequest(request: Request): Promise<Response>;
}
```
