export const toNumber = (queryInput) => {
  const toNumber = parseInt(queryInput, 10)
  if (typeof toNumber === 'number' && !isNaN(toNumber)) {
    return toNumber
  }
  return ''
}
