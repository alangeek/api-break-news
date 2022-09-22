import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const loginService = email => User.findOne({ email: email }).select('+password')

const generateToken = id =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 18000 }) // 18000 = 5 horas

export { loginService, generateToken }
