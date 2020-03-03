export default {
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
    formData: {
      handler() {
        this.shopEditList.map(item => {
          if (item.id == this.shopEditId) {
            item.data = this.formData;
          }
        });
        this.upStore('upDateShopEditList', this.shopEditList);
      },
      deep: true
    },
    shopEditId: {
      handler() {
        this.getFormData();
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getFormData() {
      this.shopEditList.map(item => {
        if (item.id == this.shopEditId) {
          this.formData = item.data;
        }
      });
    },
    // 更新store
    upStore(name, data) {
      this.$store.dispatch(`ShopSetup/${name}`, data);
    }
  }
};
