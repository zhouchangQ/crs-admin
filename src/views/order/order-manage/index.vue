<template>
  <div class="app-container">
    订单管理
    <button @click="handleOpenTest">打开动态弹窗</button>
    <el-drawer title="我是标题" :visible.sync="dialogVisible" :with-header="false" size="80%" :show-close="true">
      <order-option />
    </el-drawer>
  </div>
</template>

<script>
import orderOption from '@/views/order/after-sale-setting/option/index.vue';
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  components: { orderOption },
  methods: {
    handleOpenTest() {
      this.dialogVisible = true;
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
m-dialog {
  position: relative;
  width: 80%;
  left: 10%;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
