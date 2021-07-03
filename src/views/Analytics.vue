<template lang="pug">
  #analytics
    b-container.min-vh-100
        b-row
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
                  b-col(cols='12' lg='4').pr-3
                    b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                      img(:src='require("../assets/img/action-arrow-left.png")')
                    | 2021-06-23
                    b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                      img(:src='require("../assets/img/action-arrow-right.png")')
                    hr.bg-secondary.hr-analytics
                    p Pomodoros : 0
                    p Tasks : {{ list.length + finished.length }}
                    p Completed : {{ finished.length }}
                    p Focus time : 3h20m
                  b-col(cols='12' lg='8').px-5
                    b-table-simple(table-variant="primary").bg-transparent.text-secondary
                        tr(v-for='(item, idx) in finished' :key='idx')
                          td
                            span {{ item.done }}
                            br
                            span ●●●
                          td {{ item.done.length * 25 }}min
                          //- {{ item.length }}
              b-tab(title='Weekly')
                //- | AnalyticsWeekly
                b-row
                  b-col(cols='12' lg='4').pr-3
                    b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                      img(:src='require("../assets/img/action-arrow-left.png")')
                    | 2021-06-23~2021/07/23
                    b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                      img(:src='require("../assets/img/action-arrow-right.png")')
                    hr.bg-secondary.hr-analytics
                    p Pomodoros : 46
                    p Tasks : 15
                    p Completed : 7
                    p Focus time : 19h10m
                  b-col(cols='12' lg='8').px-5
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
          width: 2
          // colors: ['transparent'] // 長條圖邊框顏色
        },
        grid: { // 長條圖內橫線
          show: false,
          borderColor: '#caceac'
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
          },
          axisBorder: { // 長條圖 X 軸邊框設定
            show: true,
            color: '#caceac',
            height: 2
          },
          axisTicks: { // 長條圖 X 軸邊框的刻度設定
            show: false
          },
          crosshairs: { // 十字準線設定
            show: true,
            width: 1,
            position: 'back',
            opacity: 0.9,
            stroke: {
              color: '#b6b6b6',
              width: 0,
              dashArray: 0
            }
          }
        },
        yaxis: {
          show: true,
          categories: [],
          labels: {
            style: {
              fontSize: '20px',
              // lineHeight: '23px',
              fontFamily: 'Arimo',
              fontWeight: 'normal',
              colors: '#CACEAC' // Y 軸字的顏色
            }
          },
          axisBorder: { // 長條圖 Y 軸邊框設定
            show: true,
            color: '#caceac',
            width: 2
          },
          axisTicks: { // 長條圖 Y 軸邊框的刻度設定
            show: false
          }
        },
        noData: { // 無數據可用時顯示的文本。默認為 undefined 不顯示任何內容。
          text: undefined,
          align: 'center',
          verticalAlign: 'middle',
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: '14px',
            fontFamily: undefined
          }
        }
      }
    }
  },
  computed: {
    list () {
      // console.log(this.$store.state.list.length)
      return this.$store.state.list
    },
    finished () {
      // console.log(this.$store.state.finished.length)
      return this.$store.state.finished
    }
  }
  // ,
  // async mounted () {
  //   try {
  //     const { data } = await this.axios.get('')
  //     this.series[0].data = data.result.map(item => {
  //       return { y: item.times, x: item.date }
  //       // y 軸 暫時以 times 替代去看資料，再研究要不要在資料庫新增 timesPomodoro 欄位
  //     })
  //     // 若有 data 需搭配一個 categories (分類) ，共有3種寫法本次使用 2.3 版 - https://apexcharts.com/docs/series/
  //   } catch (error) {
  //     alert(error)
  //   }
  // }
}
</script>
