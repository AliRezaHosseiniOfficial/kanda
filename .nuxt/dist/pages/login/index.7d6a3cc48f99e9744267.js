webpackJsonp([4],{"/r0e":function(t,a,e){var s=e("ddXw");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("71c382c3",s,!1)},BSm1:function(t,a,e){t.exports=e.p+"img/LoginBkgPic.4faa253.jpeg"},FaF3:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container-full background d-none d-md-block d-lg-block"},[e("div",{staticClass:"row gx-0"},[t._m(0),e("div",{staticClass:"pt-5 col-lg-6 col-md-6 bg-white px-5"},[e("p",{staticClass:"LoginTitle text-center"},[t._v("Login")]),e("p",{staticClass:"text-center text-muted"},[t._v("Please login to your account.")]),e("form",{staticClass:"my-5",on:{submit:function(a){a.preventDefault(),t.FormSubmit(a)}}},[e("div",{staticClass:"form-outline mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"InputStyle form-control",attrs:{placeholder:"Email Address",type:"email",id:"input1"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t.MailCheck?e("p",{staticClass:"text-danger"},[t._v("No Empty email Field")]):t._e()]),e("div",{staticClass:"form-outline mb-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"InputStyle form-control",attrs:{placeholder:"Password",type:"password",id:"input2"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),t.PassCheck?e("p",{staticClass:"text-danger"},[t._v("No Empty Password Field")]):t._e()]),e("p",{staticClass:"mb-4 text-muted"},[t._v("Forgot password?")]),e("button",{staticClass:"btn BtnStyle btn-block mb-4 SubmitBtnStyle",attrs:{type:"submit"}},[t._v("\n                                      Continue\n                                  ")]),e("div",{staticClass:"d-flex flex-row pb-4"},[e("p",{staticClass:"SignUpTxt"},[t._v("Need an account?")]),e("nuxt-link",{attrs:{to:"/signup"}},[e("p",{staticClass:"SignUpTxt pe-2 text-muted"},[t._v("Sign Up")])])],1),e("div",{staticClass:"Devider"}),e("p",{staticClass:"DeviderTxt text-muted text-center"},[t._v("\n                                      OR\n                                  ")]),t._m(1)])])])]),e("section",{staticClass:"d-md-none d-lg-none container MobileBkg pb-5"},[t._m(2),e("div",{staticClass:"py-4 bg-white px-3 FormMobileBkgStyle"},[e("p",{staticClass:"mt-3 LoginTitle text-center"},[t._v("Login")]),e("p",{staticClass:"text-center text-muted"},[t._v("Please login to your account.")]),e("form",{staticClass:"my-4",on:{submit:function(a){a.preventDefault(),t.FormSubmit(a)}}},[e("div",{staticClass:"form-outline mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"InputStyle form-control",attrs:{placeholder:"Email Address",type:"email",id:"input1"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t.MailCheck?e("p",{staticClass:"text-danger"},[t._v("No Empty email Field")]):t._e()]),e("div",{staticClass:"form-outline mb-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"InputStyle form-control",attrs:{placeholder:"Password",type:"password",id:"input2"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),t.PassCheck?e("p",{staticClass:"text-danger"},[t._v("No Empty Password Field")]):t._e()]),e("p",{staticClass:"mb-4 text-muted"},[t._v("Forgot password?")]),e("button",{staticClass:"btn BtnStyle btn-block mb-4 SubmitBtnStyle",attrs:{type:"submit"}},[t._v("\n                                      Continue\n                                  ")]),e("div",{staticClass:"d-flex flex-row pb-4"},[e("p",{staticClass:"SignUpTxt"},[t._v("Need an account?")]),e("nuxt-link",{attrs:{to:"/signup"}},[e("p",{staticClass:"SignUpTxt pe-2 text-muted"},[t._v("Sign Up")])])],1),e("div",{staticClass:"Devider"}),e("p",{staticClass:"DeviderTxt text-muted text-center"},[t._v("\n                                      OR\n                                  ")]),t._m(3)])])])])},i=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-lg-6 col-md-6 LeftBkg text-center py-5"},[a("img",{staticClass:"w-100",attrs:{src:e("FTgR"),alt:"logo"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-center mt-5"},[a("a",{staticClass:"btn GoogleBtn",attrs:{role:"button"}},[a("img",{staticClass:"pe-2",attrs:{width:"40px",src:e("Jjos")}}),this._v("\n                                      Continue with Google\n                                  ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-center py-2"},[a("img",{staticClass:"MobileLogo",attrs:{src:e("FTgR"),alt:"logo"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-center mt-5"},[a("a",{staticClass:"btn GoogleBtn",attrs:{role:"button"}},[a("img",{staticClass:"pe-2",attrs:{width:"40px",src:e("Jjos")}}),this._v("\n                                      Continue with Google\n                                  ")])])}];s._withStripped=!0;var o={render:s,staticRenderFns:i};a.a=o},Jjos:function(t,a,e){t.exports=e.p+"img/GoogleIcon.bdfd330.png"},"T/kY":function(t,a,e){"use strict";a.a={data:function(){return{email:"",password:"",MailCheck:!1,PassCheck:!1}},methods:{FormSubmit:function(){this.email?this.MailCheck=!1:this.MailCheck=!0,this.password?this.PassCheck=!1:this.PassCheck=!0,this.email&&this.password&&alert("FormSubmited")}}}},ddXw:function(t,a,e){var s=e("kxFB");(t.exports=e("FZ+f")(!1)).push([t.i,"body[data-v-4586967a]{overflow-y:hidden!important}.FormMobileBkgStyle[data-v-4586967a]{border-radius:15px}.MobileLogo[data-v-4586967a]{width:70%}[data-v-4586967a]::-webkit-input-placeholder{color:#6e7689;opacity:1!important}[data-v-4586967a]:-ms-input-placeholder,[data-v-4586967a]::-ms-input-placeholder{color:#6e7689;opacity:1!important}[data-v-4586967a]::placeholder{color:#6e7689;opacity:1!important}.MobileBkg[data-v-4586967a]{background-color:#055452;min-height:100vh}.GoogleBtn[data-v-4586967a]{font-family:Open Sans;font-weight:600;font-size:12pt;text-transform:capitalize;-webkit-box-shadow:none;box-shadow:none;border:1px solid #c9c6d1;padding:15px;width:100%}@media screen and (max-width:320px){.GoogleBtn[data-v-4586967a]{font-size:8pt}}.Devider[data-v-4586967a]{border-bottom:1px solid #e6e6e6}.DeviderTxt[data-v-4586967a]{font-family:Open Sans;font-size:16px;background-color:#fff;width:50px;margin:-13px auto}.SignUpTxt[data-v-4586967a]{font-family:Open Sans;font-weight:600;color:#231942}.InputStyle[data-v-4586967a]{padding:13px;font-family:Open Sans;font-weight:600;font-size:14px;border:1.5px solid #c9c6d1;border-radius:10px;color:#6e7689}.background[data-v-4586967a]{background-image:url("+s(e("BSm1"))+");background-size:cover;background-position:50%;background-repeat:no-repeat;min-height:100vh;padding:4% 20%}.LeftBkg[data-v-4586967a]{background-color:#055452}.LoginTitle[data-v-4586967a]{font-family:Open Sans;font-weight:600;font-size:18pt}.BtnStyle[data-v-4586967a]{font-family:Open Sans;font-weight:600;font-size:12pt;background-color:#055452!important;color:#fff!important}.SubmitBtnStyle[data-v-4586967a]{font-family:Open Sans;font-weight:600;font-size:12pt;padding:18px;border-radius:8px;text-transform:capitalize}@media screen and (max-width:320px){.SubmitBtnStyle[data-v-4586967a]{font-size:10pt;padding:15px}}",""])},nGTV:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("T/kY"),i=e("FaF3"),o=!1;var n=function(t){o||e("/r0e")},l=e("VU/8")(s.a,i.a,!1,n,"data-v-4586967a",null);l.options.__file="pages/login/index.vue",a.default=l.exports}});