<template>
  <div class="container">
    <h1>开始时间:{{ $route.query.startDate }}</h1>
    <h1>结束时间:{{ $route.query.endDate }}</h1>
    <h1>当前城市:{{ $route.query.currentCity }}</h1>
  </div>
</template>

<script setup name="search"></script>

<style scoped lang="less"></style>
