<template lang="pug">
  #settings.vh-100
    b-container.pt-5
      b-row
        b-col(cols='12')
          h2 鈴聲設定
          //- @row-click BS自訂的事件，下在 b-table 上，代表點即每一列時，修改 Vuex 的值
          b-table( hover
                   :items='items'
                   :fields='fields'
                   @row-clicked='select'
                  ).textSecondary
            //- template 自訂表格內容   #cell 欄位
            template(#cell(select)='data')
              font-awesome-icon(:icon='["fas", "check"]' v-if='sound === data.item.src')
            template(#cell(src)='data')
              audio(controls :src='require("../assets/mp3/"+data.value)')
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      items: [
        { name: '正常響鈴', src: 'alarm.mp3' },
        { name: '尖叫響鈴', src: 'yay.mp3' }
      ],
      fields: [
        { key: 'select', label: '選擇' },
        { key: 'name', label: '名稱' },
        { key: 'src', label: '試聽' }
      ]
    }
  },
  computed: {
    sound () {
      return this.$store.state.sound
      // this (這個東西)  $store (Vuex 用的)
      // state.sound (對應\store\index.js 內的 state: {sound: ' '  } )
    }
  },
  methods: {
    select (item) {
      // 呼叫 \store\index.js 內的 mutations 的 function
      // item.src 將值帶入
      this.$store.commit('selectSound', item.src)
      // 錯誤寫法 this.$store.state.sound = item.src
    }
  }
}
</script>
