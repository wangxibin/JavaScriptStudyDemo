// 变量
var name = 'foo module'
var age = 29

// 方法
function hello() {
	console.log('hello');
}

// 类
class Person {}

// 01.export标准导出
// export {
// 	name,
// 	age,
// 	hello,
// 	Person
// }

export default Person

// 02.导出时给变量名重名名
// export {
// 	// name as default
// 	name as fooName
// }

// 03.给命名设置default关键词
// export {
// 	name as
// 	default
// }