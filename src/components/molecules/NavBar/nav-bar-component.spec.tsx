import { render, screen } from '@testing-library/react'

import NavBar from './nav-bar-component'

describe('NavBar Component', () => {
  test('Should display the correct data for vivareal.', () => {
    const { container } = render(<NavBar currentBrand="vivareal" />)

    expect(screen.queryByText('Zap')).toBeInTheDocument()
    expect(screen.queryByAltText('Logo Zap')).toBeInTheDocument()
    expect(container.querySelector('a')?.href).toBe('http://localhost/zap')
  })

  test('Should display the correct data for zap.', () => {
    const { container } = render(<NavBar currentBrand="zap" />)

    expect(screen.queryByText('Viva Real')).toBeInTheDocument()
    expect(screen.queryByAltText('Logo Viva Real')).toBeInTheDocument()
    expect(container.querySelector('a')?.href).toBe('http://localhost/vivareal')
  })
})
