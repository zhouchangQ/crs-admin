<template>
  <div class="components-container board">
    <drag :key="1" :list="list1" :group="group" class="kanban todo" />
    <drag :key="2" :list="list2" :group="group" class="kanban working" />
  </div>
</template>
<script>
import drag from '@/components/DragArea';

export default {
  name: 'Home',
  components: {
    drag
  },
  data() {
    return {
      group: 'mission',
      list1: [{ name: '图片', id: 1 }, { name: '轮播图', id: 2 }, { name: '优惠券', id: 3 }],
      list2: []
    };
  }
};
</script>
<style lang="scss" scoped>
.board {
  width: 1000px;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
}
.kanban {
  &.todo {
    .board-column-header {
      background: #4a9ff9;
    }
  }
  &.working {
    .board-column-header {
      background: #f9944a;
    }
  }
  &.done {
    .board-column-header {
      background: #2ac06d;
    }
  }
}
</style>
