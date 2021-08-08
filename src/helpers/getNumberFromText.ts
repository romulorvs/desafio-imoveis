import { InputHTMLAttributes } from 'react'

export interface IParams extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  maxLength?: number
  min?: number
  max?: number
}

function getNumberFromText({
  value: originValue,
  maxLength,
  min,
  max,
}: IParams): string {
  let value = originValue.trim()

  if (typeof maxLength !== 'undefined') {
    value = value.substr(0, maxLength)
  }

  if (typeof min !== 'undefined' && min >= 0 && value.indexOf('-') >= 0) {
    return ''
  }

  if (!value) {
    return ''
  }

  if (value === '.' || value === ',') {
    return ''
  }

  if (value.indexOf('-') >= 1) {
    return ''
  }

  if (!/^[0-9.,-]+$/.test(value)) {
    return ''
  }

  let commas = 0
  let dots = 0
  let minus = 0
  for (let i = 0; i < value.length; i++) {
    if (value[i] === ',') {
      commas++
    }

    if (value[i] === '.') {
      dots++
    }

    if (value[i] === '-') {
      minus++
    }

    if (minus >= 2) {
      return ''
    }

    if (commas >= 2 || dots >= 2 || (dots && commas)) {
      return value.substr(0, i)
    }
  }

  let newNumberTxt = value

  newNumberTxt = newNumberTxt.replace(/\./g, ',')
  const lastCommaPos = newNumberTxt.lastIndexOf(',')

  if (lastCommaPos >= 0) {
    newNumberTxt = `${newNumberTxt
      .substr(0, lastCommaPos)
      .replace(/\,/g, '')}.${newNumberTxt.substr(lastCommaPos + 1)}`

    newNumberTxt = newNumberTxt.replace(/\,/g, '')
  }

  const newNumberVal = parseFloat(newNumberTxt)

  if (typeof min !== 'undefined' && newNumberVal < min) {
    return `${min}`.trim()
  }
  if (typeof max !== 'undefined' && newNumberVal > max) {
    return `${max}`.trim()
  }

  return value.substr(0, newNumberTxt.length)
}

export default getNumberFromText
