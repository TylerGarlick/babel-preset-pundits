'use strict';

module.exports = {

  /**
   * Babel Presets
   */
  presets: [
    require('babel-preset-es2016-node5')
  ],

  /**
   * Babel Plugins
   */
  plugins: [
    require('babel-plugin-add-module-exports'),
    require("babel-plugin-transform-es2015-modules-commonjs"),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-decorators'),
    require('babel-plugin-transform-export-extensions'),
    require('babel-plugin-transform-object-rest-spread')
  ]
};
