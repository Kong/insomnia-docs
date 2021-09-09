---
layout: article-detail
title:  Introduction to Plugins
category: "Plugins"
category-url: plugins
---

This section provides an overview of Insomnia’s plugins, which can be used to extend the functionality of Insomnia. Plugins are commonly used when more advanced behavior is needed, like custom authentication mechanisms and complex workflows. 

You can also create your own Insomnia plugin and upload it via **Insomnia Preferences** within the app or via NPM. Generally, plugins do the following:

* Add a custom template tag for rendering custom values
* Define a hook that can do things like intercept requests and responses to add custom behavior

Browse our current community NPM plugins on the [Insomnia Plugin Hub](https://insomnia.rest/plugins). 

## Create a Plugin

An Insomnia plugin is a NodeJS module that is placed in a specific directory that Insomnia will recognize.

* MacOS:   `~/Library/Application\ Support/Insomnia/plugins/`
* Windows: `%APPDATA%\Insomnia\plugins\`
* Linux:   `$XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/`

{:.alert .alert-primary}
**Note**: To quickly create a plugin in the proper path with starter files via the Insomnia app, go to **Preferences** and click on the **Plugins** tab. Click on **Generate New Plugin** and enter your plugin name. If you don't prepend the title with **insomnia-plugin-**, it will automatically be added. 

An Insomnia plugin directory requires at least two files. In the following example, the plugin title is `base64` and contains the files `package.json` and `app.js`.

```
base64/             
 ├── package.json   # Node module metadata
 └── app.js         # One or more JavaScript files
```

The following is an example minimal `package.json`. The `package.json` must contain an `insomnia` attribute to be identified as an Insomnia plugin.

{:.alert .alert-primary}
**Note**: If you want to publish an Insomnia plugin on NPM and have it display in the Plugin Hub, you must prefix the name with **insomnia-plugin-**.

```
{
  "name": "insomnia-plugin-base64",  // NPM module name
  "version": "1.0.0",               // Plugin version
  "main": "app.js",                 // Entry point
  
  /**
   * Insomnia-specific metadata. Without this, Insomnia
   * won't recognize the module as a plugin.
   */
  "insomnia": {                    
    "name": "base64",      // Internal Insomnia plugin name
    "displayName": "base64 Plugin", // Plugin display name
    "description": "The base64 plugin encodes basic auth logins",  // Plugin description

    // Optional plugin metadata

    // Plugin images for Plugin Hub and other interfaces
    "images": {
      // Plugin Icon
      // Suggested filetype: SVG (for scaling)
      // Suggested dimensions: 48x48
      "icon": "icon.svg", // relative path, relative to package root

      // Plugin Cover Image
      // Suggested filetype: SVG (for scaling)
      // Suggested dimensions: 952w x 398h
      "cover": "cover.svg", // relative path, relative to package root
    },

    // Force plugin hub and other entities to show specific author details
    // Useful for teams and organizations who work on the same plugin
    "publisher": {
      "name": "YOUR NAME HERE", // Plugin publisher name, displayed on plugin hub
      "icon": "https://...",    // Plugin publisher avatar or icon, absolute url
    },

    // Plugin Application Support
    // semver target supported, see https://semver.npmjs.com/ for more details
    // * designates that all versions are targeted
    "applications": { 
      "designer": "*",
      "core": "*",
      "cli": "*",
     },
  },
  
  // External dependencies are also supported
  "dependencies": [],
  "devDependencies": []
}
```

### Expose Response Body Text

When developing a new plugin, you may want to expose content in the response body. In the following example, we demonstrate how you may prompt the user to enter content into a prompt and subsequently show this content when the user sends the request. 

```
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
_This example specifically deals with making timestamps human readable. Update the functionality as needed._

## Manage Plugins

Plugins can be added from the **Plugins** tab in the **Preferences** menu. They can also be downloaded and installed directly from [NPM](https://insomnia.rest/plugins).

## Publish Plugins

Before you publish your plugin, ensure you have met the following criteria for your plugin to be recognized by Insomnia and be available on the [Insomnia Plugin Hub](https://insomnia.rest/plugins).

* Your plugin's `package.json` contains the `insomnia` attribute with the correct structure. See [Create a Plugin](#create-a-plugin) for more info.
* Your plugin's package name is prefixed with `insomnia-plugin-`.

After you have verified that your plugin meets the criteria described above, publish your plugin following the [NPM instructions](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages).

If your package does not show up on the Insomnia Plugin Hub after a few days, please [contact us](https://insomnia.rest/support) with the name of your plugin and a link to the published NPM package.

## Debug Using Chrome

To open the Chrome Dev tools for debugging on Chrome, right click on your mouse or trackpad and click **Inspect**. If you don't use a mouse or trackpad, click on **View**, then **Developer**, and then **Developer Tools**. 

If you want to focus specifically on the plugin you are developing, you can find it from the **Sources** tab and/or filter the **Console** based on the plugin’s file name.

## Template Tags

Refer to [Template Tags](/insomnia/template-tags) for more information. 