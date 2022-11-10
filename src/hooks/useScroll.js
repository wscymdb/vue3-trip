/**
 *
 * @param {Element} el
 * @param {Number} count
 * @param {Function} fn
 */

import { onMounted, onUnmounted, ref } from 'vue'
export const useScroll = (el = window, count = 200, fn) => {
  const isReachBottom = ref(false)
  onMounted(() => {
    el.addEventListener('scroll', () => {
      const clientHeigt = document.documentElement.clientHeight
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight

      const resteHeight = scrollHeight - (clientHeigt + scrollTop)

      if (resteHeight <= count) {
        isReachBottom.value = true
        fn && fn()
      }
    })
  })

  onUnmounted(() => {
    fn && el.removeEventListener('scroll', fn)
  })
  return isReachBottom
}
