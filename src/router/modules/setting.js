/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout';

const chartsRouter = {
  path: '/setting',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Setting',
  meta: {
    title: '设置',
    icon: 'setting'
  },
  children: [
    {
      path: 'account',
      component: () => import('@/views/setting/account'),
      redirect: 'account-manage',
      name: 'Account',
      meta: {
        title: '账号权限',
        noCache: true
      },
      children: [
        {
          path: 'account-manage',
          component: () => import('@/views/setting/account/account-manage'),
          name: 'AccountManage',
          meta: {
            title: '账号管理',
            noCache: true
          }
        },
        {
          path: 'role-manage',
          component: () => import('@/views/setting/account/role-manage'),
          name: 'RoleManage',
          meta: {
            title: '角色管理',
            noCache: true
          }
        },
        {
          path: 'operational-log',
          component: () => import('@/views/setting/account/operational-log'),
          name: 'OperationalLog',
          meta: {
            title: '操作日志',
            noCache: true
          }
        }
      ]
    },
    {
      path: 'setting-base',
      component: () => import('@/views/setting/base'),
      name: 'SettingBase',
      redirect: 'wx-authorize',
      meta: {
        title: '基本设置',
        noCache: true
      },
      children: [
        {
          path: 'wx-authorize',
          component: () => import('@/views/setting/base/wx-authorize'),
          name: 'WxAuthorize',
          meta: {
            title: '微信授权',
            noCache: true
          }
        },
        {
          path: 'wx-config',
          component: () => import('@/views/setting/base/wx-config'),
          name: 'WxConfig',
          meta: {
            title: '企微配置',
            noCache: true
          }
        },
        {
          path: 'contact-set',
          component: () => import('@/views/setting/base/contact-set'),
          name: 'ContactSet',
          meta: {
            title: '客户联系配置',
            noCache: true
          }
        },
        {
          path: 'change-password',
          component: () => import('@/views/setting/base/change-password'),
          name: 'ChangePassword',
          meta: {
            title: '修改密码',
            noCache: true
          }
        },
        {
          path: 'account-pay',
          component: () => import('@/views/setting/base/pay'),
          name: 'AccountPay',
          meta: {
            title: '支付配置',
            noCache: true
          }
        }
      ]
    },
    {
      path: 'setting-public',
      component: () => import('@/views/setting/public'),
      name: 'SettingPublic',
      redirect: 'account-goods-detail',
      meta: {
        title: '公共页面设置',
        noCache: true
      },
      children: [
        {
          path: 'account-goods-detail',
          component: () => import('@/views/setting/public/goods-detail'),
          name: 'AccountGoodsDetail',
          meta: {
            title: '商品详情页设置',
            noCache: true
          }
        },
        {
          path: 'shop-car',
          component: () => import('@/views/setting/public/shop-car'),
          name: 'ShopCar',
          meta: {
            title: '购物袋设置',
            noCache: true
          }
        }
      ]
    },
    {
      path: 'mini-program',
      component: () => import('@/views/setting/mini-program'),
      name: 'MiniProgram',
      meta: {
        title: '小程序授权',
        noCache: true
      }
    }
  ]
};

export default chartsRouter;
