import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import bodyparser from 'body-parser'

import pomodoroDataRoute from './routes/pomodoroData.js'

dotenv.config()

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express()

app.use(bodyparser.json())

app.use('/pomodoroData', pomodoroDataRoute)

app.listen(process.env.PORT, () => {
  console.log('Serve Started:' + process.env.PORT);
})