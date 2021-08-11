interface IFetchAdvertDataParams {
  type: 'zap' | 'vivareal'
  _id: string | string[]
}

type TFetchData = Array<{
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
}>

async function fetchAdvertData({ type, _id }: IFetchAdvertDataParams) {
  const advertId = Array.isArray(_id) ? _id[0] : _id

  const res = await fetch(
    'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json'
  )

  const adverts = (await res.json()) as TFetchData

  const advert = adverts.find(({ id }) => id === advertId)

  return advert
}

export default fetchAdvertData
