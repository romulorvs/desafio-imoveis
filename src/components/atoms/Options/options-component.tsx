import { useMemo } from 'react'

import { IOptions } from './options-types'

import styles from './options.module.scss'

function Options({
  value,
  list,
  labelText,
  hideLabel = true,
  onChange,
}: IOptions) {
  const selectWidth = useMemo(() => {
    const charLength = list.find(({ id }) => id === value)?.label.length
    return charLength && `${charLength + 8}ch`
  }, [value])

  return (
    <>
      <label>
        <span className={hideLabel ? styles.hide : undefined}>{labelText}</span>
        <select
          className={styles.select}
          value={value}
          style={{
            width: selectWidth,
          }}
          onChange={e => onChange(e.target.value)}
        >
          {list.map(({ id, label }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </select>
      </label>
    </>
  )
}

export default Options
