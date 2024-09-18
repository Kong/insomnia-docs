# syntax=docker/dockerfile:1
FROM ruby:3.3.4-slim

RUN apt-get -y update && apt-get install -y build-essential ruby-dev

WORKDIR /docs

# Copy Gemfile and Gemfile.lock to install dependencies
COPY docs/Gemfile docs/Gemfile.lock ./

# Install Ruby gems
RUN bundle install

# Expose ports
EXPOSE 4000 80

# Run Jekyll server with watch option for real-time updates
CMD bundle exec jekyll serve -H 0.0.0.0 -P 4000 --watch