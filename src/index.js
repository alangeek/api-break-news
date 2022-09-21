import dotenv from 'dotenv'
import express from 'express'

import connectDatabase from './database/db.js'

import userRoute from './routes/user.route.js'

dotenv.config()

connectDatabase()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log(`Started ${PORT}`)
})
