# Insomnia Documentation

Welcome to the open-source Insomnia documentation repository. Find the Insomnia documentation site at [docs.insomnia.rest](https://docs.insomnia.rest/).

Please refer to our [Contributing Guidelines](/CONTRIBUTING.md).

## Run locally

1. Clone the repository.
2. Install [Ruby](https://www.ruby-lang.org/en/) and [Bundler](https://bundler.io/).
3. Run `cd docs`.
4. Run `bundle install`.
5. Run `bundle exec jekyll serve`.
6. Browse to http://localhost:4000.

## Run with Docker

1. Clone the repository.
2. Install [Docker](https://docs.docker.com/get-docker/).
3. Run `make build`  or `docker build --tag insomnia-docs:latest .`.
4. Run `make run` or `docker run -it --rm -p 4000:4000 insomnia-docs:latest`.
5. Browse to http://localhost:4000.
