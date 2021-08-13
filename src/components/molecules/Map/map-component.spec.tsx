import { render, screen } from '@testing-library/react'

import Map from './map-component'

describe('Map Component', () => {
  test('Should render the component with city and neighborhood.', () => {
    render(
      <Map
        city="rio"
        neighborhood="taquara"
        geoLocation={{
          location: {
            lon: -2500,
            lat: -4500,
          },
        }}
      />
    )

    const addressElement = screen.queryByText(/Endereço:/i)
    expect(addressElement?.textContent).toBe('Endereço:taquara, rio')

    const mapElement = screen.queryByTitle('mapa') as HTMLIFrameElement
    expect(mapElement.src).toMatch(/taquara,%20rio/i)
  })

  test('Should render the component with neighborhood only.', () => {
    render(
      <Map
        city=""
        neighborhood="taquara"
        geoLocation={{
          location: {
            lon: -2500,
            lat: -4500,
          },
        }}
      />
    )

    const addressElement = screen.queryByText(/Endereço:/i)
    expect(addressElement?.textContent).toBe('Endereço:taquara')

    const mapElement = screen.queryByTitle('mapa') as HTMLIFrameElement
    expect(mapElement.src).toMatch(/taquara/i)
  })

  test('Should render the component with city only.', () => {
    render(
      <Map
        city="rio"
        neighborhood=""
        geoLocation={{
          location: {
            lon: -2500,
            lat: -4500,
          },
        }}
      />
    )

    const addressElement = screen.queryByText(/Endereço:/i)
    expect(addressElement?.textContent).toBe('Endereço:rio')

    const mapElement = screen.queryByTitle('mapa') as HTMLIFrameElement
    expect(mapElement.src).toMatch(/rio/i)
  })

  test('Should render the component with city only.', () => {
    render(
      <Map
        city=""
        neighborhood=""
        geoLocation={{
          location: {
            lon: -2500,
            lat: -4500,
          },
        }}
      />
    )

    expect(screen.queryByText('Localização')).toBeInTheDocument()

    const mapElement = screen.queryByTitle('mapa') as HTMLIFrameElement
    expect(mapElement.src).toMatch(/@-4500,-2500/i)
  })
})
