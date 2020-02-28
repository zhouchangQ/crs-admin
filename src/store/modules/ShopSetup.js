import defaultSettings from '@/settings';
const state = {
  //基础店铺组件数据维护
  baseComList: [
    {
      id: 'shop_banner',
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_banner'],
      icon: 'shop-banner',
      name: '轮播'
    },
    {
      id: 'shop_img',
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_img'],
      icon: 'shop-img',
      name: '图片'
    },
    {
      id: 'shop_coupon',
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_coupon'],
      icon: 'shop-coupon',
      name: '优惠券'
    },
    {
      id: 'shop_search',
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_search'],
      icon: 'shop-search',
      name: '搜索'
    },
    {
      id: 'shop_new',
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_new'],
      icon: 'shop-new',
      name: '新人购'
    },
    {
      id: 'shop_time',
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_time'],
      icon: 'shop-time',
      name: '限时购'
    },
    {
      id: 'shop_like',
      usecont: 0,
      selected: false,
      limit: defaultSettings['shopBaseCom']['shop_like'],
      icon: 'shop-like',
      name: '引导关注'
    },
    {
      id: 'shop_zhiyin',
      selected: false,
      usecont: 0,
      limit: defaultSettings['shopBaseCom']['shop_zhiyin'],
      icon: 'shop-zhiyin',
      name: '社群导流'
    }
  ],
  // 手机展示数据
  shopEditList: [],
  shopEditId: null //当前编辑组件id
};

// mutations 私有化方法，只能被 actions 调用， 可以直接变更状态
const mutations = {
  upDateShopEditList(state, data) {
    state.shopEditList = data;
  },
  upDateShopEditId(state, data) {
    state.shopEditId = data;
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
  upDateBaseComList({ commit }, data) {
    commit('upDateBaseComList', data);
  },
  upDateShopEditId({ commit }, data) {
    commit('upDateShopEditId', data);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
