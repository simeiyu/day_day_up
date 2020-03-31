/**
 * 对象的类型——接口
 * --------------------
 * 在TypeScript中，我们使用接口（Interfaces）来定义对象的类型。
 * 
 * 接口一般首字母大写。
 * 定义的变量比接口少了一些属性或多一些属性都是不允许的。
 * 
 * 赋值的时候，变量的形状必须和接口的形状保持一致。
 */

//  简单的例子
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 24
};

// 少了属性
// let tim: Person = {
//   name: 'Tim'
// };

// 多了属性
// let tam: Person = {
//   name: 'Tam',
//   age: 12,
//   gender: 'male'
// }

/**
 * 可选属性 —— 有时我们希望不要完全匹配一个形状，那么可以用可选属性。
 * 
 * 可选属性的含义是该属性可以不存在。
 * 但仍然不允许添加未定义的属性。
 */
interface Dog {
  name: string;
  age?: number;
}

let samoye: Dog = {
  name: 'Gucci'
}

let akita: Dog = {
  name: 'Sanyn',
  age: 3,
  // color: 'red'
}

/**
 * 任意属性
 */
interface Cat {
  name: string;
  age?: number;
  [propName: string]: any;
}

let feir: Cat = {
  name: 'Mimi',
  color: 'white',
  gender: 'male'
}

// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Cat2 {
  name: string;
  age?: number;  // 不是 string 类型的子集，将报错
  [propName: string]: string | number;
}

/**
 * 只读属性
 * 
 * 如果希望某些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性。
 */
interface Bird {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let feng: Bird = {
  id: 1,                // id 是只读属性，必须在创建的时候赋值。
  name: 'Fenghuang'
}
feng.id = 2;            // id 是只读属性
