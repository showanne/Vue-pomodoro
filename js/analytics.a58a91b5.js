(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["analytics"],{"178f":function(t,a,s){t.exports=s.p+"img/action-arrow-right.f9a24a32.png"},"41f2":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"analytics"}},[e("b-container",{staticClass:"min-vh-100"},[e("b-row",[e("b-col",{staticClass:"p-3",attrs:{cols:"12"}},[e("h1",{staticClass:"font-analytics mb-2"},[t._v("Analytics")])])],1),e("b-row",[e("b-col",{attrs:{cols:"12"}},[0===this.list.length?e("div",{staticClass:"mt-3 text-center"},[e("p",{staticClass:"text-mute font-listnone my-5"},[t._v("Let’s start something fun")]),e("img",{staticClass:"img-deco",attrs:{src:s("d7e5")}})]):e("b-tabs",{attrs:{align:"center","active-nav-item-class":"font-weight-bold text-capitalize text-secondary bg-transparent","active-tab-class":"text-secondary bg-transparent","content-class":"mt-3",pills:""}},[e("b-tab",{attrs:{title:"Today"}},[e("b-row",[e("b-col",{staticClass:"pr-3",attrs:{cols:"12",lg:"4"}},[e("p",{staticClass:"pl-2 align-baseline"},[e("b-btn",{staticClass:"rounded-circle px-1 py-0 actionBtn",attrs:{variant:"primary"},on:{click:function(t){}}},[e("img",{attrs:{src:s("ab70")}})]),e("span",{staticClass:"font-weight-bold px-3"},[t._v(t._s(t.DateCalc(t.dToday)))]),e("b-btn",{staticClass:"rounded-circle px-1 py-0 actionBtn",attrs:{variant:"primary"},on:{click:function(t){}}},[e("img",{attrs:{src:s("178f")}})])],1),e("hr",{staticClass:"bg-secondary hr-analytics"}),e("p",{staticClass:"pl-4"},[t._v("Pomodoros : "+t._s(t.timesPomodoro))]),e("p",{staticClass:"pl-4"},[t._v("Tasks : "+t._s(t.list.length))]),e("p",{staticClass:"pl-4"},[t._v("Completed : "+t._s(t.timesComplete))]),e("p",{staticClass:"pl-4"},[t._v("Focus time :"),e("span",{staticClass:"lp6"},[t._v(t._s(t.timeCalc(25*t.timesPomodoro)))])])]),e("b-col",{staticClass:"px-5",attrs:{cols:"12",lg:"8"}},[e("b-table-simple",{staticClass:"mt-lg-5 mt-3 bg-transparent text-secondary",attrs:{"table-variant":"primary"}},t._l(t.list,(function(a,s){return e("tr",{key:s},[e("td",[e("span",[t._v(t._s(a.todo))]),a.check?e("span",{staticClass:"text-mute border-mute border rounded py-1 px-2 ml-3"},[t._v("Completed")]):t._e(),e("br"),e("span",[t._v(t._s(t.timesDotCalc(t.list[s].times)))])]),e("td",{staticClass:"text-right pr-5 lp6"},[t._v(t._s(t.timeCalc(t.timesMinCalc(t.list[s].times))))])])})),0)],1)],1)],1),e("b-tab",{attrs:{title:"Weekly"}},[e("b-row",[e("b-col",{staticClass:"pr-3",attrs:{cols:"12",lg:"4"}},[e("p",{staticClass:"pl-2"},[e("b-btn",{staticClass:"rounded-circle px-1 py-0 actionBtn",attrs:{variant:"primary"},on:{click:function(t){}}},[e("img",{attrs:{src:s("ab70")}})]),t._v(t._s(t.DateCalc(t.dWeekStart))+" ~ "+t._s(t.DateCalc(t.dWeekEnd))),e("b-btn",{staticClass:"rounded-circle px-1 py-0 actionBtn",attrs:{variant:"primary"},on:{click:function(t){}}},[e("img",{attrs:{src:s("178f")}})])],1),e("hr",{staticClass:"bg-secondary hr-analytics"}),e("p",{staticClass:"pl-4"},[t._v("Pomodoros : 46")]),e("p",{staticClass:"pl-4"},[t._v("Tasks : 15")]),e("p",{staticClass:"pl-4"},[t._v("Completed : 7")]),e("p",{staticClass:"pl-4"},[t._v("Focus time : 19h10m")])]),e("b-col",{staticClass:"px-5",attrs:{cols:"12",lg:"8"}},[e("div",{attrs:{id:"chart"}},[e("apexchart",{attrs:{type:"bar",width:"550",options:t.chartOptions,series:t.series}})],1)])],1)],1)],1)],1)],1)],1)],1)},r=[],i=(s("4de4"),s("d81d"),s("99af"),{name:"Analytics",data:function(){return{dToday:0,dWeekStart:-3,dWeekEnd:3,series:[{name:"WeeklyChart",data:[3,5,1,10,5]}],chartOptions:{chart:{foreColor:"#CACEAC",animations:{enabled:!0,easing:"linear",speed:1500,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},colors:"#caceac",plotOptions:{bar:{horizontal:!1,columnWidth:"39%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2},grid:{show:!1,borderColor:"#caceac"},xaxis:{type:"date",categories:[this.DateChart(-2),this.DateChart(-1),this.DateChart(0),this.DateChart(1),this.DateChart(2)],labels:{minHeight:28,maxHeight:99,style:{fontSize:"20px",fontFamily:"Arimo",fontWeight:"normal",colors:"#CACEAC"},offsetX:0,offsetY:2},axisBorder:{show:!0,color:"#caceac",height:2},axisTicks:{show:!1},crosshairs:{show:!0,width:1,position:"back",opacity:.9,stroke:{color:"#b6b6b6",width:0,dashArray:0}}},yaxis:{show:!0,categories:[],labels:{style:{fontSize:"20px",fontFamily:"Arimo",fontWeight:"normal",colors:"#CACEAC"}},axisBorder:{show:!0,color:"#caceac",width:2},axisTicks:{show:!1}},noData:{text:void 0,align:"center",verticalAlign:"middle",offsetX:0,offsetY:0,style:{color:void 0,fontSize:"14px",fontFamily:void 0}}}}},computed:{today:function(){return this.$store.state.today},list:function(){return this.$store.state.list},timesPomodoro:function(){var t=this.list.filter((function(t){return t.times>0})),a=t.map((function(t){return t.times})),s=function(t,a){return t+a};return a.reduce(s)},timesComplete:function(){var t=this.list.filter((function(t){return!0===t.check}));return t.length}},methods:{DateChart:function(t){var a=new Date((new Date).getTime()+24*(0+t)*3600*1e3);return a.getMonth()+1+" / "+a.getDate().toLocaleString(void 0,{minimumIntegerDigits:2})},timeCalc:function(t){var a=Math.floor(parseInt(t)/60)>0?Math.floor(parseInt(t)/60)+"h":"",s=Math.floor(parseInt(t)%60)>0?Math.floor(parseInt(t)%60).toLocaleString(void 0,{minimumIntegerDigits:2})+"m":"";return"".concat(a).concat(s)}}}),n=i,o=s("2877"),c=Object(o["a"])(n,e,r,!1,null,null,null);a["default"]=c.exports},"4de4":function(t,a,s){"use strict";var e=s("23e7"),r=s("b727").filter,i=s("1dde"),n=i("filter");e({target:"Array",proto:!0,forced:!n},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"99af":function(t,a,s){"use strict";var e=s("23e7"),r=s("d039"),i=s("e8b5"),n=s("861d"),o=s("7b0b"),c=s("50c4"),l=s("8418"),d=s("65f0"),p=s("1dde"),f=s("b622"),m=s("2d00"),u=f("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",C=m>=51||!r((function(){var t=[];return t[u]=!1,t.concat()[0]!==t})),g=p("concat"),v=function(t){if(!n(t))return!1;var a=t[u];return void 0!==a?!!a:i(t)},y=!C||!g;e({target:"Array",proto:!0,forced:y},{concat:function(t){var a,s,e,r,i,n=o(this),p=d(n,0),f=0;for(a=-1,e=arguments.length;a<e;a++)if(i=-1===a?n:arguments[a],v(i)){if(r=c(i.length),f+r>h)throw TypeError(b);for(s=0;s<r;s++,f++)s in i&&l(p,f,i[s])}else{if(f>=h)throw TypeError(b);l(p,f++,i)}return p.length=f,p}})},ab70:function(t,a,s){t.exports=s.p+"img/action-arrow-left.1d77407c.png"},b727:function(t,a,s){var e=s("0366"),r=s("44ad"),i=s("7b0b"),n=s("50c4"),o=s("65f0"),c=[].push,l=function(t){var a=1==t,s=2==t,l=3==t,d=4==t,p=6==t,f=7==t,m=5==t||p;return function(u,h,b,C){for(var g,v,y=i(u),x=r(y),w=e(h,b,3),_=n(x.length),k=0,A=C||o,D=a?A(u,_):s||f?A(u,0):void 0;_>k;k++)if((m||k in x)&&(g=x[k],v=w(g,k,y),t))if(a)D[k]=v;else if(v)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:c.call(D,g)}else switch(t){case 4:return!1;case 7:c.call(D,g)}return p?-1:l||d?d:D}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d7e5:function(t,a,s){t.exports=s.p+"img/deco-fun.4494c105.png"},d81d:function(t,a,s){"use strict";var e=s("23e7"),r=s("b727").map,i=s("1dde"),n=i("map");e({target:"Array",proto:!0,forced:!n},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=analytics.a58a91b5.js.map