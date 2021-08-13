import { render, screen } from '@testing-library/react'

import MainDetails from './main-details-component'

describe('MainDetails Component', () => {
  test('Should display the data correctly for sale property.', () => {
    const { container } = render(
      <MainDetails
        id="123"
        bedrooms={101}
        usableAreas={57}
        bathrooms={12}
        parkingSpaces={89}
        address={{
          city: 'rio',
          neighborhood: 'taquara',
          geoLocation: {
            location: {
              lon: -5500,
              lat: -2500,
            },
          },
        }}
        images={[]}
        pricingInfos={{
          monthlyCondoFee: '123456',
          yearlyIptu: '789456',
          businessType: 'SALE',
          price: '456789',
          rentalTotalPrice: '654123',
        }}
      />
    )

    const titleElement = container.querySelector('h1')
    expect(titleElement?.textContent).toBe('Apartamento para Venda')

    const priceElement = container.querySelector('h2')
    expect(priceElement?.textContent).toBe('R$ 456.789')
  })

  test('Should display the data correctly for rental property.', () => {
    const { container } = render(
      <MainDetails
        id="123"
        bedrooms={101}
        usableAreas={57}
        bathrooms={12}
        parkingSpaces={89}
        address={{
          city: 'rio',
          neighborhood: 'taquara',
          geoLocation: {
            location: {
              lon: -5500,
              lat: -2500,
            },
          },
        }}
        images={[]}
        pricingInfos={{
          monthlyCondoFee: '123456',
          yearlyIptu: '789456',
          businessType: 'RENTAL',
          price: '456789',
          rentalTotalPrice: '654123',
        }}
      />
    )

    const titleElement = container.querySelector('h1')
    expect(titleElement?.textContent).toBe('Apartamento para Aluguel')

    const priceElement = container.querySelector('h2')
    expect(priceElement?.textContent).toBe('R$ 456.789 / mês')
  })
})
