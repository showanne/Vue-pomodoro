<template lang="pug">
  #today
    //- | AnalyticsToday
    b-row
      b-col(cols='6')
        b-btn(@click='').rounded-circle.px-1.py-0.actionBtn
          img(:src='require("../assets/img/ic_keyboard_arrow_left-A.png")')
        | 2021-06-23
        b-btn(@click='').rounded-circle.px-1.py-0.actionBtn
          img(:src='require("../assets/img/ic_keyboard_arrow_right-A.png")')
      b-col(cols='6') table
</template>
