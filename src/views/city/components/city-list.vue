<template>
  <div class="container">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="#">热门</van-index-anchor>
      <div class="city">
        <template v-for="item in groupData?.hotCities">
          <span class="city_item" @click="handleClick(item)">{{
            item.cityName
          }}</span>
        </template>
      </div>
      <template v-for="(item, index) in groupData?.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(iten, indey) in item.cities" :key="indey">
          <van-cell :title="iten.cityName" @click="handleClick(iten)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup name="city-list">
import { defineProps, computed } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/citys'

const router = useRouter()
const cityStore = useCityStore()

const props = defineProps({
  groupData: Object,
  activeVal: String,
})

// 动态获取索引
const indexList = computed(() => {
  const list = props.groupData?.cities.map((item) => item.group)
  list.unshift('#')
  return list
})

// 点击城市
const handleClick = (city) => {
  cityStore.currentCity = city
  router.back()
  console.log(city)
}
</script>

<style scoped lang="less">
.city {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 28px 10px 10px;

  &_item {
    width: 20%;
    height: 28px;
    line-height: 28px;
    margin: 10px 1%;
    text-align: center;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    background-color: #fff4ec;
  }
}
</style>
