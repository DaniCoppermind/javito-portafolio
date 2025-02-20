import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config.js'

export const auth = (req, res, next) => {
  try {
    const token = req.cookies.token
    if (!token) {
      return res.status(401).json({ message: 'No token provided' })
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to authenticate token' })
      }
      req.user = decoded
      next()
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
