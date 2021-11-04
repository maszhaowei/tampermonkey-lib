!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.playerlib=t():e.playerlib=t()}(self,(function(){return(()=>{"use strict";var e={941:(e,t,n)=>{n.d(t,{_TooltipPosition:()=>i,KeyboardKeyCode:()=>s,ApplyMethodSignature:()=>a,Tuple:()=>l,LooseMap:()=>c,PositionOption:()=>u});var o=n(25),r=n(232);const i={TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",LEFT_TOP:"left-top",LEFT_CENTER:"left-center",LEFT_BOTTOM:"left-bottom",RIGHT_TOP:"right-top",RIGHT_CENTER:"right-center",RIGHT_BOTTOM:"right-bottom",CENTER_CENTER:"center-center"};class s{code;key;constructor(e,t){this.code=e,this.key=t}}class a{context;fn;args;constructor(e,t,n){this.fn=e,this.context=t,this.args=n||[]}}class l extends o.g{#e;get size(){return this.#e.length}constructor(...e){super(),this.#e=e;for(let t=0;t<e.length;t++)this[t]=e[t]}equals(e){if(!(e instanceof l))return!1;if(this.size!=e.size)return!1;for(let t=0;t<this.size;t++){let n=this[t],r=e[t];if(n instanceof o.g&&!n.equals(r))return!1;if(n!==r)return!1}return!0}}class c extends Map{get(e){let t,n=this.entries();for(;!(t=n.next()).done;){let[n,o]=t.value;if(r.D.isEqual(n,e))return o}}set(e,t){let n,o=this.keys();for(;!(n=o.next()).done;)if(r.D.isEqual(n.value,e))return super.set(n.value,t);super.set(e,t)}has(e){let t,n=this.keys();for(;!(t=n.next()).done;)if(r.D.isEqual(t.value,e))return!0;return!1}delete(e){let t,n=this.keys();for(;!(t=n.next()).done;)if(r.D.isEqual(t.value,e))return super.delete(t.value)}}class u{target;position;top;left;insideX;insideY;fixed;ensureViewPort;constructor({target:e,position:t=i.CENTER_CENTER,top:n=0,left:o=0,insideX:r=!0,insideY:s=!0,fixed:a=!0,ensureViewPort:l=!1}){if(!(e instanceof Element))throw new TypeError("target is not an Element");this.target=e,this.position=t,this.top=n,this.left=o,this.insideX=r,this.insideY=s,this.fixed=a,this.ensureViewPort=l}}},882:(e,t,n)=>{n.d(t,{DEFAULT_LOG_GROUP:()=>o});const o="Common"},613:(e,t,n)=>{n.d(t,{TooltipPosition:()=>r,MediaReadyState:()=>i,MediaEvents:()=>s,GlobalEvents:()=>a,MessageLevel:()=>l});var o=n(941);new o.KeyboardKeyCode("Space"," "),new o.KeyboardKeyCode("Enter","Enter"),new o.KeyboardKeyCode("Escape","Escape"),new o.KeyboardKeyCode("KeyC","c"),new o.KeyboardKeyCode("KeyD","d"),new o.KeyboardKeyCode("KeyF","f"),new o.KeyboardKeyCode("KeyG","g"),new o.KeyboardKeyCode("KeyI","i"),new o.KeyboardKeyCode("KeyQ","q"),new o.KeyboardKeyCode("KeyR","r"),new o.KeyboardKeyCode("KeyS","s"),new o.KeyboardKeyCode("KeyV","v"),new o.KeyboardKeyCode("KeyW","w"),new o.KeyboardKeyCode("BracketLeft","["),new o.KeyboardKeyCode("BracketRight","]"),new o.KeyboardKeyCode("ArrowLeft","ArrowLeft"),new o.KeyboardKeyCode("ArrowRight","ArrowRight"),new o.KeyboardKeyCode("ArrowUp","ArrowUp"),new o.KeyboardKeyCode("ArrowDown","ArrowDown"),new o.KeyboardKeyCode("Digit0","0"),new o.KeyboardKeyCode("Digit1","1"),new o.KeyboardKeyCode("Digit2","2"),new o.KeyboardKeyCode("Digit3","3"),new o.KeyboardKeyCode("Numpad0","0"),new o.KeyboardKeyCode("Numpad1","1"),new o.KeyboardKeyCode("Numpad2","2"),new o.KeyboardKeyCode("Numpad3","3"),new o.KeyboardKeyCode("Numpad4","4"),new o.KeyboardKeyCode("Numpad5","5"),new o.KeyboardKeyCode("Numpad6","6"),new o.KeyboardKeyCode("Numpad7","7"),new o.KeyboardKeyCode("Numpad8","8"),new o.KeyboardKeyCode("Numpad9","9"),new o.KeyboardKeyCode("F8","F8");const r=o._TooltipPosition,i={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},s={ABORT:"abort",CAN_PLAY:"canplay",CAN_PLAY_THROUGH:"canplaythrough",DURATION_CHANGE:"durationchange",ENDED:"ended",LOADED_METADATA:"loadedmetadata",PAUSE:"pause",PLAY:"play",RATE_CHANGE:"ratechange",TIME_UPDATE:"timeupdate",VOLUME_CHANGE:"volumechange"},a={CLICK:"click",DBLCLICK:"dblclick",KEYDOWN:"keydown",MOUSEDOWN:"mousedown",WHEEL:"wheel"},l={SUCCESS:"success",INFO:"info",CAUTION:"caution",ERROR:"error",test:function(e){if(e===l.test)return!1;for(let t in l)if(this[t]===e)return!0;return!1}}},25:(e,t,n)=>{n.d(t,{g:()=>o});class o{equals(e){return this===e}}},356:(e,t,n)=>{n.d(t,{ui:()=>O});var o=n(379),r=n.n(o),i=n(795),s=n.n(i),a=n(569),l=n.n(a),c=n(565),u=n.n(c),d=n(216),p=n.n(d),h=n(589),m=n.n(h),f=n(899),g={};g.styleTagTransform=m(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=p(),r()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var y=n(286),w={};w.styleTagTransform=m(),w.setAttributes=u(),w.insert=l().bind(null,"head"),w.domAPI=s(),w.insertStyleElement=p(),r()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var v=n(613),b=n(232);function E(e){return e.ownerDocument.defaultView||e.ownerDocument.parentWindow}function T(e){let t=e.document;return e.scrollY||e.pageYOffset||t.documentElement&&t.documentElement.scrollTop||t.body.scrollTop}function C(e){let t=e.document;return e.scrollX||e.pageXOffset||t.documentElement&&t.documentElement.scrollLeft||t.body.scrollLeft}function x(e){let t={top:0,left:0};if(!e.getClientRects().length)return t;if("none"===window.getComputedStyle(e).display)return t;let n=e.getBoundingClientRect(),o=E(e),r=o.document.documentElement;return{top:n.top+T(o)-(r.clientTop||0),left:n.left+C(o)-(r.clientLeft||0)}}function M(e=window,t=!1){let n,o;if(t)n=e.innerHeight,o=e.innerWidth;else{let t=e.document;"BackCompat"===t.compatMode?(n=t.body.clientHeight,o=t.body.clientWidth):(n=t.documentElement.clientHeight,o=t.documentElement.clientWidth)}return{height:n,width:o}}function S(e,t){let n=t.target.getBoundingClientRect(),o=e.getBoundingClientRect(),r=t.fixed?n:x(t.target),i=r.left+t.left,s=r.top+t.top,a=t.position;a.startsWith("top")?a.endsWith("center")&&(i+=n.width/2-o.width/2):a.startsWith("bottom")?(s+=n.height,a.endsWith("center")&&(i+=n.width/2-o.width/2)):a.startsWith("left")?a.endsWith("center")&&(s+=n.height/2-o.height/2):a.startsWith("right")?(i+=n.width,a.endsWith("center")&&(s+=n.height/2-o.height/2)):a==v.TooltipPosition.CENTER_CENTER&&(i+=n.width/2-o.width/2,s+=n.height/2-o.height/2),a.endsWith("right")?i+=n.width:a.endsWith("bottom")&&(s+=n.height);let l=t.insideX;(l&&a.includes("bottom")||!l&&a.includes("top"))&&(s-=o.height);let c=t.insideY;(c&&a.includes("right")||!c&&a.includes("left"))&&(i-=o.width);let u=M(E(t.target),!1);return t.ensureViewPort&&(i<0?i=0:u.width<Math.round(i+o.width)&&(i=u.width-o.width),s<0?s=0:u.height<Math.round(s+o.height)&&(i=u.height-o.height)),{left:i,top:s}}class F{constructor(e,t,n){this.options=b.D.assignNotUndefined({name:"player-tooltip",target:document.body,type:"info",left:0,top:0,margin:0,arrow:!1,changeMode:0,singleMode:!0,animation:!0,supportShow:!0,autoShow:!0,autoHide:!0,hideTime:1e3,autoRemove:!0,game:!1,callback:function(){},onShow:function(){},onHide:function(){}},{text:e,hideTime:n},t),this.status=0,this.prefix="zw-player-tooltips",this.triggerClass=this.prefix+"-trigger","tip"===this.options.type&&(this.options.autoShow=!1,this.options.autoHide=!1,this.options.autoRemove=!0),this.initialize()}initialize(){this.options.target.classList.add(this.triggerClass),this.options.autoShow&&this.show(),"function"==typeof this.options.callback&&this.options.callback(),"tip"===this.options.type&&this.bindEvents()}bindEvents(){var e=this;this.options.target.addEventListener("mouseenter",(function(){e.options.supportShow&&e.show()})),this.options.target.addEventListener("mouseleave",(function(){e.hide()})),this.options.target.addEventListener("click",(function(t){var n=parseInt(e.options.changeMode+"",10);if(!isNaN(n))switch(n){case 1:{let n;for(n of t.target.parentElement.children)if(n!=t.target)return setTimeout((function(){n.hasClass(e.triggerClass)&&n.is(":visible")&&n.dispatchEvent(new MouseEvent("mouseenter"))}),0),!1;break}case 2:e.hide();break;case 3:e.options.target.dispatchEvent(new MouseEvent("mouseleave")),e.options.target.dispatchEvent(new MouseEvent("mouseenter"))}}))}toggle(e){this.status?this.hide():this.show(e)}show(){var e=this,t=200;"info"===this.options.type&&(t=0),this.status||(clearTimeout(this.timeOut),this.timeOut=window.setTimeout((function(){e.options.singleMode&&e.destroy(!0),e.create(),e.status=1,e.$zwtooltips.classList.add("active"),"function"==typeof e.options.onShow&&e.options.onShow(e),e.options.autoHide&&setTimeout((function(){e.hide()}),e.options.hideTime)}),t))}add(e){"string"==typeof e?e=Object.assign(this.options,{text:e}):"object"==typeof e&&(e=Object.assign(this.options,e));var t=this.template(!1,e);this.$zwtooltips.append(t),this.updatePos(!0)}hide(){this.status=0,clearTimeout(this.timeOut),this.$zwtooltips&&this.$zwtooltips.classList.remove("active"),"function"==typeof this.options.onHide&&this.options.onHide(this),this.options.autoRemove&&this.destroy()}destroy(e){if(clearTimeout(this.timeOut),e){var t=document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]');t&&t.remove()}else this.$zwtooltips&&this.$zwtooltips.remove()}create(){document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]')||(this.$zwtooltips=this.template(!0),this.options.game&&this.$zwtooltips.classList.add("tooltip-game"),this.options.target.append(this.$zwtooltips)),this.$zwtooltips.append(this.template()),this.updatePos()}template(e,t){let n,o,r,i="",s=[];if(o=(t=t||this.options).text||t.target.getAttribute("data-text"),r=t.position||t.target.getAttribute("data-position"),t.changeMode=t.target.getAttribute("data-change-mode")||0,e)s.push(t.type),s.push(r),t.animation&&s.push("animation"),t.fixed&&s.push("fixed"),n=s.join(" "),i=`<div class="${this.prefix} ${n}"  data-tooltip-name="${t.name}"></div>`;else{var a="";t.padding&&(t.padding instanceof Array?a+="padding:"+t.padding.join("px ")+"px;":"number"==typeof t.padding&&(a+="padding:"+t.padding+";")),t.fontSize&&"number"==typeof t.fontSize&&(a+="font-size:"+t.fontSize+"px;"),i=`<div class="zw-tooltip${t.fixed?" fixed":""}" style="`+a+'">'+o+"</div>"}return document.createRange().createContextualFragment(i).firstElementChild}updatePos(){let e,t=this.options,n=this.options.target.getBoundingClientRect(),o=this.$zwtooltips.getBoundingClientRect();switch(t.position||t.target.attr("data-position")){case v.TooltipPosition.TOP_LEFT:e=n.width/2;break;case v.TooltipPosition.TOP_CENTER:e=o.width/2;break;case v.TooltipPosition.TOP_RIGHT:e=o.width-n.width/2;break;case v.TooltipPosition.BOTTOM_LEFT:e=n.width/2;break;case v.TooltipPosition.BOTTOM_CENTER:case v.TooltipPosition.BOTTOM_RIGHT:e=o.width/2}t.arrow&&this.$zwtooltips.insertAdjacentHTML("beforeend",`<div class="arrow" style="left:${e}px;"></div>`);let r=S(this.$zwtooltips,t);this.$zwtooltips.style.top=r.top+"px",this.$zwtooltips.style.left=r.left+"px"}}const O={offset:x,scrollToElement(e){if(!(e&&e instanceof Element))throw new TypeError("Parameter is not an Element");const t=x(e),n=M(E(e),!1),o=e.getBoundingClientRect();e.ownerDocument.documentElement.scrollTo(t.left-(n.width-o.width)/2,t.top-(n.height-o.height)/2)},getViewPortDimension:M,isInputEvent:e=>!!e.target&&("TEXTAREA"==e.target.tagName.toUpperCase()||"INPUT"==e.target.tagName.toUpperCase()&&"text"==e.target.type||e.isComposing||229===e.keyCode),isEventFromThisDoc:e=>e.target&&e.target.getRootNode()==document,querySelectorFirst(e,...t){if(e)for(let n=0;n<t.length;n++){let o=t[n];if(o){if(o instanceof Element||o instanceof Document)return o.querySelector(e);for(let t of document.querySelectorAll(o)){let n=t.querySelector(e);if(n)return n}}}else b.D.printGroupDebug(void 0,"selector is empty")},showTooltip:function(e,t,n=1e3){b.D.isBlank(e)?console.debug("Tooltip is blank"):new F(e,t,n)},showMessage:function(e,t,n=v.MessageLevel.INFO,o=4e3){v.MessageLevel.test(n)||(n=v.MessageLevel.INFO);let r=t.target;if(!r.className&&!r.attributes)throw new Error("[@blink-common/message] 传入 element 不是有效节点.");let i=r.ownerDocument,s=i.createDocumentFragment(),a=i.createElement("div");a.style.whiteSpace="pre",a.innerHTML='<span class="toast-text">'+e+"</span>",a.className="link-toast "+n+" "+(t.fixed?"fixed":""),i.querySelector("div.link-toast")?.remove(),s.appendChild(a),i.body.appendChild(s);let l=S(a,t);a.style.left=l.left+"px",a.style.top=l.top+"px",setTimeout((function(){a.className+=" out",setTimeout((function(){a.parentNode?a.parentNode.removeChild(a):a.remove()}),350)}),o)},downloadBlob:function(e,t){let n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=t,n.click(),URL.revokeObjectURL(n.href)},isFullscreen:()=>!!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement),isFullscreenEnabled:()=>b.D.anyMemberNotEmpty(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document),getFullscreenElement(e){e=void 0!==e&&e;var t=b.D.anyMemberNotEmpty(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(e)for(;t&&t.shadowRoot;)t=t.shadowRoot.fullscreenElement;return t||null},requestFullscreen(e=document.documentElement){let t;if(e.requestFullscreen)t=e.requestFullscreen();else if(e.webkitRequestFullscreen)t=e.webkitRequestFullscreen();else if(e.mozRequestFullScreen)t=e.mozRequestFullScreen();else if(e.msRequestFullscreen)t=e.msRequestFullscreen();else{if(!e.webkitEnterFullscreen)return Promise.reject(Error("Fullscreen API unavailable"));t=e.webkitEnterFullscreen()}return t instanceof Promise?t:Promise.resolve()},exitFullscreen(){let e;if(document.exitFullscreen)e=document.exitFullscreen();else if(document.webkitExitFullscreen)e=document.webkitExitFullscreen();else if(document.mozCancelFullScreen)e=document.mozCancelFullScreen();else{if(!document.msExitFullscreen)return Promise.reject(Error("Exit fullscreen API unavailable"));e=document.msExitFullscreen()}return e instanceof Promise?e:Promise.resolve()},toggleFullscreen:(e=document.documentElement)=>O.isFullscreen()?O.exitFullscreen(e):O.requestFullscreen(e)}},232:(e,t,n)=>{n.d(t,{D:()=>s});var o=n(882),r=n(25);const i={零:0,一:1,二:2,两:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,百:100,千:1e3,万:1e4,亿:1e8};let s={printGroupDebug:function(e=o.DEFAULT_LOG_GROUP,...t){console.group(`[${e}]`);let n=[];for(let e=0;e<t.length;e++)n.push(s.isObject(t[e])?JSON.parse(JSON.stringify(t[e])):t[e]);console.debug(...n),console.groupEnd()},get:function(e,t,n){return new Promise(((o,r)=>{let i=new XMLHttpRequest;if(i.responseType=n||"json",i.addEventListener("load",(function(){o(this.response||this.responseText)})),i.addEventListener("error",(function(){r(this)})),i.open("GET",e),t)for(let e in t)i.setRequestHeader(e,t[e]);i.send()}))},post:function(e,t={"Content-Type":"application/x-www-form-urlencoded"},n,o){return new Promise(((r,i)=>{let s=new XMLHttpRequest;s.responseType=o||"json",s.addEventListener("load",(function(){r(this.response||this.responseText)})),s.addEventListener("error",(function(){i(this)})),s.open("POST",e);for(let e in t)s.setRequestHeader(e,t[e]);s.send(n)}))},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let n=0,o=t.length;n<o;n++){let o=t[n].split("=");if(o[0]==e)return decodeURIComponent(o[1])}return""},getQueryParameter:function(e){for(let[t,n]of new URLSearchParams(window.location.search).entries())if(t===e)return n},asyncDelayedFn:function(e,t,n,o=0){return new Promise(((r,i)=>setTimeout((()=>{void 0===n?r(t.apply(e)):Array.isArray(n)?r(t.apply(e,n)):i(n),r(!0)}),o)))},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(i);for(const n of e)if(!t.includes(n))return!1;return!0},zh2Digits:function(e){if(s.isInteger(e))return parseInt(e);if(!this.isChineseDigits(e))return;let t=0,n=1;for(let o=e.length-1;o>=0;o--){let r=i[e[o]];r>=10&&0==o?r>n?(n=r,t+=r):n*=r:r>=10?r>n?n=r:n*=r:t+=n*r}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!s.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"],n=e.length;return 1==n?t[e]:2==n?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},anyMemberNotEmpty:function(e,t){let n;return e.some((e=>(n=t[e],!!n))),n},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)||e instanceof Object},isString:function(e){return e instanceof String||"string"==typeof e},isBlank:function(e){return s.isString(e)?""===e.trim():null==e},assignNotUndefined:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((n=>{let o=t[n];void 0!==o&&(e[n]=o)}))})),e},assignNotEmpty:function(e,t,n=!1,o=!1){if(!Array.isArray(t))throw new TypeError("Invalid sources");return t.forEach((t=>{Object.keys(t).forEach((r=>{let i=t[r],a=e[r];if(null!=i&&!Object.is(NaN,i))if(Array.isArray(a)){if(!Array.isArray(i))throw new TypeError(`${r} of source is not an array`);o?i.forEach((e=>{a.includes(e)||a.push(e)})):e[r]=i}else if(s.isObject(a)){if(!s.isObject(i))throw new TypeError(`${r} of source is not an object`);n?s.assignNotEmpty(a,[i],n,o):e[r]=i}else e[r]=i}))})),e},isIterable:function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},isEqual:function(e,t){if(e instanceof Array){if(!(t instanceof Array)||e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!s.isEqual(e[n],t[n]))return!1;return!0}return!!Object.is(e,t)||(e instanceof r.g?e.equals(t):e===t)},formatDate:function(e,t="MM/dd/yyyy hh:mm:ss"){e instanceof Date||(e=new Date(e));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return t}}},286:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,'.link-toast {\r\n    position:absolute;\r\n    padding:8px 16px;\r\n    font-size:14px;\r\n    border-radius:8px;\r\n    white-space:pre;\r\n    color:#fff;\r\n    -webkit-animation:link-msg-move-in-top cubic-bezier(.22,.58,.12,.98) .4s;\r\n    animation:link-msg-move-in-top cubic-bezier(.22,.58,.12,.98) .4s;\r\n    z-index:10000;\r\n    pointer-events:none;\r\n\r\n    line-height: 1.15;\r\n    font-family:Arial,"Microsoft YaHei","Microsoft Sans Serif","Microsoft SanSerf","微软雅黑"!important;\r\n}\r\n.link-toast.fixed {\r\n    position:fixed\r\n}\r\n.link-toast.success {\r\n    background-color:#47d279;\r\n    box-shadow:0 .2em .1em .1em rgba(71,210,121,.2)\r\n}\r\n.link-toast.caution {\r\n    background-color:#ffb243;\r\n    box-shadow:0 .2em .1em .1em rgba(255,190,68,.2)\r\n}\r\n.link-toast.error {\r\n    background-color:#ff6464;\r\n    box-shadow:0 .2em 1em .1em rgba(255,100,100,.2)\r\n}\r\n.link-toast.info {\r\n    background-color:#48bbf8;\r\n    box-shadow:0 .2em .1em .1em rgba(72,187,248,.2)\r\n}\r\n.link-toast.out {\r\n    -webkit-animation:link-msg-fade-out cubic-bezier(.22,.58,.12,.98) .4s;\r\n    animation:link-msg-fade-out cubic-bezier(.22,.58,.12,.98) .4s\r\n}\r\n\r\n@-webkit-keyframes link-msg-move-in-top {\r\n    from {\r\n        opacity:0;\r\n        transform:translate(0,5em);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        transform:translate(0,0)\r\n    }\r\n}\r\n@keyframes link-msg-move-in-top {\r\n    from {\r\n        opacity:0;\r\n        transform:translate(0,5em)\r\n    }\r\n    to {\r\n        opacity:1;\r\n        transform:translate(0,0)\r\n    }\r\n}\r\n@-webkit-keyframes link-msg-fade-out {\r\n    from {\r\n        opacity:1\r\n    }\r\n    to {\r\n        opacity:0\r\n    }\r\n}\r\n@keyframes link-msg-fade-out {\r\n    from {\r\n        opacity:1\r\n    }\r\n    to {\r\n        opacity:0\r\n    }\r\n}',""]);const i=r},899:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".zw-player-tooltips {\r\n    position:absolute;\r\n    opacity:0;\r\n    z-index:-1;\r\n    top:-999px;\r\n    cursor:default;\r\n    pointer-events:none;\r\n}\r\n.zw-player-tooltips.fixed {\r\n    position:fixed;\r\n    opacity:0;\r\n    z-index:-1;\r\n    top:-999px;\r\n    cursor:default;\r\n    pointer-events:none;\r\n}\r\n.zw-player-tooltips {\r\n    text-align: left;\r\n    white-space: nowrap;\r\n\r\n    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;\r\n    line-height: 1;\r\n\r\n    color: #222;\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n    font-style: normal;\r\n    \r\n    -webkit-touch-callout:none;\r\n    -webkit-user-select:none;\r\n    -moz-user-select:none;\r\n    -ms-user-select:none;\r\n    user-select:none\r\n}\r\n.zw-player-tooltips.animation {\r\n    -webkit-transition:opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition:opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition:transform .3s ease-in-out,opacity .3s ease-in-out;\r\n    transition:transform .3s ease-in-out,opacity .3s ease-in-out,-webkit-transform .3s ease-in-out\r\n}\r\n.zw-player-tooltips.animation>.arrow,\r\n.zw-player-tooltips.animation>.zw-tooltip {\r\n    -webkit-transition:opacity .3s ease-in-out;\r\n    transition:opacity .3s ease-in-out\r\n}\r\n.zw-player-tooltips.center-center,\r\n.zw-player-tooltips.top-center,\r\n.zw-player-tooltips.top-left,\r\n.zw-player-tooltips.top-right {\r\n    -webkit-transform:translateY(10px);\r\n    transform:translateY(10px)\r\n}\r\n.zw-player-tooltips.bottom-center,\r\n.zw-player-tooltips.bottom-left,\r\n.zw-player-tooltips.bottom-right {\r\n    -webkit-transform:translateY(-10px);\r\n    transform:translateY(-10px)\r\n}\r\n.zw-player-tooltips.left-bottom,\r\n.zw-player-tooltips.left-center,\r\n.zw-player-tooltips.left-top {\r\n    -webkit-transform:translate(10px);\r\n    transform:translate(10px)\r\n}\r\n.zw-player-tooltips.right-bottom,\r\n.zw-player-tooltips.right-center,\r\n.zw-player-tooltips.right-top {\r\n    -webkit-transform:translate(-10px);\r\n    transform:translate(-10px)\r\n}\r\n.zw-player-tooltips.active,\r\n.zw-player-tooltips.center-center.active,\r\n.zw-player-tooltips.top-center.active,\r\n.zw-player-tooltips.top-left.active,\r\n.zw-player-tooltips.top-right.active {\r\n    -webkit-transform:translate(0);\r\n    transform:translate(0);\r\n    z-index:999999;\r\n    opacity:1\r\n}\r\n.zw-player-tooltips.active>.arrow,\r\n.zw-player-tooltips.active>.zw-tooltip {\r\n    opacity:1;\r\n    z-index:98\r\n}\r\n.zw-player-tooltips.tip .arrow {\r\n    position:absolute;\r\n    width:0;\r\n    height:0;\r\n    border:4px solid transparent;\r\n    opacity:1;\r\n    z-index:-1\r\n}\r\n.zw-player-tooltips.tip.top-center .arrow,\r\n.zw-player-tooltips.tip.top-left .arrow,\r\n.zw-player-tooltips.tip.top-right .arrow {\r\n    bottom:-8px;\r\n    margin-left:-4px;\r\n    border-top-color:rgba(0,0,0,.7)\r\n}\r\n.zw-player-tooltips.tip.bottom-center .arrow,\r\n.zw-player-tooltips.tip.bottom-left .arrow,\r\n.zw-player-tooltips.tip.bottom-right .arrow {\r\n    top:-8px;\r\n    margin-left:-4px;\r\n    border-bottom-color:rgba(0,0,0,.7)\r\n}\r\n.zw-player-tooltips>.zw-tooltip {\r\n    background:rgba(0,0,0,.7);\r\n    border-radius:4px;\r\n    color:#fff;\r\n    font-size:12px;\r\n    padding:6px 8px;\r\n    margin-top:5px;\r\n    opacity:0\r\n}\r\n.zw-player-tooltips>.zw-tooltip:first-child {\r\n    margin:0\r\n}\r\n.zw-player-tooltips.zw-tooltip-game>.zw-tooltip {\r\n    background:rgba(0,0,0,.8)\r\n}\r\ndiv.zw-player-tooltips::selection, div.zw-tooltip::selection {\r\n    background: #1890ff;\r\n    color: #fff;\r\n}",""]);const i=r},167:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".mode-fullscreen, .mode-webfullscreen {\r\n    position: fixed !important;\r\n    border-radius: 0;\r\n    z-index: 100000;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    margin: 0 auto !important;\r\n    padding: 0 !important;\r\n}\r\nbody.player-mode-webfullscreen {\r\n    position: fixed !important;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0\r\n}\r\n\r\niframe.player-fullscreen-fix {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    z-index: 100000;\r\n}\r\n\r\n.zw-event-delegate {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 98;\r\n}\r\n.zw-top-overlay {\r\n    z-index: 99 !important;\r\n}",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},s=[],a=0;a<e.length;a++){var l=e[a],c=o.base?l[0]+o.base:l[0],u=i[c]||0,d="".concat(c," ").concat(u);i[c]=u+1;var p=n(d),h={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(t[p].references++,t[p].updater(h)):t.push({identifier:d,updater:r(h,o),references:1}),s.push(d)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var l=o(e,r),c=0;c<i.length;c++){var u=n(i[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},719:(e,t,n)=>{n.d(t,{scriptName:()=>r});const o="undefined"==typeof GM_info?{name:"Tampermonkey"}:GM_info.script,r=o&&o.name},235:(e,t,n)=>{n.d(t,{EMOJIS:()=>o});const o={angry:[",,Ծ‸Ծ,,","(╯‵□′)╯︵┻━┻"],happy:["=‿=✧","●ω●","(/ ▽ \\)","(=・ω・=)","(●'◡'●)ﾉ♥","<(▰˘◡˘▰)>","(⁄ ⁄•⁄ω⁄•⁄ ⁄)","(ง,,• ᴗ •,,)ง ✧",">ㅂ<ﾉ ☆"],shock:["Σ( ° △ °|||)︴","┌( ಠ_ಠ)┘","(ﾟДﾟ≡ﾟдﾟ)!?","∑(っ °Д °;)っ"],sad:["＞︿＜","＞△＜","●︿●","(´；ω；`)"],helpless:["◐▽◑","ʅ（´◔౪◔）ʃ","_(:3 」∠)_","_(┐「ε:)_","(°▽°)ﾉ","←◡←","_(•̀ᴗ•́ 」∠ ❀)_","_φ(･ω･` )"],custom:["(`･ω･´)","(^_-)-☆","༼ つ ◕_◕ ༽つ","(☞ﾟヮﾟ)☞","( ͡° ͜ʖ ͡°)","(っ˘ڡ˘ς)","(⌐■_■)","( ͡~ ͜ʖ ͡°)","(╯°□°）╯︵ ┻━┻","(͡•_ ͡• )"]}},70:(e,t,n)=>{n.d(t,{D:()=>s});var o=n(719),r=n(235),i=n(232);const s={debug:function(...e){i.D.printGroupDebug(o.scriptName,...e)},gmGet:function(e,t,n,o=!1){return new Promise(((r,i)=>{GM_xmlhttpRequest({method:"GET",url:e,headers:t,nocache:o,responseType:n||"json",onload:e=>{r(e.response||e.responseText)},onerror:e=>{i(e)}})}))},gmPost:function(e,t,n,o){return t=t||{"Content-Type":"application/x-www-form-urlencoded"},i.D.isObject(n)&&(n=JSON.stringify(n)),new Promise(((r,i)=>{GM_xmlhttpRequest({method:"POST",url:e,headers:t,data:n,responseType:o||"json",onload:e=>{r("blob"===o?e:e.response||e.responseText)},onerror:e=>{i(e)}})}))},gmOptions:function(e,t,n){return new Promise(((o,r)=>{GM_xmlhttpRequest({method:"OPTIONS",url:e,headers:t,responseType:n||"json",onload:e=>{o(e.response||e.responseText)},onerror:e=>{r(e)}})}))},printReceiveMessage:function(e){s.debug(`>>> From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage:function(e,t){s.debug(`<<< To: ${e}, From: ${window.location.origin}, Message:`,t)},randomEmoji:{}};for(let e in r.EMOJIS)s.randomEmoji[e]=()=>r.EMOJIS[e][Math.floor(Math.random()*r.EMOJIS[e].length)]},378:(e,t,n)=>{n.d(t,{CssCacheHelper:()=>r});var o=n(941);n(70);class r{static#t=new o.LooseMap;constructor(){}static save(e,t,n,r){this.#t.set(new o.Tuple(e,t),new o.ApplyMethodSignature(n,e,r))}static restore(e,t,n=!1){let r=new o.Tuple(e,t),i=this.#t.get(r);return!!i&&(i.fn.apply(i.context,i.args),n&&this.#t.delete(r),!0)}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o),n.d(o,{Class:()=>t,Const:()=>e,Enum:()=>r});var e={};n.r(e),n.d(e,{PROGRESS_STORAGE_KEY:()=>s,VOLUME_STORAGE_KEY:()=>i,bodyWebFullscreenClassName:()=>h,containerWebFullscreenClassName:()=>m,eventDelegateClassName:()=>a,eventDelegateSelector:()=>l,iframeFullscreenClassName:()=>c,iframeFullscreenSelector:()=>u,topOverlayClassName:()=>d,topOverlaySelector:()=>p});var t={};n.r(t),n.d(t,{VideoInstance:()=>K,VideoInstanceData:()=>P,_VideoCustomEventTypes:()=>L});var r={};n.r(r),n.d(r,{VideoCustomEventTypes:()=>D});const i="volume",s="progress",a="zw-event-delegate",l="."+a,c="player-fullscreen-fix",u="."+c,d="zw-top-overlay",p="."+d,h="player-mode-webfullscreen",m="mode-webfullscreen";var f=n(379),g=n.n(f),y=n(795),w=n.n(y),v=n(569),b=n.n(v),E=n(565),T=n.n(E),C=n(216),x=n.n(C),M=n(589),S=n.n(M),F=n(167),O={};O.styleTagTransform=S(),O.setAttributes=T(),O.insert=b().bind(null,"head"),O.domAPI=w(),O.insertStyleElement=x(),g()(F.Z,O),F.Z&&F.Z.locals&&F.Z.locals;var A=n(941),z=n(613),_=n(356),k=n(70),R=n(378);const L={VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",PLAY:"video_play",PAUSE:"video_pause",VOLUME_CHANGE:"video_volume_change",REQUEST_WEBFULLSCREEN:"video_request_webfullscreen",EXIT_WEBFULLSCREEN:"video_exit_webfullscreen"};class N{#n;#o;#r;#i=new Map;constructor(e,t){this.#o=e,this.#n=t,document.leave(t,(()=>{this.#r?.remove(),this.clean()}))}async createEventDelegate(){let e=this.#n,t=e?new Promise((t=>{document.arrive(e,{existing:!0},(e=>{let n=e.parentElement.querySelector(l);if(!n){n=document.createElement("div"),n.classList.add(a),e.after(n),e.classList.add(d);for(let e in z.GlobalEvents){let t=z.GlobalEvents[e];n.addEventListener(t,(e=>{let n=this.#i.get(t);n&&n.forEach((t=>{t.fn.call(t.context,e)}))}))}}t(this.#r=n)}))})):Promise.resolve(this.#r=this.#o);return document.leave(l,(e=>{e.isSameNode(this.#r)&&(e.remove(),this.clean())})),t}registerEventHandler(e,t,n){let o=new A.ApplyMethodSignature(t,n);this.#i.has(e)?this.#i.get(e).push(o):this.#i.set(e,[o])}unregisterContext(e){this.#i.forEach((t=>{for(let n=0;n<t.length;n++)t[n].context==e&&(t.splice(n,1),n--)}))}clean(){this.#o=this.#r=null,this.#i.clear()}}class P{video;playerMetadata;title;progress;volume;constructor({video:e,playerMetadata:t,title:n,progress:o,volume:r}){this.video=e,this.playerMetadata=t,this.title=n,this.progress=o,this.volume=r}}class K{#s;#a;#l;#c;#u;#d(e){let t=this.#u;return _.ui.querySelectorFirst(e,t.controlsSelector,t.containerSelector)}get playButton(){return this.#d(this.#u.playButtonSelector)}get volumeButton(){return this.#d(this.#u.volumeButtonSelector)}get fullscreenButton(){return this.#d(this.#u.fullscreenButtonSelector)}get webFullscreenButton(){return this.#d(this.#u.webFullscreenButtonSelector)}get container(){return this.#s.closest(this.#u.containerSelector)}videoDelegate;get tooltipWrap(){return this.container}constructor(e){this.#s=e.video,this.#u=e.playerMetadata,this.#a=e.title,this.#l=e.progress,this.#c=e.volume}#p(e,t){k.D.debug("CustomEvent:",e,t),this.#s.dispatchEvent(new CustomEvent(e,{bubbles:!1,detail:t}))}#h(){let e=this.#s;e.removeAttribute("autoplay"),e.crossOrigin="anonymous",this.#a&&this.showTooltip(this.#a);let t=this.#l;null!=t&&(k.D.debug(`Set init progress(s): ${t}`),e.currentTime=t);let n=this.#c;null!=n&&(k.D.debug(`Set init volume: ${n}`),e.volume=n),this.#p(L.VIDEO_ATTR_INITIALIZED,{volume:n,progress:t})}async#m(){this.#h();let e=this.#s;e.addEventListener(z.MediaEvents.VOLUME_CHANGE,(()=>{this.#p(L.VOLUME_CHANGE,{volume:e.volume}),this.showTooltip(e.muted?"静音":"音量"+Math.round(100*e.volume)+"%")}));let t=new N(this.container,this.#u.controlsSelector);return this.videoDelegate=t,t.createEventDelegate().then((()=>this.#p(L.VIDEO_READY)))}async#f(){let e=this.#s;return e.addEventListener(z.MediaEvents.PLAY,(()=>{this.showTooltip("播放",z.TooltipPosition.TOP_CENTER,15),this.#p(L.PLAY)}),!0),e.addEventListener(z.MediaEvents.PAUSE,(()=>{this.showTooltip("暂停",z.TooltipPosition.TOP_CENTER,15),this.#p(L.PAUSE)}),!0),new Promise((t=>{if(e.readyState>=z.MediaReadyState.HAVE_METADATA)return this.#m().then((()=>t()));e.addEventListener(z.MediaEvents.LOADED_METADATA,(()=>{this.#m().then((()=>t()))}),!0)}))}async init(){let e=this.#u.topElementSelectors;return e.length>0&&e.forEach((e=>{document.arrive(e,{existing:!0},(function(){this.classList.add(d)}))})),this.#f()}showTooltip(e,t,n,o){_.ui.showTooltip(e,new A.PositionOption({target:this.tooltipWrap,position:t,top:n,left:o}))}changeVolume(e){let t,n=this.#s;t=e>=0?Math.min(n.volume+e,1):Math.max(n.volume+e,0),n.volume=t.toFixed(2)}saveVideoFrame(e=document.title){let t=this.#s,n=t.videoWidth,o=t.videoHeight,r=document.createElement("canvas");r.width=n,r.height=o,r.getContext("2d").drawImage(t,0,0,n,o),r.toBlob((t=>_.ui.downloadBlob(t,`${e}_${n}x${o}.png`)))}togglePlay(){this.playButton?this.playButton.click():this.#s.paused?this.#s.play():this.#s.pause()}toggleMute(){this.volumeButton?this.volumeButton.click():this.#s.muted=!this.#s.muted}isVideoInWebFullScreen(){return document.body.classList.contains(h)}#g(){let e=document.documentElement,t=window.getComputedStyle(e).getPropertyValue("overflow");R.CssCacheHelper.save(e,"overflow",(()=>e.style.overflow=t)),R.CssCacheHelper.save(e,"scroll",HTMLElement.prototype.scrollTo,[e.scrollLeft,e.scrollTop]),document.documentElement.style.overflow="hidden"}#y(){R.CssCacheHelper.restore(document.documentElement,"overflow"),R.CssCacheHelper.restore(document.documentElement,"scroll")}requestWebFullscreen(){!this.isVideoInWebFullScreen()&&this.webFullscreenButton?this.webFullscreenButton.click():(this.#g(),this.container.classList.add(m),document.body.classList.add(h)),this.#p(L.REQUEST_WEBFULLSCREEN)}exitWebFullscreen(){this.isVideoInWebFullScreen()&&this.webFullscreenButton?this.webFullscreenButton.click():(this.container.classList.remove(m),document.body.classList.remove(h),this.#y()),this.#p(L.EXIT_WEBFULLSCREEN)}toggleWebFullscreen(){if(_.ui.isFullscreen())return this.exitFullscreen(),this.requestWebFullscreen(),!0;{let e=this.isVideoInWebFullScreen();return this.webFullscreenButton?(this.webFullscreenButton.click(),e?this.#p(L.EXIT_WEBFULLSCREEN):this.#p(L.REQUEST_WEBFULLSCREEN)):e?this.exitWebFullscreen():this.requestWebFullscreen(),!e}}requestFullscreen(e=!0){return _.ui.isFullscreen()?Promise.resolve():e&&this.fullscreenButton?(this.fullscreenButton.click(),Promise.resolve()):_.ui.requestFullscreen(this.container)}exitFullscreen(e=!0){return _.ui.isFullscreen()?e&&this.fullscreenButton?(this.fullscreenButton.click(),Promise.resolve()):_.ui.exitFullscreen():Promise.resolve()}toggleFullscreen(){return this.fullscreenButton?(this.fullscreenButton.click(),Promise.resolve()):_.ui.isFullscreen()?this.exitFullscreen(!1):this.requestFullscreen(!1)}clean(){this.videoDelegate.clean(),this.#s=this.#u=this.videoDelegate=null}}const D=L})(),o})()}));