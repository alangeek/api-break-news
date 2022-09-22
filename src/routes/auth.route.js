import { Router } from 'express'

import authController from '../controllers/auth.controller.js'

const route = new Router()

route.post('/', authController.login)

export default route
