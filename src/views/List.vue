<template lang="pug">
  #list
    b-container.min-vh-100
      b-row.flex-column-reverse.flex-lg-row
        b-col(cols='12' lg='6').p-3
          //- h1.mb-2 待辦清單
          h1.mb-2 Todo
          b-table(:items='list' :fields='listfields').text-secondary
            template(#cell(check)='data')
              input(type='checkbox' v-model='data.item.check')
              //- .checkTodo
              //-   span
              //-     input(type='radio' name='checkTodo')
                  //- input(type='radio' name='radio' checked)
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
                  img(:src='require("../assets/img/action-remove.png")')
              //- 如果是編輯模式 顯示
              span(v-else)
                b-btn(variant="primary" @click='changelist(data.index)').rounded-circle.px-1.py-0
                  font-awesome-icon(:icon='["fas", "check"]').btn-font
                b-btn(variant="primary" @click='cancellist(data.index)').rounded-circle.px-1.py-0
                  font-awesome-icon(:icon='["fas", "undo"]').btn-font
            template(#cell(action)='data')
              b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                img(:src='require("../assets/img/action-arrow-up.png")')
              b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                img(:src='require("../assets/img/action-arrow-down.png")')
              b-btn(variant="primary" @click='' to='/home/pomodoro').rounded-circle.px-1.py-0.actionBtn
                img(:src='require("../assets/img/action-log-out.png")')
          h1.my-2 Done
          b-table-simple(table-variant="primary").bg-transparent.text-secondary
            thead
              tr
                th 已完成待辦事項
                th 完成日期
                th 操作
            tbody
              tr(v-for='(item, idx) in finished' :key='idx')
                td {{ item.done }}
                td {{ item.finishedDate }}
                td
                  b-btn(variant="primary" @click='delfinish(idx)').rounded-circle.px-1.py-0.actionBtn
                    img(:src='require("../assets/img/action-remove.png")')
        b-col(cols='12' lg='6').p-3.text-right
          //- h1.mb-2.text-left 新增事項
          b-form(@submit.prevent="additem")
            //- b-form
            b-form-group(invalid-feedback='請至少輸入 2 個字' :state='state')
              //- invalid-feedback='' 驗證訊息文字
              //- :state='' 驗證狀態判斷
              b-form-input(
                v-model='newitem.todo'
                :state='state'
                trim
                placeholder="Task..."
                ).taskInput
                //- @keydown.enter='additem'
              //- div
              //-   label(for='datepicker-valid') 期限
            b-form-datepicker(
              v-model='newitem.deadline'
              label-no-date-selected='請選擇一個日期'
              label-help=''
              placeholder="YYYY-MM-DD"
              :date-format-options='{ year: \'numeric\', month: \'numeric\', day: \'numeric\' }'
              menu-class="mt-1"
              class="w-Datepicker d-inline-flex"
              ).bg-transparent.taskDatepicker
              //- today-button
              //- label-today-button='今天'
              //- reset-button
              //- label-reset-button='重設'
              //- close-button
              //- label-close-button='關閉'
            b-btn(type='submit' variant="secondary").taskBtn Add task
            //- input(type='submit' label="Add task" variant="secondary" @click='additem').taskBtn
          div.mt-3.text-center
            p.text-mute.font-listnone.my-5 Let’s start something fun
            img(:src='require("../assets/img/deco-fun.png")').img-deco
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      newitem: {
        todo: '',
        deadline: ''
      },
      deadline: '',
      listfields: [
        { key: 'check', label: '勾選' },
        { key: 'todo', label: '待辦事項' },
        { key: 'date', label: '新增日期' },
        { key: 'deadline', label: '期限' },
        { key: 'edit', label: '編輯' },
        { key: 'action', label: '操作' }
      ]
    }
  },
  computed: {
    // 輸入文字長度 判斷
    state () {
      // console.log(this.newitem)
      // console.log(this.newitem.length)
      // console.log(this.newitem.todo)
      console.log(this.newitem.todo.length)
      if (this.newitem.todo.length === 0) {
        return null
        // 什麼都沒有!
      } else if (this.newitem.todo.length < 2) {
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
    },
    finished () {
      return this.$store.state.finished
    }
  },
  methods: {
    // 新增待辦
    additem () {
      // console.log(this.state)
      console.log(this.newitem)
      // 判斷有沒有輸入東西
      if (this.state) {
        // 呼叫 \store\index.js 內的 mutations 的 addList function 將 this.newitem 值帶入
        this.$store.commit('addList', this.newitem)
        // 清空輸入欄位
        this.newitem.todo = ''
        this.newitem.deadline = ''
      } else {
        // 沒有輸入東西就送出會跳警示訊息
        this.$swal({
          icon: 'error',
          title: '請至少輸入 2 個字'
        })
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
    },
    delfinish (index) {
      // console.log(this)
      // console.log(index)
      this.$store.commit('delFinish', index)
    }
  }
}
</script>
