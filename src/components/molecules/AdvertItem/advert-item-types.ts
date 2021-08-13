export interface IAdvertItem {
  id: string
  usableAreas: number
  images: string[]
  bathrooms: number
  bedrooms: number
  pricingInfos: {
    price: string
    businessType: 'SALE' | 'RENTAL'
  }
  brand: 'zap' | 'vivareal'
  loading?: boolean
}
