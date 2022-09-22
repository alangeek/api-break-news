import User from '../models/user.model.js'

const loginService = email => User.findOne({ email: email }).select('+password')

export { loginService }
