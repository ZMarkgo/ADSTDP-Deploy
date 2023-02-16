webpackJsonp([0],{"54xU":function(e,t){},Rx7W:function(e,t){},aWud:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"TestStarter",data:function(){return{Aenvironments:[],Astatic_obstacles:[],Adynamic_obstacles:[],Atraffic_facilities:[],Atarget_accidents:[],Aevaluation_strategies:[],form:{duration:"",stateid:"",systemid:"",initialscenario:{id:"",type:""},environments:{id:"",type:""},staticobstacles:{id:"",type:""},dynamicobstacles:{id:"",type:""},trafficfacilities:{id:"",type:""},targetaccidents:{id:"",type:""},evaluationstrategies:{id:"",type:""}}}},methods:{handleStart:function(){for(var e=this,t=(new Date).toLocaleDateString(),a=0,i=0,s=0,r=0,c=0,n=0,o=0;o<this.Aenvironments.length;o++)a+=Number(this.Aenvironments[o]);for(var l=0;l<this.Astatic_obstacles.length;l++)i+=Number(this.Astatic_obstacles[l]);for(var v=0;v<this.Adynamic_obstacles.length;v++)s+=Number(this.Adynamic_obstacles[v]);for(var d=0;d<this.Atraffic_facilities.length;d++)r+=Number(this.Atraffic_facilities[d]);for(var _=0;_<this.Atarget_accidents.length;_++)c+=Number(this.Atarget_accidents[_]);for(var A=0;A<this.Aevaluation_strategies.length;A++)n+=Number(this.Aevaluation_strategies[A]);this.form.environments.id=a,this.form.staticobstacles.id=i,this.form.dynamicobstacles.id=s,this.form.trafficfacilities.id=r,this.form.targetaccidents.id=c,this.form.evaluationstrategies.id=n,this.$axios.post("/edit/testcases",{date:t,duration:this.form.duration,stateid:0,systemid:this.form.systemid,initialscenario:this.form.initialscenario,environments:this.form.environments,staticobstacles:this.form.staticobstacles,dynamicobstacles:this.form.dynamicobstacles,trafficfacilities:this.form.trafficfacilities,targetaccidents:this.form.targetaccidents,evaluationstrategies:this.form.evaluationstrategies}).then(function(t){t&&200===t.data.code&&(console.log(e.form),e.$emit("testStart"))})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"TestStarter"},[a("el-card",{staticStyle:{"text-align":"left",width:"600px",height:"550px",margin:"0px 0px 30px auto"}},[a("h1",[a("b",[e._v("请设置您需要的测试信息: ")])]),e._v(" "),a("div",[e._v("目标系统:\n       "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.systemid,expression:"form.systemid"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"systemid",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),a("option",{attrs:{value:"0"}},[e._v("Apollo")]),e._v(" "),a("option",{attrs:{value:"1"}},[e._v("Autoware")])])]),e._v(" "),a("div",[e._v("初始场景选取:\n       "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.initialscenario.id,expression:"form.initialscenario.id"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form.initialscenario,"id",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),a("option",{attrs:{value:"0"}},[e._v("从场景库选取")]),e._v(" "),a("option",{attrs:{value:"1"}},[e._v("本地上传")])])]),e._v(" "),a("div",[e._v("场景测试时长:\n     "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.duration,expression:"form.duration"}],attrs:{placeholder:"Please enter a number"},domProps:{value:e.form.duration},on:{input:function(t){t.target.composing||e.$set(e.form,"duration",t.target.value)}}}),a("span",[e._v("小时")])]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("div",[e._v("场景变异对象: ")]),e._v(" "),a("span",[e._v("环境要素")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Aenvironments,expression:"Aenvironments"}],attrs:{type:"checkbox",id:"100",value:"100"},domProps:{checked:Array.isArray(e.Aenvironments)?e._i(e.Aenvironments,"100")>-1:e.Aenvironments},on:{change:function(t){var a=e.Aenvironments,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"100");i.checked?r<0&&(e.Aenvironments=a.concat(["100"])):r>-1&&(e.Aenvironments=a.slice(0,r).concat(a.slice(r+1)))}else e.Aenvironments=s}}}),e._v(" "),a("label",{attrs:{for:"天气"}},[e._v("天气")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Aenvironments,expression:"Aenvironments"}],attrs:{type:"checkbox",id:"010",value:"10"},domProps:{checked:Array.isArray(e.Aenvironments)?e._i(e.Aenvironments,"10")>-1:e.Aenvironments},on:{change:function(t){var a=e.Aenvironments,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"10");i.checked?r<0&&(e.Aenvironments=a.concat(["10"])):r>-1&&(e.Aenvironments=a.slice(0,r).concat(a.slice(r+1)))}else e.Aenvironments=s}}}),e._v(" "),a("label",{attrs:{for:"时间"}},[e._v("时间")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Aenvironments,expression:"Aenvironments"}],attrs:{type:"checkbox",id:"001",value:"1"},domProps:{checked:Array.isArray(e.Aenvironments)?e._i(e.Aenvironments,"1")>-1:e.Aenvironments},on:{change:function(t){var a=e.Aenvironments,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"1");i.checked?r<0&&(e.Aenvironments=a.concat(["1"])):r>-1&&(e.Aenvironments=a.slice(0,r).concat(a.slice(r+1)))}else e.Aenvironments=s}}}),e._v(" "),a("label",{attrs:{for:"道路表面"}},[e._v("道路表面")]),e._v(" "),a("br"),e._v(" "),a("span",[e._v("静态障碍物")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Astatic_obstacles,expression:"Astatic_obstacles"}],attrs:{type:"checkbox",id:"100",value:"100"},domProps:{checked:Array.isArray(e.Astatic_obstacles)?e._i(e.Astatic_obstacles,"100")>-1:e.Astatic_obstacles},on:{change:function(t){var a=e.Astatic_obstacles,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"100");i.checked?r<0&&(e.Astatic_obstacles=a.concat(["100"])):r>-1&&(e.Astatic_obstacles=a.slice(0,r).concat(a.slice(r+1)))}else e.Astatic_obstacles=s}}}),e._v(" "),a("label",{attrs:{for:"行人"}},[e._v("行人")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Astatic_obstacles,expression:"Astatic_obstacles"}],attrs:{type:"checkbox",id:"010",value:"10"},domProps:{checked:Array.isArray(e.Astatic_obstacles)?e._i(e.Astatic_obstacles,"10")>-1:e.Astatic_obstacles},on:{change:function(t){var a=e.Astatic_obstacles,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"10");i.checked?r<0&&(e.Astatic_obstacles=a.concat(["10"])):r>-1&&(e.Astatic_obstacles=a.slice(0,r).concat(a.slice(r+1)))}else e.Astatic_obstacles=s}}}),e._v(" "),a("label",{attrs:{for:"自行车"}},[e._v("自行车")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Astatic_obstacles,expression:"Astatic_obstacles"}],attrs:{type:"checkbox",id:"001",value:"1"},domProps:{checked:Array.isArray(e.Astatic_obstacles)?e._i(e.Astatic_obstacles,"1")>-1:e.Astatic_obstacles},on:{change:function(t){var a=e.Astatic_obstacles,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"1");i.checked?r<0&&(e.Astatic_obstacles=a.concat(["1"])):r>-1&&(e.Astatic_obstacles=a.slice(0,r).concat(a.slice(r+1)))}else e.Astatic_obstacles=s}}}),e._v(" "),a("label",{attrs:{for:"路障"}},[e._v("路障")]),e._v(" "),a("br"),e._v(" "),a("span",[e._v("动态障碍物")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Adynamic_obstacles,expression:"Adynamic_obstacles"}],attrs:{type:"checkbox",id:"10",value:"10"},domProps:{checked:Array.isArray(e.Adynamic_obstacles)?e._i(e.Adynamic_obstacles,"10")>-1:e.Adynamic_obstacles},on:{change:function(t){var a=e.Adynamic_obstacles,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"10");i.checked?r<0&&(e.Adynamic_obstacles=a.concat(["10"])):r>-1&&(e.Adynamic_obstacles=a.slice(0,r).concat(a.slice(r+1)))}else e.Adynamic_obstacles=s}}}),e._v(" "),a("label",{attrs:{for:"卡车"}},[e._v("卡车")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Adynamic_obstacles,expression:"Adynamic_obstacles"}],attrs:{type:"checkbox",id:"01",value:"1"},domProps:{checked:Array.isArray(e.Adynamic_obstacles)?e._i(e.Adynamic_obstacles,"1")>-1:e.Adynamic_obstacles},on:{change:function(t){var a=e.Adynamic_obstacles,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"1");i.checked?r<0&&(e.Adynamic_obstacles=a.concat(["1"])):r>-1&&(e.Adynamic_obstacles=a.slice(0,r).concat(a.slice(r+1)))}else e.Adynamic_obstacles=s}}}),e._v(" "),a("label",{attrs:{for:"出租车"}},[e._v("出租车")]),e._v(" "),a("br"),e._v(" "),a("span",[e._v("交通设施")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Atraffic_facilities,expression:"Atraffic_facilities"}],attrs:{type:"checkbox",id:"10",value:"10"},domProps:{checked:Array.isArray(e.Atraffic_facilities)?e._i(e.Atraffic_facilities,"10")>-1:e.Atraffic_facilities},on:{change:function(t){var a=e.Atraffic_facilities,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"10");i.checked?r<0&&(e.Atraffic_facilities=a.concat(["10"])):r>-1&&(e.Atraffic_facilities=a.slice(0,r).concat(a.slice(r+1)))}else e.Atraffic_facilities=s}}}),e._v(" "),a("label",{attrs:{for:"交通信号灯"}},[e._v("交通信号灯")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Atraffic_facilities,expression:"Atraffic_facilities"}],attrs:{type:"checkbox",id:"01",value:"1"},domProps:{checked:Array.isArray(e.Atraffic_facilities)?e._i(e.Atraffic_facilities,"1")>-1:e.Atraffic_facilities},on:{change:function(t){var a=e.Atraffic_facilities,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"1");i.checked?r<0&&(e.Atraffic_facilities=a.concat(["1"])):r>-1&&(e.Atraffic_facilities=a.slice(0,r).concat(a.slice(r+1)))}else e.Atraffic_facilities=s}}}),e._v(" "),a("label",{attrs:{for:"交通标志"}},[e._v("交通标志")]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("div",[e._v("目标事故类型: ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Atarget_accidents,expression:"Atarget_accidents"}],attrs:{type:"checkbox",id:"10",value:"10"},domProps:{checked:Array.isArray(e.Atarget_accidents)?e._i(e.Atarget_accidents,"10")>-1:e.Atarget_accidents},on:{change:function(t){var a=e.Atarget_accidents,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"10");i.checked?r<0&&(e.Atarget_accidents=a.concat(["10"])):r>-1&&(e.Atarget_accidents=a.slice(0,r).concat(a.slice(r+1)))}else e.Atarget_accidents=s}}}),e._v(" "),a("label",{attrs:{for:"碰撞"}},[e._v("碰撞")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Atarget_accidents,expression:"Atarget_accidents"}],attrs:{type:"checkbox",id:"01",value:"1"},domProps:{checked:Array.isArray(e.Atarget_accidents)?e._i(e.Atarget_accidents,"1")>-1:e.Atarget_accidents},on:{change:function(t){var a=e.Atarget_accidents,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"1");i.checked?r<0&&(e.Atarget_accidents=a.concat(["1"])):r>-1&&(e.Atarget_accidents=a.slice(0,r).concat(a.slice(r+1)))}else e.Atarget_accidents=s}}}),e._v(" "),a("label",{attrs:{for:"驶出道路"}},[e._v("驶出道路")]),e._v(" "),a("br"),e._v(" "),a("div",[e._v("场景评估策略:")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Aevaluation_strategies,expression:"Aevaluation_strategies"}],attrs:{type:"checkbox",id:"100",value:"100"},domProps:{checked:Array.isArray(e.Aevaluation_strategies)?e._i(e.Aevaluation_strategies,"100")>-1:e.Aevaluation_strategies},on:{change:function(t){var a=e.Aevaluation_strategies,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"100");i.checked?r<0&&(e.Aevaluation_strategies=a.concat(["100"])):r>-1&&(e.Aevaluation_strategies=a.slice(0,r).concat(a.slice(r+1)))}else e.Aevaluation_strategies=s}}}),e._v(" "),a("label",{attrs:{for:"场景多样性"}},[e._v("场景多样性")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Aevaluation_strategies,expression:"Aevaluation_strategies"}],attrs:{type:"checkbox",id:"010",value:"10"},domProps:{checked:Array.isArray(e.Aevaluation_strategies)?e._i(e.Aevaluation_strategies,"10")>-1:e.Aevaluation_strategies},on:{change:function(t){var a=e.Aevaluation_strategies,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"10");i.checked?r<0&&(e.Aevaluation_strategies=a.concat(["10"])):r>-1&&(e.Aevaluation_strategies=a.slice(0,r).concat(a.slice(r+1)))}else e.Aevaluation_strategies=s}}}),e._v(" "),a("label",{attrs:{for:"与周围车辆的安全距离"}},[e._v("与周围车辆的安全距离")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Aevaluation_strategies,expression:"Aevaluation_strategies"}],attrs:{type:"checkbox",id:"001",value:"1"},domProps:{checked:Array.isArray(e.Aevaluation_strategies)?e._i(e.Aevaluation_strategies,"1")>-1:e.Aevaluation_strategies},on:{change:function(t){var a=e.Aevaluation_strategies,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=e._i(a,"1");i.checked?r<0&&(e.Aevaluation_strategies=a.concat(["1"])):r>-1&&(e.Aevaluation_strategies=a.slice(0,r).concat(a.slice(r+1)))}else e.Aevaluation_strategies=s}}}),e._v(" "),a("label",{attrs:{for:"规划路径的偏移"}},[e._v("规划路径的偏移")]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("button",{on:{click:e.handleStart}},[e._v("启动测试")])])],1)},staticRenderFns:[]};var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("div",{staticStyle:{"border-top":"1px #FFDAB9 solid"}},[t("p",{staticClass:"alt",staticStyle:{color:"#000","line-height":"0"}},[this._v(" 版权所有：FDU\n    ")])])])}]};var c={name:"AppIndex",components:{TestStarter:a("VU/8")(i,s,!1,function(e){a("Rx7W")},"data-v-551bd320",null).exports,About:a("VU/8")({name:"Footer"},r,!1,function(e){a("rIqD")},"data-v-73f32666",null).exports},methods:{saveOneTest:function(){this.$router.push("/test")}}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("el-container",[t("el-header",{staticStyle:{width:"1000px",height:"600px"}},[t("testStarter",{ref:"testStarter",staticClass:"starter",on:{testStart:this.saveOneTest}})],1),this._v(" "),t("el-main",[t("about",{ref:"about",staticClass:"about"})],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(c,n,!1,function(e){a("54xU")},"data-v-758de1d1",null);t.default=o.exports},rIqD:function(e,t){}});
//# sourceMappingURL=0.3baf9ea2746e84ec8c2a.js.map