import Image from 'next/image'

import { brandLogoProps } from './brand-card-data'

import { IBrandCard } from './brand-card-types'

import styles from './brand-card.module.scss'

function BrandCard({ type }: IBrandCard) {
  const { exampleImg, logoSvg, featureList } = brandLogoProps[type]
  const { src, alt } = exampleImg

  return (
    <section className={styles.container}>
      <Image src={src} alt={alt} width={150} height={300} priority />
      <article>
        {logoSvg}
        <ul>
          {featureList.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default BrandCard
