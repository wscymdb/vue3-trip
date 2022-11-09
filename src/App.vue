<script setup>
import TabBar from '@/components/tab-bar/index.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="container">
    <routerView></routerView>
    <TabBar v-if="!route.meta.hiddenTabbar" />
  </div>
</template>

<style scoped>
.container {
  max-width: var(--max-width);
  margin: 0 auto;
}
</style>
