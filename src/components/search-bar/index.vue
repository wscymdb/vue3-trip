<template>
  <div class="search-bar">
    <div class="inner">
      <div class="left" @click="showCalendar = true">
        <div class="time">
          <div><span class="gray">住</span> {{ startTime }}</div>
          <div><span class="gray">离</span> {{ endTime }}</div>
        </div>
        <i class="iconfont icon-sanjiaoxing gray"></i>
      </div>

      <div class="right">
        <div class="placeholder">搜索景点、地标、房源</div>
        <van-icon name="search" class="icon" />
      </div>
    </div>
  </div>
</template>

<script setup name="search-bar">
import { toRefs, ref, computed } from 'vue'
import { formatDate } from '@/utils/formatDate'
import useMainStore from '@/stores/modules/main'

const mainStore = useMainStore()
const { fullDate, showCalendar } = toRefs(mainStore)

const startTime = computed(() => {
  return formatDate(fullDate.value.startTime, 'MM.dd')
})
const endTime = computed(() => {
  return formatDate(fullDate.value.endTime, 'MM.dd')
})
</script>

<style scoped lang="less">
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 14px 14px 10px;
  z-index: 9999;
  font-size: 13px;
  background-color: #fff;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f3f4;
    border-radius: 8px;
    padding: 5px;
    .left {
      display: flex;
      align-items: flex-end;
      padding: 0 3px;
      border-right: 2px solid #fff;

      .gray {
        color: var(--placeholder-gray);
      }
      i {
        font-size: 12px;
      }
    }

    .right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 4px;
      color: var(--placeholder-gray);
      .icon {
        font-size: 22px;
      }
    }
  }
}
</style>
