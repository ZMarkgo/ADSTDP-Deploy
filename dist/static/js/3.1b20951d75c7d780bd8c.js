webpackJsonp([3],{"8bZy":function(e,t){},"f/As":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-upload",{ref:"upload",staticClass:"scenario-upload",attrs:{action:"http://10.176.36.38:8443/api/scenarios/upload",accept:"application/json","before-remove":e.beforeRemove,"on-success":e.handleSuccess,multiple:"",limit:1,"on-exceed":e.handleExceed,"file-list":e.fileList,"before-upload":e.beforeUpload,"auto-upload":!1}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("上传")]),e._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传json文件")])],1)},staticRenderFns:[]};var r={name:"Tests",components:{ScenarioUpload:i("VU/8")({name:"ScenarioUpload",data:function(){return{fileList:[],filePath:""}},methods:{handleExceed:function(e,t){var i="当前限制选择1个文件，本次选择了"+e.length+"个文件";e.length+t.length>=2&&(i=i+"，共选择了"+(e.length+t.length)+"个文件"),this.$alert(i,"提示",{confirmButtonText:"确定"})},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")},clear:function(){this.$refs.upload.clearFiles()},beforeUpload:function(e){var t="application/json"===e.type,i=e.size/1024/1024<5;return t||this.$alert("上传失败，仅支持上传json文件，请重新选择json格式的文件并上传！","提示",{confirmButtonText:"确定"}),i||this.$alert("上传失败，上传的文件大小不能超过5MB！","提示",{confirmButtonText:"确定"}),t&&i},submitUpload:function(){this.$refs.upload.submit()},handleSuccess:function(e){e&&200===e.code?(this.filePath=e.result,this.$alert("上传成功，请继续选择其他测试信息","提示",{confirmButtonText:"确定"}),this.$emit("onUpload")):(this.$alert(e.message,"提示",{confirmButtonText:"确定"}),this.$refs.upload.uploadFiles.pop())}}},a,!1,function(e){i("v7kY")},"data-v-75ed9eb2",null).exports},data:function(){return{tests1:[],tests0:[],tests2:[],dialogFormVisible:!1,scenario_upload_visible:!1,scenario_select_visible:!1,pedestrian_number_visible:!1,motor_vehicles_number_visible:!1,bicycles_number_visible:!1,roadblock_number_visible:!1,scenario_name:"",Aenvironments:[],Apedestrian:[],Amotor_vehicles:[],Atarget_accidents:[],Aevaluation_strategies:[],Abicycles:[],Aroadblock:"",form:{duration:"",ego:{id:"",type:""},state:{id:"1",type:""},system:{id:"",type:""},initialScenario:{id:"",type:""},initial_scenario_path:"",environments:{id:"",type:""},pedestrian:{id:"",type:""},roadblock:{id:"",type:""},motorVehicles:{id:"",type:""},bicycles:{id:"",type:""},trafficFacilities:{id:"",type:""},targetAccidents:{id:"",type:""},evaluationStrategies:{id:"",type:""},maxPedestrian:0,minPedestrian:0,maxRoadblock:0,minRoadblock:0,maxMotorVehicles:0,minMotorVehicles:0,maxBicycles:0,minBicycles:0}}},mounted:function(){this.loadTestcases1(),this.loadTestcases0(),this.loadTestcases2()},methods:{loadTestcases1:function(){var e=this;this.$axios.get("/testcases/state/2").then(function(t){t&&200===t.data.code&&(e.tests1=t.data.result)})},loadTestcases0:function(){var e=this;this.$axios.get("/testcases/state/1").then(function(t){t&&200===t.data.code&&(e.tests0=t.data.result)})},loadTestcases2:function(){var e=this;this.$axios.get("/testcases/state/3").then(function(t){t&&200===t.data.code&&(e.tests2=t.data.result)})},handleShowNum:function(e){1===e?this.pedestrian_number_visible=!0:3===e?this.motor_vehicles_number_visible=!0:4===e?this.bicycles_number_visible=!0:2===e&&(this.roadblock_number_visible=!0)},handleScenarioSelect:function(e){1==e&&(this.scenario_select_visible=!0,this.scenario_upload_visible=!1),2==e&&(this.scenario_select_visible=!1,this.scenario_upload_visible=!0)},handleScenarioSelectFromLibrary:function(){var e=this,t=this;""===this.scenario_name?this.$alert("请输入场景库中具体的场景名称","提示",{confirmButtonText:"确定"}):this.$axios.get("/scenarios/searchbyname/"+this.scenario_name).then(function(i){i&&200===i.data.code?(t.form.initial_scenario_path=i.data.result,e.$alert("已找到该场景，请继续选择其他测试信息","提示",{confirmButtonText:"确定"})):(t.form.initial_scenario_path="",e.$alert(i.data.message,"提示",{confirmButtonText:"确定"}))})},uploadScenario:function(){this.form.initial_scenario_path=this.$refs.scenarioUpload.filePath},clear:function(){this.scenario_select_visible=!1,this.scenario_upload_visible=!1,this.pedestrian_number_visible=!1,this.motor_vehicles_number_visible=!1,this.bicycles_number_visible=!1,this.roadblock_number_visible=!1,this.Aenvironments=[],this.Apedestrian=[],this.Amotor_vehicles=[],this.Abicycles=[],this.Atarget_accidents=[],this.Aevaluation_strategies=[],this.Aroadblock="",this.form={duration:"",ego:{id:"",type:""},system:{id:"",type:""},initialScenario:{id:"",type:""},initial_scenario_path:"",environments:{id:"",type:""},pedestrian:{id:"",type:""},roadblock:{id:"",type:""},motorVehicles:{id:"",type:""},bicycles:{id:"",type:""},trafficFacilities:{id:"",type:""},targetAccidents:{id:"",type:""},evaluationStrategies:{id:"",type:""},maxPedestrian:0,minPedestrian:0,maxRoadblock:0,minRoadblock:0,maxMotorVehicles:0,minMotorVehicles:0,maxBicycles:0,minBicycles:0}},onSubmit:function(){var e=this;if(""===this.form.initial_scenario_path)this.$alert("请选择初始场景！如果您选择从本地上传场景，您可能没有点击上传按钮。","提示",{confirmButtonText:"确定"});else{for(var t,i=(new Date).toLocaleDateString(),a=0,r=0,s=0,o=0,n=0,c=0,l=0;l<this.Aenvironments.length;l++)a+=Number(this.Aenvironments[l]);for(var d=0;d<this.Apedestrian.length;d++)r+=Number(this.Apedestrian[d]);for(var v=0;v<this.Amotor_vehicles.length;v++)s+=Number(this.Amotor_vehicles[v]);for(var m=0;m<this.Abicycles.length;m++)c+=Number(this.Abicycles[m]);for(var _=0;_<this.Atarget_accidents.length;_++)o+=Number(this.Atarget_accidents[_]);for(var u=0;u<this.Aevaluation_strategies.length;u++)n+=Number(this.Aevaluation_strategies[u]);t=Number(this.Aroadblock),this.form.environments.id=a,this.form.pedestrian.id=r,this.form.motorVehicles.id=s,this.form.targetAccidents.id=o,this.form.evaluationStrategies.id=n,this.form.bicycles.id=c,this.form.roadblock.id=t,this.$axios.post("/edit/testcases",{date:i,duration:this.form.duration,ego:this.form.ego,state:this.form.state,system:this.form.system,initialScenario:this.form.initialScenario,initialScenarioPath:this.form.initial_scenario_path,environments:this.form.environments,pedestrian:this.form.pedestrian,roadblock:this.form.roadblock,motorVehicles:this.form.motorVehicles,bicycles:this.form.bicycles,trafficFacilities:this.form.trafficFacilities,targetAccidents:this.form.targetAccidents,evaluationStrategies:this.form.evaluationStrategies,maxPedestrian:this.form.maxPedestrian,minPedestrian:this.form.minPedestrian,maxRoadblock:this.form.maxRoadblock,minRoadblock:this.form.minRoadblock,maxMotorVehicles:this.form.maxMotorVehicles,minMotorVehicles:this.form.minMotorVehicles,maxBicycles:this.form.maxBicycles,minBicycles:this.form.minBicycles}).then(function(t){t&&200===t.data.code&&(e.dialogFormVisible=!1,e.$router.go(0))})}},startTest:function(e){var t=this;console.log("调用脚本中..."),this.$axios.post("/callscript/starttest",{id:e}).then(function(e){200===e.data.code?t.$alert(e.data.message,"提示",{confirmButtonText:"确定调用成功"}):t.$alert(e.data.message,"提示",{confirmButtonText:"确定调用失败"})}).catch(function(e){console.log(e)})}}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"margin-top":"40px"}},[i("div",{staticClass:"TestStarter"},[i("el-button",{ref:"testStarter",staticClass:"starter",on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("新建")]),e._v(" "),i("el-dialog",{attrs:{title:"请设置您需要的测试信息",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.clear}},[i("div",{staticStyle:{"text-align":"left"}},[e._v("目标系统:\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.system.id,expression:"form.system.id"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.form.system.id,"1")},on:{change:function(t){return e.$set(e.form.system,"id","1")}}}),e._v(" "),i("label",{attrs:{for:"Apollo"}},[e._v("Apollo")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.system.id,expression:"form.system.id"}],attrs:{type:"radio",value:"2"},domProps:{checked:e._q(e.form.system.id,"2")},on:{change:function(t){return e.$set(e.form.system,"id","2")}}}),e._v(" "),i("label",{attrs:{for:"Autoware"}},[e._v("Autoware")])]),e._v(" "),i("div",{staticStyle:{"text-align":"left"}},[e._v("初始场景选取:\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.initialScenario.id,expression:"form.initialScenario.id"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.form.initialScenario.id,"1")},on:{change:[function(t){return e.$set(e.form.initialScenario,"id","1")},function(t){return e.handleScenarioSelect(e.form.initialScenario.id)}]}}),e._v(" "),i("label",{attrs:{for:"从场景库选取"}},[e._v("从场景库选取")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.initialScenario.id,expression:"form.initialScenario.id"}],attrs:{type:"radio",value:"2"},domProps:{checked:e._q(e.form.initialScenario.id,"2")},on:{change:[function(t){return e.$set(e.form.initialScenario,"id","2")},function(t){return e.handleScenarioSelect(e.form.initialScenario.id)}]}}),e._v(" "),i("label",{attrs:{for:"本地上传"}},[e._v("本地上传")]),e._v(" "),i("scenario-upload",{directives:[{name:"show",rawName:"v-show",value:e.scenario_upload_visible,expression:"scenario_upload_visible"}],ref:"scenarioUpload",on:{onUpload:e.uploadScenario}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.scenario_select_visible,expression:"scenario_select_visible"}],staticClass:"scenario-select"},[e._v("\n            请输入场景名称： "),i("el-input",{model:{value:e.scenario_name,callback:function(t){e.scenario_name=t},expression:"scenario_name"}}),e._v(" "),i("el-button",{on:{click:e.handleScenarioSelectFromLibrary}},[e._v("检索场景")])],1)],1),e._v(" "),i("div",{staticStyle:{"text-align":"left"}},[e._v("场景测试时长:\n        "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.duration,expression:"form.duration"}],attrs:{placeholder:"Please enter a number"},domProps:{value:e.form.duration},on:{input:function(t){t.target.composing||e.$set(e.form,"duration",t.target.value)}}}),i("span",[e._v("小时")])]),e._v(" "),i("br"),e._v(" "),i("div",{staticStyle:{"text-align":"left"}},[e._v("场景变异对象:\n        "),i("br"),e._v(" "),i("span",[e._v("环境要素")]),i("br"),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Aenvironments,expression:"Aenvironments"}],attrs:{type:"checkbox",id:"a100",value:"100"},domProps:{checked:Array.isArray(e.Aenvironments)?e._i(e.Aenvironments,"100")>-1:e.Aenvironments},on:{change:function(t){var i=e.Aenvironments,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"100");a.checked?s<0&&(e.Aenvironments=i.concat(["100"])):s>-1&&(e.Aenvironments=i.slice(0,s).concat(i.slice(s+1)))}else e.Aenvironments=r}}}),e._v(" "),i("label",{attrs:{for:"天气"}},[e._v("天气")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Aenvironments,expression:"Aenvironments"}],attrs:{type:"checkbox",id:"a010",value:"10"},domProps:{checked:Array.isArray(e.Aenvironments)?e._i(e.Aenvironments,"10")>-1:e.Aenvironments},on:{change:function(t){var i=e.Aenvironments,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"10");a.checked?s<0&&(e.Aenvironments=i.concat(["10"])):s>-1&&(e.Aenvironments=i.slice(0,s).concat(i.slice(s+1)))}else e.Aenvironments=r}}}),e._v(" "),i("label",{attrs:{for:"时间"}},[e._v("时间")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Aenvironments,expression:"Aenvironments"}],attrs:{type:"checkbox",id:"a001",value:"1"},domProps:{checked:Array.isArray(e.Aenvironments)?e._i(e.Aenvironments,"1")>-1:e.Aenvironments},on:{change:function(t){var i=e.Aenvironments,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"1");a.checked?s<0&&(e.Aenvironments=i.concat(["1"])):s>-1&&(e.Aenvironments=i.slice(0,s).concat(i.slice(s+1)))}else e.Aenvironments=r}}}),e._v(" "),i("label",{attrs:{for:"道路表面"}},[e._v("道路表面")]),e._v(" "),i("br"),e._v(" "),i("span",[e._v("静态障碍物")]),i("br"),e._v(" "),i("span",[e._v("行人:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Apedestrian,expression:"Apedestrian"}],attrs:{type:"checkbox",value:"1000"},domProps:{checked:Array.isArray(e.Apedestrian)?e._i(e.Apedestrian,"1000")>-1:e.Apedestrian},on:{change:[function(t){var i=e.Apedestrian,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"1000");a.checked?s<0&&(e.Apedestrian=i.concat(["1000"])):s>-1&&(e.Apedestrian=i.slice(0,s).concat(i.slice(s+1)))}else e.Apedestrian=r},function(t){return e.handleShowNum(1)}]}}),e._v(" "),i("label",{attrs:{for:"增减行人数量"}},[e._v("增减行人数量")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Apedestrian,expression:"Apedestrian"}],attrs:{type:"checkbox",value:"0100"},domProps:{checked:Array.isArray(e.Apedestrian)?e._i(e.Apedestrian,"0100")>-1:e.Apedestrian},on:{change:function(t){var i=e.Apedestrian,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"0100");a.checked?s<0&&(e.Apedestrian=i.concat(["0100"])):s>-1&&(e.Apedestrian=i.slice(0,s).concat(i.slice(s+1)))}else e.Apedestrian=r}}}),e._v(" "),i("label",{attrs:{for:"行人类型"}},[e._v("行人类型")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Apedestrian,expression:"Apedestrian"}],attrs:{type:"checkbox",value:"0010"},domProps:{checked:Array.isArray(e.Apedestrian)?e._i(e.Apedestrian,"0010")>-1:e.Apedestrian},on:{change:function(t){var i=e.Apedestrian,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"0010");a.checked?s<0&&(e.Apedestrian=i.concat(["0010"])):s>-1&&(e.Apedestrian=i.slice(0,s).concat(i.slice(s+1)))}else e.Apedestrian=r}}}),e._v(" "),i("label",{attrs:{for:"行人速度"}},[e._v("行人速度")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Apedestrian,expression:"Apedestrian"}],attrs:{type:"checkbox",value:"0001"},domProps:{checked:Array.isArray(e.Apedestrian)?e._i(e.Apedestrian,"0001")>-1:e.Apedestrian},on:{change:function(t){var i=e.Apedestrian,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"0001");a.checked?s<0&&(e.Apedestrian=i.concat(["0001"])):s>-1&&(e.Apedestrian=i.slice(0,s).concat(i.slice(s+1)))}else e.Apedestrian=r}}}),e._v(" "),i("label",{attrs:{for:"是否允许横穿马路"}},[e._v("是否允许横穿马路")]),e._v(" "),i("br"),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.pedestrian_number_visible,expression:"pedestrian_number_visible"}]},[i("span",[e._v("请填写行人最大数量: ")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.maxPedestrian,expression:"form.maxPedestrian"}],attrs:{type:"number",min:"0"},domProps:{value:e.form.maxPedestrian},on:{input:function(t){t.target.composing||e.$set(e.form,"maxPedestrian",t.target.value)}}}),e._v(" "),i("br"),e._v(" "),i("span",[e._v("请填写行人最小数量: ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.minPedestrian,expression:"form.minPedestrian"}],attrs:{type:"number",min:"0"},domProps:{value:e.form.minPedestrian},on:{input:function(t){t.target.composing||e.$set(e.form,"minPedestrian",t.target.value)}}})]),e._v(" "),i("span",[e._v("路障:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Aroadblock,expression:"Aroadblock"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.Aroadblock)?e._i(e.Aroadblock,"1")>-1:e.Aroadblock},on:{change:[function(t){var i=e.Aroadblock,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"1");a.checked?s<0&&(e.Aroadblock=i.concat(["1"])):s>-1&&(e.Aroadblock=i.slice(0,s).concat(i.slice(s+1)))}else e.Aroadblock=r},function(t){return e.handleShowNum(2)}]}}),e._v(" "),i("label",{attrs:{for:"增减路障数量"}},[e._v("增减路障数量")]),e._v(" "),i("br"),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.roadblock_number_visible,expression:"roadblock_number_visible"}]},[i("span",[e._v("请填写路障最大数量: ")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.maxRoadblock,expression:"form.maxRoadblock"}],attrs:{type:"number",min:"0"},domProps:{value:e.form.maxRoadblock},on:{input:function(t){t.target.composing||e.$set(e.form,"maxRoadblock",t.target.value)}}}),e._v(" "),i("br"),e._v(" "),i("span",[e._v("请填写路障最小数量: ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.minRoadblock,expression:"form.minRoadblock"}],attrs:{type:"number",min:"0"},domProps:{value:e.form.minRoadblock},on:{input:function(t){t.target.composing||e.$set(e.form,"minRoadblock",t.target.value)}}})]),e._v(" "),i("span",[e._v("动态障碍物")]),i("br"),e._v(" "),i("span",[e._v("机动车:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Amotor_vehicles,expression:"Amotor_vehicles"}],attrs:{type:"checkbox",value:"100"},domProps:{checked:Array.isArray(e.Amotor_vehicles)?e._i(e.Amotor_vehicles,"100")>-1:e.Amotor_vehicles},on:{change:[function(t){var i=e.Amotor_vehicles,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"100");a.checked?s<0&&(e.Amotor_vehicles=i.concat(["100"])):s>-1&&(e.Amotor_vehicles=i.slice(0,s).concat(i.slice(s+1)))}else e.Amotor_vehicles=r},function(t){return e.handleShowNum(3)}]}}),e._v(" "),i("label",{attrs:{for:"增减机动车数量"}},[e._v("增减机动车数量")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Amotor_vehicles,expression:"Amotor_vehicles"}],attrs:{type:"checkbox",value:"010"},domProps:{checked:Array.isArray(e.Amotor_vehicles)?e._i(e.Amotor_vehicles,"010")>-1:e.Amotor_vehicles},on:{change:function(t){var i=e.Amotor_vehicles,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"010");a.checked?s<0&&(e.Amotor_vehicles=i.concat(["010"])):s>-1&&(e.Amotor_vehicles=i.slice(0,s).concat(i.slice(s+1)))}else e.Amotor_vehicles=r}}}),e._v(" "),i("label",{attrs:{for:"机动车类型及颜色"}},[e._v("机动车类型及颜色")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Amotor_vehicles,expression:"Amotor_vehicles"}],attrs:{type:"checkbox",value:"001"},domProps:{checked:Array.isArray(e.Amotor_vehicles)?e._i(e.Amotor_vehicles,"001")>-1:e.Amotor_vehicles},on:{change:function(t){var i=e.Amotor_vehicles,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"001");a.checked?s<0&&(e.Amotor_vehicles=i.concat(["001"])):s>-1&&(e.Amotor_vehicles=i.slice(0,s).concat(i.slice(s+1)))}else e.Amotor_vehicles=r}}}),e._v(" "),i("label",{attrs:{for:"机动车速度"}},[e._v("机动车速度")]),e._v(" "),i("br"),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.motor_vehicles_number_visible,expression:"motor_vehicles_number_visible"}]},[i("span",[e._v("请填写机动车最大数量: ")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.maxMotorVehicles,expression:"form.maxMotorVehicles"}],attrs:{type:"number",min:"0"},domProps:{value:e.form.maxMotorVehicles},on:{input:function(t){t.target.composing||e.$set(e.form,"maxMotorVehicles",t.target.value)}}}),e._v(" "),i("br"),e._v(" "),i("span",[e._v("请填写机动车最小数量: ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.minMotorVehicles,expression:"form.minMotorVehicles"}],attrs:{type:"number",min:"0"},domProps:{value:e.form.minMotorVehicles},on:{input:function(t){t.target.composing||e.$set(e.form,"minMotorVehicles",t.target.value)}}})]),e._v(" "),i("span",[e._v("自行车:")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Abicycles,expression:"Abicycles"}],attrs:{type:"checkbox",value:"10"},domProps:{checked:Array.isArray(e.Abicycles)?e._i(e.Abicycles,"10")>-1:e.Abicycles},on:{change:[function(t){var i=e.Abicycles,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"10");a.checked?s<0&&(e.Abicycles=i.concat(["10"])):s>-1&&(e.Abicycles=i.slice(0,s).concat(i.slice(s+1)))}else e.Abicycles=r},function(t){return e.handleShowNum(4)}]}}),e._v(" "),i("label",{attrs:{for:"增减自行车数量"}},[e._v("增减自行车数量")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Abicycles,expression:"Abicycles"}],attrs:{type:"checkbox",value:"01"},domProps:{checked:Array.isArray(e.Abicycles)?e._i(e.Abicycles,"01")>-1:e.Abicycles},on:{change:function(t){var i=e.Abicycles,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"01");a.checked?s<0&&(e.Abicycles=i.concat(["01"])):s>-1&&(e.Abicycles=i.slice(0,s).concat(i.slice(s+1)))}else e.Abicycles=r}}}),e._v(" "),i("label",{attrs:{for:"自行车速度"}},[e._v("自行车速度")]),e._v(" "),i("br"),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.bicycles_number_visible,expression:"bicycles_number_visible"}]},[i("span",[e._v("请填写自行车最大数量: ")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.maxBicycles,expression:"form.maxBicycles"}],attrs:{type:"number",min:"0"},domProps:{value:e.form.maxBicycles},on:{input:function(t){t.target.composing||e.$set(e.form,"maxBicycles",t.target.value)}}}),e._v(" "),i("br"),e._v(" "),i("span",[e._v("请填写自行车最小数量: ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.minBicycles,expression:"form.minBicycles"}],attrs:{type:"number",min:"0"},domProps:{value:e.form.minBicycles},on:{input:function(t){t.target.composing||e.$set(e.form,"minBicycles",t.target.value)}}})]),e._v(" "),i("span",[e._v("EGO")]),i("br"),i("span",[e._v("是否包含EGO的目的地")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.ego.id,expression:"form.ego.id"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.form.ego.id,"1")},on:{change:function(t){return e.$set(e.form.ego,"id","1")}}}),e._v(" "),i("label",{attrs:{for:"是"}},[e._v("是")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.ego.id,expression:"form.ego.id"}],attrs:{type:"radio",value:"2"},domProps:{checked:e._q(e.form.ego.id,"2")},on:{change:function(t){return e.$set(e.form.ego,"id","2")}}}),e._v(" "),i("label",{attrs:{for:"否"}},[e._v("否")]),e._v(" "),i("br"),e._v(" "),i("span",[e._v("交通设施")]),i("br"),i("span",[e._v("是否包含交通信号灯")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.trafficFacilities.id,expression:"form.trafficFacilities.id"}],attrs:{type:"radio",id:"d1",value:"1"},domProps:{checked:e._q(e.form.trafficFacilities.id,"1")},on:{change:function(t){return e.$set(e.form.trafficFacilities,"id","1")}}}),e._v(" "),i("label",{attrs:{for:"是"}},[e._v("是")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.trafficFacilities.id,expression:"form.trafficFacilities.id"}],attrs:{type:"radio",id:"d2",value:"2"},domProps:{checked:e._q(e.form.trafficFacilities.id,"2")},on:{change:function(t){return e.$set(e.form.trafficFacilities,"id","2")}}}),e._v(" "),i("label",{attrs:{for:"否"}},[e._v("否")])]),e._v(" "),i("br"),e._v(" "),i("div",{staticStyle:{"text-align":"left"}},[e._v("目标事故类型:\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Atarget_accidents,expression:"Atarget_accidents"}],attrs:{type:"checkbox",id:"e10",value:"10"},domProps:{checked:Array.isArray(e.Atarget_accidents)?e._i(e.Atarget_accidents,"10")>-1:e.Atarget_accidents},on:{change:function(t){var i=e.Atarget_accidents,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"10");a.checked?s<0&&(e.Atarget_accidents=i.concat(["10"])):s>-1&&(e.Atarget_accidents=i.slice(0,s).concat(i.slice(s+1)))}else e.Atarget_accidents=r}}}),e._v(" "),i("label",{attrs:{for:"碰撞"}},[e._v("碰撞")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Atarget_accidents,expression:"Atarget_accidents"}],attrs:{type:"checkbox",id:"e01",value:"1"},domProps:{checked:Array.isArray(e.Atarget_accidents)?e._i(e.Atarget_accidents,"1")>-1:e.Atarget_accidents},on:{change:function(t){var i=e.Atarget_accidents,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"1");a.checked?s<0&&(e.Atarget_accidents=i.concat(["1"])):s>-1&&(e.Atarget_accidents=i.slice(0,s).concat(i.slice(s+1)))}else e.Atarget_accidents=r}}}),e._v(" "),i("label",{attrs:{for:"驶出道路"}},[e._v("驶出道路")])]),e._v(" "),i("div",{staticStyle:{"text-align":"left"}},[e._v("场景评估策略:\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Aevaluation_strategies,expression:"Aevaluation_strategies"}],attrs:{type:"checkbox",id:"f100",value:"100"},domProps:{checked:Array.isArray(e.Aevaluation_strategies)?e._i(e.Aevaluation_strategies,"100")>-1:e.Aevaluation_strategies},on:{change:function(t){var i=e.Aevaluation_strategies,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"100");a.checked?s<0&&(e.Aevaluation_strategies=i.concat(["100"])):s>-1&&(e.Aevaluation_strategies=i.slice(0,s).concat(i.slice(s+1)))}else e.Aevaluation_strategies=r}}}),e._v(" "),i("label",{attrs:{for:"场景多样性"}},[e._v("场景多样性")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Aevaluation_strategies,expression:"Aevaluation_strategies"}],attrs:{type:"checkbox",id:"f010",value:"10"},domProps:{checked:Array.isArray(e.Aevaluation_strategies)?e._i(e.Aevaluation_strategies,"10")>-1:e.Aevaluation_strategies},on:{change:function(t){var i=e.Aevaluation_strategies,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"10");a.checked?s<0&&(e.Aevaluation_strategies=i.concat(["10"])):s>-1&&(e.Aevaluation_strategies=i.slice(0,s).concat(i.slice(s+1)))}else e.Aevaluation_strategies=r}}}),e._v(" "),i("label",{attrs:{for:"与周围车辆的安全距离"}},[e._v("与周围车辆的安全距离")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Aevaluation_strategies,expression:"Aevaluation_strategies"}],attrs:{type:"checkbox",id:"f001",value:"1"},domProps:{checked:Array.isArray(e.Aevaluation_strategies)?e._i(e.Aevaluation_strategies,"1")>-1:e.Aevaluation_strategies},on:{change:function(t){var i=e.Aevaluation_strategies,a=t.target,r=!!a.checked;if(Array.isArray(i)){var s=e._i(i,"1");a.checked?s<0&&(e.Aevaluation_strategies=i.concat(["1"])):s>-1&&(e.Aevaluation_strategies=i.slice(0,s).concat(i.slice(s+1)))}else e.Aevaluation_strategies=r}}}),e._v(" "),i("label",{attrs:{for:"规划路径的偏移"}},[e._v("规划路径的偏移")])]),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取  消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("添加测试")])],1)])],1),e._v(" "),i("div",{staticClass:"tests-area"},[i("h1",[e._v(" 当前运行 ")]),e._v(" "),i("el-card",{staticStyle:{"text-align":"left",width:"98%"}},e._l(e.tests1,function(t){return i("div",{key:t.id},[i("div",{staticStyle:{float:"left",width:"85%",height:"50px"}},[i("router-link",{staticClass:"detail-link",attrs:{to:{path:"test/testDetails",query:{id:t.id}}}},[i("span",{staticStyle:{"font-size":"20px"}},[i("strong",[e._v(" ID:"+e._s(t.id)+" ")])])]),e._v(" "),i("span",[e._v(" Target:"+e._s(t.system.type)+" ")]),e._v(" "),i("span",[e._v(" "+e._s(t.date)+" ")])],1)])}),0),e._v(" "),i("h1",[e._v(" 等待运行 ")]),e._v(" "),i("div",[i("el-row",e._l(e.tests0,function(t){return i("el-col",{key:t.id,attrs:{span:8}},[i("el-card",{staticStyle:{"text-align":"left",width:"94%",height:"70%"}},[i("div",{staticStyle:{float:"left",width:"85%",height:"100px",display:"flex","flex-direction":"row"}},[i("div",[i("div",[i("span",{staticStyle:{"font-size":"20px"}},[i("strong",[e._v(" ID:"+e._s(t.id)+" ")])])]),e._v(" "),i("div",[i("span",[e._v(" Target:"+e._s(t.system.type)+" ")])]),e._v(" "),i("div",[i("span",[e._v(" "+e._s(t.date)+" ")])])]),e._v(" "),i("el-button",{staticStyle:{"margin-left":"40px",width:"100px",height:"50px"},on:{click:function(i){return e.startTest(t.id)}}},[e._v("启动测试")])],1)])],1)}),1)],1),e._v(" "),i("h1",[e._v(" 运行结束 ")]),e._v(" "),i("div",[i("el-row",e._l(e.tests2,function(t){return i("el-col",{key:t.id,attrs:{span:8}},[i("el-card",{staticStyle:{"text-align":"left",width:"94%",height:"70%"}},[i("div",{staticStyle:{float:"left",width:"85%",height:"100px"}},[i("div",[i("router-link",{staticClass:"detail-link",attrs:{to:{path:"test/testResult",query:{id:t.id}}}},[i("span",{staticStyle:{"font-size":"20px"}},[i("strong",[e._v("ID:"+e._s(t.id))])])])],1),e._v(" "),i("div",[i("span",[e._v(" Target:"+e._s(t.system.type)+" ")])]),e._v(" "),i("div",[i("span",[e._v(" "+e._s(t.date)+" ")])])])])],1)}),1)],1)],1)])},staticRenderFns:[]};var o=i("VU/8")(r,s,!1,function(e){i("8bZy")},"data-v-a35e8124",null);t.default=o.exports},v7kY:function(e,t){}});
//# sourceMappingURL=3.1b20951d75c7d780bd8c.js.map