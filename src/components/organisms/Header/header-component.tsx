import { ImageLink, NavBar } from '_components'

import { IHeader } from './header-types'

import styles from './header.module.scss'

import { headerLogoProps } from './header-data'

function Header({ brand }: IHeader) {
  const { src, alt, href, width, height } = headerLogoProps[brand || 'default']

  return (
    <header className={styles.container}>
      <ImageLink
        href={href}
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
      />
      <NavBar currentBrand={brand} />
    </header>
  )
}

export default Header
