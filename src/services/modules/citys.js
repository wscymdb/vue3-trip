import http from '@/services/request'

export const getCityAreas = (data) => {
  return http.request({
    method: 'get',
    url: '/city/all',
    params: data,
  })
}
