webpackJsonp([3],{27:function(e,t,a){a(48);var i=a(22)(a(36),a(60),"data-v-7c4f283f",null);i.options.__file="E:\\products\\pc\\activity\\app\\ctripReg\\src\\module\\main\\index.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},36:function(e,t,a){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0});var r=a(50),s=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={data:function(){return{}},components:{reg:s.default},ready:function(){},watch:{},mounted:function(){e.setImgSize(),i(".bg").on("scroll",function(){var e=i(".bg").scrollTop();e>i(".ys").offset().top?(i(".float").show(),e=0):i(".float").hide()}),function(){i(".float").hide()}()},methods:{gotoTop:function(){i(".bg").scrollTop(0)}}}}).call(t,a(0),a(1))},38:function(e,t,a){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0});var r=a(12);t.default={data:function(){return{items:{phone:""},agree:!0,showref:!1,userIsNew:!1,picCode:"",countdown:60,timeDJS:!0,phone:"",imgCode:"",msg:"",pass:"",referee:"",phoneOK:!1,imgOK:!1}},ready:function(){},computed:{},watch:{items:{handler:function(t,a){0==/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.$refs.phone.value)?e(".phonErr")[0].innerHTML="请输入正确格式的手机号":e(".phonErr")[0].innerHTML=""},deep:!0}},mounted:function(){i.setImgSize(),i.getAppInfo(),this.phone=this.$refs.phone.value,this.imgCode=this.$refs.imgCode.value,this.msg=this.$refs.msg.value,this.pass=this.$refs.pass.value,this.referee=this.$refs.referee.value},methods:{phoneInFun:function(){0==/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.$refs.phone.value)?e(".phonErr")[0].innerHTML="请输入正确格式的手机号":(e(".phonErr")[0].innerHTML="",this.phoneOK=!0)},phoneBlurFun:function(){var t=this.$refs.phone.value;i.ajax({url:r.userIsNew,data:{mobilePhone:t},callback:!0,success:function(t){t.success?t.map.exists&&(e(".phonErr")[0].innerHTML="此号码已经注册"):t.errorCode}})},imgCodeBlurFun:function(){var t=/^[0-9A-Za-z]{4}$/,a=this.$refs.imgCode.value;""!=a&&(0==t.test(a)?e(".imgErr")[0].innerHTML="图片验证码格式错误":(e(".imgErr")[0].innerHTML="",this.imgOK=!0))},msgInFun:function(){var t=/^[0-9]{4}$/,a=this.$refs.msg.value;1==t.test(a)&&(e(".msgErr")[0].innerHTML="")},msgBlurFun:function(){var t=/^[0-9]{4}$/,a=this.$refs.msg.value;""!=a&&(0==t.test(a)?e(".msgErr")[0].innerHTML="验证码格式错误":e(".msgErr")[0].innerHTML="")},passInFun:function(){1==/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(this.$refs.pass.value)&&(e(".passErr")[0].innerHTML="")},passBlurFun:function(){var t=this.$refs.pass.value,a=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;""!=t&&(0==a.test(t)?e(".passErr")[0].innerHTML="密码必须是6-18位数字和字母的组合":e(".passErr")[0].innerHTML="")},refereeInFun:function(){this.$refs.referee.value.length>11?e(".refereeErr")[0].innerHTML="请输入正确格式的推荐人手机号":e(".refereeErr")[0].innerHTML=""},agreelocked:function(){this.agree=!this.agree},showreff:function(){var e=this;e.showref=!e.showref},submit:function(){0==/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(this.items.pass)?e(".regErr")[0].innerHTML="密码必须是6-18位数字和字母的组合":this.agree?""==this.items.phone||""==this.items.pass||""==this.items.imgCode||""==this.items.msg?e(".regErr")[0].innerHTML="请输入完整的信息":i.ajax({url:r.subReg,data:{mobilePhone:this.items.phone,passWord:this.items.pass,picCode:this.items.imgCode,smsCode:this.items.msg,checkbox:this.agree,recommPhone:this.items.referee,toFrom:i.toFrom},callback:!0,success:function(t){t.success?router.replace({path:"lucky",query:{toFrom:i.toFrom}}):("1001"==t.errorCode&&(e(".regErr")[0].innerHTML="短信验证码为空"),"1002"==t.errorCode&&(e(".regErr")[0].innerHTML="短信验证码错误"),"1003"==t.errorCode&&(e(".regErr")[0].innerHTML="手机号为空"),"1004"==t.errorCode&&(e(".regErr")[0].innerHTML="图片验证码为空"),"1005"==t.errorCode&&(e(".regErr")[0].innerHTML="密码格式错误"),"1006"==t.errorCode&&(e(".regErr")[0].innerHTML="未勾选注册协议"),"1007"==t.errorCode&&(e(".regErr")[0].innerHTML="手机号已注册"),"1008"==t.errorCode&&(e(".regErr")[0].innerHTML="推荐人不存在"))}}):e(".regErr")[0].innerHTML="请勾选注册协议"},changeIMG:function(t){void 0!=t?e(".img-box img")[0].src+="?"+(new Date).getTime():void 0!=e(".img-box img")[0]&&(e(".img-box img")[0].src+="?"+(new Date).getTime())},sendCode:function(){function t(){if(0==a.countdown)return e("#yzd")[0].style.color="#004a6c",e("#yzd")[0].innerHTML="获取验证码",clearTimeout(i),a.countdown=60,void(a.timeDJS=!0);a.timeDJS=!1,e("#yzd")[0].style.color="#6a6b6b",e("#yzd")[0].innerHTML="重 发 ("+a.countdown+")",a.countdown--;var i=setTimeout(function(){t()},1e3)}var a=this;if(a.timeDJS){var s=/^1[3|4|5|7|8][0-9]\d{8}$/,n=/^[0-9A-Za-z]{4}$/;1==s.test(a.items.phone)&&1==n.test(a.items.imgCode)?i.ajax({url:r.sendMsg,data:{mobilePhone:a.items.phone,picCode:a.items.imgCode,type:1},callback:!0,success:function(a){a.success?(t(),e(".msgErr")[0].innerHTML=""):("1001"==a.errorCode&&(e(".msgErr")[0].innerHTML="图片验证码不正确"),"1002"==a.errorCode&&(e(".msgErr")[0].innerHTML="当天短信发送超过限制"),"1003"==a.errorCode&&(e(".msgErr")[0].innerHTML="短信发送失败"),"8888"==a.errorCode&&(e(".msgErr")[0].innerHTML="频繁操作"),"9999"==a.errorCode&&(e(".msgErr")[0].innerHTML="表示系统错误"))}}):e(".msgErr")[0].innerHTML="请正确填写手机号和图片验证码"}}}}}).call(t,a(1),a(0))},47:function(e,t){},48:function(e,t){},50:function(e,t,a){a(47);var i=a(22)(a(38),a(59),"data-v-765e4be6",null);i.options.__file="E:\\products\\pc\\activity\\app\\ctripReg\\src\\module\\reg\\reg.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] reg.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},59:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.items.phone,expression:"items.phone"}],ref:"phone",staticClass:"img-size",attrs:{"data-fontSize":"32","data-paddingLeft":"22","data-width":"596","data-height":"82",type:"text",placeholder:"请输入手机号"},domProps:{value:e.items.phone},on:{input:[function(t){t.target.composing||(e.items.phone=t.target.value)},e.phoneInFun],blur:e.phoneBlurFun}}),e._v(" "),a("div",{staticClass:"phonErr error img-size",attrs:{"data-marginTop":"8","data-fontSize":"24","data-paddingLeft":"66"}}),e._v(" "),a("div",{staticClass:"box img-size",attrs:{"data-width":"618"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.items.imgCode,expression:"items.imgCode"}],ref:"imgCode",staticClass:"img-size",attrs:{"data-fontSize":"32","data-paddingLeft":"22","data-marginTop":"25","data-width":"596","data-height":"82",type:"text",placeholder:"请输入图片验证码"},domProps:{value:e.items.imgCode},on:{blur:e.imgCodeBlurFun,input:function(t){t.target.composing||(e.items.imgCode=t.target.value)}}}),e._v(" "),a("div",{staticClass:"img-box img-size",attrs:{"data-height":"60","data-marginTop":"-70","data-paddingLeft":"35","data-paddingRight":"35"}},[a("img",{attrs:{src:"/login/validateCode.do",alt:""},on:{click:function(t){e.changeIMG(e.event)}}})])]),e._v(" "),a("div",{staticClass:"imgErr error img-size",attrs:{"data-marginTop":"8","data-fontSize":"24","data-paddingLeft":"66"}}),e._v(" "),a("div",{staticClass:"box img-size",attrs:{"data-width":"618"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.items.msg,expression:"items.msg"}],ref:"msg",staticClass:"img-size",attrs:{"data-fontSize":"32","data-paddingLeft":"22","data-marginTop":"25","data-width":"596","data-height":"82",type:"text",placeholder:"请输入短信验证码"},domProps:{value:e.items.msg},on:{input:[function(t){t.target.composing||(e.items.msg=t.target.value)},e.msgInFun],blur:e.msgBlurFun}}),e._v(" "),a("div",{staticClass:"img-box img-size",attrs:{"data-height":"60","data-marginTop":"-70","data-paddingLeft":"15","data-paddingRight":"15","data-lineHeight":"60"}},[a("span",{attrs:{id:"yzd"},on:{click:function(t){e.sendCode(e.obj)}}},[e._v("获取验证码")])])]),e._v(" "),a("div",{staticClass:"msgErr error img-size",attrs:{"data-marginTop":"8","data-fontSize":"24","data-paddingLeft":"66"}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.items.pass,expression:"items.pass"}],ref:"pass",staticClass:"img-size",attrs:{"data-fontSize":"32","data-paddingLeft":"22","data-marginTop":"25","data-width":"596","data-height":"82",type:"password",placeholder:"密码建议6-18位数字、字母组合"},domProps:{value:e.items.pass},on:{input:[function(t){t.target.composing||(e.items.pass=t.target.value)},e.passInFun],blur:e.passBlurFun}}),e._v(" "),a("div",{staticClass:"passErr error img-size",attrs:{"data-marginTop":"8","data-fontSize":"24","data-paddingLeft":"66"}}),e._v(" "),a("div",{staticClass:"tjr img-size",attrs:{"data-marginLeft":"66","data-fontSize":"32"},on:{click:e.showreff}},[a("span",{directives:[{name:"show",rawName:"v-show",value:0==e.showref,expression:"showref==false"}],staticClass:"sjx img-size",attrs:{"data-borderLeftWidth":"12","data-borderRightWidth":"12","data-borderTopWidth":"24","data-marginRight":"5"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.showref,expression:"showref==true"}],staticClass:"sjx2 img-size",attrs:{"data-borderLeftWidth":"12","data-borderRightWidth":"12","data-borderBottomWidth":"24","data-marginRight":"5"}}),e._v("推荐人（可不填）")]),e._v(" "),a("input",{directives:[{name:"show",rawName:"v-show",value:1==e.showref,expression:"showref==true"},{name:"model",rawName:"v-model",value:e.items.referee,expression:"items.referee"}],ref:"referee",staticClass:"img-size",attrs:{"data-fontSize":"32","data-paddingLeft":"22","data-marginTop":"25","data-width":"596","data-height":"82",type:"text",placeholder:"请输入推荐人手机号/推荐码"},domProps:{value:e.items.referee},on:{input:[function(t){t.target.composing||(e.items.referee=t.target.value)},e.refereeInFun]}}),e._v(" "),a("div",{staticClass:"refereeErr error img-size",attrs:{"data-marginTop":"8","data-fontSize":"24","data-paddingLeft":"66"}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"}],staticClass:"check tjr img-size",attrs:{"data-marginLeft":"66","data-fontSize":"32","data-marginTop":"25",type:"checkbox",name:"agree","true-exp":"a","false-exp":"b"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:e.agreelocked,__c:function(t){var a=e.agree,i=t.target,r=!!i.checked;if(Array.isArray(a)){var s=e._i(a,null);r?s<0&&(e.agree=a.concat(null)):s>-1&&(e.agree=a.slice(0,s).concat(a.slice(s+1)))}else e.agree=r}}}),e._v("我已阅读并同意"),a("a",{attrs:{href:"https://www.duorongcf.com/zc"}},[e._v("《注册协议》")]),e._v(" "),a("div",{staticClass:"regErr error img-size",staticStyle:{"text-align":"center"},attrs:{"data-marginTop":"8","data-fontSize":"24"}}),e._v(" "),a("div",{staticClass:"regbtn img-size",attrs:{"data-height":"107","data-lineHeight":"95","data-marginTop":"25","data-fontSize":"44"},on:{click:e.submit}},[e._v("立即领取10M流量")])])},staticRenderFns:[]},e.exports.render._withStripped=!0},60:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg module-scroll"},[e._m(0),e._v(" "),a("div",{staticClass:"reg-box img-size",attrs:{"data-marginTop":"-20"}},[a("reg")],1),e._v(" "),a("div",{staticClass:"tread img-size",attrs:{"data-height":"543","data-marginTop":"50"}}),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),a("div",{staticClass:"float img-size",attrs:{"data-height":"100"}},[a("div",{staticClass:"btntop img-size",attrs:{"data-height":"100","data-lineHeight":"100","data-width":"354"},on:{click:e.gotoTop}},[a("span",[e._v("立即领取10M流量")])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"top img-size",attrs:{id:"top","data-height":"744"}},[a("div",{staticClass:"yuna img-size",attrs:{"data-height":"348"}}),e._v(" "),a("div",{staticClass:"logo img-size",attrs:{"data-width":"189","data-height":"82"}}),e._v(" "),a("div",{staticClass:"banner"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"yunb img-size",attrs:{"data-height":"750"}},[a("div",{staticClass:"bag img-size",attrs:{"data-height":"283","data-marginTop":"80"}}),e._v(" "),a("div",{staticClass:"rule img-size",attrs:{"data-paddingLeft":"42","data-paddingRight":"42","data-fontSize":"28","data-marginTop":"20"}},[a("p",{staticClass:"title img-size",attrs:{"data-fontSize":"36"}},[e._v("活动介绍")]),e._v(" "),a("ul",[a("li",[a("span",[e._v("1.10M")]),e._v("流量将在注册成功后的"),a("span",[e._v("3")]),e._v("个工作日内发放至注册手机；")]),e._v(" "),a("li",[a("span",[e._v("2.")]),e._v("注册成功后，"),a("span",[e._v("10000元")]),e._v("体验金和"),a("span",[e._v("1588元")]),e._v("红包将同时发放到您的多融账户，可登录多融理财APP或官网查看；")]),e._v(" "),a("li",[a("span",[e._v("3.")]),e._v("首次投资再送最高"),a("span",[e._v("1000元")]),e._v("携程任我行卡；")]),e._v(" "),a("li",[a("span",[e._v("4.")]),e._v("每个手机号仅限参与一次；")]),e._v(" "),a("li",[a("span",[e._v("5.")]),e._v("如有疑问，请咨询客服热线："),a("span",[e._v("400-690-8896")]),e._v("。")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bottom img-size",attrs:{"data-paddingBottom":"320"}},[a("div",{staticClass:"ys img-size",attrs:{"data-height":"235"}}),e._v(" "),a("div",{staticClass:"img-size",staticStyle:{color:"#4188af","text-align":"center"},attrs:{"data-fontSize":"24"}},[e._v("上海银砖金融信息服务有限公司 "),a("br"),e._v("icp备案号：沪ICP备10511207号-5")]),e._v(" "),a("div",{staticClass:"img-size",staticStyle:{color:"#4188af","text-align":"center"},attrs:{"data-fontSize":"24","data-lineHeight":"50"}},[e._v("市场有风险 投资需谨慎")])])}]},e.exports.render._withStripped=!0}});