import { Router } from 'express'
import { login, verifyToken, logout } from '../controllers/auth.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { loginSchema } from '../schemas/auth.schema.js'

const router = Router()

// router.post('/register', register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', verifyToken, logout)
export default router
