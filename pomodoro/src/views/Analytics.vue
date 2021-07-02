<template lang="pug">
  #analytics
    b-container.vh-100
        b-row
          //- b-col(cols='12')
          //-   b-card(bg-variant="primary" text-variant="secondary" title='Card Title' no-body)
          //-     b-card-header(header-tag='nav')
          //-       b-row
          //-         b-col(cols='6').d-flex.flex-nowrap
          //-           h1.mr-auto.font-analytics  analytics
          //-           b-nav(card-header tabs).align-items-end
          //-             //-  <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item>
          //-             b-nav-item(to='/analytics/' role="tab" active).p-2 Today
          //-             b-nav-item(to='/analytics/weekly' role="tab").p-2 Weekly
          //-     b-card-body
          //-         router-view
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
                //- | AnalyticsToday
                b-row
                  b-col(cols='12' lg='6')
                    b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                      img(:src='require("../assets/img/action-arrow-left.png")')
                    | 2021-06-23
                    b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                      img(:src='require("../assets/img/action-arrow-right.png")')
                  b-col(cols='12' lg='6') table
              b-tab(title='Weekly')
                //- | AnalyticsWeekly
                b-row
                  b-col(cols='12' lg='6')
                    b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                      img(:src='require("../assets/img/action-arrow-left.png")')
                    | 2021-06-23~2021/07/23
                    b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                      img(:src='require("../assets/img/action-arrow-right.png")')
                  b-col(cols='12' lg='6')
                    #chart
                      apexchart(type='bar' width='550' :options='chartOptions' :series='series')
</template>

<script>
export default {
  name: 'AnalyticsWeekly',
  data () {
    return {
      series: [
        {
          name: 'WeeklyChart',
          // 若有 data 需搭配一個 categories (分類) ，共有3種寫法本次使用 2.3 版 - https://apexcharts.com/docs/series/
          data: []
        }
      ],
      chartOptions: {
        chart: {
          foreColor: '#CACEAC', // Y 軸字的顏色
          animations: {
            enabled: true,
            easing: 'linear',
            speed: 1500,
            animateGradually: {
              enabled: true,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          }
        },
        colors: '#caceac', // 長條圖顏色
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'] // 長條圖邊框顏色
        },
        // X 軸的值
        xaxis: {
          // 若有 data 需搭配一個 categories (分類) ，共有3種寫法本次使用 2.3 版 - https://apexcharts.com/docs/series/
          categories: [],
          labels: {
            style: {
              fontSize: '20px',
              // lineHeight: '23px',
              fontFamily: 'Arimo',
              fontWeight: 'normal',
              colors: '#CACEAC' // X 軸字的顏色
            }
          }
        }
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('http://localhost:3030/pomodoroData')
      this.series[0].data = data.result.map(item => {
        return { y: item.times, x: item.date }
        // y 軸 暫時以 times 替代去看資料，再研究要不要在資料庫新增 timesPomodoro 欄位
      })
      // 若有 data 需搭配一個 categories (分類) ，共有3種寫法本次使用 2.3 版 - https://apexcharts.com/docs/series/
    } catch (error) {
      alert(error)
    }
  }
}
</script>
