import { GetStaticPaths, GetStaticProps } from 'next'

import { useRouter } from 'next/router'

import { fetchIdPaths, fetchAdvertData } from 'src/helpers'

import { IDetails, Details } from '_views'

function ZapDetails({ advertData }: Pick<IDetails, 'advertData'>) {
  const router = useRouter()

  if (router.isFallback) {
    return <Details brand="zap" />
  }

  return <Details brand="zap" advertData={advertData} />
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
