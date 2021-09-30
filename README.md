[![npm](https://img.shields.io/npm/v/stylelint-config-equinusocio.svg?style=flat)](https://www.npmjs.com/package/stylelint-config-equinusocio)


# Equinusocio's opinionated stylelint config

> Opinionated Stylelint sharable config for Equinusocio's projects.


## Install

```sh
npm i -D stylelint-config-equinusocio
```

## Usage

Add a Stylelint config file to your project and extends with our config:

#### `.stylelintrc`
```json
{
  "extends": "stylelint-config-equinusocio"
}
```

## Develop

Run `eslint` for linting the `js` files:

```sh
yarn lint
```

Run tests with `Jest` for checking Styelint rules:

```sh
yarn test
```

## Release

`standard-version` is provided with a `release` command. Just run on `master`:

```sh
yarn release
```

And follow the prompt.


