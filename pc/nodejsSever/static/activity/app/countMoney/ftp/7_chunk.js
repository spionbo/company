webpackJsonp([7],{24:function(t,e){t.exports=function(t,e,n,o){var i,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,a=t.default);var r="function"==typeof a?a.options:a;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),n&&(r._scopeId=n),o){var d=Object.create(r.computed||null);Object.keys(o).forEach(function(t){var e=o[t];d[t]=function(){return e}}),r.computed=d}return{esModule:i,exports:a,options:r}}},30:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{transition:String},data:function(){return{showModal:!0}},mounted:function(){t.setImgSize()},methods:{closePropagtion:function(t){t.stopPropagation()},showPop:function(t){this.showModal=!0,"function"==n.type(t)&&setTimeout(t,550)},closePop:function(e){this.showModal=!1,t.getPop(e),bus.$emit("closePopEvent")}}}}).call(e,n(0),n(3))},34:function(t,e){},40:function(t,e,n){n(34);var o=n(24)(n(30),n(44),"data-v-5bc96785",null);o.options.__file="E:\\products\\pc\\activity\\app\\countMoney\\src\\pop\\rule.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] rule.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},44:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask explain",on:{click:t.closePop}},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container pop-cnt img-size",attrs:{"data-paddingTop":"35","data-paddingLeft":"33","data-paddingRight":"33","data-width":"630","data-height":"929"},on:{click:function(e){t.closePropagtion(e)}}},[n("div",{staticClass:"ruletitle"},[t._v("活动规则")]),t._v(" "),n("div",{staticClass:"close img-size",attrs:{"data-width":"31","data-height":"31","data-lineHeight":"31","data-fontSize":"40","data-top":"15","data-right":"15"},on:{click:t.closePop}},[t._v("×")]),t._v(" "),n("div",{staticClass:"content img-size",attrs:{"data-width":"626","data-height":"740","data-fontSize":"22"}},[n("ul",[n("li",[t._v("\r\n                            1.\t活动时间为2017年05月05日-2017年05月24日；\r\n                        ")]),t._v(" "),n("li",[t._v("\r\n                            2.\t活动期间用户每天登录即可获赠一次免费数普通钞票机会；\r\n                        ")]),t._v(" "),n("li",[t._v("\r\n                            3.\t钞票分为普通钞票、银钞和金钞，普通钞票面值为100元;银钞面值为188元；金钞面值288元\r\n                        ")]),t._v(" "),n("li",[t._v("\r\n                            4.\t单笔投资≥20天产品，每满5000元即可获赠1次数钞票，如买50000元，即可获赠10次数钞票次数，以此类推；\r\n                        ")]),t._v(" "),n("li",[t._v("\r\n\t\t\t\t\t\t\t5.\t单笔投资≥80天产品，满30000元即可额外赠送1次数银钞机会；单笔投资≥300天产品，满30000即可额外获得1次数金钞机会（银钞与金钞不同时获得）；\r\n                        ")]),t._v(" "),n("li",[t._v("\r\n\t\t\t\t\t\t\t6.  数钞票活动结束后，可按照最终面值总额获赠对应奖品，如下表所示：\r\n                        ")]),t._v(" "),n("li",[n("table",{staticClass:"img-size",attrs:{"data-width":"480","data-fontSize":"18"}},[n("tr",{staticClass:"img-size",attrs:{"data-width":"480"}},[n("td",{attrs:{width:"50%"}},[t._v("到达总额/元")]),n("td",{attrs:{width:"50%"}},[t._v("礼品名称")])]),t._v(" "),n("tr",[n("td",[t._v("20万≤金额＜28万")]),n("td",[t._v("30元京东购物卡")])]),t._v(" "),n("tr",[n("td",[t._v("28万≤金额＜48万")]),n("td",[t._v("50元京东购物卡")])]),t._v(" "),n("tr",[n("td",[t._v("48万≤金额＜68万")]),n("td",[t._v("100元京东购物卡")])]),t._v(" "),n("tr",[n("td",[t._v("68万≤金额＜98万")]),n("td",[t._v("150元京东购物卡")])]),t._v(" "),n("tr",[n("td",[t._v("98万≤金额＜188万")]),n("td",[t._v("400元京东购物卡")])]),t._v(" "),n("tr",[n("td",[t._v("188万≤金额")]),n("td",[t._v("800元京东购物卡")])])])]),t._v(" "),n("li",[t._v("\r\n                            7.  活动结束后，钞票数到金额最高者按照排名还可依次获赠Macbook Pro、百利金M800限量手工金尖钢笔、Muji无印良品净化器等奢华大奖，以最终名次为准；数钱成绩相同者，按最先到达者排名在前；\r\n                        ")]),t._v(" "),n("li",[t._v("\r\n\t\t\t\t\t\t\t8.\t如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格；\r\n                        ")]),t._v(" "),n("li",[t._v(" \r\n\t\t\t\t\t\t\t9.\t奖品以活动奖品以实物为准，平台将在活动结束后的15个 工作日内完成礼品的发放；\r\n                        ")]),t._v(" "),n("li",[t._v("\r\n\t\t\t\t\t\t\t10. 本活动最终解释权归多融财富所有。\r\n                        ")])])]),t._v(" "),n("div",{staticClass:"surebtn img-size",attrs:{"data-width":"308","data-height":"114"},on:{click:t.closePop}},[t._v("确定")])])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});