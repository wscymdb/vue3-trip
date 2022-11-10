<template>
  <div class="home-list">
    <van-overlay :show="showOverlay">
      <div class="wrapper">
        <img class="loding" src="@/assets/images/loding.gif" alt="" />
      </div>
    </van-overlay>
    <h2>热门精选</h2>
    <div class="item">
      <template v-for="(item, index) in houseList" :key="index">
        <houseItemV9
          :houseInfo="item.data"
          v-if="item.discoveryContentType === 9"
        />
        <houseItemV3
          :houseInfo="item.data"
          v-if="item.discoveryContentType === 3"
        />
      </template>
    </div>
  </div>
</template>

<script setup name="home-list">
import useHomeStore from '@/stores/modules/home'
import houseItemV9 from '@/components/house-item-v9/index.vue'
import houseItemV3 from '@/components/house-item-v3/index.vue'
import { toRefs } from 'vue'

const homeStore = useHomeStore()
const { houseList, showOverlay } = toRefs(homeStore)
</script>

<style scoped lang="less">
.home-list {
  padding: 0 10px;
  .item {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
