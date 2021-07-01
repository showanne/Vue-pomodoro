<template lang="pug">
  #today
    //- | AnalyticsToday
    b-row
      b-col(cols='6')
        b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
          img(:src='require("../assets/img/action-arrow-left.png")')
        | 2021-06-23
        b-btn(variant="primary" @click='').rounded-circle.px-1.py-0.actionBtn
          img(:src='require("../assets/img/action-arrow-right.png")')
      b-col(cols='6') table
</template>
