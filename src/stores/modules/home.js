import { defineStore } from 'pinia'
import * as http from '@/services/modules/home'

import { Notify } from 'vant'
import 'vant/es/notify/style'

export const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    pager: {
      pageNo: 1,
    },
    showOverlay: false,
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
      this.showOverlay = true
      let params = {
        page: this.pager.pageNo++,
      }
      const { errcode, errmsg, data } = await http.getHouseList(params)
      this.showOverlay = false
      // this.pager.pageNo++
      if (errcode !== 0) return Notify(errmsg)
      this.houseList = this.houseList.concat(data)
    },
  },
})

export default useHomeStore
