import db from '../../utils/db'
import { toNumber } from '../../utils/helpers'

export const getUsers = async (req, res) => {
  try {
    const docs = await db.users.findAll({
      limit: toNumber(req.query.limit || 40),
      offset: toNumber(req.query.offset || 0)
    })
    res.status(200).json({ data: docs })
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}
