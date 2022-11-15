<template>
  <div class="introduce">
    <DetailSectionVue headerText="房东介绍" footerText="查看房东主页">
      <div class="content" v-if="landlordModule">
        <div class="top-scroll">
          <img
            v-if="landlordModule.topScroll"
            :src="landlordModule.topScroll"
            alt=""
          />
        </div>
        <div class="info">
          <div class="left">
            <div class="logo">
              <img :src="landlordModule.hotelLogo" alt="" />
            </div>
            <div class="desc">
              <div class="name">{{ landlordModule.hotelName }}</div>
              <div class="tags">
                <template v-for="(item, index) in landlordModule.hotelTags">
                  <span :style="{ color: item.tagText.color }">{{
                    item.tagText.text
                  }}</span>
                </template>
              </div>
              <div class="landlordTag" v-if="landlordModule.landlordTag">
                <template v-for="(item, index) in landlordModule.landlordTag">
                  <span
                    :style="{
                      color: item.tagText.color,
                      background: item.tagText.background.color,
                    }"
                    >{{ item.tagText.text }}</span
                  >
                </template>
              </div>
            </div>
          </div>
          <div class="right">联系房东</div>
        </div>
        <div class="hotelSummary">
          <template v-for="(item, index) in landlordModule.hotelSummary">
            <div class="item">
              <span class="title">{{ item.title }}</span>
              <span class="introduction">{{ item.introduction }}</span>
              <span class="tip">{{ item.tip }}</span>
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

const landlordModule = computed(() => {
  if (detailInfo.value.mainPart) {
    return detailInfo.value.mainPart.dynamicModule.landlordModule
  }
})
</script>

<style scoped lang="less">
.introduce {
  margin: 20px 0;
  font-size: 12px;
  .content {
    .top-scroll {
      overflow: hidden;
      border-radius: 6px;
      margin-bottom: 15px;
    }
    .info {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      .left {
        width: 76%;
        display: flex;
        align-items: center;
        .logo {
          width: 80px;
          // height: 80px;
          border-radius: 50%;
          overflow: hidden;
        }
        .desc {
          margin-left: 10px;
          .name {
            font-size: 18px;
            font-weight: 700;
          }
          .tags {
            margin: 3px 0;
            span {
              &:not(:last-child) {
                margin-right: 3px;
                padding-right: 4px;
                border-right: 2px solid #999;
              }
            }
          }
          .landlordTag {
            display: flex;
            span {
              padding: 1px 2px;
              border-radius: 4px;
            }
          }
        }
      }
      .right {
        flex: 1;
        text-align: center;
        background: var(--theme-linear-gradient);
        padding: 6px 10px;
        color: #fff;
        border-radius: 5px;
      }
    }
    .hotelSummary {
      display: flex;
      justify-content: space-between;
      margin: 30px 15px 15px;
      font-size: 13px;
      .item {
        display: flex;
        flex-direction: column;
        .title {
          color: #999;
        }
        .introduction {
          font-size: 18px;
          font-weight: 700;
          margin: 3px 0;
        }
        .tip {
        }
      }
    }
  }
}
</style>
