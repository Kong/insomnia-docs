---
layout: article-detail
title:  Custom Themes
category: "Plugins"
category-url: plugins
---

Additional color schemes can be created and installed via the plugin system. A good place to start is to view the bundled themes within the [insomnia-plugin-themes](https://github.com/Kong/insomnia/tree/develop/plugins/insomnia-plugin-core-themes) module.

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
Example: Simple dark theme
Example: Styling sub-components
Example: Custom CSS
