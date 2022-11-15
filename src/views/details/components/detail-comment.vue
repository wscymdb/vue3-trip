<template>
  <div class="comment">
    <DetailSectionVue
      headerText="房客点评"
      :footerText="`产看全部${commentModule?.totalCount}条评价`"
    >
      <div class="content" v-if="commentModule">
        <div class="top">
          <div class="info">
            <div class="score">{{ commentModule.overall }}</div>
            <div class="desc">
              <div class="score-title">{{ commentModule.scoreTitle }}</div>
              <div class="total-count">
                {{ commentModule.totalCount }}条评价
              </div>
              <div class="rate">
                <van-rate
                  :modelValue="commentModule.overall"
                  size="12px"
                  readonly
                  allow-half
                  color="#ff9854"
                />
              </div>
            </div>
          </div>
          <div class="introduce">
            <template v-for="(item, index) in commentModule.subScores">
              <div class="tag">
                <span>{{ item.slice(0, -3) }}</span>
                <span class="score">{{ item.slice(-3) }}</span>
              </div>
            </template>
          </div>
        </div>
        <div class="tags">
          <template v-for="(item, index) in commentModule.commentTagVo">
            <div
              class="tag"
              :style="{ color: item.color, background: item.backgroundColor }"
            >
              {{ item.text }}
            </div>
          </template>
        </div>
        <div class="comment">
          <div class="descr">
            <div class="left">
              <div class="avatar">
                <img :src="commentModule.comment.userAvatars" alt="" />
              </div>
              <div class="desc">
                <div class="nick-name">
                  {{ commentModule.comment.userName }}
                </div>
                <div class="date">{{ commentModule.comment.checkInDate }}</div>
              </div>
            </div>
            <div class="right">
              <div class="overall">
                {{ commentModule.comment.overall + '.0' }}
              </div>
              <div class="rate">
                <van-rate
                  :modelValue="commentModule.comment.overall"
                  size="12px"
                  readonly
                  allow-half
                  color="#ff9854"
                />
              </div>
            </div>
          </div>
          <div class="infos">{{ commentModule.comment.commentDetail }}</div>
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

const commentModule = computed(() => {
  if (detailInfo.value.mainPart) {
    return detailInfo.value.mainPart.dynamicModule.commentModule
  }
})
</script>

<style scoped lang="less">
@import '@/assets/css/common.less';
.comment {
  margin: 20px 0;
  font-size: 12px;
  .content {
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .info {
        display: flex;
        .score {
          font-size: 40px;
          font-weight: 700;
          margin-right: 8px;
        }

        .desc {
          display: flex;
          flex-direction: column;
          .score-title {
            font-size: 14px;
          }
          .total-count {
            color: #999;
          }
        }
      }
      .introduce {
        width: 45%;
        display: flex;
        flex-wrap: wrap;
        color: #999;
        .tag {
          width: 50%;
          margin: 2px 0;
          .score {
            color: #000;
            font-weight: 700;
          }
        }
      }
    }
    .tags {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      .tag {
        margin: 5px;
        padding: 3px 5px;
        border-radius: 7px;
      }
    }
    .comment {
      background-color: #f7f9fb;
      padding: 10px;
      border-radius: 8px;
      .descr {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          display: flex;
          align-items: center;
          .avatar {
            height: 45px;
            border-radius: 50%;
            overflow: hidden;
          }
          .desc {
            margin-left: 10px;
            .nick-name {
              font-size: 14px;
              font-weight: 700;
            }
            .date {
              margin-top: 5px;
              color: #999;
            }
          }
        }
        .right {
          .overall {
            text-align: right;
            font-weight: 700;
            font-size: 18px;
          }
        }
      }
      .infos {
        margin-top: 15px;
        line-height: 1.5;
        .ellipsisMore();
      }
    }
  }
}
</style>
