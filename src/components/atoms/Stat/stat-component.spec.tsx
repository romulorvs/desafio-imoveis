import { render, screen } from '@testing-library/react'

import Stat from './stat-component'

describe('Stat Component', () => {
  test('Should render component.', () => {
    render(<Stat type="AREA" value="area_val" />)
    expect(screen.queryByText('area_val')).toBeInTheDocument()

    render(<Stat type="BATHROOMS" value="bathrooms_val" />)
    expect(screen.queryByText('bathrooms_val')).toBeInTheDocument()

    render(<Stat type="BEDROOMS" value="bedrooms_val" />)
    expect(screen.queryByText('bedrooms_val')).toBeInTheDocument()

    render(<Stat type="PARKING_SPACES" value="parking_spaces_val" />)
    expect(screen.queryByText('parking_spaces_val')).toBeInTheDocument()
  })
})
