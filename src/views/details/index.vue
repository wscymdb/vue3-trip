<template>
  <div class="detail">
    <NavBarVue>
      <template #default>
        <div class="navbar">
          <div class="return" @click="goBack">
            <van-icon name="arrow-left" />霓裳
          </div>
          <div class="title">房屋详情</div>
        </div>
      </template>
    </NavBarVue>
    <!-- banner -->
    <DetailBaanerVue />
    <!-- infos -->
    <DetailInfosVue />
    <!-- 房屋措施 -->
    <DetailFacilityVue />
    <!-- 房东介绍 -->
    <DetailIntroduceVue />
    <!-- 房客点评  -->
    <DetailCommentVue />
    <!-- 预定须知 -->
    <DetailRulesVue />
  </div>
</template>

<script setup name="detalis">
import { useRouter, useRoute } from 'vue-router'

import NavBarVue from '../home/components/nav-bar.vue'
import DetailBaanerVue from './components/detail-baaner.vue'
import DetailInfosVue from './components/detail-infos.vue'
import useDetailStore from '@/stores/modules/detail'
import DetailFacilityVue from './components/detail-facility.vue'
import DetailIntroduceVue from './components/detail-introduce.vue'
import DetailCommentVue from './components/detail-comment.vue'
import DetailRulesVue from './components/detail-rules.vue'
const router = useRouter()
const route = useRoute()
const detailStore = useDetailStore()

detailStore.getDetail({ houseId: route.params.id })

// 回退
const goBack = () => {
  router.back()
}
</script>

<style scoped lang="less">
.detail {
  .navbar {
    display: flex;
    padding: 0 15px;
    color: var(--primary-color);
    .title {
      margin-left: 40%;
      transform: translateX(-50%);
    }
  }
}
</style>
