import Link from 'next/link'

import { Stat, AdvertPhotos } from '_components'

import { formatPrice, joinClasses } from '_helpers'

import { IAdvertItem } from './advert-item-types'

import styles from './advert-item.module.scss'

function AdvertItem({
  id,
  brand,
  pricingInfos: { businessType, price },
  bathrooms,
  bedrooms,
  images,
  usableAreas,
  loading = false,
}: IAdvertItem) {
  const adPrice = formatPrice(price)

  const advertItemClass = joinClasses(
    styles.container,
    loading && styles.loading
  )

  return (
    <article className={advertItemClass}>
      <AdvertPhotos images={images} brand={brand} id={id} />

      <Link href={`/${brand}/${id}`}>
        <a className={styles.details}>
          <p className={styles.title}>
            Apartamento para {businessType === 'RENTAL' ? 'Aluguel' : 'Venda'}
          </p>

          <p className={styles.price}>
            R$ {adPrice}
            {businessType === 'RENTAL' && <span> / mês</span>}
          </p>

          <div className={styles.stats}>
            <Stat type="BEDROOMS" value={bedrooms} />
            <Stat type="BATHROOMS" value={bathrooms} />
            <Stat type="AREA" value={`${usableAreas} m²`} />
          </div>
        </a>
      </Link>
    </article>
  )
}

export default AdvertItem
