!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.playerlib=t():e.playerlib=t()}(self,(function(){return(()=>{"use strict";var e={903:(e,t,n)=>{n.d(t,{ApplyMethodSignature:()=>c,EventObserverWrapper:()=>d,KeyboardKeyCode:()=>s,LooseMap:()=>u,PositionOption:()=>p,Tuple:()=>a,_TooltipPosition:()=>o,_isEqual:()=>i});class r{equals(e){return this===e}}const o={TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",LEFT_TOP:"left-top",LEFT_CENTER:"left-center",LEFT_BOTTOM:"left-bottom",RIGHT_TOP:"right-top",RIGHT_CENTER:"right-center",RIGHT_BOTTOM:"right-bottom",CENTER_CENTER:"center-center"};function i(e,t){if(e instanceof Array){if(!(t instanceof Array)||e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!i(e[n],t[n]))return!1;return!0}return!!Object.is(e,t)||(e instanceof r?e.equals(t):e===t)}class s{code;key;constructor(e,t){this.code=e,this.key=t}}class a extends r{#e;get size(){return this.#e.length}constructor(...e){super(),this.#e=e;for(let t=0;t<e.length;t++)Object.defineProperty(this,t,{configurable:!1,enumerable:!0,writable:!1,value:e[t]})}equals(e){if(!(e instanceof a))return!1;if(this.size!=e.size)return!1;for(let t=0;t<this.size;t++)if(!i(this[t],e[t]))return!1;return!0}}class l extends a{get 0(){return this[0]}get 1(){return this[1]}get 2(){return this[2]}constructor(e,t,n){super(e,t,n)}equals(e){return e instanceof l&&super.equals(e)}}class u extends Map{constructor(){super()}get(e){let t,n=this.entries();for(;!(t=n.next()).done;){let[n,r]=t.value;if(i(n,e))return r}}set(e,t){let n,r=this.keys();for(;!(n=r.next()).done;)if(i(n.value,e))return super.set(n.value,t);super.set(e,t)}has(e){let t,n=this.keys();for(;!(t=n.next()).done;)if(i(t.value,e))return!0;return!1}delete(e){let t,n=this.keys();for(;!(t=n.next()).done;)if(i(t.value,e))return super.delete(t.value)}}class c{thisArg;fn;args;constructor(e,t,n){this.fn=e,this.thisArg=t,this.args=n||[]}}class d{#t;#n=new u;constructor(e){this.#t=e}registerEventHandler(e,t,n,r=!1){let o=new l(e,t,r),i=e=>t.call(n,e);this.#n.set(o,i),this.#t.addEventListener(e,i,r)}unregisterEventHandler(e,t,n=!1){let r=new l(e,t,n),o=this.#n.get(r);o&&(this.#t.removeEventListener(e,o,n),this.#n.delete(r))}clean(){this.#n.forEach(((e,t)=>{this.#t.removeEventListener(t[0],e,t[2])})),this.#t=null,this.#n.clear()}}class p{target;position;top;left;insideX;insideY;fixed;ensureViewPort;constructor({target:e,position:t=o.CENTER_CENTER,top:n=0,left:r=0,insideX:i=!0,insideY:s=!0,fixed:a=!0,ensureViewPort:l=!1}){if(!(e instanceof Element))throw new TypeError("target is not an Element");this.target=e,this.position=t,this.top=n,this.left=r,this.insideX=i,this.insideY=s,this.fixed=a,this.ensureViewPort=l}}},882:(e,t,n)=>{n.d(t,{DEFAULT_LOG_GROUP:()=>r});const r="Common"},613:(e,t,n)=>{n.d(t,{TooltipPosition:()=>i,MediaReadyState:()=>s,MediaEvents:()=>a,GlobalEvents:()=>l,MessageLevel:()=>u,ConsoleOutputLevel:()=>c});var r=n(903),o=n(725);new r.KeyboardKeyCode("Space"," "),new r.KeyboardKeyCode("Enter","Enter"),new r.KeyboardKeyCode("Escape","Escape"),new r.KeyboardKeyCode("KeyC","c"),new r.KeyboardKeyCode("KeyD","d"),new r.KeyboardKeyCode("KeyF","f"),new r.KeyboardKeyCode("KeyG","g"),new r.KeyboardKeyCode("KeyI","i"),new r.KeyboardKeyCode("KeyQ","q"),new r.KeyboardKeyCode("KeyR","r"),new r.KeyboardKeyCode("KeyS","s"),new r.KeyboardKeyCode("KeyV","v"),new r.KeyboardKeyCode("KeyW","w"),new r.KeyboardKeyCode("BracketLeft","["),new r.KeyboardKeyCode("BracketRight","]"),new r.KeyboardKeyCode("ArrowLeft","ArrowLeft"),new r.KeyboardKeyCode("ArrowRight","ArrowRight"),new r.KeyboardKeyCode("ArrowUp","ArrowUp"),new r.KeyboardKeyCode("ArrowDown","ArrowDown"),new r.KeyboardKeyCode("Digit0","0"),new r.KeyboardKeyCode("Digit1","1"),new r.KeyboardKeyCode("Digit2","2"),new r.KeyboardKeyCode("Digit3","3"),new r.KeyboardKeyCode("Numpad0","0"),new r.KeyboardKeyCode("Numpad1","1"),new r.KeyboardKeyCode("Numpad2","2"),new r.KeyboardKeyCode("Numpad3","3"),new r.KeyboardKeyCode("Numpad4","4"),new r.KeyboardKeyCode("Numpad5","5"),new r.KeyboardKeyCode("Numpad6","6"),new r.KeyboardKeyCode("Numpad7","7"),new r.KeyboardKeyCode("Numpad8","8"),new r.KeyboardKeyCode("Numpad9","9"),new r.KeyboardKeyCode("F8","F8");const i=r._TooltipPosition,s={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},a={ABORT:"abort",CAN_PLAY:"canplay",CAN_PLAY_THROUGH:"canplaythrough",DURATION_CHANGE:"durationchange",ENDED:"ended",LOADED_METADATA:"loadedmetadata",PAUSE:"pause",PLAY:"play",RATE_CHANGE:"ratechange",TIME_UPDATE:"timeupdate",VOLUME_CHANGE:"volumechange"},l={CLICK:"click",CONTEXTMENU:"contextmenu",DBLCLICK:"dblclick",KEYDOWN:"keydown",LOAD:"load",MESSAGE:"message",MOUSEDOWN:"mousedown",WHEEL:"wheel",toValueArray:function(){return o.EnumHelper.toValueArray(l)}},u={SUCCESS:"success",INFO:"info",CAUTION:"caution",ERROR:"error"},c={DEBUG:"debug",INFO:"info",LOG:"log",WARN:"warn",ERROR:"error"}},356:(e,t,n)=>{n.d(t,{ui:()=>F});var r=n(379),o=n.n(r),i=n(795),s=n.n(i),a=n(569),l=n.n(a),u=n(565),c=n.n(u),d=n(216),p=n.n(d),h=n(589),m=n.n(h),f=n(899),g={};g.styleTagTransform=m(),g.setAttributes=c(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=p(),o()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var y=n(286),w={};w.styleTagTransform=m(),w.setAttributes=c(),w.insert=l().bind(null,"head"),w.domAPI=s(),w.insertStyleElement=p(),o()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var E=n(613),v=n(232),b=n(725);function T(e){return e.ownerDocument.defaultView||e.ownerDocument.parentWindow}function C(e){let t=e.document;return e.scrollY||e.pageYOffset||t.documentElement&&t.documentElement.scrollTop||t.body.scrollTop}function M(e){let t=e.document;return e.scrollX||e.pageXOffset||t.documentElement&&t.documentElement.scrollLeft||t.body.scrollLeft}function x(e){let t={top:0,left:0};if(!e.getClientRects().length)return t;if("none"===window.getComputedStyle(e).display)return t;let n=e.getBoundingClientRect(),r=T(e),o=r.document.documentElement;return{top:n.top+C(r)-(o.clientTop||0),left:n.left+M(r)-(o.clientLeft||0)}}function O(e=window,t=!1){let n,r;if(t)n=e.innerHeight,r=e.innerWidth;else{let t=e.document;"BackCompat"===t.compatMode?(n=t.body.clientHeight,r=t.body.clientWidth):(n=t.documentElement.clientHeight,r=t.documentElement.clientWidth)}return{height:n,width:r}}function S(e,t){let n=t.target.getBoundingClientRect(),r=e.getBoundingClientRect(),o=t.fixed?n:x(t.target),i=o.left+t.left,s=o.top+t.top,a=t.position;a.startsWith("top")?a.endsWith("center")&&(i+=n.width/2-r.width/2):a.startsWith("bottom")?(s+=n.height,a.endsWith("center")&&(i+=n.width/2-r.width/2)):a.startsWith("left")?a.endsWith("center")&&(s+=n.height/2-r.height/2):a.startsWith("right")?(i+=n.width,a.endsWith("center")&&(s+=n.height/2-r.height/2)):a==E.TooltipPosition.CENTER_CENTER&&(i+=n.width/2-r.width/2,s+=n.height/2-r.height/2),a.endsWith("right")?i+=n.width:a.endsWith("bottom")&&(s+=n.height);let l=t.insideX;(l&&a.includes("bottom")||!l&&a.includes("top"))&&(s-=r.height);let u=t.insideY;(u&&a.includes("right")||!u&&a.includes("left"))&&(i-=r.width);let c=O(T(t.target),!1);return t.ensureViewPort&&(i<0?i=0:c.width<Math.round(i+r.width)&&(i=c.width-r.width),s<0?s=0:c.height<Math.round(s+r.height)&&(i=c.height-r.height)),{left:i,top:s}}class A{constructor(e,t,n){this.options=v.D.assignNotUndefined({name:"player-tooltip",target:document.body,type:"info",left:0,top:0,margin:0,arrow:!1,changeMode:0,singleMode:!0,animation:!0,supportShow:!0,autoShow:!0,autoHide:!0,hideTime:1e3,autoRemove:!0,game:!1,callback:function(){},onShow:function(){},onHide:function(){}},{text:e,hideTime:n},t),this.status=0,this.prefix="zw-player-tooltips",this.triggerClass=this.prefix+"-trigger","tip"===this.options.type&&(this.options.autoShow=!1,this.options.autoHide=!1,this.options.autoRemove=!0),this.initialize()}initialize(){this.options.target.classList.add(this.triggerClass),this.options.autoShow&&this.show(),"function"==typeof this.options.callback&&this.options.callback(),"tip"===this.options.type&&this.bindEvents()}bindEvents(){var e=this;this.options.target.addEventListener("mouseenter",(function(){e.options.supportShow&&e.show()})),this.options.target.addEventListener("mouseleave",(function(){e.hide()})),this.options.target.addEventListener("click",(function(t){var n=parseInt(e.options.changeMode+"",10);if(!isNaN(n))switch(n){case 1:{let n;for(n of t.target.parentElement.children)if(n!=t.target)return setTimeout((function(){n.hasClass(e.triggerClass)&&n.is(":visible")&&n.dispatchEvent(new MouseEvent("mouseenter"))}),0),!1;break}case 2:e.hide();break;case 3:e.options.target.dispatchEvent(new MouseEvent("mouseleave")),e.options.target.dispatchEvent(new MouseEvent("mouseenter"))}}))}toggle(e){this.status?this.hide():this.show(e)}show(){var e=this,t=200;"info"===this.options.type&&(t=0),this.status||(clearTimeout(this.timeOut),this.timeOut=window.setTimeout((function(){e.options.singleMode&&e.destroy(!0),e.create(),e.status=1,e.$zwtooltips.classList.add("active"),"function"==typeof e.options.onShow&&e.options.onShow(e),e.options.autoHide&&setTimeout((function(){e.hide()}),e.options.hideTime)}),t))}add(e){"string"==typeof e?e=Object.assign(this.options,{text:e}):"object"==typeof e&&(e=Object.assign(this.options,e));var t=this.template(!1,e);this.$zwtooltips.append(t),this.updatePos(!0)}hide(){this.status=0,clearTimeout(this.timeOut),this.$zwtooltips&&this.$zwtooltips.classList.remove("active"),"function"==typeof this.options.onHide&&this.options.onHide(this),this.options.autoRemove&&this.destroy()}destroy(e){if(clearTimeout(this.timeOut),e){var t=document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]');t&&t.remove()}else this.$zwtooltips&&this.$zwtooltips.remove()}create(){document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]')||(this.$zwtooltips=this.template(!0),this.options.game&&this.$zwtooltips.classList.add("tooltip-game"),this.options.target.append(this.$zwtooltips)),this.$zwtooltips.append(this.template()),this.updatePos()}template(e,t){let n,r,o,i="",s=[];if(r=(t=t||this.options).text||t.target.getAttribute("data-text"),o=t.position||t.target.getAttribute("data-position"),t.changeMode=t.target.getAttribute("data-change-mode")||0,e)s.push(t.type),s.push(o),t.animation&&s.push("animation"),t.fixed&&s.push("fixed"),n=s.join(" "),i=`<div class="${this.prefix} ${n}"  data-tooltip-name="${t.name}"></div>`;else{var a="";t.padding&&(t.padding instanceof Array?a+="padding:"+t.padding.join("px ")+"px;":"number"==typeof t.padding&&(a+="padding:"+t.padding+";")),t.fontSize&&"number"==typeof t.fontSize&&(a+="font-size:"+t.fontSize+"px;"),i=`<div class="zw-tooltip${t.fixed?" fixed":""}" style="`+a+'">'+r+"</div>"}return document.createRange().createContextualFragment(i).firstElementChild}updatePos(){let e,t=this.options,n=this.options.target.getBoundingClientRect(),r=this.$zwtooltips.getBoundingClientRect();switch(t.position||t.target.attr("data-position")){case E.TooltipPosition.TOP_LEFT:e=n.width/2;break;case E.TooltipPosition.TOP_CENTER:e=r.width/2;break;case E.TooltipPosition.TOP_RIGHT:e=r.width-n.width/2;break;case E.TooltipPosition.BOTTOM_LEFT:e=n.width/2;break;case E.TooltipPosition.BOTTOM_CENTER:case E.TooltipPosition.BOTTOM_RIGHT:e=r.width/2}t.arrow&&this.$zwtooltips.insertAdjacentHTML("beforeend",`<div class="arrow" style="left:${e}px;"></div>`);let o=S(this.$zwtooltips,t);this.$zwtooltips.style.top=o.top+"px",this.$zwtooltips.style.left=o.left+"px"}}const F={offset:x,scrollToElement(e){if(!(e&&e instanceof Element))throw new TypeError("Parameter is not an Element");const t=x(e),n=O(T(e),!1),r=e.getBoundingClientRect();e.ownerDocument.documentElement.scrollTo(t.left-(n.width-r.width)/2,t.top-(n.height-r.height)/2)},getViewPortDimension:O,isInputEvent(e){if(!(e instanceof KeyboardEvent))return!1;let t=e.target;return t instanceof Element?"TEXTAREA"==t.tagName.toUpperCase()||"INPUT"==t.tagName.toUpperCase()&&"text"==t.type:e.isComposing||229===e.keyCode},isEventFromThisDoc(e){let t=e.target;return!!t&&(t instanceof Element&&t.ownerDocument==document||t instanceof Document&&t==document)},showTooltip:function(e,t,n=1e3){v.D.isBlank(e)?console.debug("Tooltip is blank"):new A(e,t,n)},showMessage:function(e,t,n=E.MessageLevel.INFO,r=4e3){b.EnumHelper.hasValue(E.MessageLevel,n)||(n=E.MessageLevel.INFO);let o=t.target;if(!o.className&&!o.attributes)throw new Error("[@blink-common/message] 传入 element 不是有效节点.");let i=o.ownerDocument,s=i.createDocumentFragment(),a=i.createElement("div");a.style.whiteSpace="pre",a.innerHTML='<span class="toast-text">'+e+"</span>",a.className="link-toast "+n+" "+(t.fixed?"fixed":""),i.querySelector("div.link-toast")?.remove(),s.appendChild(a),i.body.appendChild(s);let l=S(a,t);a.style.left=l.left+"px",a.style.top=l.top+"px",setTimeout((function(){a.className+=" out",setTimeout((function(){a.parentNode?a.parentNode.removeChild(a):a.remove()}),350)}),r)},downloadBlob:function(e,t){let n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=t,n.click(),URL.revokeObjectURL(n.href)},isFullscreen:()=>!!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement),isFullscreenEnabled:()=>v.D.getFirstTruthyMember(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document),getFullscreenElement(e=!1){var t=v.D.getFirstTruthyMember(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(e)for(;t&&t.shadowRoot;)t=t.shadowRoot.fullscreenElement;return t||null},requestFullscreen(e=document.documentElement){let t;if(e.requestFullscreen)t=e.requestFullscreen();else if(e.webkitRequestFullscreen)t=e.webkitRequestFullscreen();else if(e.mozRequestFullScreen)t=e.mozRequestFullScreen();else if(e.msRequestFullscreen)t=e.msRequestFullscreen();else{if(!e.webkitEnterFullscreen)return Promise.reject(Error("Fullscreen API unavailable"));t=e.webkitEnterFullscreen()}return t instanceof Promise?t:Promise.resolve()},exitFullscreen(){let e;if(document.exitFullscreen)e=document.exitFullscreen();else if(document.webkitExitFullscreen)e=document.webkitExitFullscreen();else if(document.mozCancelFullScreen)e=document.mozCancelFullScreen();else{if(!document.msExitFullscreen)return Promise.reject(Error("Exit fullscreen API unavailable"));e=document.msExitFullscreen()}return e instanceof Promise?e:Promise.resolve()},toggleFullscreen:(e=document.documentElement)=>F.isFullscreen()?F.exitFullscreen(e):F.requestFullscreen(e)}},232:(e,t,n)=>{n.d(t,{D:()=>l});var r=n(903),o=n(882),i=n(613);const s={零:0,一:1,二:2,两:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,百:100,千:1e3,万:1e4,亿:1e8};function a(e,t){t.forEach((t=>{if(!(t instanceof Map))throw new TypeError("Source is not a map");t.forEach(((t,n)=>e.set(n,t)))}))}let l={consoleOutput(e=o.DEFAULT_LOG_GROUP,t=i.ConsoleOutputLevel.DEBUG,...n){console.group(`[${e}]`);let r=[];for(let e=0;e<n.length;e++)r.push(l.isObject(n[e])?JSON.parse(JSON.stringify(n[e])):n[e]);switch(t){case i.ConsoleOutputLevel.DEBUG:console.debug(...r);break;case i.ConsoleOutputLevel.INFO:console.info(...r);break;case i.ConsoleOutputLevel.LOG:console.log(...r);break;case i.ConsoleOutputLevel.WARN:console.warn(...r);break;case i.ConsoleOutputLevel.ERROR:console.error(...r);break;default:console.debug(...r)}console.groupEnd()},get:function(e,t,n){return new Promise(((r,o)=>{let i=new XMLHttpRequest;if(i.responseType=n||"json",i.addEventListener("load",(function(){r(this.response||this.responseText)})),i.addEventListener("error",(function(){o(this)})),i.open("GET",e),t)for(let e in t)i.setRequestHeader(e,t[e]);i.send()}))},post:function(e,t={"Content-Type":"application/x-www-form-urlencoded"},n,r){return new Promise(((o,i)=>{let s=new XMLHttpRequest;s.responseType=r||"json",s.addEventListener("load",(function(){o(this.response||this.responseText)})),s.addEventListener("error",(function(){i(this)})),s.open("POST",e);for(let e in t)s.setRequestHeader(e,t[e]);s.send(n)}))},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let n=0,r=t.length;n<r;n++){let r=t[n].split("=");if(r[0]==e)return decodeURIComponent(r[1])}return""},getQueryParameter:function(e){for(let[t,n]of new URLSearchParams(window.location.search).entries())if(t===e)return n},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(s);for(const n of e)if(!t.includes(n))return!1;return!0},zh2Digits:function(e){if(l.isInteger(e))return parseInt(e);if(!this.isChineseDigits(e))return;let t=0,n=1;for(let r=e.length-1;r>=0;r--){let o=s[e[r]];o>=10&&0==r?o>n?(n=o,t+=o):n*=o:o>=10?o>n?n=o:n*=o:t+=n*o}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!l.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"],n=e.length;return 1==n?t[e]:2==n?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},getFirstTruthyMember:function(e,t){let n;return e.some((e=>(n=t[e],!!n)))?n:void 0},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)||e instanceof Object},isString:function(e){return e instanceof String||"string"==typeof e},isBlank:function(e){return l.isString(e)?""===e.trim():null==e},assignNotUndefined:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((n=>{let r=t[n];void 0!==r&&(e[n]=r)}))})),e},assignNotEmpty:function(e,t,n=!1,r=!1){if(!Array.isArray(t))throw new TypeError("Invalid sources");if(!l.isObject(e))throw new TypeError("Invalid target");return e instanceof Map&&a(e,t),t.forEach((t=>{if(!l.isObject(t))throw new TypeError("Invalid source");Object.keys(t).forEach((o=>{let i=t[o],s=e[o];if(null!=i&&!Object.is(NaN,i))if(Array.isArray(s)){if(!Array.isArray(i))throw new TypeError(`${o} of source is not an array`);r?i.forEach((e=>{s.includes(e)||s.push(e)})):e[o]=i}else if(s instanceof Map)n?a(s,[i]):e[o]=i;else if(l.isObject(s)){if(!l.isObject(i))throw new TypeError(`${o} of source is not an object`);n?l.assignNotEmpty(s,[i],n,r):e[o]=i}else e[o]=i}))})),e},isIterable:function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},isEqual:r._isEqual,formatDate:function(e,t="MM/dd/yyyy hh:mm:ss"){e instanceof Date||(e=new Date(e));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t}}},725:(e,t,n)=>{n.d(t,{EnumHelper:()=>o});var r=n(232);class o{static#r(e){if(!r.D.isObject(e))throw new TypeError("Parameter is not an enum")}static hasValue(e,t){this.#r(e);for(let n in e)if(r.D.isEqual(e[n],t))return!0;return!1}static toValueArray(e,t="string"){this.#r(e);let n=[];for(let r in e)typeof e[r]==t&&n.push(e[r]);return n}}},286:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,'.link-toast {\r\n    position:absolute;\r\n    padding:8px 16px;\r\n    font-size:14px;\r\n    border-radius:8px;\r\n    white-space:pre;\r\n    color:#fff;\r\n    -webkit-animation:link-msg-move-in-top cubic-bezier(.22,.58,.12,.98) .4s;\r\n    animation:link-msg-move-in-top cubic-bezier(.22,.58,.12,.98) .4s;\r\n    z-index:10000;\r\n    pointer-events:none;\r\n\r\n    line-height: 1.15;\r\n    font-family:Arial,"Microsoft YaHei","Microsoft Sans Serif","Microsoft SanSerf","微软雅黑"!important;\r\n}\r\n.link-toast.fixed {\r\n    position:fixed\r\n}\r\n.link-toast.success {\r\n    background-color:#47d279;\r\n    box-shadow:0 .2em .1em .1em rgba(71,210,121,.2)\r\n}\r\n.link-toast.caution {\r\n    background-color:#ffb243;\r\n    box-shadow:0 .2em .1em .1em rgba(255,190,68,.2)\r\n}\r\n.link-toast.error {\r\n    background-color:#ff6464;\r\n    box-shadow:0 .2em 1em .1em rgba(255,100,100,.2)\r\n}\r\n.link-toast.info {\r\n    background-color:#48bbf8;\r\n    box-shadow:0 .2em .1em .1em rgba(72,187,248,.2)\r\n}\r\n.link-toast.out {\r\n    -webkit-animation:link-msg-fade-out cubic-bezier(.22,.58,.12,.98) .4s;\r\n    animation:link-msg-fade-out cubic-bezier(.22,.58,.12,.98) .4s\r\n}\r\n\r\n@-webkit-keyframes link-msg-move-in-top {\r\n    from {\r\n        opacity:0;\r\n        transform:translate(0,5em);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        transform:translate(0,0)\r\n    }\r\n}\r\n@keyframes link-msg-move-in-top {\r\n    from {\r\n        opacity:0;\r\n        transform:translate(0,5em)\r\n    }\r\n    to {\r\n        opacity:1;\r\n        transform:translate(0,0)\r\n    }\r\n}\r\n@-webkit-keyframes link-msg-fade-out {\r\n    from {\r\n        opacity:1\r\n    }\r\n    to {\r\n        opacity:0\r\n    }\r\n}\r\n@keyframes link-msg-fade-out {\r\n    from {\r\n        opacity:1\r\n    }\r\n    to {\r\n        opacity:0\r\n    }\r\n}',""]);const i=o},899:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".zw-player-tooltips {\r\n    position:absolute;\r\n    opacity:0;\r\n    z-index:-1;\r\n    top:-999px;\r\n    cursor:default;\r\n    pointer-events:none;\r\n}\r\n.zw-player-tooltips.fixed {\r\n    position:fixed;\r\n    opacity:0;\r\n    z-index:-1;\r\n    top:-999px;\r\n    cursor:default;\r\n    pointer-events:none;\r\n}\r\n.zw-player-tooltips {\r\n    text-align: left;\r\n    white-space: nowrap;\r\n\r\n    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;\r\n    line-height: 1;\r\n\r\n    color: #222;\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n    font-style: normal;\r\n    \r\n    -webkit-touch-callout:none;\r\n    -webkit-user-select:none;\r\n    -moz-user-select:none;\r\n    -ms-user-select:none;\r\n    user-select:none\r\n}\r\n.zw-player-tooltips.animation {\r\n    -webkit-transition:opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition:opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition:transform .3s ease-in-out,opacity .3s ease-in-out;\r\n    transition:transform .3s ease-in-out,opacity .3s ease-in-out,-webkit-transform .3s ease-in-out\r\n}\r\n.zw-player-tooltips.animation>.arrow,\r\n.zw-player-tooltips.animation>.zw-tooltip {\r\n    -webkit-transition:opacity .3s ease-in-out;\r\n    transition:opacity .3s ease-in-out\r\n}\r\n.zw-player-tooltips.center-center,\r\n.zw-player-tooltips.top-center,\r\n.zw-player-tooltips.top-left,\r\n.zw-player-tooltips.top-right {\r\n    -webkit-transform:translateY(10px);\r\n    transform:translateY(10px)\r\n}\r\n.zw-player-tooltips.bottom-center,\r\n.zw-player-tooltips.bottom-left,\r\n.zw-player-tooltips.bottom-right {\r\n    -webkit-transform:translateY(-10px);\r\n    transform:translateY(-10px)\r\n}\r\n.zw-player-tooltips.left-bottom,\r\n.zw-player-tooltips.left-center,\r\n.zw-player-tooltips.left-top {\r\n    -webkit-transform:translate(10px);\r\n    transform:translate(10px)\r\n}\r\n.zw-player-tooltips.right-bottom,\r\n.zw-player-tooltips.right-center,\r\n.zw-player-tooltips.right-top {\r\n    -webkit-transform:translate(-10px);\r\n    transform:translate(-10px)\r\n}\r\n.zw-player-tooltips.active,\r\n.zw-player-tooltips.center-center.active,\r\n.zw-player-tooltips.top-center.active,\r\n.zw-player-tooltips.top-left.active,\r\n.zw-player-tooltips.top-right.active {\r\n    -webkit-transform:translate(0);\r\n    transform:translate(0);\r\n    z-index:999999;\r\n    opacity:1\r\n}\r\n.zw-player-tooltips.active>.arrow,\r\n.zw-player-tooltips.active>.zw-tooltip {\r\n    opacity:1;\r\n    z-index:98\r\n}\r\n.zw-player-tooltips.tip .arrow {\r\n    position:absolute;\r\n    width:0;\r\n    height:0;\r\n    border:4px solid transparent;\r\n    opacity:1;\r\n    z-index:-1\r\n}\r\n.zw-player-tooltips.tip.top-center .arrow,\r\n.zw-player-tooltips.tip.top-left .arrow,\r\n.zw-player-tooltips.tip.top-right .arrow {\r\n    bottom:-8px;\r\n    margin-left:-4px;\r\n    border-top-color:rgba(0,0,0,.7)\r\n}\r\n.zw-player-tooltips.tip.bottom-center .arrow,\r\n.zw-player-tooltips.tip.bottom-left .arrow,\r\n.zw-player-tooltips.tip.bottom-right .arrow {\r\n    top:-8px;\r\n    margin-left:-4px;\r\n    border-bottom-color:rgba(0,0,0,.7)\r\n}\r\n.zw-player-tooltips>.zw-tooltip {\r\n    background:rgba(0,0,0,.7);\r\n    border-radius:4px;\r\n    color:#fff;\r\n    font-size:12px;\r\n    line-height: normal;\r\n    padding:6px 8px;\r\n    margin-top:5px;\r\n    opacity:0\r\n}\r\n.zw-player-tooltips>.zw-tooltip:first-child {\r\n    margin:0\r\n}\r\n.zw-player-tooltips.zw-tooltip-game>.zw-tooltip {\r\n    background:rgba(0,0,0,.8)\r\n}\r\ndiv.zw-player-tooltips::selection, div.zw-tooltip::selection {\r\n    background: #1890ff;\r\n    color: #fff;\r\n}",""]);const i=o},167:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".mode-fullscreen, .mode-webfullscreen {\r\n    position: fixed !important;\r\n    border-radius: 0;\r\n    z-index: 100000;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    margin: 0 auto !important;\r\n    padding: 0 !important;\r\n}\r\nbody.player-mode-webfullscreen {\r\n    position: fixed !important;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0\r\n}\r\n\r\niframe.player-fullscreen-fix {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    z-index: 100000;\r\n}\r\n\r\n.zw-event-delegate {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 98;\r\n}\r\n.zw-top-overlay {\r\n    z-index: 99 !important;\r\n}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var l=e[a],u=r.base?l[0]+r.base:l[0],c=i[u]||0,d="".concat(u," ").concat(c);i[u]=c+1;var p=n(d),h={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(t[p].references++,t[p].updater(h)):t.push({identifier:d,updater:o(h,r),references:1}),s.push(d)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var l=r(e,o),u=0;u<i.length;u++){var c=n(i[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},719:(e,t,n)=>{n.d(t,{scriptName:()=>o});const r="undefined"==typeof GM_info?{name:"Tampermonkey"}:GM_info.script,o=r&&r.name},235:(e,t,n)=>{n.d(t,{EMOJIS:()=>r});const r={angry:[",,Ծ‸Ծ,,","(╯‵□′)╯︵┻━┻"],happy:["=‿=✧","●ω●","(/ ▽ \\)","(=・ω・=)","(●'◡'●)ﾉ♥","<(▰˘◡˘▰)>","(⁄ ⁄•⁄ω⁄•⁄ ⁄)","(ง,,• ᴗ •,,)ง ✧",">ㅂ<ﾉ ☆"],shock:["Σ( ° △ °|||)︴","┌( ಠ_ಠ)┘","(ﾟДﾟ≡ﾟдﾟ)!?","∑(っ °Д °;)っ"],sad:["＞︿＜","＞△＜","●︿●","(´；ω；`)"],helpless:["◐▽◑","ʅ（´◔౪◔）ʃ","_(:3 」∠)_","_(┐「ε:)_","(°▽°)ﾉ","←◡←","_(•̀ᴗ•́ 」∠ ❀)_","_φ(･ω･` )"],custom:["(`･ω･´)","(^_-)-☆","༼ つ ◕_◕ ༽つ","(☞ﾟヮﾟ)☞","( ͡° ͜ʖ ͡°)","(っ˘ڡ˘ς)","(⌐■_■)","( ͡~ ͜ʖ ͡°)","(╯°□°）╯︵ ┻━┻","(͡•_ ͡• )"]}},70:(e,t,n)=>{n.d(t,{D:()=>a});var r=n(719),o=n(235),i=n(232),s=n(613);const a={debug:function(...e){i.D.consoleOutput(r.scriptName,s.ConsoleOutputLevel.DEBUG,...e)},error:function(...e){i.D.consoleOutput(r.scriptName,s.ConsoleOutputLevel.ERROR,...e)},gmGet:function(e,t,n,r=!1){return new Promise(((o,i)=>{GM_xmlhttpRequest({method:"GET",url:e,headers:t,nocache:r,responseType:n||"json",onload:e=>{o(e.response||e.responseText)},onerror:e=>{i(e)}})}))},gmPost:function(e,t,n,r){return t=t||{"Content-Type":"application/x-www-form-urlencoded"},i.D.isObject(n)&&(n=JSON.stringify(n)),new Promise(((o,i)=>{GM_xmlhttpRequest({method:"POST",url:e,headers:t,data:n,responseType:r||"json",onload:e=>{o("blob"===r?e:e.response||e.responseText)},onerror:e=>{i(e)}})}))},gmOptions:function(e,t,n){return new Promise(((r,o)=>{GM_xmlhttpRequest({method:"OPTIONS",url:e,headers:t,responseType:n||"json",onload:e=>{r(e.response||e.responseText)},onerror:e=>{o(e)}})}))},printReceiveMessage:function(e){a.debug(`>>> From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage:function(e,t){a.debug(`<<< To: ${e}, From: ${window.location.origin}, Message:`,t)},randomEmoji:{}};for(let e in o.EMOJIS)a.randomEmoji[e]=()=>o.EMOJIS[e][Math.floor(Math.random()*o.EMOJIS[e].length)]},378:(e,t,n)=>{n.d(t,{CssCacheHelper:()=>o});var r=n(903);n(70);class o{static#o=new r.LooseMap;constructor(){}static save(e,t,n,o){this.#o.set(new r.Tuple(e,t),new r.ApplyMethodSignature(n,e,o))}static restore(e,t,n=!1){let o=new r.Tuple(e,t),i=this.#o.get(o);return!!i&&(i.fn.apply(i.thisArg,i.args),n&&this.#o.delete(o),!0)}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{n.r(r),n.d(r,{Class:()=>t,Const:()=>e,Enum:()=>o});var e={};n.r(e),n.d(e,{PROGRESS_STORAGE_KEY:()=>s,VOLUME_STORAGE_KEY:()=>i,bodyWebFullscreenClassName:()=>h,containerWebFullscreenClassName:()=>m,eventDelegateClassName:()=>a,eventDelegateSelector:()=>l,iframeFullscreenClassName:()=>u,iframeFullscreenSelector:()=>c,topOverlayClassName:()=>d,topOverlaySelector:()=>p});var t={};n.r(t),n.d(t,{VideoInstance:()=>D,_VideoCustomEventTypes:()=>N});var o={};n.r(o),n.d(o,{VideoCustomEventTypes:()=>K});const i="volume",s="progress",a="zw-event-delegate",l="."+a,u="player-fullscreen-fix",c="."+u,d="zw-top-overlay",p="."+d,h="player-mode-webfullscreen",m="mode-webfullscreen";var f=n(379),g=n.n(f),y=n(795),w=n.n(y),E=n(569),v=n.n(E),b=n(565),T=n.n(b),C=n(216),M=n.n(C),x=n(589),O=n.n(x),S=n(167),A={};A.styleTagTransform=O(),A.setAttributes=T(),A.insert=v().bind(null,"head"),A.domAPI=w(),A.insertStyleElement=M(),g()(S.Z,A),S.Z&&S.Z.locals&&S.Z.locals;var F=n(903),R=n(613),k=n(356),L=n(70),z=n(378),_=n(725);const N={VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",REQUEST_WEBFULLSCREEN:"video_request_webfullscreen",EXIT_WEBFULLSCREEN:"video_exit_webfullscreen"};class P extends F.EventObserverWrapper{#i;static#s=new WeakMap;static#a=new WeakMap;constructor(e){super(e,R.GlobalEvents.toValueArray()),this.#i=e,document.leave(l,(e=>{e.isSameNode(this.#i)&&this.#l()}))}static#u(e,t){if(this.#s.has(e)){let n=this.#s.get(e);n.includes(t)||n.push(t)}else this.#s.set(e,[t])}static#c(e){let t=P.#a;if(t.has(e))return t.get(e);{let n=new P(e);return t.set(e,n),n}}static getInstance(e,t,n,r=[],o){return new Promise(t?e=>{document.arrive(t,{existing:!0,onceOnly:!0},(t=>{let n=t.parentElement.querySelector(l);n||(n=document.createElement("div"),n.classList.add(a),t.after(n),r.forEach((e=>{document.arrive(e,{existing:!0},(function(){this.classList.add(d)}))}))),e(n)}))}:e=>{document.arrive(n,{existing:!0},(function(){e(this)}))}).then((t=>{if(!t)throw new Error("No event delegate");P.#u(t,e);let n=P.#c(t);return o&&n.#d(o),n}))}#d(e=new Map){e.forEach(((e,t)=>{document.arrive(t,{existing:!0},(t=>{e.forEach((e=>{let n;e===R.GlobalEvents.CONTEXTMENU&&(n=n=>{n.preventDefault(),n.stopImmediatePropagation(),t.dispatchEvent(new MouseEvent(e,{bubbles:n.bubbles,clientX:n.clientX,clientY:n.clientY}))}),n&&(this.#i.addEventListener(e,n,!1),this.#i.addEventListener(e,n,!0))}))}))}))}#l(){let e=this.#i;P.#s.delete(e),P.#a.delete(e),e.remove(),this.#i=null,super.clean()}unbindVideo(e){let t=this.#i,n=P.#s.get(t);if(n){let t=n.indexOf(e);t>=0&&n.splice(t,1),0==n.length&&this.#l()}else this.#l()}}class D extends F.EventObserverWrapper{#p;#h;#m;#f;#g;#y(e){if(!e)return null;let t=this.#g;return t.controlsSelector?document.querySelector(t.controlsSelector+" "+e):document.querySelector(t.containerSelector+" "+e)}get#w(){return this.#y(this.#g.playButtonSelector)}get#E(){return this.#y(this.#g.volumeButtonSelector)}get#v(){return this.#y(this.#g.fullscreenButtonSelector)}get#b(){return this.#y(this.#g.webFullscreenButtonSelector)}get#T(){return this.#p.closest(this.#g.containerSelector)}#C;get#M(){return this.#T}static#x=new WeakMap;constructor(e,t,n,r,o){super(e,_.EnumHelper.toValueArray(R.MediaEvents).concat(_.EnumHelper.toValueArray(N))),this.#p=e,this.#g=t,this.#h=n,this.#m=r,this.#f=o}#O(e,t){L.D.debug("CustomEvent:",e,t),this.#p.dispatchEvent(new CustomEvent(e,{bubbles:!1,detail:t}))}#S(){let e=this.#p,t=this.#m;null!=t&&(L.D.debug(`Set init progress(s): ${t}`),e.currentTime=t);let n=this.#f;null!=n&&(L.D.debug(`Set init volume: ${n}`),e.volume=n),this.#O(N.VIDEO_ATTR_INITIALIZED,{volume:n,progress:t})}#A(){this.#S()}async#F(){let e=this.#p;return this.registerVideoEventHandler(R.MediaEvents.PLAY,(()=>{this.showTooltip("播放",R.TooltipPosition.TOP_CENTER,15)}),this),this.registerVideoEventHandler(R.MediaEvents.PAUSE,(()=>{this.showTooltip("暂停",R.TooltipPosition.TOP_CENTER,15)}),this),this.registerVideoEventHandler(R.MediaEvents.VOLUME_CHANGE,(()=>{this.showTooltip((e.muted?"静音":"音量")+Math.round(100*e.volume)+"%")}),this),new Promise((t=>{e.readyState>=R.MediaReadyState.HAVE_METADATA?(this.#A(),t()):this.registerVideoEventHandler(R.MediaEvents.LOADED_METADATA,(()=>{this.#A(),t()}),this)}))}#R(){return this.#F().then((()=>{let e=this.#g,t=e.delegateIgnoreSelectors||[];return this.#g.controlsSelector&&t.push(e.controlsSelector),P.getInstance(this.#p,e.controlsSelector,this.#g.containerSelector,t,e.delegateIgnoreMap).then((e=>{this.#C=e,this.#O(N.VIDEO_READY)}))}))}#k(e=[]){let t=this.#p;t.removeAttribute("autoplay"),t.crossOrigin="anonymous",this.#h&&this.showTooltip(this.#h),e.forEach((e=>{this.registerVideoEventHandler(e.eventType,e.handler,e.thisArg,e.useCapture)}))}#L(e=[],t=[]){this.registerVideoEventHandler(R.MediaEvents.VOLUME_CHANGE,(()=>{this.#f=this.#p.volume}),this),this.registerVideoEventHandler(R.MediaEvents.TIME_UPDATE,(()=>{this.#m=this.#p.currentTime})),e.forEach((e=>{this.registerVideoEventHandler(e.eventType,e.handler,e.thisArg,e.useCapture)})),t.forEach((e=>{this.registerDelegateEventHandler(e.eventType,e.handler,e.thisArg,e.useCapture)}))}static getInstance(e,{title:t,progress:n,volume:r,playerMetadata:o}={},i=[],s=[],a=[]){let l=this.#x.get(e);return l?(l.#k(i),l.#L(s,a),Promise.resolve(l)):(l=new D(e,o,t,n,r),this.#x.set(e,l),l.#k(i),l.#R().then((()=>(l.#L(s,a),l))))}async reload(e,t,n){null!=e&&(this.#h=e),null!=t&&(this.#m=t),null!=n&&(this.#f=n),this.#S(),this.#O(N.VIDEO_READY)}registerVideoEventHandler(e,t,n,r=!1){this.registerEventHandler(e,t,n,r)}registerDelegateEventHandler(e,t,n,r=!1){this.#C.registerEventHandler(e,t,n,r)}showTooltip(e,t,n,r){k.ui.showTooltip(e,new F.PositionOption({target:this.#M,position:t,top:n,left:r}))}changeVolume(e){let t,n=this.#p;t=e>=0?Math.min(n.volume+e,1):Math.max(n.volume+e,0),n.volume=t.toFixed(2)}saveVideoFrame(e=document.title){let t=this.#p,n=t.videoWidth,r=t.videoHeight,o=document.createElement("canvas");o.width=n,o.height=r,o.getContext("2d").drawImage(t,0,0,n,r),o.toBlob((o=>k.ui.downloadBlob(o,`${e}_${n}x${r}_${Math.trunc(t.currentTime)}.png`)))}togglePlay(){this.#w?this.#w.click():this.#p.paused?this.#p.play():this.#p.pause()}toggleMute(){this.#E?this.#E.click():this.#p.muted=!this.#p.muted}isVideoInWebFullScreen(){return document.body.classList.contains(h)}#z(){let e=document.documentElement,t=window.getComputedStyle(e).getPropertyValue("overflow");z.CssCacheHelper.save(e,"overflow",(()=>e.style.overflow=t)),z.CssCacheHelper.save(e,"scroll",HTMLElement.prototype.scrollTo,[e.scrollLeft,e.scrollTop]),document.documentElement.style.overflow="hidden"}#_(){z.CssCacheHelper.restore(document.documentElement,"overflow"),z.CssCacheHelper.restore(document.documentElement,"scroll")}requestWebFullscreen(){this.isVideoInWebFullScreen()||(this.#b?this.#b.click():(this.#z(),this.#T.classList.add(m),document.body.classList.add(h)),this.#O(N.REQUEST_WEBFULLSCREEN))}exitWebFullscreen(){this.isVideoInWebFullScreen()&&(this.#b?this.#b.click():(this.#T.classList.remove(m),document.body.classList.remove(h),this.#_()),this.#O(N.EXIT_WEBFULLSCREEN))}toggleWebFullscreen(){if(k.ui.isFullscreen())return this.exitFullscreen(),this.requestWebFullscreen(),!0;{let e=this.isVideoInWebFullScreen();return this.#b?(this.#b.click(),e?this.#O(N.EXIT_WEBFULLSCREEN):this.#O(N.REQUEST_WEBFULLSCREEN)):e?this.exitWebFullscreen():this.requestWebFullscreen(),!e}}requestFullscreen(e=!0){return k.ui.isFullscreen()?Promise.resolve():e&&this.#v?(this.#v.click(),Promise.resolve()):k.ui.requestFullscreen(this.#T)}exitFullscreen(e=!0){return k.ui.isFullscreen()?e&&this.#v?(this.#v.click(),Promise.resolve()):k.ui.exitFullscreen():Promise.resolve()}toggleFullscreen(){return this.#v?(this.#v.click(),Promise.resolve()):k.ui.isFullscreen()?this.exitFullscreen(!1):this.requestFullscreen(!1)}clean(){this.#C.unbindVideo(this.#p),D.#x.delete(this.#p),this.#p=this.#g=this.#C=null,super.clean()}}const K=N})(),r})()}));