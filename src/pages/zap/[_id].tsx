import { useRouter } from 'next/router'

import { Adverts, Details } from '_views'

function ZapDetails() {
  const {
    query: { _id },
  } = useRouter()

  if (!_id) {
    return <Adverts brand="zap" />
  }

  if (Array.isArray(_id)) {
    return <Details brand="zap" _id={_id[0]} />
  }

  return <Details brand="zap" _id={_id} />
}

export default ZapDetails
