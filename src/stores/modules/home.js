import { defineStore } from 'pinia'
import * as http from '@/services/modules/home'

import { Notify } from 'vant'
import 'vant/es/notify/style'

export const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
  }),
  actions: {
    // 1.热门建议
    async getHotSuggests() {
      const { errcode, errmsg, data } = await http.getHotSuggests()
      if (errcode !== 0) return Notify(errmsg)
      this.hotSuggests = data
    },
  },
})

export default useHomeStore
