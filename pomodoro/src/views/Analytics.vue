<template lang="pug">
  #analytics.vh-100
    b-container.pt-5
        b-row
          b-col(cols='6')
            h1.textSecondary.font-analytics analytics
            h5 today
            h5 weekly
          b-col(cols='6') 表
          b-col(cols='12')
            b-btn(@click='').bgNone.bdNone.rounded-circle.px-1.py-0.actionBtn
              img(:src='require("../assets/img/ic_keyboard_arrow_up-A.png")')
            b-btn(@click='').bgNone.bdNone.rounded-circle.px-1.py-0.actionBtn
              img(:src='require("../assets/img/ic_keyboard_arrow_down-A.png")')
</template>
