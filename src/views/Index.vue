<template>
  <main class="main">
    <div class="container">
      <HomePromoBanner />
      
      <section class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <input
              :value="search"
              type="text"
              class="input input-search"
              placeholder="Поиск блюд и ресторанов"
              @input="onSearch"
            />
          </label>
        </div>
        <div class="cards cards-restaurants">
          <CatalogRestaurantCard
            v-for="restaurant of searchRestaurants.length ? searchRestaurants : restaurants"
            :key="restaurant.id"
            :card="restaurant"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">

import { ref } from "vue"
import CatalogRestaurantCard from "@/components/catalog/CatalogRestaurantCard.vue"
import HomePromoBanner from "@/components/home/HomePromoBanner.vue"
import { api } from "@/api"

const $api = api()

const restaurants = ref($api.restaurant.getAll())
const search = ref('')
const searchRestaurants = ref([])

const onSearch = ({ target: { value } }) => {
  search.value = value
  searchRestaurants.value = restaurants.value
    .filter((el) => el.name.toLowerCase().includes(value.toLowerCase()))
}
</script>
