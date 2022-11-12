<template>
  <div class="calendar">
    <van-calendar
      v-model:show="showCalendar"
      type="range"
      color="#ff9854"
      :max-range="10"
      :show-confirm="false"
      :formatter="formatter"
      @confirm="calendarConfirm"
    />
  </div>
</template>

<script setup name="calendar">
import { ref, toRefs } from 'vue'
import useMainStore from '@/stores/modules/main'

const mainStore = useMainStore()
const { showCalendar } = toRefs(mainStore)
// calendar show
// 日期确认
const calendarConfirm = (date) => {
  const [start, end] = date

  mainStore.fullDate.startTime = start
  mainStore.fullDate.endTime = end

  // 隐藏日历
  mainStore.showCalendar = false
}

// 更改日历文案
const formatter = (day) => {
  const month = day.date.getMonth() + 1
  const date = day.date.getDate()

  if (month === 11) {
    if (date === 13) {
      day.bottomInfo = '陈'
    }
    if (date === 14) {
      day.bottomInfo = '哈'
    }
    if (date === 15) {
      day.bottomInfo = '哈'
    }
    if (date === 16) {
      day.bottomInfo = '真'
    }
    if (date === 17) {
      day.bottomInfo = '帅'
    }
  }
  if (day.type === 'start') {
    day.bottomInfo = '入住'
  } else if (day.type === 'end') {
    day.bottomInfo = '离店'
  }
  return day
}
</script>

<style scoped lang="less"></style>
