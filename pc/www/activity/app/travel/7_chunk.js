webpackJsonp([7],{16:function(t,e,i){i(44);var n=i(24)(i(32),i(65),null,null);n.options.__file="E:\\git\\source_tree\\travel\\dr_pc_web\\nodejsSever\\static\\activity\\app\\travel\\src\\module\\main\\rank.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] rank.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},24:function(t,e){t.exports=function(t,e,i,n){var a,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,s=t.default);var r="function"==typeof s?s.options:s;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),n){var c=Object.create(r.computed||null);Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}}),r.computed=c}return{esModule:a,exports:s,options:r}}},25:function(t,e,i){"use strict";t.exports={httpStatus:"/activity/septemberTrip/status.do",httpParticipate:"/activity/septemberTrip/participate.do",httpChance:"/activity/septemberTrip/case_num.do",httpPlay:"/activity/septemberTrip/case_info.do",httpCard:"/activity/septemberTrip/my_cards.do",httpConvert:"/activity/septemberTrip/card_exchange.do",httpXchg:"/activity/septemberTrip/exchange.do",httpMyRecord:"/activity/septemberTrip/case_record.do",httpRank:"/activity/septemberTrip/my_rank.do"}},26:function(t,e,i){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();i(27);var s=i(0),o=function(t){return t&&t.__esModule?t:{default:t}}(s),r=e("body");t.exports=function(){function t(i){n(this,t);var a=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){a.close()},cancelCallback:function(){a.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},e.extend(this.config,i),this.init()}return a(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var i=e("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:i,title:i.find(".title"),close:i.find(".close"),bg:i.find(".pop-cnt"),content:i.find(".content"),submit:i.find(".submit"),okbtn:i.find(".okbtn"),nextbtn:i.find(".next"),cancelbtn:i.find(".unbind"),error:i.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,e=this.config,i=e.time+"s";t.okbtn.addClass(e.okCls).html(e.okTxt),t.nextbtn.html(e.nextTxt),t.cancelbtn.addClass(e.cancelCls).html(e.cancelTxt),1==e.mask&&this.addContent("<div class='loading'></div>"),t.title.html(e.title),e.content&&this.add(function(){return e.content}),t.elem.addClass(e.superClass),t.bg.addClass(e.class),t.bg.css({"transition-duration":i,"animation-duration":i}),t.bg.css({"-webkit-transition-duration":i,"-webkit-animation-duration":i}),e.width&&t.bg.css({width:e.width}),e.title.length<2&&t.title.remove(),0==e.okBtn&&t.okbtn.remove(),0==e.nextBtn&&t.nextbtn.remove(),0==e.cancelBtn&&t.cancelbtn.remove(),0==e.okBtn&&0==e.cancelBtn&&t.submit.remove(),0==e.close&&t.close.remove()}},{key:"add",value:function(t){var e=this,i=this.element,n=this;return i.elem.parent().length?n.close():(r.append(i.elem),this.addContent(t),setTimeout(function(){i.bg.addClass("cur")},n.config.timingTime),o.default.body.css({overflowY:"hidden"}),n.history(),setTimeout(function(){e.updateEvent(),n.config.openDone()},n.config.time+20)),i.content}},{key:"addContent",value:function(t){var e=this.element.content;t&&"function"==typeof t?e.html(t.call(e)):e.html(t),setTimeout(function(){o.default.setImgSize()},100)}},{key:"history",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,e,i,n){function a(){t.removeClass("unbind").text(o),s.unbind(t,e,i,n)}var s=this,o=t.text();i=i||o,n=n||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(i),e(),setTimeout(a,1e3*n)})}},{key:"updateEvent",value:function(){var t=this,e=this.element,i=this.config;o.default.myAddListener(e.close,"mousedown",function(e){e.stopPropagation(),t.close()}),o.default.myAddListener(e.elem,"mousedown",function(e){e.stopPropagation(),i.windowClose&&t.close()}),o.default.myAddListener(e.bg,"mousedown",function(t){t.stopPropagation()}),1==i.okBtn&&o.default.myAddListener(e.okbtn,"mousedown",function(e){e.stopPropagation(),i.okCallback.call(t)}),1==i.nextBtn&&o.default.myAddListener(e.nextbtn,"mousedown",function(e){e.stopPropagation(),i.nextCallback.call(t)}),1==i.cancelBtn&&o.default.myAddListener(e.cancelbtn,"mousedown",function(e){e.stopPropagation(),i.cancelCallback.call(t)})}},{key:"error",value:function(t,e){var i=this.element.error,n=this.element.bg,a=this.config.time;n.addClass("errorcur"),i.html(t).addClass("cur"),setTimeout(function(){n.removeClass("errorcur"),n.css({"animation-duration":"0s"}),n.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){n.css({"animation-duration":a+"s"}),n.css({"-webkit-animation-duration":a+"s"})},1e3*a+10)},1e3*a+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var e=t.time||.1,i=this,n=this.element.error,a=this.config.time;n.html(t.txt).addClass("cur succee"),setTimeout(function(){i.hideError(),t.callback&&t.callback()},1e3*a+1e3*e)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var i=this.element;i.bg.removeClass("cur"),setTimeout(function(){i.elem.remove(),t&&"function"==e.type(t)&&t(),o.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(e,i(3))},27:function(t,e){},32:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=i(25),a=i(8),s=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{isLogin:!1,myCard:0,myRank:0,myGift:"",rankList:[]}},computed:{},filters:{convertTimestampToYmdhhmmss:function(t){var e=new Date(t);return e?e.Format("yyyy-MM-dd hh:mm:ss"):t}},mounted:function(){t.setImgSize(),t.mobile(),t.getAppInfo(),this.isLogin=t.isLogin,t.isLogin?this.getRank():t.login()},methods:{__requestService:function(e,n,a){t.ajax({url:e,data:n,callback:!0,success:function(t){if(!t.success&&!t.hasOwnProperty("errorMsg")){var e=i(26);new e({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}a(t)}})},getRank:function(){var e=this;if(!t.isLogin)return!1;var i={uid:t.uid};this.__requestService(n.httpRank+"?uid="+t.uid,i,function(i){if(0==i.success&&i.hasOwnProperty("errorMsg"))return(0,s.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:i.errorMsg,btnBackHome:!1}}),!1;e.myCard="number"==typeof i.map.myCard?i.map.myCard:0,e.myRank="number"==typeof i.map.myRank?i.map.myRank:0,e.myGift="无"!=i.map.myGift?i.map.myGift:"",e.rankList=i.map.rankList,setTimeout(function(){t.setImgSize()},20)})},onBack:function(){var e=t.getQueryString("backFrom");e&&(t.wap?window.location.replace(window.location.pathname+"#/cards/?wap=true&uid="+t.uid+"&from="+e):window.location.replace(window.location.pathname+"#/cards/?uid="+t.uid+"&from="+e))}}}}).call(e,i(0))},44:function(t,e){},65:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-section flip-left-bounce"},[i("div",{staticClass:"img-size rank-wrapper",attrs:{"data-width":"750","data-height":"1484"}},[i("div",{staticClass:"back-btn img-size",attrs:{"data-left":"20","data-top":"-10"},on:{click:t.onBack}},[t._v("«")]),t._v(" "),i("div",{staticClass:"my-card img-size",attrs:{"data-left":"544","data-top":"26","data-width":"190","data-height":"44"},on:{click:t.onBack}}),t._v(" "),i("div",{staticClass:"top-area img-size",attrs:{"data-top":"780","data-width":"750","data-fontSize":"24","data-lineHeight":"24"}},[i("div",{staticClass:"item img-size",attrs:{"data-marginBottom":"12"}},[i("div",{staticClass:"label"},[t._v("已获得的卡片总数：")]),t._v(" "),i("span",[t._v(t._s(t.myCard>0?t.myCard:"暂无"))])]),t._v(" "),i("div",{staticClass:"item img-size",attrs:{"data-marginBottom":"12"}},[i("div",{staticClass:"label"},[t._v("当前排名：")]),t._v(" "),i("span",[t._v(t._s(t.myRank>0?t.myRank:"暂无"))])]),t._v(" "),i("div",{staticClass:"item img-size",attrs:{"data-marginBottom":"12"}},[i("div",{staticClass:"label"},[t._v("预计可获得：")]),t._v(" "),i("span",[t._v(t._s(t.myGift?t.myGift:"暂无"))])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rankList.length>0,expression:"rankList.length > 0"}],staticClass:"list-area img-size",attrs:{"data-top":"1020","data-left":"25"}},t._l(t.rankList,function(e,n){return i("div",{staticClass:"row img-size",attrs:{"data-fontSize":"24","data-lineHeight":"54"}},[i("div",{staticClass:"img-size",attrs:{"data-width":"105"}},[t._v(t._s(n+1))]),i("div",{staticClass:"img-size",attrs:{"data-width":"250"}},[t._v(t._s(e.mobilePhone))]),i("div",{staticClass:"img-size",attrs:{"data-width":"125"}},[t._v(t._s(e.description))]),i("div",{staticClass:"img-size",attrs:{"data-width":"245"}},[t._v(t._s(e.gift))])])})),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.rankList.length<=0,expression:"rankList.length <= 0"}],staticClass:"no-data img-size",attrs:{"data-top":"1135","data-width":"750","data-fontSize":"32"}},[t._v("暂无数据")])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});