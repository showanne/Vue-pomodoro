import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import bodyparser from 'body-parser'

import pomodoroDataRoute from './routes/pomodoroData.js'

dotenv.config()

// 為了解決警示訊息
mongoose.connect(process.env.MONGO, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.set('useFindAndModify', false)

const app = express()

app.use(bodyparser.json())

app.use('/pomodoroData', pomodoroDataRoute)

app.listen(process.env.PORT, () => {
  console.log('Serve Started:' + process.env.PORT);
})