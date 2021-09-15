---
layout: article-detail
title:  Hooks and Actions
category: "Plugins"
category-url: plugins
---

## Request/Response Hooks
Plugins can implement “hook” functions that get called when certain things happen. A plugin can currently export two different types of hooks:

```js
type RequestContext = {
    app: AppContext,
    request: Request,
};

type ResponseContext = {
    app: AppContext,
    response: Response,
}
```

```js
// Hooks are exported as an array of "hook" functions which get 
// called with the appropriate plugin API context.
module.exports.requestHooks = Array<(context: RequestContext) => void>
module.exports.responseHooks = Array<(context: ResponseContext) => void>
```

## Request Actions
Actions can be added to the bottom of the request dropdown by defining a request action plugin.

```js
type RequestAction = {
    label: string,
    action: (context: Context, { 
        requestGroup: RequestGroup, 
        request: Request
    }): void | Promise<void>,
    label: string,
    icon?: string,
};
```

```js
// Request actions are exported as an array of objects
module.exports.requestActions = Array<RequestAction>
```

Example: Plugin to get request details in a modal
Example: Send request

## Folder Actions

Actions can be added to the bottom of the folder dialog by defining a folder (request group) action plugin.

```js
type RequestGroupAction = {
    label: string,
    action: (context: Context, { 
        requestGroup: RequestGroup, 
        requests: Array<Request>
    }): Promise<void>
};
```

```js
// Folder actions are exported as an array of objects
module.exports.requestGroupActions = Array<RequestGroupAction>
```

Example: Plugin to send all requests in a folder

## Workspace Actions

Actions can be added to the main app dropdown by defining a workspace action plugin.

```js
type WorkspaceAction = {
    label: string,
    action: (context: Context, { 
        workspace: Workspace,
        requestGroup: Array<RequestGroup>, 
        requests: Array<Request>
    }): Promise<void>
};
```

```js
// Workspace actions are exported as an array of objects
module.exports.workspaceActions = Array<WorkspaceAction>
```

Example: Plugin to export the current workspace
