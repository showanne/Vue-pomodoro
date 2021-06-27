<template lang="pug">
  #analytics
    b-container.vh-100
        b-row
          b-col(cols='12')
            b-card(bg-variant="primary" text-variant="secondary" title='Card Title' no-body)
              b-card-header(header-tag='nav')
                b-row
                  b-col(cols='6').d-flex.flex-nowrap
                    h1.mr-auto.font-analytics  analytics
                    b-nav(card-header tabs).align-items-end
                      //-  <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item>
                      b-nav-item(to='/analytics/' role="tab" active).p-2 Today
                      b-nav-item(to='/analytics/weekly' role="tab").p-2 Weekly
              b-card-body
                  router-view
          b-col(cols='12')
            b-tabs(
              active-nav-item-class='font-weight-bold text-capitalize text-secondary bg-transparent'
              active-tab-class='text-secondary bg-transparent'
              content-class='mt-5' pills)
              //- active-nav-item-class='' 上方分頁標籤樣式
              //- active-tab-class='' 內容區樣式
              //- content-class='' 分頁標籤與內容區的間距
              //- mt-5 -> 3rem；設計稿是3.5rem = 57px
              b-tab(title='analytics' disabled).mr-auto.font-analytics
              b-tab(title='Today')
                | I'm Today
              b-tab(title='Weekly')
                | I'm Weekly
</template>
