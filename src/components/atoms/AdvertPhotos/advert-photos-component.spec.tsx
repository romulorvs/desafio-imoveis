import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AdvertPhotos from './advert-photos-component'

describe('AdvertPhotos Component', () => {
  let container: HTMLElement

  beforeEach(() => {
    const component = render(
      <AdvertPhotos
        images={['/1.png', '/2.png', '/3.png']}
        brand="zap"
        id="abcdef"
      />
    )

    container = component.container
  })

  test('Should display all the photos.', () => {
    expect(screen.queryByAltText('1ª foto do Imóvel')).toBeInTheDocument()
    expect(screen.queryByAltText('2ª foto do Imóvel')).toBeInTheDocument()
    expect(screen.queryByAltText('3ª foto do Imóvel')).toBeInTheDocument()

    const dotsContainer = screen.queryByTestId('index_dots') as HTMLElement
    expect(dotsContainer).toBeInTheDocument()
    expect(dotsContainer.querySelectorAll('button').length).toBe(3)
  })

  test('Should render the correct href link.', () => {
    const anchorElement = container.querySelector('a')
    expect(anchorElement?.href).toBe('http://localhost/zap/abcdef')
  })

  test('Should change current photo when clicking on dot.', () => {
    const dotsContainer = screen.queryByTestId('index_dots') as HTMLElement
    const firstDot = dotsContainer.querySelectorAll('button')[0]

    expect(firstDot.className.includes('active')).toBe(true)

    const secondDot = dotsContainer.querySelectorAll('button')[1]

    userEvent.click(secondDot)

    expect(secondDot.className.includes('active')).toBe(true)
  })

  test('Should go left if the left arrow button is clicked and right if the arrow right button is clicked.', () => {
    const arrowLeftBtn = screen.queryByTestId('arrow-left') as HTMLButtonElement
    const arrowRightBtn = screen.queryByTestId(
      'arrow-right'
    ) as HTMLButtonElement

    expect(arrowLeftBtn).toBeInTheDocument()
    expect(arrowRightBtn).toBeInTheDocument()

    userEvent.click(arrowRightBtn)

    const dotsContainer = screen.queryByTestId('index_dots') as HTMLElement

    const secondDot = dotsContainer.querySelectorAll('button')[1]

    expect(secondDot.className.includes('active')).toBe(true)

    userEvent.click(arrowLeftBtn)

    const firstDot = dotsContainer.querySelectorAll('button')[0]

    expect(firstDot.className.includes('active')).toBe(true)
  })

  test('Should not go left if the current photo is the first one.', () => {
    const arrowLeftBtn = screen.queryByTestId('arrow-left') as HTMLButtonElement
    expect(arrowLeftBtn).toBeInTheDocument()
    expect(arrowLeftBtn.disabled).toBe(true)
  })

  test('Should not go right if the current photo is the last one.', () => {
    const arrowRightBtn = screen.queryByTestId(
      'arrow-right'
    ) as HTMLButtonElement
    expect(arrowRightBtn).toBeInTheDocument()
    userEvent.click(arrowRightBtn)
    userEvent.click(arrowRightBtn)
    expect(arrowRightBtn.disabled).toBe(true)
  })
})
