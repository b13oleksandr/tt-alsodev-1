<template>
  <UiRestaurantCard
    :image="card.image"
    :name="card.name"
    :price="card.price"
    :kitchen="card.kitchen"
    :timeOfDelivery="card.time_of_delivery"
    :rating="card.stars"
    @click="onCard"
  />
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import type { Restaurant } from "@/types"
import UiRestaurantCard from "@/components/ui/UiRestaurantCard.vue"

const props = defineProps<{
  card: Restaurant
}>()

const router = useRouter()

const onCard = () => {
  router.push({ name: 'restaurant', params: { 'slug': props.card.slug } })
}
</script>