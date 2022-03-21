# react-template

React Template

## Description

`react-template` is a project template including all needed to build a front project with [React](https://reactjs.org/), [MUI](https://mui.com/), and [webpack](https://webpack.js.org/).

### Requirements

`react-template` requires Node.js `>=17.0.0`

### Pre-installed packages

#### Developing
- [`react`](https://yarnpkg.com/package/react)
- [`react-router-dom`](https://yarnpkg.com/package/react-router-dom)
- [`date-fns`](https://yarnpkg.com/package/date-fns)
- [`prop-types`](https://yarnpkg.com/package/prop-types)
- [`react-i18nify`](https://yarnpkg.com/package/react-i18nify)

#### Styling
- [`@mui/material`](https://yarnpkg.com/package/@mui/material)
- [`@mui/icons-material`](https://yarnpkg.com/package/@mui/icons-material)
- [`@fontsource/roboto`](https://yarnpkg.com/package/@fontsource/roboto)
- [`@svgr/webpack`](https://yarnpkg.com/package/@svgr/webpack)

#### Compiling/Building/Testing
- [`webpack`](https://yarnpkg.com/package/webpack)
- [`@babel/core`](https://yarnpkg.com/package/@babel/core)
- [`eslint`](https://yarnpkg.com/package/eslint)
- [`cross-env`](https://yarnpkg.com/package/cross-env)
- [`node-sass`](https://yarnpkg.com/package/node-sass) // TODO : Update to Dart Sass

## Usage

### Installation

#### Setting-up project

```bash
$ yarn setup
```

This will run the project setup editing `package.json` and `webpack.common.js` files.\
It ends up with `yarn install` command.

### Development

```bash
$ yarn start
```

Your app should now be running on [localhost:8080](http://localhost:8080/).

### Building From Source
```bash
$ yarn
$ yarn build
```
