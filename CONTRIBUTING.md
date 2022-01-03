Thank you for your interest in contributing to the Insomnia Docs.

## Site overview and markdown styling

The Insomnia documentation site is built using [Jekyll](https://jekyllrb.com/), a static site generator and [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/). When updating content, navigate to:

* the `inso-cli` directory for Inso CLI documentation pages
* the `insomnia` directory for Insomnia (client) documentation pages

### Use Markdown instead of HTML

Stick to Markdown as much as possible in Markdown files. Use the following classes to style elements:

Element | Markdown class
------- | --------------
table | `{:.table .table-striped}`
note callout | `{:.alert .alert-primary}`

### Accessibility

The Insomnia documentation site aims to follow [AAA WCAG accessibility standards](https://www.w3.org/WAI/WCAG2AAA-Conformance).

Since we use [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) and it tends to be accessibility-friendly, use their HTML where you need accessible elements and you cannot easily create them with Markdown.

See [Install Inso CLI](https://docs.insomnia.rest/inso-cli/install) for an example of accessible tabs. Note that in this case, we opted to add HTML into the Markdown file.

### Add a new page

Add a new page if you are adding documentation for a new topic. Don't add a new page for FAQ-type content. Take time to see where the content fits in.

* Add the file to either the `inso-cli` or `insomnia` folder. 
* Name the file descriptively and use full words where possible. 
* Add the page title and local url to **_data** > **main-nav.yaml** under the corresponding section.

### Keep it simple

* Don't add unnecessary and excessive packages.
* **Use screenshots very sparingly**. And if you add a screenshot, ensure it has descriptive alt text and a short description underneath. See [Introduction to Insomnia](/insomnia/get-started) for an example.  
* Use the Oxford Comma to prevent any misinterpretation.
* Use Vanilla JS where needed. No need to add jQuery.
* For icons, use [Google Icons](https://fonts.google.com/icons). This means we don't have to download an entire library to use just a few icons.

## Contributing resources

Insomnia is a [Kong](https://konghq.com/) product, and we follow the same Contributing Guidelines and Style Guide. Here's more information about becoming an effective contributor.

* [Contributing Guidelines](https://docs.konghq.com/contributing/)
* [How to contribute to docs-as-code as a beginner](https://docs.konghq.com/contributing/community/#how-to-contribute-to-docs-as-code-as-a-beginner)
* [Community Expectations](https://docs.konghq.com/contributing/community-expectations/) regarding inclusive language and accessibility

### Capitalization

Capitalize the following words, as they refer to entities in our client:

* Project
* Collection
* Document
* Snapshot

## Contributor T-shirt

If your pull request to [Kong/insomnia-docs](https://github.com/Kong/insomnia-docs) was accepted, and it fixes a bug, adds functionality, or makes it significantly easier to use or understand Insomnia, congratulations! You are eligible to receive the very special contributor t-shirt! Go ahead and fill out the [contributor submission form](https://goo.gl/forms/5w6mxLaE4tz2YM0L2).
