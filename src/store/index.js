import Vue from 'vue'
import Vuex from 'vuex'

// 將 Vuex 資料存 localstorage
import createPersistedState from 'vuex-persistedstate'

const time = parseInt(process.env.VUE_APP_TIME)
const timeBreak = parseInt(process.env.VUE_APP_TIME_BREAK)

Vue.use(Vuex)
// Vuex 可以儲存網頁的狀態，讓元件間的資料共享更方便

export default new Vuex.Store({
  // 狀態 Vuex 有哪些資料
  state: {
    // 設定預設鈴聲
    sound: 'alarm.mp3',
    // 預設鈴聲開關 true 是 開
    soundOn: true,
    // 今天
    // today: new Date().toLocaleDateString('zh-tw'),
    list_id: 0,
    // 待辦清單
    list: [],
    // 完成清單，list 完成的資料會移入此
    // finished: [],
    // 目前的待辦事項
    current: '',
    // 目前的倒數的時間
    timeleft: time,
    // 判斷是不是休息時間
    isBreak: false,
    imgCountdown: 'deco-target.png',
    // 倒數的狀態 0=停止 1=倒數中 2=暫停
    status: 0
  },
  // 修改狀態的 function，改變的 state 的 function ， state 值僅能在此更動
  mutations: {
    //  function (state 就是上面的 , data 是想丟進 function 的值)
    selectSound (state, data) {
      state.sound = data
    },
    SoundOnOff (state, data) {
      state.soundOn = data
    },
    addList (state, data) {
      // state.list.push(data)
      state.list.push({
        // 待辦事項
        todo: data.todo,
        // 新增待辦事項的日期， 0 是今天 給 DateCalc()計算
        date: 0,
        // 期限
        deadline: data.deadline,
        // 完成待辦事項的日期
        finishedDate: '',
        // 是否已完成 預設為 false
        check: false,
        // 是否在編輯 預設為 false
        edit: false,
        // 編輯前的待辦事項
        todoEdit: data.todo,
        // 次數，由系統計入一個待辦事項做了幾次
        // Analytics 和 List 頁面 todo 下方的圓點
        times: 0

        // 次數-做了幾次番茄鐘，由系統計次
        // Analytics 頁面 Today 的 Pomodoro 值
        // timesPomodoro: 0

        // 次數-當天有幾個待辦事項，由系統計次
        // Analytics 頁面 Today 的 Task 值
        // timesTodo: 0

        // 完成個數，由系統計入完成了幾個待辦事項
        // 應該是計算 check:true 的數量
        // Analytics 頁面 Today 的 Complete 值
        // complete: 0

        // 一個待辦事項所花費的時間
        // 應該是計算該事項 times 的數量去乘 25min
        // Analytics 頁面 todo 旁的時間
        // timeTodo: 0

        // 當天做待辦事項所花費的時間 = 專注的時間
        // Analytics 頁面 Today 的 Focus time 值
        // timeFocus: 0

        // 假如是一周的計算，不知道是不是可以用單天的相加，或是需要另設變數?
      })
    },
    editList (state, data) {
      state.list[data].edit = true
    },
    delList (state, data) {
      state.list.splice(data, 1)
    },
    changeList (state, data) {
      state.list[data].todo = state.list[data].todoEdit
      state.list[data].edit = false
    },
    canceLlist (state, data) {
      state.list[data].todoEdit = state.list[data].todo
      state.list[data].edit = false
    },
    chooselist (state, data) {
      state.current = state.list[data].todo
      state.list_id = data
      state.timeleft = time
      state.isBreak = false
    },
    complete (state, data) {
      // DEBUG:不會即時同步到 done
      console.log(data)
      state.list[data].check = true
    },
    // 按 > 開始按鈕時機
    startTodo (state) {
      // 休息狀態判斷
      if (state.isBreak) {
        // 如果是休息時間顯示 ''
        state.current = 'Time to Take a break'
        // 開始時 要加入背景圖片判斷
        state.imgCountdown = 'deco-tree.png'
      } else {
        // 不是休息時間 開始時，將 list 的第一筆(.shift() )放入
        // state.current = state.list.shift().todo
        state.current = state.list[state.list_id].todo
        // 開始時 要加入背景圖片判斷
        state.imgCountdown = 'deco-target.png'
      }
    },
    // 更改狀態
    changeStatus (state, data) {
      state.status = data
    },
    // 倒數
    countdown (state) {
      state.timeleft--
    },
    // 結束
    addFinish (state) {
      // 判斷不是休息時間，再將 state.current 放入 finished ，否則 'Time to Take a break' 也會被放入完成清單
      if (!state.isBreak) {
        // state.list[state.list_id].check = true
        // 完成時，在清單新增完成待辦事項的日期
        state.list[state.list_id].finishedDate = 0
        // 讓倒數順序繼續
        state.list_id++
      }
      // 結束後，沒有待辦事項時，顯示 'unknown task'
      // if (state.list.length = 0) {
      state.current = 'unknown task'
      // }
      // 要改為還有 check true 時 切換休息狀態
      // 如果待辦清單list 內有資料時
      if (state.list.length > 0) {
        // 切換休息狀態
        state.isBreak = !state.isBreak
        // 是休息時間 true 就變為不是休息時間 false
        // 不是休息時間 false 就變為是休息時間 true
      }
      // 判斷
      state.timeleft = state.isBreak ? timeBreak : time
      // 條件 ? 成立時執行的程式 : 否定時執行的程式
      // if (state.timeleft = state.isBreak) {
      //   return timeBreak
      // } else {
      //   return time
      // }
    },
    // 將已完成的待辦 放進表格
    // delFinish (state, data) {
    //   state.finished.splice(data, 1)
    // state.finished.push({
    // 完成的待辦事項
    // done: state.finished.splice(data, 1)
    // 完成待辦事項的日期
    // date: new Date().toLocaleDateString('zh-tw')
    // })
    // }
    // 計算 Pomodoro 次數
    timesCalc (state) {
      state.list[state.list_id].times++
    }
  },
  // 獲取資料的 function，getters 可以先處理好 function ，再 return 出來，不用外面再處理一次
  getters: {
    list (state) {
      return state.list
    }
  },
  // 修改狀態的 function，可以執行同步非同步
  actions: {
  },
  // 將 Vuex 模組化分割
  modules: {
  },
  // 將 Vuex 資料存 localstorage
  plugins: [
    createPersistedState({
      key: 'Pomodoro'
    })
  ]
})
