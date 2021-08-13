import { render } from '@testing-library/react'

import MainContact from './main-contact-component'

describe('MainContact Component', () => {
  test('Should display the component correctly.', () => {
    const { container } = render(<MainContact />)

    expect(container.innerHTML).toMatchSnapshot()
  })
})
