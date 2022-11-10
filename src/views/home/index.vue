<template>
  <div class="home">
    <NavBarVue />
    <HomeBannerVue />
    <HomeSearchBoxVue />
    <homeCategoriesVue />
    <homeListVue />
  </div>
</template>

<script setup name="home">
import NavBarVue from './components/nav-bar.vue'
import HomeBannerVue from './components/home-banner.vue'
import HomeSearchBoxVue from './components/home-search-box.vue'
import useHomeStore from '@/stores/modules/home'
import homeCategoriesVue from './components/home-categories.vue'
import homeListVue from './components/home-list.vue'
import { useScroll } from '@/hooks/useScroll'

// 使用仓库,发送网络请求
const homeStore = useHomeStore()
homeStore.getHotSuggests()
homeStore.getHomeCategories()
homeStore.getHouseList()

useScroll(window, 200, () => {
  homeStore.getHouseList()
})
</script>

<style scoped lang="less">
.home {
  padding-bottom: 67px;
  background-color: #f5f5f5;
  overflow: auto;
}
</style>
