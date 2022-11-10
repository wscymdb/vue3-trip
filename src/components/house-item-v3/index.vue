<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="houseInfo?.image.url" alt="" />
      </div>
      <div class="infos">
        <div class="location">
          <van-icon name="location" />{{ houseInfo.location }}
        </div>
        <div class="name">{{ houseInfo.houseName }}</div>
        <div class="summary">{{ houseInfo.summaryText }}</div>
        <div class="price">
          <span>￥{{ houseInfo.finalPrice }}</span>
          <span>￥{{ houseInfo.productPrice }}</span>
          <span>已减{{ houseInfo.productPrice - houseInfo.finalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="house-item-v3">
import { defineProps } from 'vue'

const props = defineProps({
  houseInfo: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style scoped lang="less">
@import '@/assets/css/common.less';
.house-item {
  width: 50%;
  box-sizing: border-box;
  flex-shrink: 0;
  height: 250px;
  overflow: hidden;
  padding: 10px 5px;

  .item-inner {
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    background-color: #fff;

    .cover {
      overflow: hidden;
    }
    .infos {
      margin: 5px 0 0 10px;
      font-size: 13px;
      .location {
        font-size: 12px;
        color: #999;
      }
      .name {
        margin: 5px 0;
        .ellipsisMore();
      }
      .summary {
        margin-bottom: 3px;
      }
      .price {
        span:first-child {
          font-size: 14px;
          color: var(--primary-color);
        }
        span:nth-child(2) {
          font-size: 12px;
          color: #999;
          text-decoration: line-through;
          margin: 0 5px;
        }
        span:nth-child(3) {
          padding: 1px 7px;
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          border-radius: 10px;
          color: #fff;
          font-size: 12px;
          // transform: scale(1.1);
        }
      }
    }
  }
}
</style>
