/**
 * 原始数据类型
 * 
 * JavaScript的类型分为两种：原始数据类型（primitive data type）和对象类型（Object types）。
 * 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 。
 */


//  ------------------------------------------------------------
//  布尔值，使用 boolean 定义布尔值类型。 
let isDone: boolean = false;

/**
 * 使用构造函数 Boolean 创造的对象不是布尔值： let createdByNewBoolean: boolean = new Boolean(1);
 * 
 * 事实上 new Boolean() 返回的是一个 Boolean 对象， 
 * 直接调用 Boolean 也可以返回一个 boolean 类型。    
 * 
 * 在TypeScript中，boolean 是JavaScript中的基本类型，而 Boolean 是 JavaScript 中的构造函数。其他基本类型（除了null 和 undefined）一样。
*/


//  ------------------------------------------------------------
//  数值，使用 number 定义数值类型。
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010; // ES6 中的二进制表示法
let octalLiteral: number = 0o744;   // ES6 中的八进制表示法
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
//  ES6 中的二进制和八进制会被编译为十进制数字。


//  ------------------------------------------------------------
//  字符串，使用 string 定义字符串类型。
let myName: string = 'Tom';
let myAge: number = 24;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

console.log(sentence);


//  ------------------------------------------------------------
//  空值，JavaScript 没有空值（Void）的概念，在TypeScript中，可以用 void 表示没有任何返回值的函数。
function alertName(): void {
  alert('My name is Tom.');
}
// *声明一个void 类型的变量没有什么用，因为你只能将他赋值为 undefined 和 null： let unusable: void = undefined;


//  ------------------------------------------------------------
//  Null 和 Undefined
//  在TypeScript中，可以使用 null 和 undefined 来定义这两个原始数据类型：
let u: undefined = undefined;
let n: null = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量。
let num: number = undefined; // 这样不会报错
let u2: undefined;           // 这样不会报错
let num2: number = u2;       // 这样不会报错
