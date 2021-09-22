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
Perhaps the most powerful feature of Insomnia is the ability to reference values from other request's responses (sometimes referred to as [Request Chaining](/insomnia/chaining-requests). This can be useful, for example, for including the ID of a created resource in a GET request right after creating it with a POST. Or, perhaps referencing a login token from a response in an environment variable which can then be reused in every request.

### The Request Tag
The request tag is useful for referencing values from the request that is currently being sent. For example, extracting a CSRF token from a cookie to be included in a form value or header.

## Sample Template Tags
As mentioned, a custom Template Tag can be added, which can then be referenced inside Insomnia’s template system to render custom values.

```ts
interface RenderContext {
  // API not finalized yet
};

interface TemplateTag {
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
```ts
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