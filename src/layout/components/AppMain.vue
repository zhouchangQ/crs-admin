<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
    <!-- <transition v-if="this.$route.name !== 'AfterSaleSettingOption'" name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
    <el-dialog v-if="this.$route.name == 'AfterSaleSettingOption'" :title="this.$route.name" :visible.sync="dialogVisible" @closed="backUrl">
      <router-view :key="key"></router-view>
    </el-dialog> -->
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {
      dialogVisible: true,
      dialog: false
    };
  },
  computed: {
    key() {
      return this.$route.path;
    }
  },
  methods: {}
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
