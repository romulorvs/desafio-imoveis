import { Header, MainAdverts } from '_components'

import { IAdverts } from './adverts-types'

function Adverts({ brand }: IAdverts) {
  return (
    <>
      <Header brand={brand} />
      <MainAdverts brand={brand} />
    </>
  )
}

export default Adverts
