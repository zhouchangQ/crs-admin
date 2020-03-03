import defaultSettings from '@/settings';
/**
 * id:组件展示和编辑唯一标识
 * usecont:已占用数量
 * selected:是否已选择
 * limit:组件最大限制
 * icon:图片
 * name:名称
 * viewCom:组件展示文件
 * viewEdit:组件编辑文件
 */
const state = {
  //基础店铺组件数据维护
  baseComList: [
    {
      key: 'shop_banner',
      id: 0,
      index: 0,
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_banner'],
      icon: 'shop-banner',
      name: '轮播',
      viewCom: () => require('@/components/ShopEditCom/Banner/show'),
      viewEdit: () => require('@/components/ShopEditCom/Banner/edit'),
      defaultData: [
        {
          imgUrl: null, // 轮播图片链接
          height: 200, // 轮播图片高度
          type: '1', // 跳转类型
          jump_way: '1', // 跳转路径
          auto_play: '1', // 是否自动播放
          circle_play: '1' // 是否循环播放
        }
      ],
      data: [
        {
          imgUrl: null, // 轮播图片链接
          height: 200, // 轮播图片高度
          type: '1', // 跳转类型
          jump_way: '1', // 跳转路径
          auto_play: '1', // 是否自动播放
          circle_play: '1' // 是否循环播放
        }
      ]
    },
    {
      key: 'shop_img',
      id: 1,
      index: 1,
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_img'],
      icon: 'shop-img',
      name: '图片',
      viewCom: () => require('@/components/ShopEditCom/Img/show'),
      viewEdit: () => require('@/components/ShopEditCom/Img/edit')
    },
    {
      key: 'shop_coupon',
      id: 2,
      index: 2,
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_coupon'],
      icon: 'shop-coupon',
      name: '优惠券',
      viewCom: () => require('@/components/ShopEditCom/Coupon/show'),
      viewEdit: () => require('@/components/ShopEditCom/Coupon/edit')
    },
    {
      key: 'shop_search',
      id: 2,
      index: 3,
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_search'],
      icon: 'shop-search',
      name: '搜索',
      viewCom: () => require('@/components/ShopEditCom/Search/show'),
      viewEdit: () => require('@/components/ShopEditCom/Search/edit'),
      data: {
        bgColor: 'rgba(255, 69, 0, 0.68)'
      }
    },
    {
      key: 'shop_new',
      id: 3,
      index: 4,
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_new'],
      icon: 'shop-new',
      name: '新人购',
      viewCom: () => require('@/components/ShopEditCom/New/show'),
      viewEdit: () => require('@/components/ShopEditCom/New/edit')
    },
    {
      key: 'shop_time',
      id: 5,
      index: 5,
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_time'],
      icon: 'shop-time',
      name: '限时购',
      viewCom: () => require('@/components/ShopEditCom/Timer/show'),
      viewEdit: () => require('@/components/ShopEditCom/Timer/edit')
    },
    {
      key: 'shop_like',
      id: 6,
      index: 6,
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_like'],
      icon: 'shop-like',
      name: '引导关注',
      viewCom: () => require('@/components/ShopEditCom/Like/show'),
      viewEdit: () => require('@/components/ShopEditCom/Like/edit')
    },
    {
      key: 'shop_zhiyin',
      id: 7,
      index: 7,
      selected: false,
      usecont: 0,
      limit: defaultSettings['shopBaseCom']['shop_zhiyin'],
      icon: 'shop-zhiyin',
      name: '社群导流',
      viewCom: () => require('@/components/ShopEditCom/Zhiyin/show'),
      viewEdit: () => require('@/components/ShopEditCom/Zhiyin/edit')
    }
  ],
  // 手机展示数据
  shopEditList: [],
  shopEditing: {
    id: null,
    key: null
  } //当前编辑组件信息
};

// mutations 私有化方法，只能被 actions 调用， 可以直接变更状态
const mutations = {
  upDateShopEditList(state, data) {
    state.shopEditList = data;
  },
  //删除元素改变正在编辑状态
  upDateDelTemplate(state) {
    state.shopEditing = {
      id: null,
      key: null
    };
  },
  upDateShopEditing(state, data) {
    state.shopEditing = data;
  },
  upDateBaseComList(state, data) {
    state.upDateBaseComList = data;
  }
};

// actions 暴露到外部的方法 不直接变更状态
const actions = {
  upDateShopEditList({ commit }, data) {
    commit('upDateShopEditList', data);
  },
  upDateDelTemplate({ commit }, data) {
    commit('upDateDelTemplate', data);
  },
  upDateBaseComList({ commit }, data) {
    commit('upDateBaseComList', data);
  },
  upDateShopEditing({ commit }, data) {
    commit('upDateShopEditing', data);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
