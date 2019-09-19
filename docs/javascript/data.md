# 务实javascript基础（一） 数据类型

> javascript是一门 **动态类型**的语言，所以在申明变量时不需要像**静态类型**语言一样指定类型。所以js的变量是没有类型的，js的类型指的是变量值的类型。

javascrpit共有七种数据类型。其中可分为六种基本数据类型（值类型），一种复杂数据类型（引用类型）。

**基本数据类型**

* number
* string
* boolean
* null
* undefined
* symbol

**引用类型**

* object

本文将通过四个方面介绍javascript的数据类型，抛砖引玉，与大家共同学习。

1. 常用数据类型介绍
2. 值类型与引用类型的区别
3. 数据类型转换
4. 数据类型判断

##  一、常用数据类型

这一部分我想分别介绍一下这些数据类型的一些经常混淆的概念，不会介绍具体的操作api，因为这部分网上书上写的更加全面，只要花时间就可以很容易掌握。

### 1.1 number

### 1.2 string

### 1.3 null

## 二、值类型与引用类型的区别

### 2.1值类型的复制

```javascript
var a = '1';
b = a;
b = '2'
console.log(a) //'1';
console.log(b) //'2'

var obj = {name: 'bin'};
fo = obj;
fo.name = 'ming';
console.log(obj.name) //ming;
console.log(fo.name)  //ming
```







## 三、数据类型转换

##  四、数据类型判断



