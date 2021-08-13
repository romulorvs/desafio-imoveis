import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Pagination from './pagination-component'

describe('Pagination Component', () => {
  test('Should display the current page and the total pages.', () => {
    render(<Pagination value={758} totalPages={123456} onChange={() => {}} />)

    expect(screen.queryByText(/758/)).toBeInTheDocument()
    expect(screen.queryByText(/123456/)).toBeInTheDocument()
  })

  test('Should display nothing if totalPages is lower or equal to one.', () => {
    render(<Pagination value={758} totalPages={1} onChange={() => {}} />)

    expect(screen.queryByText(/758/)).not.toBeInTheDocument()
    expect(screen.queryByText(/1/)).not.toBeInTheDocument()
  })

  test('Should subtract one page from current one.', () => {
    const onChange = jest.fn()

    render(<Pagination value={100} totalPages={150} onChange={onChange} />)

    const subtractBtn = screen.queryByTestId(
      'subtract-btn'
    ) as HTMLButtonElement

    expect(subtractBtn?.disabled).toBe(false)

    userEvent.click(subtractBtn)

    expect(onChange).toBeCalledWith(99)
  })

  test('Should add one page to the current one.', () => {
    const onChange = jest.fn()

    render(<Pagination value={100} totalPages={150} onChange={onChange} />)

    const addBtn = screen.queryByTestId('add-btn') as HTMLButtonElement

    expect(addBtn.disabled).toBe(false)

    userEvent.click(addBtn)

    expect(onChange).toBeCalledWith(101)
  })

  test('Should not subtract current page to lower than 1.', () => {
    render(<Pagination value={1} totalPages={100} onChange={() => {}} />)
    const subtractBtn = screen.queryByTestId(
      'subtract-btn'
    ) as HTMLButtonElement
    expect(subtractBtn.disabled).toBe(true)
  })

  test('Should not add current page to higher than total pages.', () => {
    render(<Pagination value={100} totalPages={100} onChange={() => {}} />)
    const addBtn = screen.queryByTestId('add-btn') as HTMLButtonElement
    expect(addBtn.disabled).toBe(true)
  })
})
