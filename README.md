# react-template

React Template with some pre-installed tools

## Packages list

### Libs

- [material-ui](https://material-ui.com/)
- [Roboto font](https://fonts.google.com/specimen/Roboto)
- [prop-types](https://yarnpkg.com/package/prop-types)
- [react-i18nify](https://yarnpkg.com/package/react-i18nify)
- [sanitizer](https://yarnpkg.com/package/sanitize-html)
- [react-router-dom](https://reactrouter.com/)
- [react-router-hash-link](https://yarnpkg.com/package/react-router-hash-link)

### Dev Tools

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [svgr](https://yarnpkg.com/package/@svgr/webpack)
- [favicons](https://yarnpkg.com/package/favicons) & [favicons-webpack-plugin](https://yarnpkg.com/package/favicons-webpack-plugin)
- node-sass

## Installation

```bash
$ yarn
```

### Customisation

- Change your project `name`, `version` and `author` inside the `package.json`
- Change `appName`, `appDescription` and `developerName` inside `config/webpack.common.js@L67`
- Customize your favicon by editing the value of `logo` inside `config/webpack.common.js@L64` (svg awaited)
- Change your app `<title>` by editing the value of `title` inside `config/webpack.common.js@L60`

## Usage

### Javascript

Your first called component should always be `App.js`.

`App` will be used as the base routing component.

You can add as many `page component` as you want by adding the following section inside the `<Switch>` and above the `/` route.
```javascript
<Route path="/myroute">
    <MyComponent />
</Route>
```

It's advisable to create one folder per page.

You should as much as possible to follow the same folder tree and names for javascript and css
(i.e if you have a component located at `src/components/home/Welcome.js` his style should be located at `res/css/components/home/Welcome.scss`).

If you mutualise your components, you can add them to the `generic` folder (again, same for style).

`index.js` should never be edited.

### Styles

This template has a sass loader. This mean that you can variabilize css in order to set-up a global theme.
Vars are declared inside `res/css/themes/style.scss`. This file should only contains vars.

`index.scss` should never be edited (exept for HOC global hooks).

### Tools

Some usefull tools are pre-loaded and ready to use :

#### @material-ui

See [material-ui](https://mui.com/) documentation for more informations.

#### @material-ui/icons

See [material-ui/icons](https://mui.com/) and [Material icons](https://fonts.google.com/icons) documentation for more informations.

#### react-router-dom

See [react-router](https://reactrouter.com/docs/en/v6) documentation for more informations.

#### react-router-hash-link

See [react-router-hash-link](https://yarnpkg.com/package/react-router-hash-link) documentation for more informations.

#### [react-i18nify](https://yarnpkg.com/package/react-i18nify)

This is used as a translation system.

You can declare wording by adding them to `res/locales/fr.json` and use them inside your components.
```javascript
import { t } from 'react-i18nify';
...
t('welcome.text');
```

#### [svgr](https://yarnpkg.com/package/@svgr/webpack)

svgr is an svg loader which auto transform svg as React component.

```javascript
import MySvg from "icons/mysvg.svg";
...
<MySvg />
...
```

#### [sanitizer](https://yarnpkg.com/package/sanitize-html)

This module can be used as an html sinitizer

```javascript
import sanitizeHtml from 'sanitize-html';
...
sanitizeHtml(someHTML, opts);
```

#### Aliases

Somme aliases are declared inside the Webpack config in order to simplify the uses of imports.

Here are the list :

```
components: src/components/
pages:      src/pages',
utils:      src/utils/
styles:     res/css/components/
images:     res/images/
icons:      res/images/icons/
locales:    res/locales/
public:     public/
```

They can be used as follow :
```javascript
import MyCard from "components/home/cards/MyCard" <=> import MyCard from "src/components/home/cards/MyCard"
import "styles/home/Home.scss" <=> import "res/css/components/home/Home.scss"
```

## Development

```bash
$ yarn start
```

Your app should now be running on [localhost:8080](http://localhost:8080/).

## Building From Source
```bash
$ yarn build
```
