type TFetchData = Array<{ id: string }>

async function fetchIdPaths() {
  const res = await fetch(
    'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json'
  )

  const adverts = (await res.json()) as TFetchData

  const paths = adverts.map(({ id }) => {
    return { params: { _id: id } }
  })

  return paths
}

export default fetchIdPaths
