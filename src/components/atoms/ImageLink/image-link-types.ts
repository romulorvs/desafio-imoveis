import { ImageProps } from 'next/image'

export type TImageLink = ImageProps & {
  href: string
}
