/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout';

const chartsRouter = {
  path: '/order',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Order',
  meta: {
    title: '订单',
    icon: 'order'
  },
  children: [
    {
      path: 'order-manage',
      component: () => import('@/views/order/order-manage'),
      name: 'OrderManage',
      meta: {
        title: '订单管理',
        noCache: true
      }
    },
    {
      path: 'after-sale-manage',
      component: () => import('@/views/order/after-sale-manage'),
      name: 'AfterSaleManage',
      meta: {
        title: '售后管理',
        noCache: true
      }
    },
    {
      path: 'after-sale-setting',
      component: () => import('@/views/order/after-sale-setting'),
      name: 'AfterSaleSetting',
      redirect: 'after-sale-setting-reason',
      meta: {
        title: '售后设置',
        noCache: true
      },
      children: [
        {
          path: 'after-sale-setting-reason',
          component: () => import('@/views/order/after-sale-setting/reason'),
          name: 'AfterSaleSettingReason',
          meta: {
            title: '售后原因设置',
            noCache: true
          }
        },
        {
          path: 'after-sale-setting-address',
          component: () => import('@/views/order/after-sale-setting/address'),
          name: 'AfterSaleSettingAddress',
          meta: {
            title: '售后地址管理',
            noCache: true
          }
        },
        {
          path: 'after-sale-setting-option',
          component: () => import('@/views/order/after-sale-setting/option'),
          name: 'AfterSaleSettingOption',
          meta: {
            title: '售后选项',
            noCache: true
          }
        }
      ]
    }
  ]
};

export default chartsRouter;
