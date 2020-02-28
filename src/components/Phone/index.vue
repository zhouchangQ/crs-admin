<template>
  <div class="phone-bg">
    <el-scrollbar wrap-class="scrollbar-wrapper" style="height:740px;width: 100% !important;">
      <div class="phone">
        <div class="header">
          <img class="header-title" src="@/assets/template/bg-nav.png" />
          <div class="header-nav">
            <p class="title">标题</p>
            <img class="right-menu" src="@/assets/template/bg-nav-button.png" />
          </div>
        </div>
        <div class="content">
          <template-edit></template-edit>
        </div>
      </div>
      <div class="place-are"></div>
    </el-scrollbar>
  </div>
</template>

<script>
import TemplateEdit from '@/components/Phone/TemplateEdit';
export default {
  name: 'Phone',
  components: { TemplateEdit },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.place-are {
  height: 50px;
  width: 100%;
}
.phone-bg:after {
  position: absolute;
  z-index: 99999;
  content: '';
  background-color: #fff;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
}
.phone-bg {
  position: relative;
  min-width: 500px;
  width: 100%;
  min-height: 710px;
  max-height: calc(100vh - 100px);
  .phone {
    position: relative;
    margin: 0 auto;
    min-width: 375px;
    max-width: 375px;
    min-height: 700px;
    height: auto;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    .header {
      left: 0;
      width: 100%;
      .header-title {
        width: 100%;
      }
      .header-nav {
        position: relative;
        text-align: center;
        height: 45px;
        line-height: 45px;
        font-size: 17px;
        color: #333;
        font-weight: 700;
        .right-menu {
          position: absolute;
          right: 10px;
          bottom: 7.5px;
          width: 85px;
          height: 30px;
        }
      }
    }
    .content {
      min-height: 650px;
    }
    /deep/.phone-content {
      min-height: 650px;
    }
    /deep/img {
      width: 100%;
      display: block;
    }
  }
}
</style>
