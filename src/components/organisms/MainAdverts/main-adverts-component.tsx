import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import debounce from 'dbouncer'

// eslint-disable-next-line prettier/prettier
import { SelectBar, Options,  AdvertItem,  Pagination,  AdvertItemLoading,} from '_components'

// eslint-disable-next-line prettier/prettier
import { IMainAdverts, TBusinessTypeIds, TSortIds, TAdverts, IFetchAdvertsData, IGetFetchUrl, IQueryParams } from './main-adverts-types'

import { businessTypes, sortValues } from './main-adverts-data'

import styles from './main-adverts.module.scss'

const fetchAdvertsDebounce = debounce(400)

function MainAdverts({ brand }: IMainAdverts) {
  const [adverts, setAdverts] = useState<TAdverts>([])
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(0)

  const router = useRouter()

  const {
    page = '1',
    bType: businessType = 'both',
    sort = 'default',
  } = router.query as unknown as IQueryParams

  const pageNumber = parseInt(page, 10)

  function pushUrl(url: string) {
    router.push(url, undefined, { scroll: false })
  }

  function getFetchUrl({
    pageNumber: pageParam,
    businessType: businessTypeParam,
    sort: sortParam,
  }: IGetFetchUrl) {
    return `/${brand}?sort=${sortParam}&bType=${businessTypeParam}&page=${pageParam}`
  }

  function handleBusinessTypeChange(businessTypeId: TBusinessTypeIds) {
    const fetchedUrl = getFetchUrl({
      pageNumber: 1,
      businessType: businessTypeId,
      sort,
    })

    pushUrl(fetchedUrl)
  }

  function handleSortChange(sortId: TSortIds) {
    const fetchedUrl = getFetchUrl({
      pageNumber: 1,
      businessType,
      sort: sortId,
    })

    pushUrl(fetchedUrl)
  }

  function handlePageChange(nextPage: number) {
    if (nextPage < 1) {
      nextPage = 1
    } else if (nextPage > totalPages) {
      nextPage = totalPages
    }

    const fetchedUrl = getFetchUrl({
      pageNumber: nextPage,
      businessType,
      sort,
    })

    pushUrl(fetchedUrl)
  }

  async function fetchAdverts() {
    const res = await fetch(
      `/api${getFetchUrl({ pageNumber, businessType, sort })}`
    )

    const { totalPages: newTotalPages, adverts: newAdverts } =
      (await res.json()) as IFetchAdvertsData

    setTotalPages(newTotalPages)
    setAdverts(newAdverts)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchAdvertsDebounce(fetchAdverts)
  }, [businessType, sort, page])

  const firstLoading = loading && !adverts.length

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

      {firstLoading && (
        <section className={styles.list}>
          {new Array(9).fill('').map((t, index) => (
            <AdvertItemLoading key={index} />
          ))}
        </section>
      )}

      {!firstLoading && (
        <section className={styles.list}>
          {adverts.map(advert => (
            <AdvertItem
              key={advert.id}
              {...advert}
              brand={brand}
              loading={loading}
            />
          ))}
        </section>
      )}

      <section className={styles.pagination}>
        <Pagination
          value={pageNumber}
          onChange={handlePageChange}
          totalPages={totalPages}
        />
      </section>
    </main>
  )
}

export default MainAdverts
