import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import app from './modules/app';
import settings from './modules/settings';
import Steep from './modules/VideoSteep';
import User from './modules/UserInfo';
import ShopSetup from './modules/ShopSetup';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    STEEP: Steep,
    USER: User,
    ShopSetup
  },
  getters
});

export default store;
