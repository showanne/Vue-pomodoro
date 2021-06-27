<template lang="pug">
  #home
    b-container.vh-100
      b-row
        b-col(cols='8').d-flex.justify-content-center.align-items-center.flex-column
          b-btn(variant='secondary' to='/home/pomodoro').my-3 {{ btnStartText }}
          b-btn(variant='outline-secondary' to='/list').my-3 Choose Task
        b-col(cols='4')
          img(:src='require("../assets/img/iconmonstr-marketing-4.png")')
      b-row
        b-col(cols='8').d-flex.justify-content-center.align-items-center.flex-column
          //- h1 倒計時文字
          h1.my-5.align-middle.font-countdown {{ timeText }}
          .button.my-3
            b-btn(variant='primary' v-if='status !== 1' @click='start').mx-2
              //- 如果不是在倒數狀態時，出現播放按鈕
              font-awesome-icon(:icon='["fas", "play"]').text-secondary.btn-font
            b-btn(variant='primary' v-if='status === 1').mx-2
              //- 如果是在倒數狀態時，出現暫停按鈕
              font-awesome-icon(:icon='["fas", "pause"]').text-secondary.btn-font
            b-btn(variant='primary' v-if='current.length > 0').mx-2
              //- 如果現在倒數數字長度大於0時，出現跳過按鈕
              font-awesome-icon(:icon='["fas", "step-forward"]' @click='finish(true)').text-secondary.btn-font
        b-col(cols='4')
          //- 待辦
          h1.font-current {{ current }}
          //- 開始時 要加入背景圖片判斷
          img(:src='require("../assets/img/tree.png")')

      //- router-view
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      // setInterval 還未開始時，先給一個 timer 值
      timer: 0
    }
  },
  computed: {
    // 將變數從  \store\index.js 拉過來 return this.$store.state.XXX
    status () {
      return this.$store.state.status
    },
    list () {
      return this.$store.state.list
    },
    current () {
      return this.$store.state.current
    },
    // 其他 function ------
    btnStartText () {
      let text = ''
      // 如果 this.current 長度為 0
      if (this.current.length === 0) {
        // 如果 list 長度為 0
        if (this.list.length === 0) {
          text = 'unknown task'
        } else {
          text = 'Start Pomodoro'
        }
      }
      return text
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      // 目前剩幾分
      const m = Math.floor(this.timeleft / 60)
      // 目前剩幾秒， % 取餘數
      const s = Math.floor(this.timeleft % 60)
      return `${m} : ${s}`
    }
  },
  methods: {
    // 點擊 > 開始倒數
    start () {
      //  先判斷 待辦清單list 內，有無資料
      if (this.list.length > 0) {
        // 開始時，將 list 的第一筆放入   // 之後想改成選擇的某一筆放入
        this.$store.commit('startTodo')
        // 開始時，將狀態改為 1 =倒數中
        this.$store.commit('changeStatus', 1)
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finish()
          }
        }, 1000)
      }
    },
    // 倒數結束時 或 待辦事項提前完成(跳過)
    finish () {
      clearInterval(this.timer)
      // 更改狀態為 0=停止
      this.$store.commit('changeStatus', 0)
      this.$store.commit('addFinish')

      // 結束時，播完成音效
      const audio = new Audio()
      audio.src = require('../assets/mp3/' + this.$store.state.sound)
      audio.play()

      // 結束時，如果待辦清單內還有資料，繼續重新開始
      if (this.list.length > 0) {
        this.start()
      }
    }
  }
}
</script>
