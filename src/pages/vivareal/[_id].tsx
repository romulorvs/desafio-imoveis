import { useRouter } from 'next/router'

import { Adverts, Details } from '_views'

function VivaRealDetails() {
  const {
    query: { _id },
  } = useRouter()

  if (!_id) {
    return <Adverts brand="vivareal" />
  }

  if (Array.isArray(_id)) {
    return <Details brand="vivareal" _id={_id[0]} />
  }

  return <Details brand="vivareal" _id={_id} />
}

export default VivaRealDetails
