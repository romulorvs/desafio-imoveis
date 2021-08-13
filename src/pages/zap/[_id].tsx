import { GetStaticPaths, GetStaticProps } from 'next'

import { useRouter } from 'next/router'

import Head from 'src/next/head'

import { Header, MainDetails } from '_components'

import { fetchIdPaths, fetchAdvertData } from 'src/helpers'

interface IDetails {
  advertData: {
    id: string
    usableAreas: number
    parkingSpaces: number
    images: string[]
    address: {
      city: string
      neighborhood: string
      geoLocation: {
        location: {
          lon: number
          lat: number
        }
      }
    }
    bathrooms: number
    bedrooms: number
    pricingInfos: {
      yearlyIptu: string
      price: string
      rentalTotalPrice?: string
      businessType: 'SALE' | 'RENTAL'
      monthlyCondoFee: string
    }
  }
}

function ZapDetails({ advertData }: IDetails) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <>
        <Head title="Detalhes do Imóvel - Desafio OLX" />
        <Header brand="zap" />
      </>
    )
  }

  return (
    <>
      <Head title="Detalhes do Imóvel - Desafio OLX" />
      <Header brand="zap" />
      <MainDetails {...advertData} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async function (context) {
  try {
    // eslint-disable-next-line prettier/prettier
    const advertData = await fetchAdvertData({ type: 'zap', _id: context.params?._id || '' })
    return {
      props: {
        advertData,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async function () {
  try {
    const paths = await fetchIdPaths()
    return { paths, fallback: false }
  } catch (error) {
    return { paths: [], fallback: true }
  }
}

export default ZapDetails
