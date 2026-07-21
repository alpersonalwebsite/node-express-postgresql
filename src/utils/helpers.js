export const toNumber = (queryInput, fallback = 0) => {
  const parsed = parseInt(queryInput, 10)
  return isNaN(parsed) ? fallback : parsed
}
