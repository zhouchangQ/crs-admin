import Vue from 'vue';
import '@/utils/Axios';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import md5 from 'js-md5';
import ElementUI from 'element-ui';
import Filter from '@/filters/index';
import Directives from '@/directives/index';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss'; // global css

import App from './App';
import store from './store';
import router from './router';

import '@/icons'; // icon
import '@/permission'; // permission control

// 全局过滤器注册
Vue.use(Filter);
// 全局指令注册
Vue.use(Directives);
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI);
Vue.config.productionTip = false;
//生产环境不允许打印
process.env.NODE_ENV === 'production' && (console.log = () => {});

Vue.prototype.$md5 = md5;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
