!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(self,(()=>(()=>{"use strict";var t={};(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(t);const e="object"==typeof global&&global&&global.Object===Object&&global;var r="object"==typeof self&&self&&self.Object===Object&&self;const n=e||r||Function("return this")(),o=n.Symbol;var c=Object.prototype,i=c.hasOwnProperty,a=c.toString,l=o?o.toStringTag:void 0;var f=Object.prototype.toString;var s=o?o.toStringTag:void 0;const p=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?function(t){var e=i.call(t,l),r=t[l];try{t[l]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(e?t[l]=r:delete t[l]),o}(t):function(t){return f.call(t)}(t)},y=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},b=function(t){if(!y(t))return!1;var e=p(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},v=n["__core-js_shared__"];var d,h=(d=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||""))?"Symbol(src)_1."+d:"";var g=Function.prototype.toString;var j=/^\[object .+?Constructor\]$/,m=Function.prototype,O=Object.prototype,_=m.toString,S=O.hasOwnProperty,w=RegExp("^"+_.call(S).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const x=function(t){return!(!y(t)||(e=t,h&&h in e))&&(b(t)?w:j).test(function(t){if(null!=t){try{return g.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e},P=function(){try{var t=function(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return x(r)?r:void 0}(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),E=function(t,e,r){"__proto__"==e&&P?P(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},A=function(t,e){return t===e||t!=t&&e!=e};var k=Object.prototype.hasOwnProperty;const q=function(t,e,r){var n=t[e];k.call(t,e)&&A(n,r)&&(void 0!==r||e in t)||E(t,e,r)},T=function(t){return t},R=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)};var $=Math.max;const C=function(t){return function(){return t}},F=P?function(t,e){return P(t,"toString",{configurable:!0,enumerable:!1,value:C(e),writable:!0})}:T;var M=Date.now;const L=(U=F,I=0,B=0,function(){var t=M(),e=16-(t-B);if(B=t,e>0){if(++I>=800)return arguments[0]}else I=0;return U.apply(void 0,arguments)});var U,I,B;const D=function(t,e){return L(function(t,e,r){return e=$(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,c=$(n.length-e,0),u=Array(c);++o<c;)u[o]=n[e+o];o=-1;for(var i=Array(e+1);++o<e;)i[o]=n[o];return i[e]=r(u),R(t,this,i)}}(t,e,T),t+"")},N=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},H=function(t){return null!=t&&N(t.length)&&!b(t)};var z=/^(?:0|[1-9]\d*)$/;const G=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&z.test(t))&&t>-1&&t%1==0&&t<e},J=function(t,e,r){if(!y(r))return!1;var n=typeof e;return!!("number"==n?H(r)&&G(e,r.length):"string"==n&&e in r)&&A(r[e],t)},K=function(t){return null!=t&&"object"==typeof t},V=function(t){return K(t)&&"[object Arguments]"==p(t)};var W=Object.prototype,Q=W.hasOwnProperty,X=W.propertyIsEnumerable,Y=V(function(){return arguments}())?V:function(t){return K(t)&&Q.call(t,"callee")&&!X.call(t,"callee")};const Z=Y,tt=Array.isArray;var et="object"==typeof exports&&exports&&!exports.nodeType&&exports,rt=et&&"object"==typeof module&&module&&!module.nodeType&&module,nt=rt&&rt.exports===et?n.Buffer:void 0;const ot=(nt?nt.isBuffer:void 0)||function(){return!1};var ct={};ct["[object Float32Array]"]=ct["[object Float64Array]"]=ct["[object Int8Array]"]=ct["[object Int16Array]"]=ct["[object Int32Array]"]=ct["[object Uint8Array]"]=ct["[object Uint8ClampedArray]"]=ct["[object Uint16Array]"]=ct["[object Uint32Array]"]=!0,ct["[object Arguments]"]=ct["[object Array]"]=ct["[object ArrayBuffer]"]=ct["[object Boolean]"]=ct["[object DataView]"]=ct["[object Date]"]=ct["[object Error]"]=ct["[object Function]"]=ct["[object Map]"]=ct["[object Number]"]=ct["[object Object]"]=ct["[object RegExp]"]=ct["[object Set]"]=ct["[object String]"]=ct["[object WeakMap]"]=!1;var ut="object"==typeof exports&&exports&&!exports.nodeType&&exports,it=ut&&"object"==typeof module&&module&&!module.nodeType&&module,at=it&&it.exports===ut&&e.process,lt=function(){try{return it&&it.require&&it.require("util").types||at&&at.binding&&at.binding("util")}catch(t){}}(),ft=lt&&lt.isTypedArray;const st=ft?function(t){return function(e){return t(e)}}(ft):function(t){return K(t)&&N(t.length)&&!!ct[p(t)]};var pt=Object.prototype.hasOwnProperty;const yt=function(t,e){var r=tt(t),n=!r&&Z(t),o=!r&&!n&&ot(t),c=!r&&!n&&!o&&st(t),u=r||n||o||c,i=u?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],a=i.length;for(var l in t)!e&&!pt.call(t,l)||u&&("length"==l||o&&("offset"==l||"parent"==l)||c&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||G(l,a))||i.push(l);return i};var bt=Object.prototype;const vt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||bt)};var dt=Object.prototype.hasOwnProperty;const ht=function(t){if(!y(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=vt(t),r=[];for(var n in t)("constructor"!=n||!e&&dt.call(t,n))&&r.push(n);return r},gt=(jt=function(t,e,r,n){!function(t,e,r,n){var o=!r;r||(r={});for(var c=-1,u=e.length;++c<u;){var i=e[c],a=n?n(r[i],t[i],i,r,t):void 0;void 0===a&&(a=t[i]),o?E(r,i,a):q(r,i,a)}}(e,function(t){return H(t)?yt(t,!0):ht(t)}(e),t,n)},D((function(t,e){var r=-1,n=e.length,o=n>1?e[n-1]:void 0,c=n>2?e[2]:void 0;for(o=jt.length>3&&"function"==typeof o?(n--,o):void 0,c&&J(e[0],e[1],c)&&(o=n<3?void 0:o,n=1),t=Object(t);++r<n;){var u=e[r];u&&jt(t,u,r,o)}return t})));var jt;const mt=function(t,e){return function(r){return t(e(r))}},Ot=mt(Object.getPrototypeOf,Object);var _t=Function.prototype,St=Object.prototype,wt=_t.toString,xt=St.hasOwnProperty,Pt=wt.call(Object);const Et=function(t){if(!K(t))return!1;var e=p(t);return"[object Error]"==e||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!function(t){if(!K(t)||"[object Object]"!=p(t))return!1;var e=Ot(t);if(null===e)return!0;var r=xt.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&wt.call(r)==Pt}(t)},At=D((function(t,e){try{return R(t,void 0,e)}catch(t){return Et(t)?t:new Error(t)}})),kt=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o};var qt=Object.prototype,Tt=qt.hasOwnProperty;const Rt=function(t,e,r,n){return void 0===t||A(t,qt[r])&&!Tt.call(n,r)?e:t};var $t={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};const Ct=function(t){return"\\"+$t[t]},Ft=mt(Object.keys,Object);var Mt=Object.prototype.hasOwnProperty;const Lt=function(t){return H(t)?yt(t):function(t){if(!vt(t))return Ft(t);var e=[];for(var r in Object(t))Mt.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)},Ut=/<%=([\s\S]+?)%>/g,It=(Bt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},function(t){return null==Bt?void 0:Bt[t]});var Bt;var Dt=o?o.prototype:void 0,Nt=Dt?Dt.toString:void 0;const Ht=function t(e){if("string"==typeof e)return e;if(tt(e))return kt(e,t)+"";if(function(t){return"symbol"==typeof t||K(t)&&"[object Symbol]"==p(t)}(e))return Nt?Nt.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},zt=function(t){return null==t?"":Ht(t)};var Gt=/[&<>"']/g,Jt=RegExp(Gt.source);const Kt={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:Ut,variable:"",imports:{_:{escape:function(t){return(t=zt(t))&&Jt.test(t)?t.replace(Gt,It):t}}}};var Vt=/\b__p \+= '';/g,Wt=/\b(__p \+=) '' \+/g,Qt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Xt=/[()=,{}\[\]\/\s]/,Yt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Zt=/($^)/,te=/['\n\r\u2028\u2029\\]/g,ee=Object.prototype.hasOwnProperty;const re=function(t,e,r){var n=Kt.imports._.templateSettings||Kt;r&&J(t,e,r)&&(e=void 0),t=zt(t),e=gt({},e,n,Rt);var o,c,u=gt({},e.imports,n.imports,Rt),i=Lt(u),a=function(t,e){return kt(e,(function(e){return t[e]}))}(u,i),l=0,f=e.interpolate||Zt,s="__p += '",p=RegExp((e.escape||Zt).source+"|"+f.source+"|"+(f===Ut?Yt:Zt).source+"|"+(e.evaluate||Zt).source+"|$","g"),y=ee.call(e,"sourceURL")?"//# sourceURL="+(e.sourceURL+"").replace(/\s/g," ")+"\n":"";t.replace(p,(function(e,r,n,u,i,a){return n||(n=u),s+=t.slice(l,a).replace(te,Ct),r&&(o=!0,s+="' +\n__e("+r+") +\n'"),i&&(c=!0,s+="';\n"+i+";\n__p += '"),n&&(s+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),l=a+e.length,e})),s+="';\n";var b=ee.call(e,"variable")&&e.variable;if(b){if(Xt.test(b))throw new Error("Invalid `variable` option passed into `_.template`")}else s="with (obj) {\n"+s+"\n}\n";s=(c?s.replace(Vt,""):s).replace(Wt,"$1").replace(Qt,"$1;"),s="function("+(b||"obj")+") {\n"+(b?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(c?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";var v=At((function(){return Function(i,y+"return "+s).apply(void 0,a)}));if(v.source=s,Et(v))throw v;return v};function ne(t){return ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ne(t)}function oe(t,e){if(e&&("object"===ne(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function ce(t){var e="function"==typeof Map?new Map:void 0;return ce=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return ue(t,arguments,le(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ae(n,t)},ce(t)}function ue(t,e,r){return ue=ie()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&ae(o,r.prototype),o},ue.apply(null,arguments)}function ie(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function ae(t,e){return ae=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},ae(t,e)}function le(t){return le=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},le(t)}function fe(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function se(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function pe(t,e,r){return e&&se(t.prototype,e),r&&se(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var ye,be,ve=function(){function t(e){fe(this,t),this.app=e}return pe(t,[{key:"createCallback",value:function(t,e,r){return"list"===t?function(t){var n=document.querySelector(e);n.querySelector('[data-value="'.concat(t.value,'"]'))?alert(u.__("unicorn.field.modal.already.selected")):(n.append(t,!0),document.querySelector(r).close())}:function(t){var n=document.querySelector(e),o=n.querySelector("[data-role=image]"),c=n.querySelector("[data-role=title]"),i=n.querySelector("[data-role=value]");o&&t.image&&(o.style.backgroundImage="url(".concat(t.image,");")),c.value=t.title||"",i.value=t.value||"",i.dispatchEvent(new CustomEvent("change")),document.querySelector(r).close(),u.$ui.highlight(c)}}}],[{key:"install",value:function(t){u.import("@sortablejs"),t.$modalField=new this(t)}}]),t}(),de=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ae(t,e)}(o,t);var e,r,n=(e=o,r=ie(),function(){var t,n=le(e);if(r){var o=le(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return oe(this,t)});function o(){return fe(this,o),n.apply(this,arguments)}return pe(o,[{key:"listContainer",get:function(){return this.querySelector("[data-role=list-container]")}},{key:"modal",get:function(){return document.querySelector(this.options.modalSelector)}},{key:"items",get:function(){return this.listContainer.children}},{key:"connectedCallback",value:function(){var t=this;this.options=JSON.parse(this.getAttribute("options")||"{}"),this.itemTemplate=re(document.querySelector(this.options.itemTemplate).innerHTML),this.options.sortable&&u.import("@sortablejs").then((function(){new Sortable(t.listContainer,{handle:".h-drag-handle"})}));var e=this.querySelector("[data-role=select]");e.addEventListener("click",(function(e){t.open(e)})),this.querySelector("[data-role=clear]").addEventListener("click",(function(){[].forEach.call(t.items,(function(t){t.querySelector("[data-role=remove]").click()}))})),e.style.pointerEvents=null,this.render()}},{key:"render",value:function(){var t=this;(u.data("unicorn.modal-field")[this.options.dataKey]||[]).forEach((function(e){t.append(e)}))}},{key:"append",value:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=u.html(this.itemTemplate({item:t}));n.dataset.value=t.value,n.querySelector("[data-role=remove]").addEventListener("click",(function(){u.$ui.slideUp(n).then((function(){n.remove(),e.toggleRequired()}))})),this.listContainer.appendChild(n),this.toggleRequired(),r&&u.$ui.highlight(n)}},{key:"toggleRequired",value:function(){var t=this.querySelector("[data-role=validation-placeholder]");t&&(t.disabled=0!==this.listContainer.children.length)}},{key:"open",value:function(t){t.preventDefault(),t.stopPropagation();var e=this.options.max;e&&this.listContainer.children.length>=e?alert(u.__("unicorn.field.modal.max.selected",e)):this.modal.open(t.target.href,{size:"modal-xl"})}}]),o}(ce(HTMLElement));return be="uni-modal-list","is"in(ye=de)?Object.defineProperty(ye,"is",{value:be,enumerable:!0,configurable:!0,writable:!0}):ye.is=be,u.defineCustomElement(de.is,de),u.use(ve),t})()));
//# sourceMappingURL=modal-field.js.map