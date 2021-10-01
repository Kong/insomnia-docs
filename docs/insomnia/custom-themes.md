---
layout: article-detail
title:  Custom Themes
category: "Plugins"
category-url: plugins
---

Make a custom Insomnia theme by creating an Insomnia [plugin](/insomnia/introduction-to-plugins/). To get started with some live examples, see our built-in [insomnia-plugin-themes](https://github.com/Kong/insomnia/tree/develop/plugins/insomnia-plugin-core-themes) module.

The following defines the theme plugin schema. If a property is not set, it will use the Insomnia default.

```ts
interface ThemeBlock {
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

interface ThemeInner extends ThemeBlock {
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

### Example: Simple dark theme

This sample theme is minimal and uses a dark color palette.

```ts
module.exports.themes = [{
  name: 'my-dark-theme',
  displayName: 'My Dark Theme',
  theme: {
    foreground: {
      default: '#ddd',
    },
    background: {
      default: '#000',
      success: '#87ee59',
      notice: '#f8d245',
      warning: '#f9ac2a',
      danger: '#ff505c',
      surprise: '#f24aff',
      info: '#23dce8',
    },
  },
}];
```

### Example: Styling sub-components

In addition to the basic theme options, you can also set sub-components like `sidebar` and `highlight`.

```ts
module.exports.themes = [{
  name: 'my-theme',
  displayName: 'My Theme',
  theme: {
    background: {
      default: '#555',
      success: '#59a210',
      notice: '#ae9602',
      warning: '#d07502',
      danger: '#d04444',
      surprise: '#7d69cb',
      info: '#1c90b4',
    },
    foreground: {
      default: '#eee',
    },
    styles: {
      // Different colors in sidebar
      sidebar: {
        background: {
          default: '#2e2f2b',
          success: '#7ecf2b',
          notice: '#f0e137',
          warning: '#ff9a1f',
          danger: '#ff5631',
          surprise: '#a896ff',
          info: '#46c1e6',
        },
        foreground: {
          default: 'e0e0e0',
        },
        highlight: {
          default: '#999',
        },
      },
    },
  },
}];
```

### Example: Custom CSS

In addition to baseline edits and sub-components, you can add custom CSS.

```ts
module.exports.themes = [{
  name: 'my-dark-theme',
  displayName: 'My Dark Theme',
  theme: {
      rawCss: `
      .tooltip, .dropdown__menu {
        opacity: 0.95;
      }
    `,
  },
}];
```
