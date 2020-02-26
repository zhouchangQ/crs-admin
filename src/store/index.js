import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import app from './modules/app';
import settings from './modules/settings';
import Steep from './modules/VideoSteep';
import User from './modules/UserInfo';
import DragInfo from './modules/DragInfo';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    STEEP: Steep,
    USER: User,
    DragInfo
  },
  getters
});

export default store;
