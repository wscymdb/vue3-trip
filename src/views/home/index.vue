<template>
  <div class="home">
    <NavBarVue />
    <HomeBannerVue />
    <HomeSearchBocVue />
  </div>
</template>

<script setup name="home">
import NavBarVue from './components/nav-bar.vue'
import HomeBannerVue from './components/home-banner.vue'
import HomeSearchBocVue from './components/home-search-box.vue'
</script>

<style scoped lang="less">
.home {
  // padding: 0 10px;
}
</style>
