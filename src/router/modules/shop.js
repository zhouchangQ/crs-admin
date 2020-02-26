/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout';
const chartsRouter = {
  path: '/shop',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Shop',
  meta: {
    title: '店铺',
    icon: 'shop'
  },
  children: [
    {
      path: 'manage-page',
      component: () => import('@/views/shop/page-manager'),
      name: 'ManagePage',
      meta: {
        title: '页面管理',
        noCache: true
      }
    },
    {
      path: 'discount',
      component: () => import('@/views/shop/discount'),
      name: 'Discount',
      meta: {
        title: '立减金管理',
        noCache: true
      }
    },
    {
      path: 'set-free-shipping',
      component: () => import('@/views/shop/postage-free'),
      name: 'SetFreeShipping',
      meta: {
        title: '包邮设置',
        noCache: true
      }
    },
    {
      path: 'postage-template',
      component: () => import('@/views/shop/postage-template'),
      name: 'PostageTemplate',
      meta: {
        title: '邮费模板',
        noCache: true
      }
    },
    {
      path: 'hot-word',
      component: () => import('@/views/shop/hot-word'),
      name: 'HotWord',
      meta: {
        title: '热门搜索',
        noCache: true
      }
    },
    {
      path: 'search-dome',
      component: () => import('@/views/shop/search-dome'),
      name: 'SearchDome',
      meta: {
        title: '搜索穹顶',
        noCache: true
      }
    },
    {
      path: 'style',
      component: () => import('@/views/shop/style'),
      name: 'Style',
      meta: {
        title: '店铺风格',
        noCache: true
      }
    },
    {
      path: 'materail-management',
      component: () => import('@/views/shop/materail-management'),
      name: 'MaterailManagement',
      meta: {
        title: '素材管理',
        noCache: true
      }
    },
    {
      path: 'authorization',
      component: () => import('@/views/shop/authorization'),
      name: 'Authorization',
      meta: {
        title: '会员授权页',
        noCache: true
      }
    },
    {
      path: 'template',
      component: () => import('@/views/shop/template'),
      name: 'Template',
      redirect: 'shop-template-page',
      meta: {
        title: '店铺模板',
        noCache: true
      },
      children: [
        {
          path: 'shop-template-page',
          component: () => import('@/views/shop/template/page'),
          name: 'ShopTemplatePage',
          meta: {
            title: '页面模板',
            noCache: true
          }
        },
        {
          path: 'shop-template-active',
          component: () => import('@/views/shop/template/active'),
          name: 'ShopTemplateActive',
          meta: {
            title: '活动页模板',
            noCache: true
          }
        }
      ]
    },
    {
      path: 'store-navigation',
      component: () => import('@/views/shop/store-navigation'),
      name: 'StoreNavigation',
      meta: {
        title: '店铺导航',
        noCache: true
      }
    },
    {
      path: 'suspension',
      component: () => import('@/views/shop/suspension'),
      name: 'Suspension',
      meta: {
        title: '悬浮窗管理',
        noCache: true
      }
    },
    {
      path: 'supernatant',
      component: () => import('@/views/shop/supernatant'),
      name: 'Supernatant',
      meta: {
        title: '浮层弹窗',
        noCache: true
      }
    },
    {
      path: 'version-manager',
      component: () => import('@/views/shop/version-manager'),
      name: 'VersionManager',
      meta: {
        title: '版本管理',
        noCache: true
      }
    },
    {
      path: 'onfiguration-coupons',
      component: () => import('@/views/shop/onfiguration-coupons'),
      name: 'OnfigurationCoupons',
      meta: {
        title: '自动发券',
        noCache: true
      }
    }
  ]
};

export default chartsRouter;
