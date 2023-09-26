<template>
  <div class="card">
    <img
      :src="image"
      alt="image"
      class="card-image"
    />
    <div class="card-text">
      <div class="card-heading">
        <h3
          class="card-title card-title-reg"
          v-text="name"
        />
      </div>

      <div class="card-info">
        <div
          class="ingredients"
          v-text="description"
        />
      </div>

      <div class="card-buttons">
        <button
          class="button button-primary button-add-cart"
          @click="$emit('add-to-cart')"
        >
          <span class="button-card-text">
            В корзину
          </span>
          <span class="button-cart-svg"></span>
        </button>
        <strong
          class="card-price-bold"
          v-text="`${price} ₽`"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['add-to-cart'])

defineProps<{
  image: string
  name: string
  description: string
  price: number
}>()
</script>
