<template lang="pug">
  #list
    b-container.min-vh-100
      b-row
        b-col(cols='12').p-3
          h1.font-analytics.mb-2 Todo List
      b-row.flex-column-reverse.flex-lg-row
        b-col(cols='12' lg='7').p-3
          div(v-if='this.list.length===0').mt-3.text-center
                      p.text-mute.font-listnone.my-5 Let’s start something fun
                      img(:src='require("../assets/img/deco-fun.png")').img-deco
          b-tabs( v-else align='right'
                  active-nav-item-class='font-weight-bold text-capitalize text-secondary bg-transparent'
                  active-tab-class='text-secondary bg-transparent'
                  content-class='mt-5' pills)
                  //- active-nav-item-class='' 上方分頁標籤樣式
                  //- active-tab-class='' 內容區樣式
                  //- content-class='' 分頁標籤與內容區的間距
                  b-tab(title='Todo')
                    b-table-simple(table-variant="primary").bg-transparent.text-secondary
                      //- 還沒做的待辦事項欄位為 task，todo 被用掉了
                      tr(v-for='(Litem, idx) in task' :key='idx')
                        td
                          input(type='radio' v-model='Litem.check' @click='complete(idx)')
                        td.w-50
                          b-form-input(
                            v-if='Litem.edit'
                            v-model='Litem.todoEdit'
                            trim
                            :state='Litem.state'
                            @dblclick='Litem.edit=true'
                            @keydown.enter='changelist(idx)'
                            @keydown.esc='cancellist(idx)'
                          )
                          span(v-else) {{ Litem.todo }}
                          br
                          span {{ timesDotCalc(Litem.times) }}
                        //- td {{ DateCalc(Litem.date) }}
                        //- FIXED: 重開網頁日期會都跳成今天，不會被儲存
                        td {{ Litem.deadline }}
                        td.w-25.text-center
                          //- --▽-- todo 編輯 --▽--
                          //- 如果不是編輯模式 顯示
                          span(v-if='!Litem.edit')
                            //- 編輯
                            b-btn(variant="primary" @click='editlist(idx)').rounded-circle.px-1.py-0
                              font-awesome-icon(:icon='["fas", "pen"]').btn-font.text-secondary
                            //- 移除
                            b-btn(variant="primary" @click='dellist(idx)').rounded-circle.px-1.py-0.actionBtn
                              img(:src='require("../assets/img/action-remove.png")')
                          //- 如果是編輯模式 顯示
                          span(v-else)
                            b-btn(variant="primary" @click='changelist(idx)').rounded-circle.px-1.py-0
                              font-awesome-icon(:icon='["fas", "check"]').btn-font
                            b-btn(variant="primary" @click='cancellist(idx)').rounded-circle.px-1.py-0
                              font-awesome-icon(:icon='["fas", "undo"]').btn-font
                          //- --△-- todo 編輯 --△--
                          //- 上移
                          //- b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                          //-   img(:src='require("../assets/img/action-arrow-up.png")')
                          //- 下移
                          //- b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                          //-   img(:src='require("../assets/img/action-arrow-down.png")')
                          //- 移至番茄鐘倒數
                          b-btn(variant="primary" @click='chooselist(idx)' to='/home/pomodoro').rounded-circle.px-1.py-0.actionBtn
                            img(:src='require("../assets/img/action-log-out.png")')
                  b-tab(title='Done')
                    //- h1.my-2 Done
                    b-table-simple(table-variant="primary").bg-transparent.text-secondary
                      tr(v-for='(item, idx) in done' :key='idx')
                        td.w-75 {{ item.todo }}
                          br
                          span {{ timesDotCalc(item.times) }}
                        td.w-25 {{ DateCalc(item.finishedDate) }}
        b-col(cols='12' lg='5').p-3.text-right
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
      listfields: [
        { key: 'check', label: '勾選' },
        { key: 'times', label: '' },
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
      // console.log(this.newitem.todo.length)
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
    },
    task () {
      // 針對 list 目前的狀態，去產生新的列表迴圈
      // .filter  =  for of
      return this.list.filter(function (item) {
        return item.check === false
      })
    },
    done () {
      // 針對 list 目前的狀態，去產生新的列表迴圈
      // .filter  =  for of
      return this.list.filter(function (item) {
        return item.check === true
      })
    }
  },
  methods: {
    // 新增待辦
    additem () {
      // console.log(this.state)
      // console.log(this.newitem)
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
    chooselist (index) {
      this.$store.commit('chooselist', index)
    },
    complete (index) {
      this.$store.commit('complete', index)
    }

    // delfinish (index) {
    // console.log(this)
    // console.log(index)
    // this.$store.commit('delFinish', index)
    // }
  }
}
</script>
