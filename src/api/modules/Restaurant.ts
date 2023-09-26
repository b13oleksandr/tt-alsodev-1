// @ts-ignore
import DB from '@/db/db.json'
import type { Restaurant as RestaurantType } from "@/types"

export class Restaurant {
  getAll(): RestaurantType[] {
    return DB.db.partners
  }

  get(slug: string): RestaurantType | null {
    return DB.db.partners.find((el: any): boolean => el.slug === slug) || null
  }
}