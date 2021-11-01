---
layout: article-detail
title:  Key Maps
category: "Built-In Features"
category-url: built-in-features
---

Insomnia supports various text editor key maps,under Preferences > General > Font > Text Editor Key Map.

![Access text editor key map options through the general preferences tab.](/assets/images/key-maps.png)
_To select a text editor key map, go to the font section of the preferences general tab._

The key maps currently available are Vim, Emacs, and Sublime.

## Vim on Mac

By default, press-and-hold on macOS shows special characters.

This is not particularly useful when using the Vim key map, because navigation is restricted to one move at a time. In order to enable key-repeating, execute the following in your terminal and restart Insomnia:

`defaults write com.insomnia.app ApplePressAndHoldEnabled -bool false`
