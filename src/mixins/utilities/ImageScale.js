// 暂无用到
export default {
  methods: {
    scaleImage(url, mode, width, height) {
      return `${url}?imageView2/${mode}/w/${width}/h/${height}`;
    }
  }
};
