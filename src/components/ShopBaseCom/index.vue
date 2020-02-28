<template>
  <div class="board-column">
    <draggable v-bind="dragOptions" :list="list" class="board-column-content">
      <div v-for="item in list" :key="item.id" :class="[{ 'max-style': isMax(item) }, 'board-item']">
        <div class="place-hoder" v-if="!isMax(item)">组件放置区域</div>
        <div class="place-hoder" v-else>该组件已达到上限</div>
        <div class="item">
          <p class="icon"><svg-icon :icon-class="item.icon" /></p>
          <p class="limit">{{ item.name }}</p>
          <p class="limit" v-if="item.limit">{{ item.usecont }}/{{ item.limit }}</p>
          <p class="limit" v-else>不限</p>
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  name: 'DragArea',
  components: {
    draggable
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    // 滑动卡片配置
    dragOptions() {
      return {
        animation: 0, //动画
        sort: false, //是否允许排序
        store: false,
        put: false, //插入
        group: {
          name: 'description',
          put: false,
          pull: 'clone'
        },
        disabled: false, //是否禁止滑动
        ghostClass: 'ghostClass',
        dragClass: 'dragClass',
        chosenClass: 'dragClass'
      };
    },
    list: {
      get() {
        return this.$store.state.ShopSetup.baseComList;
      }
    },
    isMax() {
      //判断单个组件数量是否达到上线
      return item => {
        return item.limit && item.usecont >= item.limit;
      };
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.place-hoder {
  position: absolute;
  z-index: 1;
  top: 10px;
  display: none;
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.ghostClass {
  position: relative;
  width: 100%;
  height: 40px;
  padding-top: 40px;
  background-color: rgb(164, 238, 189);
  text-align: center;
  overflow: hidden;
  .place-hoder {
    color: #fff;
    display: block;
  }
}
.ghostClass.max-style {
  background-color: red;
}
.board-column {
  width: 130px;
  height: auto;
  overflow: hidden;
  background: #f0f0f0;
  border-radius: 3px;
  .board-column-content {
    height: auto;
    overflow: hidden;
    border: 10px solid transparent;
    min-height: 120px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

    .board-item {
      cursor: pointer;
      width: 100%;
      height: auto;
      margin: 5px 0;
      padding: 10px;
      border-radius: 20px;
      border: none;
      background-color: #fff;
      text-align: left;
      box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.2);
      .item {
        position: relative;
        z-index: 2;
      }
      p {
        margin: 0;
      }
      .icon {
        font-size: 30px;
        text-align: center;
        color: #666;
      }
      .limit {
        margin-top: 5px;
        margin-bottom: 0;
        text-align: center;
        font-size: 12px;
      }
    }
  }
}
</style>
