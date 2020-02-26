//  单一状态树
const state = {
  VIDINFO: [
    // {
    //   up_id: null,
    //   up_sign:null,
    //   up_file:null
    //   up_loader: null,
    //   up_steep: []
    // }
  ]
};

// getters 暴露出去的获取 state 的计算属性
const getters = {
  getVideoInfo: state => {
    return state.VIDINFO;
  }
};

// mutations 私有化方法，只能被 actions 调用， 可以直接变更状态
const mutations = {
  setVideoInfo(state, data) {
    state.VIDINFO = data;
  }
};

// actions 暴露到外部的方法 不直接变更状态
const actions = {
  setVideoInfo({ commit }, data) {
    commit('setVideoInfo', data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
