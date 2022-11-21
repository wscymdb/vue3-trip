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
    <div class="main" v-memo="[detailStore]">
      <!-- banner -->
      <DetailBaanerVue />
      <!-- infos -->
      <DetailInfosVue />
      <!-- 房屋措施 -->
      <DetailFacilityVue name="房屋措施" :ref="getSectionRef" />
      <!-- 房东介绍 -->
      <DetailIntroduceVue name="房东介绍" :ref="getSectionRef" />
      <!-- 房客点评  -->
      <DetailCommentVue name="房客点评" :ref="getSectionRef" />
      <!-- 预定须知 -->
      <DetailRulesVue name="预定须知" :ref="getSectionRef" />
      <!-- 位置周边 -->
      <DetailMapVue name="位置周边" :ref="getSectionRef" />
      <!-- 价格说明 -->
      <DetailPriceIntroVue name="价格说明" :ref="getSectionRef" />
    </div>
    <div class="footer">
      <div class="icon">
        <img class="left-img" src="@/assets/images/tq-ensure-icon.png" alt="" />
        <img class="right-img" src="@/assets/images/icon-bf-i.png" alt="" />
      </div>
      <div class="msg">
        <div class="tip">民宿不规范，亲人泪两行</div>
        <div class="info">名宿预定频道由《霓裳》提提供</div>
      </div>
    </div>
    <div class="tabs" v-if="showTabs">
      <van-tabs @click-tab="onClickTab" v-model:active="activeName">
        <van-tab v-for="item in tabs" :title="item"> </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script setup name="detalis">
import { useRouter, useRoute } from 'vue-router'
import { ref, watch, computed } from 'vue'

import NavBarVue from '../home/components/nav-bar.vue'
import DetailBaanerVue from './components/detail-baaner.vue'
import DetailInfosVue from './components/detail-infos.vue'
import useDetailStore from '@/stores/modules/detail'
import DetailFacilityVue from './components/detail-facility.vue'
import DetailIntroduceVue from './components/detail-introduce.vue'
import DetailCommentVue from './components/detail-comment.vue'
import DetailRulesVue from './components/detail-rules.vue'
import DetailMapVue from './components/detail-map.vue'
import DetailPriceIntroVue from './components/detail-price-intro.vue'
import { useScroll } from '@/hooks/useScroll'
const router = useRouter()
const route = useRoute()
const detailStore = useDetailStore()

detailStore.getDetail({ houseId: route.params.id })

// 回退
const goBack = () => {
  router.back()
}

// tab相关
const sectionEls = ref({})

const tabs = computed(() => Object.keys(sectionEls.value))

// 显示顶部tabs
const { scrollTop } = useScroll({ fn: () => {} })
const showTabs = computed(() => {
  return scrollTop.value > 430
})

// 获取ref
const getSectionRef = (val) => {
  if (!val) return
  const name = val.$el.getAttribute('name')
  sectionEls.value[name] = val.$el
}

let isClick = false
let distance = -1

// 点击tab跳转对应的区域
const onClickTab = (tab) => {
  isClick = true

  distance = sectionEls.value[tab.title].offsetTop - 59
  window.scrollTo({
    top: distance, // 59是tabs的高度
    behavior: 'smooth',
  })
}
let aliveValues = []
// 当滑动到某个位置，顶部的tabs显示对应的位置
const activeName = ref(0)

watch(scrollTop, (curr) => {
  // 当滚动的距离和点击的距离一样的化 让isClick变为false
  if (distance === curr) {
    isClick = false
  }
  // 如果是点击触发的就return
  if (isClick) return

  let sTop = scrollTop.value + 59
  let values = Object.values(sectionEls.value)

  // 做个小的缓存
  if (!aliveValues.length) {
    aliveValues = values.map((item) => item.offsetTop)
  }

  values = aliveValues

  let index = values.length - 1
  for (let i = 0; i < values.length; i++) {
    let value = values[i]
    if (value > sTop) {
      index = i - 1
      break
    }
  }
  activeName.value = index
})
</script>

<style scoped lang="less">
.detail {
  background-color: #f1f3f5;
  padding-bottom: 30px;
  .navbar {
    display: flex;
    padding: 0 15px;
    color: var(--primary-color);
    .title {
      margin-left: 40%;
      transform: translateX(-50%);
    }
  }
  .footer {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      .left-img {
        width: 130px;
        height: 20px;
      }
      .right-img {
        width: 15px;
        height: 15px;
      }
    }
    .msg {
      font-size: 12px;
      margin-top: 15px;
      color: #666;
      text-align: center;
      .info {
        margin-top: 5px;
      }
    }
  }
  .tabs {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 99;
  }
}
</style>
