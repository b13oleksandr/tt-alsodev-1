<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2
            class="section-title restaurant-title"
            v-text="restaurant.name"
          />
          <div class="card-info">
            <div
              class="rating"
              v-text="restaurant.stars"
            />
            <div
              class="price"
              v-text="restaurant.price"
            />
            <div
              class="category"
              v-text="restaurant.kitchen"
            />
          </div>

          <div class="sorting">
            <span class="sorting-item" @click="onSort('desc')">Сначала дорогие</span>
            <span class="sorting-item" @click="onSort('asc')">Сначала дешевые</span>
          </div>
        </div>
        
        
        
        <div class="cards cards-menu">
          <CatalogProductCard
            v-for="product of products"
            :key="product.id"
            :card="product"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { useRoute } from "vue-router"
import { computed, ref } from "vue"
import { api } from "@/api"
import CatalogProductCard from "@/components/catalog/CatalogProductCard.vue"

const route = useRoute()
const $api = api()

const restaurantSlug: Ref<string> = computed(() => <string>route.params.slug)

const restaurant = ref(
  $api.restaurant.get(restaurantSlug.value)
)
const products = ref(
  $api.product.getAll(restaurantSlug.value)
)

const onSort = (order) => {
  order === 'desc' && products.value.sort((a, b) => b.price - a.price);
  order === 'asc' && products.value.sort((a, b) => a.price - b.price);
}
</script>
