<template lang="pug">
  #list
    b-container
      b-row
        b-col(cols='6').p-3
          b-form-group(label='新增事項' invalid-feedback='請至少輸入 2 個字' :state='state').h1
            //- invalid-feedback='' 驗證訊息文字
            //- :state='' 驗證狀態判斷
            b-form-input(v-model='newitem' :state='state' trim @keydown.enter='additem')
          b-btn(variant='primary' @click='additem') 新增
        b-col(cols='6').p-3
          h1 待辦清單
          b-table(:items='list')
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      newitem: '',
      listfields: []
    }
  },
  computed: {
    // 輸入文字長度 判斷
    state () {
      if (this.newitem.length === 0) {
        return null
        // 什麼都沒有
      } else if (this.newitem.length < 2) {
        return false
        // 驗證訊息樣式 紅色 !
      } else {
        return true
        // 驗證訊息樣式 綠色 √
      }
    },
    // 新增清單顯示
    list () {
      return this.$store.getters.list
    }
  },
  methods: {
    additem () {
      // 呼叫 \store\index.js 內的 mutations 的 addList function 將 this.newitem 值帶入
      this.$store.commit('addList', this.newitem)
      // 清空輸入欄位
      this.newitem = ''
    }
  }
}
</script>
