import http from '@/services/request'

export const getHotSuggests = () => {
  return http.request({
    method: 'get',
    url: '/home/hotSuggests',
  })
}
export const getCategories = () => {
  return http.request({
    method: 'get',
    url: '/home/categories',
  })
}
export const getHouseList = (params) => {
  return http.request({
    method: 'get',
    url: '/home/houselist',
    params,
  })
}
