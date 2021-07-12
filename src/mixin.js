// const today = (new Date().getFullYear() + '-' + (new Date().getMonth() + 1 > 9 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1)) + '-' + new Date().getDate().toLocaleString(undefined, { minimumIntegerDigits: 2 })).toString()
// console.log(today) // 2021-07-12

// function N()
// {
// var now=new Date();
// var date=new Date(now.getTime()-n*24*3600*1000);
// var year=date.getFullYear();
// var month=date.getMonth()+1>9?date.getMonth()+1:"0"+(date.getMonth()+1);
// var day=date.getDate()>9?date.getDate():"0"+date.getDate();
// var date=year+"-"+month+"-"+day;
// return date;
// }
// ————————————————
// 版权声明：本文为CSDN博主「Gemini_llw」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/Gemini_llw/article/details/77853532

export default {
  methods: {
    formatDate () {
      return new Date().getFullYear() + '-' +
      (new Date().getMonth() + 1).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + '-' +
      new Date().getDate().toLocaleString(undefined, { minimumIntegerDigits: 2 })
    },
    Date (d) {
      const date = new Date(new Date().getTime() - d * 24 * 3600 * 1000)
      const year = date.getFullYear()
      const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
      const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
      const dateNum = year + '-' + month + '-' + day
      console.log(dateNum)
      return dateNum
    }
  }
}
