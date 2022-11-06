import { defineStore } from 'pinia'

const useLogin = defineStore('useLogin', {
  state: () => ({
    name: 'login',
  }),
})

export default useLogin
