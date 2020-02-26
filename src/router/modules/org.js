/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout';

const chartsRouter = {
  path: '/org',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Org',
  meta: {
    title: '组织',
    icon: 'tree'
  },
  children: [
    {
      path: 'organize',
      component: () => import('@/views/org/organize'),
      name: 'Mrganize',
      meta: {
        title: '组织管理',
        noCache: true
      }
    },
    {
      path: 'employee',
      component: () => import('@/views/org/employee'),
      name: 'Employee',
      meta: {
        title: '在职人员管理',
        noCache: true
      }
    },
    {
      path: 'dimission',
      component: () => import('@/views/org/dimission'),
      name: 'Dimission',
      meta: {
        title: '离职人员管理',
        noCache: true
      }
    },
    {
      path: 'customer-allocation',
      component: () => import('@/views/org/customer-allocation'),
      name: 'CustomerAllocation',
      meta: {
        title: '客户分配设置',
        noCache: true
      }
    },
    {
      path: 'brokerage',
      component: () => import('@/views/org/brokerage'),
      name: 'Brokerage',
      meta: {
        title: '佣金管理',
        noCache: true
      }
    }
  ]
};

export default chartsRouter;
