module.exports = {
    title: 'BINGO的博客',
    description: '记录工作和生活',
    themeConfig: {
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '前端开发',
                link: '/javascript/'
            },
            {
                text: '生活感悟',
                link: '/life/'
            },
            {
                text: 'Github',
                link: 'https://github.com/bingo618'
            }
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
