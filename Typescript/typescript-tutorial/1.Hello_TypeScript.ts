function sayHello (person: string) {
  return 'Hello, ' + person;
}

let user = "Tom";
console.log(sayHello(user));

// 编译报错：
// let user = [0,1,2];
// console.log(sayHello(user));


/**
 * TypeScript 编译的时候即使报错了，还是会生成编译结果。
 * 
 * 如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可。
 */