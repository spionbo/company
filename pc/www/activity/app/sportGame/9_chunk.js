webpackJsonp([9],{19:function(t,e,i){i(56);var n=i(27)(i(45),i(77),"data-v-1ec16238",null);n.options.__file="E:\\git\\source_tree\\develop\\dr_pc_web\\nodejsSever\\static\\activity\\app\\sportGame\\src\\module\\main\\playJianzi.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] playJianzi.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},27:function(t,e){t.exports=function(t,e,i,n){var a,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,s=t.default);var c="function"==typeof s?s.options:s;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),i&&(c._scopeId=i),n){var r=Object.create(c.computed||null);Object.keys(n).forEach(function(t){var e=n[t];r[t]=function(){return e}}),c.computed=r}return{esModule:a,exports:s,options:c}}},28:function(t,e,i){"use strict";(function(e){var n=function(t,n,a){e.ajax({url:t,data:n,callback:!0,success:function(t){if(!t.success&&!t.errorMsg){var e=i(29);new e({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}a(t)}})};t.exports={requestService:n,httpStatus:"/activity/1803/status.do",httpParticipate:"/activity/1803/participate.do",httpChance:"/activity/1803/chance.do",httpPlay:"/activity/1803/game.do",httpMyGift:"/activity/1803/gift_record.do",httpXchg:"/activity/1803/convert.do",httpGetSign:"/activity/1803/game_init.do",httpDailyRank:"/activity/1803/rank_day.do",httpFinalRank:"/activity/1803/rank_sum.do"}}).call(e,i(1))},29:function(t,e,i){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();i(30);var s=i(1),o=function(t){return t&&t.__esModule?t:{default:t}}(s),c=e("body");t.exports=function(){function t(i){n(this,t);var a=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){a.close()},cancelCallback:function(){a.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},e.extend(this.config,i),this.init()}return a(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var i=e("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:i,title:i.find(".title"),close:i.find(".close"),bg:i.find(".pop-cnt"),content:i.find(".content"),submit:i.find(".submit"),okbtn:i.find(".okbtn"),nextbtn:i.find(".next"),cancelbtn:i.find(".unbind"),error:i.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,e=this.config,i=e.time+"s";t.okbtn.addClass(e.okCls).html(e.okTxt),t.nextbtn.html(e.nextTxt),t.cancelbtn.addClass(e.cancelCls).html(e.cancelTxt),1==e.mask&&this.addContent("<div class='loading'></div>"),t.title.html(e.title),e.content&&this.add(function(){return e.content}),t.elem.addClass(e.superClass),t.bg.addClass(e.class),t.bg.css({"transition-duration":i,"animation-duration":i}),t.bg.css({"-webkit-transition-duration":i,"-webkit-animation-duration":i}),e.width&&t.bg.css({width:e.width}),e.title.length<2&&t.title.remove(),0==e.okBtn&&t.okbtn.remove(),0==e.nextBtn&&t.nextbtn.remove(),0==e.cancelBtn&&t.cancelbtn.remove(),0==e.okBtn&&0==e.cancelBtn&&t.submit.remove(),0==e.close&&t.close.remove()}},{key:"add",value:function(t){var e=this,i=this.element,n=this;return i.elem.parent().length?n.close():(c.append(i.elem),this.addContent(t),setTimeout(function(){i.bg.addClass("cur")},n.config.timingTime),o.default.body.css({overflowY:"hidden"}),n.history(),setTimeout(function(){e.updateEvent(),n.config.openDone()},n.config.time+20)),i.content}},{key:"addContent",value:function(t){var e=this.element.content;t&&"function"==typeof t?e.html(t.call(e)):e.html(t),setTimeout(function(){o.default.setImgSize()},100)}},{key:"history",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,e,i,n){function a(){t.removeClass("unbind").text(o),s.unbind(t,e,i,n)}var s=this,o=t.text();i=i||o,n=n||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(i),e(),setTimeout(a,1e3*n)})}},{key:"updateEvent",value:function(){var t=this,e=this.element,i=this.config;o.default.myAddListener(e.close,"mousedown",function(e){e.stopPropagation(),t.close()}),o.default.myAddListener(e.elem,"mousedown",function(e){e.stopPropagation(),i.windowClose&&t.close()}),o.default.myAddListener(e.bg,"mousedown",function(t){t.stopPropagation()}),1==i.okBtn&&o.default.myAddListener(e.okbtn,"mousedown",function(e){e.stopPropagation(),i.okCallback.call(t)}),1==i.nextBtn&&o.default.myAddListener(e.nextbtn,"mousedown",function(e){e.stopPropagation(),i.nextCallback.call(t)}),1==i.cancelBtn&&o.default.myAddListener(e.cancelbtn,"mousedown",function(e){e.stopPropagation(),i.cancelCallback.call(t)})}},{key:"error",value:function(t,e){var i=this.element.error,n=this.element.bg,a=this.config.time;n.addClass("errorcur"),i.html(t).addClass("cur"),setTimeout(function(){n.removeClass("errorcur"),n.css({"animation-duration":"0s"}),n.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){n.css({"animation-duration":a+"s"}),n.css({"-webkit-animation-duration":a+"s"})},1e3*a+10)},1e3*a+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var e=t.time||.1,i=this,n=this.element.error,a=this.config.time;n.html(t.txt).addClass("cur succee"),setTimeout(function(){i.hideError(),t.callback&&t.callback()},1e3*a+1e3*e)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var i=this.element;i.bg.removeClass("cur"),setTimeout(function(){i.elem.remove(),t&&"function"==e.type(t)&&t(),o.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(e,i(3))},30:function(t,e){},45:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=i(28),a=i(8),s=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{showStrategy:!1,beginCounter:0,roundScore:0,miliseconds:5e3,adding:[!1,!1,!1,!1,!1],addIndex:0,isPushing:!1,isAjaxing:!1}},components:{"lock-screen":function(t){i.e(11).then(function(){var e=[i(31)];t.apply(null,e)}.bind(this)).catch(i.oe)}},computed:{seconds:function(){var t=this.miliseconds,e=Math.floor(t%1e3/10);return(t<1e4?"0":"")+Math.floor(t/1e3)+"."+(e<10?"0":"")+e},roundTime:function(){return 5e3},unitScore:function(){return 5}},watch:{miliseconds:function(t,e){var i=this;0===t&&setTimeout(function(){i.sendPlayResult()},1e3)}},mounted:function(){t.setImgSize(),t.isLogin?this.getInitData():t.login()},methods:{getInitData:function(){var e=this;if(!t.isLogin)return!1;this.isAjaxing=!0;var i={uid:t.uid};(0,n.requestService)(n.httpChance,i,function(t){e.isAjaxing=!1;var i=t.success,n=t.errorMsg;if(0==i)return(0,s.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:n||"系统错误，请联系客服。",btnBackHome:!1}}),bus.$once("closePopEvent",e.onBack),!1;e.showStrategy=t.map.isFirst,e.showStrategy?setTimeout(function(){e.showStrategy=!1,e.beginCounter=3,e.getGameSign()},3e3):(e.beginCounter=3,e.getGameSign())})},getGameSign:function(){var e=this,i=!1,a=setInterval(function(){e.beginCounter>1?e.beginCounter--:i&&(e.beginCounter=0,clearInterval(a),e.gameRun())},1e3),o={uid:t.uid};(0,n.requestService)(n.httpGetSign,o,function(t){var n=t.success,o=t.errorMsg;if(0==n)return(0,s.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:o||"系统错误，请联系客服。",btnBackHome:!1}}),bus.$once("closePopEvent",e.onBack),!1;e.sign=t.map.uuid,e.beginCounter<=1?setTimeout(function(){e.beginCounter=0,e.gameRun(),clearInterval(a)},100):i=!0})},gameRun:function(){var e=this,i=Date.now(),n=setInterval(function(){var a=Date.now(),s=Math.max(5e3+i-a,0);if(s<2){clearInterval(n);for(var o=0;o<e.adding.length;o++)e.adding[o]=!1;e.miliseconds=0,t.setImgSize()}else e.miliseconds=s},10)},onPush:function(){var e=this;this.isPushing=!0,setTimeout(function(){e.isPushing=!1},60);var i=this.addIndex;this.adding[i]=!0,this.$nextTick(function(){t.setImgSize()}),this.addIndex+1==this.adding.length?this.addIndex=0:this.addIndex++,setTimeout(function(){e.adding[i]=!1,e.roundScore<200?e.roundScore+=5:e.miliseconds=0,t.setImgSize()},300)},sendPlayResult:function(){var e=this;if(!t.isLogin)return!1;this.isAjaxing=!0;var i=void 0,a=void 0,o=function(){e.isAjaxing=!1,i>0?(0,s.default)("showGift",{props:{transition:"rotate3d",popState:a,amount:i,highest:i>=200},on:{"close-only-event":e.onBack}}):(0,s.default)("notify",{props:{transition:"bounceIn",popState:3},on:{"close-only-event":e.onBack}})},c=!1;setTimeout(function(){c?o():c=!0},3e3);var r={uid:t.uid,uuid:this.sign,energyType:1,energyNum:this.roundScore,isMany:!1};(0,n.requestService)(n.httpPlay,r,function(t){var n=t.success,r=t.errorCode,d=t.errorMsg;if(0==n)return e.isAjaxing=!1,10009==r?(0,s.default)("notify",{props:{transition:"bounceIn",popState:1},on:{"close-only-event":e.onBack}}):((0,s.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:d||"系统错误，请联系客服。",btnBackHome:!1}}),bus.$once("closePopEvent",e.onBack)),!1;i=e.roundScore,a=t.map.prizeType,c?o():c=!0})},onBack:function(){t.wap?window.location.replace(window.location.pathname+"#/?wap=true&uid="+t.uid):window.location.replace(window.location.pathname+"#/?uid="+t.uid)}}}}).call(e,i(1))},56:function(t,e){},77:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("lock-screen",{attrs:{lock:t.isAjaxing}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.beginCounter>0,expression:"beginCounter > 0"}],staticClass:"begin-mask img-size",attrs:{"data-fontSize":"150"}},[i("div",{staticClass:"counter"},[t._v(t._s(t.beginCounter))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.beginCounter<=0,expression:"beginCounter <= 0"}],staticClass:"main-section"},[i("div",{staticClass:"img-size content-wrapper",attrs:{"data-width":"750","data-height":"1334"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showStrategy,expression:"showStrategy"}],staticClass:"img-size strategy",attrs:{"data-top":"0","data-left":"0","data-width":"750","data-height":"1334"}}),t._v(" "),i("div",{staticClass:"timer img-size",attrs:{"data-top":"123","data-left":"0","data-fontSize":"30","data-lineHeight":"64"}},[t._v("倒计时： "+t._s(t.seconds)+" 秒")]),t._v(" "),i("div",{staticClass:"counter img-size",attrs:{"data-top":"205","data-left":"0","data-fontSize":"30","data-lineHeight":"64"}},[t._v("成绩： "),i("span",{staticClass:"hlt"},[t._v(t._s(t.roundScore))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isPushing||t.miliseconds>=t.roundTime||t.miliseconds<=0,expression:"!isPushing || miliseconds >= roundTime || miliseconds <= 0"}],staticClass:"img-size init-player",attrs:{"data-top":"440","data-left":"30","data-width":"550","data-height":"576"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isPushing&&t.miliseconds<t.roundTime&&t.miliseconds>0,expression:"isPushing && miliseconds < roundTime && miliseconds > 0"}],staticClass:"img-size anm-player jianzi",attrs:{"data-top":"336","data-left":"0","data-width":"750","data-height":"681"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.miliseconds<t.roundTime&&t.miliseconds>0,expression:"miliseconds < roundTime && miliseconds > 0"}],staticClass:"play-box img-size",attrs:{"data-top":"0","data-left":"0"},on:{click:function(e){this.isPushing||t.onPush()}}}),t._v(" "),1==t.adding[0]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"450","data-left":"350"}},[i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"score img-size",attrs:{"data-fontSize":"30"}},[t._v("+"+t._s(t.unitScore))])])]):t._e(),t._v(" "),1==t.adding[1]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"450","data-left":"350"}},[i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"score img-size",attrs:{"data-fontSize":"30"}},[t._v("+"+t._s(t.unitScore))])])]):t._e(),t._v(" "),1==t.adding[2]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"450","data-left":"350"}},[i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"score img-size",attrs:{"data-fontSize":"30"}},[t._v("+"+t._s(t.unitScore))])])]):t._e(),t._v(" "),1==t.adding[3]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"450","data-left":"350"}},[i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"score img-size",attrs:{"data-fontSize":"30"}},[t._v("+"+t._s(t.unitScore))])])]):t._e(),t._v(" "),1==t.adding[4]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"450","data-left":"350"}},[i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"score img-size",attrs:{"data-fontSize":"30"}},[t._v("+"+t._s(t.unitScore))])])]):t._e()])])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});