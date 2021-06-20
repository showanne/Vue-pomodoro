<template lang="pug">
  #list.vh-100
    b-container.pt-5
      b-row
        b-col(cols='6').p-3
          h1.mb-2 新增事項
          b-form-group(invalid-feedback='請至少輸入 2 個字' :state='state')
            //- invalid-feedback='' 驗證訊息文字
            //- :state='' 驗證狀態判斷
            b-form-input(
              v-model='newitem'
              :state='state'
              trim
              placeholder="Enter your todo"
              @keydown.enter='additem'
              )
          b-btn(@click='additem').bgSecondary.textPrimary 新增 icon
        b-col(cols='6').p-3
          h1.mb-2 待辦清單
          b-table(:items='list' :fields='listfields').textSecondary
            template(#cell(name)='data')
              b-form-input(
                v-if='data.item.edit'
                v-model='data.item.model'
                trim
                :state='data.item.state'
                @keydown.enter='changelist(data.index)'
                @keydown.esc='cancellist(data.index)'
              )
              span(v-else) {{ data.value }}
            template(#cell(edit)='data')
              //- 如果不是編輯模式 顯示
              span(v-if='!data.item.edit')
                b-btn(@click='editlist(data.index)').bgSecondary.textPrimary
                  font-awesome-icon(:icon='["fas", "pen"]').h6
                b-btn(@click='dellist(data.index)').bgSecondary-dark.textPrimary
                  font-awesome-icon(:icon='["fas", "trash"]').h6
              //- 如果是編輯模式 顯示
              span(v-else)
                b-btn(@click='changelist(data.index)').bgSecondary.textPrimary
                  font-awesome-icon(:icon='["fas", "check"]').h6
                b-btn(@click='cancellist(data.index)').bgSecondary.textPrimary
                  font-awesome-icon(:icon='["fas", "undo"]').h6
            template(#cell(action)='data')
              b-btn(@click='').bgSecondary.textPrimary 上移 icon
              b-btn(@click='').bgSecondary.textPrimary 下移 icon
              b-btn(@click='').bgSecondary.textPrimary 左移 icon
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      newitem: '',
      listfields: [
        { key: 'name', label: '名稱' },
        { key: 'time', label: '新增時間' },
        { key: 'edit', label: '編輯' },
        { key: 'action', label: '操作' }

      ]
    }
  },
  computed: {
    // 輸入文字長度 判斷
    state () {
      if (this.newitem.length === 0) {
        return null
        // 什麼都沒有!
      } else if (this.newitem.length < 2) {
        return false
        // 驗證訊息樣式 紅色 ×
      } else {
        return true
        // 驗證訊息樣式 綠色 √
      }
    },
    // 新增清單顯示
    list () {
      return this.$store.getters.list.map(item => {
        if (item.model.length < 2) {
          item.state = false
        } else {
          item.state = true
        }
        return item
      })
    }
  },
  methods: {
    // 新增待辦
    additem () {
      // 判斷有沒有輸入東西
      if (this.state) {
        // 呼叫 \store\index.js 內的 mutations 的 addList function 將 this.newitem 值帶入
        this.$store.commit('addList', this.newitem)
        // 清空輸入欄位
        this.newitem = ''
      }
    },
    // 編輯欄位
    editlist (index) {
      // 呼叫 \store\index.js 內的 mutations 的 editList function 將 index 值帶入
      this.$store.commit('editList', index)
    },
    dellist (index) {
      this.$store.commit('delList', index)
    },
    changelist (index) {
      if (this.list[index].state) {
        this.$store.commit('changeList', index)
      }
    },
    cancellist (index) {
      this.$store.commit('canceLlist', index)
    }
  }
}
</script>
