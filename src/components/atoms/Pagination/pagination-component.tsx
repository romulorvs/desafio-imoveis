import { paginatearrowLeftSVG, paginatearrowRightSVG } from '_svg'

import { IPagination } from './pagination-types'

import styles from './pagination.module.scss'

function Pagination({ value, onChange, totalPages }: IPagination) {
  function handleLeftClick() {
    onChange(value - 1)
  }

  function handleRightClick() {
    onChange(value + 1)
  }

  if (totalPages <= 1) {
    return null
  }

  return (
    <div className={styles.container}>
      <button
        type="button"
        disabled={value === 1 || undefined}
        onClick={handleLeftClick}
      >
        {paginatearrowLeftSVG}
      </button>
      <p>
        {value} <span>/ {totalPages}</span>
      </p>
      <button
        type="button"
        disabled={value === totalPages || undefined}
        onClick={handleRightClick}
      >
        {paginatearrowRightSVG}
      </button>
    </div>
  )
}

export default Pagination
