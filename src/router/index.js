import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '番茄鐘'
    }
    // children: [
    //   {
    //     path: '/home/pomodoro',
    //     name: 'HomePomodoro',
    //     component: () => import(/* webpackChunkName: "home-Pomodoro" */ '../views/HomePomodoro.vue')
    //   }
    // ]
  },
  {
    path: '/home/pomodoro',
    name: 'HomePomodoro',
    component: () => import(/* webpackChunkName: "home-Pomodoro" */ '../views/HomePomodoro.vue'),
    meta: {
      title: '番茄鐘 | 倒數'
    }
  },
  // {
  //   path: '/home/shortbreak',
  //   name: 'HomeShortBreak',
  //   component: () => import(/* webpackChunkName: "home-ShortBreak" */ '../views/HomeShortBreak.vue'),
  //   meta: {
  //     title: '番茄鐘 | 休息'
  //   }
  // },
  //   每開一個新分頁要設定
  // {
  //   path: '/settings(小寫)',  → 當網頁路徑 為 '/    ' 時
  //   name: 'Settings(大寫)',   → 網頁名稱叫 '     '
  //   component: () => import(/* webpackChunkName: "settings(小寫)" */ '../views/Settings(大寫). vue'),
  //  → lazyload 當網頁展入時，還沒點到此頁，不會先載入
  //   meta: {
  //     title: '設定'     → 網頁標籤名稱
  //   }
  // }
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
    meta: {
      title: '番茄鐘 | 待辦清單'
    }
    // children: [
    //   {
    //     path: '/',
    //     name: 'ListTodo',
    //     component: () => import(/* webpackChunkName: "list-Todo" */ '../views/ListTodo.vue'),
    //     meta: {
    //       title: '番茄鐘 | 待辦清單'
    //     }
    //   },
    //   {
    //     path: 'done',
    //     name: 'ListDone',
    //     component: () => import(/* webpackChunkName: "list-Done" */ '../views/ListDone.vue'),
    //     meta: {
    //       title: '番茄鐘 | 待辦清單'
    //     }
    //   }
    // ]
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import(/* webpackChunkName: "analytics" */ '../views/Analytics.vue'),
    meta: {
      title: '番茄鐘 | 分析'
    }
    // children: [
    //   {
    //     path: '/',
    //     name: 'AnalyticsToday',
    //     component: () => import(/* webpackChunkName: "analytics-Today" */ '../views/AnalyticsToday.vue'),
    //     meta: {
    //       title: '番茄鐘 | 分析'
    //     }
    //   },
    //   {
    //     path: 'weekly',
    //     name: 'AnalyticsWeekly',
    //     component: () => import(/* webpackChunkName: "analytics-Weekly" */ '../views/AnalyticsWeekly.vue'),
    //     meta: {
    //       title: '番茄鐘 | 分析'
    //     }
    //   }
    // ]
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      title: '番茄鐘 | 設定'
    }
  }
]

const router = new VueRouter({
  routes
})

// 動態設定網頁 title
// 1.設定完 meta:title
// 2.router.afterEach 進到每一頁做的事情
// 3.to (進到哪一頁), from (從哪裡來)
router.afterEach((to, from) => {
  // 進到網頁後，將網頁的 title 變成現在這頁 meta 的 title
  document.title = to.meta.title
})

export default router
