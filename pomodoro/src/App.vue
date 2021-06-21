<template lang="pug">
  #app.bgPrimary.textSecondary
    b-navbar(toggable='lg' type='dark').h-nav.bgPrimary.textSecondary.align-items-end
      b-container
        //- b-navbar-brand(to='/') 番茄鐘 Pomodoro Logo
        b-navbar-toggle(target='navbar-collapse')
        b-collapse#navbar-collapse(is-nav)
          b-navbar-nav.ml-auto
            b-nav-item(to='/').nav-img
              //- | 倒數頁 = 首頁
              img(:src='require("../src/assets/img/ic_av_timer-A.png")').w-100
            b-nav-item(to='/list').nav-img
              //- | 待辦清單 icon
              img(:src='require("../src/assets/img/ic_playlist_add_check-A.png")').w-100
            b-nav-item(to='/analytics').nav-img
              //- | 分析 icon
              img(:src='require("../src/assets/img/single-folded-content-A.png")').w-100
            b-nav-item(to='/settings').nav-img
              | 設定 icon
              //- img(:src='require("../src/assets/img/single-folded-content-A.png")').w-100
    router-view
</template>
