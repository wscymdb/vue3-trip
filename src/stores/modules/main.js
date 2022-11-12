import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    fullDate: {
      startTime: Date.now(),
      endTime: new Date().setDate(new Date().getDate() + 1),
    },
    showCalendar: false,
    showOverlay: false,
  }),
})

export default useMainStore
