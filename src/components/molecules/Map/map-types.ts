export interface IMap {
  className?: string
  city: string
  neighborhood: string
  geoLocation: {
    location: {
      lon: number
      lat: number
    }
  }
}
