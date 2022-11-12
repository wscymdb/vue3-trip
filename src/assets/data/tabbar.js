export const tabBarInfo = [
  {
    name: '首页',
    path: '/home',
    icon: 'icon-shouye',
  },
  {
    name: '收藏',
    path: '/favor',
    icon: 'icon-xihuan',
  },
  {
    name: '订单',
    path: '/order',
    icon: 'icon-dingdan',
  },
  {
    name: '消息',
    path: '/message',
    icon: 'icon-31xiaoxi',
  },
]

// 路由映射表
export const tabBarRouterMap = new Map([
  [0, '/home'],
  [1, '/favor'],
  [2, '/order'],
  [3, '/message'],
])

export const jumpByRouterMap = {
  '/home': 0,
  '/favor': 1,
  '/order': 2,
  '/message': 3,
}
