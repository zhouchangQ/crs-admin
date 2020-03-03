<template>
  <div class="board-column">
    <draggable class="phone-content" :list="shopEditList" v-bind="dragOptions" :move="checkMove" @add="datadragEnd" @end="endListenter">
      <div v-for="(item, index) in shopEditList" :key="index" :class="[{ 'select-style': item.selected }, 'board-item']" @click="handleSelectItem(item, index)">
        <div class="popper-right" v-if="item.selected" @click.stop="handleDelete(item, index)">
          <p class="delete">
            <svg-icon icon-class="delete" />
          </p>
        </div>
        <div class="popper-right" v-else>
          <p>{{ item.name }}</p>
        </div>
        <component :is="item.key" :id="item.id"></component>
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
    //编辑页组件列表
    shopEditList: {
      get() {
        return this.$store.state.ShopSetup.shopEditList;
      },
      set(val) {
        this.upStore('upDateShopEditList', val);
      }
    }
  },
  data() {
    return {
      show_ic: true
    };
  },
  beforeCreate: function() {
    //动态加载子view组件
    this.$store.state.ShopSetup.baseComList.map(item => {
      this.$options.components[item.key] = item.viewCom().default;
    });
  },
  created() {},
  render: createElement => {
    return createElement(this.vueName);
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
      this.upStore('upDateShopEditing', { key: newList[e.newIndex].key, id: newList[e.newIndex].id });
    },
    //移动监听
    checkMove: function(evt) {
      return evt.draggedContext.element.name !== 'apple';
    },
    //添加元素监听
    datadragEnd(e) {
      //分配每个组件id
      let newList = JSON.parse(JSON.stringify(this.shopEditList));
      newList[e.newIndex].id = new Date().getTime();
      this.shopEditList = newList;
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
      this.upStore('upDateShopEditing', { id: newList[index].id, key: newList[index].key });
    },
    // 删除元素
    handleDelete(item, index) {
      this.shopEditList.splice(index, 1);
      this.upStore('upDateShopEditList', this.shopEditList);
      //如果当前元素有数量限制，基础组件数量减一
      this.$store.state.ShopSetup.baseComList.map(item2 => {
        if (item.key == item2.key && item2['usecont']) {
          this.upStore('upDateBaseComList', item2['usecont']--);
        }
      });
      //触发删除操作，置空正在编辑元素
      this.upStore('upDateDelTemplate', { id: item.id, key: item.key });
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
// 右侧气泡样式
.popper-right {
  text-align: left;
  color: #333;
  white-space: nowrap;
  position: relative;
  left: 390px;
  p {
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    position: absolute;
    padding: 0 15px;
    border-radius: 3px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    background-color: #fff;
  }
}
</style>
