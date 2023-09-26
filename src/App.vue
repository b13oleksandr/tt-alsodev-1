<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import AppCart from "@/components/AppCart.vue"
import AuthLoginForm from "@/components/auth/AuthLoginForm.vue"
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
  
  <AppCart />
  <AuthLoginForm />
</template>

<style scoped>
</style>
