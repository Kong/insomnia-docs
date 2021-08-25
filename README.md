# Insomnia Documentation

Welcome to the open-source Insomnia documentation repository. Find the Insomnia documentation site at docs.insomnia.rest. 

## Site Overview and Markdown Styling

The Insomnia documentation site is built using [Jekyll](https://jekyllrb.com/), a static site generator and [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/). When updating content, navigate to:

* the `inso-cli`directory for Inso CLI documentation pages
* the `insomnia` directory for Insomnia (client) documentation pages

Stick to Markdown as much as possible in Markdown files. Use the following classes to style elements:

Element | Markdown class
------- | --------------
table | `{:.table .table-striped}`
note callout | `{:.alert .alert-primary}`

## Contributing Resources

Insomnia is a Kong product, and we follow the same Contributing Guidelines and Style Guide. Here's more information about becoming an effective contributor. 

* [Contributing Guidelines](https://docs.konghq.com/contributing/)
* [How to contribute to docs-as-code as a beginner](https://docs.konghq.com/contributing/community/#how-to-contribute-to-docs-as-code-as-a-beginner)
* [Community Expectations](https://docs.konghq.com/contributing/community-expectations/) regarding inclusive language and accessibility

## Run Locally

1. Clone the repository. 

2. Run `cd docs`

3. Run `bundle exec jekyll serve`

4. Browse to http://localhost:4000