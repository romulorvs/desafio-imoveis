import Link from 'next/link'

import { BrandCard } from '_components'

import styles from './main-home.module.scss'

function MainHome() {
  return (
    <main className={styles.container}>
      <Link href="/zap">
        <a>
          <BrandCard type="zap" />
        </a>
      </Link>
      <Link href="/vivareal">
        <a>
          <BrandCard type="vivareal" />
        </a>
      </Link>
    </main>
  )
}

export default MainHome
