import { render, screen } from '@testing-library/react'

import Header from './header-component'

describe('Header Component', () => {
  test('Should display the correct image and link for olx.', () => {
    const { container } = render(<Header />)

    expect(screen.queryByAltText('Logo Olx')).toBeInTheDocument()

    const anchorElement = container.querySelector(
      'a'
    ) as unknown as HTMLAnchorElement
    expect(anchorElement.href).toBe('http://localhost/')
  })

  test('Should display the correct image and link for zap.', () => {
    const { container } = render(<Header brand="zap" />)

    expect(screen.queryByAltText('Logo Zap')).toBeInTheDocument()

    const anchorElement = container.querySelector(
      'a'
    ) as unknown as HTMLAnchorElement
    expect(anchorElement.href).toBe('http://localhost/zap')
  })

  test('Should display the correct image and link for viva real.', () => {
    const { container } = render(<Header brand="vivareal" />)

    expect(screen.queryByAltText('Logo Viva Real')).toBeInTheDocument()

    const anchorElement = container.querySelector(
      'a'
    ) as unknown as HTMLAnchorElement
    expect(anchorElement.href).toBe('http://localhost/vivareal')
  })
})
