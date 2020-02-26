/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout';

const chartsRouter = {
  path: '/goods',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Goods',
  meta: {
    title: '商品',
    icon: 'goods'
  },
  children: [
    {
      path: 'goods-manager',
      component: () => import('@/views/goods/goods-manager'),
      name: 'GoodsManager',
      meta: {
        title: '商品管理',
        noCache: true
      }
    },
    {
      path: 'category-manager',
      component: () => import('@/views/goods/category-manager'),
      name: 'CategoryManager',
      meta: {
        title: '品类管理',
        noCache: true
      }
    },
    {
      path: 'standard-manager',
      component: () => import('@/views/goods/standard-manager'),
      name: 'StandardManager',
      meta: {
        title: '规格管理',
        noCache: true
      }
    },
    {
      path: 'publish-manager',
      component: () => import('@/views/goods/publish-manager'),
      name: 'PublishManager',
      redirect: 'batch-upper',
      meta: {
        title: '发布管理',
        noCache: true
      },
      children: [
        {
          path: 'batch-upper',
          component: () => import('@/views/goods/publish-manager/batch-upper'),
          name: 'BatchUpper',
          meta: {
            title: '批量上架商品库',
            noCache: true
          }
        },
        {
          path: 'wait-upper',
          component: () => import('@/views/goods/publish-manager/wait-upper'),
          name: 'WaitUpper',
          meta: {
            title: '待上架列表',
            noCache: true
          }
        },
        {
          path: 'batch-lower',
          component: () => import('@/views/goods/publish-manager/batch-lower'),
          name: 'BatchLower',
          meta: {
            title: '批量下架商品库',
            noCache: true
          }
        },
        {
          path: 'wait-lower',
          component: () => import('@/views/goods/publish-manager/wait-lower'),
          name: 'WaitLower',
          meta: {
            title: '待下架列表',
            noCache: true
          }
        }
      ]
    },
    {
      path: 'label',
      component: () => import('@/views/goods/label'),
      name: 'Label',
      meta: {
        title: '商品标签',
        noCache: true
      }
    }
  ]
};

export default chartsRouter;
