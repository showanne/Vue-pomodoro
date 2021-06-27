<template lang="pug">
  #list
    b-container.vh-100
      b-row
        b-col(cols='6').p-3
          //- h1.mb-2 待辦清單
          b-table(:items='list' :fields='listfields').text-secondary
            template(#cell(check)='data')
              input(type='checkbox' v-model='data.item.check')
            template(#cell(todo)='data')
              b-form-input(
                v-if='data.item.edit'
                v-model='data.item.todoEdit'
                trim
                :state='data.item.state'
                @dblclick='data.item.edit=true'
                @keydown.enter='changelist(data.index)'
                @keydown.esc='cancellist(data.index)'
              )
              //- 雙擊欄位開啟編輯模式 @dblclick='editlist(data.index)'
              span(v-else) {{ data.value }}
            template(#cell(edit)='data')
              //- 如果不是編輯模式 顯示
              span(v-if='!data.item.edit')
                b-btn(variant="primary" @click='editlist(data.index)').rounded-circle.px-1.py-0
                  font-awesome-icon(:icon='["fas", "pen"]').btn-font.text-secondary
                b-btn(variant="primary" @click='dellist(data.index)').rounded-circle.px-1.py-0.actionBtn
                  img(:src='require("../assets/img/ic_remove_circle_outline-A.png")')
              //- 如果是編輯模式 顯示
              span(v-else)
                b-btn(variant="primary" @click='changelist(data.index)').rounded-circle.px-1.py-0
                  font-awesome-icon(:icon='["fas", "check"]').btn-font
                b-btn(variant="primary" @click='cancellist(data.index)').rounded-circle.px-1.py-0
                  font-awesome-icon(:icon='["fas", "undo"]').btn-font
            template(#cell(action)='data')
              b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                img(:src='require("../assets/img/ic_keyboard_arrow_up-A.png")')
              b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                img(:src='require("../assets/img/ic_keyboard_arrow_down-A.png")')
              b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                img(:src='require("../assets/img/iconmonstr-log-out-10-A.png")')
        b-col(cols='6').p-3.text-right
          //- h1.mb-2.text-left 新增事項
          b-form(@submit.prevent="addData")
            b-form-group(invalid-feedback='請至少輸入 2 個字' :state='state')
              //- invalid-feedback='' 驗證訊息文字
              //- :state='' 驗證狀態判斷
              b-form-input(
                v-model='newitem'
                :state='state'
                trim
                placeholder="Task..."
                @keydown.enter='additem'
                ).taskInput
            b-btn(type='submit' variant="secondary" @click='additem').taskBtn Add task
            //- input(type='submit' label="Add task" variant="secondary" @click='additem').taskBtn
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      newitem: '',
      listfields: [
        { key: 'check', label: '勾選' },
        { key: 'todo', label: '待辦事項' },
        { key: 'date', label: '新增日期' },
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
        if (item.todoEdit.length < 2) {
          item.state = false
        } else {
          item.state = true
        }
        return item
      })
    }
  },
  methods: {
    // 將送出的待辦事項存資料庫
    async addData () {
      try {
        console.log(this.newitem)
        console.log(this.$store.mutations.addList)
        const { data } = await this.axios.post('http://localhost:3030/pomodoroData', this.$store.mutations.addList)
        console.log(data.message)
        if (data.success) {
          alert('Add task')
        } else {
          alert(data.message)
        }
      } catch (error) {
        console.log(error)
        // alert(error.response.data.message)
      }
    },
    // 新增待辦
    additem () {
      // 判斷有沒有輸入東西
      if (this.state) {
        // 呼叫 \store\index.js 內的 mutations 的 addList function 將 this.newitem 值帶入
        this.$store.commit('addList', this.newitem)
        // 清空輸入欄位
        // this.newitem = ''
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
