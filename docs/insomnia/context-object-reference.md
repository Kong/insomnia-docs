---
layout: article-detail
title:  Context Object Reference
category: "Plugins"
category-url: plugins
---

This document is a context object reference. 

## context.request

```js
type RequestContext = {
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
    getBody(): Object;
    setBody(body: Object): void;
    setCookie(name: string, value: string): void;
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
```

Example: Set Content-Type header on every POST request

## context.response

```js
type ResponseContext = {
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

Example: Save response to file

```js
const fs = require('fs');

// Request hook to save response to file
module.exports.responseHooks = [
  context => {
   context.response.getBodyStream().pipe(
      fs.createWriteStream('/Users/gschier/Desktop/response-body.txt')
    );
  }
];
```

## context.store
Plugins can store persistent data via the storage context. Data is only accessible to the plugin that stored it.

```js
type StoreContext = {
    async hasItem(key: string): Promise<boolean>;
    async setItem(key: string, value: string): Promise<void>;
    async getItem(key: string): Promise<string | null>;
    async removeItem(key: string): Promise<void>;
    async clear(): Promise<void>;
    async all(): Promise<Array<{ key: string, value: string }>;
}
```

## context.app

The app context contains a general set of helpers that are global to the application.

```js
type AppContext = {
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
}
```

## context.data
The data context contains helpers related to importing and exporting Insomnia workspaces.

```js
type ImportOptions = {
    workspaceId?: string;
    workspaceScope?: 'design' | 'collection;
}

type DataContext = {
    import: {
        async uri(uri: string, options?: ImportOptions): Promise<void>;
        async raw(text: string, options?: ImportOptions): Promise<void>;
    },
    export: {
        async insomnia(options?: { 
            includePrivate?: boolean,
            format?: 'json' | 'yaml',
        }): Promise<string>;
        async har(options: { includePrivate?: boolean } = {}): Promise<string>;
    }
}
```

## context.network
The network context contains helpers related to sending network requests.

```js
type NetworkContext = {
    async sendRequest(request: Request): Promise<Response>;
}
```