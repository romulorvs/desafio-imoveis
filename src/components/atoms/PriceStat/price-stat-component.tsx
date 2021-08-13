import { formatPrice } from '_helpers'

import { IPriceStat } from './price-stat-types'

import { priceStatProps } from './price-stat-data'

import styles from './price-stat.module.scss'

function Stat({ type, value }: IPriceStat) {
  const label = priceStatProps[type]

  return (
    <p className={styles.container}>
      {label} <span>R$ {formatPrice(value)}</span>
    </p>
  )
}

export default Stat
