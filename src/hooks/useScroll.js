/**
 * @param {Element} el
 * @param {Number} count
 * @param {Function} fn
 */

import { throttle } from 'underscore'
import { onMounted, onUnmounted, ref } from 'vue'

export const useScroll = (el = window, count = 200, fn) => {
  const isReachBottom = ref(false)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeigt = ref(0)

  // 节流
  const scrollLinsterHandler = throttle(() => {
    clientHeigt.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight

    const resteHeight =
      scrollHeight.value - (clientHeigt.value + scrollTop.value)

    if (resteHeight <= count) {
      isReachBottom.value = true
      fn && fn()
    } else {
      isReachBottom.value = false
    }
  }, 200)

  onMounted(() => {
    el.addEventListener('scroll', scrollLinsterHandler)
  })

  onUnmounted(() => {
    fn && el.removeEventListener('scroll', fn)
  })
  return { isReachBottom, scrollHeight, scrollTop, clientHeigt }
}
