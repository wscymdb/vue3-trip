<template>
  <div class="home">
    <NavBarVue />
    <HomeBannerVue />
    <HomeSearchBoxVue />
  </div>
</template>

<script setup name="home">
import NavBarVue from './components/nav-bar.vue'
import HomeBannerVue from './components/home-banner.vue'
import HomeSearchBoxVue from './components/home-search-box.vue'
import useHomeStore from '@/stores/modules/home'

// 使用仓库,发送网络请求
const homeStore = useHomeStore()
homeStore.getHotSuggests()
</script>

<style scoped lang="less">
.home {
  // padding: 0 10px;
}
</style>
