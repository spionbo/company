webpackJsonp([9],{21:function(t,e){t.exports=function(t,e,o,n){var i,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,a=t.default);var r="function"==typeof a?a.options:a;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),o&&(r._scopeId=o),n){var c=Object.create(r.computed||null);Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}}),r.computed=c}return{esModule:i,exports:a,options:r}}},33:function(t,e,o){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{transition:String,prizeName:String,isWap:Boolean,uid:String,parent:Object},data:function(){return{showModal:!0}},mounted:function(){t.setImgSize()},methods:{closePropagtion:function(t){t.stopPropagation()},showPop:function(t){this.showModal=!0,"function"==o.type(t)&&setTimeout(t,550)},closePop:function(e){this.showModal=!1,t.getPop(e),bus.$emit("closePopEvent"),this.parent.isOnPop=!1},onGoMy:function(){var t=this;this.closePop(function(){window.location.replace(window.location.pathname+"#/my/?"+(1==t.isWap?"wap=true&":"")+"uid="+t.uid+"&from=shake"),window.location.reload()})}}}}).call(e,o(0),o(3))},37:function(t,e){},51:function(t,e,o){o(37);var n=o(21)(o(33),o(55),null,null);n.options.__file="E:\\git\\source_tree\\jigsaw\\dr_pc_web\\www\\activity\\app\\jigsaw\\src\\pop\\showPrize.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] showPrize.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},55:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:t.transition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask show-prize"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container pop-cnt img-size",attrs:{"data-width":"552","data-height":"584"},on:{click:function(e){t.closePropagtion(e)}}},[t._t("close",[o("div",{staticClass:"close img-size",attrs:{"data-width":"80","data-height":"80","data-top":"5","data-right":"5"},on:{click:t.closePop}})]),t._v(" "),o("div",{staticClass:"img-size prize-name",attrs:{"data-top":"390","data-width":"100%"}},[t._v(t._s(t.prizeName))]),t._v(" "),o("div",{staticClass:"img-size my-link",attrs:{"data-top":"527","data-left":"74","data-width":"117","data-height":"26"},on:{click:t.onGoMy}})],2)])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});