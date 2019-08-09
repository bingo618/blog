module.exports = {
    title: '个人主页',
    description: '胡斌的博客',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'javascript', link: '/javascript/' },
            { text: 'External', link: 'https://google.com' }
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
