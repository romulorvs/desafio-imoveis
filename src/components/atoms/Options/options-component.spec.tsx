import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Options from './options-component'

const list = [
  { id: 'one', label: 'One' },
  { id: 'two', label: 'Two' },
  { id: 'three', label: 'Three' },
]

describe('Options Component', () => {
  test('Should display the selected value.', () => {
    render(
      <Options
        value={list[1].id}
        list={list}
        labelText=""
        onChange={() => {}}
      />
    )

    expect(screen.queryByDisplayValue(list[1].label)).toBeInTheDocument()
    expect(screen.queryByDisplayValue(list[0].label)).not.toBeInTheDocument()
    expect(screen.queryByDisplayValue(list[2].label)).not.toBeInTheDocument()
  })

  test('Should change the selected item.', () => {
    const onChange = jest.fn()

    render(
      <Options
        value={list[0].id}
        list={list}
        labelText=""
        onChange={onChange}
      />
    )

    const optionElement = screen.queryByDisplayValue(
      list[0].label
    ) as HTMLSelectElement

    expect(optionElement).toBeInTheDocument()

    userEvent.selectOptions(optionElement, [list[1].id])

    expect(onChange).toHaveBeenCalledWith(list[1].id)
  })
})
