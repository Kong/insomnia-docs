---
layout: article-detail
title:  Linting
category: "API Design"
category-url: api-design
---

Linting is enabled by default in Insomnia. As you type, Insomnia Designer validates your specification in the background for issues. In the screen below, note the red dot next to line 43 indicating that there is an issue:

The Linter Panel displays at the bottom of the Editor contents. This panel aggregates all errors and warnings from the specification into a centralized location so it’s easier to get an overall sense of what’s going wrong without scrolling through and checking each individual line.

The message indicates that the linter has found an issue due to the parent on line 42, stating that children keys should be strings instead of numbers. That means the 200 on line 43 should be wrapped inside quotes as '200'. Note in the screen below that once we add quotes, the issue is resolved and the error disappears:

