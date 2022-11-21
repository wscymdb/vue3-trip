<script setup>
import TabBar from '@/components/tab-bar/index.vue'
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'
import useMainStore from '@/stores/modules/main'

const mainStore = useMainStore()
const { showOverlay } = toRefs(mainStore)

const route = useRoute()
</script>

<template>
  <div class="container">
    <routerView v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </routerView>

    <TabBar v-if="!route.meta.hiddenTabbar" />
    <van-overlay :show="showOverlay">
      <div class="wrapper">
        <img class="loding" src="@/assets/images/loding.gif" alt="" />
      </div>
    </van-overlay>
  </div>
</template>

<style scoped>
.container {
  max-width: var(--max-width);
  margin: 0 auto;
}
</style>
