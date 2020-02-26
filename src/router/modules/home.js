/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout';

const homeRouter = {
  path: '/home',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Home',
  meta: {
    title: '首页',
    icon: 'home',
    affix: true
  },
  children: [
    {
      path: 'home-page',
      component: () => import('@/views/home/index'),
      name: 'HomePage',
      children: [
        {
          path: 'home-page',
          component: () => import('@/views/home/index'),
          name: 'HomePage',
          meta: {
            title: '首页'
          }
        }
      ]
    }
  ]
};

export default homeRouter;
