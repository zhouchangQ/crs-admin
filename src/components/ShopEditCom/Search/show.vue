<template>
  <div class="search-container" :style="{ backgroundColor: formData.bgColor }">
    <div class="input">
      <svg-icon icon-class="shop-search" />
      <p>搜索</p>
    </div>
  </div>
</template>

<script>
import showBase from '@/components/ShopEditCom/Mixins/show';
export default {
  name: 'search',
  mixins: [showBase],
  data() {
    return {
      formData: {
        bgColor: ''
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  padding: 12px;
  background-color: #eee;
  .input {
    display: flex;
    font-size: 13px;
    color: #999;
    height: 40px;
    line-height: 40px;
    border-radius: 40px;
    background-color: #fff;
    .svg-icon {
      margin-top: 14px;
      margin-left: 20px;
      margin-right: 5px;
    }
  }
}
</style>
