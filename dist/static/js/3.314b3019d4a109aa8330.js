webpackJsonp([3],{"14eD":function(t,s){},"f/As":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={name:"Tests",data:function(){return{tests1:[],tests0:[],tests2:[]}},mounted:function(){console.log("Enter Tests.vue"),this.loadTestcases1(),this.loadTestcases0(),this.loadTestcases2()},methods:{loadTestcases1:function(){var t=this;this.$axios.get("/testcases/state/1").then(function(s){s&&200===s.data.code&&(console.log("f:loadTestcases1 get succeed"),t.tests1=s.data.result)})},loadTestcases0:function(){var t=this;this.$axios.get("/testcases/state/0").then(function(s){s&&200===s.data.code&&(t.tests0=s.data.result)})},loadTestcases2:function(){var t=this;this.$axios.get("/testcases/state/2").then(function(s){s&&200===s.data.code&&(t.tests2=s.data.result)})},toTestDetails:function(){this.$router.push("/test/TestDetails")}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{"margin-top":"40px"}},[e("div",{staticClass:"tests-area"},[e("h1",[t._v(" 当前运行 ")]),t._v(" "),e("el-card",{staticStyle:{"text-align":"left",width:"98%"}},t._l(t.tests1,function(s){return e("div",{key:s.id},[e("div",{staticStyle:{float:"left",width:"85%",height:"50px"}},[e("router-link",{staticClass:"test-link",attrs:{to:{path:"/test/testDetails",query:{id:s.id}}}},[e("span",{staticStyle:{"font-size":"20px"}},[e("strong",[t._v(" ID:"+t._s(s.id)+" ")])])]),t._v(" "),e("span",[t._v(" Target:"+t._s(s.system.type)+" ")]),t._v(" "),e("span",[t._v(" "+t._s(s.date)+" ")])],1)])}),0),t._v(" "),e("h1",[t._v(" 等待运行 ")]),t._v(" "),e("div",[e("el-row",t._l(t.tests0,function(s){return e("el-col",{key:s.id,attrs:{span:8}},[e("el-card",{staticStyle:{"text-align":"left",width:"94%",height:"70%"}},[e("div",{staticStyle:{float:"left",width:"85%",height:"100px"}},[e("div",[e("span",{staticStyle:{"font-size":"20px"}},[e("strong",[t._v(" ID:"+t._s(s.id)+" ")])])]),t._v(" "),e("div",[e("span",[t._v(" Target:"+t._s(s.system.type)+" ")])]),t._v(" "),e("div",[e("span",[t._v(" "+t._s(s.date)+" ")])])])])],1)}),1)],1),t._v(" "),e("h1",[t._v(" 运行结束 ")]),t._v(" "),e("div",[e("el-row",t._l(t.tests2,function(s){return e("el-col",{key:s.id,attrs:{span:8}},[e("el-card",{staticStyle:{"text-align":"left",width:"94%",height:"70%"}},[e("div",{staticStyle:{float:"left",width:"85%",height:"100px"}},[e("div",[e("span",{staticStyle:{"font-size":"20px"}},[e("strong",[t._v(" ID:"+t._s(s.id)+" ")])])]),t._v(" "),e("div",[e("span",[t._v(" Target:"+t._s(s.system.type)+" ")])]),t._v(" "),e("div",[e("span",[t._v(" "+t._s(s.date)+" ")])])])])],1)}),1)],1)],1)])},staticRenderFns:[]};var n=e("VU/8")(a,i,!1,function(t){e("14eD")},"data-v-d877df26",null);s.default=n.exports}});
//# sourceMappingURL=3.314b3019d4a109aa8330.js.map