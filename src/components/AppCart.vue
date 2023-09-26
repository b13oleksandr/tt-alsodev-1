<template>
  <UiModal
    :model-value="cartPosition"
    @update:model-value="closeCart"
    title="Корзина"
    class="cart-modal"
  >
    <template v-if="cartItems.length">
      <div
        v-for="item of cartItems"
        class="food-row"
      >
      <span
        class="food-name"
        v-text="item.product.name"
      />
        <strong
          class="food-price"
          v-text="`${item.product.price} ₽`"
        />
        <div class="food-counter">
          <button
            class="counter-button"
            @click="decItem(item)"
          >
            -
          </button>
          <span
            class="counter"
            v-text="item.qnt"
          />
          <button
            class="counter-button"
            @click="incItem(item)"
          >
            +
          </button>
        </div>
      </div>
    </template>
    
    <p v-else>
      Нет товаров
    </p>
    
    <template
      #footer
    >
      <template
        v-if="cartItems.length"
      >
        <span
          class="modal-pricetag"
          v-text="`${cartTotal} ₽`"
        />
        <div class="footer-buttons">
          <button class="button button-primary">
            Оформить заказ
          </button>
          <button
            class="button clear-cart"
            @click="closeCart"
          >
            Отмена
          </button>
        </div>
      </template>
    </template>
  </UiModal>
</template>

<script lang="ts" setup>
import UiModal from "@/components/ui/UiModal.vue"
import { useCart } from "@/composable/useCart"

const { cartPosition, closeCart, cartItems, incItem, decItem, cartTotal } = useCart()
</script>
