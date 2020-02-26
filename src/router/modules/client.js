/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout';

const chartsRouter = {
  path: '/client',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Client',
  meta: {
    title: '客户',
    icon: 'client'
  },
  children: [
    {
      path: 'client-list',
      component: () => import('@/views/client/list'),
      name: 'ClientList',
      meta: {
        title: '客户列表',
        noCache: true
      }
    },
    {
      path: 'client-leval',
      component: () => import('@/views/client/leval'),
      name: 'ClientLeval',
      meta: {
        title: '会员等级',
        noCache: true
      }
    },
    {
      path: 'client-tag-manage',
      component: () => import('@/views/client/tag-manage'),
      name: 'ClientTagManage',
      meta: {
        title: '标签管理',
        noCache: true
      }
    },
    {
      path: 'client-draw',
      component: () => import('@/views/client/draw'),
      name: 'ClientDraw',
      meta: {
        title: '客户画像',
        noCache: true
      }
    },
    {
      path: 'client-integral',
      component: () => import('@/views/client/integral'),
      name: 'ClienIntegral',
      meta: {
        title: '积分管理',
        noCache: true
      }
    }
  ]
};

export default chartsRouter;
