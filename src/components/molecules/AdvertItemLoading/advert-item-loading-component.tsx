import { Stat } from '_components'

import styles from './advert-item-loading.module.scss'

function AdvertItemLoading() {
  return (
    <article className={styles.container}>
      <a className={styles.details}>
        <p className={styles.title}>xxxxxx</p>

        <p className={styles.price}>xxxxx</p>

        <div className={styles.stats}>
          <Stat type="BEDROOMS" value={0} />
          <Stat type="BATHROOMS" value={0} />
          <Stat type="AREA" value={`${0} m²`} />
        </div>
      </a>
    </article>
  )
}

export default AdvertItemLoading
