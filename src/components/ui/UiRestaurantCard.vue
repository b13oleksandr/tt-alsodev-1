<template>
  <div class="card card-restaurant">
    <img
      :src="image"
      alt="image"
      class="card-image"
    />
    <div class="card-text">
      <div class="card-heading">
        <h3
          class="card-title"
          v-text="name"
        />
        <span
          v-if="timeOfDelivery"
          class="card-tag tag"
          v-text="`${timeOfDelivery} мин`"
        />
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div
          v-if="rating"
          class="rating"
          v-text="rating"
        />
        <div
          class="price"
          v-text="`От ${ price } ₽`"
        />
        <div
          v-if="kitchen"
          class="category"
          v-text="kitchen"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string
  timeOfDelivery?: number
  rating?: number
  price: number,
  kitchen: string,
  image: string,
}>()
</script>
