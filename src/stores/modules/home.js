import { defineStore } from 'pinia'
import { toRefs } from 'vue'
import * as http from '@/services/modules/home'

import pinia from '..'
import useMainStore from '@/stores/modules/main'

import { Notify } from 'vant'
import 'vant/es/notify/style'

const mainStore = useMainStore(pinia)

export const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    pager: {
      pageNo: 1,
    },
  }),
  actions: {
    // 1.热门建议
    async getHotSuggests() {
      const { errcode, errmsg, data } = await http.getHotSuggests()
      if (errcode !== 0) return Notify(errmsg)
      this.hotSuggests = data
    },
    // 2.种类
    async getHomeCategories() {
      const { errcode, errmsg, data } = await http.getCategories()
      if (errcode !== 0) return Notify(errmsg)
      this.categories = data
    },
    // 3.house list
    async getHouseList() {
      if (!mainStore.showOverlay) {
        let params = {
          page: this.pager.pageNo++,
        }
        const { errcode, errmsg, data } = await http.getHouseList(params)

        // this.pager.pageNo++
        if (errcode !== 0) return Notify(errmsg)
        this.houseList = this.houseList.concat(data)
      }
    },
  },
})

export default useHomeStore
