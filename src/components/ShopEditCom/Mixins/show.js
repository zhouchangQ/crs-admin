export default {
  props: ['id'],
  computed: {
    //编辑页组件列表
    shopEditList: {
      get() {
        return this.$store.state.ShopSetup.shopEditList;
      }
    },
    shopEditId: {
      get() {
        return this.$store.state.ShopSetup.shopEditing.id;
      }
    }
  },
  watch: {
    shopEditList: {
      handler() {
        this.shopEditList.map(item => {
          if (item.id == this.id) {
            this.formData = item.data;
          }
        });
      },
      deep: true
    }
  }
};
