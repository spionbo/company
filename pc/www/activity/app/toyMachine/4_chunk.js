webpackJsonp([4],{19:function(t,a,i){i(47);var e=i(25)(i(36),i(72),null,null);e.options.__file="E:\\git\\duorongcf\\develop\\pc\\nodejsSever\\static\\activity\\app\\2018\\06\\toyMachine\\src\\module\\main\\rule.vue",e.esModule&&Object.keys(e.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] rule.vue: functional components are not supported with templates, they should use render functions."),t.exports=e.exports},25:function(t,a){t.exports=function(t,a,i,e){var s,n=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(s=t,n=t.default);var r="function"==typeof n?n.options:n;if(a&&(r.render=a.render,r.staticRenderFns=a.staticRenderFns),i&&(r._scopeId=i),e){var o=Object.create(r.computed||null);Object.keys(e).forEach(function(t){var a=e[t];o[t]=function(){return a}}),r.computed=o}return{esModule:s,exports:n,options:r}}},26:function(t,a,i){"use strict";(function(a){var e=function(t,e,s){a.ajax({url:t,data:e,callback:!0,success:function(t){if(!t.success&&!t.errorMsg){var a=i(27);new a({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}s(t)}})};t.exports={requestService:e,httpStatus:"/activity/1806/status.do",httpParticipate:"/activity/1806/participate.do",httpChance:"/activity/1806/chance.do",httpPlay:"/activity/1806/game.do",httpMyGift:"/activity/1806/gift_record.do",httpGetSign:"/activity/1806/game_init.do",httpRank:"/activity/1806/rank.do",httpXchg:"/activity/1806/convert.do"}}).call(a,i(1))},27:function(t,a,i){"use strict";(function(a){function e(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(t,a){for(var i=0;i<a.length;i++){var e=a[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(a,i,e){return i&&t(a.prototype,i),e&&t(a,e),a}}();i(28);var n=i(1),d=function(t){return t&&t.__esModule?t:{default:t}}(n),r=a("body");t.exports=function(){function t(i){e(this,t);var s=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){s.close()},cancelCallback:function(){s.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},a.extend(this.config,i),this.init()}return s(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var i=a("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:i,title:i.find(".title"),close:i.find(".close"),bg:i.find(".pop-cnt"),content:i.find(".content"),submit:i.find(".submit"),okbtn:i.find(".okbtn"),nextbtn:i.find(".next"),cancelbtn:i.find(".unbind"),error:i.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,a=this.config,i=a.time+"s";t.okbtn.addClass(a.okCls).html(a.okTxt),t.nextbtn.html(a.nextTxt),t.cancelbtn.addClass(a.cancelCls).html(a.cancelTxt),1==a.mask&&this.addContent("<div class='loading'></div>"),t.title.html(a.title),a.content&&this.add(function(){return a.content}),t.elem.addClass(a.superClass),t.bg.addClass(a.class),t.bg.css({"transition-duration":i,"animation-duration":i}),t.bg.css({"-webkit-transition-duration":i,"-webkit-animation-duration":i}),a.width&&t.bg.css({width:a.width}),a.title.length<2&&t.title.remove(),0==a.okBtn&&t.okbtn.remove(),0==a.nextBtn&&t.nextbtn.remove(),0==a.cancelBtn&&t.cancelbtn.remove(),0==a.okBtn&&0==a.cancelBtn&&t.submit.remove(),0==a.close&&t.close.remove()}},{key:"add",value:function(t){var a=this,i=this.element,e=this;return i.elem.parent().length?e.close():(r.append(i.elem),this.addContent(t),setTimeout(function(){i.bg.addClass("cur")},e.config.timingTime),d.default.body.css({overflowY:"hidden"}),e.history(),setTimeout(function(){a.updateEvent(),e.config.openDone()},e.config.time+20)),i.content}},{key:"addContent",value:function(t){var a=this.element.content;t&&"function"==typeof t?a.html(t.call(a)):a.html(t),setTimeout(function(){d.default.setImgSize()},100)}},{key:"history",value:function(t){function a(){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,a,i,e){function s(){t.removeClass("unbind").text(d),n.unbind(t,a,i,e)}var n=this,d=t.text();i=i||d,e=e||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(i),a(),setTimeout(s,1e3*e)})}},{key:"updateEvent",value:function(){var t=this,a=this.element,i=this.config;d.default.myAddListener(a.close,"mousedown",function(a){a.stopPropagation(),t.close()}),d.default.myAddListener(a.elem,"mousedown",function(a){a.stopPropagation(),i.windowClose&&t.close()}),d.default.myAddListener(a.bg,"mousedown",function(t){t.stopPropagation()}),1==i.okBtn&&d.default.myAddListener(a.okbtn,"mousedown",function(a){a.stopPropagation(),i.okCallback.call(t)}),1==i.nextBtn&&d.default.myAddListener(a.nextbtn,"mousedown",function(a){a.stopPropagation(),i.nextCallback.call(t)}),1==i.cancelBtn&&d.default.myAddListener(a.cancelbtn,"mousedown",function(a){a.stopPropagation(),i.cancelCallback.call(t)})}},{key:"error",value:function(t,a){var i=this.element.error,e=this.element.bg,s=this.config.time;e.addClass("errorcur"),i.html(t).addClass("cur"),setTimeout(function(){e.removeClass("errorcur"),e.css({"animation-duration":"0s"}),e.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){e.css({"animation-duration":s+"s"}),e.css({"-webkit-animation-duration":s+"s"})},1e3*s+10)},1e3*s+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var a=t.time||.1,i=this,e=this.element.error,s=this.config.time;e.html(t.txt).addClass("cur succee"),setTimeout(function(){i.hideError(),t.callback&&t.callback()},1e3*s+1e3*a)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var i=this.element;i.bg.removeClass("cur"),setTimeout(function(){i.elem.remove(),t&&"function"==a.type(t)&&t(),d.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(a,i(2))},28:function(t,a){},36:function(t,a,i){"use strict";(function(t,e){Object.defineProperty(a,"__esModule",{value:!0});var s=i(26),n=i(9),d=function(t){return t&&t.__esModule?t:{default:t}}(n);a.default={data:function(){return{startTime:0,endTime:0,collectPrize:[["1","小米移动电源5000mah"],["3","欧乐B电动牙刷"],["5","Kindle入门款"],["8","富士instax拍立得"],["10","倍轻松眼部按摩仪"]],totalRankPrize:["Macbook Air 13.3","Irobot扫地机器人","Kindle voyage","SK2大红瓶精华露","博朗剃须刀","LG趣拍得","小米电饭煲","飞利浦多士炉","小米移动电源高配版","星享卡"]}},filters:{convertTimestampToDatetime:function(t){var a=new Date(t);return a?a.Format("yyyy.M.d"):t}},mounted:function(){if(t.setImgSize(),this.getActivityPeriod(),t.getQueryString("scroll")){var a=document.getElementsByClassName("scroll-dest")[0],i=a.getBoundingClientRect();e(".rule-main").scrollTop(i.top)}},methods:{getActivityPeriod:function(){var t=this;(0,s.requestService)(s.httpStatus,{},function(a){var i=a.success,e=a.errorMsg;if(0==i)return(0,d.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:e||"系统错误，请联系客服。",btnBackHome:!1}}),bus.$once("closePopEvent",t.onBack),!1;t.startTime=a.map.startTime,t.endTime=a.map.endTime})},onBack:function(){var a=window.location.pathname;t.wap?(a+="?wap=true",t.isLogin&&(a+="&uid="+t.uid)):t.isLogin&&(a+="?uid="+t.uid),window.location.replace(a)}}}}).call(a,i(1),i(2))},47:function(t,a){},72:function(t,a,i){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"rule-main flip-left-bounce"},[i("div",{staticClass:"img-size content-wrapper",attrs:{"data-width":"750","data-height":"3200"}},[i("div",{staticClass:"back-btn img-size",attrs:{"data-left":"20","data-top":"13","data-width":"59","data-height":"57","data-fontSize":"64","data-lineHeight":"64"},on:{click:t.onBack}}),t._v(" "),i("div",{staticClass:"rule-area img-size",attrs:{"data-top":"170","data-left":"32","data-width":"700","data-fontSize":"30","data-lineHeight":"48"}},[i("div",{staticClass:"item"},[t._m(0),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("活动时间："+t._s(t._f("convertTimestampToDatetime")(t.startTime))+" ~ "+t._s(t._f("convertTimestampToDatetime")(t.endTime)))])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),i("div",{staticClass:"item"},[t._m(4),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("【集“童年回忆” 换精彩大礼】"),i("br"),t._v("集齐哆啦A梦等6个不同的公仔（“童年回忆”），可获得奖励，如下：\n          "),t._m(5),t._v(" "),t._l(t.collectPrize,function(a,e){return i("div",{staticClass:"row bg-clrfu",class:e+1==t.collectPrize.length?"last":""},[i("div",{staticClass:"td left img-size",attrs:{"data-width":"170","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(a[0])+"套")]),i("div",{staticClass:"td img-size",attrs:{"data-width":"340","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(a[1]))])])}),t._v(" "),t._m(6)],2)]),t._v(" "),i("div",{staticClass:"item"},[t._m(7),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("【排名奖励】"),i("br"),t._v("根据获得的娃娃机公仔总数量，进行排名，前10名获得大奖，如下：\n          "),t._m(8),t._v(" "),t._l(t.totalRankPrize,function(a,e){return i("div",{staticClass:"row bg-clrfu",class:e+1==t.totalRankPrize.length?"last":""},[i("div",{staticClass:"td left img-size",attrs:{"data-width":"170","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(e+1))]),i("div",{staticClass:"td img-size",attrs:{"data-width":"340","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(a))])])}),t._v(" "),i("div",{staticClass:"inner-item comment img-size",attrs:{"data-fontSize":"24","data-lineHeight":"32"}},[t._v("* 以活动结束最终排名为准。如总数量相同，则按时间顺序优先排名。\n          ")])],2)]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11)])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[i("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"item"},[i("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[i("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})]),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("活动期间，单笔投资≥20天产品，每满10000元，可获得1次抓娃娃机机会。单笔投资≥120天产品，每满50000元，额外获得10次抓娃娃机机会。"),i("br"),i("p",{staticClass:"img-size",attrs:{"data-marginTop":"10"}},[t._v("例如：投资143天产品8万，可获得18次机会，以此类推。")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"item"},[i("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[i("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})]),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("【抓娃娃机】"),i("br"),t._v("抓娃娃机公仔，包括：哆啦A梦、麦兜、灰太狼、奥特曼、葫芦娃、黑猫警长，每抓到一个，随机获得小奖品一份，100%有奖，如下："),i("br"),t._v(" "),i("div",{staticClass:"row img-size",attrs:{"data-marginLeft":"14","data-marginTop":"28","data-marginBottom":"20"}},[i("div",{staticClass:"td out-left bg-clrfu img-size",attrs:{"data-width":"84","data-height":"192"}},[i("div",{staticClass:"img-size",attrs:{"data-width":"60","data-fontSize":"24"}},[t._v("奖品包含")])]),i("div",{staticClass:"td out-right img-size"},[i("div",{staticClass:"row bg-clrfu"},[i("div",{staticClass:"td  head left img-size",attrs:{"data-paddingLeft":"20","data-width":"256","data-fontSize":"24","data-lineHeight":"48"}},[t._v("积分：1 / 3 / 5 ")]),i("div",{staticClass:"td head img-size",attrs:{"data-width":"171","data-paddingLeft":"20","data-fontSize":"24","data-lineHeight":"48"}},[t._v("2.0%加息券")])]),t._v(" "),i("div",{staticClass:"row bg-clrfu"},[i("div",{staticClass:"td left img-size",attrs:{"data-paddingLeft":"20","data-width":"256","data-fontSize":"24","data-lineHeight":"48"}},[t._v("5元JD卡")]),i("div",{staticClass:"td img-size",attrs:{"data-width":"171","data-paddingLeft":"20","data-fontSize":"24","data-lineHeight":"48"}},[t._v("30元JD卡")])]),t._v(" "),i("div",{staticClass:"row bg-clrfu"},[i("div",{staticClass:"td left img-size",attrs:{"data-paddingLeft":"20","data-width":"256","data-fontSize":"24","data-lineHeight":"48"}},[t._v("星享卡")]),i("div",{staticClass:"td img-size",attrs:{"data-width":"171","data-paddingLeft":"20","data-fontSize":"24","data-lineHeight":"48"}},[t._v("摩飞榨汁机")])]),t._v(" "),i("div",{staticClass:"row bg-clrfu last"},[i("div",{staticClass:"td left img-size",attrs:{"data-paddingLeft":"20","data-width":"256","data-fontSize":"24","data-lineHeight":"48"}},[t._v("BOSE蓝牙电子音箱")]),i("div",{staticClass:"td img-size",attrs:{"data-width":"171","data-paddingLeft":"20","data-fontSize":"24","data-lineHeight":"48"}},[t._v(" ")])])])])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"item"},[i("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[i("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})]),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("【疯狂抓娃娃机模式】"),i("br"),t._v("活动期间，累计投资≥120天产品满30万，即可开启疯狂模式，未使用的全部机会升级为疯狂模式。疯狂模式下，每回游戏可开启两个抓手，可抓到两个公仔，可随机获取2份小奖品。\n        ")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[i("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"row bg-clrfu img-size",attrs:{"data-marginTop":"28"}},[i("div",{staticClass:"td head left img-size",attrs:{"data-width":"170","data-fontSize":"24","data-lineHeight":"48"}},[t._v("集齐套数")]),i("div",{staticClass:"td head img-size",attrs:{"data-width":"340","data-fontSize":"24","data-lineHeight":"48"}},[t._v("奖 励")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("p",{staticClass:"img-size",attrs:{"data-marginTop":"10"}},[t._v("奖励在满足条件后自动获得，无需兑换"),i("br"),t._v("以最高奖励为准，不重复获得")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[i("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"row bg-clrfu img-size",attrs:{"data-marginTop":"28"}},[i("div",{staticClass:"td head left img-size",attrs:{"data-width":"170","data-fontSize":"24","data-lineHeight":"48"}},[t._v("名 次")]),i("div",{staticClass:"td head img-size",attrs:{"data-width":"340","data-fontSize":"24","data-lineHeight":"48"}},[t._v("奖 品")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"item"},[i("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[i("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})]),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("活动结束之后，尚未使用的抓娃娃机机会一律作废。如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格；")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"item"},[i("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[i("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})]),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("奖品以活动奖品以实物为准，平台将在活动结束后的15个工作日内完成礼品的发放；积分、红包、加息券实时发放；积分可用于前往“积分商城”兑换红包、加息券、各种实物奖励等")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"item"},[i("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[i("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})]),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("本活动最终解释权归多融财富所有")])])}]},t.exports.render._withStripped=!0}});