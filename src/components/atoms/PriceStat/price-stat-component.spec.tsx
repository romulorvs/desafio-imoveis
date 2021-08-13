import { render, screen } from '@testing-library/react'

import PriceStat from './price-stat-component'

describe('PriceStat Component', () => {
  test('Should render component.', () => {
    render(<PriceStat type="CONDO" value="123456" />)
    let pElement = screen.queryByText(/Condomínio:/i) as HTMLElement
    expect(pElement.textContent).toBe('Condomínio: R$ 123.456')

    render(<PriceStat type="IPTU" value="623456" />)
    pElement = screen.queryByText(/IPTU:/i) as HTMLElement
    expect(pElement.textContent).toBe('IPTU: R$ 623.456')

    render(<PriceStat type="RENTAL_TOTAL_PRICE" value="323456" />)
    pElement = screen.queryByText(/Total \/ mês:/i) as HTMLElement
    expect(pElement.textContent).toBe('Total / mês: R$ 323.456')
  })
})
