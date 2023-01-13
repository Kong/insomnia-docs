---
layout: article-detail
title:  Linting
category: "API Design"
category-url: api-design
---

Linting is built into Insomnia for Design Documents. As you type, Insomnia validates your spec in the background for issues. Errors are indicated by a red dot next to the line number.

The Linter Panel aggregates all errors and warnings from the spec into a centralized location so it’s easier to get an overall sense of what’s going wrong without scrolling through and checking each individual line.

![The linting errors appear in a box below the editor.](/assets/images/linting-errors.png)
_Errors are displayed next to the applicable code line, and in the Linter Panel below the editor._


## Custom Linting
To use a custom linting ruleset in the Insomnia Design Editor, add the spectral .yaml file to the root of the collection git repository.  It should be at the same level as the .insomnia folder.

![Instructions for Adding Custom Rule Set](/assets/images/custom-linting.png)


Once the custom ruleset file is added to the repo, commit it to the synced repo and make sure your Insomnia Editor is on the latest changes and on the branch that contains the file.  

To see the ruleset file begin to be used, you can restart the Insomnia App, or exit out of the workspace and enter again.  Now the Insomnia Design editor should use the custom ruleset for linting.

![Example of Custom Linting Violation](/assets/images/custom-linting-violation.png)


### Adding Remote Link or NPM Modules for Custom Linting
In Insomnia, we support spectral extensions of custom linting rules, including using remote urls or NPM modules to extend linting definitions.  

In order to extend the .spectral.yaml custom linting definition, please follow [Spectral's Documentation](https://docs.stoplight.io/docs/spectral/83527ef2dd8c0-extending-rulesets)





