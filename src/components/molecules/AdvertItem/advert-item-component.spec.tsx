import { render, screen } from '@testing-library/react'

import AdvertItem from './advert-item-component'

describe('AdvertItem Component', () => {
  test('Should display the correct data for rental properties.', () => {
    const { container } = render(
      <AdvertItem
        id="123"
        brand="zap"
        pricingInfos={{
          businessType: 'RENTAL',
          price: '123456',
        }}
        bathrooms={101}
        bedrooms={115}
        images={[]}
        usableAreas={257}
      />
    )

    const titleElement = screen.queryByText(/Apartamento para/i)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement?.textContent).toBe('Apartamento para Aluguel')

    const priceElement = screen.queryByText(/R\$/i)
    expect(priceElement).toBeInTheDocument()
    expect(priceElement?.textContent).toBe('R$ 123.456 / mês')

    expect(screen.queryByText('101')).toBeInTheDocument()
    expect(screen.queryByText('115')).toBeInTheDocument()
    expect(screen.queryByText('257 m²')).toBeInTheDocument()

    const anchorElement = container.querySelector(
      '.details'
    ) as unknown as HTMLAnchorElement

    expect(anchorElement.href).toBe('http://localhost/zap/123')
  })

  test('Should display the correct data for sales properties.', () => {
    render(
      <AdvertItem
        id="123"
        brand="zap"
        pricingInfos={{
          businessType: 'SALE',
          price: '123456',
        }}
        bathrooms={1}
        bedrooms={1}
        images={[]}
        usableAreas={2}
      />
    )

    const titleElement = screen.queryByText(/Apartamento para/i)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement?.textContent).toBe('Apartamento para Venda')

    const priceElement = screen.queryByText(/R\$/i)
    expect(priceElement).toBeInTheDocument()
    expect(priceElement?.textContent).toBe('R$ 123.456')
  })
})
