import { defineStore } from 'pinia'

import * as http from '@/services/modules/detail'

import { Notify } from 'vant'
import 'vant/es/notify/style'

const useDetailStore = defineStore('detail', {
  state: () => ({
    detailInfo: {},
  }),

  actions: {
    async getDetail(params) {
      const { errcode, errmsg, data } = await http.getDetail(params)

      if (errcode !== 0) return Notify(errmsg)

      this.detailInfo = data
    },
  },
})

export default useDetailStore
