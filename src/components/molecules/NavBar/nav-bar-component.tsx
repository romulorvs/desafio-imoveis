import { useCallback } from 'react'
import Link from 'next/link'

import { ImageLink } from '_components'

import { INavBar } from './nav-bar-types'

import { navLogoProps } from './nav-bar-data'

import styles from './nav-bar.module.scss'

function NavBar({ currentBrand }: INavBar) {
  const getBrandLink = useCallback(() => {
    if (!currentBrand) return null

    const { href, src, alt, width, height, content } =
      navLogoProps[currentBrand]

    return (
      <>
        <ImageLink
          href={href}
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
        />
        <span>{content}</span>
      </>
    )
  }, [currentBrand])

  return (
    <nav className={styles.container}>
      {getBrandLink()}
      <Link href="/contato">
        <a>Contato</a>
      </Link>
    </nav>
  )
}

export default NavBar
