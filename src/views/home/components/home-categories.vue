<template>
  <div class="container">
    <div class="categories">
      <template v-for="item in categories" :key="item.id">
        <div class="item">
          <img :src="item.pictureUrl" alt="" />
          <span>{{ item.title }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup name="home-categories">
import { useHomeStore } from '@/stores/modules/home'
import { toRefs } from 'vue'

const homeStore = useHomeStore()
const { categories } = toRefs(homeStore)
</script>

<style scoped lang="less">
.categories {
  display: flex;
  justify-content: space-between;
  overflow-y: auto;
  margin: 15px 0;
  font-size: 12px;
  margin: 10px auto;
  padding-bottom: 10px;
  .item {
    flex-shrink: 0;
    width: 20%;
    // margin: 0 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 30px;
    margin-bottom: 5px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
