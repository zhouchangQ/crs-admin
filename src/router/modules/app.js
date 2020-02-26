/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout';

const chartsRouter = {
  path: '/app',
  component: Layout,
  redirect: 'noRedirect',
  name: 'App',
  meta: {
    title: '应用',
    icon: 'example'
  },
  children: [
    {
      path: 'app-collection',
      component: () => import('@/views/app/collection'),
      name: 'AppCollection',
      meta: {
        title: '收藏有礼(权限)',
        noCache: true
      }
    },
    {
      path: 'app-float',
      component: () => import('@/views/app/float'),
      name: 'AppFloat',
      meta: {
        title: '商品优惠浮层(权限)',
        noCache: true
      }
    },
    {
      path: 'app-new',
      component: () => import('@/views/app/new'),
      name: 'AppNew',
      meta: {
        title: '新人优惠(权限)',
        noCache: true
      }
    },
    {
      path: 'coupon-gift',
      component: () => import('@/views/app/coupon-gift'),
      name: 'CouponGift',
      meta: {
        title: '礼券',
        noCache: true
      }
    },
    {
      path: 'assemble',
      component: () => import('@/views/app/assemble'),
      name: 'Assemble',
      meta: {
        title: '拼团',
        noCache: true
      }
    },
    {
      path: 'buy-new',
      component: () => import('@/views/app/buy-new'),
      name: 'BuyNew',
      meta: {
        title: '新人购',
        noCache: true
      }
    },
    {
      path: 'buy-limit-time',
      component: () => import('@/views/app/buy-limit-time'),
      name: 'BuyLimitTime',
      meta: {
        title: '限时购',
        noCache: true
      }
    },
    {
      path: 'buy-low',
      component: () => import('@/views/app/buy-low'),
      name: 'Buy-low',
      meta: {
        title: '超低购',
        noCache: true
      }
    },
    {
      path: 'app-activity',
      component: () => import('@/views/app/activity'),
      name: 'AppActivity',
      meta: {
        title: '满赠/满减/满折',
        noCache: true
      }
    },
    {
      path: 'wechat-coupon',
      component: () => import('@/views/app/wechat-coupon'),
      name: 'WechatCoupon',
      meta: {
        title: '微信优惠券',
        noCache: true
      }
    },
    {
      path: 'lottery-share',
      component: () => import('@/views/app/lottery-share'),
      name: 'LotteryShare',
      meta: {
        title: '分享抽奖',
        noCache: true
      }
    },
    {
      path: 'friend-help',
      component: () => import('@/views/app/friend-help'),
      name: 'FriendHelp',
      meta: {
        title: '好友助力',
        noCache: true
      }
    },
    {
      path: 'friend-help-lottery',
      component: () => import('@/views/app/friend-help-lottery'),
      name: 'FriendHelpLottery',
      meta: {
        title: '好友助力-抽奖',
        noCache: true
      }
    },
    {
      path: 'good-circle',
      component: () => import('@/views/app/good-circle'),
      name: 'GoodCircle',
      meta: {
        title: '好物圈',
        noCache: true
      }
    },
    {
      path: 'bargain',
      component: () => import('@/views/app/bargain'),
      name: 'Bargain',
      meta: {
        title: '砍价',
        noCache: true
      }
    },
    {
      path: 'double-coupon',
      component: () => import('@/views/app/double-coupon'),
      name: 'DoubleCoupon',
      meta: {
        title: '翻倍券',
        noCache: true
      }
    },
    {
      path: 'integral-paradise',
      component: () => import('@/views/app/integral-paradise'),
      name: 'IntegralParadise',
      meta: {
        title: '积分乐园',
        noCache: true
      }
    },
    {
      path: 'live-streaming',
      component: () => import('@/views/app/live-streaming'),
      name: 'LiveStreaming',
      meta: {
        title: '直播管理',
        noCache: true
      }
    },
    {
      path: 'community',
      component: () => import('@/views/app/community'),
      name: 'Community',
      meta: {
        title: '社群导流',
        noCache: true
      }
    }
  ]
};

export default chartsRouter;
