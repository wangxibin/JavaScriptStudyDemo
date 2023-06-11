// 使用america.js
require(['america'], function(america) {
	// 调用america中的方法
	america.fuckAmerica();
});

// 使用china.js
require(['china'], function(china) {
	// 在这里使用中国省市数据
	// 打印出china.js中的provinces数组
	console.log(china.provinces);
});
