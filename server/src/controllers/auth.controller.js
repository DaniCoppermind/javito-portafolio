import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'
import { SECRET_KEY } from '../config.js'
import { createAccessToken } from '../libs/jwt.js'

// export const register = async (req, res) => {
//   try {
//     const { username, password } = req.body

//     const userFound = await User.findOne({ username })

//     if (userFound)
//       return res.status(400).json({
//         message: ['The username is already in use'],
//       })

//     const passwordHash = await bcrypt.hash(password, 10)

//     const newUser = new User({
//       username,
//       password: passwordHash,
//     })

//     const userSaved = await newUser.save()

//     const token = await createAccessToken({
//       id: userSaved._id,
//     })

//     res.cookie('token', token, {
//       httpOnly: process.env.NODE_ENV !== 'development',
//       secure: true,
//       sameSite: 'none',
//     })

//     res.json({
//       id: userSaved._id,
//       username: userSaved.username,
//     })
//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// }

export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const userFound = await User.findOne({ username })

    if (!userFound)
      return res.status(400).json({ message: ['The user does not exist'] })

    const isMatch = await bcrypt.compare(password, userFound.password)
    if (!isMatch) {
      return res.status(400).json({
        message: ['The password is incorrect'],
      })
    }

    const token = await createAccessToken({
      id: userFound._id,
      username: userFound.username,
    })

    res.cookie('token', token, {
      httpOnly: process.env.NODE_ENV !== 'development',
      secure: true,
      sameSite: 'none',
    })

    res.json({
      id: userFound._id,
      username: userFound.username,
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const verifyToken = async (req, res) => {
  const { token } = req.cookies
  if (!token) return res.send(false)

  jwt.verify(token, SECRET_KEY, async (error, user) => {
    if (error) return res.sendStatus(401)

    const userFound = await User.findById(user.id)
    if (!userFound) return res.sendStatus(401)

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    })
  })
}
