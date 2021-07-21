import { Router } from 'express'

import { getUsers } from './controllers'

const router = Router()

// equals to /api/users
router.get('/', getUsers)

export default router
