webpackJsonp([7],{DIef:function(e,o){},dIqY:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("body",{attrs:{id:"paper"}},[t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"login-container",attrs:{model:e.loginForm,rules:e.rules,"label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"login_title"},[e._v("用户注册")]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.username,callback:function(o){e.$set(e.loginForm,"username",o)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(o){e.$set(e.loginForm,"password",o)},expression:"loginForm.password"}})],1),e._v(" "),t("el-form-item",[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"真实姓名"},model:{value:e.loginForm.name,callback:function(o){e.$set(e.loginForm,"name",o)},expression:"loginForm.name"}})],1),e._v(" "),t("el-form-item",[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"电话号码"},model:{value:e.loginForm.phone,callback:function(o){e.$set(e.loginForm,"phone",o)},expression:"loginForm.phone"}})],1),e._v(" "),t("el-form-item",[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"E-Mail"},model:{value:e.loginForm.email,callback:function(o){e.$set(e.loginForm,"email",o)},expression:"loginForm.email"}})],1),e._v(" "),t("el-form-item",{staticStyle:{width:"100%"}},[t("el-button",{staticStyle:{width:"40%",background:"#505458",border:"none"},attrs:{type:"primary"},on:{click:e.register}},[e._v("注册")])],1)],1)],1)},staticRenderFns:[]};var l=t("VU/8")({data:function(){return{rules:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]},checked:!0,loginForm:{username:"",password:"",name:"",phone:"",email:""},loading:!1}},methods:{register:function(){var e=this,o=this;this.$axios.post("/register",{username:this.loginForm.username,password:this.loginForm.password,name:this.loginForm.name,phone:this.loginForm.phone,email:this.loginForm.email}).then(function(t){200===t.data.code?(e.$alert("注册成功","提示",{confirmButtonText:"确定"}),o.$router.replace("/login")):e.$alert(t.data.message,"提示",{confirmButtonText:"确定"})}).catch(function(e){})}}},r,!1,function(e){t("DIef")},null,null);o.default=l.exports}});
//# sourceMappingURL=7.1489e0ea2485827f045f.js.map