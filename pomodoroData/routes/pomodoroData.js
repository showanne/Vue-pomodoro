import express from 'express'
import { createlist } from '../controllers/pomodoroData.js'

const router = express.Router()

// 此處 '/' 即為 /pomodoroData
router.post('/', createlist)

export default router