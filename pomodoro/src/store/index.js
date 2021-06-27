import Vue from 'vue'
import Vuex from 'vuex'

const time = parseInt(process.env.VUE_APP_TIME)
const timeBreak = parseInt(process.env.VUE_APP_TIME_BREAK)

Vue.use(Vuex)

export default new Vuex.Store({
  // Vuex 有哪些資料
  state: {
    // 設定預設鈴聲
    sound: 'alarm.mp3',
    // 待辦清單
    list: [],
    // 完成清單，list 完成的資料會移入此
    finished: [],
    // 目前的待辦事項
    current: '',
    // 目前的倒數的時間
    timeleft: time,
    // 判斷是不是休息時間
    isBreak: false,
    imgTime: 'iconmonstr-marketing-4.png',
    imgTimeBreak: 'tree.png',
    // 倒數的狀態 0=停止 1=倒數中 2=暫停
    status: 0
  },
  // 改變的 state 的 function ， state 值僅能在此更動
  mutations: {
    //  function (state 就是上面的 , data 是想丟進 function 的值)
    selectSound (state, data) {
      state.sound = data
    },
    addList (state, data) {
      // state.list.push(data)
      state.list.push({
        // 待辦事項                                       [資料庫欄位]
        todo: data,
        // 新增待辦事項的日期 "2021/6/21"，由系統自行帶入  [資料庫欄位]
        date: new Date().toLocaleDateString('zh-tw'),
        // 期限                                            [資料庫欄位]
        deadline: '',
        // 是否已完成 預設為 false                         [資料庫欄位]
        check: false,
        // 是否在編輯 預設為 false
        edit: false,
        // 編輯前的待辦事項
        todoEdit: data,

        // 次數，由系統計入一個待辦事項做了幾次             [資料庫欄位]
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
    // 按 > 開始按鈕時機
    startTodo (state) {
      // 休息狀態判斷
      if (state.isBreak) {
        // 如果是休息時間顯示 ''
        state.current = 'Time to Take a break'
        // 開始時 要加入背景圖片判斷
      } else {
        // 不是休息時間 開始時，將 list 的第一筆(.shift() )放入
        state.current = state.list.shift().todo
        // 開始時 要加入背景圖片判斷
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
      // 完成時，將目前的待辦事項放入完成清單
      state.finished.push(state.current)
      // 結束後，沒有待辦事項時，顯示 'unknown task'
      state.current = 'unknown task'
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
    }
  },
  // getters 可以先處理好 function ，再 return 出來，不用外面再處理一次
  getters: {
    list (state) {
      return state.list
    }
  },
  // 可以執行同步非同步
  actions: {
  },
  modules: {
  }
})
