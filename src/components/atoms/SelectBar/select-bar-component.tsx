import { ISelectBar } from './select-bar-types'

import styles from './select-bar.module.scss'

function SelectBar({ value, list, onChange }: ISelectBar) {
  function handleSelectionButtonClick(selectedId: string) {
    onChange(selectedId)
  }

  return (
    <div className={styles.container}>
      {list.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={value === id ? styles.selected : undefined}
          onClick={() => handleSelectionButtonClick(id)}
          data-testid={value === id ? 'selected' : undefined}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default SelectBar
