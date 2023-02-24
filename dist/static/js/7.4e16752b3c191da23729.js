webpackJsonp([7],{LlCm:function(t,e){},hQXV:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"AccidentDetails",data:function(){return{accident:""}},mounted:function(){this.loadAccident()},methods:{loadAccident:function(){var t=this;this.$axios.get("/accidents/"+this.$route.query.id).then(function(e){e&&200===e.data.code&&(t.accident=e.data.result)})},downloadJson:function(){var t=this;this.$axios.get("/accidents/download/"+this.accident.id).then(function(e){var i=new Blob([e.data],{type:"application/json"}),n=window.URL.createObjectURL(i),a=document.createElement("a");a.href=n,a.setAttribute("download",t.accident.fileName),document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(a.href)})}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-card",{staticStyle:{"text-align":"left",width:"990px",margin:"35px auto 0 auto"}},[t.accident?i("div",[i("el-button",{staticStyle:{"background-color":"gainsboro",width:"160px",float:"right"},on:{click:t.downloadJson}},[i("span",{staticStyle:{"font-size":"26px","font-weight":"bold"}},[t._v("下载")])]),t._v(" "),i("span",{staticStyle:{"font-size":"30px"}},[i("strong",[t._v("ID:"+t._s(t.accident.id)+"详细信息")])]),t._v(" "),i("el-divider"),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px"}},[t._v("测试系统:"+t._s(t.accident.system.type))])]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px"}},[t._v("事故类型:"+t._s(t.accident.targetAccidents.type))])]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px"}},[t._v("事故相关车辆:"+t._s(t.accident.vehicle))])]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px"}},[t._v("问题模块:"+t._s(t.accident.faultyModule))])]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px"}},[t._v("无人车规划任务:"+t._s(t.accident.taskPlanning.task))])]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px"}},[t._v("车道类型:"+t._s(t.accident.drivewayType.type))])]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px"}},[t._v("障碍物类型:"+t._s(t.accident.obstacleType.type))])]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px"}},[t._v("障碍物数量:"+t._s(t.accident.num))])]),t._v(" "),i("video",{attrs:{controls:"",width:"900",src:t.accident.videoUrl,type:"video/mp4"}})],1):t._e()])],1)},staticRenderFns:[]};var c=i("VU/8")(n,a,!1,function(t){i("LlCm")},"data-v-2e114b1d",null);e.default=c.exports}});
//# sourceMappingURL=7.4e16752b3c191da23729.js.map