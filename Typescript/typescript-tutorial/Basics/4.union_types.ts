/**
 * 联合类型（Union Types）表示取值可以为多种类型中的一种。
 * 
 * 联合类型使用 | 分隔每个类型。
 */
let myFavoriteNumber: string | number;   // 允许myFavoriteNumber的类型是string 或 number，但不能是其他类型。
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

/**
 * 访问联合类型的属性或方法
 * 
 * 当TypeScript不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法。
 * 
 * function getLength(something: string | number): number {
 *   return something.length;
 * }
 * 
 * 上例中，length 不是 string 和 number 的共有属性，所以会报错。
 */
function getString(something: string | number): string {
  // 访问共有属性是没有问题的
  return something.toString();
}

/**
 * 联合类型的变量 在被赋值的时候，会根据类型推论的规则推断出一个类型：
 */
let babyFavoriteNumber: string | number = 'seven';
console.log(babyFavoriteNumber.length);
babyFavoriteNumber = 7;
console.log(babyFavoriteNumber.length);  // 编译报错
