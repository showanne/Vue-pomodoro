(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["analytics"],{"178f":function(t,a,e){t.exports=e.p+"img/action-arrow-right.f9a24a32.png"},"41f2":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"analytics"}},[s("b-container",{staticClass:"min-vh-100"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-tabs",{attrs:{"active-nav-item-class":"font-weight-bold text-capitalize text-secondary bg-transparent","active-tab-class":"text-secondary bg-transparent","content-class":"mt-5",pills:""}},[s("b-tab",{staticClass:"mr-auto font-analytics",attrs:{title:"analytics",disabled:""}}),s("b-tab",{attrs:{title:"Today"}},[s("b-row",[s("b-col",{staticClass:"pr-3",attrs:{cols:"12",lg:"4"}},[s("p",{staticClass:"pl-2 align-baseline"},[s("b-btn",{staticClass:"rounded-circle px-1 py-0 actionBtn",attrs:{variant:"primary"},on:{click:function(t){}}},[s("img",{attrs:{src:e("ab70")}})]),s("span",{staticClass:"font-weight-bold px-3"},[t._v(t._s(t.DateCalc(t.dToday)))]),s("b-btn",{staticClass:"rounded-circle px-1 py-0 actionBtn",attrs:{variant:"primary"},on:{click:function(t){}}},[s("img",{attrs:{src:e("178f")}})])],1),s("hr",{staticClass:"bg-secondary hr-analytics"}),s("p",{staticClass:"pl-4"},[t._v("Pomodoros : "+t._s(t.timesPomodoro))]),s("p",{staticClass:"pl-4"},[t._v("Tasks : "+t._s(t.list.length))]),s("p",{staticClass:"pl-4"},[t._v("Completed : "+t._s(t.timesComplete))]),s("p",{staticClass:"pl-4"},[t._v("Focus time :"),s("span",{staticClass:"lp6"},[t._v(t._s(t.timeCalc(25*t.timesPomodoro)))])])]),s("b-col",{staticClass:"px-5",attrs:{cols:"12",lg:"8"}},[s("b-table-simple",{staticClass:"mt-lg-5 mt-3 bg-transparent text-secondary",attrs:{"table-variant":"primary"}},t._l(t.list,(function(a,e){return s("tr",{key:e},[s("td",[s("span",[t._v(t._s(a.todo))]),a.check?s("span",{staticClass:"text-mute border-mute border rounded py-1 px-2 ml-3"},[t._v("Completed")]):t._e(),s("br"),s("span",[t._v(t._s(t.timesDotCalc(t.list[e].times)))])]),s("td",{staticClass:"text-right pr-5 lp6"},[t._v(t._s(t.timeCalc(t.timesMinCalc(t.list[e].times))))])])})),0)],1)],1)],1),s("b-tab",{attrs:{title:"Weekly"}},[s("b-row",[s("b-col",{staticClass:"pr-3",attrs:{cols:"12",lg:"4"}},[s("p",{staticClass:"pl-2"},[s("b-btn",{staticClass:"rounded-circle px-1 py-0 actionBtn",attrs:{variant:"primary"},on:{click:function(t){}}},[s("img",{attrs:{src:e("ab70")}})]),t._v(t._s(t.DateCalc(t.dWeekStart))+" ~ "+t._s(t.DateCalc(t.dWeekEnd))),s("b-btn",{staticClass:"rounded-circle px-1 py-0 actionBtn",attrs:{variant:"primary"},on:{click:function(t){}}},[s("img",{attrs:{src:e("178f")}})])],1),s("hr",{staticClass:"bg-secondary hr-analytics"}),s("p",{staticClass:"pl-4"},[t._v("Pomodoros : 46")]),s("p",{staticClass:"pl-4"},[t._v("Tasks : 15")]),s("p",{staticClass:"pl-4"},[t._v("Completed : 7")]),s("p",{staticClass:"pl-4"},[t._v("Focus time : 19h10m")])]),s("b-col",{staticClass:"px-5",attrs:{cols:"12",lg:"8"}},[s("div",{attrs:{id:"chart"}},[s("apexchart",{attrs:{type:"bar",width:"550",options:t.chartOptions,series:t.series}})],1)])],1)],1)],1)],1)],1)],1)],1)},r=[],i=(e("4de4"),e("d81d"),e("99af"),{name:"Analytics",data:function(){return{dToday:0,dWeekStart:-3,dWeekEnd:3,series:[{name:"WeeklyChart",data:[3,5,1,10,5]}],chartOptions:{chart:{foreColor:"#CACEAC",animations:{enabled:!0,easing:"linear",speed:1500,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},colors:"#caceac",plotOptions:{bar:{horizontal:!1,columnWidth:"39%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2},grid:{show:!1,borderColor:"#caceac"},xaxis:{type:"date",categories:[this.DateChart(-2),this.DateChart(-1),this.DateChart(0),this.DateChart(1),this.DateChart(2)],labels:{minHeight:28,maxHeight:99,style:{fontSize:"20px",fontFamily:"Arimo",fontWeight:"normal",colors:"#CACEAC"},offsetX:0,offsetY:2},axisBorder:{show:!0,color:"#caceac",height:2},axisTicks:{show:!1},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:0,dashArray:0}}},yaxis:{show:!0,categories:[],labels:{style:{fontSize:"20px",fontFamily:"Arimo",fontWeight:"normal",colors:"#CACEAC"}},axisBorder:{show:!0,color:"#caceac",width:2},axisTicks:{show:!1}},noData:{text:void 0,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"14px",fontFamily:void 0}}}}},computed:{today:function(){return this.$store.state.today},list:function(){return this.$store.state.list},timesPomodoro:function(){var t=this.list.filter((function(t){return t.times>0})),a=t.map((function(t){return t.times})),e=function(t,a){return t+a};return a.reduce(e)},timesComplete:function(){var t=this.list.filter((function(t){return!0===t.check}));return t.length}},methods:{DateChart:function(t){var a=new Date((new Date).getTime()+24*(0+t)*3600*1e3);return a.getMonth()+1+" / "+a.getDate().toLocaleString(void 0,{minimumIntegerDigits:2})},timeCalc:function(t){var a=Math.floor(parseInt(t)/60)>0?Math.floor(parseInt(t)/60)+"h":"",e=Math.floor(parseInt(t)%60)>0?Math.floor(parseInt(t)%60).toLocaleString(void 0,{minimumIntegerDigits:2})+"m":"";return"".concat(a).concat(e)}}}),o=i,n=e("2877"),c=Object(n["a"])(o,s,r,!1,null,null,null);a["default"]=c.exports},"4de4":function(t,a,e){"use strict";var s=e("23e7"),r=e("b727").filter,i=e("1dde"),o=i("filter");s({target:"Array",proto:!0,forced:!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"99af":function(t,a,e){"use strict";var s=e("23e7"),r=e("d039"),i=e("e8b5"),o=e("861d"),n=e("7b0b"),c=e("50c4"),l=e("8418"),d=e("65f0"),p=e("1dde"),f=e("b622"),u=e("2d00"),m=f("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",C=u>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),g=p("concat"),v=function(t){if(!o(t))return!1;var a=t[m];return void 0!==a?!!a:i(t)},y=!C||!g;s({target:"Array",proto:!0,forced:y},{concat:function(t){var a,e,s,r,i,o=n(this),p=d(o,0),f=0;for(a=-1,s=arguments.length;a<s;a++)if(i=-1===a?o:arguments[a],v(i)){if(r=c(i.length),f+r>h)throw TypeError(b);for(e=0;e<r;e++,f++)e in i&&l(p,f,i[e])}else{if(f>=h)throw TypeError(b);l(p,f++,i)}return p.length=f,p}})},ab70:function(t,a,e){t.exports=e.p+"img/action-arrow-left.1d77407c.png"},b727:function(t,a,e){var s=e("0366"),r=e("44ad"),i=e("7b0b"),o=e("50c4"),n=e("65f0"),c=[].push,l=function(t){var a=1==t,e=2==t,l=3==t,d=4==t,p=6==t,f=7==t,u=5==t||p;return function(m,h,b,C){for(var g,v,y=i(m),x=r(y),w=s(h,b,3),_=o(x.length),k=0,D=C||n,A=a?D(m,_):e||f?D(m,0):void 0;_>k;k++)if((u||k in x)&&(g=x[k],v=w(g,k,y),t))if(a)A[k]=v;else if(v)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:c.call(A,g)}else switch(t){case 4:return!1;case 7:c.call(A,g)}return p?-1:l||d?d:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d81d:function(t,a,e){"use strict";var s=e("23e7"),r=e("b727").map,i=e("1dde"),o=i("map");s({target:"Array",proto:!0,forced:!o},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=analytics.e874bc64.js.map