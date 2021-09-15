---
layout: article-detail
title:  Hooks and Actions
category: "Plugins"
category-url: plugins
---

## Request/Response Hooks
Plugins can implement “hook” functions that get called when certain things happen. A plugin can currently export two different types of hooks:

```ts
interface RequestHook {
    app: AppContext;
    request: Request;
};

interface ResponseHook {
    app: AppContext;
    response: Response;
}
```

```ts
// Hooks are exported as an array of "hook" functions which get 
// called with the appropriate plugin API context.
module.exports.requestHooks = Array<(context: RequestHook) => void>;
module.exports.responseHooks = Array<(context: ResponseHook) => void>;
```

## Request Actions
Actions can be added to the bottom of the request dropdown by defining a request action plugin.

```ts
interface RequestAction {
    label: string;
    action: (context: Context, models: { 
        requestGroup: RequestGroup;
        request: Request;
    }): void | Promise<void>;
    label: string;
    icon?: string;
};
```

```ts
// Request actions are exported as an array of objects
module.exports.requestActions = Array<RequestAction>
```

Example: Plugin to get request details in a modal
Example: Send request

## Folder Actions

Actions can be added to the bottom of the folder dialog by defining a folder (request group) action plugin.

```ts
interface RequestGroupAction {
    label: string;
    action: (context: Context, models: { 
        requestGroup: RequestGroup; 
        requests: Array<Request>;
    }): Promise<void>;
};
```

```ts
// Folder actions are exported as an array of objects
module.exports.requestGroupActions = Array<RequestGroupAction>
```

Example: Plugin to send all requests in a folder

## Workspace Actions

Actions can be added to the collection/document settings dropdown by defining a workspace action plugin. These apply to both types of workspaces, Request Collections and Design Documents.

```ts
interface WorkspaceAction {
    label: string;
    action: (context: Context, models: { 
        workspace: Workspace;
        requestGroup: Array<RequestGroup>,;
        requests: Array<Request>;
    }): Promise<void>;
};
```

```ts
// Workspace actions are exported as an array of objects
module.exports.workspaceActions = Array<WorkspaceAction>;
```

Example: Plugin to export the current workspace

## Document Actions

Actions can be added to a dashboard card context menu, however currently only for design documents.

```ts
interface DocumentAction {
    label: string,
    action: (context: Context, spec: 
        contents: Record<string, any>;
        rawContents: string;
        format: string;
        formatVersion: string;
    ): void | Promise<void>;
    hideAfterClick?: boolean;
};
```

```ts
// Document actions are exported as an array of objects
module.exports.documentActions = Array<DocumentAction>;
```

## Config Generator

Config generators show in the document settings dropdown, and can be used to generate configuration from an OpenAPI spec.

```ts
interface ConfigGenerator {
    label: string;
    generate: (info: SpecInfo) => Promise<{ document?: string; error?: string; }>;
};
```

```ts
// Config generators are exported as an array of objects
module.exports.configGenerators = Array<ConfigGenerator>;
```

