<template>
  <div class="board-column">
    <draggable v-bind="dragOptions" :list="list" class="board-column-content" :component-data="getComponentData()">
      <div v-for="item in list" :key="item.id" class="board-item">
        <div class="place-hoder">组件放置区域</div>
        <div class="item">
          <p class="icon"><svg-icon :icon-class="item.icon" /></p>
          <p class="limit">{{ item.name }}</p>
          <p class="limit" v-if="item.limit">{{ item.limit }}/{{ item.limit }}</p>
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
        animation: 0,
        sort: false,
        store: false,
        put: false,
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
    }
  },
  data() {
    return {
      list: [
        {
          id: 0,
          limit: null,
          icon: 'shop-banner',
          name: '轮播'
        },
        {
          id: 1,
          limit: null,
          icon: 'shop-img',
          name: '图片'
        },
        {
          id: 2,
          limit: null,
          icon: 'shop-coupon',
          name: '优惠券'
        },
        {
          id: 3,
          limit: 1,
          icon: 'shop-search',
          name: '搜索'
        },
        {
          id: 4,
          limit: 1,
          icon: 'shop-new',
          name: '新人购'
        },
        {
          id: 5,
          limit: 1,
          icon: 'shop-time',
          name: '限时购'
        },
        {
          id: 6,
          limit: 1,
          icon: 'shop-like',
          name: '引导关注'
        },
        {
          id: 7,
          limit: 1,
          icon: 'shop-zhiyin',
          name: '社群导流'
        }
      ]
    };
  },
  methods: {
    getComponentData() {
      return {
        props: {
          value: '我是模板列表'
        }
      };
    }
  }
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
