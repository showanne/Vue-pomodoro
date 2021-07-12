import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 引用 check 的 style
import './style/InputStyling.css'
// 引用 自行變動部分 BS 變數後的檔案'./style/_variables.scss'，不再此引用變數檔，改引用已編譯好的 css
import './style/all.css'
// 引用 自己的 style
import './style/style.styl'

// 引用 axios 套件
import axios from 'axios'
import VueAxios from 'vue-axios'

// 引用 Charts 套件 ApexCharts
import VueApexCharts from 'vue-apexcharts'

// FontAwesome 必要引用
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// FontAwesome 根據 icon 的種類引用
import { faPen, faCheck, faUndo, faTrash, faPlay, faPause, faStepForward, faCog, faStop, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

// 引用 vue-sweetalert2
import VueSweetalert2 from 'vue-sweetalert2'
// 引用 vue-sweetalert2 styles
import 'sweetalert2/dist/sweetalert2.min.css'

// 全域引用 mixin，這樣各分頁要是用變數就可以直接使用
import mixin from './mixin.js'
// ----- ESLint 規定 import 放上方 -----

// FontAwesome 根據 icon 的種類引用
library.add(faPen, faCheck, faUndo, faTrash, faPlay, faPause, faStepForward, faCog, faStop, faPlayCircle)

// Axios 註冊元件
Vue.use(VueAxios, axios)

// ApexCharts 註冊元件，可供本專案各處使用(全域註冊)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

// FontAwesome 註冊元件，可供本專案各處使用(全域註冊)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// sweetalert2 註冊元件
Vue.use(VueSweetalert2)

// 全域引用 mixin，這樣各分頁要是要用變數就可以直接使用
Vue.mixin(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
