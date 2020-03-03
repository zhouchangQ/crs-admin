export default {
  methods: {
    TrimFun(str, type) {
      let params = "";
      // 去除字符串内所有的空格
      switch (type) {
        case "all":
          params = str.replace(/\s*/g, "");
          break;
        case "left":
          params = str.replace(/^\s*/, "");
          break;
        case "right":
          params = str.replace(/(\s*$)/g, "");
          break;
        case "both":
          params = str.replace(/^\s*|\s*$/g, "");
          break;
      }
      return params;
    }
  }
};
