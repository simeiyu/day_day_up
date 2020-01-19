/**
 * 数组的类型
 * -----------------
 * 在TypeScript中，数组类型有多种定义方式，比较灵活。
 */

//  类型 + 方括号 表示法
let fibonacci: number[] = [1, 1, 2, 3, 5];


//  数组泛型： Array<elemType>
let generic: Array<number> = [1, 1, 2, 3, 5];


//  用接口表示数组
interface NumberArray {
  [index: number]: number;
}
let fibonacci2: NumberArray = [1, 1, 2, 3, 5];


//  类数组（Array-like Object）不是数组类型，比如 arguments
function sum() {
  let args: number[] = arguments;
}
// 上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
function _sum() {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}
// 事实上，常用的类数组都有自己的接口定义（内置对象），如 IArguments，NodeList，HTMLCollection 等。
function __sum() {
  let args: IArguments = arguments;
}
/**
 * IArguments 是TypeScript中定义好了的类型，它实际上就是：
 * interface IArguments {
 *    [index: number]: any;
 *    length: number;
 *    callee: Function;
 * }
 */


/**
 *  any 在数组中的应用
 * --------------------------
 * 一个比较常见的做法是， 用 any 表示数组中允许出现任意类型：
 */
let list: any[] = ['xcatliu', 25, { websit: 'http://xcatliu.com'}];
