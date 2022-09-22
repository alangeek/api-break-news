import bcrypt from 'bcryptjs'

import { loginService, generateToken } from '../services/auth.service.js'

class authController {
  login = async (req, res) => {
    const { email, password } = req.body

    try {
      const user = await loginService(email)

      if (!user) {
        return res.status(404).json({
          message: 'E-mail e Senha não se correspodem, tente novamente!'
        })
      }

      const passwordIsValid = await bcrypt.compare(password, user.password)

      if (!passwordIsValid) {
        return res.status(400).json({
          message: 'E-mail e Senha não se correspodem, tente novamente!'
        })
      }

      const token = generateToken(user.id)

      res.json({ token })
    } catch (err) {
      res.status(500).json(err.message)
    }
  }
}

export default new authController()
