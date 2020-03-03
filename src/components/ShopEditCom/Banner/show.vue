<template>
  <div class="lunbo-box">
    <el-carousel :height="formData[0].height + 'px'" indicator-position="none">
      <el-carousel-item class="lunbo-box-item" v-for="(item, index) in formData" :key="index">
        <img ref="image" :src="item.imgUrl ? item.imgUrl : defaultImg" class="lunbotu" alt="轮播图" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import showBase from '@/components/ShopEditCom/Mixins/show';
export default {
  name: 'banner',
  mixins: [showBase],
  data() {
    return {
      // 轮播图数据
      formData: [
        {
          imgUrl: null, // 轮播图片链接
          height: null, // 轮播图片高度
          type: '1', // 跳转类型
          id: '1' // 跳转页面所需要的id
        }
      ],
      defaultImg: require('@/assets/template/bg-banner.png')
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
