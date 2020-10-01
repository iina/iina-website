# iina-website

The source code of IINA's new website at iina.io.

## How to build :

This site is powered by the static site generator [middleman](https://middlemanapp.com).
To set up a local development environment,
please install front and back-end dependencies by running these commands in the project root directory.

Please also make sure that you have yarn and ruby/bundler (`gem install bundler`) installed.

```sh
yarn install
bundle install
```

Then 

```sh
bundle exec middleman
```

to run a local server, or

```sh
bundle exec middleman build
```

to generate static files.

## Localization

This site is not ready for localization yet. We are working on this and please stay tuned.
