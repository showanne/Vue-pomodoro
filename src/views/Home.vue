<template lang="pug">
  #home
    .bellcontrol
      img(:src='require("../assets/img/bell.png")').align-middle
      .checkBell.d-inline-block.align-middle
          span
            input(type='checkbox' name='checkBell' checked)
    b-container.vh-100.py-9
      b-row
        b-col(cols='12' lg='8').d-flex.justify-content-center.align-items-center.flex-column
          b-btn(variant='secondary' to='/home/pomodoro').my-3 {{ btnStartText }}
          b-btn(variant='outline-secondary' to='/list').my-3 Choose Task
        b-col(cols='12' lg='4').d-flex.justify-content-center.align-items-center
          img(:src='require("../assets/img/deco-market.png")').img-deco
      //- b-row
      //-   b-col(cols='8').d-flex.justify-content-center.align-items-center.flex-column
      //-     //- h1 倒計時文字
      //-     h1.my-5.align-middle.font-countdown {{ timeText }}
      //-     .button.my-3
      //-       b-btn(variant='primary' v-if='status !== 1' @click='start').mx-2
      //-         //- 如果不是在倒數狀態時，出現播放按鈕
      //-         font-awesome-icon(:icon='["fas", "play"]').text-secondary.btn-font
      //-       b-btn(variant='primary' v-if='status === 1' @click='pause').mx-2
      //-         //- 如果是在倒數狀態時，出現暫停按鈕
      //-         font-awesome-icon(:icon='["fas", "pause"]' ).text-secondary.btn-font
      //-       b-btn(variant='primary' v-if='current.length > 0' @click='finish(true)').mx-2
      //-         //- 如果現在倒數數字長度大於0時，出現跳過按鈕
      //-         font-awesome-icon(:icon='["fas", "step-forward"]').text-secondary.btn-font
      //-   b-col(cols='4')
      //-     //- 待辦
      //-     h1.font-current {{ current }}
      //-     //- 開始時 要加入背景圖片判斷
      //-     img(:src='require("../assets/img/tree.png")')
      router-view
</template>

<script>
export default {
  name: 'Home',
  computed: {
    // 將變數從  \store\index.js 拉過來 return this.$store.state.XXX
    // status () {
    //   return this.$store.state.status
    // },
    list () {
      return this.$store.state.list
    },
    current () {
      return this.$store.state.current
    },
    // 其他 function ------
    btnStartText () {
      // console.log(this.current.length)
      let text
      // 如果 this.current 長度為 0
      if (this.current.length === 0) {
        // 如果 list 長度為 0
        if (this.list.length === 0) {
          text = 'unknown task'
        } else {
          text = 'Start Pomodoro'
        }
      } else if (this.current === 'unknown task') {
        text = 'unknown task'
      }
      return text
    }
  }
}
</script>
