import Link from 'next/link'
import Image from 'next/image'

import { IImageLink } from './image-link-types'

import styles from './image-link.module.scss'

function ImageLink({ href, children, ...imageProps }: IImageLink) {
  return (
    <Link href={href}>
      <a>
        <Image {...imageProps} />
        {children && <div className={styles.children}>{children}</div>}
      </a>
    </Link>
  )
}

export default ImageLink
