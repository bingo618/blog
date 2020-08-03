# JavaScript中new运算符实现

`**new**`**运算符**创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。`new` 关键字会进行如下的操作：

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function() {
  console.log("hello: " + this.name + "!");
};

var user1 = new Person("bingo", 18);
console.log(user1.name);
console.log(user1.name);
user1.sayName();
```



1. 创建一个空的简单JavaScript对象（即`{}`）；
1. 链接该新创建的对象（即设置该对象的__proto__）到该函数的原型对象prototype上 ；
1. 将步骤1新创建的对象作为 `this` 的上下文 ；
1. 如果该函数没有返回对象类型 `Object`(`包含Functoin`, `Array`, `Date`, `RegExg`, `Error`)，则返回新创建的对象。



```javascript
function myNew() {
  //因为arguments是类数组，所以借用数组的shift方法取第一各参数也就是构造函数；
  var func = [].shift.call(arguments);
  //判断第一个参数是否是function类型
  if (typeof func !== "function") {
    throw "myNew function the first param must be a function";
  }
  //创建一个新对象
  var newObj = {};
  //链接新对象的__proto__到构造函数的prototype属性;
  newObj.__proto__ = func.prototype;
  //在func调用时指定函数执行时的this，为新对象
  var result = func.apply(newObj, arguments);
  //判断构造函数是否又返回值
  var isObject = typeof result === "object" && result !== null;
  var isFunction = typeof result === "function";
  return isObject || isFunction ? result : newObj;
}

var user3 = myNew(Person, "bin", 28);
console.log(user3.name);
user3.sayName();
```






