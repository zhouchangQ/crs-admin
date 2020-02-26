import Authorization from './Authorization.js';
import Positive from './Positive.js';
const directives = [Authorization, Positive];
export default {
  install: Vue => {
    if (directives.length && directives.length > 0) {
      directives.map(item => {
        Vue.directive(item.key, item.func);
      });
    }
  }
};
