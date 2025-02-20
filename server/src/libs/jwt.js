import { SECRET_KEY } from '../config.js'
import jwt from 'jsonwebtoken'

export async function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_KEY, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })
}
