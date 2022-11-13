import { defineStore } from 'pinia'
import * as http from '@/services/modules/citys'

import { Notify } from 'vant'
import 'vant/es/notify/style'

const useCityStore = defineStore('city', {
  state: () => ({
    currentCity: {
      cityName: '河南',
    },
    allCities: {},
  }),
  actions: {
    // 获取城市信息
    async fetchAllcitiesData() {
      const { errcode, errmsg, data } = await http.getCityAreas()
      if (errcode !== 0) return Notify(errmsg)
      this.allCities = data
    },
  },
})

export default useCityStore
