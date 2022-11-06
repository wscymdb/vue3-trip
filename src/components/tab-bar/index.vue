<template>
  <div class="tab-bar">
    <div
      class="tab-bar_item"
      v-for="(item, i) in tabBarInfo"
      @click="tabBarChange(i)"
    >
      <i
        class="iconfont"
        :class="{ [item.icon]: true, active: currentIndex === i }"
      ></i>
      <span class="text" :class="{ active: currentIndex === i }">{{
        item.name
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const tabBarInfo = [
  {
    name: '首页',
    icon: 'icon-shouye',
  },
  {
    name: '收藏',
    icon: 'icon-xihuan',
  },
  {
    name: '订单',
    icon: 'icon-dingdan',
  },
  {
    name: '消息',
    icon: 'icon-31xiaoxi',
  },
]

const currentIndex = ref(0)

const tabBarRouterMap = new Map([
  [0, '/home'],
  [1, '/favor'],
  [2, '/order'],
  [3, '/message'],
])

const tabBarChange = (index) => {
  currentIndex.value = index
  router.push(tabBarRouterMap.get(index))
}
</script>

<style scoped lang="less">
.tab-bar {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 55px;

  &_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    padding-top: 2px;
    border-top: 1px solid #ccc;

    i {
      font-size: 20px;
    }

    .active {
      color: rgb(233, 101, 57);
      transform: scale(1.1);
      transition: all 0.1s linear;
    }
  }
}
</style>
