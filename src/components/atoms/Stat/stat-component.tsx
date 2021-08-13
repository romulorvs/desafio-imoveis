import { IStat } from './stat-types'

import { statProps } from './stat-data'

import styles from './stat.module.scss'

function Stat({ type, value, size = 'normal' }: IStat) {
  const { src } = statProps[type].src
  const { width, height } = statProps[type][size]

  return (
    <p
      className={styles.container}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: `${width}px ${height}px`,
        paddingLeft: `${width}px`,
      }}
    >
      <span>{value}</span>
    </p>
  )
}

export default Stat
