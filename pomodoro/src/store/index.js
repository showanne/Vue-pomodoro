import Vue from 'vue'
import Vuex from 'vuex'

const time = parseInt(process.env.VUE_APP_TIME)
// const timeBreak = parseInt(process.env.VUE_APP_TIME_BREAK)

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
    // 目前的待做事項
    current: '',
    // 目前的倒數的時間
    timeleft: time,
    // 判斷是不是休息時間
    isBreak: false,
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
        name: data,
        time: '',
        edit: false,
        model: data
      })
    },
    editList (state, data) {
      state.list[data].edit = true
    },
    delList (state, data) {
      state.list.splice(data, 1)
    },
    changeList (state, data) {
      state.list[data].name = state.list[data].model
      state.list[data].edit = false
    },
    canceLlist (state, data) {
      state.list[data].model = state.list[data].name
      state.list[data].edit = false
    }
  },
  // 可以先處理好 function ，再 return 出來，不用外面再處理一次
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
