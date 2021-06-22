import pomodoroData from '../models/pomodoroData.js'

export const createlist = async (req, res) => {
  try {
    const result = await pomodoroData.create(req.body)
    res.status(200).send({ success:true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError' ) {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({success: false, message: '伺服器錯誤'})
    }
  }
}