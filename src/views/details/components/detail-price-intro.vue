<template>
  <div class="price-intro">
    <DetailSectionVue headerText="价格说明" footerText="">
      <div class="content" v-if="introductionModule">
        {{ introductionModule.introduction }}
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

const introductionModule = computed(() => {
  if (detailInfo.value.mainPart) {
    return detailInfo.value.mainPart.introductionModule
  }
})
</script>

<script>
setTimeout(() => {}, 2000)
</script>

<style scoped lang="less">
.price-intro {
  background-color: #fff;
  padding: 10px 0;
  margin-top: 15px;
  font-size: 12px;
  line-height: 1.3;

  .content {
    color: #666;
  }
}
</style>
