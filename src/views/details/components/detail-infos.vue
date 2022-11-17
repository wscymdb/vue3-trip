<template>
  <div class="infos">
    <div class="name">
      {{ topModule.houseName }}
    </div>
    <div class="tags">
      <template v-for="(item, index) in topModule.houseTags" :key="index">
        <span
          v-if="item.tagText"
          :style="{
            color: item.tagText?.color,
            background: item.tagText?.background.color,
          }"
          >{{ item.tagText?.text }}</span
        >
      </template>
    </div>
    <div class="comment" v-if="topModule.commentBrief">
      <div class="left">
        <span class="score">{{ topModule.commentBrief.overall }}</span>
        <span class="title">{{ topModule.commentBrief.scoreTitle }}</span>
        <span class="brief">"{{ topModule.commentBrief.commentBrief }}"</span>
      </div>
      <div class="right">
        <span>{{ topModule.commentBrief?.totalCount }}条评论</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="postion">
      <div class="left">{{ topModule.nearByPosition?.address }}</div>
      <div class="right">
        <span>地图·周边</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup name="infos">
import useDetailStore from '@/stores/modules/detail'
import { toRefs, computed } from 'vue'
const detailStore = useDetailStore()

const { detailInfo } = toRefs(detailStore)

const topModule = computed(() => {
  if (detailInfo.value.mainPart) {
    return detailInfo.value.mainPart.topModule
  }
  return {}
})
</script>

<style scoped lang="less">
.infos {
  background-color: #fff;
  font-size: 12px;
  padding: 10px;
  margin-bottom: 15px;
  .name {
    font-size: 18px;
    font-weight: 700;
  }
  .tags {
    margin: 10px 0;
    span {
      margin: 0 2px;
      padding: 1px;
    }
  }
  .comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;
    padding: 5px 9px;
    border-radius: 5px;
    .left {
      color: #000;
      .score {
        font-size: 18px;
        font-weight: 700;
      }
      .title {
        margin: 0 5px;
        font-weight: 700;
      }
      .brief {
        color: #999;
      }
    }
    .right {
      color: var(--primary-color);
    }
  }
  .postion {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    background-color: #f8f8f8;
    padding: 7px 9px;
    border-radius: 5px;
    .left {
      font-size: 13px;
      font-weight: 700;
    }
    .right {
      color: var(--primary-color);
    }
  }
}
</style>
