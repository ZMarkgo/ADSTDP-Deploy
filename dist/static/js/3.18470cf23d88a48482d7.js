webpackJsonp([3],{"f/As":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-upload",{ref:"upload",staticClass:"scenario-upload",attrs:{action:"http://10.176.36.38:8443/api/scenarios/upload",accept:"application/json","before-remove":e.beforeRemove,"on-success":e.handleSuccess,multiple:"",limit:1,"on-exceed":e.handleExceed,"file-list":e.fileList,"before-upload":e.beforeUpload,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传json文件")])],1)},staticRenderFns:[]};var s={name:"Tests",components:{ScenarioUpload:a("VU/8")({name:"ScenarioUpload",data:function(){return{fileList:[],filePath:""}},methods:{handleExceed:function(e,t){var a="当前限制选择1个文件，本次选择了"+e.length+"个文件";e.length+t.length>=2&&(a=a+"，共选择了"+(e.length+t.length)+"个文件"),this.$alert(a,"提示",{confirmButtonText:"确定"})},beforeRemove:function(e,t){},clear:function(){this.$refs.upload.clearFiles()},beforeUpload:function(e){},submitUpload:function(){this.$refs.upload.submit()},handleSuccess:function(e){this.filePath=e,this.$alert("上传成功，请继续选择其他测试信息","提示",{confirmButtonText:"确定"}),this.$emit("onUpload")}}},i,!1,function(e){a("fZ17")},"data-v-936d9016",null).exports},data:function(){return{tests1:[],tests0:[],tests2:[],dialogFormVisible:!1,scenario_upload_visible:!1,scenario_select_visible:!1,scenario_name:"",Aenvironments:[],Astatic_obstacles:[],Adynamic_obstacles:[],Atraffic_facilities:[],Atarget_accidents:[],Aevaluation_strategies:[],form:{duration:"",state:{id:"1",type:""},system:{id:"",type:""},initialScenario:{id:"",type:""},initial_scenario_path:"",environments:{id:"",type:""},staticObstacles:{id:"",type:""},dynamicObstacles:{id:"",type:""},trafficFacilities:{id:"",type:""},targetAccidents:{id:"",type:""},evaluationStrategies:{id:"",type:""}}}},mounted:function(){this.loadTestcases1(),this.loadTestcases0(),this.loadTestcases2()},methods:{loadTestcases1:function(){var e=this;this.$axios.get("/testcases/state/2").then(function(t){t&&200===t.data.code&&(e.tests1=t.data.result)})},loadTestcases0:function(){var e=this;this.$axios.get("/testcases/state/1").then(function(t){t&&200===t.data.code&&(e.tests0=t.data.result)})},loadTestcases2:function(){var e=this;this.$axios.get("/testcases/state/3").then(function(t){t&&200===t.data.code&&(e.tests2=t.data.result)})},handleScenarioSelect:function(e){1==e&&(this.scenario_select_visible=!0,this.scenario_upload_visible=!1),2==e&&(this.scenario_select_visible=!1,this.scenario_upload_visible=!0)},handleScenarioSelectFromLibrary:function(){var e=this,t=this;""===this.scenario_name?this.$alert("请输入场景库中具体的场景名称","提示",{confirmButtonText:"确定"}):this.$axios.get("/scenarios/name/"+this.scenario_name).then(function(a){if(a&&200===a.data.code){var i=a.data.result;t.form.initial_scenario_path=i.scenario_path,e.$alert("已找到该场景，请继续选择其他测试信息","提示",{confirmButtonText:"确定"})}else e.$alert(a.data.message,"提示",{confirmButtonText:"确定"})})},uploadScenario:function(){this.form.initial_scenario_path=this.$refs.scenarioUpload.filePath},clear:function(){this.scenario_select_visible=!1,this.scenario_upload_visible=!1,this.Aenvironments=[],this.Astatic_obstacles=[],this.Adynamic_obstacles=[],this.Atraffic_facilities=[],this.Atarget_accidents=[],this.Aevaluation_strategies=[],this.form={duration:"",system:{id:"",type:""},initialScenario:{id:"",type:""},initial_scenario_path:"",environments:{id:"",type:""},staticObstacles:{id:"",type:""},dynamicObstacles:{id:"",type:""},trafficFacilities:{id:"",type:""},targetAccidents:{id:"",type:""},evaluationStrategies:{id:"",type:""}}},onSubmit:function(){var e=this;if(""===this.form.initial_scenario_path)this.$alert("请选择初始场景！如果您选择从本地上传场景，您可能没有点击上传按钮。","提示",{confirmButtonText:"确定"});else{for(var t=(new Date).toLocaleDateString(),a=0,i=0,s=0,c=0,r=0,n=0,o=0;o<this.Aenvironments.length;o++)a+=Number(this.Aenvironments[o]);for(var l=0;l<this.Astatic_obstacles.length;l++)i+=Number(this.Astatic_obstacles[l]);for(var v=0;v<this.Adynamic_obstacles.length;v++)s+=Number(this.Adynamic_obstacles[v]);for(var d=0;d<this.Atraffic_facilities.length;d++)c+=Number(this.Atraffic_facilities[d]);for(var _=0;_<this.Atarget_accidents.length;_++)r+=Number(this.Atarget_accidents[_]);for(var f=0;f<this.Aevaluation_strategies.length;f++)n+=Number(this.Aevaluation_strategies[f]);this.form.environments.id=a,this.form.staticObstacles.id=i,this.form.dynamicObstacles.id=s,this.form.trafficFacilities.id=c,this.form.targetAccidents.id=r,this.form.evaluationStrategies.id=n,this.$axios.post("/edit/testcases",{date:t,duration:this.form.duration,state:this.form.state,system:this.form.system,initialScenario:this.form.initialScenario,initial_scenario_path:this.form.initial_scenario_path,environments:this.form.environments,staticObstacles:this.form.staticObstacles,dynamicObstacles:this.form.dynamicObstacles,trafficFacilities:this.form.trafficFacilities,targetAccidents:this.form.targetAccidents,evaluationStrategies:this.form.evaluationStrategies}).then(function(t){t&&200===t.data.code&&(e.dialogFormVisible=!1,e.$router.go(0))})}}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-top":"40px"}},[a("div",{staticClass:"TestStarter"},[a("el-button",{ref:"testStarter",staticClass:"starter",on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("新建")]),e._v(" "),a("el-dialog",{attrs:{title:"请设置您需要的测试信息",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.clear}},[a("div",{staticStyle:{"text-align":"left"}},[e._v("目标系统:\n          "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.system.id,expression:"form.system.id"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form.system,"id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),a("option",{attrs:{value:"1"}},[e._v("Apollo")]),e._v(" "),a("option",{attrs:{value:"2"}},[e._v("Autoware")])])]),e._v(" "),a("div",{staticStyle:{"text-align":"left"}},[e._v("初始场景选取:\n          "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.initialScenario.id,expression:"form.initialScenario.id"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form.initialScenario,"id",t.target.multiple?a:a[0])},function(t){return e.handleScenarioSelect(e.form.initialScenario.id)}]}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),a("option",{attrs:{value:"1"}},[e._v("从场景库选取")]),e._v(" "),a("option",{attrs:{value:"2"}},[e._v("本地上传")])]),e._v(" "),a("scenario-upload",{directives:[{name:"show",rawName:"v-show",value:e.scenario_upload_visible,expression:"scenario_upload_visible"}],ref:"scenarioUpload",on:{onUpload:e.uploadScenario}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.scenario_select_visible,expression:"scenario_select_visible"}],staticClass:"scenario-select"},[e._v("\n            请输入场景名称： "),a("el-input",{model:{value:e.scenario_name,callback:function(t){e.scenario_name=t},expression:"scenario_name"}}),e._v(" "),a("el-button",{on:{click:e.handleScenarioSelectFromLibrary}},[e._v("检索场景")])],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"left"}},[e._v("场景测试时长:\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.duration,expression:"form.duration"}],attrs:{placeholder:"Please enter a number"},domProps:{value:e.form.duration},on:{input:function(t){t.target.composing||e.$set(e.form,"duration",t.target.value)}}}),a("span",[e._v("小时")])]),e._v(" "),a("br"),e._v(" "),a("div",{staticStyle:{"text-align":"left"}},[e._v("场景变异对象:\n        "),a("br"),e._v(" "),a("span",[e._v("环境要素")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Aenvironments,expression:"Aenvironments"}],attrs:{type:"checkbox",id:"a100",value:"100"},domProps:{checked:Array.isArray(e.Aenvironments)?e._i(e.Aenvironments,"100")>-1:e.Aenvironments},on:{change:function(t){var a=e.Aenvironments,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"100");i.checked?c<0&&(e.Aenvironments=a.concat(["100"])):c>-1&&(e.Aenvironments=a.slice(0,c).concat(a.slice(c+1)))}else e.Aenvironments=s}}}),e._v(" "),a("label",{attrs:{for:"天气"}},[e._v("天气")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Aenvironments,expression:"Aenvironments"}],attrs:{type:"checkbox",id:"a010",value:"10"},domProps:{checked:Array.isArray(e.Aenvironments)?e._i(e.Aenvironments,"10")>-1:e.Aenvironments},on:{change:function(t){var a=e.Aenvironments,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"10");i.checked?c<0&&(e.Aenvironments=a.concat(["10"])):c>-1&&(e.Aenvironments=a.slice(0,c).concat(a.slice(c+1)))}else e.Aenvironments=s}}}),e._v(" "),a("label",{attrs:{for:"时间"}},[e._v("时间")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Aenvironments,expression:"Aenvironments"}],attrs:{type:"checkbox",id:"a001",value:"1"},domProps:{checked:Array.isArray(e.Aenvironments)?e._i(e.Aenvironments,"1")>-1:e.Aenvironments},on:{change:function(t){var a=e.Aenvironments,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"1");i.checked?c<0&&(e.Aenvironments=a.concat(["1"])):c>-1&&(e.Aenvironments=a.slice(0,c).concat(a.slice(c+1)))}else e.Aenvironments=s}}}),e._v(" "),a("label",{attrs:{for:"道路表面"}},[e._v("道路表面")]),e._v(" "),a("br"),e._v(" "),a("span",[e._v("静态障碍物")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Astatic_obstacles,expression:"Astatic_obstacles"}],attrs:{type:"checkbox",id:"b100",value:"100"},domProps:{checked:Array.isArray(e.Astatic_obstacles)?e._i(e.Astatic_obstacles,"100")>-1:e.Astatic_obstacles},on:{change:function(t){var a=e.Astatic_obstacles,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"100");i.checked?c<0&&(e.Astatic_obstacles=a.concat(["100"])):c>-1&&(e.Astatic_obstacles=a.slice(0,c).concat(a.slice(c+1)))}else e.Astatic_obstacles=s}}}),e._v(" "),a("label",{attrs:{for:"行人"}},[e._v("行人")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Astatic_obstacles,expression:"Astatic_obstacles"}],attrs:{type:"checkbox",id:"b010",value:"10"},domProps:{checked:Array.isArray(e.Astatic_obstacles)?e._i(e.Astatic_obstacles,"10")>-1:e.Astatic_obstacles},on:{change:function(t){var a=e.Astatic_obstacles,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"10");i.checked?c<0&&(e.Astatic_obstacles=a.concat(["10"])):c>-1&&(e.Astatic_obstacles=a.slice(0,c).concat(a.slice(c+1)))}else e.Astatic_obstacles=s}}}),e._v(" "),a("label",{attrs:{for:"自行车"}},[e._v("自行车")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Astatic_obstacles,expression:"Astatic_obstacles"}],attrs:{type:"checkbox",id:"b001",value:"1"},domProps:{checked:Array.isArray(e.Astatic_obstacles)?e._i(e.Astatic_obstacles,"1")>-1:e.Astatic_obstacles},on:{change:function(t){var a=e.Astatic_obstacles,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"1");i.checked?c<0&&(e.Astatic_obstacles=a.concat(["1"])):c>-1&&(e.Astatic_obstacles=a.slice(0,c).concat(a.slice(c+1)))}else e.Astatic_obstacles=s}}}),e._v(" "),a("label",{attrs:{for:"路障"}},[e._v("路障")]),e._v(" "),a("br"),e._v(" "),a("span",[e._v("动态障碍物")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Adynamic_obstacles,expression:"Adynamic_obstacles"}],attrs:{type:"checkbox",id:"c10",value:"10"},domProps:{checked:Array.isArray(e.Adynamic_obstacles)?e._i(e.Adynamic_obstacles,"10")>-1:e.Adynamic_obstacles},on:{change:function(t){var a=e.Adynamic_obstacles,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"10");i.checked?c<0&&(e.Adynamic_obstacles=a.concat(["10"])):c>-1&&(e.Adynamic_obstacles=a.slice(0,c).concat(a.slice(c+1)))}else e.Adynamic_obstacles=s}}}),e._v(" "),a("label",{attrs:{for:"卡车"}},[e._v("卡车")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Adynamic_obstacles,expression:"Adynamic_obstacles"}],attrs:{type:"checkbox",id:"c01",value:"1"},domProps:{checked:Array.isArray(e.Adynamic_obstacles)?e._i(e.Adynamic_obstacles,"1")>-1:e.Adynamic_obstacles},on:{change:function(t){var a=e.Adynamic_obstacles,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"1");i.checked?c<0&&(e.Adynamic_obstacles=a.concat(["1"])):c>-1&&(e.Adynamic_obstacles=a.slice(0,c).concat(a.slice(c+1)))}else e.Adynamic_obstacles=s}}}),e._v(" "),a("label",{attrs:{for:"出租车"}},[e._v("出租车")]),e._v(" "),a("br"),e._v(" "),a("span",[e._v("交通设施")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Atraffic_facilities,expression:"Atraffic_facilities"}],attrs:{type:"checkbox",id:"d10",value:"10"},domProps:{checked:Array.isArray(e.Atraffic_facilities)?e._i(e.Atraffic_facilities,"10")>-1:e.Atraffic_facilities},on:{change:function(t){var a=e.Atraffic_facilities,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"10");i.checked?c<0&&(e.Atraffic_facilities=a.concat(["10"])):c>-1&&(e.Atraffic_facilities=a.slice(0,c).concat(a.slice(c+1)))}else e.Atraffic_facilities=s}}}),e._v(" "),a("label",{attrs:{for:"交通信号灯"}},[e._v("交通信号灯")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Atraffic_facilities,expression:"Atraffic_facilities"}],attrs:{type:"checkbox",id:"d01",value:"1"},domProps:{checked:Array.isArray(e.Atraffic_facilities)?e._i(e.Atraffic_facilities,"1")>-1:e.Atraffic_facilities},on:{change:function(t){var a=e.Atraffic_facilities,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"1");i.checked?c<0&&(e.Atraffic_facilities=a.concat(["1"])):c>-1&&(e.Atraffic_facilities=a.slice(0,c).concat(a.slice(c+1)))}else e.Atraffic_facilities=s}}}),e._v(" "),a("label",{attrs:{for:"交通标志"}},[e._v("交通标志")])]),e._v(" "),a("br"),e._v(" "),a("div",{staticStyle:{"text-align":"left"}},[e._v("目标事故类型:\n          "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Atarget_accidents,expression:"Atarget_accidents"}],attrs:{type:"checkbox",id:"e10",value:"10"},domProps:{checked:Array.isArray(e.Atarget_accidents)?e._i(e.Atarget_accidents,"10")>-1:e.Atarget_accidents},on:{change:function(t){var a=e.Atarget_accidents,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"10");i.checked?c<0&&(e.Atarget_accidents=a.concat(["10"])):c>-1&&(e.Atarget_accidents=a.slice(0,c).concat(a.slice(c+1)))}else e.Atarget_accidents=s}}}),e._v(" "),a("label",{attrs:{for:"碰撞"}},[e._v("碰撞")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Atarget_accidents,expression:"Atarget_accidents"}],attrs:{type:"checkbox",id:"e01",value:"1"},domProps:{checked:Array.isArray(e.Atarget_accidents)?e._i(e.Atarget_accidents,"1")>-1:e.Atarget_accidents},on:{change:function(t){var a=e.Atarget_accidents,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"1");i.checked?c<0&&(e.Atarget_accidents=a.concat(["1"])):c>-1&&(e.Atarget_accidents=a.slice(0,c).concat(a.slice(c+1)))}else e.Atarget_accidents=s}}}),e._v(" "),a("label",{attrs:{for:"驶出道路"}},[e._v("驶出道路")])]),e._v(" "),a("div",{staticStyle:{"text-align":"left"}},[e._v("场景评估策略:\n          "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Aevaluation_strategies,expression:"Aevaluation_strategies"}],attrs:{type:"checkbox",id:"f100",value:"100"},domProps:{checked:Array.isArray(e.Aevaluation_strategies)?e._i(e.Aevaluation_strategies,"100")>-1:e.Aevaluation_strategies},on:{change:function(t){var a=e.Aevaluation_strategies,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"100");i.checked?c<0&&(e.Aevaluation_strategies=a.concat(["100"])):c>-1&&(e.Aevaluation_strategies=a.slice(0,c).concat(a.slice(c+1)))}else e.Aevaluation_strategies=s}}}),e._v(" "),a("label",{attrs:{for:"场景多样性"}},[e._v("场景多样性")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Aevaluation_strategies,expression:"Aevaluation_strategies"}],attrs:{type:"checkbox",id:"f010",value:"10"},domProps:{checked:Array.isArray(e.Aevaluation_strategies)?e._i(e.Aevaluation_strategies,"10")>-1:e.Aevaluation_strategies},on:{change:function(t){var a=e.Aevaluation_strategies,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"10");i.checked?c<0&&(e.Aevaluation_strategies=a.concat(["10"])):c>-1&&(e.Aevaluation_strategies=a.slice(0,c).concat(a.slice(c+1)))}else e.Aevaluation_strategies=s}}}),e._v(" "),a("label",{attrs:{for:"与周围车辆的安全距离"}},[e._v("与周围车辆的安全距离")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Aevaluation_strategies,expression:"Aevaluation_strategies"}],attrs:{type:"checkbox",id:"f001",value:"1"},domProps:{checked:Array.isArray(e.Aevaluation_strategies)?e._i(e.Aevaluation_strategies,"1")>-1:e.Aevaluation_strategies},on:{change:function(t){var a=e.Aevaluation_strategies,i=t.target,s=!!i.checked;if(Array.isArray(a)){var c=e._i(a,"1");i.checked?c<0&&(e.Aevaluation_strategies=a.concat(["1"])):c>-1&&(e.Aevaluation_strategies=a.slice(0,c).concat(a.slice(c+1)))}else e.Aevaluation_strategies=s}}}),e._v(" "),a("label",{attrs:{for:"规划路径的偏移"}},[e._v("规划路径的偏移")])]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取  消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("启动测试")])],1)])],1),e._v(" "),a("div",{staticClass:"tests-area"},[a("h1",[e._v(" 当前运行 ")]),e._v(" "),a("el-card",{staticStyle:{"text-align":"left",width:"98%"}},e._l(e.tests1,function(t){return a("div",{key:t.id},[a("div",{staticStyle:{float:"left",width:"85%",height:"50px"}},[a("router-link",{staticClass:"detail-link",attrs:{to:{path:"/test/testDetails"}}},[a("span",{staticStyle:{"font-size":"20px"}},[a("strong",[e._v(" ID:"+e._s(t.id)+" ")])])]),e._v(" "),a("span",[e._v(" Target:"+e._s(t.system.type)+" ")]),e._v(" "),a("span",[e._v(" "+e._s(t.date)+" ")])],1)])}),0),e._v(" "),a("h1",[e._v(" 等待运行 ")]),e._v(" "),a("div",[a("el-row",e._l(e.tests0,function(t){return a("el-col",{key:t.id,attrs:{span:8}},[a("el-card",{staticStyle:{"text-align":"left",width:"94%",height:"70%"}},[a("div",{staticStyle:{float:"left",width:"85%",height:"100px"}},[a("div",[a("span",{staticStyle:{"font-size":"20px"}},[a("strong",[e._v(" ID:"+e._s(t.id)+" ")])])]),e._v(" "),a("div",[a("span",[e._v(" Target:"+e._s(t.system.type)+" ")])]),e._v(" "),a("div",[a("span",[e._v(" "+e._s(t.date)+" ")])])])])],1)}),1)],1),e._v(" "),a("h1",[e._v(" 运行结束 ")]),e._v(" "),a("div",[a("el-row",e._l(e.tests2,function(t){return a("el-col",{key:t.id,attrs:{span:8}},[a("el-card",{staticStyle:{"text-align":"left",width:"94%",height:"70%"}},[a("div",{staticStyle:{float:"left",width:"85%",height:"100px"}},[a("div",[a("router-link",{staticClass:"detail-link",attrs:{to:{path:"test/testResult",query:{id:t.id}}}},[a("span",{staticStyle:{"font-size":"20px"}},[a("strong",[e._v("ID:"+e._s(t.id))])])])],1),e._v(" "),a("div",[a("span",[e._v(" Target:"+e._s(t.system.type)+" ")])]),e._v(" "),a("div",[a("span",[e._v(" "+e._s(t.date)+" ")])])])])],1)}),1)],1)],1)])},staticRenderFns:[]};var r=a("VU/8")(s,c,!1,function(e){a("mEiH")},"data-v-99c6cce6",null);t.default=r.exports},fZ17:function(e,t){},mEiH:function(e,t){}});
//# sourceMappingURL=3.18470cf23d88a48482d7.js.map