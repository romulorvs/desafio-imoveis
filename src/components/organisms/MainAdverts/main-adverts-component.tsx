import { useState } from 'react'

import { SelectBar, Options, AdvertItem, Pagination } from '_components'

import { IMainAdverts, IBusinessTypeIds, ISortIds } from './main-adverts-types'

import { businessTypes, sortValues, adverts } from './main-adverts-data'

import styles from './main-adverts.module.scss'

function MainAdverts({ brand }: IMainAdverts) {
  const [businessType, setBusinessType] = useState<IBusinessTypeIds>('both')
  const [sort, setSort] = useState<ISortIds>('default')
  const [page, setPage] = useState<number>(1)

  function handleBusinessTypeChange(businessTypeId: IBusinessTypeIds) {
    setBusinessType(businessTypeId)
  }

  function handleSortChange(businessTypeId: ISortIds) {
    setSort(businessTypeId)
  }

  function handlePageChange(nextPage: number) {
    if (nextPage < 1) {
      return setPage(1)
    }

    if (nextPage > 12) {
      return setPage(12)
    }

    setPage(nextPage)
  }

  return (
    <main className={styles.container}>
      <section className={styles.toolbars}>
        <SelectBar
          value={businessType}
          list={businessTypes}
          onChange={handleBusinessTypeChange}
        />
        <Options
          value={sort}
          list={sortValues}
          labelText="Ordernar por:"
          onChange={handleSortChange}
        />
      </section>

      <section className={styles.list}>
        {adverts.map(advert => (
          <AdvertItem key={advert.id} {...advert} brand={brand} />
        ))}
      </section>

      <section className={styles.pagination}>
        <Pagination value={page} onChange={handlePageChange} totalPages={12} />
      </section>
    </main>
  )
}

export default MainAdverts
