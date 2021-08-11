export type TSortIds = 'default' | 'price' | 'area'

export type TBusinessTypeIds = 'buy' | 'rent' | 'both'

export interface IMainAdverts {
  brand: 'zap' | 'vivareal'
}

export type TAdverts = Array<{
  id: string
  usableAreas: number
  images: string[]
  bathrooms: number
  bedrooms: number
  pricingInfos: {
    price: string
    businessType: 'SALE' | 'RENTAL'
  }
}>

export interface IFetchAdvertsData {
  totalPages: number
  adverts: TAdverts
}

export interface IGetFetchUrl {
  pageNumber: number
  businessType: TBusinessTypeIds
  sort: TSortIds
}

export interface IQueryParams {
  page: string
  bType: TBusinessTypeIds
  sort: TSortIds
}
