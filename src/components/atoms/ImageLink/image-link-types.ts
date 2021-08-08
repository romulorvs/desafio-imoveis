import { ImageProps } from 'next/image'

export type IImageLink = ImageProps & {
  href: string
}
