webpackJsonp([16],{25:function(t,e){t.exports=function(t,e,a,o){var n,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(n=t,i=t.default);var r="function"==typeof i?i.options:i;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),a&&(r._scopeId=a),o){var d=Object.create(r.computed||null);Object.keys(o).forEach(function(t){var e=o[t];d[t]=function(){return e}}),r.computed=d}return{esModule:n,exports:i,options:r}}},38:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0});var o=[{gradeSet:1,name:"小米移动电源5000mah"},{gradeSet:3,name:"欧乐B电动牙刷"},{gradeSet:5,name:"Kindle入门款"},{gradeSet:8,name:"富士instax拍立得"},{gradeSet:10,name:"倍轻松眼部按摩仪"}];e.default={props:{transition:String},data:function(){return{showModal:!0}},computed:{gifts:function(){return o}},mounted:function(){t.setImgSize()},methods:{closePropagtion:function(t){t.stopPropagation()},showPop:function(t){this.showModal=!0,"function"==a.type(t)&&setTimeout(t,550)},closePop:function(e){this.showModal=!1,t.getPop(e)},onClose:function(){this.closePop(function(){})}}}}).call(e,a(1),a(2))},52:function(t,e){},65:function(t,e,a){a(52);var o=a(25)(a(38),a(77),"data-v-7c998b94",null);o.options.__file="E:\\git\\duorongcf\\develop\\pc\\nodejsSever\\static\\activity\\app\\2018\\06\\toyMachine\\src\\pop\\aboutXchg.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] aboutXchg.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},77:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transition}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask about-xchg"},[a("div",{staticClass:"modal-wrapper img-size",attrs:{"data-borderRadius":"16","data-padding":"4"}},[a("div",{staticClass:"modal-container pop-cnt img-size",attrs:{"data-borderRadius":"12","data-width":"590"},on:{click:function(e){t.closePropagtion(e)}}},[t._t("close",[a("div",{staticClass:"close img-size",attrs:{"data-width":"64","data-height":"64","data-top":"-10","data-right":"-4","data-fontSize":"64","data-lineHeight":"64"},on:{click:t.onClose}},[t._v("×")])]),t._v(" "),a("div",{staticClass:"title img-size",attrs:{"data-height":"60"}},[a("span",{staticClass:"img-size",attrs:{"data-marginLeft":"20","data-fontSize":"30","data-lineHeight":"60"}},[t._v("奖品介绍")])]),t._v(" "),a("table",{staticClass:"img-size",attrs:{"data-marginTop":"35","data-fontSize":"24","data-lineHeight":"48"}},[a("tr",[a("th",{staticClass:"img-size set"},[t._v("集齐套数")]),t._v(" "),a("th",{staticClass:"img-size gift"},[t._v("奖 品")])]),t._v(" "),t._l(t.gifts,function(e){return a("tr",[a("td",[t._v(t._s(e.gradeSet)+"套")]),t._v(" "),a("td",[t._v(t._s(e.name))])])})],2),t._v(" "),a("div",{staticClass:"img-size note",attrs:{"data-marginTop":"40","data-marginBottom":"60","data-fontSize":"24","data-lineHeight":"36"}},[t._v("奖励在满足条件后自动获得，无需兑换"),a("br"),t._v("以最高奖励为准，不重复获得")])],2)])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});