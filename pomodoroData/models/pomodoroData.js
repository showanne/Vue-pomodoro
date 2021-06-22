import mongoose from 'mongoose'
// import { product } from '../'

const Schema = mongoose.Schema

const listSchema = new Schema({
  todo: {
    type: String,
    minlength: [1, '請最少輸入 1 個字'],
    required: [true, '請輸入待辦事項']
  },
  complete: {
    type: Boolean,
    required: [true, '是否已完成？']
  },
  date: {
    type:String
  }
})

const lists = mongoose.model('lists', listSchema)

export default lists