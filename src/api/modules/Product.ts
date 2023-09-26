// @ts-ignore
import DB from '@/db/db.json'
import type { Product as ProductType } from "@/types";


export class Product {
  getAll(restaurantSlug: string): ProductType[] {
    // @ts-ignore
    return DB.db[restaurantSlug]
  }
}