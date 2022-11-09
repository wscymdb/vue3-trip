<template>
  <div class="container">
    <van-overlay :show="cityStore.showOverlay">
      <div class="wrapper">
        <van-loading color="#0094ff">拼命加载中</van-loading>
      </div>
    </van-overlay>
    <div class="top">
      <van-search
        v-model="searchVal"
        shape="round"
        show-action
        placeholder="请输入搜索关键词"
        @cancel="searchCancel"
      />
      <van-tabs v-model:active="activeVal">
        <template v-for="(value, key, index) in allCities" :key="index">
          <van-tab :title="value.title" :name="key"> </van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(val, key, index) in allCities">
        <CityList
          :groupData="val"
          :activeVal="activeVal"
          v-show="key === activeVal"
        />
      </template>
    </div>
  </div>
</template>

<script setup name="city">
import { ref, toRefs, computed } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/citys'
import CityList from './components/city-list.vue'

const router = useRouter()
const cityStore = useCityStore()

// about search
const searchVal = ref('')
const searchCancel = () => {
  router.back()
}

// about tabActive
const activeVal = ref('cityGroup')

// 从store中拿数据

cityStore.fetchAllcitiesData()
const { allCities } = toRefs(cityStore)

//
// const currentCity = computed(() => allCities.value?.[activeVal.value])
//
</script>

<style scoped lang="less">
.container {
  --van-tabs-bottom-bar-color: var(--primary-color);
  --van-tabs-line-height: 32px;
  .top {
    position: relative;
    z-index: 99;
  }
  .content {
    height: calc(100vh - 86px);
    overflow: auto;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
}
</style>
