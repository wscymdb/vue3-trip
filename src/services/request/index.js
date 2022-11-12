import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import Qs from 'qs'

import pinia from '@/stores'
import useMainStore from '@/stores/modules/main'

const mainStore = useMainStore(pinia)

class YMAxios {
  constructor(url, timeout) {
    this.instance = axios.create({
      baseURL: url,
      timeout,
    })

    // 请求拦截
    this.instance.interceptors.request.use((req) => {
      // loding效果
      mainStore.showOverlay = true
      // 请求头
      const ct = req.headers['Content-Type']
      if (ct === 'application/x-www-form-urlencoded') {
        req.data = Qs.stringify(req.data)
      }
      return req
    })

    this.instance.interceptors.response.use(
      (res) => {
        mainStore.showOverlay = false
        return res
      },
      (err) => {
        mainStore.showOverlay = false
        throw new Error(err)
      }
    )
  }

  async request(config) {
    console.log(mainStore.showOverlay, '😊😊')
    try {
      const { data } = await this.instance(config)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  get(config) {
    return this.request({
      method: 'get',
      ...config,
    })
  }

  post(config) {
    return this.request({
      method: 'post',
      ...config,
    })
  }
}

const http = new YMAxios(BASE_URL, TIMEOUT)

export default http
