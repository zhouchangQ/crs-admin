import FormatDate from './FormatDate';
import FormatMoney from './FormatMoney';
import FormateMinue from './FormateMinue';

const filters = [FormatDate, FormatMoney, FormateMinue];
export default {
  install: Vue => {
    if (filters.length && filters.length > 0) {
      filters.map(item => {
        Vue.filter(item.key, item.func);
      });
    }
  }
};
