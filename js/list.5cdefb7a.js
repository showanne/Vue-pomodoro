(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{"04f6":function(t,e,i){t.exports=i.p+"img/action-arrow-up.f0648494.png"},"1a33":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"list"}},[n("b-container",{staticClass:"min-vh-100"},[n("b-row",{staticClass:"flex-column-reverse flex-lg-row"},[n("b-col",{staticClass:"p-3",attrs:{cols:"12",lg:"6"}},[n("h1",{staticClass:"mb-2"},[t._v("Todo")]),n("b-table",{staticClass:"text-secondary",attrs:{items:t.list,fields:t.listfields},scopedSlots:t._u([{key:"cell(check)",fn:function(e){return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.item.check,expression:"data.item.check"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.item.check)?t._i(e.item.check,null)>-1:e.item.check},on:{change:function(i){var n=e.item.check,a=i.target,s=!!a.checked;if(Array.isArray(n)){var c=null,r=t._i(n,c);a.checked?r<0&&t.$set(e.item,"check",n.concat([c])):r>-1&&t.$set(e.item,"check",n.slice(0,r).concat(n.slice(r+1)))}else t.$set(e.item,"check",s)}}})]}},{key:"cell(todo)",fn:function(e){return[e.item.edit?n("b-form-input",{attrs:{trim:"",state:e.item.state},on:{dblclick:function(t){e.item.edit=!0},keydown:[function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.changelist(e.index)},function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"esc",27,i.key,["Esc","Escape"])?null:t.cancellist(e.index)}]},model:{value:e.item.todoEdit,callback:function(i){t.$set(e.item,"todoEdit",i)},expression:"data.item.todoEdit"}}):n("span",[t._v(t._s(e.value))])]}},{key:"cell(edit)",fn:function(e){return[e.item.edit?n("span",[n("b-btn",{staticClass:"rounded-circle px-1 py-0",attrs:{variant:"primary"},on:{click:function(i){return t.changelist(e.index)}}},[n("font-awesome-icon",{staticClass:"btn-font",attrs:{icon:["fas","check"]}})],1),n("b-btn",{staticClass:"rounded-circle px-1 py-0",attrs:{variant:"primary"},on:{click:function(i){return t.cancellist(e.index)}}},[n("font-awesome-icon",{staticClass:"btn-font",attrs:{icon:["fas","undo"]}})],1)],1):n("span",[n("b-btn",{staticClass:"rounded-circle px-1 py-0",attrs:{variant:"primary"},on:{click:function(i){return t.editlist(e.index)}}},[n("font-awesome-icon",{staticClass:"btn-font text-secondary",attrs:{icon:["fas","pen"]}})],1),n("b-btn",{staticClass:"rounded-circle px-1 py-0 actionBtn",attrs:{variant:"primary"},on:{click:function(i){return t.dellist(e.index)}}},[n("img",{attrs:{src:i("c0db")}})])],1)]}},{key:"cell(action)",fn:function(t){return[n("b-btn",{staticClass:"rounded-circle px-1 py-0 actionBtn",attrs:{variant:"primary"},on:{click:function(t){}}},[n("img",{attrs:{src:i("04f6")}})]),n("b-btn",{staticClass:"rounded-circle px-1 py-0 actionBtn",attrs:{variant:"primary"},on:{click:function(t){}}},[n("img",{attrs:{src:i("8c01")}})]),n("b-btn",{staticClass:"rounded-circle px-1 py-0 actionBtn",attrs:{variant:"primary",to:"/home/pomodoro"},on:{click:function(t){}}},[n("img",{attrs:{src:i("68de")}})])]}}])}),n("h1",{staticClass:"my-2"},[t._v("Done")]),n("b-table-simple",{staticClass:"bg-transparent text-secondary",attrs:{"table-variant":"primary"}},[n("thead",[n("tr",[n("th",[t._v("已完成待辦事項")]),n("th",[t._v("完成日期")]),n("th",[t._v("操作")])])]),n("tbody",t._l(t.finished,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e))]),n("td"),n("td",[n("b-btn",{staticClass:"rounded-circle px-1 py-0 actionBtn",attrs:{variant:"primary"},on:{click:function(e){return t.delfinish(a)}}},[n("img",{attrs:{src:i("c0db")}})])],1)])})),0)])],1),n("b-col",{staticClass:"p-3 text-right",attrs:{cols:"12",lg:"6"}},[n("b-form",{on:{submit:function(e){return e.preventDefault(),t.additem.apply(null,arguments)}}},[n("b-form-group",{attrs:{"invalid-feedback":"請至少輸入 2 個字",state:t.state}},[n("b-form-input",{staticClass:"taskInput",attrs:{state:t.state,trim:"",placeholder:"Task..."},model:{value:t.newitem,callback:function(e){t.newitem=e},expression:"newitem"}})],1),n("b-btn",{staticClass:"taskBtn",attrs:{type:"submit",variant:"secondary"}},[t._v("Add task")]),n("div",[n("label",{attrs:{for:"datepicker-valid"}},[t._v("Choose a date (valid style)")]),n("b-form-datepicker",{staticClass:"bg-transparent",attrs:{id:"datepicker-valid",state:!0}})],1),n("div",[n("label",{attrs:{for:"datepicker-dateformat1"}},[t._v("Custom date format")]),n("b-form-datepicker",{staticClass:"bg-transparent",attrs:{id:"datepicker-dateformat1","date-format-options":{year:"numeric",month:"short",day:"2-digit",weekday:"short"},locale:"en"}},[t._v("label.mt-3(for='datepicker-dateformat2') Short date format b-form-datepicker#datepicker-dateformat2(:date-format-options='{ year: \\'numeric\\', month: \\'numeric\\', day: \\'numeric\\' }' locale='en')")])],1)],1),n("div",{staticClass:"mt-3 text-center"},[n("p",{staticClass:"text-mute font-listnone my-5"},[t._v("Let’s start something fun")]),n("img",{staticClass:"img-deco",attrs:{src:i("d7e5")}})])],1)],1)],1)],1)},a=[],s=(i("d81d"),{name:"List",data:function(){return{newitem:"",listfields:[{key:"check",label:"勾選"},{key:"todo",label:"待辦事項"},{key:"date",label:"新增日期"},{key:"edit",label:"編輯"},{key:"action",label:"操作"}]}},computed:{state:function(){return 0===this.newitem.length?null:!(this.newitem.length<2)},list:function(){return this.$store.getters.list.map((function(t){return t.todoEdit.length<2?t.state=!1:t.state=!0,t}))},finished:function(){return this.$store.state.finished}},methods:{additem:function(){this.state?(this.$store.commit("addList",this.newitem),this.newitem=""):this.$swal({icon:"error",title:"請至少輸入 2 個字"})},editlist:function(t){this.$store.commit("editList",t)},dellist:function(t){this.$store.commit("delList",t)},changelist:function(t){this.list[t].state&&this.$store.commit("changeList",t)},cancellist:function(t){this.$store.commit("canceLlist",t)},delfinish:function(t){this.$store.commit("delFinish",t)},onContext:function(t){this.formatted=t.selectedFormatted,this.selected=t.selectedYMD}}}),c=s,r=i("2877"),o=Object(r["a"])(c,n,a,!1,null,null,null);e["default"]=o.exports},"68de":function(t,e,i){t.exports=i.p+"img/action-log-out.c64ef8c3.png"},"8c01":function(t,e,i){t.exports=i.p+"img/action-arrow-down.9e4b1be8.png"},b727:function(t,e,i){var n=i("0366"),a=i("44ad"),s=i("7b0b"),c=i("50c4"),r=i("65f0"),o=[].push,l=function(t){var e=1==t,i=2==t,l=3==t,d=4==t,m=6==t,u=7==t,f=5==t||m;return function(p,h,b,k){for(var y,v,g=s(p),x=a(g),C=n(h,b,3),w=c(x.length),_=0,$=k||r,E=e?$(p,w):i||u?$(p,0):void 0;w>_;_++)if((f||_ in x)&&(y=x[_],v=C(y,_,g),t))if(e)E[_]=v;else if(v)switch(t){case 3:return!0;case 5:return y;case 6:return _;case 2:o.call(E,y)}else switch(t){case 4:return!1;case 7:o.call(E,y)}return m?-1:l||d?d:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},c0db:function(t,e,i){t.exports=i.p+"img/action-remove.f00bbd70.png"},d7e5:function(t,e,i){t.exports=i.p+"img/deco-fun.4494c105.png"},d81d:function(t,e,i){"use strict";var n=i("23e7"),a=i("b727").map,s=i("1dde"),c=s("map");n({target:"Array",proto:!0,forced:!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=list.5cdefb7a.js.map