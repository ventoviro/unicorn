!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var n in i)("object"==typeof exports?exports:e)[n]=i[n]}}(self,(()=>(()=>{"use strict";var e={83:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(843),o=i.n(n),r=i(433),a=i.n(r)()(o());a.push([e.id,".c-sid-default__left-col{width:30%;margin-right:15px;justify-content:center}.c-sid-default__left-col img{max-height:250px}.c-sid-default__right-col{overflow:hidden}.c-sid-default__dragarea{font-weight:bold;text-align:center;padding:9% 0;color:#ccc;border:2px dashed #ccc;border-radius:7px;cursor:default}.c-sid-default__dragarea.hover{color:#333;border-color:#333;background-color:#f9f9f9}.c-sid-default__img-loader{display:flex;justify-content:center;align-items:center;width:100%;height:180px}.c-sid-default__size-info{margin-top:5px;font-size:13px}.c-sid-default__remove{margin-left:5px}.c-sid-default__modal .btn{position:relative}.c-sid-modal .modal-body{position:relative}.c-sid-modal__content{position:relative;z-index:3}.c-sid-modal__loading{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;z-index:1}.is-invalid[uni-field-validate]>uni-sid~[data-field-error]{display:block}","",{version:3,sources:["webpack://./scss/field/single-image-drag.scss"],names:[],mappings:"AAGE,yBACE,SAAA,CACA,iBAAA,CACA,sBAAA,CAGF,6BACE,gBAAA,CAGF,0BACE,eAAA,CAGF,yBACE,gBAAA,CACA,iBAAA,CACA,YAAA,CACA,UAAA,CACA,sBAAA,CACA,iBAAA,CACA,cAAA,CAEA,+BACE,UAAA,CACA,iBAAA,CACA,wBAAA,CAIJ,2BACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,YAAA,CAGF,0BACE,cAAA,CACA,cAAA,CAGF,uBACE,eAAA,CAGF,2BACE,iBAAA,CAKF,yBACE,iBAAA,CAGF,sBACE,iBAAA,CACA,SAAA,CAGF,sBACE,iBAAA,CACA,MAAA,CACA,OAAA,CACA,KAAA,CACA,QAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,SAAA,CAUF,2DACE,aAAA",sourcesContent:["// Part of starter file.\n\n.c-sid-default {\n  &__left-col {\n    width: 30%;\n    margin-right: 15px;\n    justify-content: center;\n  }\n\n  &__left-col img {\n    max-height: 250px;\n  }\n\n  &__right-col {\n    overflow: hidden;\n  }\n\n  &__dragarea {\n    font-weight: bold;\n    text-align: center;\n    padding: 9% 0;\n    color: #ccc;\n    border: 2px dashed #ccc;\n    border-radius: 7px;\n    cursor: default;\n\n    &.hover {\n      color: #333;\n      border-color: #333;\n      background-color: #f9f9f9;\n    }\n  }\n\n  &__img-loader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 180px;\n  }\n\n  &__size-info {\n    margin-top: 5px;\n    font-size: 13px;\n  }\n\n  &__remove {\n    margin-left: 5px;\n  }\n\n  &__modal .btn {\n    position: relative;\n  }\n}\n\n.c-sid-modal {\n  .modal-body {\n    position: relative;\n  }\n\n  &__content {\n    position: relative;\n    z-index: 3;\n  }\n\n  &__loading {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n  }\n\n  &__img-container {\n\n  }\n}\n\n// A workaround for form validation\n.is-invalid[uni-field-validate] {\n  > uni-sid ~ [data-field-error] {\n    display: block;\n  }\n}\n"],sourceRoot:""}]);const s=a},433:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),i&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=i):d[2]=i),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},843:e=>{e.exports=function(e){var t=e[1],i=e[3];if(!i)return t;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),r="/*# ".concat(o," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},673:(e,t,i)=>{var n,o=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),r=[];function a(e){for(var t=-1,i=0;i<r.length;i++)if(r[i].identifier===e){t=i;break}return t}function s(e,t){for(var i={},n=[],o=0;o<e.length;o++){var s=e[o],l=t.base?s[0]+t.base:s[0],c=i[l]||0,d="".concat(l," ").concat(c);i[l]=c+1;var u=a(d),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(r[u].references++,r[u].updater(h)):r.push({identifier:d,updater:m(h,t),references:1}),n.push(d)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=i.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,i,n){var o=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function h(e,t,i){var n=i.css,o=i.media,r=i.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,A=0;function m(e,t){var i,n,o;if(t.singleton){var r=A++;i=p||(p=l(t)),n=u.bind(null,i,r,!1),o=u.bind(null,i,r,!0)}else i=l(t),n=h.bind(null,i,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var i=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var o=a(i[n]);r[o].references--}for(var l=s(e,t),c=0;c<i.length;c++){var d=a(i[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=l}}}}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.nc=void 0;var n=i(673),o=i.n(n),r=i(83);function a(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}o()(r.A,{insert:"head",singleton:!1}),r.A.locals;class s extends HTMLElement{constructor(){super(),a(this,"currentImage",""),a(this,"currentFile",void 0),a(this,"lastZoom",0),a(this,"valueBackup","")}connectedCallback(){this.options=JSON.parse(this.getAttribute("options")||"{}"),this.valueInput=this.querySelector("[data-field-input]"),this.fileInput=this.querySelector("[data-sid=file]"),this.selectButton=this.querySelector("[data-sid=select]"),this.pasteButton=this.querySelector("[data-sid=paste]"),this.dragarea=this.querySelector("[data-sid=dragarea]"),this.previewImage=this.querySelector("[data-sid=preview]"),this.removeCheckbox=this.querySelector("[data-sid=remove]"),this.modalElement=document.querySelector(this.options.modalTarget),this.modal=u.$ui.bootstrap.modal(this.modalElement),this.cropContainer=this.modalElement.querySelector('[data-sid="crop-container"]'),this.savebutton=this.modalElement.querySelector("[data-sid=save-button]"),this.modalToolbarButtons=this.modalElement.querySelectorAll("[data-sid-toolbar]");const e=()=>{this.getCropper().replace(this.currentImage),this.cropContainer.style.visibility="",this.currentImage=null};bootstrap.Modal.VERSION.startsWith("5")?this.modalElement.addEventListener("shown.bs.modal",e.bind(this)):$(this.modalElement).on("shown.bs.modal",e.bind(this)),this.savebutton.addEventListener("click",(()=>{this.saveCropped(),this.modal.hide()})),this.bindEvents(),this.style.visibility=""}bindEvents(){var e;this.dragarea.addEventListener("dragover",(e=>{e.stopPropagation(),e.preventDefault(),this.dragarea.classList.add("hover")})),this.dragarea.addEventListener("dragleave",(e=>{e.stopPropagation(),e.preventDefault(),this.dragarea.classList.remove("hover")})),this.dragarea.addEventListener("drop",(e=>{e.stopPropagation(),e.preventDefault(),this.dragarea.classList.remove("hover");const t=e.target.files||e.dataTransfer.files;this.handleFileSelect(t[0])})),this.selectButton.addEventListener("click",(()=>{const e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept",this.getInputAccept()),e.style.display="none",e.addEventListener("change",(t=>{this.handleFileSelect(e.files[0]),e.remove()})),document.body.appendChild(e),e.click()})),this.pasteButton.addEventListener("click",(()=>{navigator.clipboard.read().then((e=>{let t=e[0].types;if(0===t.length)return void this.alert("This browser unable to get clipboard data.");t=t.slice().sort();const i=t[0];e[0].getType(i).then((e=>{this.handleFileSelect(new File([e],"image.png",{type:i}))}))}))})),null===(e=this.removeCheckbox)||void 0===e||e.addEventListener("click",(()=>{this.removeCheckbox.checked?(this.valueBackup=this.valueInput.value,this.valueInput.value=""):(this.valueBackup=this.valueInput,this.valueInput.value=this.valueBackup)})),u.selectAll(this.modalToolbarButtons,(e=>{e.addEventListener("click",(t=>{this.toolbarClicked(e,t)}))}))}getInputAccept(){let e=this.options.accept;return Array.isArray(e)&&(e=e.join(",")),e}handleFileSelect(e){if(this.checkFile(e)){if(this.options.crop){const t=new FileReader;return t.addEventListener("load",(t=>{this.cropContainer.style.visibility="hidden",this.currentImage=t.target.result,this.currentFile=e,this.modal.show()})),void t.readAsDataURL(e)}this.saveImage(e)}}saveCropped(){this.getCropper().getCroppedCanvas({width:this.options.width,height:this.options.height,imageSmoothingEnabled:!0}).toBlob((e=>{const t=new File([e],this.currentFile.name,{type:"image/png"});this.saveImage(t)}),"image/png")}getCropper(){return this.cropper=this.cropper||(()=>new Cropper(this.cropContainer.querySelector("img"),{aspectRatio:this.options.width/this.options.height,autoCropArea:1,viewMode:1,dragMode:"move",cropBoxMovable:!1,cropBoxResizable:!1,ready:e=>{}}))()}toolbarClicked(e,t){const i=this.getCropper(),n=i.getData();switch(e.dataset.sidToolbar){case"zoom-in":i.zoom(.1);break;case"zoom-out":i.zoom(-.1);break;case"rotate-left":i.rotate(-90);break;case"rotate-right":i.rotate(90);break;case"scale-x":i.scaleX(-n.scaleX);break;case"scale-y":i.scaleY(-n.scaleY)}}checkFile(e){let t=["image/jpeg","image/png","image/webp","image/avif","image/gif"];if(t=this.options.accept||t,"string"==typeof t&&(t=t.split(",").map((e=>e.trim()))),!t.length)return!0;let i=!1;return t.forEach((t=>{i=-1!==t.indexOf("/")?i||this.compareMimeType(t,e.type):i||t.toLowerCase()===e.extname.toLowerCase()})),!!i||(this.alert(u.__("unicorn.field.sid.message.invalid.image.title"),u.__("unicorn.field.sid.message.invalid.image.desc"),"error"),!1)}compareMimeType(e,t){const i=e.split("/"),n=t.split("/");return"*"===i[1]?i[0]===n[0]:e===t}checkSize(e){try{if(null!==this.options.max_width&&this.options.max_width<e.width)throw new Error(u.__("unicorn.field.sid.message.invalid.size.max.width",this.options.max_width));if(null!==this.options.min_width&&this.options.min_width>e.width)throw new Error(u.__("unicorn.field.sid.message.invalid.size.min.width",this.options.min_width));if(null!==this.options.max_height&&this.options.max_height<e.height)throw new Error(u.__("unicorn.field.sid.message.invalid.size.max.height",this.options.max_height));if(null!==this.options.min_height&&this.options.min_height>e.height)throw new Error(u.__("unicorn.field.sid.message.invalid.size.min.height",this.options.min_height))}catch(e){return this.alert(u.__("unicorn.field.sid.message.invalid.size.title"),e.message,"error"),!1}return!0}alert(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"info";const n=window.swal||window.alert;return window.swal?n(e,t,i):(t&&(e+=" - "+t),alert(e),Promise.resolve())}saveImage(e){if(this.options.ajax_url){const t=this.querySelector("[data-sid=file-uploading]");return this.previewImage.src="",this.previewImage.style.display="none",t.style.display="flex",void this.uploadImage(e).then((e=>{this.storeValue(e.data.data.url,e.data.data.url)})).catch((e=>{console.error(e),this.alert(e.message)})).then((()=>{t.style.display="none"}))}const t=new DataTransfer;t.items.add(e),this.valueInput.required=!1,this.fileInput.files=t.files,this.fileInput.dispatchEvent(new CustomEvent("change"),{bubbles:!0}),this.fileInput.dispatchEvent(new CustomEvent("input"),{bubbles:!0}),this.storeValue(null,URL.createObjectURL(e))}uploadImage(e){const t=new FormData;return t.append("file",e),u.$http.post(this.options.ajax_url,t,{headers:{"Content-Type":"multipart/form-data"}})}storeValue(e,t){this.previewImage.src=t,this.previewImage.style.display="inline-block",this.removeCheckbox&&(this.removeCheckbox.checked=!1),e&&(this.valueInput.value=e),this.previewImage.dispatchEvent(new CustomEvent("change"),{bubbles:!0}),this.valueInput.dispatchEvent(new CustomEvent("change"),{bubbles:!0}),this.valueInput.dispatchEvent(new CustomEvent("input"),{bubbles:!0})}}return a(s,"is","uni-sid"),Promise.all([u.import("@cropperjs/cropper.min.js"),u.import("@cropperjs/cropper.css")]).then((e=>{const t=e[1].default;document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]})),u.defineCustomElement(s.is,s),{}})()));
//# sourceMappingURL=single-image-drag.js.map