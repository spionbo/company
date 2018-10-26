webpackJsonp([3],{19:function(t,e,n){"use strict";function o(t){s||n(48)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(34),r=n.n(i),a=n(64),s=!1,u=n(8),c=o,l=u(r.a,a.a,c,"data-v-a0ac388e",null);l.options.__file="src\\module\\registersuccess\\index.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},22:function(t,e,n){"use strict";(function(t){function o(t){$&&(t._devtoolHook=$,$.emit("vuex:init",t),$.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){$.emit("vuex:mutation",t,e)}))}function i(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function r(t){return null!==t&&"object"==typeof t}function a(t){return t&&"function"==typeof t.then}function s(t,e){if(!t)throw new Error("[vuex] "+e)}function u(t,e){if(t.update(e),e.modules)for(var n in e.modules){if(!t.getChild(n))return void console.warn("[vuex] trying to add a new module '"+n+"' on hot reloading, manual reload is needed");u(t.getChild(n),e.modules[n])}}function c(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;d(t,n,[],t._modules.root,!0),l(t,n,e)}function l(t,e,n){var o=t._vm;t.getters={};var r=t._wrappedGetters,a={};i(r,function(e,n){a[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=E.config.silent;E.config.silent=!0,t._vm=new E({data:{$$state:e},computed:a}),E.config.silent=s,t.strict&&_(t),o&&(n&&t._withCommit(function(){o._data.$$state=null}),E.nextTick(function(){return o.$destroy()}))}function d(t,e,n,o,i){var r=!n.length,a=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[a]=o),!r&&!i){var s=g(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){E.set(s,u,o.state)})}var c=o.context=f(t,a,n);o.forEachMutation(function(e,n){h(t,a+n,e,c)}),o.forEachAction(function(e,n){m(t,a+n,e,c)}),o.forEachGetter(function(e,n){v(t,a+n,e,c)}),o.forEachChild(function(o,r){d(t,e,n.concat(r),o,i)})}function f(t,e,n){var o=""===e,i={dispatch:o?t.dispatch:function(n,o,i){var r=y(n,o,i),a=r.payload,s=r.options,u=r.type;return s&&s.root||(u=e+u,t._actions[u])?t.dispatch(u,a):void console.error("[vuex] unknown local action type: "+r.type+", global type: "+u)},commit:o?t.commit:function(n,o,i){var r=y(n,o,i),a=r.payload,s=r.options,u=r.type;if(!(s&&s.root||(u=e+u,t._mutations[u])))return void console.error("[vuex] unknown local mutation type: "+r.type+", global type: "+u);t.commit(u,a,s)}};return Object.defineProperties(i,{getters:{get:o?function(){return t.getters}:function(){return p(t,e)}},state:{get:function(){return g(t.state,n)}}}),i}function p(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(i){if(i.slice(0,o)===e){var r=i.slice(o);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),n}function h(t,e,n,o){(t._mutations[e]||(t._mutations[e]=[])).push(function(t){n(o.state,t)})}function m(e,n,o,i){(e._actions[n]||(e._actions[n]=[])).push(function(n,r){var s=o({dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},n,r);return a(s)||(s=t.resolve(s)),e._devtoolHook?s.catch(function(t){throw e._devtoolHook.emit("vuex:error",t),t}):s})}function v(t,e,n,o){if(t._wrappedGetters[e])return void console.error("[vuex] duplicate getter key: "+e);t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)}}function _(t){t._vm.$watch(function(){return this._data.$$state},function(){s(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function g(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function y(t,e,n){return r(t)&&t.type&&(n=e,e=t,t=t.type),s("string"==typeof t,"Expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}function w(t){if(E)return void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.");E=t,O(E)}function b(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function M(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function x(t,e,n){var o=t._modulesNamespaceMap[n];return o||console.error("[vuex] module namespace not found in "+e+"(): "+n),o}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"Store",function(){return P}),n.d(e,"mapState",function(){return A}),n.d(e,"mapMutations",function(){return z}),n.d(e,"mapGetters",function(){return G}),n.d(e,"mapActions",function(){return N});/**
 * vuex v2.3.0
 * (c) 2017 Evan You
 * @license MIT
 */
var O=function(t){function e(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}if(Number(t.version.split(".")[0])>=2){var n=t.config._lifecycleHooks.indexOf("init")>-1;t.mixin(n?{init:e}:{beforeCreate:e})}else{var o=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,o.call(this,t)}}},$="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,C=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},j={namespaced:{}};j.namespaced.get=function(){return!!this._rawModule.namespaced},C.prototype.addChild=function(t,e){this._children[t]=e},C.prototype.removeChild=function(t){delete this._children[t]},C.prototype.getChild=function(t){return this._children[t]},C.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},C.prototype.forEachChild=function(t){i(this._children,t)},C.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},C.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},C.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(C.prototype,j);var k=function(t){var e=this;this.root=new C(t,!1),t.modules&&i(t.modules,function(t,n){e.register([n],t,!1)})};k.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},k.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},k.prototype.update=function(t){u(this.root,t)},k.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var r=this.get(t.slice(0,-1)),a=new C(e,n);r.addChild(t[t.length-1],a),e.modules&&i(e.modules,function(e,i){o.register(t.concat(i),e,n)})},k.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var E,P=function(e){var n=this;void 0===e&&(e={}),s(E,"must call Vue.use(Vuex) before creating a store instance."),s(void 0!==t,"vuex requires a Promise polyfill in this browser.");var i=e.state;void 0===i&&(i={});var r=e.plugins;void 0===r&&(r=[]);var a=e.strict;void 0===a&&(a=!1),this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new k(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new E;var u=this,c=this,f=c.dispatch,p=c.commit;this.dispatch=function(t,e){return f.call(u,t,e)},this.commit=function(t,e,n){return p.call(u,t,e,n)},this.strict=a,d(this,i,[],this._modules.root),l(this,i),r.concat(o).forEach(function(t){return t(n)})},S={state:{}};S.state.get=function(){return this._vm._data.$$state},S.state.set=function(t){s(!1,"Use store.replaceState() to explicit replace store state.")},P.prototype.commit=function(t,e,n){var o=this,i=y(t,e,n),r=i.type,a=i.payload,s=i.options,u={type:r,payload:a},c=this._mutations[r];if(!c)return void console.error("[vuex] unknown mutation type: "+r);this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(u,o.state)}),s&&s.silent&&console.warn("[vuex] mutation type: "+r+". Silent option has been removed. Use the filter functionality in the vue-devtools")},P.prototype.dispatch=function(e,n){var o=y(e,n),i=o.type,r=o.payload,a=this._actions[i];return a?a.length>1?t.all(a.map(function(t){return t(r)})):a[0](r):void console.error("[vuex] unknown action type: "+i)},P.prototype.subscribe=function(t){var e=this._subscribers;return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}},P.prototype.watch=function(t,e,n){var o=this;return s("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},P.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},P.prototype.registerModule=function(t,e){"string"==typeof t&&(t=[t]),s(Array.isArray(t),"module path must be a string or an Array."),this._modules.register(t,e),d(this,this.state,t,this._modules.get(t)),l(this,this.state)},P.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),s(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var n=g(e.state,t.slice(0,-1));E.delete(n,t[t.length-1])}),c(this)},P.prototype.hotUpdate=function(t){this._modules.update(t),c(this,!0)},P.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(P.prototype,S),"undefined"!=typeof window&&window.Vue&&w(window.Vue);var A=M(function(t,e){var n={};return b(e).forEach(function(e){var o=e.key,i=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=x(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof i?i.call(this,e,n):e[i]},n[o].vuex=!0}),n}),z=M(function(t,e){var n={};return b(e).forEach(function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||x(this.$store,"mapMutations",t))return this.$store.commit.apply(this.$store,[i].concat(e))}}),n}),G=M(function(t,e){var n={};return b(e).forEach(function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){if(!t||x(this.$store,"mapGetters",t))return i in this.$store.getters?this.$store.getters[i]:void console.error("[vuex] unknown getter: "+i)},n[o].vuex=!0}),n}),N=M(function(t,e){var n={};return b(e).forEach(function(e){var o=e.key,i=e.val;i=t+i,n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||x(this.$store,"mapActions",t))return this.$store.dispatch.apply(this.$store,[i].concat(e))}}),n}),V={Store:P,install:w,version:"2.3.0",mapState:A,mapMutations:z,mapGetters:G,mapActions:N};e.default=V}).call(e,n(1))},23:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i=n(22);e.default={props:["titleName"],data:function(){return{titleName:"",showModal:!0}},computed:o({},(0,i.mapState)(["user"]),(0,i.mapGetters)(["userInfo"])),mounted:function(){},methods:{close:function(){var t=this;this.showModal=!1,setTimeout(function(){$(t.$el).remove()},510)},download:function(){t.btnEvent()}}}}).call(e,n(0))},24:function(t,e){},25:function(t,e,n){"use strict";function o(t){s||n(24)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(23),r=n.n(i),a=n(26),s=!1,u=n(8),c=o,l=u(r.a,a.a,c,"data-v-78d69450",null);l.options.__file="src\\components\\download.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] download.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},26:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"download img-size",attrs:{"data-height":"90"}},[n("div",{staticClass:"close img-size",attrs:{"data-width":"25","data-height":"25","data-marginTop":"33","data-marginLeft":"14"},on:{click:t.close}}),t._v(" "),n("div",{staticClass:"logo img-size",attrs:{"data-width":"75","data-height":"75","data-marginLeft":"17","data-marginTop":"8","data-marginRight":"24"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"downloadBtn img-size",attrs:{"data-width":"260","data-height":"90","data-lineHeight":"90","data-fontSize":"36"},on:{click:t.download}},[t._v("立即下载")])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"name img-size",attrs:{"data-paddingTop":"10"}},[n("div",{staticClass:"appName img-size",attrs:{"data-fontSize":"30","data-height":"40","data-lineHeight":"40"}},[t._v("粒粒钱包")]),t._v(" "),n("div",{staticClass:"downapp img-size",attrs:{"data-fontSize":"20","data-height":"30","data-lineHeight":"30"}},[t._v("下载APP，轻松体验")])])}];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.a=r},34:function(t,e,n){"use strict";(function(t){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(25),r=o(i),a=n(52),s=o(a);e.default={components:{download:r.default,success:s.default},data:function(){return{titleName:"下载APP 完成最后几步"}},mounted:function(){document.title="下载APP 完成最后几步",t.setImgSize()},methods:{}}}).call(e,n(0))},35:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o=n(9);!function(t){t&&t.__esModule}(o);e.default={components:{},data:function(){return{}},mounted:function(){},methods:{down:function(){t.btnEvent()}}}}).call(e,n(0))},39:function(t,e){},48:function(t,e){},52:function(t,e,n){"use strict";function o(t){s||n(39)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(35),r=n.n(i),a=n(55),s=!1,u=n(8),c=o,l=u(r.a,a.a,c,"data-v-1007e2aa",null);l.options.__file="src\\module\\registersuccess\\success.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] success.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},55:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"success left-sider img-size",attrs:{"data-paddingBottom":"180"}},[n("div",{staticClass:"successimg img-size",attrs:{"data-height":"744","data-marginBottom":"80"}}),t._v(" "),n("div",{staticClass:"appBtn img-size",attrs:{"data-width":"540","data-height":"90","data-fontSize":"36","data-lineHeight":"90"},on:{click:t.down}},[t._v("下载APP")]),t._v(" "),n("div",{staticClass:"appContent img-size",attrs:{"data-fontSize":"36"}},[t._v("下载APP，完成最后几步")])])},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.a=r},64:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"main child-transition"},[n("download"),t._v(" "),n("success")],1)},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.a=r}});