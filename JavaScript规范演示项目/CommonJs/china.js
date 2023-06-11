/**
 * CommonJS定义的模块分为: 模块引用(require) 模块输出(exports) 模块标识(module)
 * CommonJS Modules有1.0、1.1、1.1.1三个版本:
 * Node.js、SproutCore实现了 Modules 1.0
 * SeaJS、AvocadoDB、CouchDB等实现了Modules 1.1.1
 * SeaJS、FlyScript实现了Modules/Wrappings
 * 这里的CommonJS规范指的是CommonJS Modules/1.0规范。
 * CommonJS是一个更偏向于服务器端的规范。NodeJS采用了这个规范。
 * CommonJS的一个模块就是一个脚本文件。require命令第一次加载该脚本时就会执行整个脚本，然后在内存中生成一个对象。
 */
exports.area = function(r) {
   return Math.PI * r * r;
}
exports.circleCumference= function(r) {
   return Math.PI * r * r;
}