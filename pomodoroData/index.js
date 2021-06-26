import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'

import pomodoroDataRoute from './routes/pomodoroData.js'

dotenv.config()

// 為了解決警示訊息
mongoose.connect(process.env.MONGO, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.set('useFindAndModify', false)

const app = express()

// cors 設定
app.use(cors({
  origin (origin, cb) {
    cb(null, true)
  }
}))

// bodyparser 將資料處理成 json 格式
app.use(bodyparser.json())

// 處理 Express 套件的錯誤，一定要放在要處理的套件(express、bodyParser...)後面
// function 一定要放四個東西 error, req, res, next
// error = Express 發生的錯誤
// error 一定要寫，但是不使用的話 可以 _ 替代
// next = 是否要繼續下一個步驟，使用方式為 next()
app.use((_, req, res, next) => {
  res.status(400).send({ success: false, message: '格式錯誤' })
})

// 根據傳進來的路由判斷由哪個預設的請求來回應
app.use('/pomodoroData', pomodoroDataRoute)

// 放在倒數第二個，如果進來的路徑和請求是以上之外的其他回應，自訂錯誤訊息
// '*' 表示全部
app.all('*', (req, res) => {
  res.status(404).send({ success: false, message: '路徑錯誤' })
})

// 最後放一個保險起見，處理預期外的狀況
app.use((error, req, res, next) => {
  console.log(error)
  res.status(500).send({ success: false, message: error })
})

app.listen(process.env.PORT, () => {
  console.log('Serve Started:' + process.env.PORT);
})