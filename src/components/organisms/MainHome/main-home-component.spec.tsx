import { render } from '@testing-library/react'

import MainHome from './main-home-component'

describe('MainHome Component', () => {
  test('Should display the component correctly.', () => {
    const { container } = render(<MainHome />)

    expect(container.innerHTML).toMatchSnapshot()
  })
})
