# JavaScript中call、apply、bind函数的实现

## 一、call
`**call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。**`
`**语法：fun.call(thisArg, arg1, arg2, ...)**`
```javascript
var bar = {name: 1};
function foo(){
	console.log(this.name)
}
foo.call(bar) //1
```

1. call 改变了 this 的指向，指向到 foo；
1. bar 函数执行了；
### call实现
```javascript
Function.prototype.myCall = function(obj) {
  //判断obj是否存在，存在返回一个与给定值对应类型的对象，不存在相当于在全局环境下调用
  obj = obj ? Object(obj) : window;
  //为对象添加一个属性fn,属性的值就是调用call方法的函数本身；
  obj.fn = this;
  //取参数
  var args = [...arguments].slice(1);
  //在传入对象下调用函数，函数this指向该对象
  var result = obj.fn(args);
  //删除添加的属性
  delete obj.fn;
  //若函数又返回值则返回
  return result;
};
```
## 二、apply
**`apply()`调用一个指定`this`值的函数, 接收作为一个数组或者类数组对象提供的参数。**
**语法： `func.apply(thisArg, [argsArray])`**
### apply实现
```javascript
Function.prototype.myApply = function(obj) {
  obj = obj ? Object(obj) : window;
  obj.fn = this;
  //取参数数组
  var args = [...arguments][1];
  var result;
  if (!args) {
    result = obj.fn();
  } else {
    result = obj.fn(...args);
  }
  return result;
};

```
## 三、bind
`bind() `方法会创建一个新函数。当这个新函数被调用时，`bind()` 的第一个参数将作为它运行时的 this，之后的**一序列参数将会在传递的实参前传入**作为它的参数。
```javascript
var foo = {
    value: 1
};
function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}
var bindFoo = bar.bind(foo, 'daisy');
//可以继续传递参数
bindFoo('18');
```
**bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效，new绑定this的优先级大于bind**
```javascript
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
```
**尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，说明绑定的 this 失效了，这个时候的 this 已经指向了 obj。**
**
### bind实现
```javascript
// 第三版
Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fbound = function () {

        var bindArgs = Array.prototype.slice.call(arguments);
      /**
      	当作为构造函数时，this 指向实例，self 指向绑定函数，
      	因为下面一句 `fbound.prototype = this.prototype;`，
      	已经修改了 fbound.prototype 为 绑定函数的 prototype，
      	此时结果为 true，当结果为 true 的时候，this 指向实例。    
    	**/
      /**
      	当作为普通函数时，this 指向 window，self 指向绑定函数，
        此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
      **/
        self.apply(this instanceof self ? this : context, args.concat(bindArgs));
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值
    fbound.prototype = this.prototype;
    return fbound;
}
```
