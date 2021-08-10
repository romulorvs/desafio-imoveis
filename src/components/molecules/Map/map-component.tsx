import { joinClasses } from '_helpers'

import { IMap } from './map-types'

import styles from './map.module.scss'

function Map({ className, city, neighborhood, location: { lon, lat } }: IMap) {
  const address = [neighborhood, city].filter(str => str.trim()).join(', ')

  const mapClass = joinClasses(styles.container, className)

  return (
    <section className={mapClass}>
      <article>
        <p>
          {city || neighborhood ? 'Endereço:' : 'Localização'}
          {address && <strong>{address}</strong>}
        </p>
      </article>
      <iframe
        title="mapa"
        src={`https://maps.google.com/maps?hl=pt-BR&q=${
          address || `@${lat},${lon}`
        }&z=14&ie=UTF8&iwloc=B&output=embed`}
        width="100%"
        height="440"
        frameBorder="0"
        style={{ border: 0 }}
      />
    </section>
  )
}

export default Map
