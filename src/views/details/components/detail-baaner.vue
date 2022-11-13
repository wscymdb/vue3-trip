<template>
  <div class="detail-baaner">
    <van-swipe
      class="my-swipe"
      :autoplay="7000"
      indicator-color="white"
      v-if="housePicture"
    >
      <template v-for="(item, index) in housePicture" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value, key, index) in housePictureGroup">
            <div
              class="item"
              :class="{
                active: housePicture[active]?.enumPictureCategory == key,
              }"
            >
              {{ disposeIndicatorName(value[0].title) }}
              <span v-if="housePicture[active]?.enumPictureCategory == key"
                >{{ getCurrentInedx(housePicture[active]) }}/{{
                  value.length
                }}</span
              >
            </div>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup name="detail-baaner">
import { toRefs } from 'vue'
import useDetailStore from '@/stores/modules/detail'
import { computed } from '@vue/reactivity'

const detailStore = useDetailStore()

const housePicture = computed(
  () => detailStore.detailInfo.mainPart?.topModule?.housePicture?.housePics
)

const housePictureGroup = computed(() => {
  if (housePicture) {
    return housePicture.value.reduce((acc, curr) => {
      const key = curr.enumPictureCategory
      if (acc[key]) {
        acc[key].push(curr)
      } else {
        acc[key] = [curr]
      }
      return acc
    }, {})
  }
})

// 处理name
const disposeIndicatorName = (name) => {
  const nameReg = /【(.*?)】/i
  name = nameReg.exec(name)
  return name[1]
}
//
const getCurrentInedx = (item) => {
  const currentArray = housePictureGroup.value[item.enumPictureCategory]
  return currentArray.findIndex((data) => data === item) + 1
}
</script>

<style scoped lang="less">
.detail-baaner {
  // height: 100vh;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  display: flex;
  font-size: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  .item {
    margin: 0 4px;
  }
  .active {
    color: #000;
    background-color: #fff;
    padding: 1px 4px;
    border-radius: 5px;
  }
}
</style>
