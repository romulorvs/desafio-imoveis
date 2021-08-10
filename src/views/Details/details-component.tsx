import { Header, MainDetails } from '_components'

import { IDetails } from './details-types'

function Adverts({ brand, _id }: IDetails) {
  return (
    <>
      <Header brand={brand} />
      <MainDetails brand={brand} _id={_id} />
    </>
  )
}

export default Adverts
