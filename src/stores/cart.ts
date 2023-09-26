import type { Ref } from 'vue'
import type { CartItem } from "@/types"
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items: Ref<CartItem[]> = ref([])
  const position: Ref<boolean> = ref(false)

  const setPosition = (value: boolean): void => {
    position.value = value
  }

  const add = (item: CartItem): void => {
    items.value.push(item)
  }

  const remove = (item: CartItem): void => {
    items.value = items.value.filter((i): boolean => i.product.id !== item.product.id )
  }

  const inc = (item: CartItem): void => {
    item.qnt++
  }

  const dec = (item: CartItem): void => {
    item.qnt--
  }

  return {
    items,
    add,
    remove,
    inc,
    dec,
    position,
    setPosition
  }
}, {
  persist: true
})
