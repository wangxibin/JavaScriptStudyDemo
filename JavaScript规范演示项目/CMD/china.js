/**
 * 所有模块都通过define来定义
 */
define(function(require, exports, module) {  
  // 通过require引入依赖
  var $ = require('jquery');
  var Spinning = require('./spinning');
  exports.doSomething = ...
  module.exports = ...
})