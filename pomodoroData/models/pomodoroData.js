import mongoose from 'mongoose'
// import { product } from '../'

const Schema = mongoose.Schema

const listSchema = new Schema({
  todo: { // 待辦事項
    type: String,
    minlength: [1, '請最少輸入 1 個字'],
    required: [true, '請輸入待辦事項']
    // 預設必填欄位
  },
  date: { //新增待辦事項的日期
    type:String
    // 此欄不出現在新增待辦時，由系統自行帶入
  },
  deadline: { // 期限
    type:String,
    required: [true, '何時須完成呢？']
    // 預設必填欄位
  },
  check: { // 是否已完成
    type: Boolean
    // required: [true, '是否已完成？']
    // 剛新增時肯定是未完成，此欄不出現在新增待辦時
    // 預設為 false .\pomodoro\src\store\index.js
  },
  times: { // 次數
    type: Number
    // 此欄不出現在新增待辦時，需由系統計入做了幾次
    // 第一次送出預設為 0
  }
})

const lists = mongoose.model('lists', listSchema)

export default lists