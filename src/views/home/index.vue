<template>
  <div class="home" ref="homeRef">
    <NavBarVue />
    <HomeBannerVue />
    <HomeSearchBoxVue />
    <homeCategoriesVue />
    <searchBarVue v-if="isShowSearchBar" />
    <homeListVue />
  </div>
</template>

<script setup name="home">
import { ref, watch, computed, onActivated } from 'vue'
import NavBarVue from './components/nav-bar.vue'
import HomeBannerVue from './components/home-banner.vue'
import HomeSearchBoxVue from './components/home-search-box.vue'
import homeCategoriesVue from './components/home-categories.vue'
import homeListVue from './components/home-list.vue'
import useHomeStore from '@/stores/modules/home'

import searchBarVue from '@/components/search-bar/index.vue'
import { useScroll } from '@/hooks/useScroll'

// 使用仓库
const homeStore = useHomeStore()
// 发送网络请求
async function fetch() {
  await homeStore.getHotSuggests()
  await homeStore.getHomeCategories()
  await homeStore.getHouseList()
}
fetch()

const homeRef = ref(null)
const { scrollTop } = useScroll({
  elRef: homeRef,
  count: 200,
  fn: () => {
    homeStore.getHouseList()
  },
})

const isShowSearchBar = computed(() => {
  return scrollTop.value > 350
})

// 跳转回来时，保留原来的位置
onActivated(() => {
  console.log(scrollTop)
  homeRef.value.scrollTo({
    top: scrollTop.value,
  })
})
</script>

<script>
export default {
  name: 'home',
}
</script>

<style scoped lang="less">
.home {
  height: 100vh;
  padding-bottom: 67px;
  background-color: #f5f5f5;
  overflow: auto;
}
</style>
