// 格式化时间
export default {
  key: 'formateMinue',
  func: second => {
    if (second == 0) {
      return '00:00';
    }
    //计算分钟
    //算法：将秒数除以60，然后下舍入，既得到分钟数
    let h;
    h = Math.floor(second / 60);
    //计算秒
    //算法：取得秒%60的余数，既得到秒数
    second = second % 60;
    //将变量转换为字符串
    h += '';
    second += '';
    //如果只有一位数，前面增加一个0
    h = h.length == 1 ? '0' + h : h;
    second = second.length == 1 ? '0' + second : second;
    return h + ':' + second;
  }
};
