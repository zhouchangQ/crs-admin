<template>
  <div class="board-column">
    <draggable class="phone-content" :list="shopEditList" v-bind="dragOptions" :move="checkMove" @add="datadragEnd" @end="endListenter">
      <div v-for="(item, index) in shopEditList" :key="index" :class="[{ 'select-style': item.selected }, 'board-item']" @click="handleSelectItem(item, index)">
        <div class="popper-right" v-if="item.selected" @click="handleDelete(item, index)">
          <p class="delete">
            <svg-icon icon-class="delete" />
          </p>
        </div>
        <div class="popper-right" v-else>
          <p>{{ item.name }}</p>
        </div>
        <div v-if="item.icon == 'shop-img'">
          <img src="@/assets/template/bg-img.png" />
        </div>
        <div v-else-if="item.icon == 'shop-banner'">
          <img src="@/assets/template/bg-banner.png" />
        </div>
        <div v-else>
          {{ item.name }}
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  name: 'DragArea',
  components: { draggable },
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
        animation: 300,
        sort: true,
        store: true,
        group: 'description',
        ghostClass: 'ghostClass',
        dragClass: 'dragClass',
        chosenClass: 'chosenClass'
      };
    },
    shopEditList: {
      get() {
        return this.$store.state.ShopSetup.shopEditList;
      }
    }
  },
  data() {
    return {
      show_ic: true
    };
  },
  methods: {
    //移动结束自动选择当前元素
    endListenter(e) {
      let newList = JSON.parse(JSON.stringify(this.shopEditList));
      // 排他设置已选择元素样式
      newList.map(item => {
        item.selected = false;
      });
      newList[e.newIndex].selected = true;
      this.upStore('upDateShopEditList', newList);
      this.upStore('upDateShopEditId', newList[e.newIndex].id);
    },
    //移动监听
    checkMove: function(evt) {
      return evt.draggedContext.element.name !== 'apple';
    },
    //添加元素监听
    datadragEnd(e) {
      // 如果该拖动元素已达上线，完成后随之移除，否则增加组件数量
      const oldItem = this.$store.state.ShopSetup.baseComList[e.oldIndex];
      if (oldItem.limit && oldItem.usecont >= oldItem.limit) {
        this.shopEditList.splice(e.newIndex, 1);
        this.upStore('upDateShopEditList', this.shopEditList);
      } else {
        this.upStore('upDateBaseComList', oldItem['usecont']++);
      }
    },
    // 选择编辑元素
    handleSelectItem(item, index) {
      let newList = JSON.parse(JSON.stringify(this.shopEditList));
      // 排他设置已选择元素样式
      newList.map(item => {
        item.selected = false;
      });
      newList[index].selected = true;
      this.upStore('upDateShopEditList', newList);
      this.upStore('upDateShopEditId', item.id);
    },
    // 删除元素
    handleDelete(item, index) {
      this.shopEditList.splice(index, 1);
      this.upStore('upDateShopEditList', this.shopEditList);
    },
    // 更新store
    upStore(name, data) {
      this.$store.dispatch(`ShopSetup/${name}`, data);
    }
  }
};
</script>
<style lang="scss" scoped>
img,
p {
  cursor: move;
}
.select-style {
  border: 2px dashed red;
  background: #eff7ff;
  border-radius: 5px;
}
.popper-right {
  text-align: left;
  .delete {
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.3);
    right: -60px;
  }
  p {
    position: absolute;
    padding: 10px 20px;
    box-shadow: rgba(0, 0, 0, 0.3);
    background-color: #666;
    right: -80px;
  }
}
</style>
