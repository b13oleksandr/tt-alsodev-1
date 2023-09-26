<template>
  <div class="container">
    <header class="header">
      <RouterLink to="/" class="logo">
        <img src="../assets/img/icon/logo.svg" alt="Logo" />
      </RouterLink>
      <label class="address">
        <input type="text" class="input input-address" placeholder="Адрес доставки" />
      </label>
      <div class="buttons">
        <span class="user-name"></span>
        <button class="button button-primary button-auth" @click="openLoginForm">
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
        <button class="button button-cart" id="cart-button" @click="openCart">
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
        <button class="button button-primary button-out">
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>
        </button>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
import { useCart } from "@/composable/useCart"
import { useAuth } from "@/composable/useAuth"

const { openCart } = useCart()
const { openLoginForm } = useAuth()
</script>