import { User } from '../models/user.model.js'

export const dashboard = async (req, res) => {
  const userFound = await User.findById(req.user.id)
  if (!userFound) return res.sendStatus(401)

  return res.json({
    id: userFound._id,
    username: userFound.username,
  })
}
