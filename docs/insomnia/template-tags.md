---
layout: article-detail
title:  Template Tags
category: "Plugins"
category-url: plugins
---

Template tags are closely related to Environment Variables. They can be used in the same places and they behave in a similar way. The main difference is that template tags are more like operations, not variables. Tags can do things like transform strings, random numbers, UUIDs, timestamps, and so on.

This article will cover the basics of using template tags, tells you how you can create your own, and goes over two of the most powerful tags that Insomnia includes out of the box.

## Using Template Tags

To insert a template tag, press CTRL+Space wherever Environment Variables can be used. Template tags will appear below environment variables in the autocomplete list and are marked with an ƒ symbol.

{:.alert .alert-primary}
**Note**: The autocomplete will also be shown based on what you type.

## Custom Template Tags
Eventually, most Insomnia users end up needing to extend Insomnia with custom behavior. This may be due to a proprietary authentication mechanism, custom data format, or various other reasons. These situations can be remedied by creating a custom template tag using Insomnia's Plugin System. Once a plugin is added, the template tag will show up exactly as if it were a native Insomnia tag.

## Response and Request Tags
Two tags worth covering in more depth are the Request and Response tags. These tags enable some powerful behavior, so we'll go over them in here.

### The Response Tag
Perhaps the most powerful feature of Insomnia is the ability to reference values from other request's responses (sometimes referred to as Request Chaining). This can be useful, for example, for including the ID of a created resource in a GET request right after creating it with a POST. Or, perhaps referencing a login token from a response in an environment variable which can then be reused in every request.

### The Request Tag
The request tag is useful for referencing values from the request that is currently being sent. For example, extracting a CSRF token from a cookie to be included in a form value or header.

## Sample Template Tags
As mentioned, a custom Template Tag can be added, which can then be referenced inside Insomnia’s template system to render custom values.

```
type RenderContext = {
  // API not finalized yet
};

type TemplateTag = {
  name: string,
  displayName: DisplayName,
  disablePreview?: () => boolean,
  description?: string,
  deprecated?: boolean,
  liveDisplayName?: (args) => ?string,
  validate?: (value: any) => ?string,
  priority?: number,
  args: Array<{
    displayName: string,
    description?: string,
    defaultValue: string | number | boolean,
    type: 'string' | 'number' | 'enum' | 'model' | 'boolean',
    
    // Only type === 'string'
    placeholder?: string,

    // Only type === 'model'
    modelType: string,

    // Only type === 'enum'
    options: Array<{
      displayName: string,
      value: string,
      description?: string,
      placeholder?: string,
    }>,
  }>,
  actions: Array<{
    name: string,
    icon?: string,
    run?: (context) => Promise<void>,
  }>,
};
```

### Example: Template tag to generate random number
```
/**
 * Example template tag that generates a random number 
 * between a user-provided MIN and MAX
 */
module.exports.templateTags = [{
    name: 'random',
    displayName: 'Random Integer',
    description: 'Generate random things',
    args: [
        {
            displayName: 'Minimum',
            description: 'Minimum potential value',
            type: 'number',
            defaultValue: 0
        }, 
        {
            displayName: 'Maximum',
            description: 'Maximum potential value',
            type: 'number',
            defaultValue: 100
        }
    ],
    async run (context, min, max) {
        return Math.round(min + Math.random() * (max - min));
    }
}];
```

## Request/Response Hooks
Plugins can implement “hook” functions that get called when certain things happen. A plugin can currently export two different types of hooks:

```
type RequestContext = {
    app: AppContext,            // Defined Below
    request: RequestContext     // Defined Below
};

type ResponseContext = {
    app: AppContext,            // Defined Below
    response: ResponseContext   // Defined below
}
```

```
// Hooks are exported as an array of "hook" functions which get 
// called with the appropriate plugin API context.
module.exports.requestHooks = Array<(context: RequestContext) => void>
module.exports.responseHooks = Array<(context: ResponseContext) => void>
```

## Request Actions
Actions can be added to the bottom of the request dropdown by defining a request action plugin.

```
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

```
// Request actions are exported as an array of objects
module.exports.requestActions = Array<RequestAction>
```

Example: Plugin to get request details in a modal
Example: Send request

## Folder Actions

Actions can be added to the bottom of the folder dialog by defining a folder (request group) action plugin.

```
type RequestGroupAction = {
    label: string,
    action: (context: Context, { 
        requestGroup: RequestGroup, 
        requests: Array<Request>
    }): Promise<void>
};
```

```
// Folder actions are exported as an array of objects
module.exports.requestGroupActions = Array<RequestGroupAction>
```

Example: Plugin to send all requests in a folder

## Workspace Actions

Actions can be added to the main app dropdown by defining a workspace action plugin.

```
type WorkspaceAction = {
    label: string,
    action: (context: Context, { 
        workspace: Workspace,
        requestGroup: Array<RequestGroup>, 
        requests: Array<Request>
    }): Promise<void>
};
```

```
// Workspace actions are exported as an array of objects
module.exports.workspaceActions = Array<WorkspaceAction>
```

Example: Plugin to export the current workspace

## Custom Themes

Additional color schemes can be created an installed via the plugin system. A good place to start is to view the bundled themes within the [insomnia-plugin-themes](https://github.com/Kong/insomnia/tree/develop/plugins/insomnia-plugin-core-themes) module.

```
type ThemeBlock = {
  background?: {
    default?: string,
    success?: string,
    notice?: string,
    warning?: string,
    danger?: string,
    surprise?: string,
    info?: string,
  },
  foreground?: {
    default?: string,
    success?: string,
    notice?: string,
    warning?: string,
    danger?: string,
    surprise?: string,
    info?: string,
  },
  highlight?: {
    default: string,
    xxs?: string,
    xs?: string,
    sm?: string,
    md?: string,
    lg?: string,
    xl?: string,
  },
};

type ThemeInner = {
  ...ThemeBlock,
  rawCss?: string,
  styles: ?{
    dialog?: ThemeBlock,
    dialogFooter?: ThemeBlock,
    dialogHeader?: ThemeBlock,
    dropdown?: ThemeBlock,
    editor?: ThemeBlock,
    link?: ThemeBlock,
    overlay?: ThemeBlock,
    pane?: ThemeBlock,
    paneHeader?: ThemeBlock,
    sidebar?: ThemeBlock,
    sidebarHeader?: ThemeBlock,
    sidebarList?: ThemeBlock,
    tooltip?: ThemeBlock,
    transparentOverlay?: ThemeBlock,
  },
};
```
Example: Simple dark theme
Example: Styling sub-components
Example: Custom CSS
