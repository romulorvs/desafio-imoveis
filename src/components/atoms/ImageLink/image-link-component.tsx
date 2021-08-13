import Link from 'next/link'
import Image from 'next/image'

import { TImageLink } from './image-link-types'

import styles from './image-link.module.scss'

function ImageLink({ href, children, alt, ...imageProps }: TImageLink) {
  return (
    <Link href={href}>
      <a>
        <Image alt={alt} {...imageProps} />
        {children && <div className={styles.children}>{children}</div>}
      </a>
    </Link>
  )
}

export default ImageLink
