export interface Product {
  id: string
  image: string
  name: string
  description: string
  price: number
}

export interface Restaurant {
  slug: string
  name: string
  time_of_delivery: number
  stars: number
  price: number
  kitchen: string
  image: string
}

export interface CartItem {
  qnt: number,
  product: Product
}