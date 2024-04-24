(()=>{"use strict";const t=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},e=function(t,e,r){for(var n=-1,o=Object(t),i=r(t),u=i.length;u--;){var a=i[++n];if(!1===e(o[a],a,o))break}return t},r="object"==typeof global&&global&&global.Object===Object&&global;var n="object"==typeof self&&self&&self.Object===Object&&self;const o=r||n||Function("return this")(),i=o.Symbol;var a=Object.prototype,c=a.hasOwnProperty,l=a.toString,s=i?i.toStringTag:void 0;var f=Object.prototype.toString;var p=i?i.toStringTag:void 0;const h=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":p&&p in Object(t)?function(t){var e=c.call(t,s),r=t[s];try{t[s]=void 0;var n=!0}catch(t){}var o=l.call(t);return n&&(e?t[s]=r:delete t[s]),o}(t):function(t){return f.call(t)}(t)},y=function(t){return null!=t&&"object"==typeof t},d=function(t){return y(t)&&"[object Arguments]"==h(t)};var v=Object.prototype,b=v.hasOwnProperty,_=v.propertyIsEnumerable;const g=d(function(){return arguments}())?d:function(t){return y(t)&&b.call(t,"callee")&&!_.call(t,"callee")},j=Array.isArray;var m="object"==typeof exports&&exports&&!exports.nodeType&&exports,O=m&&"object"==typeof module&&module&&!module.nodeType&&module,A=O&&O.exports===m?o.Buffer:void 0;const w=(A?A.isBuffer:void 0)||function(){return!1};var S=/^(?:0|[1-9]\d*)$/;const x=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&S.test(t))&&t>-1&&t%1==0&&t<e},k=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var P={};P["[object Float32Array]"]=P["[object Float64Array]"]=P["[object Int8Array]"]=P["[object Int16Array]"]=P["[object Int32Array]"]=P["[object Uint8Array]"]=P["[object Uint8ClampedArray]"]=P["[object Uint16Array]"]=P["[object Uint32Array]"]=!0,P["[object Arguments]"]=P["[object Array]"]=P["[object ArrayBuffer]"]=P["[object Boolean]"]=P["[object DataView]"]=P["[object Date]"]=P["[object Error]"]=P["[object Function]"]=P["[object Map]"]=P["[object Number]"]=P["[object Object]"]=P["[object RegExp]"]=P["[object Set]"]=P["[object String]"]=P["[object WeakMap]"]=!1;const z=function(t){return function(e){return t(e)}};var T="object"==typeof exports&&exports&&!exports.nodeType&&exports,F=T&&"object"==typeof module&&module&&!module.nodeType&&module,$=F&&F.exports===T&&r.process,q=function(){try{return F&&F.require&&F.require("util").types||$&&$.binding&&$.binding("util")}catch(t){}}(),D=q&&q.isTypedArray;const E=D?z(D):function(t){return y(t)&&k(t.length)&&!!P[h(t)]};var I=Object.prototype.hasOwnProperty;const M=function(t,e){var r=j(t),n=!r&&g(t),o=!r&&!n&&w(t),i=!r&&!n&&!o&&E(t),u=r||n||o||i,a=u?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=a.length;for(var l in t)!e&&!I.call(t,l)||u&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||x(l,c))||a.push(l);return a};var C=Object.prototype;const N=(U=Object.keys,B=Object,function(t){return U(B(t))});var U,B,V=Object.prototype.hasOwnProperty;const L=function(t){if(r=(e=t)&&e.constructor,e!==("function"==typeof r&&r.prototype||C))return N(t);var e,r,n=[];for(var o in Object(t))V.call(t,o)&&"constructor"!=o&&n.push(o);return n},R=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},G=function(t){if(!R(t))return!1;var e=h(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},J=function(t){return null!=t&&k(t.length)&&!G(t)},W=function(t){return J(t)?M(t):L(t)},H=function(t,r){if(null==t)return t;if(!J(t))return function(t,r){return t&&e(t,r,W)}(t,r);for(var n=t.length,o=-1,i=Object(t);++o<n&&!1!==r(i[o],o,i););return t},K=function(t){return t},Q=function(e,r){return(j(e)?t:H)(e,"function"==typeof(n=r)?n:K);var n},X=o["__core-js_shared__"];var Y,Z=(Y=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+Y:"";var tt=Function.prototype.toString;var et=/^\[object .+?Constructor\]$/,rt=Function.prototype,nt=Object.prototype,ot=rt.toString,it=nt.hasOwnProperty,ut=RegExp("^"+ot.call(it).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const at=function(t){return!(!R(t)||function(t){return!!Z&&Z in t}(t))&&(G(t)?ut:et).test(function(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))},ct=function(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return at(r)?r:void 0},lt=ct(Object,"create");var st=Object.prototype.hasOwnProperty;var ft=Object.prototype.hasOwnProperty;function pt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}pt.prototype.clear=function(){this.__data__=lt?lt(null):{},this.size=0},pt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},pt.prototype.get=function(t){var e=this.__data__;if(lt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return st.call(e,t)?e[t]:void 0},pt.prototype.has=function(t){var e=this.__data__;return lt?void 0!==e[t]:ft.call(e,t)},pt.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=lt&&void 0===e?"__lodash_hash_undefined__":e,this};const ht=pt,yt=function(t,e){for(var r=t.length;r--;)if((n=t[r][0])===(o=e)||n!=n&&o!=o)return r;var n,o;return-1};var dt=Array.prototype.splice;function vt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}vt.prototype.clear=function(){this.__data__=[],this.size=0},vt.prototype.delete=function(t){var e=this.__data__,r=yt(e,t);return!(r<0||(r==e.length-1?e.pop():dt.call(e,r,1),--this.size,0))},vt.prototype.get=function(t){var e=this.__data__,r=yt(e,t);return r<0?void 0:e[r][1]},vt.prototype.has=function(t){return yt(this.__data__,t)>-1},vt.prototype.set=function(t,e){var r=this.__data__,n=yt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};const bt=vt,_t=ct(o,"Map"),gt=function(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map};function jt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}jt.prototype.clear=function(){this.size=0,this.__data__={hash:new ht,map:new(_t||bt),string:new ht}},jt.prototype.delete=function(t){var e=gt(this,t).delete(t);return this.size-=e?1:0,e},jt.prototype.get=function(t){return gt(this,t).get(t)},jt.prototype.has=function(t){return gt(this,t).has(t)},jt.prototype.set=function(t,e){var r=gt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};const mt=jt;function Ot(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new mt;++e<r;)this.add(t[e])}Ot.prototype.add=Ot.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Ot.prototype.has=function(t){return this.__data__.has(t)};const At=Ot,wt=function(t){return t!=t},St=function(t,e){return!(null==t||!t.length)&&function(t,e,r){return e==e?function(t,e,r){for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}(t,e,r):function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,wt,r)}(t,e,0)>-1},xt=function(t,e,r){for(var n=-1,o=null==t?0:t.length;++n<o;)if(r(e,t[n]))return!0;return!1},kt=function(t,e){return t.has(e)},Pt=function(t,e,r,n){var o=-1,i=St,u=!0,a=t.length,c=[],l=e.length;if(!a)return c;r&&(e=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,z(r))),n?(i=xt,u=!1):e.length>=200&&(i=kt,u=!1,e=new At(e));t:for(;++o<a;){var s=t[o],f=null==r?s:r(s);if(s=n||0!==s?s:0,u&&f==f){for(var p=l;p--;)if(e[p]===f)continue t;c.push(s)}else i(e,f,n)||c.push(s)}return c},zt=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t};var Tt=i?i.isConcatSpreadable:void 0;const Ft=function(t){return j(t)||g(t)||!!(Tt&&t&&t[Tt])},$t=function t(e,r,n,o,i){var u=-1,a=e.length;for(n||(n=Ft),i||(i=[]);++u<a;){var c=e[u];r>0&&n(c)?r>1?t(c,r-1,n,o,i):zt(i,c):o||(i[i.length]=c)}return i};var qt=Math.max;const Dt=function(){try{var t=ct(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),Et=Dt?function(t,e){return Dt(t,"toString",{configurable:!0,enumerable:!1,value:(r=e,function(){return r}),writable:!0});var r}:K;var It=Date.now;const Mt=function(t){var e=0,r=0;return function(){var n=It(),o=16-(n-r);if(r=n,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Et),Ct=function(t){return y(t)&&J(t)},Nt=function(t,e){return Mt(function(t,e,r){return e=qt(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=qt(n.length-e,0),u=Array(i);++o<i;)u[o]=n[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=n[o];return a[e]=r(u),function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(t,void 0,K),t+"")}((function(t,e){return Ct(t)?Pt(t,$t(e,1,Ct,!0)):[]}));function Ut(t,e,r){var n;return(e="symbol"==typeof(n=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e))?n:n+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class Bt{constructor(t,e){Ut(this,"el",null),Ut(this,"input",null),Ut(this,"conditions",{}),Ut(this,"targets",{}),Ut(this,"readonly",!1),Ut(this,"initialDisplay",null),this.el=t,this.input=this.el.querySelector(this.el.dataset.inputSelector||"[data-field-input]"),this.conditions=e,this.init()}init(){this.initialDisplay=window.getComputedStyle(this.el).display||"block",Q(this.conditions,((t,e)=>{const r=u.selectOne(e);let n;this.input&&(this.readonly=this.input.hasAttribute("readonly")),n="DIV"===r.nodeName?r.querySelectorAll("input, select, textarea"):[r],u.selectAll(n,(e=>{e.addEventListener("change",(()=>{this.updateShowState(r,t)}))})),this.updateShowState(r,t,1)}))}updateShowState(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300;const n=this.isValueMatched(t,e);n?u.$ui.fadeIn(this.el,r,this.initialDisplay):u.$ui.fadeOut(this.el,r),this.input&&(n?this.input.removeAttribute("readonly"):this.input.setAttribute("readonly","readonly"))}isValueMatched(t,e){var r;let n=null;switch(this.nodeType(t)){case"input":case"textarea":n=t.value;break;case"select":n=t.multiple?u.selectAll(t.querySelectorAll("option")).filter((t=>t.selected)).map((t=>t.value)):t.value;break;case"checkbox":n=t.checked?t.value:null;break;case"radio":n=null===(r=t.querySelector("input[type=radio]:checked"))||void 0===r?void 0:r.value}return Array.isArray(e)?Array.isArray(n)?0===Nt(e,n).length:-1!==e.indexOf(n):Array.isArray(n)?-1!==n.indexOf(e):e==n}nodeType(t){var e=t.nodeName.toLowerCase(),r=t.type;return"select"===e?"select":"textarea"===e?"textarea":"input"===e?"checkbox"===r?"checkbox":"input":"div"===e&&t.querySelector("input[type=radio]")?"radio":void 0}}u.directive("show-on",{mounted(t,e){let{value:r}=e;u.module(t,"show.on",(t=>new Bt(t,JSON.parse(r))))}})})();
//# sourceMappingURL=show-on.js.map