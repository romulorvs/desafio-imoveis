import { render, screen } from '@testing-library/react'

import ImageLink from './image-link-component'

describe('ImageLink Component', () => {
  test('Should render the anchor tag and the image.', () => {
    render(
      <ImageLink
        href="http://test.com/"
        src="/test.png"
        alt="alt_test"
        width={400}
        height={300}
      />
    )

    expect(screen.queryByAltText('alt_test')).toBeInTheDocument()
    expect(screen.queryByAltText('alt_test')?.closest('a')?.href).toBe(
      'http://test.com/'
    )
  })

  test('Should render the children component.', () => {
    render(
      <ImageLink
        href="http://test.com"
        src="/test.png"
        alt="alt_test"
        width={400}
        height={300}
      >
        children_test
      </ImageLink>
    )

    expect(screen.queryByText('children_test')).toBeInTheDocument()
  })
})
