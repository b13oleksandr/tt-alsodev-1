<template>
  <UiProductCard
    :name="card.name"
    :image="`/${card.image}`"
    :description="card.description"
    :price="card.price"
    @add-to-cart="onAddToCart"
  />
</template>

<script lang="ts" setup>
import type { Product } from "@/types"
import { useCart } from "@/composable/useCart"
import UiProductCard from "@/components/ui/UiProductCard.vue"

const { addToCart, openCart } = useCart()

const props = defineProps<{
  card: Product
}>()

const onAddToCart = () => {
  addToCart(props.card)
  openCart()
}
</script>
