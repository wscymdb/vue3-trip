<template>
  <div class="favor">
    <div class="list" ref="list">
      <ul>
        <template v-for="index in 100">
          <li>index</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup name="favor">
import { useScroll } from '@/hooks/useScroll'
import { computed } from '@vue/reactivity'
import { onMounted, ref } from 'vue'

const list = ref()
let top = ref()

console.log(list)
const { scrollTop } = useScroll({
  elRef: list,
  fn: () => {},
})
</script>

<style scoped lang="less">
.list {
  height: 300px;
  background-color: #ffa;
  overflow-y: auto;
}
</style>
