export interface IDetails {
  brand: 'zap' | 'vivareal'
  advertData?: {
    id: string
    usableAreas: number
    parkingSpaces: number
    images: string[]
    address: {
      city: string
      neighborhood: string
      geoLocation: {
        location: {
          lon: number
          lat: number
        }
      }
    }
    bathrooms: number
    bedrooms: number
    pricingInfos: {
      yearlyIptu: string
      price: string
      rentalTotalPrice?: string
      businessType: 'SALE' | 'RENTAL'
      monthlyCondoFee: string
    }
  }
}
