import { toNumber } from './helpers'

const sleep = (delay, message) => {
  return new Promise((resolve) => {
    // wait x time before resolving
    setTimeout(() => resolve(message), delay)
  })
}

const validTimeRange = (delay) => {
  const defaultOutOfRange = 1000
  if (delay) {
    if (delay < 1000) return defaultOutOfRange
    else if (delay > 4000) return defaultOutOfRange
    return delay
  }
  return defaultOutOfRange
}

export const simulate = async (req, res) => {
  const delay = validTimeRange(toNumber(req.query.delay))
  const delaySecs = Math.floor(delay / 1000)
  const noun = delaySecs > 1 ? 'seconds' : 'second'
  try {
    const response = await sleep(delay, `Thanks for waiting ${delaySecs} ${noun}`)
    res.status(200).json({ data: response })
  } catch (err) {
    res.status(400).end()
  }
}
