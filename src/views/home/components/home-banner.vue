<template>
  <div class="container">
    <van-swipe class="my-swipe" :autoplay="6000" indicator-color="white">
      <van-swipe-item>
        <img src="@/assets/images/home-navbar1.webp" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/home-navbar2.webp" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup name="home-banner"></script>

<style scoped lang="less">
.van-swipe-item {
  height: 120px;
}
</style>
