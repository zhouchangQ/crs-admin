export default {
  methods: {
    /**
     * 限制数字输入小数点后几位
     * @param {Number} value input框输入的值
     * @param {Number} limit 允许输入小数点后几位 例：1代表允许输入小数点后1位
     * */
    limitInput(value, limit) {
      const onlyDecimal = (num, limit) => {
        let number = null;
        if (num.indexOf(".") != -1) {
          var str_ = num.substr(num.indexOf(".") + 1);
          if (str_.indexOf(".") != -1) {
            number = num.substr(0, num.indexOf(".") + str_.indexOf(".") + 1);
          }
        }
        let array = num.split(".");
        if (!!array[1] && array[1].length > limit) {
          array[1] = array[1].substr(0, limit);
          number = array[0] + "." + array[1];
        }
        return number;
      };

      let nums = value;
      if (nums != undefined) {
        nums = nums.replace(/[^0-9.]/g, "");
        if (onlyDecimal(nums, limit) != null) {
          nums = onlyDecimal(nums, limit);
        }
      }
      return nums;
    }
  }
};
