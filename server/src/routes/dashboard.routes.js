import { Router } from 'express'
import { verifyToken } from '../controllers/auth.controller.js'

const router = Router()

router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to the dashboard' })
})

export default router
