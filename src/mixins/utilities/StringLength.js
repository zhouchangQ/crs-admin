// 返回字符串长度 单位(个)
// 暂无用到
export default {
  methods: {
    stringLength: str => str.replace(/[\u0391-\uFFE5]/g, "aa").length
  }
};
