import Link from 'next/link'

import { ImageLink } from '_components'

import { INavBar } from './nav-bar-types'

import { navLogoProps } from './nav-bar-data'

import styles from './nav-bar.module.scss'

function NavBar({ currentBrand }: INavBar) {
  const { href, src, alt, width, height, content } = currentBrand
    ? navLogoProps[currentBrand]
    : ({} as any)

  return (
    <nav className={styles.container}>
      {currentBrand && (
        <ImageLink
          href={href}
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
        >
          <span>{content}</span>
        </ImageLink>
      )}
      <Link href="/contato">
        <a>Contato</a>
      </Link>
    </nav>
  )
}

export default NavBar
