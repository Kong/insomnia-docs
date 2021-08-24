---
layout: article-detail
title:  Introduction to Plugins
category: "Plugins"
category-url: plugins
---

Browse our current community plugins on the [Insomnia Plugin Hub](https://insomnia.rest/plugins). 

For most use-cases, Insomnia’s core feature set will suffice. However, for certain things like custom authentication mechanisms or complex workflows, more advanced behavior may be required.

This document provides an overview of Insomnia’s plugin APIs, which can be used to extend the functionality of Insomnia.

There are three general types of plugins that you can create for Insomnia. A plugin can either add a custom template tag for rendering custom values, or defined a hook which can do things like intercept requests and responses to add custom behavior.

## Create a Plugin
A plugin is a NodeJS Module that is placed in a specific directory that Insomnia knows about.

MacOS: `~/Library/Application\ Support/Insomnia/plugins/`

Windows: `%APPDATA%\Insomnia\plugins\`

Linux: `$XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/`

A plugin directory requires at least two files:

```
base64/             
 ├── package.json   # Node module metadata
 └── *.js           # One or more JavaScript files
```

The package.json must contain an Insomnia attribute to be identified as a plugin.

Take a look at the following file to see what a minimal package.json should look like.

{:.alert .alert-primary}
**Note**: If you want to publish an Insomnia plugin on npm and have it display in the Plugin Hub, you must prefix the name with **insomnia-plugin-**.

```
Example: Plugin package.json file
{
  "name": "insomna-plugin-base64",  // Npm module name
  "version": "1.0.0",               // Plugin version
  "main": "plugin.js",              // Entry point
  
  /**
   * Insomnia-specific metadata. Without this, Insomnia
   * won't recognize the module as a plugin.
   */
  "insomnia": {                    
    "name": "base64",      // Internal Insomnia plugin name
    "displayName": "Base64 Plugin", // Plugin display name
    "description": "...",  // Plugin description

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
    // Useful for teams / organizations who work on same plugin
    "publisher": {
      "name": "YOUR NAME HERE", // Plugin publisher name, displayed on plugin hub
      "icon": "https://...", // Plugin publisher avatar /  icon, absolute url
    },

    // Plugin Application Support
    // semver target supported, see https://semver.npmjs.com/ for more details
    // * targets all versions
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

## Manage Plugins
Plugins can be added from the Plugins tab within the application preferences dialog. They can also be downloaded and installed directly from npm.

## Publish Plugins
Before you publish your plugin, there are two main things you want to ensure if you want your plugin to be recognized by Insomnia and be available through the Insomnia Plugin Hub.

* Your plugin's package.json contains the insomnia attribute with the correct structure. See Create a Plugin for more info.
* Your plugin's package name is prefixed with `insomnia-plugin-`

After you have verified that your plugin meets the criteria described above, now you can proceed with publishing your plugin following the npm instructions on publishing a package.

If your package does not show up on the Insomnia Plugin Hub after a few days, please contact us with the name of your plugin and a link to the published npm package.

## Debugging
Navigate to View > Toggle DevTools to open the Chrome Developer Tools. From here, you can debug Insomnia as you would any web project in Chrome.

If you want to focus specifically on the plugin you are developing, you can find it from the Sources tab and/or filter the Console based on the plugin’s file name.

## Template Tags

Refer to [Template Tags](/insomnia/template-tags) for more information. 