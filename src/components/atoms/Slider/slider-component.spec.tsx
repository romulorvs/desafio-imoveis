import { render, screen } from '@testing-library/react'

import Slider from './slider-component'

describe('Slider Component', () => {
  beforeEach(() => {
    render(<Slider images={['/1.png', '/2.png', '/3.png']} />)
  })

  test('Should display all the photos.', () => {
    expect(screen.queryByAltText('1ª foto do Imóvel')).toBeInTheDocument()
    expect(screen.queryByAltText('2ª foto do Imóvel')).toBeInTheDocument()
    expect(screen.queryByAltText('3ª foto do Imóvel')).toBeInTheDocument()
  })

  test('Should render left arrow button and arrow right button.', () => {
    const arrowLeftBtn = screen.queryByTestId('arrow-left')
    const arrowRightBtn = screen.queryByTestId('arrow-right')

    expect(arrowLeftBtn).toBeInTheDocument()
    expect(arrowRightBtn).toBeInTheDocument()
  })
})
