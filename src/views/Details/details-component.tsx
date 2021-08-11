import { Header, MainDetails } from '_components'

import { IDetails } from './details-types'

function Adverts({ brand, advertData }: IDetails) {
  return (
    <>
      <Header brand={brand} />
      {advertData && <MainDetails {...advertData} />}
    </>
  )
}

export default Adverts
