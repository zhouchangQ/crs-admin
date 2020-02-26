//  单一状态树
const state = {
  list: []
};

// getters 暴露出去的获取 state 的计算属性
const getters = {
  getDragList: state => {
    return state.list;
  }
};

// mutations 私有化方法，只能被 actions 调用， 可以直接变更状态
const mutations = {
  upDateList(state, data) {
    state.list = data;
  }
};

// actions 暴露到外部的方法 不直接变更状态
const actions = {
  upDateList({ commit }, data) {
    commit('upDateList', data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
