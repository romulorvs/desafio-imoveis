import { Stat, PriceStat, Map, Slider } from '_components'

import { formatPrice } from '_helpers'

import { IMainDetails } from './main-details-types'

import styles from './main-details.module.scss'

function MainDetails({
  bedrooms,
  usableAreas,
  bathrooms,
  parkingSpaces,
  address,
  images,
  pricingInfos: {
    monthlyCondoFee,
    yearlyIptu,
    businessType,
    price,
    rentalTotalPrice,
  },
}: IMainDetails) {
  const adPrice = formatPrice(price)

  return (
    <main className={styles.container}>
      <Slider images={images} />

      <div className={styles.inner_container}>
        <section className={styles.title}>
          <h2>
            R$ {adPrice}
            {businessType === 'RENTAL' && <span> / mês</span>}
          </h2>
          <h1>
            Apartamento para {businessType === 'RENTAL' ? 'Aluguel' : 'Venda'}
          </h1>
        </section>

        <section className={styles.details}>
          <article className={styles.pricing}>
            <PriceStat type="CONDO" value={monthlyCondoFee} />
            <PriceStat type="IPTU" value={yearlyIptu} />
            {rentalTotalPrice && (
              <PriceStat type="RENTAL_TOTAL_PRICE" value={rentalTotalPrice} />
            )}
          </article>

          <article className={styles.stats}>
            <Stat type="BEDROOMS" value={bedrooms} />
            <Stat type="BATHROOMS" value={bathrooms} />
            <Stat type="PARKING_SPACES" value={parkingSpaces} />
            <Stat type="AREA" value={`${usableAreas} m²`} />
          </article>
        </section>

        <Map className={styles.map} {...address} />
      </div>
    </main>
  )
}

export default MainDetails
