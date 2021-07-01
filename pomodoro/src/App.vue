<template lang="pug">
  #app.bg-primary.text-secondary
    b-navbar(toggable='lg' type='primary' variants='secondary').h-nav.align-items-end
      b-container
        //- b-navbar-brand(to='/') 番茄鐘 Pomodoro Logo
        b-navbar-toggle(target='navbar-collapse')
        b-collapse#navbar-collapse(is-nav)
          b-navbar-nav.ml-auto
            b-nav-item(to='/').nav-img
              //- | 倒數頁 = 首頁
              img(:src='require("../src/assets/img/navbar-timer2.png")').w-100
            b-nav-item(to='/list').nav-img
              //- | 待辦清單 icon
              img(:src='require("../src/assets/img/navbar-checklist2.png")').w-100
            b-nav-item(to='/analytics').nav-img
              //- | 分析 icon
              img(:src='require("../src/assets/img/navbar-content.png")').w-100
            b-nav-item(to='/settings').nav-img
              font-awesome-icon(:icon='["fas", "cog"]').btn-font.text-secondary
    //- 要注意 使用 view-router 時，換頁內容會被清掉，所以在外層包 keep-alive 讓 router-view 繼續作用
    keep-alive
      router-view
</template>
