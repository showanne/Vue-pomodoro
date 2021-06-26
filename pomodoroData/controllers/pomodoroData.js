import pomodoroData from '../models/pomodoroData.js'

// 新增
export const createlist = async (req, res) => {
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '資料格式錯誤' })
    return
  }
  try {
    let result = await pomodoroData.create(req.body)
    // .toObject() 將回傳的 Mongoose Document(Mongoose 特有格式，非JSON物件) 格式轉為 JS 格式才能進行相關操作
    // result = result.toObject()
    // 回傳時 刪除某(ex:times)欄位 顯示
    // delete result.times
    res.status(200).send({ success:true, message: '', result })
  } catch (error) {
    // 驗證錯誤時的訊息
    if (error.name === 'ValidationError' ) {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({success: false, message: '伺服器錯誤'})
    }
  }
  console.log('createlist');
}

// 查詢 所有欄位
export const getlists = async (req, res) => {
  try {
    // .find({查詢條件}, '回傳欄位')
    // 回傳欄位以空白分隔，  - 代表不要指定欄位，沒有 - 代表指定欄位
    const result = await pomodoroData.find()
    res.status(200).send({ success:true, message: '', result })
  } catch (error) {
    res.status(500).send({success: false, message: '伺服器錯誤'})
  }
  console.log('getlists');
}


// 查詢 指定欄位
export const getlistsTodo = async (req, res) => {
  // try {
  //   // .find({查詢條件}, '回傳欄位')
  //   // 回傳欄位以空白分隔，  - 代表不要指定欄位，沒有 - 代表指定欄位
  //   const result = await pomodoroData.find({}, 'todo')
  //   res.status(200).send({ success:true, message: '', result })
  // } catch (error) {
  //   res.status(500).send({success: false, message: '伺服器錯誤'})
  // }
  console.log('getlistsTodo');
}


// 查詢 單一欄位 用 id 
export const getlist = async (req, res) => {
  try {
    // .findById(req.params.id, '-date') '- ...' 指定不要什麼欄位
    const result = await pomodoroData.findById(req.params.id)
    if (result) {
      res.status(200).send({ success:true, message: '', result })
    } else {
      res.status(404).send({ success:false, message: '查無此待辦事項' })
    }
  } catch (error) {
    // 'CastError' id 格式不符時，會回傳的錯誤
    if (error.name === 'CastError') {
      res.status(404).send({ success:false, message: '查無此待辦事項' })
    } else {
      res.status(500).send({success: false, message: '伺服器錯誤'})
    }
  }
  console.log('getlist');
}

// 修改某 id 的欄位
export const updatelist = async (req, res) => {
  try {
    // .findByIdAndUpdate 找到某 ID 去更新欄位
    // { new: true, runValidators: true } 回傳新的 , 跑驗證
    // 因為 使用了 findByIdAndUpdate，所以會跳出警示訊息 `findOneAndUpdate()`  `findOneAndDelete()` 將被棄用，所以會有關聯影響，去 pomodoroData\index.js 設定 mongoose.set('useFindAndModify', false) 可以解決警示訊息 -------https://blog.csdn.net/qq_42760049/article/details/98593923
    const result = await pomodoroData.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).lean()
    // .lean() 也是將 Mongoose Document 資料型態轉為 JS 可以處理的東西
    if (result) {
      // 回傳時 刪除某(ex:times)欄位 顯示
      // delete result.times
      res.status(200).send({ success:true, message: '', result })
    } else {
      res.status(404).send({ success:false, message: '查無此待辦事項' })
    }
  } catch (error) {
    // 'CastError' id 格式不符時，會回傳的錯誤
    if (error.name === 'CastError') {
      res.status(404).send({ success:false, message: '查無此待辦事項' })
    } else if (error.name === 'ValidationError' ) {
      // 驗證錯誤時的訊息
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({success: false, message: '伺服器錯誤'})
    }
  }
    console.log('updatelist');
}

// 刪除某 id 的欄位
export const dellist = async (req, res) => {
  try {
    // .findByIdAndDelete 找到某 ID 去刪除欄位
    const result = await pomodoroData.findByIdAndDelete(req.params.id)
    if (result) {
      // 結尾不須加 result 因為刪除後不用回傳資料
      res.status(200).send({ success:true, message: '成功刪除' })
    } else {
      res.status(404).send({ success:false, message: '查無此待辦事項' })
    }
  } catch (error) {
    // 'CastError' id 格式不符時，會回傳的錯誤
    if (error.name === 'CastError') {
      res.status(404).send({ success:false, message: '查無此待辦事項' })
    } else {
      res.status(500).send({success: false, message: '伺服器錯誤'})
    }
  }
  console.log('dellist');

}