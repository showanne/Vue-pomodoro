<template lang="pug">
  #homePomodoro
    b-container.vh-100
      b-row.flex-column-reverse.flex-md-row
        b-col(cols='12' md='8').d-flex.justify-content-center.align-items-center.flex-column
          //- h1 倒計時文字
          h1.my-5.align-middle.font-countdown {{ timeText }}
          .button.my-3
            b-btn(variant='primary' v-if='status !== 1' @click='start').mx-2
              //- 如果不是在倒數狀態時，出現播放按鈕
              font-awesome-icon(:icon='["fas", "play"]').text-secondary.btn-font
            b-btn(variant='primary' v-if='status === 1' @click='pause').mx-2
              //- 如果是在倒數狀態時，出現暫停按鈕
              font-awesome-icon(:icon='["fas", "pause"]' ).text-secondary.btn-font
            b-btn(variant='primary' v-if='current.length > 0' @click='finish(true)').mx-2
              //- 如果現在倒數數字長度大於0時，出現跳過按鈕
              //- font-awesome-icon(:icon='["fas", "step-forward"]').text-secondary.btn-font
              //- br
              font-awesome-icon(:icon='["fas", "stop"]').text-secondary.btn-font
              //- br
              //- font-awesome-icon(:icon='["fas", "play-circle"]').text-secondary.btn-font
        b-col(cols='12' md='4')
          //- 待辦
          h1.font-current {{ current }}
          //- FIXED:手機板會爆掉 待調整
          img(:src='require("../assets/img/" + imgCountdown)').img-deco.d-none.d-md-inline-block
</template>

<script>
export default {
  name: 'HomePomodoro',
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
    imgCountdown () {
      return this.$store.state.imgCountdown
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    isBreak () {
      return this.$store.state.isBreak
    },
    // 其他 function ------
    timeText () {
      // 目前剩幾分
      const m = Math.floor(this.timeleft / 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })
      // 目前剩幾秒， % 取餘數
      const s = Math.floor(this.timeleft % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 })

      return `${m} : ${s}`
    }
  },
  methods: {
    // 點擊 > 開始倒數
    start () {
      // 先判斷 (&& 而且)
      // 1. 現在狀態不是 2 =暫停
      // 2. 待辦清單list 內，有資料 (length > 0)
      if (this.status !== 2 && this.list.length > 0) {
        // 開始時，將 list 的第一筆放入   // 之後想改成選擇的某一筆放入
        this.$store.commit('startTodo')
      }
      // 如果 this.current 長度 > 0 (暫停的中途 還有待辦事項時)
      if (this.current.length > 0) {
        // 開始時，將狀態改為 1 =倒數中
        this.$store.commit('changeStatus', 1)
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finish(false)
          }
        }, 1000)
      }
    },
    // 倒數結束時 或 待辦事項提前完成(跳過)
    // 用 true 或 false 判斷是按按鈕跳過的結束 (true) 還是倒數完成的結束 (false)
    finish (skip) {
      // 將倒數狀態清除
      clearInterval(this.timer)
      // 更改狀態為 0=停止
      this.$store.commit('changeStatus', 0)
      this.$store.commit('addFinish')
      // 同時要做 Pomodoro 次數計算
      this.$store.commit('timesCalc')

      // 不是休息時間的結束會跳出 alert，略過的也算完成
      // 當清單內沒有其他待辦時最後一個待辦事項完成也會跳 alert
      if (this.isBreak || this.list.length === 0) {
        this.$swal({
          icon: 'success',
          title: '恭喜你吃完一顆番茄'
        })
      }

      // 如果不是按按鈕跳過的結束
      if (!skip) {
        const audio = new Audio()
        audio.src = require('../assets/mp3/' + this.$store.state.sound)
        // 如果鈴聲開關是開
        if (this.$store.state.soundOn) {
          // 結束時，播完成音效
          audio.play()
        } else {
          // 結束時，不播完成音效
          audio.pause()
        }
      }

      // 結束時，如果待辦清單內還有資料，繼續重新開始
      if (this.list.length > 0) {
        this.start()
      }
    },
    pause () {
      // 將倒數狀態清除
      clearInterval(this.timer)
      // 暫停時，將狀態改為 2=暫停
      this.$store.commit('changeStatus', 2)
    }
  }
  // 通常若有使用到 Interval 之類的，destroyed 可以在元件被毀掉之前 (換頁時 view-router 內容會被清掉)，把 setInterval 停下來(保存當下倒數)
  // destroyed () {
  //   // 將倒數狀態清除 在此處等同暫停
  //   clearInterval(this.timer)
  // }
}
</script>
