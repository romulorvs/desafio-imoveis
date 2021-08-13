const joinClasses = (...str: any[]): string =>
  str
    .filter(s => typeof s === 'string')
    .join(' ')
    .trim()

export default joinClasses
