import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // Vuex 有哪些資料
  state: {
    // 設定預設鈴聲
    sound: 'alarm.mp3',
    // 待辦清單
    list: [],
    // 完成清單
    finished: []
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
        edit: false,
        model: data
      })
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
