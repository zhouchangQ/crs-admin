<template>
  <div class="search-container">
    <p class="edit-title">搜索编辑</p>
    <el-form ref="form" label-width="90px">
      <el-form-item label="背景颜色">
        <el-color-picker v-model="formData.bgColor" show-alpha></el-color-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import editBase from '@/components/ShopEditCom/Mixins/edit';
export default {
  name: 'search',
  mixins: [editBase],
  data() {
    return {
      formData: {
        bgColor: ''
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
