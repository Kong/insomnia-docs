# syntax=docker/dockerfile:1
FROM ruby:2.7-slim

RUN apt-get -y update && apt-get install -y build-essential ruby-dev

COPY docs /docs

WORKDIR /docs

RUN bundle install

EXPOSE 4000 80
CMD bundle exec jekyll serve --watch -H 0.0.0.0 -P 4000