# JavaScript中的this

this 是和**执行上下文**绑定的，也就是说每个执行上下文中都有一个 this。
执行上下文主要分为三种——全局执行上下文、函数执行上下文和 eval 执行上下文，所以对应的 this 也只有这三种——全局执行上下文中的 this、函数中的 this 和 eval 中的 this。

![b398610fd8060b381d33afc9b86f988d.png](https://cdn.nlark.com/yuque/0/2020/png/184136/1591607698431-4001d462-9be1-4d2c-8105-f076dd2fd81d.png#align=left&display=inline&height=615&margin=%5Bobject%20Object%5D&name=b398610fd8060b381d33afc9b86f988d.png&originHeight=615&originWidth=1142&size=269159&status=done&style=none&width=1142)
**作用域链和 this 是两套不同的系统，它们之间基本没太多联系。 所以每个函数的 this 是在调用时被绑定的，完全取决于函数的调用位置(也就是函数的调用方法)。**
**
## 一、绑定规则
### 1.1 默认绑定
独立函数调用时，`this` 指向全局对象，如果使用严格模式，那么全局对象无法使用默认绑定， `this`绑定至 `undefined`。
```javascript
function foo() {
  console.log(this.a);
}

var a = 2;
foo();  // 2
```
严格模式下：
```javascript
function foo() {
  "use strict";
  console,log(this.a);
}

var a = 2;
foo();  // TypeError: this is undefined
```
### 1.2 隐式绑定
当函数引用有上下文对象时（即函数作为引用属性被添加到对象中），隐式绑定规则会把函数调用中的 `this` 绑定到这个上下文对象。**对象属性引用链中只有最顶层或者说最后一层会影响调用位置。**
**
```javascript
function foo() { 
  console.log( this.a );
}
var obj2 = { 
  a: 42,
	foo: foo 
};
var obj1 = { 
  a: 2,
	obj2: obj2 
};
obj1.obj2.foo(); // 42
```
#### 隐式丢失


绑定至上下文对象的函数被赋值给一个新的函数，然后调用这个新的函数时：
```javascript
function foo() {
  console.log( this.a);
}

var obj = {
  a: 2,
  foo: foo
};

var bar = obj.foo; //函数别名
var a = "这是全局变量喔";
bar();  // "这是全局变量喔"
```
传入回调函数时：
```javascript
function foo() {
  console.log( this.a);
}

function doFoo(fn) {
  fn();  // <-- 调用位置
}

var obj = {
  a: 2,
  foo: foo
};

var a = "这是全局变量喔";
doFoo( obj.foo );  // "这是全局变量喔"
```
其实这就是第一种情况的变种，实际上参数传递就是一种隐式赋值。除了开发人员自定义的函数，在将函数传入语言内置的函数比如 `setTimeout` 时，同样会发生隐式丢失的情况。

### 1.3 显示绑定
显式绑定的核心是 JavaScript 内置的 `call(..)` 和 `apply(..)` 方法，这两个方法在 JavaScript 提供的绝大多数函数以及开发者自己创建的所有函数上都可以使用。
`call(..)` 和 `apply(..)`的第一个参数是一个对象（二者区别在后面传入的参数形式，这里不是重点，不讨论），他们会将 `this` 绑定到这个对象上。因为你可以直接指定 `this` 绑定的对象，所以这条规则被称为显式绑定。
```javascript
function foo() {
  console.log( this.a);
}

var obj = {
  a: 2
};

foo.call(obj);  // 2
```
如果 `call` 或者 `apply` 传入的第一个参数是原始值（字符串类型、布尔类型或者数字类型），那么该原始值会被转换成它的对象形式（new String()、new Boolean() 或 new Number()），俗称“装箱”。

### 1.4  new绑定
使用 `new` 来调用函数时，会自动执行下面的操作：

1. 创建一个全新的对象
1. 这个新对象会被执行 [[原型]] 连接
1. 这个新对象会绑定到函数调用的 `this`
1. 如果函数没有返回其他对象，那么 `new` 表达式中的函数调用会自动返回这个新对象
```javascript
function foo() {
  this.a = a;
}

var bar = new foo(2);
console.log(bar.a);  // 2
```
使用 `new` 来调用 `foo(..)` 时，会构造一个新对象并把它绑定到 `foo(..)` 调用中的 `this` 上。

## 二、绑定优先级


函数是否在 `new` 中调用（`new` 绑定）？如果是的话 `this` 绑定的是新创建的对象。


```javascript
var bar = new foo();
```


函数是否通过 `call`、`apply` （显示绑定）或者硬绑定？如果是的话，`this` 绑定的是指定的对象。


```javascript
var bar = foo.call(obj2);
```


函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，`this` 绑定的是那个上下文对象。


```javascript
var bar = obj1.foo();
```


如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 `undefined`，否则绑定到全局对象。


```javascript
var bar = foo();
```
