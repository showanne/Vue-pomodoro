import express from 'express'
import {
  createlist,
  getlists,
  getlist,
  getlistsTodo,
  updatelist
} from '../controllers/pomodoroData.js'

const router = express.Router()

// 此處 '/' 即為 /pomodoroData
router.post('/', createlist)
router.get('/', getlists)
router.get('/', getlistsTodo)
router.get('/:id', getlist)
// 此處 '/:id' 實際為 /pomodoroData/個別 id 值 (不須加:)
router.patch('/:id', updatelist)
// router.post('/', createlist)


export default router