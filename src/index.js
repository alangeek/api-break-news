import dotenv from 'dotenv'
import express from 'express'

import connectDatabase from './database/db.js'

// ROUTES
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

dotenv.config()

connectDatabase()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/user', userRoute)
app.use('/auth', authRoute)

app.listen(PORT, () => {
  console.log(`Started ${PORT}`)
})
