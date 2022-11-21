/**
 * @param {Element} el
 * @param {Number} count
 * @param {Function} fn
 */

import { throttle } from 'underscore'
import { onMounted, onUnmounted, ref, onDeactivated, onActivated } from 'vue'

export const useScroll = ({ elRef, count = 200, fn }) => {
  let el = window

  const isReachBottom = ref(false)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeigt = ref(0)

  // 节流
  const scrollLinsterHandler = throttle(() => {
    clientHeigt.value = elRef
      ? el.clientHeight
      : document.documentElement.clientHeight

    scrollTop.value = elRef ? el.scrollTop : document.documentElement.scrollTop

    scrollHeight.value = elRef
      ? el.scrollHeight
      : document.documentElement.scrollHeight

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
    el = elRef ? elRef.value : window
    el.addEventListener('scroll', scrollLinsterHandler)
  })

  onUnmounted(() => {
    fn && el.removeEventListener('scroll', scrollLinsterHandler)
  })

  // 使用keepalive的钩子
  onActivated(() => {
    el = elRef ? elRef.value : window
    el.addEventListener('scroll', scrollLinsterHandler)
  })

  onDeactivated(() => {
    fn && el.removeEventListener('scroll', scrollLinsterHandler)
  })

  return { isReachBottom, scrollHeight, scrollTop, clientHeigt }
}
