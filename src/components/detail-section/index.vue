<template>
  <div class="section">
    <div class="header bottom-gray-line">{{ headerText }}</div>
    <div class="content">
      <slot>我是默认内容</slot>
    </div>
    <div class="more" v-if="footerText">
      {{ footerText }}<van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup name="detail-section">
import { defineProps } from 'vue'

const props = defineProps({
  headerText: {
    type: String,
    default: () => '头部',
  },
  footerText: {
    type: String,
    default: () => '',
  },
})
</script>

<style scoped lang="less">
.section {
  padding: 0 10px;
  .header {
    text-align: left;
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 10px;
  }
  .content {
    margin: 10px 0;
  }
  .more {
    text-align: right;
    font-size: 14px;
    font-weight: 700;
    color: var(--primary-color);
  }
}
</style>
