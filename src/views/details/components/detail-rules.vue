<template>
  <div class="rules">
    <DetailSectionVue headerText="预定须知" footerText="">
      <div class="content" v-if="rulesModule">
        <div class="orderRules">
          <template
            v-for="(item, index) in rulesModule.orderRules"
            :key="index"
          >
            <div class="item">
              <span class="title">{{ item.title }}</span>
              <span :style="{ color: item.color }">{{
                item.introduction
              }}</span>
            </div>
          </template>
        </div>
        <div class="cancelRules">
          <van-steps direction="vertical" :active="0">
            <template v-for="(item, index) in rulesModule.cancelRules">
              <van-step v-if="item.introduction">
                <div class="introduction">
                  {{ item.introduction }}
                </div>
                <div
                  class="tip"
                  :style="{ color: item.tipColor, background: item.backColor }"
                >
                  {{ item.tip }}
                </div>
              </van-step>
            </template>
          </van-steps>
        </div>
        <div class="checkInRules">
          <template
            v-for="(item, index) in rulesModule.checkInRules"
            :key="index"
          >
            <div class="items">
              <div class="left">{{ item.title }}</div>
              <div class="right">
                <template v-for="(val, i) in item.items" :key="i">
                  <span class="tag"
                    ><van-icon name="passed" />{{ val.introduction }}</span
                  >
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </DetailSectionVue>
  </div>
</template>

<script setup name="introduce">
import { toRefs, computed } from 'vue'

import useDetailStore from '@/stores/modules/detail'
import DetailSectionVue from '@/components/detail-section/index.vue'

const detailStore = useDetailStore()

const { detailInfo } = toRefs(detailStore)

const rulesModule = computed(() => {
  if (detailInfo.value.mainPart) {
    return detailInfo.value.mainPart.dynamicModule.rulesModule
  }
})
</script>

<style scoped lang="less">
.rules {
  background-color: #fff;
  margin-top: 15px;
  font-size: 12px;
  padding: 10px;
  .content {
    color: #666;

    .orderRules {
      .item {
        margin: 20px 0;
        display: flex;
        // justify-content: space-between;
        .title {
          width: 18%;
        }
      }
    }
    .cancelRules {
      margin-left: 25px;
      .van-step {
        display: flex;
        font-size: 12px;
        .introduction {
          margin-bottom: 3px;
        }
        .tip {
          padding: 0 5px;
        }
      }
    }
    .checkInRules {
      .items {
        display: flex;
        .left {
          width: 18%;
          // margin-right: 10px;
        }
        .right {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          .tag {
            width: 50%;
            margin-bottom: 8px;
            .van-icon {
              color: #17d2bc;
              margin-right: 3px;
            }
          }
        }
      }
    }
  }
}
</style>
