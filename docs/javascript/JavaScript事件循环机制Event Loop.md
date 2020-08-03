# JavaScript事件循环机制Event Loop

![e2582e980632fd2df5043f81a11461c6.png](https://cdn.nlark.com/yuque/0/2020/png/184136/1592103476845-d68c6c76-246c-4082-8008-4f23f87a6d53.png#align=left&display=inline&height=834&margin=%5Bobject%20Object%5D&name=e2582e980632fd2df5043f81a11461c6.png&originHeight=834&originWidth=1142&size=254131&status=done&style=none&width=1142)
## 一、进程与线程
### 1.1 进程


**一个进程就是一个程序的运行实例**。详细解释就是，启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程，我们把这样的一个运行环境叫**进程。**
### 1.2 线程


**线程是依附于进程的，而进程中使用多线程并行处理能提升运算效率。**
### ![3380f0a16c323deda5d3a300804b95da.png](https://cdn.nlark.com/yuque/0/2020/png/184136/1592103893717-1ff503a2-74c3-4226-b412-524d3c4b1acb.png#align=left&display=inline&height=575&margin=%5Bobject%20Object%5D&name=3380f0a16c323deda5d3a300804b95da.png&originHeight=575&originWidth=1142&size=207515&status=done&style=none&width=1142)
### 1.3 线程与进程的特点

1. 进程中的任意一线程执行出错，都会导致整个进程的崩溃。
1. 线程之间共享进程中的数据。

![d0efacd7f299ed99e776cb97da2a799e.png](https://cdn.nlark.com/yuque/0/2020/png/184136/1592104009959-c4da9053-ccbf-4853-a445-ca90cf25c7b1.png#align=left&display=inline&height=425&margin=%5Bobject%20Object%5D&name=d0efacd7f299ed99e776cb97da2a799e.png&originHeight=789&originWidth=1142&size=263329&status=done&style=none&width=615)

3. 当一个进程关闭之后，操作系统会回收进程所占用的内存。
3. 进程之间的内容相互隔离。



## 二、单进程浏览器架构


**单进程浏览器是指浏览器的所有功能模块都是运行在同一个进程里**，这些模块包含了网络、插件、JavaScript 运行环境、渲染引擎和页面等。其实早在 2007 年之前，市面上浏览器都是单进程的。
![6ddad2419b049b0eb2a8036f3dfff1ca.png](https://cdn.nlark.com/yuque/0/2020/png/184136/1592104162519-cc4b0cc8-2764-4581-8d4a-f8ea0a476562.png#align=left&display=inline&height=469&margin=%5Bobject%20Object%5D&name=6ddad2419b049b0eb2a8036f3dfff1ca.png&originHeight=469&originWidth=1142&size=208805&status=done&style=none&width=1142)
如此多的功能模块运行在一个进程里，是导致单进程浏览器**不稳定、不流畅和不安全**的一个主要因素。

### 2.1 不稳定
浏览器中运行很多插件插件（Web 视频、Web 游戏），一个**插件**的意外崩溃会引起整个浏览器的崩溃。一些复杂的 JavaScript 代码就有可能引起**渲染引擎模块**的崩溃，渲染引擎的崩溃也会导致整个浏览器的崩溃。
### 2.2 **不流畅
**
所有页面的渲染模块、JavaScript 执行环境以及插件都是运行在同一个线程中的，这就意味着同一时刻只能有一个模块可以执行。一段复杂的js脚本如果执行时间过长，其他模块就无法执行，这样就会导致整个浏览器失去响应，变卡顿。    

### 2.3 不安全
插件可以使用 C/C++ 等代码编写，通过插件可以获取到操作系统的任意资源，当你在页面运行一个插件时也就意味着这个插件能完全操作你的电脑。如果是个恶意插件，那么它就可以释放病毒、窃取你的账号密码，引发安全性问题。

## 三、多进程浏览器架构
![b61cab529fa31301bde290813b4587fc.png](https://cdn.nlark.com/yuque/0/2020/png/184136/1592104629531-bb8c7227-d59c-442b-9d19-c35631c6e468.png#align=left&display=inline&height=494&margin=%5Bobject%20Object%5D&name=b61cab529fa31301bde290813b4587fc.png&originHeight=494&originWidth=1142&size=144101&status=done&style=none&width=1142)
最新的 Chrome 浏览器包括：1 个**浏览器（Browser）主进程**、1 个** GPU 进程**、1 个**网络（NetWork）进程**、多个**渲染进程**和**多个插件进程**。
所以仅仅打开了 1 个页面，为什么有 4 个进程？因为打开 1 个页面至少需要 1 个网络进程、1 个浏览器进程、1 个 GPU 进程以及 1 个渲染进程，共 4 个；如果打开的页面有运行插件的话，还需要再加上 1 个插件进程。

- **浏览器进程**。主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。
- **渲染进程**。核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。    
- **GPU 进程**。其实，Chrome 刚开始发布的时候是没有 GPU 进程的。而 GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程。
- **网络进程。**主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。
- **插件进程**。主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。
## 四、消息队列和事件循环


每个**渲染进程**都有一个主线程，并且主线程非常繁忙，既要处理 DOM，又要计算样式，还要处理布局，同时还需要处理 JavaScript 任务以及各种输入事件。要让这么多不同类型的任务在主线程中有条不紊地执行，这就需要一个系统来统筹调度这些任务，这个统筹调度系统就是我们今天要讲的**消息队列和事件循环系统。**
**
JavaScript在渲染进程的主线程中运行，所以js的运行环境是**单线程**的。执行js代码就需要一段一段排队执行，执行过程中会接受到一些外部添加的任务如鼠标点击，窗口变换，异步回调，定时任务，所以需要一个如for循环一样的任务管理器一直循环轮询接受新的任务，为了管理这些任务，需要引入**消息队列**，新添加的任务排在队尾，先进先出，任务管理器一直轮询在消息队列中取出要执行的任务。**


### 4.1 宏任务
为了协调这些任务有条不紊地在主线程上执行，页面进程引入了消息队列和事件循环机制，渲染进程内部会维护多个消息队列，比如延迟执行队列(setTimeout)和普通的消息队列。然后主线程采用一个 for 循环，不断地从这些任务队列中取出任务并执行任务。我们把这些消息队列中的任务称为**宏任务**。

- 渲染事件（如解析 DOM、计算布局、绘制）；
- 用户交互事件（如鼠标点击、滚动页面、放大缩小等）；
- JavaScript 脚本执行事件；
- 网络请求完成、文件读写完成事件。



### 4.2 微任务


**异步回调**
**
**第一种是把异步回调函数封装成一个宏任务，添加到消息队列尾部，当循环系统执行到该任务的时候执行回调函数**。setTimeout 和 XMLHttpRequest 的回调函数都是通过这种方式来实现的。

**第二种方式的执行时机是在主函数执行结束之后、当前宏任务结束之前执行回调函数，这通常都是以微任务形式体现的。**
**
**微任务就是一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前。**
**

- 微任务和宏任务是绑定的，每个宏任务在执行时，会创建自己的微任务队列。
- 微任务的执行时长会影响到当前宏任务的时长。比如一个宏任务在执行过程中，产生了 100 个微任务，执行每个微任务的时间是 10 毫秒，那么执行这 100 个微任务的时间就是 1000 毫秒，也可以说这 100 个微任务让宏任务的执行时间延长了 1000 毫秒。所以你在写代码的时候一定要注意控制微任务的执行时长
- 在一个宏任务中，分别创建一个用于回调的宏任务和微任务，无论什么情况下，微任务都早于宏任务执行。



**如果在执行微任务的过程中，产生了新的微任务，同样会将该微任务添加到微任务队列中，V8 引擎一直循环执行微任务队列中的任务，直到队列为空才算执行结束。也就是说在执行微任务过程中产生的新的微任务并不会推迟到下个宏任务中执行，而是在当前的宏任务中继续执行。**
**
```javascript
	
function executor(resolve, reject) {
    let rand = Math.random();
    console.log(1)
    console.log(rand)
    if (rand > 0.5)
        resolve()
    else
        reject()
}
var p0 = new Promise(executor);

var p1 = p0.then((value) => {
    console.log("succeed-1")
    return new Promise(executor)
})


var p3 = p1.then((value) => {
    console.log("succeed-2")
    return new Promise(executor)
})

var p4 = p3.then((value) => {
    console.log("succeed-3")
    return new Promise(executor)
})


p4.catch((error) => {
    console.log("error")
})
console.log(2)
```
**
首先打印 1，rand, 2
如果rand大于0.5
打印 succeed-1  小于0.5 打印error 结束执行
继续打印1， rand,
如果rand大于0.5
打印 succeed-2  小于0.5 打印error 结束执行
继续打印1， rand, 
如果rand大于0.5
打印 succeed-3  小于0.5 打印error 结束执行


**

