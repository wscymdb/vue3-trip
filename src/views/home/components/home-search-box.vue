<template>
  <div class="home-search-box">
    <!-- 位置信息 -->
    <div class="location p10">
      <div class="city" @click="getCity">
        {{ cityStore.currentCity.cityName }}
      </div>
      <div class="position" @click="getPosition">
        <span class="text">我的位置</span>
        <van-icon name="location-o" />
      </div>
    </div>
    <!-- 日期范围 -->
    <div
      class="date-range p10 bottom-gray-line"
      @click="() => (showCalendar = true)"
    >
      <div class="start">
        <span class="text">入住</span>
        <span>{{ startDate }}</span>
      </div>
      <div class="date text">{{ stayTime }}</div>
      <div class="end">
        <span class="text">离店</span>
        <span>{{ endDate }}</span>
      </div>
    </div>

    <div class="explain p10 bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="keyword p10 bottom-gray-line">关键字/位置/民宿名</div>
    <CalendarVue />
    <!-- 热门搜索建议 -->
    <div class="hot-suggests p10">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <span
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
          >{{ item.tagText.text }}</span
        >
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="search-btn" @click="handleSearch">开始搜索</div>
  </div>
</template>

<script setup name="home-search-box">
import { useRouter } from 'vue-router'
import { ref, computed, reactive, toRefs } from 'vue'
import useCityStore from '@/stores/modules/citys'
import useHomeStore from '@/stores/modules/home'
import useMainStore from '@/stores/modules/main'
import { formatDate, getDiffDate } from '@/utils/formatDate'
import CalendarVue from '@/components/calendar/index.vue'

const router = useRouter()
const cityStore = useCityStore()
const homeStore = useHomeStore()
const mainStore = useMainStore()

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
      alert(xy)
    },
    (err) => {
      Promise.reject(err)
    }
  )
}

// 存放完整的时间
// const fullDate = mainStore.fullDate

const { showCalendar, fullDate } = toRefs(mainStore)

const startDate = computed(() => formatDate(fullDate.value.startTime))
const endDate = computed(() => formatDate(fullDate.value.endTime))

// 入住时间
const stayTime = computed(() => {
  const stay = getDiffDate(fullDate.value.startTime, fullDate.value.endTime)
  return `共${stay}晚`
})

//======热门建议===========================================================
const { hotSuggests } = toRefs(homeStore)

//
const handleSearch = () => {
  router.push({
    path: '/search',
    query: {
      currentCity: cityStore.currentCity.cityName,
      startDate: startDate.value,
      endDate: endDate.value,
    },
  })
}
</script>

<style scoped lang="less">
.home-search-box {
  background-color: #fff;
  padding: 10px 0 15px;
  box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);

  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  .date-range {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .start,
    .end {
      display: flex;
      flex-direction: column;
      font-size: 15px;
    }
    .text {
      font-size: 13px;
      color: #999;
      margin-bottom: 3px;
    }
  }
  .explain {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #999;
  }
  .keyword {
    color: #999;
    margin-top: 10px;
  }

  .hot-suggests {
    display: flex;
    flex-wrap: wrap;
    padding-left: 15px;
    span {
      padding: 3px 5px;
      margin: 5px;
      border-radius: 12px;
    }
  }

  .search-btn {
    width: 80%;
    padding: 12px;
    font-size: 18px;
    text-align: center;
    color: #fff;
    border-radius: 20px;
    margin: 0 auto;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
