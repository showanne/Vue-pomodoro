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
                    p.pl-2.align-baseline
                      b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                        img(:src='require("../assets/img/action-arrow-left.png")')
                      span.font-weight-bold.px-3 {{ DateCalc(dToday) }}
                      b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                        img(:src='require("../assets/img/action-arrow-right.png")')
                    hr.bg-secondary.hr-analytics
                    p.pl-4 Pomodoros : 0
                    p.pl-4 Tasks : {{ list.length + finished.length }}
                    p.pl-4 Completed : {{ finished.length }}
                    p.pl-4 Focus time : {{ finished.length * 25 }}m
                  b-col(cols='12' lg='8').px-5
                    b-table-simple(table-variant="primary").bg-transparent.text-secondary
                        tr(v-for='(item, idx) in finished' :key='idx')
                          td
                            span {{ item.done }}
                            br
                            span {{ timesDotCalc(item.done.length) }}
                          td {{ timesMinCalc(item.done.length) }}min
                          //- {{ item.length }}
              b-tab(title='Weekly')
                //- | AnalyticsWeekly
                b-row
                  b-col(cols='12' lg='4').pr-3
                    p.pl-2
                      b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                        img(:src='require("../assets/img/action-arrow-left.png")')
                      | {{ DateCalc(dWeekStart) }} ~ {{ DateCalc(dWeekEnd) }}
                      b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
                        img(:src='require("../assets/img/action-arrow-right.png")')
                    hr.bg-secondary.hr-analytics
                    p.pl-4 Pomodoros : 46
                    p.pl-4 Tasks : 15
                    p.pl-4 Completed : 7
                    p.pl-4 Focus time : 19h10m
                  b-col(cols='12' lg='8').px-5
                    #chart
                      apexchart(type='bar' width='550' :options='chartOptions' :series='series')
</template>

<script>
export default {
  name: 'Analytics',
  data () {
    return {
      dToday: 0,
      dWeekStart: -3,
      dWeekEnd: 3,
      // 長條圖的值 series.data  X軸的值 xaxis.categories
      series: [
        {
          name: 'WeeklyChart',
          // data 及 categories 寫法 https://apexcharts.com/docs/series/
          data: [3, 5, 1, 10, 5]
        }
      ],
      // 長條圖
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
            columnWidth: '39%',
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
          type: 'date',
          categories: [
            this.DateChart(-2),
            this.DateChart(-1),
            this.DateChart(0),
            this.DateChart(1),
            this.DateChart(2)
          ],
          labels: {
            minHeight: 28,
            maxHeight: 99,
            style: {
              fontSize: '20px',
              // lineHeight: '23px',
              fontFamily: 'Arimo',
              fontWeight: 'normal',
              colors: '#CACEAC' // X 軸字的顏色
            },
            offsetX: 0,
            offsetY: 2
            // format: 'MM/dd',
            // formatter: undefined,
            // datetimeUTC: true
            // datetimeFormatter: {
            // year: 'yyyy',
            // month: 'MM',
            // day: 'dd'
            // hour: 'HH:mm'
            // }
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
    today () {
      return this.$store.state.today
    },
    list () {
      // console.log(this.$store.state.list.length)
      return this.$store.state.list
    },
    finished () {
      // console.log(this.$store.state.finished.length)
      return this.$store.state.finished
    }
  },
  methods: {
    timesDotCalc (D) {
      // console.log(D)
      let dot = ''
      for (let i = 1; i <= D; i++) {
        // console.log(i)
        dot += '●'
      }
      return dot
    },
    timesMinCalc (M) {
      // console.log(M)
      let Min = 0
      for (let i = 1; i <= M; i++) {
        // console.log(i)
        Min += 25
      }
      return Min
    },
    DateChart (c) {
      // const T = this.dToday
      // console.log(T)
      // console.log(typeof T)
      const date = new Date(new Date().getTime() + (0 + c) * 24 * 3600 * 1000)

      return (date.getMonth() + 1) +
      ' / ' +
      date.getDate().toLocaleString(undefined, { minimumIntegerDigits: 2 })
    }
  }

}
</script>
