<template>
  <div class="img-box">
    <img :src="abc_img" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      abc_img: require('@/assets/template/bg-banner.png')
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
  mounted() {
    console.log('图片编辑');
  }
};
</script>

<style lang="scss" scoped></style>
