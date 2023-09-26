import { Restaurant } from "@/api/modules/Restaurant"
import { Product } from "@/api/modules/Product"

export interface ApiInstance {
  restaurant: Restaurant
  product: Product
}

export const api = (): ApiInstance => ({
  restaurant: new Restaurant(),
  product: new Product()
})