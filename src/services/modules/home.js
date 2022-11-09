import http from '@/services/request'

export const getHotSuggests = () => {
  return http.request({
    method: 'get',
    url: '/home/hotSuggests',
  })
}
