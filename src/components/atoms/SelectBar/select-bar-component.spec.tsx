import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SelectBar from './select-bar-component'

const list = [
  { id: 'buy', label: 'Comprar' },
  { id: 'rent', label: 'Alugar' },
  { id: 'both', label: 'Ambos' },
]

describe('SelectBar Component', () => {
  test('Should display the selected button.', () => {
    render(<SelectBar value={list[1].id} list={list} onChange={() => {}} />)

    const selectedElement = screen.queryByTestId(
      'selected'
    ) as HTMLButtonElement

    expect(selectedElement).toBeInTheDocument()
    expect(selectedElement.innerHTML).toBe(list[1].label)
    expect(selectedElement.innerHTML).not.toBe(list[0].label)
    expect(selectedElement.innerHTML).not.toBe(list[2].label)
  })

  test('Should change the selected button.', () => {
    const onChange = jest.fn()

    render(<SelectBar value={list[1].id} list={list} onChange={onChange} />)

    const thirdElement = screen.queryByText(list[2].label) as HTMLButtonElement

    expect(thirdElement).toBeInTheDocument()

    userEvent.click(thirdElement)

    expect(onChange).toHaveBeenCalledWith(list[2].id)
  })
})
