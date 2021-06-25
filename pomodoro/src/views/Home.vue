<template lang="pug">
  #home
    b-container.vh-100
      b-row
        b-col(cols='8').d-flex.justify-content-center.align-items-center.flex-column
          //- h1 到計時文字
          h1.my-5.align-middle {{ timeText }}
          b-btn.my-3 {{ currentText }}
          br
          b-btn.my-3 Choose Task
          .button.my-3
            b-btn(v-if='status !== 1').mx-2
              //- 如果不是在倒數狀態時，出現播放按鈕
              font-awesome-icon(:icon='["fas", "play"]').btn-font
            b-btn(v-if='status === 1').mx-2
              //- 如果是在倒數狀態時，出現暫停按鈕
              font-awesome-icon(:icon='["fas", "pause"]').btn-font
            b-btn(v-if='current.length > 0').mx-2
              //- 如果現在倒數數字長度大於0時，出現跳過按鈕
              font-awesome-icon(:icon='["fas", "step-forward"]').btn-font
        b-col(cols='4')
          h1 待辦
</template>

<script>
export default {
  name: 'Home',
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
    currentText () {
      let text = this.$store.state.current
      // 如果 text 長度為 0
      if (text.length === 0) {
        //  如果 list 長度為 0
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
  }
}
</script>
