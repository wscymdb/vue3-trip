<template>
  <div class="home">
    <NavBarVue />
    <HomeBannerVue />
    <HomeSearchBoxVue />
    <homeCategoriesVue />
    <searchBarVue v-if="isShowSearchBar" />
    <homeListVue />
  </div>
</template>

<script setup name="home">
import { ref, watch, computed } from 'vue'
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

const { scrollTop } = useScroll(window, 200, () => {
  homeStore.getHouseList()
})

const isShowSearchBar = computed(() => {
  return scrollTop.value > 350
})
</script>

<style scoped lang="less">
.home {
  padding-bottom: 67px;
  background-color: #f5f5f5;
  overflow: auto;
}
</style>
