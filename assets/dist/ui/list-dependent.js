!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ListDependent=e():t.ListDependent=e()}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{ListDependent:()=>pe});const n=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},r=function(t){return t};var o=Math.max;const i="object"==typeof global&&global&&global.Object===Object&&global;var a="object"==typeof self&&self&&self.Object===Object&&self;const s=i||a||Function("return this")(),c=s.Symbol;var l=Object.prototype,p=l.hasOwnProperty,f=l.toString,h=c?c.toStringTag:void 0;var d=Object.prototype.toString;var v=c?c.toStringTag:void 0;const y=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?function(t){var e=p.call(t,h),n=t[h];try{t[h]=void 0;var r=!0}catch(t){}var o=f.call(t);return r&&(e?t[h]=n:delete t[h]),o}(t):function(t){return d.call(t)}(t)},b=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},_=function(t){if(!b(t))return!1;var e=y(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},j=s["__core-js_shared__"];var g,m=(g=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+g:"";var O=Function.prototype.toString;var w=/^\[object .+?Constructor\]$/,x=Function.prototype,A=Object.prototype,T=x.toString,k=A.hasOwnProperty,S=RegExp("^"+T.call(k).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const P=function(t){return!(!b(t)||(e=t,m&&m in e))&&(_(t)?S:w).test(function(t){if(null!=t){try{return O.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e},z=function(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return P(n)?n:void 0},E=function(){try{var t=z(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),L=E?function(t,e){return E(t,"toString",{configurable:!0,enumerable:!1,value:(n=e,function(){return n}),writable:!0});var n}:r;var U=Date.now;const F=($=L,M=0,H=0,function(){var t=U(),e=16-(t-H);if(H=t,e>0){if(++M>=800)return arguments[0]}else M=0;return $.apply(void 0,arguments)});var $,M,H;const I=function(t,e){return F(function(t,e,r){return e=o(void 0===e?t.length-1:e,0),function(){for(var i=arguments,a=-1,s=o(i.length-e,0),u=Array(s);++a<s;)u[a]=i[e+a];a=-1;for(var c=Array(e+1);++a<e;)c[a]=i[a];return c[e]=r(u),n(t,this,c)}}(t,e,r),t+"")},q=function(t,e){return t===e||t!=t&&e!=e},B=function(t,e){for(var n=t.length;n--;)if(q(t[n][0],e))return n;return-1};var C=Array.prototype.splice;function D(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}D.prototype.clear=function(){this.__data__=[],this.size=0},D.prototype.delete=function(t){var e=this.__data__,n=B(e,t);return!(n<0||(n==e.length-1?e.pop():C.call(e,n,1),--this.size,0))},D.prototype.get=function(t){var e=this.__data__,n=B(e,t);return n<0?void 0:e[n][1]},D.prototype.has=function(t){return B(this.__data__,t)>-1},D.prototype.set=function(t,e){var n=this.__data__,r=B(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};const N=D,R=z(s,"Map"),J=z(Object,"create");var G=Object.prototype.hasOwnProperty;var V=Object.prototype.hasOwnProperty;function W(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}W.prototype.clear=function(){this.__data__=J?J(null):{},this.size=0},W.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},W.prototype.get=function(t){var e=this.__data__;if(J){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return G.call(e,t)?e[t]:void 0},W.prototype.has=function(t){var e=this.__data__;return J?void 0!==e[t]:V.call(e,t)},W.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=J&&void 0===e?"__lodash_hash_undefined__":e,this};const Y=W,K=function(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map};function Q(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Q.prototype.clear=function(){this.size=0,this.__data__={hash:new Y,map:new(R||N),string:new Y}},Q.prototype.delete=function(t){var e=K(this,t).delete(t);return this.size-=e?1:0,e},Q.prototype.get=function(t){return K(this,t).get(t)},Q.prototype.has=function(t){return K(this,t).has(t)},Q.prototype.set=function(t,e){var n=K(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};const X=Q;function Z(t){var e=this.__data__=new N(t);this.size=e.size}Z.prototype.clear=function(){this.__data__=new N,this.size=0},Z.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Z.prototype.get=function(t){return this.__data__.get(t)},Z.prototype.has=function(t){return this.__data__.has(t)},Z.prototype.set=function(t,e){var n=this.__data__;if(n instanceof N){var r=n.__data__;if(!R||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new X(r)}return n.set(t,e),this.size=n.size,this};const tt=Z,et=function(t,e,n){"__proto__"==e&&E?E(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},nt=function(t,e,n){(void 0!==n&&!q(t[e],n)||void 0===n&&!(e in t))&&et(t,e,n)},rt=function(t,e,n){for(var r=-1,o=Object(t),i=n(t),a=i.length;a--;){var s=i[++r];if(!1===e(o[s],s,o))break}return t};var ot="object"==typeof exports&&exports&&!exports.nodeType&&exports,it=ot&&"object"==typeof module&&module&&!module.nodeType&&module,at=it&&it.exports===ot?s.Buffer:void 0,st=at?at.allocUnsafe:void 0;const ut=s.Uint8Array,ct=function(t,e){var n,r,o=e?(n=t.buffer,r=new n.constructor(n.byteLength),new ut(r).set(new ut(n)),r):t.buffer;return new t.constructor(o,t.byteOffset,t.length)};var lt=Object.create;const pt=function(){function t(){}return function(e){if(!b(e))return{};if(lt)return lt(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),ft=function(t,e){return function(n){return t(e(n))}},ht=ft(Object.getPrototypeOf,Object);var dt=Object.prototype;const vt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||dt)},yt=function(t){return null!=t&&"object"==typeof t},bt=function(t){return yt(t)&&"[object Arguments]"==y(t)};var _t=Object.prototype,jt=_t.hasOwnProperty,gt=_t.propertyIsEnumerable;const mt=bt(function(){return arguments}())?bt:function(t){return yt(t)&&jt.call(t,"callee")&&!gt.call(t,"callee")},Ot=Array.isArray,wt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},xt=function(t){return null!=t&&wt(t.length)&&!_(t)};var At="object"==typeof exports&&exports&&!exports.nodeType&&exports,Tt=At&&"object"==typeof module&&module&&!module.nodeType&&module,kt=Tt&&Tt.exports===At?s.Buffer:void 0;const St=(kt?kt.isBuffer:void 0)||function(){return!1};var Pt=Function.prototype,zt=Object.prototype,Et=Pt.toString,Lt=zt.hasOwnProperty,Ut=Et.call(Object);var Ft={};Ft["[object Float32Array]"]=Ft["[object Float64Array]"]=Ft["[object Int8Array]"]=Ft["[object Int16Array]"]=Ft["[object Int32Array]"]=Ft["[object Uint8Array]"]=Ft["[object Uint8ClampedArray]"]=Ft["[object Uint16Array]"]=Ft["[object Uint32Array]"]=!0,Ft["[object Arguments]"]=Ft["[object Array]"]=Ft["[object ArrayBuffer]"]=Ft["[object Boolean]"]=Ft["[object DataView]"]=Ft["[object Date]"]=Ft["[object Error]"]=Ft["[object Function]"]=Ft["[object Map]"]=Ft["[object Number]"]=Ft["[object Object]"]=Ft["[object RegExp]"]=Ft["[object Set]"]=Ft["[object String]"]=Ft["[object WeakMap]"]=!1;var $t="object"==typeof exports&&exports&&!exports.nodeType&&exports,Mt=$t&&"object"==typeof module&&module&&!module.nodeType&&module,Ht=Mt&&Mt.exports===$t&&i.process,It=function(){try{return Mt&&Mt.require&&Mt.require("util").types||Ht&&Ht.binding&&Ht.binding("util")}catch(t){}}(),qt=It&&It.isTypedArray;const Bt=qt?function(t){return function(e){return t(e)}}(qt):function(t){return yt(t)&&wt(t.length)&&!!Ft[y(t)]},Ct=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var Dt=Object.prototype.hasOwnProperty;const Nt=function(t,e,n){var r=t[e];Dt.call(t,e)&&q(r,n)&&(void 0!==n||e in t)||et(t,e,n)};var Rt=/^(?:0|[1-9]\d*)$/;const Jt=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&Rt.test(t))&&t>-1&&t%1==0&&t<e};var Gt=Object.prototype.hasOwnProperty;const Vt=function(t,e){var n=Ot(t),r=!n&&mt(t),o=!n&&!r&&St(t),i=!n&&!r&&!o&&Bt(t),a=n||r||o||i,s=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],u=s.length;for(var c in t)!e&&!Gt.call(t,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Jt(c,u))||s.push(c);return s};var Wt=Object.prototype.hasOwnProperty;const Yt=function(t){if(!b(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=vt(t),n=[];for(var r in t)("constructor"!=r||!e&&Wt.call(t,r))&&n.push(r);return n},Kt=function(t){return xt(t)?Vt(t,!0):Yt(t)},Qt=function(t){return function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,a=e.length;++i<a;){var s=e[i],u=r?r(n[s],t[s],s,n,t):void 0;void 0===u&&(u=t[s]),o?et(n,s,u):Nt(n,s,u)}return n}(t,Kt(t))},Xt=function(t,e,n,r,o,i,a){var s,u=Ct(t,n),c=Ct(e,n),l=a.get(c);if(l)nt(t,n,l);else{var p=i?i(u,c,n+"",t,e,a):void 0,f=void 0===p;if(f){var h=Ot(c),d=!h&&St(c),v=!h&&!d&&Bt(c);p=c,h||d||v?Ot(u)?p=u:yt(s=u)&&xt(s)?p=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(u):d?(f=!1,p=function(t,e){if(e)return t.slice();var n=t.length,r=st?st(n):new t.constructor(n);return t.copy(r),r}(c,!0)):v?(f=!1,p=ct(c,!0)):p=[]:function(t){if(!yt(t)||"[object Object]"!=y(t))return!1;var e=ht(t);if(null===e)return!0;var n=Lt.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&Et.call(n)==Ut}(c)||mt(c)?(p=u,mt(u)?p=Qt(u):b(u)&&!_(u)||(p=function(t){return"function"!=typeof t.constructor||vt(t)?{}:pt(ht(t))}(c))):f=!1}f&&(a.set(c,p),o(p,c,r,i,a),a.delete(c)),nt(t,n,p)}},Zt=function t(e,n,r,o,i){e!==n&&rt(n,(function(a,s){if(i||(i=new tt),b(a))Xt(e,n,s,r,t,o,i);else{var u=o?o(Ct(e,s),a,s+"",e,n,i):void 0;void 0===u&&(u=a),nt(e,s,u)}}),Kt)},te=function t(e,n,r,o,i,a){return b(e)&&b(n)&&(a.set(n,e),Zt(e,n,void 0,t,a),a.delete(n)),e},ee=(ne=function(t,e,n,r){Zt(t,e,n,r)},I((function(t,e){var n=-1,r=e.length,o=r>1?e[r-1]:void 0,i=r>2?e[2]:void 0;for(o=ne.length>3&&"function"==typeof o?(r--,o):void 0,i&&function(t,e,n){if(!b(n))return!1;var r=typeof e;return!!("number"==r?xt(n)&&Jt(e,n.length):"string"==r&&e in n)&&q(n[e],t)}(e[0],e[1],i)&&(o=r<3?void 0:o,r=1),t=Object(t);++n<r;){var a=e[n];a&&ne(t,a,n,o)}return t})));var ne;const re=I((function(t){return t.push(void 0,te),n(ee,void 0,t)})),oe=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t},ie=ft(Object.keys,Object);var ae=Object.prototype.hasOwnProperty;const se=function(t){return xt(t)?Vt(t):function(t){if(!vt(t))return ie(t);var e=[];for(var n in Object(t))ae.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)},ue=function(t,e){if(null==t)return t;if(!xt(t))return function(t,e){return t&&rt(t,e,se)}(t,e);for(var n=t.length,r=-1,o=Object(t);++r<n&&!1!==e(o[r],r,o););return t},ce=function(t,e){return(Ot(t)?oe:ue)(t,"function"==typeof(n=e)?n:r);var n};const le=(t,e,n)=>{};class pe{static get defaultOptions(){return{ajax:{url:null,value_field:"value"},source:null,text_field:"title",value_field:"id",first_option:null,default_value:null,initial_load:!0,empty_mark:"__EMPTY__",hooks:{before_request:le,after_request:le}}}static handle(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return u.getBoundedInstance(t,"list-dependent",(()=>new this(t,e,n)))}constructor(t,e,n){var r,o,i;r=this,i=null,(o=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(o="cancelToken"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this.element=u.selectOne(t),this.setOptions(n),this.dependent=u.selectOne(e),this.bindEvents(),this.options.initial_load&&this.changeList(this.dependent.value,!0)}setOptions(t){this.options=re({},t,this.constructor.defaultOptions)}bindEvents(){this.dependent.addEventListener("change",(t=>{var e;this.changeList(null===(e=t.currentTarget)||void 0===e?void 0:e.value)}))}changeList(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;""===(t=t||this.dependent.value)&&(t=this.options.empty_mark),this.options.ajax.url?this.ajaxUpdate(t):this.options.source&&this.sourceUpdate(t,e)}sourceUpdate(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=this.options.source;this.beforeHook(t,this.element,this.dependent),n[t]?this.updateListElements(n[t]):(this.updateListElements([]),e||""===t||0===parseInt(t)||console.log("List for value: "+t+" not found.")),this.afterHook(t,this.element,this.dependent)}ajaxUpdate(t){const e={};e[this.options.ajax.value_field]=t,this.beforeHook(t,this.element,this.dependent),this.cancelToken&&(this.cancelToken.cancel(),this.cancelToken=null),this.cancelToken={},u.$http.get(this.options.ajax.url,{params:e,cancelToken:this.cancelToken}).then((t=>t.data)).then((t=>{t.success?this.updateListElements(t.data):console.error(t.message)})).catch((t=>{console.error(t)})).finally((()=>{this.afterHook(t,this.element,this.dependent),this.cancelToken=null}))}updateListElements(t){const e=this.options.text_field,n=this.options.value_field;this.element.innerHTML="",this.options.first_option&&(t.unshift({}),t[0][e]=this.options.first_option[e],t[0][n]=this.options.first_option[n]),ce(t,((t,r)=>{if(Array.isArray(t)){const o=u.html(`<optgroup label="${r}"></optgroup>`);return ce(t,((t,r)=>{this.appendOptionTo({value:t[n],text:t[e],attributes:t.attributes},o)})),void this.element.appendChild(o)}this.appendOptionTo({value:t[n],text:t[e],attributes:t.attributes},this.element)})),this.element.dispatchEvent(new CustomEvent("change")),this.element.dispatchEvent(new CustomEvent("list:updated"))}appendOptionTo(t,e){const n=t.value,r=u.html("<option>"+t.text+"</option>");r.setAttribute("value",n),t.attributes&&ce(t.attributes,((t,e)=>{r.setAttribute(e,t)})),this.isSelected(n)&&r.setAttribute("selected","selected"),e.appendChild(r)}isSelected(t){let e="";return e=Array.isArray(this.options.default_value)?this.options.default_value:this.options.default_value&&"object"==typeof this.options.default_value?Object.keys(this.options.default_value):[this.options.default_value],-1!==e.indexOf(t)}beforeHook(t,e,n){return this.options.hooks.before_request.call(this,t,e,n)}afterHook(t,e,n){return this.options.hooks.after_request.call(this,t,e,n)}}return u.directive("list-dependent",{mounted(t,e){const n=JSON.parse(e.value);pe.handle(t,n.dependent,n)},updated(t,e){const n=JSON.parse(e.value);pe.handle(t).setOptions(n)}}),e})()));
//# sourceMappingURL=list-dependent.js.map