module.exports = {
  title: "BINGO的博客",
  description: "记录工作和生活",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "前端开发",
        link: "/javascript/runtime",
      },
      // {
      //     text: '生活感悟',
      //     link: '/life/'
      // },
      {
        text: "Github",
        link: "https://github.com/bingo618",
      },
    ],
    sidebar: {
      "/javascript/": [
        ["runtime", "JavaScript在浏览器中是如何执行的？"],
        ["JavaScript内存管理", "JavaScript内存管理"],
        ["执行上下文与执行上下文栈", "执行上下文与执行上下文栈"],
        ["作用域，作用域链与闭包", "作用域，作用域链与闭包"],
        ["JavaScript中的this", "JavaScript中的this"],
        [
          "JavaScript事件循环机制Event Loop",
          "JavaScript事件循环机制Event Loop",
        ],
        [
          "JavaScript中call、apply、bind函数的实现",
          "JavaScript中call、apply、bind函数的实现",
        ],
        ["JavaScript中new运算符实现", "JavaScript中new运算符实现"],
      ],
    },
  },
};
