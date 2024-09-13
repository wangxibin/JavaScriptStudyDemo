// 01.标准的import导入
// import {
// 	name,
// 	hello,
// 	Person
// } from './export.js'

// console.log(name)
// console.log(hello)
// console.log(Person)

// // 02.导入一个重命名过的变量
// import {
// 	fooName
// } from './export.js'

// console.log(fooName)


// 03.导入一个使用as default的变量
import {
	default as name2
} from './export.js'
console.log(name2)