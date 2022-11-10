<template>
  <div class="tab-bar">
    <div
      class="tab-bar_item"
      v-for="(item, i) in tabBarInfo"
      @click="tabBarChange(i, item.path)"
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

<script setup name="tabbar">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { tabBarInfo, tabBarRouterMap } from '@/assets/data/tabbar'

const router = useRouter()

const currentIndex = ref(0)

const tabBarChange = (index) => {
  currentIndex.value = index
}

console.log(import.meta.url)

// 监听变化 跳转路由
watch(
  currentIndex,
  (curr) => {
    router.push(tabBarRouterMap.get(curr))
  },
  {
    immediate: true,
  }
)
</script>

<style scoped lang="less">
.tab-bar {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: var(--max-width);
  margin: 0 auto;
  height: 55px;
  background-color: #fff;
  border-top: 1px solid #f2f2f2;

  &_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    padding-top: 2px;

    i {
      font-size: 20px;
    }

    .active {
      color: var(--primary-color);
      transform: scale(1.1);
      transition: all 0.1s linear;
    }
  }
}
</style>
