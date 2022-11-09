<template>
  <div class="container">
    <div class="location">
      <div class="city" @click="getCity">
        {{ cityStore.currentCity.cityName }}
      </div>
      <div class="position" @click="getPosition">
        <span class="text">我的位置</span>
        <van-icon name="location-o" />
      </div>
    </div>
  </div>
</template>

<script setup name="home-search-box">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import useCityStore from '@/stores/modules/citys'

const router = useRouter()
const cityStore = useCityStore()

// 获取城市
const getCity = () => {
  router.push('/city')
}

// 获取当前位置信息
const getPosition = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      const { latitude, longitude } = res.coords
      console.log(res.coords)
      // 当前位置的经纬度  chrome浏览器不支持因为没有翻墙
      const xy = latitude + '---' + longitude
      // alert(xy)
    },
    (err) => {
      Promise.reject(err)
    }
  )
}

// 选取城市
</script>

<style scoped lang="less">
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 15px;
  .city {
    color: #333;
  }
  .position {
    display: flex;
    align-items: center;
    color: #666;
    .van-icon {
      margin-left: 5px;
      color: var(--primary-color);
      font-size: 18px;
    }
  }
}
</style>
