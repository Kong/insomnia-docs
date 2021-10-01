---
layout: article-detail
title:  Template Tags
category: "Plugins"
category-url: plugins
---

Template tags are closely related to [Environment Variables](/insomnia/environment-variables/). The main difference between Template Tags and Environment Variables is that Template Tags act more like operations, and not variables.

Tags can do things like transform strings, generate random numbers, handle UUIDs, and create timestamps.

## Use Template Tags

To insert a template tag, press CTRL+Space wherever [Environment Variables](/insomnia/environment-variables/) can be used. Template tags will appear below Environment Variables in the autocomplete list, and are marked with an `ƒ` symbol.

## Custom Template Tags

You may want to extend Insomnia functionality with custom behaviors, and can do so by creating your custom template tag as an [Insomnia plugin](/insomnia/introduction-to-plugins/). Once you've added your custom plugin to your Insomnia application, the template tag will show up exactly as if it were a native Insomnia tag.

## Response and Request Tags

Response and request tags enable you to reference values between and from responses and requests.

### The Response Tag

Use a response tag to reference values from other responses, or [Request Chaining](/insomnia/chaining-requests).

This can be useful when including the ID of a created resource in a `GET` request right after creating it with a `POST` request. It's also useful when referencing a reusable login token from a response in an environment variable.

### The Request Tag

The request tag is useful for referencing values from the current request. 

For example, use a request tag to extract a CSRF token from a cookie so you can use that value as a form value or header.

## Template Tag Schema

This example shows the usage of `TemplateTag` to render custom values.

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

### Example: Template tag to generate random integer

This example template tag generates a random integer between 0 and 100.

```ts
/**
 * Example template tag that generates a random number 
 * between a user-provided MIN and MAX
 */
module.exports.templateTags = [{
    name: 'randomInteger',
    displayName: 'Random Integer',
    description: 'Generate a random integer.',
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
