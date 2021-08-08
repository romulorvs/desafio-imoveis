import Link from 'next/link'
import Image from 'next/image'

import { IImageLink } from './image-link-types'

function ImageLink({ href, ...imageProps }: IImageLink) {
  return (
    <Link href={href}>
      <a>
        <Image {...imageProps} />
      </a>
    </Link>
  )
}

export default ImageLink
