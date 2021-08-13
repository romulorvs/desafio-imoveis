import { render, screen } from '@testing-library/react'

import AdvertItemLoading from './advert-item-loading-component'

describe('AdvertItemLoading Component', () => {
  test('Should display the component correctly.', () => {
    render(<AdvertItemLoading />)

    expect(screen.queryByText('bed_text')).toBeInTheDocument()
    expect(screen.queryByText('bath_text')).toBeInTheDocument()
    expect(screen.queryByText('area_text')).toBeInTheDocument()
  })
})
