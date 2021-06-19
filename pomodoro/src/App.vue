<template lang="pug">
  #app
    b-navbar(toggable='lg' type='dark' variant='dark')
      b-container
        b-navbar-brand(to='/') 番茄鐘 Pomodoro Logo
        b-navbar-toggle(target='navbar-collapse')
        b-collapse#navbar-collapse(is-nav)
          b-navbar-nav.ml-auto
            b-nav-item(to='/list') 待辦清單 icon
            b-nav-item(to='/analytics') 分析 icon
            b-nav-item(to='/settings') 設定 icon
    router-view
</template>
