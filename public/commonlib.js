!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.commonlib=t():e.commonlib=t()}(self,(function(){return(()=>{"use strict";var e={903:(e,t,r)=>{r.r(t),r.d(t,{ApplyMethodSignature:()=>d,Couple:()=>l,CustomError:()=>m,EventHandlerWrapper:()=>p,EventObserverWrapper:()=>f,KeyboardKeyCode:()=>s,LooseMap:()=>u,PositionOption:()=>h,Triple:()=>c,Tuple:()=>a,_TooltipPosition:()=>o,_isEqual:()=>i});class n{equals(e){return this===e}}const o={TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",LEFT_TOP:"left-top",LEFT_CENTER:"left-center",LEFT_BOTTOM:"left-bottom",RIGHT_TOP:"right-top",RIGHT_CENTER:"right-center",RIGHT_BOTTOM:"right-bottom",CENTER_CENTER:"center-center"};function i(e,t){if(e instanceof Array){if(!(t instanceof Array)||e.length!=t.length)return!1;for(let r=0;r<e.length;r++)if(!i(e[r],t[r]))return!1;return!0}return!!Object.is(e,t)||(e instanceof n?e.equals(t):e===t)}class s{code;key;keyCode;which;constructor(e,t,r,n){this.code=e,this.key=t,this.keyCode=r,this.which=n}convertToEvent(e){let t={};for(let e in this){let r=this[e];null!=r&&(t[e]=r)}return new KeyboardEvent(e,t)}}class a extends n{#e;get size(){return this.#e.length}constructor(...e){super(),this.#e=e;for(let t=0;t<e.length;t++)Object.defineProperty(this,t,{configurable:!1,enumerable:!0,writable:!1,value:e[t]})}equals(e){if(!(e instanceof a))return!1;if(this.size!=e.size)return!1;for(let t=0;t<this.size;t++)if(!i(this[t],e[t]))return!1;return!0}}class l extends a{get 0(){return this[0]}get 1(){return this[1]}constructor(e,t){super(e,t)}equals(e){return e instanceof l&&super.equals(e)}}class c extends a{get 0(){return this[0]}get 1(){return this[1]}get 2(){return this[2]}constructor(e,t,r){super(e,t,r)}equals(e){return e instanceof c&&super.equals(e)}}class u extends Map{constructor(){super()}get(e){let t,r=this.entries();for(;!(t=r.next()).done;){let[r,n]=t.value;if(i(r,e))return n}}set(e,t){let r,n=this.keys();for(;!(r=n.next()).done;)if(i(r.value,e))return super.set(r.value,t);super.set(e,t)}has(e){let t,r=this.keys();for(;!(t=r.next()).done;)if(i(t.value,e))return!0;return!1}delete(e){let t,r=this.keys();for(;!(t=r.next()).done;)if(i(t.value,e))return super.delete(t.value)}}class d{thisArg;fn;args;constructor(e,t,r){this.fn=e,this.thisArg=t,this.args=r||[]}}class p{eventType;handler;useCapture;thisArg;constructor(e,t,r,n=!1){this.eventType=e,this.handler=t,this.useCapture=n,this.thisArg=r}}class f{#t;#r=new u;constructor(e){this.#t=e}registerEventHandler(e,t,r,n=!1){let o=new c(e,t,n),i=e=>t.call(r,e);this.#r.set(o,i),this.#t.addEventListener(e,i,n)}unregisterEventHandler(e,t,r=!1){let n=new c(e,t,r),o=this.#r.get(n);o&&(this.#t.removeEventListener(e,o,r),this.#r.delete(n))}clean(){this.#r.forEach(((e,t)=>{this.#t.removeEventListener(t[0],e,t[2])})),this.#t=null,this.#r.clear()}}class h{target;position;top;left;insideX;insideY;fixed;ensureViewPort;constructor({target:e,position:t=o.CENTER_CENTER,top:r=0,left:n=0,insideX:i=!0,insideY:s=!0,fixed:a=!0,ensureViewPort:l=!1}){if(!(e instanceof Element))throw new TypeError("target is not an Element");this.target=e,this.position=t,this.top=r,this.left=n,this.insideX=i,this.insideY=s,this.fixed=a,this.ensureViewPort=l}}class m extends Error{code;subErrors;errorObj;constructor(e,t,r=[],n){super(t),this.code=e,this.subErrors=r,this.errorObj=n}appendSubError(e){this.subErrors.push(e)}static#n(e){let t={code:e.code,message:e.message,subErrors:[]};return e.subErrors.length>0&&(t.subErrors=e.subErrors.map((e=>this.#n(e)))),t}toPlainObject(){return m.#n(this)}}},882:(e,t,r)=>{r.r(t),r.d(t,{DEFAULT_LOG_GROUP:()=>n});const n="Common"},613:(e,t,r)=>{r.r(t),r.d(t,{KeyboardKeyCodes:()=>o,TooltipPosition:()=>i,MediaReadyState:()=>s,MediaEvents:()=>a,GlobalEvents:()=>l,MessageLevel:()=>c,DocumentReadyState:()=>u,ConsoleOutputLevel:()=>d,ErrorCode:()=>p});var n=r(903);const o={Space:new n.KeyboardKeyCode("Space"," "),Enter:new n.KeyboardKeyCode("Enter","Enter"),Escape:new n.KeyboardKeyCode("Escape","Escape"),KeyA:new n.KeyboardKeyCode("KeyA","a"),KeyB:new n.KeyboardKeyCode("KeyB","b"),KeyC:new n.KeyboardKeyCode("KeyC","c"),KeyD:new n.KeyboardKeyCode("KeyD","d"),KeyE:new n.KeyboardKeyCode("KeyE","e"),KeyF:new n.KeyboardKeyCode("KeyF","f"),KeyG:new n.KeyboardKeyCode("KeyG","g"),KeyI:new n.KeyboardKeyCode("KeyI","i"),KeyQ:new n.KeyboardKeyCode("KeyQ","q"),KeyR:new n.KeyboardKeyCode("KeyR","r"),KeyS:new n.KeyboardKeyCode("KeyS","s"),KeyT:new n.KeyboardKeyCode("KeyT","t"),KeyV:new n.KeyboardKeyCode("KeyV","v"),KeyW:new n.KeyboardKeyCode("KeyW","w"),BracketLeft:new n.KeyboardKeyCode("BracketLeft","["),BracketRight:new n.KeyboardKeyCode("BracketRight","]"),ArrowLeft:new n.KeyboardKeyCode("ArrowLeft","ArrowLeft",37,37),ArrowRight:new n.KeyboardKeyCode("ArrowRight","ArrowRight",39,39),ArrowUp:new n.KeyboardKeyCode("ArrowUp","ArrowUp",38,38),ArrowDown:new n.KeyboardKeyCode("ArrowDown","ArrowDown",40,40),Digit0:new n.KeyboardKeyCode("Digit0","0"),Digit1:new n.KeyboardKeyCode("Digit1","1"),Digit2:new n.KeyboardKeyCode("Digit2","2"),Digit3:new n.KeyboardKeyCode("Digit3","3"),Digit4:new n.KeyboardKeyCode("Digit4","4"),Digit5:new n.KeyboardKeyCode("Digit5","5"),Digit6:new n.KeyboardKeyCode("Digit6","6"),Digit7:new n.KeyboardKeyCode("Digit7","7"),Digit8:new n.KeyboardKeyCode("Digit8","8"),Digit9:new n.KeyboardKeyCode("Digit9","9"),Numpad0:new n.KeyboardKeyCode("Numpad0","0"),Numpad1:new n.KeyboardKeyCode("Numpad1","1"),Numpad2:new n.KeyboardKeyCode("Numpad2","2"),Numpad3:new n.KeyboardKeyCode("Numpad3","3"),Numpad4:new n.KeyboardKeyCode("Numpad4","4"),Numpad5:new n.KeyboardKeyCode("Numpad5","5"),Numpad6:new n.KeyboardKeyCode("Numpad6","6"),Numpad7:new n.KeyboardKeyCode("Numpad7","7"),Numpad8:new n.KeyboardKeyCode("Numpad8","8"),Numpad9:new n.KeyboardKeyCode("Numpad9","9"),F8:new n.KeyboardKeyCode("F8","F8")},i=n._TooltipPosition,s={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},a={ABORT:"abort",CAN_PLAY:"canplay",CAN_PLAY_THROUGH:"canplaythrough",DURATION_CHANGE:"durationchange",ENDED:"ended",LOADED_METADATA:"loadedmetadata",PAUSE:"pause",PLAY:"play",RATE_CHANGE:"ratechange",TIME_UPDATE:"timeupdate",VOLUME_CHANGE:"volumechange"},l={CLICK:"click",CONTEXTMENU:"contextmenu",DBLCLICK:"dblclick",KEYDOWN:"keydown",KEYUP:"keyup",LOAD:"load",MESSAGE:"message",MOUSEDOWN:"mousedown",WHEEL:"wheel"},c={SUCCESS:"success",INFO:"info",CAUTION:"caution",ERROR:"error"},u={LOADING:"loading",INTERACTIVE:"interactive",COMPLETE:"complete"},d={DEBUG:"debug",INFO:"info",LOG:"log",WARN:"warn",ERROR:"error"},p={COMMON:-1e4,SUCCESS:0,EXCEED_MAX_RETRY:1e4}},356:(e,t,r)=>{r.d(t,{ui:()=>R});var n=r(379),o=r.n(n),i=r(795),s=r.n(i),a=r(569),l=r.n(a),c=r(565),u=r.n(c),d=r(216),p=r.n(d),f=r(589),h=r.n(f),m=r(899),y={};y.styleTagTransform=h(),y.setAttributes=u(),y.insert=l().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=p(),o()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;var g=r(286),w={};w.styleTagTransform=h(),w.setAttributes=u(),w.insert=l().bind(null,"head"),w.domAPI=s(),w.insertStyleElement=p(),o()(g.Z,w),g.Z&&g.Z.locals&&g.Z.locals;var b=r(613),v=r(232),E=r(725);function T(e){return e.ownerDocument.defaultView||e.ownerDocument.parentWindow}function C(e){let t=e.document;return e.scrollY||e.pageYOffset||t.documentElement&&t.documentElement.scrollTop||t.body.scrollTop}function K(e){let t=e.document;return e.scrollX||e.pageXOffset||t.documentElement&&t.documentElement.scrollLeft||t.body.scrollLeft}function x(e){let t={top:0,left:0};if(!e.getClientRects().length)return t;if("none"===window.getComputedStyle(e).display)return t;let r=e.getBoundingClientRect(),n=T(e),o=n.document.documentElement;return{top:r.top+C(n)-(o.clientTop||0),left:r.left+K(n)-(o.clientLeft||0)}}function A(e=window,t=!1){let r,n;if(t)r=e.innerHeight,n=e.innerWidth;else{let t=e.document;"BackCompat"===t.compatMode?(r=t.body.clientHeight,n=t.body.clientWidth):(r=t.documentElement.clientHeight,n=t.documentElement.clientWidth)}return{height:r,width:n}}function O(e,t){let r=t.target.getBoundingClientRect(),n=e.getBoundingClientRect(),o=t.fixed?r:x(t.target),i=o.left+t.left,s=o.top+t.top,a=t.position;a.startsWith("top")?a.endsWith("center")&&(i+=r.width/2-n.width/2):a.startsWith("bottom")?(s+=r.height,a.endsWith("center")&&(i+=r.width/2-n.width/2)):a.startsWith("left")?a.endsWith("center")&&(s+=r.height/2-n.height/2):a.startsWith("right")?(i+=r.width,a.endsWith("center")&&(s+=r.height/2-n.height/2)):a==b.TooltipPosition.CENTER_CENTER&&(i+=r.width/2-n.width/2,s+=r.height/2-n.height/2),a.endsWith("right")?i+=r.width:a.endsWith("bottom")&&(s+=r.height);let l=t.insideX;(l&&a.includes("bottom")||!l&&a.includes("top"))&&(s-=n.height);let c=t.insideY;(c&&a.includes("right")||!c&&a.includes("left"))&&(i-=n.width);let u=A(T(t.target),!1);return t.ensureViewPort&&t.fixed&&(i<0?i=0:u.width<Math.round(i+n.width)&&(i=u.width-n.width),s<0?s=0:u.height<Math.round(s+n.height)&&(s=u.height-n.height)),{left:i,top:s}}class k{constructor(e,t,r){this.options=v.D.assignNotUndefined({name:"player-tooltip",target:document.body,type:"info",left:0,top:0,margin:0,arrow:!1,changeMode:0,singleMode:!0,animation:!0,supportShow:!0,autoShow:!0,autoHide:!0,hideTime:1e3,autoRemove:!0,game:!1,callback:function(){},onShow:function(){},onHide:function(){}},{text:e,hideTime:r},t),this.status=0,this.prefix="zw-player-tooltips",this.triggerClass=this.prefix+"-trigger","tip"===this.options.type&&(this.options.autoShow=!1,this.options.autoHide=!1,this.options.autoRemove=!0),this.initialize()}initialize(){this.options.target.classList.add(this.triggerClass),this.options.autoShow&&this.show(),"function"==typeof this.options.callback&&this.options.callback(),"tip"===this.options.type&&this.bindEvents()}bindEvents(){var e=this;this.options.target.addEventListener("mouseenter",(function(){e.options.supportShow&&e.show()})),this.options.target.addEventListener("mouseleave",(function(){e.hide()})),this.options.target.addEventListener("click",(function(t){var r=parseInt(e.options.changeMode+"",10);if(!isNaN(r))switch(r){case 1:{let r;for(r of t.target.parentElement.children)if(r!=t.target)return setTimeout((function(){r.hasClass(e.triggerClass)&&r.is(":visible")&&r.dispatchEvent(new MouseEvent("mouseenter"))}),0),!1;break}case 2:e.hide();break;case 3:e.options.target.dispatchEvent(new MouseEvent("mouseleave")),e.options.target.dispatchEvent(new MouseEvent("mouseenter"))}}))}toggle(e){this.status?this.hide():this.show(e)}show(){var e=this,t=200;"info"===this.options.type&&(t=0),this.status||(clearTimeout(this.timeOut),this.timeOut=window.setTimeout((function(){e.options.singleMode&&e.destroy(!0),e.create(),e.status=1,e.$zwtooltips.classList.add("active"),"function"==typeof e.options.onShow&&e.options.onShow(e),e.options.autoHide&&setTimeout((function(){e.hide()}),e.options.hideTime)}),t))}add(e){"string"==typeof e?e=Object.assign(this.options,{text:e}):"object"==typeof e&&(e=Object.assign(this.options,e));var t=this.template(!1,e);this.$zwtooltips.append(t),this.updatePos(!0)}hide(){this.status=0,clearTimeout(this.timeOut),this.$zwtooltips&&this.$zwtooltips.classList.remove("active"),"function"==typeof this.options.onHide&&this.options.onHide(this),this.options.autoRemove&&this.destroy()}destroy(e){if(clearTimeout(this.timeOut),e){var t=document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]');t&&t.remove()}else this.$zwtooltips&&this.$zwtooltips.remove()}create(){document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]')||(this.$zwtooltips=this.template(!0),this.options.game&&this.$zwtooltips.classList.add("tooltip-game"),this.options.target.append(this.$zwtooltips)),this.$zwtooltips.append(this.template()),this.updatePos()}template(e,t){let r,n,o,i="",s=[];if(n=(t=t||this.options).text||t.target.getAttribute("data-text"),o=t.position||t.target.getAttribute("data-position"),t.changeMode=t.target.getAttribute("data-change-mode")||0,e)s.push(t.type),s.push(o),t.animation&&s.push("animation"),t.fixed&&s.push("fixed"),r=s.join(" "),i=`<div class="${this.prefix} ${r}"  data-tooltip-name="${t.name}"></div>`;else{var a="";t.padding&&(t.padding instanceof Array?a+="padding:"+t.padding.join("px ")+"px;":"number"==typeof t.padding&&(a+="padding:"+t.padding+";")),t.fontSize&&"number"==typeof t.fontSize&&(a+="font-size:"+t.fontSize+"px;"),i=`<div class="zw-tooltip${t.fixed?" fixed":""}" style="`+a+'">'+n+"</div>"}return document.createRange().createContextualFragment(i).firstElementChild}updatePos(){let e,t=this.options,r=this.options.target.getBoundingClientRect(),n=this.$zwtooltips.getBoundingClientRect();switch(t.position||t.target.attr("data-position")){case b.TooltipPosition.TOP_LEFT:e=r.width/2;break;case b.TooltipPosition.TOP_CENTER:e=n.width/2;break;case b.TooltipPosition.TOP_RIGHT:e=n.width-r.width/2;break;case b.TooltipPosition.BOTTOM_LEFT:e=r.width/2;break;case b.TooltipPosition.BOTTOM_CENTER:case b.TooltipPosition.BOTTOM_RIGHT:e=n.width/2}t.arrow&&this.$zwtooltips.insertAdjacentHTML("beforeend",`<div class="arrow" style="left:${e}px;"></div>`);let o=O(this.$zwtooltips,t);this.$zwtooltips.style.top=o.top+"px",this.$zwtooltips.style.left=o.left+"px"}}const R={offset:x,scrollToElement(e){if(!(e&&e instanceof Element))throw new TypeError("Parameter is not an Element");const t=x(e),r=A(T(e),!1),n=e.getBoundingClientRect();e.ownerDocument.documentElement.scrollTo(t.left-(r.width-n.width)/2,t.top-(r.height-n.height)/2)},getViewPortDimension:A,isInputEvent(e){if(!(e instanceof KeyboardEvent))return!1;let t=e.target;return t instanceof Element?"TEXTAREA"==t.tagName.toUpperCase()||"INPUT"==t.tagName.toUpperCase()&&"text"==t.type||"true"===t.getAttribute("contenteditable")||""===t.getAttribute("contenteditable"):e.isComposing||229===e.keyCode},isEventFromThisDoc(e){let t=e.target;return!!t&&(t instanceof Element&&t.ownerDocument==document||t instanceof Document&&t==document)},getModifierState:e=>e.altKey||e.ctrlKey||e.metaKey||e.shiftKey,showTooltip:function(e,t,r=1e3){v.D.isBlank(e)?console.debug("Tooltip is blank"):new k(e,t,r)},showMessage:function(e,t,r=b.MessageLevel.INFO,n=4e3){E.EnumHelper.hasValue(b.MessageLevel,r)||(r=b.MessageLevel.INFO);let o=t.target;if(!o.className&&!o.attributes)throw new Error("[@blink-common/message] 传入 element 不是有效节点.");let i=o.ownerDocument,s=i.createDocumentFragment(),a=i.createElement("div");a.style.whiteSpace="pre",a.innerHTML='<span class="toast-text">'+e+"</span>",a.className="link-toast "+r+" "+(t.fixed?"fixed":""),i.querySelector("div.link-toast")?.remove(),s.appendChild(a),i.body.appendChild(s);let l=O(a,t);a.style.left=l.left+"px",a.style.top=l.top+"px",setTimeout((function(){a.className+=" out",setTimeout((function(){a.parentNode?a.parentNode.removeChild(a):a.remove()}),350)}),n)},downloadBlob:function(e,t){let r=document.createElement("a");r.href=URL.createObjectURL(e),r.download=t,r.click(),URL.revokeObjectURL(r.href)},saveVideoFrame(e,t=document.title){let r=e.videoWidth,n=e.videoHeight,o=document.createElement("canvas");o.width=r,o.height=n,o.getContext("2d").drawImage(e,0,0,r,n),o.toBlob((o=>R.downloadBlob(o,`${t}_${r}x${n}_${Math.trunc(e.currentTime)}.png`)))},isFullscreen:()=>!!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement),isFullscreenEnabled:()=>v.D.getFirstTruthyMember(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document),getFullscreenElement(e=!1){var t=v.D.getFirstTruthyMember(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(e)for(;t&&t.shadowRoot;)t=t.shadowRoot.fullscreenElement;return t||null},requestFullscreen(e=document.documentElement){let t;if(e.requestFullscreen)t=e.requestFullscreen();else if(e.webkitRequestFullscreen)t=e.webkitRequestFullscreen();else if(e.mozRequestFullScreen)t=e.mozRequestFullScreen();else if(e.msRequestFullscreen)t=e.msRequestFullscreen();else{if(!e.webkitEnterFullscreen)return Promise.reject(Error("Fullscreen API unavailable"));t=e.webkitEnterFullscreen()}return t instanceof Promise?t:Promise.resolve()},exitFullscreen(){let e;if(document.exitFullscreen)e=document.exitFullscreen();else if(document.webkitExitFullscreen)e=document.webkitExitFullscreen();else if(document.mozCancelFullScreen)e=document.mozCancelFullScreen();else{if(!document.msExitFullscreen)return Promise.reject(Error("Exit fullscreen API unavailable"));e=document.msExitFullscreen()}return e instanceof Promise?e:Promise.resolve()},toggleFullscreen:(e=document.documentElement)=>R.isFullscreen()?R.exitFullscreen(e):R.requestFullscreen(e)}},232:(e,t,r)=>{r.d(t,{D:()=>l});var n=r(903),o=r(882),i=r(613);const s={零:0,一:1,二:2,两:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,百:100,千:1e3,万:1e4,亿:1e8};function a(e,t){t.forEach((t=>{if(!(t instanceof Map))throw new TypeError("Source is not a map");t.forEach(((t,r)=>e.set(r,t)))}))}let l={consoleOutput(e=o.DEFAULT_LOG_GROUP,t=i.ConsoleOutputLevel.DEBUG,...r){console.group(`[${e}]`);let n=[];for(let e=0;e<r.length;e++){let t=r[e];n.push(l.isObject(t)&&t.toPlainObject?t.toPlainObject():t)}switch(t){case i.ConsoleOutputLevel.DEBUG:console.debug(...n);break;case i.ConsoleOutputLevel.INFO:console.info(...n);break;case i.ConsoleOutputLevel.LOG:console.log(...n);break;case i.ConsoleOutputLevel.WARN:console.warn(...n);break;case i.ConsoleOutputLevel.ERROR:console.error(...n);break;default:console.debug(...n)}console.groupEnd()},get:function(e,t,r){return new Promise(((n,o)=>{let i=new XMLHttpRequest;if(i.responseType=r||"json",i.addEventListener("load",(function(){n(this.response||this.responseText)})),i.addEventListener("error",(function(){o(this)})),i.open("GET",e),t)for(let e in t)i.setRequestHeader(e,t[e]);i.send()}))},post:function(e,t={"Content-Type":"application/x-www-form-urlencoded"},r,n){return new Promise(((o,i)=>{let s=new XMLHttpRequest;s.responseType=n||"json",s.addEventListener("load",(function(){o(this.response||this.responseText)})),s.addEventListener("error",(function(){i(this)})),s.open("POST",e);for(let e in t)s.setRequestHeader(e,t[e]);s.send(r)}))},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let r=0,n=t.length;r<n;r++){let n=t[r].split("=");if(n[0]==e)return decodeURIComponent(n[1])}return""},getQueryParameter:function(e,t=!1){let r=t?window.location.hash.replace(/#.*?\?/,"?"):window.location.search;for(let[t,n]of new URLSearchParams(r).entries())if(t===e)return n},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(s);for(const r of e)if(!t.includes(r))return!1;return!0},zh2Digits:function(e){if(l.isInteger(e))return parseInt(e);if(!this.isChineseDigits(e))return;let t=0,r=1;for(let n=e.length-1;n>=0;n--){let o=s[e[n]];o>=10&&0==n?o>r?(r=o,t+=o):r*=o:o>=10?o>r?r=o:r*=o:t+=r*o}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!l.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"],r=e.length;return 1==r?t[e]:2==r?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},getFirstTruthyMember:function(e,t){let r;return e.some((e=>(r=t[e],!!r)))?r:void 0},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)||e instanceof Object},isString:function(e){return e instanceof String||"string"==typeof e},isBlank:function(e){return l.isString(e)?""===e.trim():null==e},assignNotUndefined:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((r=>{let n=t[r];void 0!==n&&(e[r]=n)}))})),e},assignNotEmpty:function(e,t,r=!1,n=!1){if(!Array.isArray(t))throw new TypeError("Invalid sources");if(!l.isObject(e))throw new TypeError("Invalid target");return e instanceof Map&&a(e,t),t.forEach((t=>{if(!l.isObject(t))throw new TypeError("Invalid source");Object.keys(t).forEach((o=>{let i=t[o],s=e[o];if(null!=i&&!Object.is(NaN,i))if(Array.isArray(s)){if(!Array.isArray(i))throw new TypeError(`${o} of source is not an array`);n?i.forEach((e=>{s.includes(e)||s.push(e)})):e[o]=i}else if(s instanceof Map)r?a(s,[i]):e[o]=i;else if(l.isObject(s)){if(!l.isObject(i))throw new TypeError(`${o} of source is not an object`);r?l.assignNotEmpty(s,[i],r,n):e[o]=i}else e[o]=i}))})),e},isIterable:function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},isEqual:n._isEqual,formatDate:function(e,t="MM/dd/yyyy hh:mm:ss"){e instanceof Date||(e=new Date(e));var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[n]:("00"+r[n]).substr((""+r[n]).length)));return t},sleep:e=>new Promise((t=>setTimeout(t,e))),sleepUntil(e,t=window){let r=e-t.performance.now();return r>0?this.sleep(r):Promise.resolve()}}},725:(e,t,r)=>{r.r(t),r.d(t,{UUID:()=>s,EnumHelper:()=>a,ErrorUtils:()=>l,ArrayUtils:()=>c,StringUtils:()=>u});var n=r(232),o=r(903),i=r(613),s=r(614);class a{static#o(e){if(!n.D.isObject(e))throw new TypeError("Parameter is not an enum")}static hasValue(e,t){this.#o(e);for(let r in e)if(n.D.isEqual(e[r],t))return!0;return!1}static toValueArray(e,t="string"){this.#o(e);let r=[];for(let n in e)typeof e[n]==t&&r.push(e[n]);return r}}class l{static convertToCustomError(e,t=i.ErrorCode.COMMON){return e instanceof o.CustomError?e:e instanceof Error?new o.CustomError(t,e.message):new o.CustomError(t,JSON.stringify(e))}}class c{static max(e,t){if(!Array.isArray(e)||0==e.length)return;let r=e[0];for(let n=1;n<e.length;n++){let o=e[n];t(o,r)>0&&(r=o)}return r}static min(e,t){if(!Array.isArray(e)||0==e.length)return;let r=e[0];for(let n=1;n<e.length;n++){let o=e[n];t(o,r)<0&&(r=o)}return r}}class u{static replaceLFTrailingSpaces(e,t=""){return n.D.isString(e)?e.replace(/\n\s*/g,t):e}}},286:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,'.link-toast {\r\n    position:absolute;\r\n    padding:8px 16px;\r\n    font-size:14px;\r\n    border-radius:8px;\r\n    white-space:pre;\r\n    color:#fff;\r\n    -webkit-animation:link-msg-move-in-top cubic-bezier(.22,.58,.12,.98) .4s;\r\n    animation:link-msg-move-in-top cubic-bezier(.22,.58,.12,.98) .4s;\r\n    z-index:10000;\r\n    pointer-events:none;\r\n\r\n    line-height: 1.15;\r\n    font-family:Arial,"Microsoft YaHei","Microsoft Sans Serif","Microsoft SanSerf","微软雅黑"!important;\r\n}\r\n.link-toast.fixed {\r\n    position:fixed\r\n}\r\n.link-toast.success {\r\n    background-color:#47d279;\r\n    box-shadow:0 .2em .1em .1em rgba(71,210,121,.2)\r\n}\r\n.link-toast.caution {\r\n    background-color:#ffb243;\r\n    box-shadow:0 .2em .1em .1em rgba(255,190,68,.2)\r\n}\r\n.link-toast.error {\r\n    background-color:#ff6464;\r\n    box-shadow:0 .2em 1em .1em rgba(255,100,100,.2)\r\n}\r\n.link-toast.info {\r\n    background-color:#48bbf8;\r\n    box-shadow:0 .2em .1em .1em rgba(72,187,248,.2)\r\n}\r\n.link-toast.out {\r\n    -webkit-animation:link-msg-fade-out cubic-bezier(.22,.58,.12,.98) .4s;\r\n    animation:link-msg-fade-out cubic-bezier(.22,.58,.12,.98) .4s\r\n}\r\n\r\n@-webkit-keyframes link-msg-move-in-top {\r\n    from {\r\n        opacity:0;\r\n        transform:translate(0,5em);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        transform:translate(0,0)\r\n    }\r\n}\r\n@keyframes link-msg-move-in-top {\r\n    from {\r\n        opacity:0;\r\n        transform:translate(0,5em)\r\n    }\r\n    to {\r\n        opacity:1;\r\n        transform:translate(0,0)\r\n    }\r\n}\r\n@-webkit-keyframes link-msg-fade-out {\r\n    from {\r\n        opacity:1\r\n    }\r\n    to {\r\n        opacity:0\r\n    }\r\n}\r\n@keyframes link-msg-fade-out {\r\n    from {\r\n        opacity:1\r\n    }\r\n    to {\r\n        opacity:0\r\n    }\r\n}',""]);const i=o},899:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".zw-player-tooltips {\r\n    position:absolute;\r\n    opacity:0;\r\n    z-index:-1;\r\n    top:-999px;\r\n    cursor:default;\r\n    pointer-events:none;\r\n}\r\n.zw-player-tooltips.fixed {\r\n    position:fixed;\r\n    opacity:0;\r\n    z-index:-1;\r\n    top:-999px;\r\n    cursor:default;\r\n    pointer-events:none;\r\n}\r\n.zw-player-tooltips {\r\n    text-align: left;\r\n    white-space: nowrap;\r\n\r\n    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;\r\n    line-height: 1;\r\n\r\n    color: #222;\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n    font-style: normal;\r\n    \r\n    -webkit-touch-callout:none;\r\n    -webkit-user-select:none;\r\n    -moz-user-select:none;\r\n    -ms-user-select:none;\r\n    user-select:none\r\n}\r\n.zw-player-tooltips.animation {\r\n    -webkit-transition:opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition:opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition:transform .3s ease-in-out,opacity .3s ease-in-out;\r\n    transition:transform .3s ease-in-out,opacity .3s ease-in-out,-webkit-transform .3s ease-in-out\r\n}\r\n.zw-player-tooltips.animation>.arrow,\r\n.zw-player-tooltips.animation>.zw-tooltip {\r\n    -webkit-transition:opacity .3s ease-in-out;\r\n    transition:opacity .3s ease-in-out\r\n}\r\n.zw-player-tooltips.center-center,\r\n.zw-player-tooltips.top-center,\r\n.zw-player-tooltips.top-left,\r\n.zw-player-tooltips.top-right {\r\n    -webkit-transform:translateY(10px);\r\n    transform:translateY(10px)\r\n}\r\n.zw-player-tooltips.bottom-center,\r\n.zw-player-tooltips.bottom-left,\r\n.zw-player-tooltips.bottom-right {\r\n    -webkit-transform:translateY(-10px);\r\n    transform:translateY(-10px)\r\n}\r\n.zw-player-tooltips.left-bottom,\r\n.zw-player-tooltips.left-center,\r\n.zw-player-tooltips.left-top {\r\n    -webkit-transform:translate(10px);\r\n    transform:translate(10px)\r\n}\r\n.zw-player-tooltips.right-bottom,\r\n.zw-player-tooltips.right-center,\r\n.zw-player-tooltips.right-top {\r\n    -webkit-transform:translate(-10px);\r\n    transform:translate(-10px)\r\n}\r\n.zw-player-tooltips.active,\r\n.zw-player-tooltips.center-center.active,\r\n.zw-player-tooltips.top-center.active,\r\n.zw-player-tooltips.top-left.active,\r\n.zw-player-tooltips.top-right.active {\r\n    -webkit-transform:translate(0);\r\n    transform:translate(0);\r\n    z-index:999999;\r\n    opacity:1\r\n}\r\n.zw-player-tooltips.active>.arrow,\r\n.zw-player-tooltips.active>.zw-tooltip {\r\n    opacity:1;\r\n    z-index:98\r\n}\r\n.zw-player-tooltips.tip .arrow {\r\n    position:absolute;\r\n    width:0;\r\n    height:0;\r\n    border:4px solid transparent;\r\n    opacity:1;\r\n    z-index:-1\r\n}\r\n.zw-player-tooltips.tip.top-center .arrow,\r\n.zw-player-tooltips.tip.top-left .arrow,\r\n.zw-player-tooltips.tip.top-right .arrow {\r\n    bottom:-8px;\r\n    margin-left:-4px;\r\n    border-top-color:rgba(0,0,0,.7)\r\n}\r\n.zw-player-tooltips.tip.bottom-center .arrow,\r\n.zw-player-tooltips.tip.bottom-left .arrow,\r\n.zw-player-tooltips.tip.bottom-right .arrow {\r\n    top:-8px;\r\n    margin-left:-4px;\r\n    border-bottom-color:rgba(0,0,0,.7)\r\n}\r\n.zw-player-tooltips>.zw-tooltip {\r\n    background:rgba(0,0,0,.7);\r\n    border-radius:4px;\r\n    color:#fff;\r\n    font-size:12px;\r\n    line-height: normal;\r\n    padding:6px 8px;\r\n    margin-top:5px;\r\n    opacity:0\r\n}\r\n.zw-player-tooltips>.zw-tooltip:first-child {\r\n    margin:0\r\n}\r\n.zw-player-tooltips.zw-tooltip-game>.zw-tooltip {\r\n    background:rgba(0,0,0,.8)\r\n}\r\ndiv.zw-player-tooltips::selection, div.zw-tooltip::selection {\r\n    background: #1890ff;\r\n    color: #fff;\r\n}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},s=[],a=0;a<e.length;a++){var l=e[a],c=n.base?l[0]+n.base:l[0],u=i[c]||0,d="".concat(c," ").concat(u);i[c]=u+1;var p=r(d),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:d,updater:o(f,n),references:1}),s.push(d)}return s}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=r(i[s]);t[a].references--}for(var l=n(e,o),c=0;c<i.length;c++){var u=r(i[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=l}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},614:(e,t,r)=>{var n;r.r(t),r.d(t,{NIL:()=>z,parse:()=>y,stringify:()=>u,v1:()=>m,v3:()=>x,v4:()=>A,v5:()=>R,validate:()=>a,version:()=>N});var o=new Uint8Array(16);function i(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a=function(e){return"string"==typeof e&&s.test(e)};for(var l=[],c=0;c<256;++c)l.push((c+256).toString(16).substr(1));const u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!a(r))throw TypeError("Stringified UUID is invalid");return r};var d,p,f=0,h=0;const m=function(e,t,r){var n=t&&r||0,o=t||new Array(16),s=(e=e||{}).node||d,a=void 0!==e.clockseq?e.clockseq:p;if(null==s||null==a){var l=e.random||(e.rng||i)();null==s&&(s=d=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==a&&(a=p=16383&(l[6]<<8|l[7]))}var c=void 0!==e.msecs?e.msecs:Date.now(),m=void 0!==e.nsecs?e.nsecs:h+1,y=c-f+(m-h)/1e4;if(y<0&&void 0===e.clockseq&&(a=a+1&16383),(y<0||c>f)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");f=c,h=m,p=a;var g=(1e4*(268435455&(c+=122192928e5))+m)%4294967296;o[n++]=g>>>24&255,o[n++]=g>>>16&255,o[n++]=g>>>8&255,o[n++]=255&g;var w=c/4294967296*1e4&268435455;o[n++]=w>>>8&255,o[n++]=255&w,o[n++]=w>>>24&15|16,o[n++]=w>>>16&255,o[n++]=a>>>8|128,o[n++]=255&a;for(var b=0;b<6;++b)o[n+b]=s[b];return t||u(o)},y=function(e){if(!a(e))throw TypeError("Invalid UUID");var t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r};function g(e,t,r){function n(e,n,o,i){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof n&&(n=y(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var s=new Uint8Array(16+e.length);if(s.set(n),s.set(e,n.length),(s=r(s))[6]=15&s[6]|t,s[8]=63&s[8]|128,o){i=i||0;for(var a=0;a<16;++a)o[i+a]=s[a];return o}return u(s)}try{n.name=e}catch(e){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}function w(e){return 14+(e+64>>>9<<4)+1}function b(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function v(e,t,r,n,o,i){return b((s=b(b(t,e),b(n,i)))<<(a=o)|s>>>32-a,r);var s,a}function E(e,t,r,n,o,i,s){return v(t&r|~t&n,e,t,o,i,s)}function T(e,t,r,n,o,i,s){return v(t&n|r&~n,e,t,o,i,s)}function C(e,t,r,n,o,i,s){return v(t^r^n,e,t,o,i,s)}function K(e,t,r,n,o,i,s){return v(r^(t|~n),e,t,o,i,s)}const x=g("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var r=0;r<t.length;++r)e[r]=t.charCodeAt(r)}return function(e){for(var t=[],r=32*e.length,n="0123456789abcdef",o=0;o<r;o+=8){var i=e[o>>5]>>>o%32&255,s=parseInt(n.charAt(i>>>4&15)+n.charAt(15&i),16);t.push(s)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[w(t)-1]=t;for(var r=1732584193,n=-271733879,o=-1732584194,i=271733878,s=0;s<e.length;s+=16){var a=r,l=n,c=o,u=i;r=E(r,n,o,i,e[s],7,-680876936),i=E(i,r,n,o,e[s+1],12,-389564586),o=E(o,i,r,n,e[s+2],17,606105819),n=E(n,o,i,r,e[s+3],22,-1044525330),r=E(r,n,o,i,e[s+4],7,-176418897),i=E(i,r,n,o,e[s+5],12,1200080426),o=E(o,i,r,n,e[s+6],17,-1473231341),n=E(n,o,i,r,e[s+7],22,-45705983),r=E(r,n,o,i,e[s+8],7,1770035416),i=E(i,r,n,o,e[s+9],12,-1958414417),o=E(o,i,r,n,e[s+10],17,-42063),n=E(n,o,i,r,e[s+11],22,-1990404162),r=E(r,n,o,i,e[s+12],7,1804603682),i=E(i,r,n,o,e[s+13],12,-40341101),o=E(o,i,r,n,e[s+14],17,-1502002290),r=T(r,n=E(n,o,i,r,e[s+15],22,1236535329),o,i,e[s+1],5,-165796510),i=T(i,r,n,o,e[s+6],9,-1069501632),o=T(o,i,r,n,e[s+11],14,643717713),n=T(n,o,i,r,e[s],20,-373897302),r=T(r,n,o,i,e[s+5],5,-701558691),i=T(i,r,n,o,e[s+10],9,38016083),o=T(o,i,r,n,e[s+15],14,-660478335),n=T(n,o,i,r,e[s+4],20,-405537848),r=T(r,n,o,i,e[s+9],5,568446438),i=T(i,r,n,o,e[s+14],9,-1019803690),o=T(o,i,r,n,e[s+3],14,-187363961),n=T(n,o,i,r,e[s+8],20,1163531501),r=T(r,n,o,i,e[s+13],5,-1444681467),i=T(i,r,n,o,e[s+2],9,-51403784),o=T(o,i,r,n,e[s+7],14,1735328473),r=C(r,n=T(n,o,i,r,e[s+12],20,-1926607734),o,i,e[s+5],4,-378558),i=C(i,r,n,o,e[s+8],11,-2022574463),o=C(o,i,r,n,e[s+11],16,1839030562),n=C(n,o,i,r,e[s+14],23,-35309556),r=C(r,n,o,i,e[s+1],4,-1530992060),i=C(i,r,n,o,e[s+4],11,1272893353),o=C(o,i,r,n,e[s+7],16,-155497632),n=C(n,o,i,r,e[s+10],23,-1094730640),r=C(r,n,o,i,e[s+13],4,681279174),i=C(i,r,n,o,e[s],11,-358537222),o=C(o,i,r,n,e[s+3],16,-722521979),n=C(n,o,i,r,e[s+6],23,76029189),r=C(r,n,o,i,e[s+9],4,-640364487),i=C(i,r,n,o,e[s+12],11,-421815835),o=C(o,i,r,n,e[s+15],16,530742520),r=K(r,n=C(n,o,i,r,e[s+2],23,-995338651),o,i,e[s],6,-198630844),i=K(i,r,n,o,e[s+7],10,1126891415),o=K(o,i,r,n,e[s+14],15,-1416354905),n=K(n,o,i,r,e[s+5],21,-57434055),r=K(r,n,o,i,e[s+12],6,1700485571),i=K(i,r,n,o,e[s+3],10,-1894986606),o=K(o,i,r,n,e[s+10],15,-1051523),n=K(n,o,i,r,e[s+1],21,-2054922799),r=K(r,n,o,i,e[s+8],6,1873313359),i=K(i,r,n,o,e[s+15],10,-30611744),o=K(o,i,r,n,e[s+6],15,-1560198380),n=K(n,o,i,r,e[s+13],21,1309151649),r=K(r,n,o,i,e[s+4],6,-145523070),i=K(i,r,n,o,e[s+11],10,-1120210379),o=K(o,i,r,n,e[s+2],15,718787259),n=K(n,o,i,r,e[s+9],21,-343485551),r=b(r,a),n=b(n,l),o=b(o,c),i=b(i,u)}return[r,n,o,i]}(function(e){if(0===e.length)return[];for(var t=8*e.length,r=new Uint32Array(w(t)),n=0;n<t;n+=8)r[n>>5]|=(255&e[n/8])<<n%32;return r}(e),8*e.length))})),A=function(e,t,r){var n=(e=e||{}).random||(e.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return u(n)};function O(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:return t^r^n;case 2:return t&r^t&n^r&n;case 3:return t^r^n}}function k(e,t){return e<<t|e>>>32-t}const R=g("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var n=unescape(encodeURIComponent(e));e=[];for(var o=0;o<n.length;++o)e.push(n.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var i=e.length/4+2,s=Math.ceil(i/16),a=new Array(s),l=0;l<s;++l){for(var c=new Uint32Array(16),u=0;u<16;++u)c[u]=e[64*l+4*u]<<24|e[64*l+4*u+1]<<16|e[64*l+4*u+2]<<8|e[64*l+4*u+3];a[l]=c}a[s-1][14]=8*(e.length-1)/Math.pow(2,32),a[s-1][14]=Math.floor(a[s-1][14]),a[s-1][15]=8*(e.length-1)&4294967295;for(var d=0;d<s;++d){for(var p=new Uint32Array(80),f=0;f<16;++f)p[f]=a[d][f];for(var h=16;h<80;++h)p[h]=k(p[h-3]^p[h-8]^p[h-14]^p[h-16],1);for(var m=r[0],y=r[1],g=r[2],w=r[3],b=r[4],v=0;v<80;++v){var E=Math.floor(v/20),T=k(m,5)+O(E,y,g,w)+b+t[E]+p[v]>>>0;b=w,w=g,g=k(y,30)>>>0,y=m,m=T}r[0]=r[0]+m>>>0,r[1]=r[1]+y>>>0,r[2]=r[2]+g>>>0,r[3]=r[3]+w>>>0,r[4]=r[4]+b>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]})),z="00000000-0000-0000-0000-000000000000",N=function(e){if(!a(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{Const:()=>e,Class:()=>t,Enum:()=>o,util:()=>i.D,ui:()=>s.ui,Utils:()=>a});var e=r(882),t=r(903),o=r(613),i=r(232),s=r(356),a=r(725)})(),n})()}));