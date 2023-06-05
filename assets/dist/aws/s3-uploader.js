!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.S3Uploader=e():t.S3Uploader=e()}(self,(()=>(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{create:()=>se,destroy:()=>le,get:()=>ae,getInstance:()=>ce});const r=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)},n=function(t){return t};var o=Math.max;const i=function(t){return function(){return t}},c="object"==typeof global&&global&&global.Object===Object&&global;var a="object"==typeof self&&self&&self.Object===Object&&self;const s=c||a||Function("return this")(),l=s.Symbol;var f=Object.prototype,p=f.hasOwnProperty,y=f.toString,h=l?l.toStringTag:void 0;var v=Object.prototype.toString;var d=l?l.toStringTag:void 0;const b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?function(t){var e=p.call(t,h),r=t[h];try{t[h]=void 0;var n=!0}catch(t){}var o=y.call(t);return n&&(e?t[h]=r:delete t[h]),o}(t):function(t){return v.call(t)}(t)},_=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},g=function(t){if(!_(t))return!1;var e=b(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},j=s["__core-js_shared__"];var m,O=(m=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+m:"";var w=Function.prototype.toString;var S=/^\[object .+?Constructor\]$/,A=Function.prototype,x=Object.prototype,P=A.toString,z=x.hasOwnProperty,T=RegExp("^"+P.call(z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const U=function(t){return!(!_(t)||(e=t,O&&O in e))&&(g(t)?T:S).test(function(t){if(null!=t){try{return w.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e},C=function(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return U(r)?r:void 0},F=function(){try{var t=C(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),I=F?function(t,e){return F(t,"toString",{configurable:!0,enumerable:!1,value:i(e),writable:!0})}:n;var k=Date.now;const $=(D=I,B=0,E=0,function(){var t=k(),e=16-(t-E);if(E=t,e>0){if(++B>=800)return arguments[0]}else B=0;return D.apply(void 0,arguments)});var D,B,E;const M=function(t,e){return $(function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var i=arguments,u=-1,c=o(i.length-e,0),a=Array(c);++u<c;)a[u]=i[e+u];u=-1;for(var s=Array(e+1);++u<e;)s[u]=i[u];return s[e]=n(a),r(t,this,s)}}(t,e,n),t+"")},R=function(t,e){return t===e||t!=t&&e!=e},X=function(t,e){for(var r=t.length;r--;)if(R(t[r][0],e))return r;return-1};var q=Array.prototype.splice;function H(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}H.prototype.clear=function(){this.__data__=[],this.size=0},H.prototype.delete=function(t){var e=this.__data__,r=X(e,t);return!(r<0||(r==e.length-1?e.pop():q.call(e,r,1),--this.size,0))},H.prototype.get=function(t){var e=this.__data__,r=X(e,t);return r<0?void 0:e[r][1]},H.prototype.has=function(t){return X(this.__data__,t)>-1},H.prototype.set=function(t,e){var r=this.__data__,n=X(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};const L=H,N=C(s,"Map"),G=C(Object,"create");var V=Object.prototype.hasOwnProperty;var W=Object.prototype.hasOwnProperty;function J(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}J.prototype.clear=function(){this.__data__=G?G(null):{},this.size=0},J.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},J.prototype.get=function(t){var e=this.__data__;if(G){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return V.call(e,t)?e[t]:void 0},J.prototype.has=function(t){var e=this.__data__;return G?void 0!==e[t]:W.call(e,t)},J.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=G&&void 0===e?"__lodash_hash_undefined__":e,this};const K=J,Q=function(t,e){var r=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?r["string"==typeof e?"string":"hash"]:r.map};function Y(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Y.prototype.clear=function(){this.size=0,this.__data__={hash:new K,map:new(N||L),string:new K}},Y.prototype.delete=function(t){var e=Q(this,t).delete(t);return this.size-=e?1:0,e},Y.prototype.get=function(t){return Q(this,t).get(t)},Y.prototype.has=function(t){return Q(this,t).has(t)},Y.prototype.set=function(t,e){var r=Q(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};const Z=Y;function tt(t){var e=this.__data__=new L(t);this.size=e.size}tt.prototype.clear=function(){this.__data__=new L,this.size=0},tt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},tt.prototype.get=function(t){return this.__data__.get(t)},tt.prototype.has=function(t){return this.__data__.has(t)},tt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof L){var n=r.__data__;if(!N||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Z(n)}return r.set(t,e),this.size=r.size,this};const et=tt,rt=function(t,e,r){"__proto__"==e&&F?F(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},nt=function(t,e,r){(void 0!==r&&!R(t[e],r)||void 0===r&&!(e in t))&&rt(t,e,r)},ot=function(t,e,r){for(var n=-1,o=Object(t),i=r(t),u=i.length;u--;){var c=i[it?u:++n];if(!1===e(o[c],c,o))break}return t};var it,ut="object"==typeof exports&&exports&&!exports.nodeType&&exports,ct=ut&&"object"==typeof module&&module&&!module.nodeType&&module,at=ct&&ct.exports===ut?s.Buffer:void 0,st=at?at.allocUnsafe:void 0;const lt=s.Uint8Array,ft=function(t,e){var r,n,o=e?(r=t.buffer,n=new r.constructor(r.byteLength),new lt(n).set(new lt(r)),n):t.buffer;return new t.constructor(o,t.byteOffset,t.length)};var pt=Object.create;const yt=function(){function t(){}return function(e){if(!_(e))return{};if(pt)return pt(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),ht=function(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object);var vt=Object.prototype;const dt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||vt)},bt=function(t){return null!=t&&"object"==typeof t},_t=function(t){return bt(t)&&"[object Arguments]"==b(t)};var gt=Object.prototype,jt=gt.hasOwnProperty,mt=gt.propertyIsEnumerable,Ot=_t(function(){return arguments}())?_t:function(t){return bt(t)&&jt.call(t,"callee")&&!mt.call(t,"callee")};const wt=Ot,St=Array.isArray,At=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},xt=function(t){return null!=t&&At(t.length)&&!g(t)};var Pt="object"==typeof exports&&exports&&!exports.nodeType&&exports,zt=Pt&&"object"==typeof module&&module&&!module.nodeType&&module,Tt=zt&&zt.exports===Pt?s.Buffer:void 0;const Ut=(Tt?Tt.isBuffer:void 0)||function(){return!1};var Ct=Function.prototype,Ft=Object.prototype,It=Ct.toString,kt=Ft.hasOwnProperty,$t=It.call(Object);var Dt={};Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=!0,Dt["[object Arguments]"]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object Boolean]"]=Dt["[object DataView]"]=Dt["[object Date]"]=Dt["[object Error]"]=Dt["[object Function]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt["[object Object]"]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object WeakMap]"]=!1;var Bt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Et=Bt&&"object"==typeof module&&module&&!module.nodeType&&module,Mt=Et&&Et.exports===Bt&&c.process,Rt=function(){try{return Et&&Et.require&&Et.require("util").types||Mt&&Mt.binding&&Mt.binding("util")}catch(t){}}(),Xt=Rt&&Rt.isTypedArray;const qt=Xt?function(t){return function(e){return t(e)}}(Xt):function(t){return bt(t)&&At(t.length)&&!!Dt[b(t)]},Ht=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var Lt=Object.prototype.hasOwnProperty;const Nt=function(t,e,r){var n=t[e];Lt.call(t,e)&&R(n,r)&&(void 0!==r||e in t)||rt(t,e,r)};var Gt=/^(?:0|[1-9]\d*)$/;const Vt=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&Gt.test(t))&&t>-1&&t%1==0&&t<e};var Wt=Object.prototype.hasOwnProperty;const Jt=function(t,e){var r=St(t),n=!r&&wt(t),o=!r&&!n&&Ut(t),i=!r&&!n&&!o&&qt(t),u=r||n||o||i,c=u?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],a=c.length;for(var s in t)!e&&!Wt.call(t,s)||u&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Vt(s,a))||c.push(s);return c};var Kt=Object.prototype.hasOwnProperty;const Qt=function(t){if(!_(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=dt(t),r=[];for(var n in t)("constructor"!=n||!e&&Kt.call(t,n))&&r.push(n);return r},Yt=function(t){return xt(t)?Jt(t,!0):Qt(t)},Zt=function(t){return function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,u=e.length;++i<u;){var c=e[i],a=n?n(r[c],t[c],c,r,t):void 0;void 0===a&&(a=t[c]),o?rt(r,c,a):Nt(r,c,a)}return r}(t,Yt(t))},te=function(t,e,r,n,o,i,u){var c=Ht(t,r),a=Ht(e,r),s=u.get(a);if(s)nt(t,r,s);else{var l=i?i(c,a,r+"",t,e,u):void 0,f=void 0===l;if(f){var p=St(a),y=!p&&Ut(a),h=!p&&!y&&qt(a);l=a,p||y||h?St(c)?l=c:function(t){return bt(t)&&xt(t)}(c)?l=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(c):y?(f=!1,l=function(t,e){if(e)return t.slice();var r=t.length,n=st?st(r):new t.constructor(r);return t.copy(n),n}(a,!0)):h?(f=!1,l=ft(a,!0)):l=[]:function(t){if(!bt(t)||"[object Object]"!=b(t))return!1;var e=ht(t);if(null===e)return!0;var r=kt.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&It.call(r)==$t}(a)||wt(a)?(l=c,wt(c)?l=Zt(c):_(c)&&!g(c)||(l=function(t){return"function"!=typeof t.constructor||dt(t)?{}:yt(ht(t))}(a))):f=!1}f&&(u.set(a,l),o(l,a,n,i,u),u.delete(a)),nt(t,r,l)}},ee=function t(e,r,n,o,i){e!==r&&ot(r,(function(u,c){if(i||(i=new et),_(u))te(e,r,c,n,t,o,i);else{var a=o?o(Ht(e,c),u,c+"",e,r,i):void 0;void 0===a&&(a=u),nt(e,c,a)}}),Yt)},re=function t(e,r,n,o,i,u){return _(e)&&_(r)&&(u.set(r,e),ee(e,r,void 0,t,u),u.delete(r)),e},ne=(oe=function(t,e,r,n){ee(t,e,r,n)},M((function(t,e){var r=-1,n=e.length,o=n>1?e[n-1]:void 0,i=n>2?e[2]:void 0;for(o=oe.length>3&&"function"==typeof o?(n--,o):void 0,i&&function(t,e,r){if(!_(r))return!1;var n=typeof e;return!!("number"==n?xt(r)&&Vt(e,r.length):"string"==n&&e in r)&&R(r[e],t)}(e[0],e[1],i)&&(o=n<3?void 0:o,n=1),t=Object(t);++r<n;){var u=e[r];u&&oe(t,u,r,o)}return t})));var oe;const ie=M((function(t){return t.push(void 0,re),r(ne,void 0,t)})),ue={};function ce(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return ue[t]||(ue[t]=se(t,e={})),ue[t]}function ae(t){return Promise.resolve(se(t))}function se(t){return new fe(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})}function le(t){delete ue[t]}class fe extends(Unicorn.EventMixin(class{})){constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super();const r=u.data("@s3.uploder."+t)||{};this.name=t,this.options=ie({},e,r,this.constructor.defaultOptions)}upload(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=new FormData,o=ie({},r.formInputs||{},this.options.formInputs);"string"==typeof t&&(t=new Blob([t],{type:r["Content-Type"]||"text/plain"})),(t instanceof Blob||t instanceof File)&&(r["Content-Type"]=r["Content-Type"]||t.type),r.filename&&(r["Content-Disposition"]="attachment; filename*=UTF-8''"+encodeURIComponent(r.filename)),r.key=this.constructor.trimSlashes(this.options.subfolder)+"/"+this.constructor.trimSlashes(e),r.key=this.constructor.trimSlashes(r.key),r["Content-Type"]=r["Content-Type"]||null,r["Content-Disposition"]=r["Content-Disposition"]||null;for(let t in o)n.set(t,o[t]);for(let t of Object.keys(this.options.starts_with))r[t]&&n.set(t,r[t]);return n.append("file",t),this.trigger("start",n),u.$http.post(this.options.endpoint,n,{onUploadProgress:t=>{r.onUploadProgress&&r.onUploadProgress(t),this.trigger("upload-progress",t),t.lengthComputable&&this.trigger("progress",t.loaded/t.total,t)}}).then((t=>{const r=this.options.viewerHost+"/"+this.constructor.trimSlashes(e);return this.trigger("success",r,t),t.url=r,t})).finally((()=>{this.trigger("end")}))}static trimSlashes(t){return t.replace(/^\/+|\/+$/g,"")}}var pe,ye,he;return pe=fe,he={endpoint:"",subfolder:"",viewerHost:"",starts_with:[],formInputs:{acl:"",bucket:"",key:"",Policy:"","X-Amz-Algorithm":"","X-Amz-Credential":"","X-Amz-Date":"","X-Amz-Signature":""}},(ye=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(ye="defaultOptions"))in pe?Object.defineProperty(pe,ye,{value:he,enumerable:!0,configurable:!0,writable:!0}):pe[ye]=he,u.$loader.asImported("s3.uploader"),e})()));
//# sourceMappingURL=s3-uploader.js.map