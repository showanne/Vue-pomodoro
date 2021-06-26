import express from 'express'
import {
  createlist,
  getlists,
  getlist,
  // getlistsTodo,
  updatelist,
  dellist
} from '../controllers/pomodoroData.js'

const router = express.Router()

// 此處 '/' 即為 /pomodoroData
// 此處 '/:id' 實際為 /pomodoroData/個別 id 值 (不須加":")

// 增
router.post('/', createlist)
// 查
router.get('/', getlists)

// 可以取得眾多資料的特定欄位的值 -> 實測無效
// router.get('/?complete=false', getlists)
// router.get('/', getlistsTodo)

// 查 單個使用者id
router.get('/:id', getlist)
// 改
router.patch('/:id', updatelist)
// 刪
router.delete('/:id', dellist)


export default router