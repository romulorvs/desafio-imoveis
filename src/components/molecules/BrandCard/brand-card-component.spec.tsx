import { render, screen } from '@testing-library/react'

import BrandCard from './brand-card-component'

describe('BrandCard Component', () => {
  test('Should display the correct data for zap.', () => {
    render(<BrandCard type="zap" />)

    expect(
      screen.queryByAltText('Imóvel de exemplo do Zap')
    ).toBeInTheDocument()

    const featureOne = screen.queryByText(/Aluguéis a partir de/i)
    expect(featureOne).toBeInTheDocument()
    expect(featureOne?.textContent).toBe('Aluguéis a partir de R$ 3.500')

    const featureTwo = screen.queryByText(/Vendas a partir de/i)
    expect(featureTwo).toBeInTheDocument()
    expect(featureTwo?.textContent).toBe('Vendas a partir de R$ 600.000')
  })

  test('Should display the correct data for vivareal.', () => {
    render(<BrandCard type="vivareal" />)

    expect(
      screen.queryByAltText('Imóvel de exemplo do Viva Real')
    ).toBeInTheDocument()

    const featureOne = screen.queryByText(/Aluguéis até/i)
    expect(featureOne).toBeInTheDocument()
    expect(featureOne?.textContent).toBe('Aluguéis até R$ 4.000')

    const featureTwo = screen.queryByText(/Vendas até/i)
    expect(featureTwo).toBeInTheDocument()
    expect(featureTwo?.textContent).toBe('Vendas até R$ 700.000')
  })
})
