<template>
  <div class="edit-container">
    <component :is="shopEditKey"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    shopEditKey: {
      get() {
        return this.$store.state.ShopSetup.shopEditing.key;
      }
    }
  },
  beforeCreate: function() {
    //动态加载子view组件
    this.$store.state.ShopSetup.baseComList.map(item => {
      this.$options.components[item.key] = item.viewEdit().default;
    });
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
/deep/.edit-title {
  font-weight: bold;
  margin-bottom: 30px;
}
/deep/.edit-content {
  margin-left: 30px;
}
</style>
