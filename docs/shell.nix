with import <nixpkgs> { };
stdenv.mkDerivation {
  name = "env";
  buildInputs = [
    ruby
  ];
}
# to install
# bundle install
# to run
# bundle exec jekyll serve -H 0.0.0.0 -P 4000 --watch
