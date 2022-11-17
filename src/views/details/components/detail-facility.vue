<template>
  <div class="facility">
    <DetailSectionVue headerText="房屋措施" footerText="查看全部措施">
      <div class="content" v-if="houseFacility">
        <template
          v-for="(item, index) in houseFacility.houseFacilitys"
          :key="index"
        >
          <div class="item" v-if="houseFacility.facilitySort.includes(index)">
            <div class="left">
              <img :src="item.icon" alt="" />
              {{ item.groupName }}
            </div>
            <div class="right">
              <template v-for="(val, i) in item.facilitys.slice(0, 4)" :key="i">
                <div class="faciltys">
                  <van-icon name="passed" class="success" />
                  <span>{{ val.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </DetailSectionVue>
  </div>
</template>

<script setup name="facility">
import { toRefs, computed } from 'vue'

import useDetailStore from '@/stores/modules/detail'
import DetailSectionVue from '@/components/detail-section/index.vue'

const detailStore = useDetailStore()

const { detailInfo } = toRefs(detailStore)

const houseFacility = computed(() => {
  if (detailInfo.value.mainPart) {
    return detailInfo.value.mainPart.dynamicModule.facilityModule.houseFacility
  }
})
</script>

<style scoped lang="less">
.facility {
  background-color: #fff;
  padding: 10px 0;
  .content {
    padding: 16px 10px;
    border-radius: 12px;
    background-color: #f7f9fb;
    .item {
      display: flex;
      align-items: center;
      margin: 15px 0;
      .left {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 25px;
          height: 25px;
          margin-bottom: 5px;
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        .faciltys {
          width: 50%;
          display: flex;
          align-items: center;
          margin: 8px 0;
          .success {
            color: #17d2bc;
            margin-right: 4px;
          }
        }
      }
    }
  }
}
</style>
