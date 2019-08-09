module.exports = {
    title: '个人主页',
    description: '胡斌的博客',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'javascript', link: '/javascript/' },
            { text: 'Github', link: 'https://github.com/bingo618' }
        ],
        sidebar: {
            '/javascript/': [
                ['function', '函数'],
                ['var', '作用域'],
                ['prototype', '原型与原型链']
            ]
        }
    }
};
