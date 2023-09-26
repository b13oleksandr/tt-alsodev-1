import type { Ref } from "vue"
import { computed } from "vue"
import { useAuthStore } from "@/stores/auth"

export const useAuth = () => {
  const authStore = useAuthStore()
  const loginFormPosition: Ref<boolean> = computed(() => authStore.loginFormPosition)

  const openLoginForm = (): void => {
    authStore.setLoginFormPosition(true)
  }

  const closeLoginForm = (): void => {
    authStore.setLoginFormPosition(false)
  }

  return {
    loginFormPosition,
    openLoginForm,
    closeLoginForm
  }
}