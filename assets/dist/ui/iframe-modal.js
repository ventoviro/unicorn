!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(self,(()=>(()=>{"use strict";var t={};(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(t);const e=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)},r=function(t){return t};var n=Math.max;const o=function(t){return function(){return t}},i="object"==typeof global&&global&&global.Object===Object&&global;var a="object"==typeof self&&self&&self.Object===Object&&self;const c=i||a||Function("return this")(),s=c.Symbol;var l=Object.prototype,f=l.hasOwnProperty,p=l.toString,d=s?s.toStringTag:void 0;var h=Object.prototype.toString;var v=s?s.toStringTag:void 0;const y=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?function(t){var e=f.call(t,d),r=t[d];try{t[d]=void 0;var n=!0}catch(t){}var o=p.call(t);return n&&(e?t[d]=r:delete t[d]),o}(t):function(t){return h.call(t)}(t)},b=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},_=function(t){if(!b(t))return!1;var e=y(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},m=c["__core-js_shared__"];var g,j=(g=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||""))?"Symbol(src)_1."+g:"";var O=Function.prototype.toString;var w=/^\[object .+?Constructor\]$/,z=Function.prototype,x=Object.prototype,S=z.toString,A=x.hasOwnProperty,E=RegExp("^"+S.call(A).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const P=function(t){return!(!b(t)||(e=t,j&&j in e))&&(_(t)?E:w).test(function(t){if(null!=t){try{return O.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e},T=function(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return P(r)?r:void 0},L=function(){try{var t=T(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),M=L?function(t,e){return L(t,"toString",{configurable:!0,enumerable:!1,value:o(e),writable:!0})}:r;var F=Date.now;const $=(k=M,I=0,U=0,function(){var t=F(),e=16-(t-U);if(U=t,e>0){if(++I>=800)return arguments[0]}else I=0;return k.apply(void 0,arguments)});var k,I,U;const q=function(t,o){return $(function(t,r,o){return r=n(void 0===r?t.length-1:r,0),function(){for(var i=arguments,a=-1,c=n(i.length-r,0),s=Array(c);++a<c;)s[a]=i[r+a];a=-1;for(var u=Array(r+1);++a<r;)u[a]=i[a];return u[r]=o(s),e(t,this,u)}}(t,o,r),t+"")},B=function(t,e){return t===e||t!=t&&e!=e},C=function(t,e){for(var r=t.length;r--;)if(B(t[r][0],e))return r;return-1};var D=Array.prototype.splice;function H(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}H.prototype.clear=function(){this.__data__=[],this.size=0},H.prototype.delete=function(t){var e=this.__data__,r=C(e,t);return!(r<0||(r==e.length-1?e.pop():D.call(e,r,1),--this.size,0))},H.prototype.get=function(t){var e=this.__data__,r=C(e,t);return r<0?void 0:e[r][1]},H.prototype.has=function(t){return C(this.__data__,t)>-1},H.prototype.set=function(t,e){var r=this.__data__,n=C(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};const N=H,R=T(c,"Map"),W=T(Object,"create");var G=Object.prototype.hasOwnProperty;var J=Object.prototype.hasOwnProperty;function V(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}V.prototype.clear=function(){this.__data__=W?W(null):{},this.size=0},V.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},V.prototype.get=function(t){var e=this.__data__;if(W){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return G.call(e,t)?e[t]:void 0},V.prototype.has=function(t){var e=this.__data__;return W?void 0!==e[t]:J.call(e,t)},V.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=W&&void 0===e?"__lodash_hash_undefined__":e,this};const K=V,Q=function(t,e){var r=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?r["string"==typeof e?"string":"hash"]:r.map};function X(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}X.prototype.clear=function(){this.size=0,this.__data__={hash:new K,map:new(R||N),string:new K}},X.prototype.delete=function(t){var e=Q(this,t).delete(t);return this.size-=e?1:0,e},X.prototype.get=function(t){return Q(this,t).get(t)},X.prototype.has=function(t){return Q(this,t).has(t)},X.prototype.set=function(t,e){var r=Q(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};const Y=X;function Z(t){var e=this.__data__=new N(t);this.size=e.size}Z.prototype.clear=function(){this.__data__=new N,this.size=0},Z.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},Z.prototype.get=function(t){return this.__data__.get(t)},Z.prototype.has=function(t){return this.__data__.has(t)},Z.prototype.set=function(t,e){var r=this.__data__;if(r instanceof N){var n=r.__data__;if(!R||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Y(n)}return r.set(t,e),this.size=r.size,this};const tt=Z,et=function(t,e,r){"__proto__"==e&&L?L(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},rt=function(t,e,r){(void 0!==r&&!B(t[e],r)||void 0===r&&!(e in t))&&et(t,e,r)},nt=function(t,e,r){for(var n=-1,o=Object(t),i=r(t),a=i.length;a--;){var c=i[ot?a:++n];if(!1===e(o[c],c,o))break}return t};var ot,it="object"==typeof exports&&exports&&!exports.nodeType&&exports,at=it&&"object"==typeof module&&module&&!module.nodeType&&module,ct=at&&at.exports===it?c.Buffer:void 0,st=ct?ct.allocUnsafe:void 0;const ut=c.Uint8Array,lt=function(t,e){var r,n,o=e?(r=t.buffer,n=new r.constructor(r.byteLength),new ut(n).set(new ut(r)),n):t.buffer;return new t.constructor(o,t.byteOffset,t.length)};var ft=Object.create;const pt=function(){function t(){}return function(e){if(!b(e))return{};if(ft)return ft(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),dt=function(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object);var ht=Object.prototype;const vt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ht)},yt=function(t){return null!=t&&"object"==typeof t},bt=function(t){return yt(t)&&"[object Arguments]"==y(t)};var _t=Object.prototype,mt=_t.hasOwnProperty,gt=_t.propertyIsEnumerable,jt=bt(function(){return arguments}())?bt:function(t){return yt(t)&&mt.call(t,"callee")&&!gt.call(t,"callee")};const Ot=jt,wt=Array.isArray,zt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},xt=function(t){return null!=t&&zt(t.length)&&!_(t)};var St="object"==typeof exports&&exports&&!exports.nodeType&&exports,At=St&&"object"==typeof module&&module&&!module.nodeType&&module,Et=At&&At.exports===St?c.Buffer:void 0;const Pt=(Et?Et.isBuffer:void 0)||function(){return!1};var Tt=Function.prototype,Lt=Object.prototype,Mt=Tt.toString,Ft=Lt.hasOwnProperty,$t=Mt.call(Object);var kt={};kt["[object Float32Array]"]=kt["[object Float64Array]"]=kt["[object Int8Array]"]=kt["[object Int16Array]"]=kt["[object Int32Array]"]=kt["[object Uint8Array]"]=kt["[object Uint8ClampedArray]"]=kt["[object Uint16Array]"]=kt["[object Uint32Array]"]=!0,kt["[object Arguments]"]=kt["[object Array]"]=kt["[object ArrayBuffer]"]=kt["[object Boolean]"]=kt["[object DataView]"]=kt["[object Date]"]=kt["[object Error]"]=kt["[object Function]"]=kt["[object Map]"]=kt["[object Number]"]=kt["[object Object]"]=kt["[object RegExp]"]=kt["[object Set]"]=kt["[object String]"]=kt["[object WeakMap]"]=!1;var It="object"==typeof exports&&exports&&!exports.nodeType&&exports,Ut=It&&"object"==typeof module&&module&&!module.nodeType&&module,qt=Ut&&Ut.exports===It&&i.process,Bt=function(){try{return Ut&&Ut.require&&Ut.require("util").types||qt&&qt.binding&&qt.binding("util")}catch(t){}}(),Ct=Bt&&Bt.isTypedArray;const Dt=Ct?function(t){return function(e){return t(e)}}(Ct):function(t){return yt(t)&&zt(t.length)&&!!kt[y(t)]},Ht=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var Nt=Object.prototype.hasOwnProperty;const Rt=function(t,e,r){var n=t[e];Nt.call(t,e)&&B(n,r)&&(void 0!==r||e in t)||et(t,e,r)};var Wt=/^(?:0|[1-9]\d*)$/;const Gt=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&Wt.test(t))&&t>-1&&t%1==0&&t<e};var Jt=Object.prototype.hasOwnProperty;const Vt=function(t,e){var r=wt(t),n=!r&&Ot(t),o=!r&&!n&&Pt(t),i=!r&&!n&&!o&&Dt(t),a=r||n||o||i,c=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],s=c.length;for(var u in t)!e&&!Jt.call(t,u)||a&&("length"==u||o&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||Gt(u,s))||c.push(u);return c};var Kt=Object.prototype.hasOwnProperty;const Qt=function(t){if(!b(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=vt(t),r=[];for(var n in t)("constructor"!=n||!e&&Kt.call(t,n))&&r.push(n);return r},Xt=function(t){return xt(t)?Vt(t,!0):Qt(t)},Yt=function(t){return function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var c=e[i],s=n?n(r[c],t[c],c,r,t):void 0;void 0===s&&(s=t[c]),o?et(r,c,s):Rt(r,c,s)}return r}(t,Xt(t))},Zt=function(t,e,r,n,o,i,a){var c=Ht(t,r),s=Ht(e,r),u=a.get(s);if(u)rt(t,r,u);else{var l=i?i(c,s,r+"",t,e,a):void 0,f=void 0===l;if(f){var p=wt(s),d=!p&&Pt(s),h=!p&&!d&&Dt(s);l=s,p||d||h?wt(c)?l=c:function(t){return yt(t)&&xt(t)}(c)?l=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(c):d?(f=!1,l=function(t,e){if(e)return t.slice();var r=t.length,n=st?st(r):new t.constructor(r);return t.copy(n),n}(s,!0)):h?(f=!1,l=lt(s,!0)):l=[]:function(t){if(!yt(t)||"[object Object]"!=y(t))return!1;var e=dt(t);if(null===e)return!0;var r=Ft.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&Mt.call(r)==$t}(s)||Ot(s)?(l=c,Ot(c)?l=Yt(c):b(c)&&!_(c)||(l=function(t){return"function"!=typeof t.constructor||vt(t)?{}:pt(dt(t))}(s))):f=!1}f&&(a.set(s,l),o(l,s,n,i,a),a.delete(s)),rt(t,r,l)}},te=function t(e,r,n,o,i){e!==r&&nt(r,(function(a,c){if(i||(i=new tt),b(a))Zt(e,r,c,n,t,o,i);else{var s=o?o(Ht(e,c),a,c+"",e,r,i):void 0;void 0===s&&(s=a),rt(e,c,s)}}),Xt)},ee=function t(e,r,n,o,i,a){return b(e)&&b(r)&&(a.set(r,e),te(e,r,void 0,t,a),a.delete(r)),e},re=(ne=function(t,e,r,n){te(t,e,r,n)},q((function(t,e){var r=-1,n=e.length,o=n>1?e[n-1]:void 0,i=n>2?e[2]:void 0;for(o=ne.length>3&&"function"==typeof o?(n--,o):void 0,i&&function(t,e,r){if(!b(r))return!1;var n=typeof e;return!!("number"==n?xt(r)&&Gt(e,r.length):"string"==n&&e in r)&&B(r[e],t)}(e[0],e[1],i)&&(o=n<3?void 0:o,n=1),t=Object(t);++r<n;){var a=e[r];a&&ne(t,a,r,o)}return t})));var ne;const oe=q((function(t){return t.push(void 0,ee),e(re,void 0,t)}));class ie extends HTMLElement{template(){var t;return`\n<div class="modal fade c-unicorn-iframe-modal" id="${this.getModalId()}"\n    data-iframe-modal>\n    <div class="modal-dialog ${(null===(t=this.options)||void 0===t?void 0:t.size)||"modal-xl"}">\n        <div class="modal-content">\n            <div class="modal-body">\n                <iframe class="c-unicorn-iframe-modal__iframe" width="100%" src="" frameborder="0"></iframe>\n            </div>\n        </div>\n    </div>\n</div>`}get selector(){return this.getAttribute("selector")||"[data-iframe-modal]"}connectedCallback(){this.options=JSON.parse(this.getAttribute("options")||"{}"),this.innerHTML.trim()||(this.innerHTML=this.template()),this.modalElement=this.querySelector(this.selector),this.modal=new bootstrap.Modal(this.modalElement),this.iframe=this.modalElement.querySelector("iframe"),this.iframe.modalLink=()=>this,this.bindEvents()}bindEvents(){this.modalElement.addEventListener("hidden.bs.modal",(()=>{this.iframe.src=""}))}open(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e=oe(e,this.options,{height:null,resize:!1,size:"modal-lg"}),e.resize){let t;this.iframe.addEventListener("load",t=()=>{this.resize(this.iframe),this.iframe.removeEventListener("load",t)})}else this.iframe.style.height=e.height||"500px";if(null!=e.size){const t=this.modalElement.querySelector(".modal-dialog");t.classList.remove("modal-lg","modal-xl","modal-sm","modal-xs"),t.classList.add(e.size)}this.iframe.src=t,this.modal.show()}close(){this.modal.hide(),this.iframe.src=""}resize(t){setTimeout((()=>{let e=t.contentWindow.document.documentElement.scrollHeight;e+=30,e<500&&(e=500),t.style.height=e+"px"}),30)}getModalId(){var t;return(null===(t=this.options)||void 0===t?void 0:t.id)||this.id+"__modal"}}var ae,ce,se;return ae=ie,se="uni-iframe-modal",(ce=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(ce="is"))in ae?Object.defineProperty(ae,ce,{value:se,enumerable:!0,configurable:!0,writable:!0}):ae[ce]=se,u.defineCustomElement(ie.is,ie),u.directive("modal-link",{mounted(t,e){let r={};r.height=t.dataset.height,r.resize=t.dataset.resize,r.size=t.dataset.size;const n=e.value;t.style.pointerEvents=null,t.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation();const o=document.querySelector(n);o&&(t.src?o.open(t.src,r):t.href&&o.open(t.href,r))}))}}),t})()));
//# sourceMappingURL=iframe-modal.js.map