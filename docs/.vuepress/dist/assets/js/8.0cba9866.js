(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{208:function(t,a,s){"use strict";s.r(a);var n=s(28),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"务实javascript基础（一）-数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#务实javascript基础（一）-数据类型"}},[t._v("#")]),t._v(" 务实javascript基础（一） 数据类型")]),t._v(" "),s("blockquote",[s("p",[t._v("javascript是一门 "),s("strong",[t._v("动态类型")]),t._v("的语言，所以在申明变量时不需要像"),s("strong",[t._v("静态类型")]),t._v("语言一样指定类型。所以js的变量是没有类型的，js的类型指的是变量值的类型。")])]),t._v(" "),s("p",[t._v("javascrpit共有七种数据类型。其中可分为六种基本数据类型（值类型），一种复杂数据类型（引用类型）。")]),t._v(" "),s("p",[s("strong",[t._v("基本数据类型")])]),t._v(" "),s("ul",[s("li",[t._v("number")]),t._v(" "),s("li",[t._v("string")]),t._v(" "),s("li",[t._v("boolean")]),t._v(" "),s("li",[t._v("null")]),t._v(" "),s("li",[t._v("undefined")]),t._v(" "),s("li",[t._v("symbol")])]),t._v(" "),s("p",[s("strong",[t._v("引用类型")])]),t._v(" "),s("ul",[s("li",[t._v("object")])]),t._v(" "),s("p",[t._v("本文将通过四个方面介绍javascript的数据类型，抛砖引玉，与大家共同学习。")]),t._v(" "),s("ol",[s("li",[t._v("常用数据类型介绍")]),t._v(" "),s("li",[t._v("值类型与引用类型的区别")]),t._v(" "),s("li",[t._v("数据类型转换")]),t._v(" "),s("li",[t._v("数据类型判断")])]),t._v(" "),s("h2",{attrs:{id:"一、常用数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、常用数据类型"}},[t._v("#")]),t._v(" 一、常用数据类型")]),t._v(" "),s("p",[t._v("这一部分我想分别介绍一下这些数据类型的一些经常混淆的概念，不会介绍具体的操作api，因为这部分网上书上写的更加全面，只要花时间就可以很容易掌握。")]),t._v(" "),s("h3",{attrs:{id:"_1-1-number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-number"}},[t._v("#")]),t._v(" 1.1 number")]),t._v(" "),s("h3",{attrs:{id:"_1-2-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-string"}},[t._v("#")]),t._v(" 1.2 string")]),t._v(" "),s("h3",{attrs:{id:"_1-3-null"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-null"}},[t._v("#")]),t._v(" 1.3 null")]),t._v(" "),s("h2",{attrs:{id:"二、值类型与引用类型的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、值类型与引用类型的区别"}},[t._v("#")]),t._v(" 二、值类型与引用类型的区别")]),t._v(" "),s("h3",{attrs:{id:"_2-1值类型的复制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1值类型的复制"}},[t._v("#")]),t._v(" 2.1值类型的复制")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'1';")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'2'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ming'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ming;")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ming")]),t._v("\n")])])]),s("h2",{attrs:{id:"三、数据类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、数据类型转换"}},[t._v("#")]),t._v(" 三、数据类型转换")]),t._v(" "),s("h2",{attrs:{id:"四、数据类型判断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、数据类型判断"}},[t._v("#")]),t._v(" 四、数据类型判断")])])}),[],!1,null,null,null);a.default=r.exports}}]);