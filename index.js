'use strict';

module.exports = {

  /**
   * Babel Presets
   */
  presets: [
    require('babel-preset-es2016-node4'),
    require('babel-preset-async-to-bluebird')
  ],

  /**
   * Babel Plugins
   */
  plugins: [
    require('babel-plugin-add-module-exports'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-decorators'),
    require('babel-plugin-transform-export-extensions'),
    require('babel-plugin-transform-object-rest-spread')
  ]
};
