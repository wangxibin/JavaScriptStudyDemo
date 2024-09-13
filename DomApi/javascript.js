(function() {

	const TAG = "JavaScript Dom操作";

	function Console(key, msg) {
		console.log(`${TAG}=>${key}:`, msg);
	}

	/**
	 * getElementById();
	 */
	const body = document.getElementById("example");
	Console("getElementById()=>body", body);

	/**
	 * 一、选取单个元素
	 * querySelector();
	 * QuerySelector是javascript中的一个DOM API，它提供了一种简单、快速的方式去选取HTML文档中特定的元素，常用于DOM操作、事件
	 * 绑定等。通过使用CSS选择器方式选取元素，可以更加方便，灵活的进行DOM操作。
	 * 语法：var element = document.querySelector(selector);
	 * 其中，selector为CSS选择器，element是选取到的单个元素。
	 */
	// 1、通过id选取选取id为example的元素
	const element = document.querySelector("#example");
	element.addEventListener('click', function() {
		alert("点击的是id为example的元素");
	});
	Console("querySelector()=>1、通过id选取选取id为element的元素", element);
	// 2、通过类名选取选取类名为class的元素（默认选择第一个匹配到的）
	const classEle = document.querySelector(".class");
	Console("querySelector()=>2、通过类名选取选取类名为class的元素", classEle);
	// 3、通过标签名选取选取标签名为div的元素（默认选择第一个匹配到的）
	const divEle = document.querySelector("div");
	Console("querySelector()=>3、通过标签名选取选取标签名为div的元素", divEle);
	// 4、通过属性名选取选取属性名为div1的元素（默认选择第一个匹配到的）
	const div1Ele = document.querySelector("[name=div1]");
	Console("querySelector()=>4、通过属性名选取选取属性名为div1的元素素", div1Ele);
	// 5、通过使用嵌套CSS选择器取选取id为example并且class为class的元素（默认选择第一个匹配到的）
	const exampleDiv1Ele = document.querySelector("#example,.class");
	Console("querySelector()=>5、通过使用嵌套CSS选择器取选取id为example并且class为class的元素", exampleDiv1Ele);
	// 6、补充：总之querySelector()支持css选择器的语法来获取元素。
	// 7、补充：注意css选择器语法正确，如果语法不正确则选择不到元素。
	// 8、补充：querySelector()方法返回值是HTMLElement类型。
	// 9、补充：querySelector()方法只能在最新版本的现代浏览器中使用，如果要在旧版浏览器中使用需要使用polyfill或其他插件。

	/**
	 * 二、选取多个元素
	 * querySelectorAll();
	 * QuerySelectorAll是javascript中的一个DOM API，它提供了一种简单、快速的方式去选取HTML文档中特定的多个元素，常用于DOM操作、事件
	 * 绑定等。通过使用CSS选择器方式选取元素，可以更加方便，灵活的进行DOM操作。
	 * 语法：var element = document.querySelectorAll(selector);
	 * 其中，selector为CSS选择器，element是选取到的多个元素，以数组的形式返回。
	 */
	// 1、通过id选取选取id为class1的所有元素
	const elements = document.querySelectorAll("#example");
	Console("querySelectorAll()=>1、通过id选取选取id为element的元素", elements);
	// 2、通过类名选取选取类名为class的所有元素
	const classEles = document.querySelectorAll(".class");
	Console("querySelectorAll()=>2、通过类名选取选取类名为class的元素", classEles);
	// 3、通过标签名选取选取标签名为div的所有元素
	const divEles = document.querySelectorAll("div");
	Console("querySelectorAll()=>3、通过标签名选取选取标签名为div的元素", divEles);
	// 4、通过属性名选取选取属性名为div1的所有元素
	const div1Eles = document.querySelectorAll("[name=div1]");
	Console("querySelectorAll()=>4、通过属性名选取选取属性名为div1的元素素", div1Eles);
	// 5、通过使用嵌套CSS选择器取选取id为example并且class为class的所有元素
	const exampleDiv1Eles = document.querySelectorAll("#example,.class");
	Console("querySelectorAll()=>5、通过使用嵌套CSS选择器取选取id为example并且class为class的元素", exampleDiv1Eles);
	// 6、补充：总之querySelectorAll()支持css选择器的语法来获取元素，
	// 7、补充：注意css选择器语法正确，如果语法不正确则选择不到元素。
	// 8、补充：querySelectorAll()方法返回值是NodeList对象。
	// 9、补充：querySelectorAll()方法只能在最新版本的现代浏览器中使用，如果要在旧版浏览器中使用需要使用polyfill或其他插件。


})();