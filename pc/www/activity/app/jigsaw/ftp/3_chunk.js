webpackJsonp([3],{13:function(t,e,n){n(44);var i=n(21)(n(25),n(62),null,null);i.options.__file="E:\\git\\source_tree\\jigsaw\\dr_pc_web\\www\\activity\\app\\jigsaw\\src\\module\\main\\index.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},21:function(t,e){t.exports=function(t,e,n,i){var s,o=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,o=t.default);var c="function"==typeof o?o.options:o;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n),i){var r=Object.create(c.computed||null);Object.keys(i).forEach(function(t){var e=i[t];r[t]=function(){return e}}),c.computed=r}return{esModule:s,exports:o,options:c}}},22:function(t,e,n){"use strict";t.exports={httpStatus:"/activity/august/puzzle/status.do",httpParticipate:"/activity/august/puzzle/participate.do",httpMyScore:"/activity/august/puzzle/index.do",httpMyPiece:"/activity/august/puzzle/my_debris.do",httpShake:"/activity/august/puzzle/shark_it_off.do",httpConvert:"/activity/august/puzzle/debris_convert.do",httpRank:"/activity/august/puzzle/my_rank.do"}},23:function(t,e,n){"use strict";(function(e){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(24);var o=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(o),c=e("body");t.exports=function(){function t(n){i(this,t);var s=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){s.close()},cancelCallback:function(){s.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},e.extend(this.config,n),this.init()}return s(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var n=e("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:n,title:n.find(".title"),close:n.find(".close"),bg:n.find(".pop-cnt"),content:n.find(".content"),submit:n.find(".submit"),okbtn:n.find(".okbtn"),nextbtn:n.find(".next"),cancelbtn:n.find(".unbind"),error:n.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,e=this.config,n=e.time+"s";t.okbtn.addClass(e.okCls).html(e.okTxt),t.nextbtn.html(e.nextTxt),t.cancelbtn.addClass(e.cancelCls).html(e.cancelTxt),1==e.mask&&this.addContent("<div class='loading'></div>"),t.title.html(e.title),e.content&&this.add(function(){return e.content}),t.elem.addClass(e.superClass),t.bg.addClass(e.class),t.bg.css({"transition-duration":n,"animation-duration":n}),t.bg.css({"-webkit-transition-duration":n,"-webkit-animation-duration":n}),e.width&&t.bg.css({width:e.width}),e.title.length<2&&t.title.remove(),0==e.okBtn&&t.okbtn.remove(),0==e.nextBtn&&t.nextbtn.remove(),0==e.cancelBtn&&t.cancelbtn.remove(),0==e.okBtn&&0==e.cancelBtn&&t.submit.remove(),0==e.close&&t.close.remove()}},{key:"add",value:function(t){var e=this,n=this.element,i=this;return n.elem.parent().length?i.close():(c.append(n.elem),this.addContent(t),setTimeout(function(){n.bg.addClass("cur")},i.config.timingTime),a.default.body.css({overflowY:"hidden"}),i.history(),setTimeout(function(){e.updateEvent(),i.config.openDone()},i.config.time+20)),n.content}},{key:"addContent",value:function(t){var e=this.element.content;t&&"function"==typeof t?e.html(t.call(e)):e.html(t),setTimeout(function(){a.default.setImgSize()},100)}},{key:"history",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,e,n,i){function s(){t.removeClass("unbind").text(a),o.unbind(t,e,n,i)}var o=this,a=t.text();n=n||a,i=i||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(n),e(),setTimeout(s,1e3*i)})}},{key:"updateEvent",value:function(){var t=this,e=this.element,n=this.config;a.default.myAddListener(e.close,"mousedown",function(e){e.stopPropagation(),t.close()}),a.default.myAddListener(e.elem,"mousedown",function(e){e.stopPropagation(),n.windowClose&&t.close()}),a.default.myAddListener(e.bg,"mousedown",function(t){t.stopPropagation()}),1==n.okBtn&&a.default.myAddListener(e.okbtn,"mousedown",function(e){e.stopPropagation(),n.okCallback.call(t)}),1==n.nextBtn&&a.default.myAddListener(e.nextbtn,"mousedown",function(e){e.stopPropagation(),n.nextCallback.call(t)}),1==n.cancelBtn&&a.default.myAddListener(e.cancelbtn,"mousedown",function(e){e.stopPropagation(),n.cancelCallback.call(t)})}},{key:"error",value:function(t,e){var n=this.element.error,i=this.element.bg,s=this.config.time;i.addClass("errorcur"),n.html(t).addClass("cur"),setTimeout(function(){i.removeClass("errorcur"),i.css({"animation-duration":"0s"}),i.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){i.css({"animation-duration":s+"s"}),i.css({"-webkit-animation-duration":s+"s"})},1e3*s+10)},1e3*s+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var e=t.time||.1,n=this,i=this.element.error,s=this.config.time;i.html(t.txt).addClass("cur succee"),setTimeout(function(){n.hideError(),t.callback&&t.callback()},1e3*s+1e3*e)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var n=this.element;n.bg.removeClass("cur"),setTimeout(function(){n.elem.remove(),t&&"function"==e.type(t)&&t(),a.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(e,n(3))},24:function(t,e){},25:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(46),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={components:{Main:s.default}}},26:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=n(22),s=n(7),o=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={data:function(){return{status:0,startTime:0,endTime:0,isLogin:!1,pieceAmt:0,chanceNum:0,tabIndex:0}},computed:{},mounted:function(){t.setImgSize(),t.mobile(),t.getAppInfo(),this.isLogin=t.isLogin,this.getActivityStatus()},methods:{onPopRule:function(){(0,o.default)("explain",{props:{transition:"bounceIn",startTime:this.startTime,endTime:this.endTime}})},__requestService:function(e,i,s){t.ajax({url:e,data:i,callback:!0,success:function(t){if(!t.success&&!t.hasOwnProperty("errorMsg")){var e=n(23);new e({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}s(t)}})},getActivityStatus:function(){var t=this;this.__requestService(i.httpStatus,{},function(e){return 0==e.success&&e.hasOwnProperty("errorMsg")?((0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:e.errorMsg,btnBackHome:!0}}),!1):(t.status=e.map.status,t.startTime=e.map.startTime,t.endTime=e.map.endTime,t.status<0?((0,o.default)("warning",{props:{transition:"bounceIn",title:"敬请期待",detail:"活动即将开始, 期待您的热情参与!",btnBackHome:!0}}),!1):void(t.status>=0&&t.checkParticipatable()))})},checkParticipatable:function(){var e=this;if(!t.isLogin)return!1;var n={uid:t.uid};this.__requestService(i.httpParticipate+"?uid="+t.uid,n,function(t){if(t.flag){if(0==t.success&&t.hasOwnProperty("errorMsg"))return(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg,btnBackHome:!1}}),!1;0==e.status&&e.getMyScore()}else(0,o.default)("warning",{props:{transition:"bounceIn",title:"感谢关注！",detail:"VIP渠道用户不能参加，敬请期待后续活动……",btnBackHome:!0}})})},getMyScore:function(){var e=this;if(!t.isLogin)return!1;var n={uid:t.uid};this.__requestService(i.httpMyScore+"?uid="+t.uid,n,function(t){if(0==t.success&&t.hasOwnProperty("errorMsg"))return(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg,btnBackHome:!1}}),!1;e.chanceNum=t.map.totalchance,e.pieceAmt=t.map.debrisCounts})},login:function(){t.login()},onInvest:function(){t.callApp.investment()},onGoShake:function(){window.location.replace(window.location.pathname+"#/shake/?"+(1==t.wap?"wap=true&":"")+"uid="+t.uid),setTimeout(function(){window.location.reload()},300)},onGoMy:function(){this.isLogin?window.location.replace(window.location.pathname+"#/my/?"+(1==t.wap?"wap=true&":"")+"uid="+t.uid+"&from=home"):this.login()}}}}).call(e,n(0))},40:function(t,e){},44:function(t,e){},46:function(t,e,n){n(40);var i=n(21)(n(26),n(58),null,null);i.options.__file="E:\\git\\source_tree\\jigsaw\\dr_pc_web\\www\\activity\\app\\jigsaw\\src\\module\\main\\main.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},58:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-box img-size flip-left",attrs:{"data-width":"750","data-height":"1750"}},[n("div",{staticClass:"rule-btn",on:{click:t.onPopRule}}),t._v(" "),n("div",{staticClass:"img-size animate-topic",attrs:{"data-top":"110","data-left":"120","data-width":"510","data-height":"220"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.status>0,expression:"status > 0"}],staticClass:"end-btn img-size",attrs:{"data-left":"150","data-top":"554","data-height":"109","data-width":"450"}}),t._v(" "),t.status<=0?[n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.isLogin,expression:"isLogin == false"}],staticClass:"login-btn",on:{click:t.login}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1==t.isLogin&&t.chanceNum<=0,expression:"isLogin == true && chanceNum <= 0"}],staticClass:"invest-btn",on:{click:t.onInvest}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1==t.isLogin&&t.chanceNum>0,expression:"isLogin == true && chanceNum > 0"}],staticClass:"goto-shake-btn",on:{click:t.onGoShake}})]:t._e(),t._v(" "),n("div",{staticClass:"my-score"},[t._v("已获得"),n("span",[t._v(t._s(1==t.isLogin&&0==t.status?t.pieceAmt:"**"))]),t._v("个拼图碎片，你当前有"),n("span",[t._v(t._s(1==t.isLogin&&0==t.status?t.chanceNum:"**"))]),t._v("次摇一摇获取拼图的机会")]),t._v(" "),n("div",{staticClass:"my-link",on:{click:t.onGoMy}}),t._v(" "),n("div",{class:["know-how","img-size",{0:"how-ord",1:"how-com"}[t.tabIndex]],attrs:{"data-width":"670","data-height":"769"}},[n("div",{staticClass:"tab img-size",attrs:{"data-height":"95"},on:{click:function(e){t.tabIndex=0}}}),t._v(" "),n("div",{staticClass:"tab img-size",attrs:{"data-height":"95"},on:{click:function(e){t.tabIndex=1}}}),t._v(" "),n("div",{staticClass:"invest img-size",attrs:{"data-width":"493","data-height":"95"},on:{click:t.onInvest}})])],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},62:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-section"},[n("Main")],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});