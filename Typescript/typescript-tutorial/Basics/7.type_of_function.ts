/**
 * 函数的类型
 * ------------------------------
 * 函数是 JavaScript 中的一等公民
 * 
 * 函数声明
 * 函数表达式
 * 
 * 一个函数有输入和输出，要在TypeScript中对其进行约束，需要把输入和输出都考虑到，
 * 其中函数声明的类型定义较简单：
 */
function sum(x: number, y: number): number {
  return x + y;
}

// 注意，输入多余的（或者少于要求的）参数，是不被允许的：
// sum(1, 2, 3);   // error
// sum(1);         // error


/**
 * 函数表达式
 * 
 * 在 TypeScript 的类型定义中， => 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
 * 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
 */
let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
}


/**
 * 用接口定义函数的形状
 * 
 * 我们也可以使用接口的方式来定义一个函数需要符合的形状：
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== 1;
};


/**
 * 可选参数
 * 
 * 前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选参数呢？
 * 与接口中的可选属性类似，我们用 ? 表示可选的参数。
 * 注意，可选参数必须接在必需参数后面，可选参数后面不允许再出现必需参数！！！
 */
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName} ${lastName}`;
  } else {
    return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tim = buildName('Tim');
console.log('tomcat: ', tomcat);
console.log('tim: ', tim);


/**
 * 参数默认值
 * 
 * 在 ES6 中，我们允许给函数的参数添加默认值， TypeSript 会将添加了默认值的参数识别为可选参数。
 * 此时，就不受[可选参数必须在必需参数后面]的限制了。
 */
function buildName_2(firstName: string = 'Tom', lastName: string): string {
  return `${firstName} ${lastName}`;
}
let cat = buildName_2(undefined, 'Cat');


/**
 * 剩余参数
 * 
 * ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数(rest 参数)。
 * 注意，rest 参数只能是最后一个参数。
 */
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
  });
}
let a = [];
push(a, 1, 2, 3);


/**
 * 重载
 * 
 * 重载允许一个函数接受不同数量或类型的参数时，做出不同的处理。
 * 
 * TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
 */
// 重载定义多个 reverse 的函数类型：
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}