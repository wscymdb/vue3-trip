import http from '@/services/request'

export const getDetail = (data) => {
  return http.request({
    method: 'get',
    url: '/detail/infos',
    params: data,
  })
}
