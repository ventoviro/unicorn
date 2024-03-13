!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.UnicornValidation=e():t.UnicornValidation=e()}(self,(()=>(()=>{"use strict";var t={d:(e,i)=>{for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{UnicornFieldValidation:()=>m,UnicornFormValidation:()=>v,initValidations:()=>g,validators:()=>p});const i=2147483647,s=/[^\0-\x7F]/,n=/[\x2E\u3002\uFF0E\uFF61]/g,a={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},r=Math.floor,l=String.fromCharCode;function o(t){throw new RangeError(a[t])}const d=function(t,e){return t+22+75*(t<26)-((0!=e)<<5)},u=function(t,e,i){let s=0;for(t=i?r(t/700):t>>1,t+=r(t/e);t>455;s+=36)t=r(t/35);return r(s+36*t/(t+38))},h=function(t){return function(t,e){const i=t.split("@");let s="";i.length>1&&(s=i[0]+"@",t=i[1]);const a=function(t,e){const i=[];let s=t.length;for(;s--;)i[s]=e(t[s]);return i}((t=t.replace(n,".")).split("."),e).join(".");return s+a}(t,(function(t){return s.test(t)?"xn--"+function(t){const e=[],s=(t=function(t){const e=[];let i=0;const s=t.length;for(;i<s;){const n=t.charCodeAt(i++);if(n>=55296&&n<=56319&&i<s){const s=t.charCodeAt(i++);56320==(64512&s)?e.push(((1023&n)<<10)+(1023&s)+65536):(e.push(n),i--)}else e.push(n)}return e}(t)).length;let n=128,a=0,h=72;for(const i of t)i<128&&e.push(l(i));const p=e.length;let c=p;for(p&&e.push("-");c<s;){let s=i;for(const e of t)e>=n&&e<s&&(s=e);const f=c+1;s-n>r((i-a)/f)&&o("overflow"),a+=(s-n)*f,n=s;for(const s of t)if(s<n&&++a>i&&o("overflow"),s===n){let t=a;for(let i=36;;i+=36){const s=i<=h?1:i>=h+26?26:i-h;if(t<s)break;const n=t-s,a=36-s;e.push(l(d(s+n%a,0))),t=r(n/a)}e.push(l(d(t,0))),h=u(a,f,c===p),a=0,++c}++a,++n}return e.join("")}(t):t}))},p={},c={scroll:!1,scrollOffset:-100,enabled:!0,fieldSelector:null,validatedClass:null},f={formSelector:"[uni-form-validate]",errorSelector:"[data-field-error]",selector:"input[data-field-input], select[data-field-input], textarea[data-field-input]",validClass:"is-valid",invalidClass:"is-invalid",events:["change"],errorMessageClass:"invalid-tooltip",inputOptions:!1,inputOptionsWrapperSelector:"div[data-field-input]",inputOptionsSelector:"[data-input-option]"};class v{app;presetFields=[];static globalValidators={};validators={};options;$form;static is="uni-form-validate";constructor(t,e,i={}){this.app=t,this.$form=this.$helper.selectOne(e),this.options=this.$helper.defaultsDeep({},i,c),this.registerDefaultValidators(),this.init()}get $helper(){return this.app.inject("$helper")}get $ui(){return this.app.inject("$ui")}get $lang(){return this.app.inject("$lang")}setOptions(t){this.options=this.$helper.defaultsDeep({},t,c)}get scrollEnabled(){return this.options.scroll}get scrollOffset(){return Number(this.options.scrollOffset||-100)}get fieldSelector(){return this.options.fieldSelector||"input, select, textarea"}get validatedClass(){return this.options.validatedClass||"was-validated"}init(){"FORM"===this.$form.tagName&&(this.$form.setAttribute("novalidate","true"),this.$form.addEventListener("submit",(t=>!(this.options.enabled&&!this.validateAll()&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),this.$form.dispatchEvent(new CustomEvent("invalid")),1))),!1)),this.prepareFields(this.findDOMFields()),this.prepareFields(this.presetFields)}findDOMFields(){return this.$helper.selectAll(this.$form.querySelectorAll(this.fieldSelector))}prepareFields(t){return t.forEach((t=>{this.prepareFieldWrapper(t)})),Promise.resolve()}prepareFieldWrapper(t){if(-1!==["INPUT","SELECT","TEXTAREA"].indexOf(t.tagName)){let e=t.closest("[uni-field-validate]");return e||(e=t.closest("[data-input-container]")||t.parentElement,e?.setAttribute("uni-field-validate","{}")),e}return t}findFields(t=!0){let e=this.findDOMFields();return t&&e.push(...this.presetFields),e.map((t=>this.prepareFieldWrapper(t))).filter((t=>null!=t))}getFieldComponent(t){let e=this.$helper.getBoundedInstance(t,"field.validation");if(!e){const i=t.closest("[uni-field-validate]");i&&(e=this.$helper.getBoundedInstance(i,"field.validation"))}return e}validateAll(t){this.markFormAsUnvalidated(),t=t||this.findFields();let e=null;for(const i of t){const t=this.getFieldComponent(i);t&&(t.checkValidity()||e||(e=i))}return this.markFormAsValidated(),e&&this.scrollEnabled&&this.scrollTo(e),null===e}async validateAllAsync(t){this.markFormAsUnvalidated(),t=t||this.findFields();let e=null;const i=[];for(const s of t){const t=this.getFieldComponent(s);t&&i.push(t.checkValidityAsync().then((t=>(t||e||(e=s),t))))}return await Promise.all(i),this.markFormAsValidated(),e&&this.scrollEnabled&&this.scrollTo(e),null===e}scrollTo(t){const e=this.scrollOffset,i=t.getBoundingClientRect().top+window.scrollY+e;window.scrollTo({top:i,behavior:"smooth"})}markFormAsValidated(){this.$form&&this.$form.classList.add(this.validatedClass)}markFormAsUnvalidated(){this.$form&&this.$form.classList.remove(this.validatedClass)}addField(t){return this.presetFields.push(t),this.prepareFieldWrapper(t),this}registerDefaultValidators(){for(let t in p)this.addValidator(t,p[t])}addValidator(t,e,i={}){return i=i||{},this.validators[t]={handler:e,options:i},this}static addGlobalValidator(t,e,i={}){return i=i||{},this.globalValidators[t]={handler:e,options:i},this}}class m{app;el;$input;options;static is="uni-field-validate";constructor(t,e,i={}){this.app=t,this.el=e,this.options=this.$helper.defaultsDeep({},i,f),this.$input=this.selectInput(),this.init()}get $helper(){return this.app.inject("$helper")}get $lang(){return this.app.inject("$lang")}get $ui(){return this.app.inject("$ui")}setOptions(t){this.options=this.$helper.defaultsDeep({},t,f)}get $form(){return this.getForm()}get errorSelector(){return this.options.errorSelector}get selector(){return this.options.selector}get validClass(){return this.options.validClass}get invalidClass(){return this.options.invalidClass}get isVisible(){return!!(this.el.offsetWidth||this.el.offsetHeight||this.el.getClientRects().length)}get isInputOptions(){return Boolean(this.options.inputOptions)}get validationMessage(){return this.$input?.validationMessage||""}get validity(){return this.$input?.validity}selectInput(){let t=this.selector;this.options.inputOptions&&(t+=", "+this.options.inputOptionsWrapperSelector);let e=this.el.querySelector(t);if(e||(e=this.el.querySelector("input, select, textarea")),e)return this.$input=e;console.error("Input not found")}init(){if(this.selectInput(),this.bindEvents(),this.prepareWrapper(),this.isInputOptions){const t=this.$input;t.validationMessage="",t.setCustomValidity=e=>{t.validationMessage=String(e)},t.checkValidity=()=>this.checkInputOptionsValidity()}}bindEvents(){this.$input&&(this.$input.addEventListener("invalid",(t=>{this.showInvalidResponse()})),this.options.events.forEach((t=>{this.$input?.addEventListener(t,(()=>{this.checkValidity()}))})))}prepareWrapper(){this.el.querySelector(this.errorSelector)?.classList?.contains("invalid-tooltip")&&"static"===window.getComputedStyle(this.el).position&&(this.el.style.position="relative")}checkValidity(){if(!this.$input)return!0;if(this.$input.hasAttribute("readonly"))return!0;if(this.$input.hasAttribute("[data-novalidate]"))return!0;if(this.$input.closest("[data-novalidate]"))return!0;this.$input.setCustomValidity("");let t=this.$input.checkValidity();return t&&this.$form&&(t=this.runCustomValidity()),this.updateValidClass(t),t}runCustomValidity(){if(!this.$input)return!0;const t=(this.$input.getAttribute("data-validate")||"").split("|");let e=!0;if(""!==this.$input.value&&t.length){if(!this.checkCustomDataAttributeValidity())return!1;for(const i of t){const[t,s]=this.getValidator(i)||[null,{}];if(!t)continue;Object.assign(s,t.options);let n=t.handler(this.$input.value,this.$input,s,this);if(n instanceof Promise||"object"==typeof n&&n.then)n.then((e=>{this.handleAsyncCustomResult(e,t)}));else if(!this.handleCustomResult(n,t)){e=!1;break}}}return e}async checkValidityAsync(){if(!this.$input)return!0;if(this.$input.hasAttribute("readonly"))return!0;this.$input.setCustomValidity("");let t=this.$input.checkValidity();return t&&this.$form&&(t=await this.runCustomValidityAsync()),this.updateValidClass(t),t}async runCustomValidityAsync(){if(!this.$input)return!0;const t=(this.$input.getAttribute("data-validate")||"").split("|"),e=[],i=[];if(""!==this.$input.value&&t.length){if(!this.checkCustomDataAttributeValidity())return!1;for(const s of t){let[t,n]=this.getValidator(s)||[null,{}];t&&(n=Object.assign({},n,t.options||{}),i.push(Promise.resolve(t.handler(this.$input.value,this.$input,n,this)).then((i=>(e.push(this.handleAsyncCustomResult(i,t)),i)))))}}await Promise.all(i);for(const t of e)if(!1===t)return!1;return!0}checkCustomDataAttributeValidity(){const t=this.$input?.dataset.validationFail;return this.handleCustomResult(t)}checkInputOptionsValidity(){if(!this.$input)return!0;const t=null!=this.$input.getAttribute("required"),e=this.$input.querySelectorAll(this.options.inputOptionsSelector);let i=!0;if(t)for(const t of e){const e=t.querySelector("input");if(i=!1,e?.checked){i=!0;break}}const s=document.createElement("input");s.required=t,i&&(s.value="placeholder"),s.checkValidity(),this.$input.validationMessage=s.validationMessage,this.$input.validity=s.validity;for(const t of e){const e=t.querySelector("input");e?.setCustomValidity(s.validationMessage)}return i||this.$input.dispatchEvent(new CustomEvent("invalid")),i}updateValidClass(t){this.$input?.classList.remove(this.invalidClass),this.$input?.classList.remove(this.validClass),this.el.classList.remove(this.invalidClass),this.el.classList.remove(this.validClass),t?(this.$input?.classList.add(this.validClass),this.el.classList.add(this.validClass)):(this.$input?.classList.add(this.invalidClass),this.el.classList.add(this.invalidClass))}getFormValidation(t){return this.$helper.getBoundedInstance(t||this.getForm(),"form.validation")}getValidator(t){const e=t.match(/(?<type>[\w\-_]+)(\((?<params>.*)\))*/);if(!e)return null;const i=e.groups?.type||"",s=e.groups?.params||"",n=this.getFormValidation(this.$form),a=n?.validators[i]||v.globalValidators[i];if(!a)return null;const r=s.matchAll(/(?<key>\w+)(\s?[=:]\s?(?<value>\w+))?/g),l={};for(const t of r){const e=t?.groups;e&&(l[e.key]=(o=e.value,isNaN(Number(o))?"null"===o?null:"true"===o||"false"===o||o:Number(o)))}var o;return[a,l]}handleCustomResult(t,e){return"string"==typeof t?(this.$input?.setCustomValidity(t),t=""===t):void 0===t&&(t=!0),t?this.$input?.setCustomValidity(""):e&&this.raiseCustomErrorState(e),t}handleAsyncCustomResult(t,e){return t=this.handleCustomResult(t,e),this.$input?.checkValidity(),this.updateValidClass(t),t}raiseCustomErrorState(t){let e;""===this.$input?.validationMessage&&(e=t.options?.notice,"function"==typeof e&&(e=e(this.$input,this)),null!=e&&this.$input?.setCustomValidity(e)),""===this.$input?.validationMessage&&this.$input?.setCustomValidity(this.$lang.__("unicorn.message.validation.custom.error")),this.$input?.dispatchEvent(new CustomEvent("invalid"))}setAsInvalidAndReport(t){this.setCustomValidity(t),this.showInvalidResponse()}setCustomValidity(t){this.$input?.setCustomValidity(t)}reportValidity(){""!==this.validationMessage&&this.showInvalidResponse()}showInvalidResponse(){this.updateValidClass(!1);const t=this.$input?.validity;let e=this.$input?.validationMessage||"";for(let i in t)if(t[i]&&this.$input?.dataset[i+"Message"]){e=this.$input?.dataset[i+"Message"]||"";break}if(!this.isVisible){let t=this.findLabel()?.textContent;t||(t=this.$input?.name||""),this.$ui.renderMessage(`Field: ${t} - ${e}`,"warning")}let i=this.el.querySelector(this.errorSelector);i||(i=this.createHelpElement(),this.el.appendChild(i),this.prepareWrapper()),i.textContent=e}createHelpElement(){const t=this.options.errorMessageClass,e=this.parseSelector(this.errorSelector||""),i=this.$helper.html(`<div class="${t}"></div>`);return i.classList.add(...e.classes),e.attrs.forEach((t=>{i.setAttribute(t[0],t[1]||"")})),e.ids.forEach((t=>{i.id=t})),i}parseSelector(t){const e={tags:[],classes:[],ids:[],attrs:[]};for(const i of t.split(/(?=\.)|(?=#)|(?=\[)/))switch(i[0]){case"#":e.ids.push(i.slice(1));break;case".":e.classes.push(i.slice(1));break;case"[":e.attrs.push(i.slice(1,-1).split("="));break;default:e.tags.push(i)}return e}setAsValidAndClearResponse(){this.setCustomValidity(""),this.updateValidClass(!0),this.clearInvalidResponse()}clearInvalidResponse(){this.el.querySelector(this.errorSelector).textContent=""}getForm(){return this.el.closest(this.options.formSelector||"[uni-form-validate]")}findLabel(){const t=this.$input?.id||"",e=this.$input?.closest("[data-field-wrapper]");let i=null;return e&&(i=e.querySelector("[data-field-label]")),i||(i=document.querySelector(`label[for="${t}"]`)),i}}function g(t){const e=t.inject("$directive"),i=t.inject("$helper");e.register("form-validate",{mounted(e,s){i.getBoundedInstance(e,"form.validation",(e=>new v(t,e,JSON.parse(s.value||"{}"))))},updated(t,e){i.getBoundedInstance(t,"form.validation").setOptions(JSON.parse(e.value||"{}"))}}),e.register("field-validate",{mounted(e,s){i.getBoundedInstance(e,"field.validation",(e=>new m(t,e,JSON.parse(s.value||"{}"))))},updated(t,e){const s=i.getBoundedInstance(t,"field.validation");s?.setOptions(JSON.parse(e.value||"{}")||{})}})}return p.username=function(t,e){return!new RegExp("[<|>|\"|'|%|;|(|)|&]","i").test(t)},p.numeric=function(t,e){return/^(\d|-)?(\d|,)*\.?\d*$/.test(t)},p.email=function(t,e){return t=h(t),/^[a-zA-Z0-9.!#$%&â€™*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(t)},p.url=function(t,e){return/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test(t)},p.alnum=function(t,e){return/^[a-zA-Z0-9]*$/.test(t)},p.color=function(t,e){return/^#(?:[0-9a-f]{3}){1,2}$/.test(t)},p.creditcard=function(t,e){return/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|622((12[6-9]|1[3-9][0-9])|([2-8][0-9][0-9])|(9(([0-1][0-9])|(2[0-5]))))[0-9]{10}|64[4-9][0-9]{13}|65[0-9]{14}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})*$/.test(t)},p.ip=function(t,e){return/^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$/.test(t)},p["password-confirm"]=function(t,e){const i=e.dataset.confirmTarget;if(!i)throw new Error('Validator: "password-confirm" must add "data-confirm-target" attribute.');const s=document.querySelector(i);return s?.value===t},e})()));
//# sourceMappingURL=main.js.map