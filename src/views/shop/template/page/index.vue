<template>
  <div class="app-container">
    <shop-base-com></shop-base-com>
    <draggable class="board-content" :list="list" @change="log" v-bind="dragOptions" :move="checkMove" @add="datadragEnd($event)">
      <div v-for="(item, index) in list" :key="index" class="board-item">
        <div v-if="item.icon == 'shop-img'">
          <img src="@/assets/template/bg-img.png" />
        </div>
        <div v-if="item.icon == 'shop-banner'">
          <img src="@/assets/template/bg-banner.png" />
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import ShopBaseCom from '@/components/ShopBaseCom';
import draggable from 'vuedraggable';
export default {
  data() {
    return {
      list: []
    };
  },
  components: { ShopBaseCom, draggable },
  computed: {
    // 滑动卡片配置
    dragOptions() {
      return {
        animation: 300,
        sort: true,
        store: true,
        group: 'description',
        ghostClass: 'ghostClass',
        dragClass: 'dragClass',
        chosenClass: 'chosenClass'
      };
    }
    // list: {
    //   get() {
    //     return this.$store.state.DragInfo.list;
    //   },
    //   set(value) {
    //     console.log('value======' + value);
    //   }
    // }
  },
  methods: {
    checkMove: function(evt) {
      console.log('evt.name======' + evt.draggedContext.element.name);
      return evt.draggedContext.element.name !== 'apple';
    },
    setData(dataTransfer) {
      // to avoid Firefox bug
      // Detail see : https://github.com/RubaXa/Sortable/issues/1012
      dataTransfer.setData('Text', '');
    },
    log: function(evt) {
      window.console.log(evt);
    },
    datadragEnd(e) {
      // console.log('改变了=======' + e.newIndex);
      // console.log('改变了=======' + e.relatedContext.element.name);
      // this.$store.dispatch('DragInfo/upDateList', [2]);
      console.log(this.list);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
}
.board-content {
  height: 300px;
  width: 400px;
  background-color: #efeff4;
}
.board-item {
  position: relative;
  img {
    width: 100%;
  }
}
</style>
