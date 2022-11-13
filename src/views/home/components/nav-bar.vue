<template>
  <div class="nav-bar">
    <div class="nav-bar">
      <slot><div class="title">霓裳旅途</div></slot>
    </div>
  </div>
</template>

<script setup name="nav-bar"></script>

<style scoped lang="less">
.nav-bar {
  height: 46px;
  line-height: 46px;
  text-align: center;
  border-bottom: 1px solid #f2f2f2;
  .title {
    font-size: 16px;
    color: var(--primary-color);
  }
}
</style>
