<template>
  <div class="app-container">
    <shop-base-com></shop-base-com>
    <draggable class="board-content" :value="list" v-bind="dragOptions" @add="datadragEnd($event)">
      <!-- <draggable class="board-content" v-bind="dragOptions" :set-data="setData" :move="datadragEnd()"> -->
      <div v-for="item in list" :key="item.id" class="board-item">{{ item }}</div>
    </draggable>
    <div>{{ list }}</div>
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
        dragClass: 'dragClass',
        chosenClass: 'dragClass'
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
    setData(dataTransfer) {
      // to avoid Firefox bug
      // Detail see : https://github.com/RubaXa/Sortable/issues/1012
      dataTransfer.setData('Text', '');
    },
    datadragEnd(e) {
      var str = '';
      for (var item in e) {
        str += item + ':' + e[item] + '\n';
      }

      // console.log('改变了=======' + e.newIndex);
      console.log('改变了=======' + str);
      // this.$store.dispatch('DragInfo/upDateList', [2]);
      e.item = '';
      e.to = '';
      console.log('this.list======' + this.list);
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
</style>
