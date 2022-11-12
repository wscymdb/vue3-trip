<template>
  <div class="home-list">
    <h2>热门精选</h2>
    <div class="item">
      <template v-for="(item, index) in houseList" :key="index">
        <houseItemV9
          :houseInfo="item.data"
          v-if="item.discoveryContentType === 9"
          @click="handleClick"
        />
        <houseItemV3
          :houseInfo="item.data"
          v-if="item.discoveryContentType === 3"
          @click="handleClick"
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
const { houseList } = toRefs(homeStore)

const handleClick = () => {
  console.log('first')
}
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
