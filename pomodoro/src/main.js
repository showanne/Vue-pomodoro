import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引用 自行變動部分 BS 變數後的檔案，暫時無法引用因為 stylus 與 scss 格式不同會報錯
// import './style/_variables.scss'
// 引用 自己的 style
import './style/all.css'
import './style/style.styl'

// FontAwesome 必要引用
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// FontAwesome 根據 icon 的種類引用
import { faPen, faCheck, faUndo, faTrash, faPlay, faPause, faStepForward } from '@fortawesome/free-solid-svg-icons'
// 引用
library.add(faPen, faCheck, faUndo, faTrash, faPlay, faPause, faStepForward)

// FontAwesome 註冊元件
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
