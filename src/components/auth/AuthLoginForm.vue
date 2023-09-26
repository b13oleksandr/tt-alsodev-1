<template>
  <UiModal
    :model-value="loginFormPosition"
    title="Авторизация"
    class="modal-dialog-auth"
    @update:model-value="closeLoginForm"
  >
    <label class="label-auth">
      <span>Логин</span>
      <input id="login" type="text">
    </label>
    <label class="label-auth">
      <span>Пароль</span>
      <input id="password" type="password">
    </label>
    
    <template #footer>
      <div class="footer-buttons">
        <button class="button button-primary button-login" type="submit">
          Войти
        </button>
      </div>
    </template>
  </UiModal>
</template>

<script lang="ts" setup>
import { useAuth } from "@/composable/useAuth"
import UiModal from "@/components/ui/UiModal.vue"

const { loginFormPosition, closeLoginForm } = useAuth()
</script>
