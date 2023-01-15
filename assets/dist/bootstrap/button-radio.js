System.register([],(function(t,e){var s;function r(t,e,s){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var r=s.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}return t("ButtonRadio",void 0),{setters:[],execute:function(){s={selector:".btn-group .radio",buttonClass:"btn",activeClass:"active",color:{default:"btn-default btn-outline-secondary",green:"btn-success",red:"btn-danger",blue:"btn-primary"}},t("ButtonRadio",class{static handle(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u.getBoundedInstance(t,"button-radio",(t=>new this(t,e)))}constructor(t,e){r(this,"wrapper",null),r(this,"radios",[]),r(this,"inputs",[]),r(this,"buttons",[]),r(this,"colors",[]),this.element=u.selectOne(t),this.options=e=u.defaultsDeep({},e,s);let a=null;a=null!=this.element.dataset.fieldInput?this.element:this.element.querySelector("[data-field-input]"),this.wrapper=a;let l=a.querySelector(".btn-group");const i=null!=l;l||(l=u.h("div",{class:"btn-group"})),this.radios=a.querySelectorAll(".radio"),this.radios.forEach((t=>{const e=this.prepareButton(t,i);i||l.appendChild(e)})),this.syncState(),a.insertBefore(l,a.firstChild),a.dispatchEvent(new Event("button-radio.loaded")),this.colors=[...new Set(this.colors)]}prepareButton(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const s=this.options,r=t.querySelector("input"),a=t.querySelector("label");let l=null;e?(l=this.wrapper.querySelector(`[data-for="${r.id}"]`),l.classList.add(...this.parseClasses(`${s.buttonClass} ${s.color.default}`))):l=u.h("button",{type:"button",class:`${s.buttonClass} ${s.color.default}`,"data-value":r.value},`<span>${a.innerHTML}</span>`),u.$helper.set(l,"__unicorn.input",r),this.inputs.push(r),this.buttons.push(l),t.style.display="none";let i=r.dataset.colorClass;if(null==i){switch(r.value){case"":i=s.color.blue;break;case"0":i=s.color.red;break;default:i=s.color.green}r.dataset.colorClass=i}return this.colors.push(i),(r.disabled||null!=r.getAttribute("readonly"))&&(l.classList.add("disabled"),l.disabled=!0),null!=r.getAttribute("readonly")&&l.classList.add("readonly"),l.addEventListener("click",(()=>{if(r.getAttribute("disabled")||r.getAttribute("readonly"))return;!r.checked&&(this.inputs.forEach((t=>{t.checked=!1})),r.checked=!0,this.syncState(),r.dispatchEvent(new Event("change")),r.dispatchEvent(new Event("input")))})),l}syncState(){const t=this.options;this.buttons.forEach((e=>{const s=u.$helper.get(e,"__unicorn.input");e.classList.add(...this.parseClasses(t.color.default)),e.classList.remove(...this.parseClasses(t.activeClass)),e.classList.remove(...this.parseClasses(...this.colors)),s.checked&&(e.classList.add(...this.parseClasses(t.activeClass)),e.classList.add(...this.parseClasses(s.dataset.colorClass)),e.classList.remove(...this.parseClasses(t.color.default)))}))}parseClasses(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];return(e=e.join(" ")).split(" ").filter((t=>""!==t))}})}}}));
//# sourceMappingURL=button-radio.js.map
