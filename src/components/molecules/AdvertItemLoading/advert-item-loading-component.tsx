import { Stat } from '_components'

import styles from './advert-item-loading.module.scss'

function AdvertItemLoading() {
  return (
    <article className={styles.container}>
      <a className={styles.details}>
        <p className={styles.title}>xxxxxxx</p>

        <p className={styles.price}>xxxxx</p>

        <div className={styles.stats}>
          <Stat type="BEDROOMS" value="bed_text" />
          <Stat type="BATHROOMS" value="bath_text" />
          <Stat type="AREA" value="area_text" />
        </div>
      </a>
    </article>
  )
}

export default AdvertItemLoading
