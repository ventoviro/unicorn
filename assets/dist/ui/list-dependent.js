!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ListDependent=e():t.ListDependent=e()}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{void 0!==c&&c.toStringTag&&Object.defineProperty(t,c.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{ListDependent:()=>he});const n=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},r=function(t){return t};var o=Math.max;const i="object"==typeof global&&global&&global.Object===Object&&global;var a="object"==typeof self&&self&&self.Object===Object&&self;const s=i||a||Function("return this")();var c=s.Symbol;const l=c;var p=Object.prototype,f=p.hasOwnProperty,h=p.toString,d=l?l.toStringTag:void 0;var v=Object.prototype.toString;var y=l?l.toStringTag:void 0;const _=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":y&&y in Object(t)?function(t){var e=f.call(t,d),n=t[d];try{t[d]=void 0;var r=!0}catch(t){}var o=h.call(t);return r&&(e?t[d]=n:delete t[d]),o}(t):function(t){return v.call(t)}(t)},b=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},j=function(t){if(!b(t))return!1;var e=_(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},g=s["__core-js_shared__"];var O,m=(O=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"";var x=Function.prototype.toString;var w=/^\[object .+?Constructor\]$/,A=Function.prototype,T=Object.prototype,k=A.toString,z=T.hasOwnProperty,P=RegExp("^"+k.call(z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const S=function(t){return!(!b(t)||(e=t,m&&m in e))&&(j(t)?P:w).test(function(t){if(null!=t){try{return x.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e},E=function(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return S(n)?n:void 0},L=function(){try{var t=E(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),U=L?function(t,e){return L(t,"toString",{configurable:!0,enumerable:!1,value:(n=e,function(){return n}),writable:!0});var n}:r;var F=Date.now;const $=(M=U,H=0,I=0,function(){var t=F(),e=16-(t-I);if(I=t,e>0){if(++H>=800)return arguments[0]}else H=0;return M.apply(void 0,arguments)});var M,H,I;const q=function(t,e){return $(function(t,e,r){return e=o(void 0===e?t.length-1:e,0),function(){for(var i=arguments,a=-1,s=o(i.length-e,0),u=Array(s);++a<s;)u[a]=i[e+a];a=-1;for(var c=Array(e+1);++a<e;)c[a]=i[a];return c[e]=r(u),n(t,this,c)}}(t,e,r),t+"")},B=function(t,e){return t===e||t!=t&&e!=e},C=function(t,e){for(var n=t.length;n--;)if(B(t[n][0],e))return n;return-1};var D=Array.prototype.splice;function N(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}N.prototype.clear=function(){this.__data__=[],this.size=0},N.prototype.delete=function(t){var e=this.__data__,n=C(e,t);return!(n<0||(n==e.length-1?e.pop():D.call(e,n,1),--this.size,0))},N.prototype.get=function(t){var e=this.__data__,n=C(e,t);return n<0?void 0:e[n][1]},N.prototype.has=function(t){return C(this.__data__,t)>-1},N.prototype.set=function(t,e){var n=this.__data__,r=C(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};const R=N,J=E(s,"Map"),G=E(Object,"create");var V=Object.prototype.hasOwnProperty;var W=Object.prototype.hasOwnProperty;function Y(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Y.prototype.clear=function(){this.__data__=G?G(null):{},this.size=0},Y.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Y.prototype.get=function(t){var e=this.__data__;if(G){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return V.call(e,t)?e[t]:void 0},Y.prototype.has=function(t){var e=this.__data__;return G?void 0!==e[t]:W.call(e,t)},Y.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=G&&void 0===e?"__lodash_hash_undefined__":e,this};const K=Y,Q=function(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map};function X(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}X.prototype.clear=function(){this.size=0,this.__data__={hash:new K,map:new(J||R),string:new K}},X.prototype.delete=function(t){var e=Q(this,t).delete(t);return this.size-=e?1:0,e},X.prototype.get=function(t){return Q(this,t).get(t)},X.prototype.has=function(t){return Q(this,t).has(t)},X.prototype.set=function(t,e){var n=Q(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};const Z=X;function tt(t){var e=this.__data__=new R(t);this.size=e.size}tt.prototype.clear=function(){this.__data__=new R,this.size=0},tt.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},tt.prototype.get=function(t){return this.__data__.get(t)},tt.prototype.has=function(t){return this.__data__.has(t)},tt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof R){var r=n.__data__;if(!J||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Z(r)}return n.set(t,e),this.size=n.size,this};const et=tt,nt=function(t,e,n){"__proto__"==e&&L?L(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},rt=function(t,e,n){(void 0!==n&&!B(t[e],n)||void 0===n&&!(e in t))&&nt(t,e,n)},ot=function(t,e,n){for(var r=-1,o=Object(t),i=n(t),a=i.length;a--;){var s=i[++r];if(!1===e(o[s],s,o))break}return t};var it="object"==typeof exports&&exports&&!exports.nodeType&&exports,at=it&&"object"==typeof module&&module&&!module.nodeType&&module,st=at&&at.exports===it?s.Buffer:void 0,ut=st?st.allocUnsafe:void 0;const ct=s.Uint8Array,lt=function(t,e){var n,r,o=e?(n=t.buffer,r=new n.constructor(n.byteLength),new ct(r).set(new ct(n)),r):t.buffer;return new t.constructor(o,t.byteOffset,t.length)};var pt=Object.create;const ft=function(){function t(){}return function(e){if(!b(e))return{};if(pt)return pt(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),ht=function(t,e){return function(n){return t(e(n))}},dt=ht(Object.getPrototypeOf,Object);var vt=Object.prototype;const yt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||vt)},_t=function(t){return null!=t&&"object"==typeof t},bt=function(t){return _t(t)&&"[object Arguments]"==_(t)};var jt=Object.prototype,gt=jt.hasOwnProperty,Ot=jt.propertyIsEnumerable;const mt=bt(function(){return arguments}())?bt:function(t){return _t(t)&&gt.call(t,"callee")&&!Ot.call(t,"callee")},xt=Array.isArray,wt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},At=function(t){return null!=t&&wt(t.length)&&!j(t)};var Tt="object"==typeof exports&&exports&&!exports.nodeType&&exports,kt=Tt&&"object"==typeof module&&module&&!module.nodeType&&module,zt=kt&&kt.exports===Tt?s.Buffer:void 0;const Pt=(zt?zt.isBuffer:void 0)||function(){return!1};var St=Function.prototype,Et=Object.prototype,Lt=St.toString,Ut=Et.hasOwnProperty,Ft=Lt.call(Object);var $t={};$t["[object Float32Array]"]=$t["[object Float64Array]"]=$t["[object Int8Array]"]=$t["[object Int16Array]"]=$t["[object Int32Array]"]=$t["[object Uint8Array]"]=$t["[object Uint8ClampedArray]"]=$t["[object Uint16Array]"]=$t["[object Uint32Array]"]=!0,$t["[object Arguments]"]=$t["[object Array]"]=$t["[object ArrayBuffer]"]=$t["[object Boolean]"]=$t["[object DataView]"]=$t["[object Date]"]=$t["[object Error]"]=$t["[object Function]"]=$t["[object Map]"]=$t["[object Number]"]=$t["[object Object]"]=$t["[object RegExp]"]=$t["[object Set]"]=$t["[object String]"]=$t["[object WeakMap]"]=!1;var Mt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Ht=Mt&&"object"==typeof module&&module&&!module.nodeType&&module,It=Ht&&Ht.exports===Mt&&i.process,qt=function(){try{return Ht&&Ht.require&&Ht.require("util").types||It&&It.binding&&It.binding("util")}catch(t){}}(),Bt=qt&&qt.isTypedArray;const Ct=Bt?function(t){return function(e){return t(e)}}(Bt):function(t){return _t(t)&&wt(t.length)&&!!$t[_(t)]},Dt=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var Nt=Object.prototype.hasOwnProperty;const Rt=function(t,e,n){var r=t[e];Nt.call(t,e)&&B(r,n)&&(void 0!==n||e in t)||nt(t,e,n)};var Jt=/^(?:0|[1-9]\d*)$/;const Gt=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&Jt.test(t))&&t>-1&&t%1==0&&t<e};var Vt=Object.prototype.hasOwnProperty;const Wt=function(t,e){var n=xt(t),r=!n&&mt(t),o=!n&&!r&&Pt(t),i=!n&&!r&&!o&&Ct(t),a=n||r||o||i,s=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],u=s.length;for(var c in t)!e&&!Vt.call(t,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Gt(c,u))||s.push(c);return s};var Yt=Object.prototype.hasOwnProperty;const Kt=function(t){if(!b(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=yt(t),n=[];for(var r in t)("constructor"!=r||!e&&Yt.call(t,r))&&n.push(r);return n},Qt=function(t){return At(t)?Wt(t,!0):Kt(t)},Xt=function(t){return function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,a=e.length;++i<a;){var s=e[i],u=r?r(n[s],t[s],s,n,t):void 0;void 0===u&&(u=t[s]),o?nt(n,s,u):Rt(n,s,u)}return n}(t,Qt(t))},Zt=function(t,e,n,r,o,i,a){var s,u=Dt(t,n),c=Dt(e,n),l=a.get(c);if(l)rt(t,n,l);else{var p=i?i(u,c,n+"",t,e,a):void 0,f=void 0===p;if(f){var h=xt(c),d=!h&&Pt(c),v=!h&&!d&&Ct(c);p=c,h||d||v?xt(u)?p=u:_t(s=u)&&At(s)?p=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(u):d?(f=!1,p=function(t,e){if(e)return t.slice();var n=t.length,r=ut?ut(n):new t.constructor(n);return t.copy(r),r}(c,!0)):v?(f=!1,p=lt(c,!0)):p=[]:function(t){if(!_t(t)||"[object Object]"!=_(t))return!1;var e=dt(t);if(null===e)return!0;var n=Ut.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&Lt.call(n)==Ft}(c)||mt(c)?(p=u,mt(u)?p=Xt(u):b(u)&&!j(u)||(p=function(t){return"function"!=typeof t.constructor||yt(t)?{}:ft(dt(t))}(c))):f=!1}f&&(a.set(c,p),o(p,c,r,i,a),a.delete(c)),rt(t,n,p)}},te=function t(e,n,r,o,i){e!==n&&ot(n,(function(a,s){if(i||(i=new et),b(a))Zt(e,n,s,r,t,o,i);else{var u=o?o(Dt(e,s),a,s+"",e,n,i):void 0;void 0===u&&(u=a),rt(e,s,u)}}),Qt)},ee=function t(e,n,r,o,i,a){return b(e)&&b(n)&&(a.set(n,e),te(e,n,void 0,t,a),a.delete(n)),e},ne=(re=function(t,e,n,r){te(t,e,n,r)},q((function(t,e){var n=-1,r=e.length,o=r>1?e[r-1]:void 0,i=r>2?e[2]:void 0;for(o=re.length>3&&"function"==typeof o?(r--,o):void 0,i&&function(t,e,n){if(!b(n))return!1;var r=typeof e;return!!("number"==r?At(n)&&Gt(e,n.length):"string"==r&&e in n)&&B(n[e],t)}(e[0],e[1],i)&&(o=r<3?void 0:o,r=1),t=Object(t);++n<r;){var a=e[n];a&&re(t,a,n,o)}return t})));var re;const oe=q((function(t){return t.push(void 0,ee),n(ne,void 0,t)})),ie=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t},ae=ht(Object.keys,Object);var se=Object.prototype.hasOwnProperty;const ue=function(t){return At(t)?Wt(t):function(t){if(!yt(t))return ae(t);var e=[];for(var n in Object(t))se.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)},ce=function(t,e){if(null==t)return t;if(!At(t))return function(t,e){return t&&ot(t,e,ue)}(t,e);for(var n=t.length,r=-1,o=Object(t);++r<n&&!1!==e(o[r],r,o););return t},le=function(t,e){return(xt(t)?ie:ce)(t,"function"==typeof(n=e)?n:r);var n},pe=(t,e,n)=>{},fe={ajax:{url:null,value_field:"value",data:null},source:null,text_field:"title",value_field:"id",first_option:null,default_value:null,initial_load:!0,empty_mark:"__EMPTY__",hooks:{before_request:pe,after_request:pe}};class he{element;dependent;options;cancelToken=null;static handle(t,e=null,n={}){return u.getBoundedInstance(t,"list-dependent",(()=>new this(t,e,n)))}constructor(t,e,n){this.element=u.selectOne(t),this.setOptions(n),this.dependent=u.selectOne(e),this.bindEvents(),this.options.initial_load&&this.changeList(this.dependent.value,!0)}setOptions(t={}){this.options=oe({},t,fe)}bindEvents(){this.dependent.addEventListener("change",(t=>{this.changeList(t.currentTarget?.value)}))}changeList(t,e=!1){""===(t=t||this.dependent.value)&&(t=this.options.empty_mark),this.options.ajax.url?this.ajaxUpdate(t):this.options.source&&this.sourceUpdate(t,e)}sourceUpdate(t,e=!1){const n=this.options.source;this.beforeHook(t,this.element,this.dependent),n[t]?this.updateListElements(n[t]):(this.updateListElements([]),e||""===t||0===parseInt(t)||console.log("List for value: "+t+" not found.")),this.afterHook(t,this.element,this.dependent)}ajaxUpdate(t){let e={};e[this.options.ajax.value_field]=t,"object"==typeof this.options.ajax.data?e={...e,...this.options.ajax.data}:"function"==typeof this.options.ajax.data&&(e=this.options.ajax.data(e,this)||e),this.beforeHook(t,this.element,this.dependent),this.cancelToken&&(this.cancelToken.cancel(),this.cancelToken=null);let n=this.options.ajax.url;"function"==typeof n&&(n=n(this)),u.$http.get(n,{params:e,cancelToken:this.cancelToken}).then((t=>t.data)).then((t=>{t.success?this.updateListElements(t.data):console.error(t.message)})).catch((t=>{console.error(t)})).finally((()=>{this.afterHook(t,this.element,this.dependent),this.cancelToken=null}))}updateListElements(t){const e=this.options.text_field,n=this.options.value_field;this.element.innerHTML="",this.options.first_option&&(t.unshift({}),t[0][e]=this.options.first_option[e],t[0][n]=this.options.first_option[n]),le(t,((t,r)=>{if(Array.isArray(t)){const o=u.html(`<optgroup label="${r}"></optgroup>`);return le(t,((t,r)=>{this.appendOptionTo({value:t[n],text:t[e],attributes:t.attributes},o)})),void this.element.appendChild(o)}this.appendOptionTo({value:t[n],text:t[e],attributes:t.attributes},this.element)})),this.element.dispatchEvent(new CustomEvent("change")),this.element.dispatchEvent(new CustomEvent("list:updated"))}appendOptionTo(t,e){const n=t.value,r=u.html("<option>"+t.text+"</option>");r.setAttribute("value",n),t.attributes&&le(t.attributes,((t,e)=>{r.setAttribute(e,t)})),this.isSelected(n)&&r.setAttribute("selected","selected"),e.appendChild(r)}isSelected(t){let e=[],n=this.element.dataset.selected??this.options.default_value;return"function"==typeof n&&(n=n(t,this)),e=Array.isArray(n)?n:n&&"object"==typeof n?Object.keys(n):[n],-1!==e.indexOf(t)}beforeHook(t,e,n){return this.options.hooks.before_request.call(this,t,e,n)}afterHook(t,e,n){return this.options.hooks.after_request.call(this,t,e,n)}}return u.directive("list-dependent",{mounted(t,e){const n=JSON.parse(e.value);he.handle(t,n.dependent,n)},updated(t,e){const n=JSON.parse(e.value);he.handle(t).setOptions(n)}}),e})()));
//# sourceMappingURL=main.js.map