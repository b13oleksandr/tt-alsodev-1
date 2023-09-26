import type { CartItem, Product } from "@/types"
import type { Ref } from "vue"
import { computed } from "vue"
import { useCartStore } from "@/stores/cart"

export const useCart = () => {
  const cartStore = useCartStore()
  const cartItems: Ref<CartItem[]> = computed(() => cartStore.items)
  const cartPosition: Ref<boolean> = computed(() => cartStore.position)
  const cartTotal: Ref<number> = computed(() => cartItems.value
    .reduce((total: number, item: CartItem) => {
      const { qnt, product }: { qnt: number, product: Product } = item;
      return total + qnt * product.price;
    }, 0)
  )

  const incItem = cartStore.inc
  const decItem = (item: CartItem): void => {
    item.qnt > 1 ? cartStore.dec(item) : cartStore.remove(item)
  }

  const closeCart = (): void => {
    cartStore.setPosition(false)
  }
  const openCart = (): void => {
    cartStore.setPosition(true)
  }

  const addToCart = (product: Product): void => {
    const item: CartItem | undefined = cartItems.value
      .find((i: any): boolean => i.product?.id === product.id)

    item
      ? incItem(item)
      : cartStore.add({
        qnt: 1,
        product
      })
  }

  return {
    cartPosition,
    cartItems,
    openCart,
    closeCart,
    addToCart,
    incItem,
    decItem,
    cartTotal
  }
}