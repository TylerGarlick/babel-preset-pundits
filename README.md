![Pundits](https://github.com/TylerGarlick/babel-presets-pundits/raw/master/docs/pundits.png)

---

### Babel Preset Pundits
> A simple babel preset that eases setup and configuration of projects.  This module will be maintained to keep up with the new plugins, presets, and other babel utilities.





## Install

```sh
$ npm install --save-dev babel-preset-pundits
```


## Usage

#### `.babelrc` (Preferred)

```json
{
  "presets": "pundits"
}
```

#### CLI

```sh
$ babel script.js --presets pundits
```

#### Node Module (API)

```js
require('babel-core').transform('code', {
  presets: ['pundits']
});
```

## Presets and Plugin

#### Presets

* [babel-preset-es2016-node5](https://www.npmjs.com/package/babel-preset-es2016-node5) - Sets up node5 to be compatible with ES2016 and async


#### Plugins

* [babel-plugin-add-module-exports](https://www.npmjs.com/package/babel-plugin-add-module-exports) - Ensures the module.exports = module.default
* [babel-plugin-transform-class-properties](http://babeljs.io/docs/plugins/transform-class-properties) - Gives classes the ability to have more sensible properties
* [babel-plugin-transform-decorators](http://babeljs.io/docs/plugins/transform-decorators) - Class annotations
* [babel-plugin-transform-export-extensions](http://babeljs.io/docs/plugins/transform-export-extensions) - Additional Import/Export functionality
* [babel-plugin-transform-object-rest-spread](http://babeljs.io/docs/plugins/transform-object-rest-spread) - Rest spread
* [babel-plugin-transform-es2015-modules-commonjs](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-commonjs) - ES2015 modules exported as commonjs
