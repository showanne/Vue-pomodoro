<template lang="pug">
  #home
    .bellcontrol.d-none.d-sm-inline-block
      img(:src='require("../assets/img/bell.png")').align-middle
      .checkBell.d-inline-block.align-middle
          span
            input(type='checkbox' name='checkBell' v-model='soundOn' @click='OnOff(soundOn)')
    b-container.vh-100.py-5
      //- b-row
      //-   b-col(cols='12' lg='8').d-flex.justify-content-center
      //-     b-tabs(
      //-           active-nav-item-class='font-weight-bold text-capitalize text-secondary bg-transparent'
      //-           active-tab-class='text-secondary bg-transparent'
      //-           content-class='mt-5' pills)
      //-           //- active-nav-item-class='' 上方分頁標籤樣式
      //-           //- active-tab-class='' 內容區樣式
      //-           //- content-class='' 分頁標籤與內容區的間距
      //-           //- mt-5 -> 3rem；設計稿是 ?rem = ?px
      //- TODO: 目前不區分休息與正在做的分頁切換
      //-           b-tab(title='Pomodoro')
      //-           b-tab(title='Short Break')
      b-row
        b-col(cols='12' lg='8').d-flex.justify-content-center.align-items-center.flex-column
          b-btn(variant='secondary' to='/home/pomodoro').my-3 {{ btnStartText }}
          b-btn(variant='outline-secondary' to='/list').my-3 Choose Task
        b-col(cols='12' lg='4').d-flex.justify-content-center.align-items-center
          img(:src='require("../assets/img/deco-market.png")').img-deco
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
    soundOn () {
      return this.$store.state.soundOn
    },
    // 其他 function ------
    btnStartText () {
      // console.log(this.current.length)
      // let text
      // 如果 this.current 長度為 0
      // if (this.current.length === 0) {
      //   // 如果 list 長度為 0
      //   if (this.list.length === 0) {
      //     text = 'unknown task'
      //   } else {
      //     text = 'Start Pomodoro'
      //   }
      // } else if (this.current === 'unknown task') {
      //   text = 'unknown task'
      // }
      return 'Start Pomodoro'
    }
  },
  methods: {
    OnOff (soundOn) {
      if (!soundOn) {
        // alert('play')
        this.$store.commit('SoundOnOff', true)
      } else {
        // alert('pause')
        this.$store.commit('SoundOnOff', false)
      }
    }
  }
}
</script>
