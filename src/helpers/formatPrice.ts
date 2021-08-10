function formatPrice(num: number | string) {
  if (typeof num === 'number') {
    return num.toLocaleString()
  }

  return parseFloat(num).toLocaleString()
}

export default formatPrice
