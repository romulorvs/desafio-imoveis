import zapLogoSrc from '_assets/zaplogo.svg'

import vivarealLogoSrc from '_assets/vivareallogo.svg'

export const navLogoProps = {
  zap: {
    href: '/vivareal',
    src:
      process.env.NODE_ENV === 'test'
        ? '/public/assets/zaplogo.svg'
        : zapLogoSrc,
    alt: 'Logo Viva Real',
    width: 32,
    height: 25,
    content: 'Viva Real',
  },
  vivareal: {
    href: '/zap',
    src:
      process.env.NODE_ENV === 'test'
        ? '/public/assets/vivareallogo.svg'
        : vivarealLogoSrc,
    alt: 'Logo Zap',
    width: 32,
    height: 27,
    content: 'Zap',
  },
}
