---
layout: article-detail
title:  Hooks and Actions
category: "Plugins"
category-url: plugins
---

Hooks and actions allow you to add additional functionality to your custom plugins through requests, responses, and UI interactions. Hooks rely on a request or response. Actions rely on a UI interaction.

## Request and Response Hooks

Plugins can implement hook functions that get called when certain events happen. A plugin can currently export two different types of hooks, `RequestHook` and `ResponseHook`.

```ts
interface RequestHook {
    app: AppContext;
    request: Request;
};

interface ResponseHook {
    app: AppContext;
    response: Response;
}

// Hooks are exported as an array of hook functions that get 
// called with the appropriate plugin API context.
module.exports.requestHooks = Array<(context: RequestHook) => void>;
module.exports.responseHooks = Array<(context: ResponseHook) => void>;
```

## Request Actions

Actions can be added to the bottom of the request dropdown context menu (right click on a request in the sidebar) by defining a request action plugin.

```ts
interface RequestAction {
    label: string;
    action: (context: Context, models: { 
        requestGroup: RequestGroup;
        request: Request;
    }): void | Promise<void>;
    icon?: string;
};

// Request actions are exported as an array of objects
module.exports.requestActions = Array<RequestAction>
```

### Example: Plugin to get request details in a modal

This plugin adds a **See request data** option to the dropdown menu that appears when you right click on a request in the sidebar.

```ts
module.exports.requestActions = [
  {
    label: 'See request data',
    action: async (context, data) => {
      const { request } = data;
      const html = `<code>${JSON.stringify(request)}</code>`;
      context.app.showGenericModalDialog('Results', { html });
    },
  },
];
```

### Example: Send request

This plugin adds a **Send request** option to the dropdown menu that appears when you right click on a request in the sidebar.

```ts
module.exports.requestActions = [
  {
    label: "Send request",
    action: async (context, data) => {
      const { request } = data;
      const response = await context.network.sendRequest(request);
      const html = `<code>${request.name}: ${response.statusCode}</code>`;
      context.app.showGenericModalDialog("Results", { html });
    },
  },
];
```

## Folder Actions

Actions can be added to the bottom of the folder dropdown menu by defining a folder (request group) action plugin.

```ts
interface RequestGroupAction {
    label: string;
    action: (context: Context, models: { 
        requestGroup: RequestGroup; 
        requests: Array<Request>;
    }): Promise<void>;
};

// Folder actions are exported as an array of objects
module.exports.requestGroupActions = Array<RequestGroupAction>
```

### Example: Plugin to send all requests in a folder

This plugin adds a **Send Requests** option to the dropdown menu that appears when you click on a request folder. **Send Requests** sends all requests in that folder at once.

```ts
module.exports.requestGroupActions = [
  {
    label: 'Send Requests',
    action: async (context, data) => {
      const { requests } = data;

      let results = [];
      for (const request of requests) {
        const response = await context.network.sendRequest(request);
        results.push(`<li>${request.name}: ${response.statusCode}</li>`);
      }

      const html = `<ul>${results.join('\n')}</ul>`;

      context.app.showGenericModalDialog('Results', { html });
    },
  },
];
```

## Workspace Actions

Actions can be added to the Collection or Document settings dropdown by defining a workspace action plugin. These apply to both types of workspaces, Request Collections and Design Documents.

{:.alert .alert-primary}
**Note**: "Workspace" is a name in our codebase we use to refer to both Documents and Collections.

```ts
interface WorkspaceAction {
    label: string;
    action: (context: Context, models: { 
        workspace: Workspace;
        requestGroup: Array<RequestGroup>,;
        requests: Array<Request>;
    }): Promise<void>;
};

// Workspace actions are exported as an array of objects
module.exports.workspaceActions = Array<WorkspaceAction>;
```

### Example: Plugin to export the current workspace

This plugin adds a custom option to the Document or Collection dropdown menu that exports the current Document or Collection.

```ts
const fs = require('fs');

module.exports.workspaceActions = [{
  label: 'My Plugin Action',
  icon: 'fa-star',
  action: async (context, models) => {
    const ex = await context.data.export.insomnia({
      includePrivate: false,
      format: 'json',
      workspace: models.workspace,
    });

    fs.writeFileSync('/users/user/Desktop/export.json', ex);
  },
}];
```

## Document Actions

Actions can be added to a Dashboard card context menu for a Document. This action does not work for Collections.

```ts
interface DocumentAction {
    label: string,
    action: (
      context: Context,
      spec: {
        contents: Record<string, any>;
        rawContents: string;
        format: string;
        formatVersion: string;
      }
    ): void | Promise<void>;
    hideAfterClick?: boolean;
};

// Document actions are exported as an array of objects
module.exports.documentActions = Array<DocumentAction>;
```

## Config Generator

Config generators show in the Document settings dropdown, and can be used to generate configuration from an OpenAPI spec.

```ts
interface ConfigGenerator {
    label: string;
    docsLink?: string;
    generate: (spec: {
      contents: Record<string, any>;
      rawContents: string;
      format: string;
      formatVersion: string;
    }) => Promise<{
      document?: string;
      error?: string;
    }>;
};

// Config generators are exported as an array of objects
module.exports.configGenerators = Array<ConfigGenerator>;
```
