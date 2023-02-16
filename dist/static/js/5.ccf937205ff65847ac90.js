webpackJsonp([5],{Qivv:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"TestDetails",data:function(){return{server_projection_url:"https://player.bilibili.com/player.html?cid=274753927&aid=713418332&page=1&as_wide=1&high_quality=1&danmaku=0",timer:"",currentTestCase:"",logInfo:""}},created:function(){console.log("进入测试详情页"),this.myRefresh()},mounted:function(){this.timer=setInterval(this.myRefresh,2e3),console.log("测试详情页中的信息每3秒刷新一次")},destroyed:function(){clearInterval(this.timer),console.log("停止页面刷新"),console.log("离开测试详情页")},methods:{loadLogInfo:function(){var t=this;this.$axios.get("/testdetails/loadloginfo").then(function(e){e&&200===e.data.code&&(t.logInfo=e.data.result,console.log(t.logInfo))}).catch(function(t){console.log(t)})},loadCurrentTestInfo:function(){var t=this;this.$axios.get("/testdetails/loadcurrenttestcase").then(function(e){e&&200===e.data.code&&(t.currentTestCase=e.data.result)}).catch(function(t){console.log(t)})},callScript:function(){var t=this;console.log("调用脚本中..."),this.$axios.post("/callscript").then(function(e){200===e.data.code?t.$alert(e.data.message,"提示",{confirmButtonText:"确定调用成功"}):t.$alert(e.data.message,"提示",{confirmButtonText:"确定调用失败"})}).catch(function(t){console.log(t)})},endScript:function(){var t=this;console.log("结束脚本中..."),this.$axios.post("/killscript").then(function(e){200===e.data.code?t.$alert(e.data.message,"提示",{confirmButtonText:"确定"}):t.$alert(e.data.message+"Error when kill script","提示",{confirmButtonText:"确定"}),console.log(e.data.message)}).catch(function(t){console.log(t)})},myRefresh:function(){this.loadLogInfo(),this.loadCurrentTestInfo()},startTest:function(){console.log("开始模拟测试"),this.callScript()},endTest:function(){console.log("结束模拟测试"),this.endScript()}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"align-self":"center",width:"1450px",margin:"10px auto 0 auto"}},[s("div",{staticClass:"parallel-alignment"},[s("div",{staticStyle:{border:"solid",height:"670px",width:"78%"}},[s("h3",[t._v("服务器投影画面")]),t._v(" "),s("iframe",{staticStyle:{height:"594px",width:"98%"},attrs:{src:t.server_projection_url,allowfullscreen:"allowfullscreen"}})]),t._v(" "),s("div",{staticClass:"current-test-info",staticStyle:{border:"solid",width:"22%",height:"670px"}},[s("h3",[t._v("当前测试信息")]),t._v(" "),t.currentTestCase?s("div",{staticStyle:{"text-align":"left"}},[s("div",[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("-目标系统: ")]),t._v(" "),s("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.currentTestCase.system.type))])]),t._v(" "),s("div",[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("-初始场景选取:")]),t._v(" "),s("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.currentTestCase.initialScenario.type))])]),t._v(" "),s("div",[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("-场景测试时长：")]),t._v(" "),s("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.currentTestCase.duration))])]),t._v(" "),s("div",[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("-环境要素：")]),t._v(" "),s("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.currentTestCase.environments.type))])]),t._v(" "),s("div",[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("-静态障碍物：")]),t._v(" "),s("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.currentTestCase.staticObstacles.type))])]),t._v(" "),s("div",[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("-动态障碍物：")]),t._v(" "),s("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.currentTestCase.dynamicObstacles.type))])]),t._v(" "),s("div",[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("-交通设施：")]),t._v(" "),s("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.currentTestCase.trafficFacilities.type))])]),t._v(" "),s("div",[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("-目标事故类型：")]),t._v(" "),s("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.currentTestCase.targetAccidents.type))])]),t._v(" "),s("div",[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("-场景评估策略：")]),t._v(" "),s("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.currentTestCase.evaluationStrategies.type))])])]):t._e(),t._v(" "),s("h3",[t._v("测试日志")]),t._v(" "),t.logInfo?s("div",{staticStyle:{"text-align":"left"}},[s("div",[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("-测试场景队列数量：")]),t._v(" "),s("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.logInfo.testedScenariosNum))])]),t._v(" "),s("div",[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("-事故场景数量: ")]),t._v(" "),s("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.logInfo.accidentScenariosNum))])]),t._v(" "),s("div",[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("-迭代次数: ")]),t._v(" "),s("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.logInfo.iterations))])]),t._v(" "),s("div",[s("span",{staticStyle:{"font-size":"16px","font-weight":"bold"}},[t._v("-测试时长: ")]),t._v(" "),s("span",{staticStyle:{"font-size":"15px"}},[t._v(t._s(t.logInfo.testDuration)+" h")])])]):t._e(),t._v(" "),s("button",{on:{click:t.startTest}},[s("span",{staticStyle:{"font-size":"16px"}},[t._v("开始模拟测试")])]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.logInfo.logfileText,expression:"logInfo.logfileText"}],attrs:{id:"logFileText",readonly:""},domProps:{value:t.logInfo.logfileText},on:{input:function(e){e.target.composing||t.$set(t.logInfo,"logfileText",e.target.value)}}})])])])},staticRenderFns:[]};var o=s("VU/8")(n,i,!1,function(t){s("sGWS")},"data-v-1f60d439",null);e.default=o.exports},sGWS:function(t,e){}});
//# sourceMappingURL=5.ccf937205ff65847ac90.js.map