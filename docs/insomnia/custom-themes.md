---
layout: article-detail
title:  Custom Themes
category: "Plugins"
category-url: plugins
---

Make a custom Insomnia theme by creating an Insomnia [plugin](/insomnia/introduction-to-plugins/).

{:.alert .alert-primary}
**Note**: To get started with some live examples, see our built-in [insomnia-plugin-themes](https://github.com/Kong/insomnia/tree/develop/plugins/insomnia-plugin-core-themes) module.

## How to Build a Custom Theme

1. Create a new project for your theme. If you plan to make this theme available via NPM, start your project name with `insomnia-plugin-`. The following example is called `insomnia-plugin-dark-colorblind-theme`.

2. Following plugin instructions, write your [plugin package.json](https://docs.insomnia.rest/insomnia/introduction-to-plugins#plugin-packagejson). In your entry file, export your theme.

3. Start with a baseline template. Each section of the configuration has `background` and `foreground` options, with seven (7) modifiable color options. 
   
   See the code comments for more information about which color option names correspond with which UI elements.

```ts
module.exports = {
  name: 'Dark Colorblind',        // full theme name
  displayName: 'Dark Colorblind', // theme name as it will appear on the Insomnia themes tab
  theme: {
    // background and foreground nested directly in the theme object will serve as the default overwrites for all options you add
    background: {
      default:    '#21262D',  // primary background color
      success:    '#1F6FEB',  // POST request, 200 OK, parameter names
      notice:     '#E8F086',  // SEND button, GET request
      warning:    '#A691AE',  // PUT request
      danger:     '#FF4242',  // DELETE request
      surprise:   '#FFC20A',  // accent (Dashboard link, branch button, add plugin button)
      info:       '#58A6FF'   // OPTIONS AND HEAD request
    },
    foreground: {
      default:     '#fff',    // primary font color
      success:     '#fff',    // secondary font color for success background
      notice:      '#000',    // secondary font color for notice background
      warning:     '#fff',    // secondary font color for warning background
      danger:      '#fff',    // secondary font color for danger background
      surprise:    '#000',    // secondary font color for surprise background
      info:        '#000'     // secondary font color for info background
    },
    highlight: {
      default: '#D3D3D3'      // sidebar highlight color
    },
    // the styles object targets sub-components of the Insomnia application
    styles: {
      appHeader: {
        foreground: {
          surprise:   '#000'  // header branch button font color
        }
      },
      paneHeader: {
        foreground: {
          surprise:   '#000', // pane accent font color
          info:       '#000'  // pane response font color
        }
      },
      editor: {
        foreground: {
          default:    '#000', // primary editor font color
          surprise:   '#000', // editor accent font color
          info:       '#000'  // editor response font color
        }
      },
      dialog: {
        background: {
          default:    '#2E4052' // modal primary background color
        },
        foreground: {
          default:    '#fff'    // primary font color for modals
        }
      }
    }
  }
}
```

## Styles Parameters

The following `style` options are available. Each of these can hold their own `background`, `foreground`, and `highlight` options.

* appHeader
* paneHeader
* editor
* dialog
* transparentOverlay
* sidebar
* link

## Custom CSS

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

## Theme Plugin Schema

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
