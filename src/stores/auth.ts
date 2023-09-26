import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const loginFormPosition: Ref<boolean> = ref(false)

  const setLoginFormPosition = (value: boolean): void => {
    loginFormPosition.value = value
  }

  return {
    loginFormPosition,
    setLoginFormPosition
  }
})
