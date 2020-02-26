'use strict';

import Vue from 'vue';
import axios from 'axios';
import LoginAboat from '@/utils/LoginAboat';
import { Loading, Message } from 'element-ui';

// loading 配置文件
const options = {
  fullscreen: true,
  background: 'rgba(0,0,0,0.1)'
};
// loading 实例
let loadingInstance = null;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// api 配置
let config = {
  baseURL: process.env.VUE_APP_API_ROOT + process.env.VUE_APP_API_VERSION,
  timeout: 60000, // Timeout 为了防止导出过大文件失败，所以把时间设为1分钟
  headers: {},
  withCredentials: true // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    if (!config.loadingHide) {
      loadingInstance = Loading.service(options);
    }
    // 如果是本地静默登录，不传hash和token
    if (LoginAboat.getAppHash()) {
      config.headers['Enterprise-Hash'] = LoginAboat.getAppHash();
    }
    if (LoginAboat.getToken()) {
      config.headers['Auth-Token'] = LoginAboat.getToken();
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    loadingInstance.close();
    if ((response.status === 200 || response.status === 210) && response.data.error === 'ERROR') {
      Message({
        showClose: true,
        type: 'error',
        duration: 2000,
        message: response.data.message
      });
      return Promise.reject(response);
    } else {
      return response;
    }
  },
  function(error) {
    loadingInstance.close();
    if (error.response.status === 500 && error.response.data.error === 'ERROR') {
      Message({
        showClose: true,
        type: 'error',
        duration: 2000,
        message: error.response.data.message
      });
      // 登录过期
      if (parseInt(error.response.data.code) === 200004) {
        setTimeout(() => {
          LoginAboat.backLogin();
        }, 1500);
      }
    }

    return Promise.reject(error.response.data);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
