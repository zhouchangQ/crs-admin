<template>
  <div class="app-container">
    <el-row>
      <el-col :span="4">
        <shop-base-com></shop-base-com>
      </el-col>
      <el-col :span="14">
        <phone></phone>
      </el-col>
      <el-col :span="6">
        <shop-edit-com></shop-edit-com>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ShopBaseCom from '@/components/ShopBaseCom';
import Phone from '@/components/Phone';
import ShopEditCom from '@/components/ShopEditCom';
export default {
  data() {
    return {};
  },
  components: { Phone, ShopBaseCom, ShopEditCom },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.el-row {
  width: 100%;
}
</style>
