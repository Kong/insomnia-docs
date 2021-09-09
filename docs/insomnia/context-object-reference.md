---
layout: article-detail
title:  Context Object Reference
category: "Plugins"
category-url: plugins
---

This document is a context object reference. 

## context.request

```
// context.request functions
type RequestContext = {
    getId (): string,
    getName (): string,
    getUrl (): string,
    setUrl (url: string): void,
    getMethod (): string,
    getHeaders (): Array<{ name: string, value: string }>,
    getHeader (name: string): string | null, 
    hasHeader (name: string): boolean,
    removeHeader (name: string): void,
    setHeader (name: string, value: string): void,
    addHeader (name: string, value: string): void,
    getParameter (name: string): string | null,
    getParameters (): Array<{name: string, value: string}>,
    setParameter (name: string, value: string): void,
    hasParameter (name: string): boolean,
    addParameter (name: string, value: string): void,
    removeParameter (name: string): void,
    setBodyText (text: string): void,
    getBodyText (): string,
    setCookie (name: string, value: string): void,
    getEnvironmentVariable (name: string): any,
    getEnvironment (): Object,
    setAuthenticationParameter (string: any): void,
    getAuthentication (): Object,
    setCookie (name: string, value: string): void,
    settingSendCookies (enabled: boolean): void,
    settingStoreCookies (enabled: boolean): void,
    settingEncodeUrl (enabled: boolean): void,
    settingDisableRenderRequestBody (enabled: boolean): void,
};
```

Example: Set Content-Type header on every POST request

## context.response

```
// context.response functions
getRequestId (): string;
getStatusCode (): number
getStatusMessage (): string
getBytesRead (): number
getTime (): number
getBody (): Buffer | null
setBody (body: Buffer)
getHeader (name: string): string | Array<string> | null
hasHeader (name: string): boolean
```

Example: Save response to file

```
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

```
// context.store functions
async hasItem(key: string): Promise<boolean>
async setItem(key: string, value: string): Promise<void>
async getItem(key: string): Promise<string | null>
async removeItem(key: string): Promise<void>
async clear(): Promise<void>
async all(): Promise<Array<{ key: string, value: string }>>
```

## context.app

The app context contains a general set of helpers that are global to the application.

```
// context.app functions
alert(title: string, message?: string): Promise<void>
prompt(title: string, options?: {
    label?: string,
    defaultValue?: string,
    submitName?: string,
    cancelable?: boolean,
  }): Promise<string>
getPath(name: 'desktop'): string
async showSaveDialog(options: { defaultPath?: string } = {}): Promise<string | null>
```

## context.data
The data context contains helpers related to importing and exporting Insomnia workspaces.

```
// context.data.import functions
async uri(uri: string, options: { workspaceId?: string } = {}): Promise<void>
async raw(text: string, options: { workspaceId?: string } = {}): Promise<void>

// context.data.export functions
async insomnia(options: { 
    includePrivate?: boolean,
    format?: 'json' | 'yaml'
  }): Promise<string>
async har(options: { includePrivate?: boolean } = {}): Promise<string><br>
```

## context.network
The network context contains helpers related to sending network requests.

```
// context.network functions
async sendRequest(request: Request): Promise<Response>
```