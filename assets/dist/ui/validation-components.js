!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(self,(function(){return(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{UnicornFormValidation:()=>pe});const r=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)},n=function(t){return t};var i=Math.max;const o="object"==typeof global&&global&&global.Object===Object&&global;var a="object"==typeof self&&self&&self.Object===Object&&self;const s=o||a||Function("return this")(),l=s.Symbol;var c=Object.prototype,f=c.hasOwnProperty,d=c.toString,p=l?l.toStringTag:void 0;var h=Object.prototype.toString;var v=l?l.toStringTag:void 0;const y=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":v&&v in Object(t)?function(t){var e=f.call(t,p),r=t[p];try{t[p]=void 0;var n=!0}catch(t){}var i=d.call(t);return n&&(e?t[p]=r:delete t[p]),i}(t):function(t){return h.call(t)}(t)},b=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},g=function(t){if(!b(t))return!1;var e=y(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},m=s["__core-js_shared__"];var _,j=(_=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||""))?"Symbol(src)_1."+_:"";var O=Function.prototype.toString;var w=/^\[object .+?Constructor\]$/,k=Function.prototype,S=Object.prototype,A=k.toString,F=S.hasOwnProperty,C=RegExp("^"+A.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const x=function(t){return!(!b(t)||(e=t,j&&j in e))&&(g(t)?C:w).test(function(t){if(null!=t){try{return O.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e},z=function(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return x(r)?r:void 0},E=function(){try{var t=z(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),P=E?function(t,e){return E(t,"toString",{configurable:!0,enumerable:!1,value:(r=e,function(){return r}),writable:!0});var r}:n;var I=Date.now;const T=(V=P,L=0,M=0,function(){var t=I(),e=16-(t-M);if(M=t,e>0){if(++L>=800)return arguments[0]}else L=0;return V.apply(void 0,arguments)});var V,L,M;const B=function(t,e){return T(function(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var o=arguments,a=-1,s=i(o.length-e,0),u=Array(s);++a<s;)u[a]=o[e+a];a=-1;for(var l=Array(e+1);++a<e;)l[a]=o[a];return l[e]=n(u),r(t,this,l)}}(t,e,n),t+"")},U=function(t,e){return t===e||t!=t&&e!=e},R=function(t,e){for(var r=t.length;r--;)if(U(t[r][0],e))return r;return-1};var N=Array.prototype.splice;function q(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}q.prototype.clear=function(){this.__data__=[],this.size=0},q.prototype.delete=function(t){var e=this.__data__,r=R(e,t);return!(r<0||(r==e.length-1?e.pop():N.call(e,r,1),--this.size,0))},q.prototype.get=function(t){var e=this.__data__,r=R(e,t);return r<0?void 0:e[r][1]},q.prototype.has=function(t){return R(this.__data__,t)>-1},q.prototype.set=function(t,e){var r=this.__data__,n=R(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};const D=q,W=z(s,"Map"),J=z(Object,"create");var Z=Object.prototype.hasOwnProperty;var H=Object.prototype.hasOwnProperty;function G(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}G.prototype.clear=function(){this.__data__=J?J(null):{},this.size=0},G.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},G.prototype.get=function(t){var e=this.__data__;if(J){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Z.call(e,t)?e[t]:void 0},G.prototype.has=function(t){var e=this.__data__;return J?void 0!==e[t]:H.call(e,t)},G.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=J&&void 0===e?"__lodash_hash_undefined__":e,this};const X=G,Y=function(t,e){var r,n,i=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map};function K(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}K.prototype.clear=function(){this.size=0,this.__data__={hash:new X,map:new(W||D),string:new X}},K.prototype.delete=function(t){var e=Y(this,t).delete(t);return this.size-=e?1:0,e},K.prototype.get=function(t){return Y(this,t).get(t)},K.prototype.has=function(t){return Y(this,t).has(t)},K.prototype.set=function(t,e){var r=Y(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};const Q=K;function tt(t){var e=this.__data__=new D(t);this.size=e.size}tt.prototype.clear=function(){this.__data__=new D,this.size=0},tt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},tt.prototype.get=function(t){return this.__data__.get(t)},tt.prototype.has=function(t){return this.__data__.has(t)},tt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof D){var n=r.__data__;if(!W||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Q(n)}return r.set(t,e),this.size=r.size,this};const et=tt,rt=function(t,e,r){"__proto__"==e&&E?E(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},nt=function(t,e,r){(void 0!==r&&!U(t[e],r)||void 0===r&&!(e in t))&&rt(t,e,r)},it=function(t,e,r){for(var n=-1,i=Object(t),o=r(t),a=o.length;a--;){var s=o[++n];if(!1===e(i[s],s,i))break}return t};var ot="object"==typeof exports&&exports&&!exports.nodeType&&exports,at=ot&&"object"==typeof module&&module&&!module.nodeType&&module,st=at&&at.exports===ot?s.Buffer:void 0,ut=st?st.allocUnsafe:void 0;const lt=s.Uint8Array,ct=function(t,e){var r,n,i=e?(r=t.buffer,n=new r.constructor(r.byteLength),new lt(n).set(new lt(r)),n):t.buffer;return new t.constructor(i,t.byteOffset,t.length)};var ft=Object.create;const dt=function(){function t(){}return function(e){if(!b(e))return{};if(ft)return ft(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),pt=function(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object);var ht=Object.prototype;const vt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ht)},yt=function(t){return null!=t&&"object"==typeof t},bt=function(t){return yt(t)&&"[object Arguments]"==y(t)};var gt=Object.prototype,mt=gt.hasOwnProperty,_t=gt.propertyIsEnumerable,jt=bt(function(){return arguments}())?bt:function(t){return yt(t)&&mt.call(t,"callee")&&!_t.call(t,"callee")};const Ot=jt,$t=Array.isArray,wt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},kt=function(t){return null!=t&&wt(t.length)&&!g(t)};var St="object"==typeof exports&&exports&&!exports.nodeType&&exports,At=St&&"object"==typeof module&&module&&!module.nodeType&&module,Ft=At&&At.exports===St?s.Buffer:void 0;const Ct=(Ft?Ft.isBuffer:void 0)||function(){return!1};var xt=Function.prototype,zt=Object.prototype,Et=xt.toString,Pt=zt.hasOwnProperty,It=Et.call(Object);var Tt={};Tt["[object Float32Array]"]=Tt["[object Float64Array]"]=Tt["[object Int8Array]"]=Tt["[object Int16Array]"]=Tt["[object Int32Array]"]=Tt["[object Uint8Array]"]=Tt["[object Uint8ClampedArray]"]=Tt["[object Uint16Array]"]=Tt["[object Uint32Array]"]=!0,Tt["[object Arguments]"]=Tt["[object Array]"]=Tt["[object ArrayBuffer]"]=Tt["[object Boolean]"]=Tt["[object DataView]"]=Tt["[object Date]"]=Tt["[object Error]"]=Tt["[object Function]"]=Tt["[object Map]"]=Tt["[object Number]"]=Tt["[object Object]"]=Tt["[object RegExp]"]=Tt["[object Set]"]=Tt["[object String]"]=Tt["[object WeakMap]"]=!1;var Vt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Lt=Vt&&"object"==typeof module&&module&&!module.nodeType&&module,Mt=Lt&&Lt.exports===Vt&&o.process,Bt=function(){try{return Lt&&Lt.require&&Lt.require("util").types||Mt&&Mt.binding&&Mt.binding("util")}catch(t){}}(),Ut=Bt&&Bt.isTypedArray;const Rt=Ut?function(t){return function(e){return t(e)}}(Ut):function(t){return yt(t)&&wt(t.length)&&!!Tt[y(t)]},Nt=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var qt=Object.prototype.hasOwnProperty;const Dt=function(t,e,r){var n=t[e];qt.call(t,e)&&U(n,r)&&(void 0!==r||e in t)||rt(t,e,r)};var Wt=/^(?:0|[1-9]\d*)$/;const Jt=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&Wt.test(t))&&t>-1&&t%1==0&&t<e};var Zt=Object.prototype.hasOwnProperty;const Ht=function(t,e){var r=$t(t),n=!r&&Ot(t),i=!r&&!n&&Ct(t),o=!r&&!n&&!i&&Rt(t),a=r||n||i||o,s=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],u=s.length;for(var l in t)!e&&!Zt.call(t,l)||a&&("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Jt(l,u))||s.push(l);return s};var Gt=Object.prototype.hasOwnProperty;const Xt=function(t){if(!b(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=vt(t),r=[];for(var n in t)("constructor"!=n||!e&&Gt.call(t,n))&&r.push(n);return r},Yt=function(t){return kt(t)?Ht(t,!0):Xt(t)},Kt=function(t){return function(t,e,r,n){var i=!r;r||(r={});for(var o=-1,a=e.length;++o<a;){var s=e[o],u=n?n(r[s],t[s],s,r,t):void 0;void 0===u&&(u=t[s]),i?rt(r,s,u):Dt(r,s,u)}return r}(t,Yt(t))},Qt=function(t,e,r,n,i,o,a){var s,u=Nt(t,r),l=Nt(e,r),c=a.get(l);if(c)nt(t,r,c);else{var f=o?o(u,l,r+"",t,e,a):void 0,d=void 0===f;if(d){var p=$t(l),h=!p&&Ct(l),v=!p&&!h&&Rt(l);f=l,p||h||v?$t(u)?f=u:yt(s=u)&&kt(s)?f=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(u):h?(d=!1,f=function(t,e){if(e)return t.slice();var r=t.length,n=ut?ut(r):new t.constructor(r);return t.copy(n),n}(l,!0)):v?(d=!1,f=ct(l,!0)):f=[]:function(t){if(!yt(t)||"[object Object]"!=y(t))return!1;var e=pt(t);if(null===e)return!0;var r=Pt.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&Et.call(r)==It}(l)||Ot(l)?(f=u,Ot(u)?f=Kt(u):b(u)&&!g(u)||(f=function(t){return"function"!=typeof t.constructor||vt(t)?{}:dt(pt(t))}(l))):d=!1}d&&(a.set(l,f),i(f,l,n,o,a),a.delete(l)),nt(t,r,f)}},te=function t(e,r,n,i,o){e!==r&&it(r,(function(a,s){if(o||(o=new et),b(a))Qt(e,r,s,n,t,i,o);else{var u=i?i(Nt(e,s),a,s+"",e,r,o):void 0;void 0===u&&(u=a),nt(e,s,u)}}),Yt)},ee=function t(e,r,n,i,o,a){return b(e)&&b(r)&&(a.set(r,e),te(e,r,void 0,t,a),a.delete(r)),e},re=(ne=function(t,e,r,n){te(t,e,r,n)},B((function(t,e){var r=-1,n=e.length,i=n>1?e[n-1]:void 0,o=n>2?e[2]:void 0;for(i=ne.length>3&&"function"==typeof i?(n--,i):void 0,o&&function(t,e,r){if(!b(r))return!1;var n=typeof e;return!!("number"==n?kt(r)&&Jt(e,r.length):"string"==n&&e in r)&&U(r[e],t)}(e[0],e[1],o)&&(i=n<3?void 0:i,n=1),t=Object(t);++r<n;){var a=e[r];a&&ne(t,a,r,i)}return t})));var ne;const ie=B((function(t){return t.push(void 0,ee),r(re,void 0,t)}));function oe(t){return function(t){if(Array.isArray(t))return ae(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return ae(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ae(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function se(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ue(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function le(t,e,r){return e&&ue(t.prototype,e),r&&ue(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function ce(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var fe={},de={scroll:!1,scrollOffset:-100,enabled:!0,fieldSelector:null,validatedClass:null},pe=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};se(this,t),ce(this,"presetFields",[]),ce(this,"validators",{}),ce(this,"$form",void 0),this.$form=u.selectOne(e),this.setOptions(r),this.registerDefaultValidators(),this.init()}return le(t,[{key:"setOptions",value:function(t){this.options=ie(t,de)}},{key:"scrollEnabled",get:function(){return!0===this.options.scroll}},{key:"scrollOffset",get:function(){return Number(this.options.scrollOffset||-100)}},{key:"fieldSelector",get:function(){return this.options.fieldSelector||"input, select, textarea"}},{key:"validatedClass",get:function(){return this.options.validatedClass||"was-validated"}},{key:"init",value:function(){var t=this;"FORM"===this.$form.tagName&&(this.$form.setAttribute("novalidate",!0),this.$form.addEventListener("submit",(function(e){return!(t.options.enabled&&!t.validateAll()&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),1))}),!1)),this.prepareFields(this.findDOMFields()),this.prepareFields(this.presetFields)}},{key:"findDOMFields",value:function(){return u.selectAll(this.$form.querySelectorAll(this.fieldSelector))}},{key:"prepareFields",value:function(t){var e=this;return t.forEach((function(t){e.prepareFieldWrapper(t)})),Promise.resolve()}},{key:"prepareFieldWrapper",value:function(t){if(-1!==["INPUT","SELECT","TEXTAREA"].indexOf(t.tagName)){var e=t.closest(".form-group, [uni-field-validate]");return e&&!e.getAttribute("uni-field-validate")&&e.setAttribute("uni-field-validate","{}"),e}return t}},{key:"findFields",value:function(){var t,e=this,r=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this.findDOMFields();return r&&(t=n).push.apply(t,oe(this.presetFields)),(n=n.map((function(t){return e.prepareFieldWrapper(t)}))).filter((function(t){return null!=t}))}},{key:"validateAll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.markFormAsUnvalidated(),t=t||this.findFields();var e=null;return t.forEach((function(t){var r=u.getBoundedInstance(t,"field.validation");r&&(r.checkValidity()||e||(e=t))})),this.markFormAsValidated(),e&&this.scrollEnabled&&this.scrollTo(e),null===e}},{key:"scrollTo",value:function(t){var e=this.scrollOffset,r=t.getBoundingClientRect().top+window.pageYOffset+e;window.scrollTo({top:r,behavior:"smooth"})}},{key:"markFormAsValidated",value:function(){this.$form&&this.$form.classList.add(this.validatedClass)}},{key:"markFormAsUnvalidated",value:function(){this.$form&&this.$form.classList.remove(this.validatedClass)}},{key:"addField",value:function(t){return this.presetFields.push(t),this.prepareFieldWrapper(t),this}},{key:"registerDefaultValidators",value:function(){for(var t in fe)fe.hasOwnProperty(t)&&this.addValidator(t,fe[t])}},{key:"addValidator",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=r||{},this.validators[t]={handler:e,options:r},this}}]),t}();ce(pe,"is","uni-form-validate");var he=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};se(this,t),ce(this,"$input",void 0),this.el=e,this.options=r,this.init()}return le(t,[{key:"$form",get:function(){return this.getForm()}},{key:"errorSelector",get:function(){return this.options.errorSelector||"[data-field-error]"}},{key:"selector",get:function(){return this.options.selector||"input, select, textarea"}},{key:"validClass",get:function(){return this.options.validClass||"is-valid"}},{key:"invalidClass",get:function(){return this.options.invalidClass||"is-invalid"}},{key:"isVisible",get:function(){return!!(this.el.offsetWidth||this.el.offsetHeight||this.el.getClientRects().length)}},{key:"selectInput",value:function(){return this.$input=this.el.querySelector(this.selector)}},{key:"init",value:function(){this.selectInput(),this.bindEvents(),this.prepareWrapper()}},{key:"bindEvents",value:function(){var t=this;this.$input&&(this.$input.addEventListener("invalid",(function(e){t.showInvalidResponse()})),(this.options.events||["change"]).forEach((function(e){t.$input.addEventListener(e,(function(){t.checkValidity()}))})))}},{key:"prepareWrapper",value:function(){var t,e;null!==(t=this.el.querySelector(this.errorSelector))&&void 0!==t&&null!==(e=t.classList)&&void 0!==e&&e.contains("invalid-tooltip")&&"static"===window.getComputedStyle(this.el).position&&(this.el.style.position="relative")}},{key:"checkValidity",value:function(){if(!this.$input)return!0;if(this.$input.hasAttribute("readonly"))return!0;this.$input.classList.remove(this.invalidClass),this.$input.classList.remove(this.validClass),this.$input.setCustomValidity(""),this.$form&&this.runCustomValidity();var t=this.$input.checkValidity();return t?this.$input.classList.add(this.validClass):this.$input.classList.add(this.invalidClass),t}},{key:"getFormValidation",value:function(t){return u.getBoundedInstance(t,"form.validation")}},{key:"runCustomValidity",value:function(){var t,e=(this.$input.getAttribute("data-validate")||"").split("|"),r=!0,n=this.getFormValidation(this.$form);if(""!==this.$input.value&&e.length)for(var i in e){var o=n.validators[e[i]];if(o&&!o.handler(this.$input.value,this.$input)){"function"==typeof(t=o.options.notice)&&(t=t(this.$input,this)),null!=t&&this.$input.setCustomValidity(t),""===this.$input.validationMessage&&this.$input.setCustomValidity(u.__("unicorn.message.validation.custom.error")),r=!1;break}}return r}},{key:"showInvalidResponse",value:function(){if(!this.isVisible){var t,e=null===(t=this.findLabel())||void 0===t?void 0:t.textContent;e||(e=this.$input.name),u.addMessage("Field: ".concat(e," - ").concat(this.$input.validationMessage),"warning")}var r=this.el.querySelector(this.errorSelector);r||(r=this.createHelpElement(),this.el.appendChild(r),this.prepareWrapper()),r.textContent=this.$input.validationMessage}},{key:"createHelpElement",value:function(){var t,e=this.options.errorMessageClass||"invalid-tooltip",r=this.parseSelector(this.errorSelector),n=u.html('<div class="'.concat(e,'"></div>'));return(t=n.classList).add.apply(t,oe(r.classes)),r.attrs.forEach((function(t){n.setAttribute(t[0],t[1]||"")})),r.ids.forEach((function(t){n.id=t})),n}},{key:"parseSelector",value:function(t){var e={tags:[],classes:[],ids:[],attrs:[]};return t.split(/(?=\.)|(?=#)|(?=\[)/).forEach((function(t){switch(t[0]){case"#":e.ids.push(t.slice(1));break;case".":e.classes.push(t.slice(1));break;case"[":e.attrs.push(t.slice(1,-1).split("="));break;default:e.tags.push(t)}})),e}},{key:"clearInvalidResponse",value:function(){this.el.querySelector(this.errorSelector).textContent=""}},{key:"getForm",value:function(){return this.el.closest(this.options.formSelector||"[uni-form-validate]")}},{key:"findLabel",value:function(){var t=this.$input.id,e=this.$input.closest("[data-field-wrapper]"),r=null;return e&&(r=e.querySelector("[data-field-label]")),r||(r=document.querySelector('label[for="'.concat(t,'"]'))),r}}]),t}();return ce(he,"is","uni-field-validate"),u.directive("form-validate",{mounted:function(t,e){u.getBoundedInstance(t,"form.validation",(function(t){return new pe(t,JSON.parse(e.value||"{}"))}))},updated:function(t,e){u.getBoundedInstance(t,"form.validation").setOptions(JSON.parse(e.value||"{}"))}}),u.directive("field-validate",{mounted:function(t,e){u.getBoundedInstance(t,"field.validation",(function(t){return new he(t,JSON.parse(e.value||"{}"))}))},updated:function(t,e){u.getBoundedInstance(t,"field.validation").options=JSON.parse(e.value||"{}")}}),fe.username=function(t,e){return!new RegExp("[<|>|\"|'|%|;|(|)|&]","i").test(t)},fe.numeric=function(t,e){return/^(\d|-)?(\d|,)*\.?\d*$/.test(t)},fe.email=function(t,e){return t=punycode.toASCII(t),/^[a-zA-Z0-9.!#$%&â€™*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(t)},fe.url=function(t,e){return/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test(t)},fe.alnum=function(t,e){return/^[a-zA-Z0-9]*$/.test(t)},fe.color=function(t,e){return/^#(?:[0-9a-f]{3}){1,2}$/.test(t)},fe.creditcard=function(t,e){return/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|622((12[6-9]|1[3-9][0-9])|([2-8][0-9][0-9])|(9(([0-1][0-9])|(2[0-5]))))[0-9]{10}|64[4-9][0-9]{13}|65[0-9]{14}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})*$/.test(t)},fe.ip=function(t,e){return/^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$/.test(t)},fe["password-confirm"]=function(t,e){var r=e.attr("data-confirm-target");return $(r).val()===t},e})()}));
//# sourceMappingURL=validation-components.js.map