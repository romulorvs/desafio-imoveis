type TFetchData = Array<{
  usableAreas: number
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

interface IFilterAdvertsParams {
  sort: 'default' | 'price' | 'area'
  bType: 'buy' | 'rent' | 'both'
  brand: 'zap' | 'vivareal'
  adverts: TFetchData
}

function filterAdverts({ sort, bType, brand, adverts }: IFilterAdvertsParams) {
  const minlon = -46.693419
  const minlat = -23.568704
  const maxlon = -46.641146
  const maxlat = -23.546686

  if (bType === 'buy') {
    adverts = adverts.filter(
      ({ pricingInfos: { businessType } }) => businessType === 'SALE'
    )
  }

  if (bType === 'rent') {
    adverts = adverts.filter(
      ({ pricingInfos: { businessType } }) => businessType === 'RENTAL'
    )
  }

  adverts = adverts.filter(({ usableAreas }) => usableAreas !== 0)

  adverts = adverts.filter(
    ({ pricingInfos: { monthlyCondoFee } }) => parseFloat(monthlyCondoFee) !== 0
  )

  adverts = adverts.filter(
    ({
      address: {
        geoLocation: {
          location: { lat, lon },
        },
      },
    }) => {
      if (lat === 0 && lon === 0) {
        return false
      }
      return true
    }
  )

  if (brand === 'zap') {
    adverts = adverts.filter(
      ({
        pricingInfos: { price, businessType },
        address: {
          geoLocation: {
            location: { lon, lat },
          },
        },
      }) => {
        if (businessType === 'SALE' && parseFloat(price) >= 600000) {
          return true
        }

        if (
          lat >= minlat &&
          lat <= maxlat &&
          lon >= minlon &&
          lon <= maxlon &&
          businessType === 'RENTAL' &&
          parseFloat(price) >= 3500 * 0.9
        ) {
          return true
        }

        if (businessType === 'RENTAL' && parseFloat(price) >= 3500) {
          return true
        }

        return false
      }
    )
  }

  if (brand === 'vivareal') {
    adverts = adverts.filter(
      ({
        pricingInfos: { price, businessType, monthlyCondoFee },
        address: {
          geoLocation: {
            location: { lon, lat },
          },
        },
      }) => {
        if (
          (businessType === 'SALE' && parseFloat(price) <= 700000) ||
          (businessType === 'RENTAL' && parseFloat(price) <= 4000)
        ) {
          return true
        }

        if (
          lat >= minlat &&
          lat <= maxlat &&
          lon >= minlon &&
          lon <= maxlon &&
          businessType === 'RENTAL' &&
          parseFloat(monthlyCondoFee) < parseFloat(price) * 0.3 * 1.5
        ) {
          return true
        }

        if (
          businessType === 'RENTAL' &&
          parseFloat(monthlyCondoFee) < parseFloat(price) * 0.3
        ) {
          return true
        }

        return false
      }
    )
  }

  if (sort === 'area') {
    adverts = adverts.sort((a, b) => {
      return a.usableAreas - b.usableAreas
    })
  }

  if (sort === 'price') {
    adverts = adverts.sort((a, b) => {
      return parseFloat(a.pricingInfos.price) - parseFloat(b.pricingInfos.price)
    })
  }

  return adverts
}

export default filterAdverts
