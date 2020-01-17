/**
 * 任意值
 * 任意值（Any）用来表示允许赋值为任意类型。
 * 
 * 如果是一个普通类型，在赋值过程中改变类型是不被允许的，但如果是 any 类型，则允许被赋值为任意类型。
 * 
 * 在任意值上访问任何属性都是允许的，也允许调用任何方法。
 * 
 * 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
 */
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

anyThing.sayHello();
anyThing.myName.setFirstName('Cat');

/**
 * 未声明类型的变量
 * 
 * 变量如果在声明的时候，未指定其类型，那么它会被识别任意值类型。
 */
let something;
something = 'seven';
something = 7;

something.setName('Tom');

// 等价于：
// let something: any;
// something = 'seven';
// something = 7;

// something.setName('Tom');