import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import Qs from 'qs'

class YMAxios {
  constructor(url, timeout) {
    this.instance = axios.create({
      baseURL: url,
      timeout,
    })
  }

  async request(config) {
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

// 请求拦截
http.instance.interceptors.request.use((req) => {
  const ct = req.headers['Content-Type']
  if (ct === 'application/x-www-form-urlencoded') {
    req.data = Qs.stringify(req.data)
  }
  return req
})
export default http