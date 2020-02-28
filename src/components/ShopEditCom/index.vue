<template>
  <div class="edit-container">
    <keep-alive>
      <component :is="shopEditId"></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    shopEditId: {
      get() {
        return this.$store.state.ShopSetup.shopEditId;
      }
    }
  },
  components: {
    shop_banner: () => import('@/components/ShopEditCom/EditBanner'),
    shop_img: () => import('@/components/ShopEditCom/EditImg')
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped></style>
