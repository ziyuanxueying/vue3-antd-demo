const menu = [
  {
    name: 'index',
    title: '首页',
    icon: 'HomeOutlined',
    path: '/index'
  },
  {
    name: 'test',
    title: '测试',
    icon: 'HomeOutlined',
    subs: [
      {
        path: '/test',
        name: 'test',
        icon: '',
        title: '测试1'
      },
      {
        path: '/about',
        name: 'about',
        icon: '',
        title: '关于'
      }
    ]
  }
]

module.exports = menu
