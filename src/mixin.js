export default {
  methods: {
    DateCalc (d) {
      const date = new Date(new Date().getTime() + d * 24 * 3600 * 1000)
      return date.getFullYear() +
      '-' +
      (date.getMonth() + 1).toLocaleString(undefined, { minimumIntegerDigits: 2 }) +
      '-' +
      date.getDate().toLocaleString(undefined, { minimumIntegerDigits: 2 })
    },
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
    }
  }
}
