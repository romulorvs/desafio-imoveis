import { VivaRealSVG, ZapSVG } from '_svg'

import zapPicExample from '_assets/zapexample.png'

import vivarealPicExample from '_assets/vivarealexample.png'

export const brandLogoProps = {
  zap: {
    logoSvg: ZapSVG,
    exampleImg: {
      src: zapPicExample,
      alt: 'Imóvel de exemplo do Zap',
    },
    featureList: [
      <>
        Aluguéis a partir de <strong>R$ 3.500</strong>
      </>,
      <>
        Vendas a partir de <strong>R$ 600.000</strong>
      </>,
    ],
  },
  vivareal: {
    logoSvg: VivaRealSVG,
    exampleImg: {
      src: vivarealPicExample,
      alt: 'Imóvel de exemplo do Viva Real',
    },
    featureList: [
      <>
        Aluguéis até <strong>R$ 4.000</strong>
      </>,
      <>
        Vendas até <strong>R$ 700.000</strong>
      </>,
    ],
  },
}
