import Head from 'next/head'

import { IHead } from './head-types'

function HeadPage({ title }: IHead) {
  return (
    <Head>
      <title>{title || 'Desafio OLX - Zap e VivaReal'}</title>

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta
        name="description"
        content="Encontre as melhores ofertas de imóveis do Brasil"
      />

      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <meta name="theme-color" content="#ffffff" />

      <link rel="icon" href="/favicon.ico" />

      <link rel="apple-touch-icon" href="/logo192.png" />

      <link rel="manifest" href="/manifest.json" />
    </Head>
  )
}

export default HeadPage
