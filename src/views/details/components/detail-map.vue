<template>
  <div class="detail-map">
    <DetailSectionVue headerText="位置周边" footerText="查看更多周边信息">
      <div class="content">
        <div class="baidu" ref="mapRef"></div>
      </div>
    </DetailSectionVue>
  </div>
</template>

<script setup name="introduce">
import { toRefs, computed, onMounted, ref, onUpdated, watch } from 'vue'

import useDetailStore from '@/stores/modules/detail'
import DetailSectionVue from '@/components/detail-section/index.vue'

const detailStore = useDetailStore()

const { detailInfo } = toRefs(detailStore)

const positionModule = computed(() => {
  if (detailInfo.value.mainPart) {
    return detailInfo.value.mainPart.dynamicModule.positionModule
  }
})

// 初始化地图
const mapRef = ref()
const initMap = (longitude, latitude) => {
  const map = new BMapGL.Map(mapRef.value) // 创建地图实例
  const point = new BMapGL.Point(longitude, latitude) // 创建点坐标
  map.centerAndZoom(point, 14)
  map.enableScrollWheelZoom(true)

  const marker = new BMapGL.Marker(point) // 创建标注
  map.addOverlay(marker) // 将标注添加到地图中
}
onMounted(() => {
  initMap(116.404, 39.915)
})
watch(positionModule, () => {
  const { longitude, latitude } = positionModule.value
  initMap(longitude, latitude)
})
</script>

<script>
setTimeout(() => {}, 2000)
</script>

<style scoped lang="less">
.detail-map {
  background-color: #fff;
  padding: 10px 0;
  margin-top: 15px;
  .content {
    .baidu {
      height: 250px;
    }
  }
}
</style>
