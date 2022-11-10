<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="houseInfo.image.url" alt="" />
        <div class="infos">
          <div class="summary">{{ houseInfo.summaryText }}</div>
          <div class="name">{{ houseInfo.houseName }}</div>
          <div class="price">
            <van-rate
              :model-value="Number(houseInfo.commentScore)"
              size="15px"
              color="#fff"
              void-color="#ddd"
              readonly
              allow-half
            />
            <span>￥{{ houseInfo.finalPrice }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="house-item-v9">
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
    .cover {
      position: relative;
      overflow: hidden;
      border-radius: 5px;
      height: 100%;
      .infos {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        width: 95%;
        color: #fff;
        font-size: 13px;
        .name {
          margin: 4px 0;
          line-height: 1.3;
          .ellipsisMore();
        }
        .price {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
