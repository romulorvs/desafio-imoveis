import grupoZapSrc from '_assets/olx.svg'
import zapSrc from '_assets/zap.svg'
import vivarealSrc from '_assets/vivareal.svg'

export const headerLogoProps = {
  default: {
    href: '/',
    src:
      process.env.NODE_ENV === 'test' ? '/public/assets/olx.svg' : grupoZapSrc,
    alt: 'Logo Olx',
    width: 82,
    height: 64,
  },
  zap: {
    href: '/zap',
    src: process.env.NODE_ENV === 'test' ? '/public/assets/zap.svg' : zapSrc,
    alt: 'Logo Zap',
    width: 120,
    height: 51,
  },
  vivareal: {
    href: '/vivareal',
    src:
      process.env.NODE_ENV === 'test'
        ? '/public/assets/vivareal.svg'
        : vivarealSrc,
    alt: 'Logo Viva Real',
    width: 160,
    height: 34,
  },
}
