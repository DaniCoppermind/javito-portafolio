import { Router } from 'express'
import { verifyToken } from '../controllers/auth.controller.js'
import { dashboard } from '../controllers/dashboard.controller.js'

const router = Router()

router.get('/dashboard', verifyToken, dashboard)

export default router
