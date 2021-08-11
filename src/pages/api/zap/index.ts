import { NextApiHandler } from 'next'

import axios from 'axios'

import { filterAdverts } from 'src/helpers'

type TFetchData = Array<{
  id: string
  usableAreas: number
  images: string[]
  bathrooms: number
  bedrooms: number
  pricingInfos: {
    price: string
    businessType: 'SALE' | 'RENTAL'
    monthlyCondoFee: string
  }
  address: {
    geoLocation: {
      location: {
        lon: number
        lat: number
      }
    }
  }
}>

interface IQueryParams {
  page: string
  sort: 'default' | 'price' | 'area'
  bType: 'buy' | 'rent' | 'both'
}

const handler: NextApiHandler = async (req, res) => {
  try {
    const { page, sort, bType } = req.query as unknown as IQueryParams

    const pageNumber = parseInt(page || '0', 10)

    const fetchUrl =
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json'
    let { data: adverts } = await axios.get<TFetchData>(fetchUrl)

    adverts = filterAdverts({
      sort,
      bType,
      brand: 'zap',
      adverts,
    }) as TFetchData

    const limit = 21

    const totalPages = !(adverts.length % limit)
      ? Math.floor(adverts.length / limit)
      : Math.floor(adverts.length / limit) + 1

    const advertsOfThePage = adverts.splice(limit * (pageNumber - 1), limit)

    return res.status(200).json({ totalPages, adverts: advertsOfThePage })
  } catch (error) {
    return res.status(400).send(null)
  }
}

export default handler
