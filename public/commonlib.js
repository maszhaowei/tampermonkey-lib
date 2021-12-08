!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.commonlib=t():e.commonlib=t()}(self,(function(){return(()=>{"use strict";var e={903:(e,t,n)=>{n.r(t),n.d(t,{ApplyMethodSignature:()=>p,Couple:()=>l,EventHandlerWrapper:()=>d,EventObserverWrapper:()=>f,KeyboardKeyCode:()=>s,LooseMap:()=>u,PositionOption:()=>h,Triple:()=>c,Tuple:()=>a,_TooltipPosition:()=>o,_isEqual:()=>i});class r{equals(e){return this===e}}const o={TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",LEFT_TOP:"left-top",LEFT_CENTER:"left-center",LEFT_BOTTOM:"left-bottom",RIGHT_TOP:"right-top",RIGHT_CENTER:"right-center",RIGHT_BOTTOM:"right-bottom",CENTER_CENTER:"center-center"};function i(e,t){if(e instanceof Array){if(!(t instanceof Array)||e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!i(e[n],t[n]))return!1;return!0}return!!Object.is(e,t)||(e instanceof r?e.equals(t):e===t)}class s{code;key;constructor(e,t){this.code=e,this.key=t}}class a extends r{#e;get size(){return this.#e.length}constructor(...e){super(),this.#e=e;for(let t=0;t<e.length;t++)Object.defineProperty(this,t,{configurable:!1,enumerable:!0,writable:!1,value:e[t]})}equals(e){if(!(e instanceof a))return!1;if(this.size!=e.size)return!1;for(let t=0;t<this.size;t++)if(!i(this[t],e[t]))return!1;return!0}}class l extends a{get 0(){return this[0]}get 1(){return this[1]}constructor(e,t){super(e,t)}equals(e){return e instanceof l&&super.equals(e)}}class c extends a{get 0(){return this[0]}get 1(){return this[1]}get 2(){return this[2]}constructor(e,t,n){super(e,t,n)}equals(e){return e instanceof c&&super.equals(e)}}class u extends Map{constructor(){super()}get(e){let t,n=this.entries();for(;!(t=n.next()).done;){let[n,r]=t.value;if(i(n,e))return r}}set(e,t){let n,r=this.keys();for(;!(n=r.next()).done;)if(i(n.value,e))return super.set(n.value,t);super.set(e,t)}has(e){let t,n=this.keys();for(;!(t=n.next()).done;)if(i(t.value,e))return!0;return!1}delete(e){let t,n=this.keys();for(;!(t=n.next()).done;)if(i(t.value,e))return super.delete(t.value)}}class p{context;fn;args;constructor(e,t,n){this.fn=e,this.context=t,this.args=n||[]}}class d{eventType;handler;context;constructor(e,t,n){this.eventType=e,this.handler=t,this.context=n}}class f{#t;#n;#r=new u;#o=new Map;#i=[!0,!1];constructor(e,t){this.#t=e,this.#n=t,this.#i.forEach((e=>{this.#o.set(e,this.#s(e))})),t.forEach((e=>{this.#i.forEach((t=>{this.#t.addEventListener(e,this.#o.get(t),t)}))}))}#s(e){return t=>{let n=this.#r.get(new a(t.type,e));n&&n.forEach((e=>{e.fn.call(e.context,t)}))}}registerEventHandler(e,t,n=!1,r){if(!this.#n.includes(e))throw new Error("Not supported event type: "+e);let o=new p(t,r),i=new a(e,n);this.#r.has(i)?this.#r.get(i).push(o):this.#r.set(i,[o])}unregisterEventHandler(e,t,n=!1){let r=new a(e,n),o=this.#r.get(r);if(o)for(let e=0;e<o.length;e++)t==o[e].fn&&(o.splice(e,1),e--)}clean(){this.#n.forEach((e=>{this.#o.forEach(((t,n)=>{this.#t.removeEventListener(e,t,n)}))})),this.#r.clear(),this.#o.clear(),this.#t=null}}class h{target;position;top;left;insideX;insideY;fixed;ensureViewPort;constructor({target:e,position:t=o.CENTER_CENTER,top:n=0,left:r=0,insideX:i=!0,insideY:s=!0,fixed:a=!0,ensureViewPort:l=!1}){if(!(e instanceof Element))throw new TypeError("target is not an Element");this.target=e,this.position=t,this.top=n,this.left=r,this.insideX=i,this.insideY=s,this.fixed=a,this.ensureViewPort=l}}},882:(e,t,n)=>{n.r(t),n.d(t,{DEFAULT_LOG_GROUP:()=>r});const r="Common"},613:(e,t,n)=>{n.r(t),n.d(t,{KeyboardKeyCodes:()=>i,TooltipPosition:()=>s,MediaReadyState:()=>a,MediaEvents:()=>l,GlobalEvents:()=>c,MessageLevel:()=>u,DocumentReadyState:()=>p,ConsoleOutputLevel:()=>d});var r=n(903),o=n(725);const i={Space:new r.KeyboardKeyCode("Space"," "),Enter:new r.KeyboardKeyCode("Enter","Enter"),Escape:new r.KeyboardKeyCode("Escape","Escape"),KeyC:new r.KeyboardKeyCode("KeyC","c"),KeyD:new r.KeyboardKeyCode("KeyD","d"),KeyF:new r.KeyboardKeyCode("KeyF","f"),KeyG:new r.KeyboardKeyCode("KeyG","g"),KeyI:new r.KeyboardKeyCode("KeyI","i"),KeyQ:new r.KeyboardKeyCode("KeyQ","q"),KeyR:new r.KeyboardKeyCode("KeyR","r"),KeyS:new r.KeyboardKeyCode("KeyS","s"),KeyV:new r.KeyboardKeyCode("KeyV","v"),KeyW:new r.KeyboardKeyCode("KeyW","w"),BracketLeft:new r.KeyboardKeyCode("BracketLeft","["),BracketRight:new r.KeyboardKeyCode("BracketRight","]"),ArrowLeft:new r.KeyboardKeyCode("ArrowLeft","ArrowLeft"),ArrowRight:new r.KeyboardKeyCode("ArrowRight","ArrowRight"),ArrowUp:new r.KeyboardKeyCode("ArrowUp","ArrowUp"),ArrowDown:new r.KeyboardKeyCode("ArrowDown","ArrowDown"),Digit0:new r.KeyboardKeyCode("Digit0","0"),Digit1:new r.KeyboardKeyCode("Digit1","1"),Digit2:new r.KeyboardKeyCode("Digit2","2"),Digit3:new r.KeyboardKeyCode("Digit3","3"),Numpad0:new r.KeyboardKeyCode("Numpad0","0"),Numpad1:new r.KeyboardKeyCode("Numpad1","1"),Numpad2:new r.KeyboardKeyCode("Numpad2","2"),Numpad3:new r.KeyboardKeyCode("Numpad3","3"),Numpad4:new r.KeyboardKeyCode("Numpad4","4"),Numpad5:new r.KeyboardKeyCode("Numpad5","5"),Numpad6:new r.KeyboardKeyCode("Numpad6","6"),Numpad7:new r.KeyboardKeyCode("Numpad7","7"),Numpad8:new r.KeyboardKeyCode("Numpad8","8"),Numpad9:new r.KeyboardKeyCode("Numpad9","9"),F8:new r.KeyboardKeyCode("F8","F8")},s=r._TooltipPosition,a={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},l={ABORT:"abort",CAN_PLAY:"canplay",CAN_PLAY_THROUGH:"canplaythrough",DURATION_CHANGE:"durationchange",ENDED:"ended",LOADED_METADATA:"loadedmetadata",PAUSE:"pause",PLAY:"play",RATE_CHANGE:"ratechange",TIME_UPDATE:"timeupdate",VOLUME_CHANGE:"volumechange"},c={CLICK:"click",CONTEXTMENU:"contextmenu",DBLCLICK:"dblclick",KEYDOWN:"keydown",LOAD:"load",MESSAGE:"message",MOUSEDOWN:"mousedown",WHEEL:"wheel",toValueArray:function(){return o.EnumHelper.toValueArray(c)}},u={SUCCESS:"success",INFO:"info",CAUTION:"caution",ERROR:"error"},p={LOADING:"loading",INTERACTIVE:"interactive",COMPLETE:"complete"},d={DEBUG:"debug",INFO:"info",LOG:"log",WARN:"warn",ERROR:"error"}},356:(e,t,n)=>{n.d(t,{ui:()=>R});var r=n(379),o=n.n(r),i=n(795),s=n.n(i),a=n(569),l=n.n(a),c=n(565),u=n.n(c),p=n(216),d=n.n(p),f=n(589),h=n.n(f),m=n(899),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=d(),o()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var y=n(286),w={};w.styleTagTransform=h(),w.setAttributes=u(),w.insert=l().bind(null,"head"),w.domAPI=s(),w.insertStyleElement=d(),o()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var b=n(613),v=n(232),E=n(725);function T(e){return e.ownerDocument.defaultView||e.ownerDocument.parentWindow}function C(e){let t=e.document;return e.scrollY||e.pageYOffset||t.documentElement&&t.documentElement.scrollTop||t.body.scrollTop}function x(e){let t=e.document;return e.scrollX||e.pageXOffset||t.documentElement&&t.documentElement.scrollLeft||t.body.scrollLeft}function O(e){let t={top:0,left:0};if(!e.getClientRects().length)return t;if("none"===window.getComputedStyle(e).display)return t;let n=e.getBoundingClientRect(),r=T(e),o=r.document.documentElement;return{top:n.top+C(r)-(o.clientTop||0),left:n.left+x(r)-(o.clientLeft||0)}}function A(e=window,t=!1){let n,r;if(t)n=e.innerHeight,r=e.innerWidth;else{let t=e.document;"BackCompat"===t.compatMode?(n=t.body.clientHeight,r=t.body.clientWidth):(n=t.documentElement.clientHeight,r=t.documentElement.clientWidth)}return{height:n,width:r}}function k(e,t){let n=t.target.getBoundingClientRect(),r=e.getBoundingClientRect(),o=t.fixed?n:O(t.target),i=o.left+t.left,s=o.top+t.top,a=t.position;a.startsWith("top")?a.endsWith("center")&&(i+=n.width/2-r.width/2):a.startsWith("bottom")?(s+=n.height,a.endsWith("center")&&(i+=n.width/2-r.width/2)):a.startsWith("left")?a.endsWith("center")&&(s+=n.height/2-r.height/2):a.startsWith("right")?(i+=n.width,a.endsWith("center")&&(s+=n.height/2-r.height/2)):a==b.TooltipPosition.CENTER_CENTER&&(i+=n.width/2-r.width/2,s+=n.height/2-r.height/2),a.endsWith("right")?i+=n.width:a.endsWith("bottom")&&(s+=n.height);let l=t.insideX;(l&&a.includes("bottom")||!l&&a.includes("top"))&&(s-=r.height);let c=t.insideY;(c&&a.includes("right")||!c&&a.includes("left"))&&(i-=r.width);let u=A(T(t.target),!1);return t.ensureViewPort&&(i<0?i=0:u.width<Math.round(i+r.width)&&(i=u.width-r.width),s<0?s=0:u.height<Math.round(s+r.height)&&(i=u.height-r.height)),{left:i,top:s}}class K{constructor(e,t,n){this.options=v.D.assignNotUndefined({name:"player-tooltip",target:document.body,type:"info",left:0,top:0,margin:0,arrow:!1,changeMode:0,singleMode:!0,animation:!0,supportShow:!0,autoShow:!0,autoHide:!0,hideTime:1e3,autoRemove:!0,game:!1,callback:function(){},onShow:function(){},onHide:function(){}},{text:e,hideTime:n},t),this.status=0,this.prefix="zw-player-tooltips",this.triggerClass=this.prefix+"-trigger","tip"===this.options.type&&(this.options.autoShow=!1,this.options.autoHide=!1,this.options.autoRemove=!0),this.initialize()}initialize(){this.options.target.classList.add(this.triggerClass),this.options.autoShow&&this.show(),"function"==typeof this.options.callback&&this.options.callback(),"tip"===this.options.type&&this.bindEvents()}bindEvents(){var e=this;this.options.target.addEventListener("mouseenter",(function(){e.options.supportShow&&e.show()})),this.options.target.addEventListener("mouseleave",(function(){e.hide()})),this.options.target.addEventListener("click",(function(t){var n=parseInt(e.options.changeMode+"",10);if(!isNaN(n))switch(n){case 1:{let n;for(n of t.target.parentElement.children)if(n!=t.target)return setTimeout((function(){n.hasClass(e.triggerClass)&&n.is(":visible")&&n.dispatchEvent(new MouseEvent("mouseenter"))}),0),!1;break}case 2:e.hide();break;case 3:e.options.target.dispatchEvent(new MouseEvent("mouseleave")),e.options.target.dispatchEvent(new MouseEvent("mouseenter"))}}))}toggle(e){this.status?this.hide():this.show(e)}show(){var e=this,t=200;"info"===this.options.type&&(t=0),this.status||(clearTimeout(this.timeOut),this.timeOut=window.setTimeout((function(){e.options.singleMode&&e.destroy(!0),e.create(),e.status=1,e.$zwtooltips.classList.add("active"),"function"==typeof e.options.onShow&&e.options.onShow(e),e.options.autoHide&&setTimeout((function(){e.hide()}),e.options.hideTime)}),t))}add(e){"string"==typeof e?e=Object.assign(this.options,{text:e}):"object"==typeof e&&(e=Object.assign(this.options,e));var t=this.template(!1,e);this.$zwtooltips.append(t),this.updatePos(!0)}hide(){this.status=0,clearTimeout(this.timeOut),this.$zwtooltips&&this.$zwtooltips.classList.remove("active"),"function"==typeof this.options.onHide&&this.options.onHide(this),this.options.autoRemove&&this.destroy()}destroy(e){if(clearTimeout(this.timeOut),e){var t=document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]');t&&t.remove()}else this.$zwtooltips&&this.$zwtooltips.remove()}create(){document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]')||(this.$zwtooltips=this.template(!0),this.options.game&&this.$zwtooltips.classList.add("tooltip-game"),this.options.target.append(this.$zwtooltips)),this.$zwtooltips.append(this.template()),this.updatePos()}template(e,t){let n,r,o,i="",s=[];if(r=(t=t||this.options).text||t.target.getAttribute("data-text"),o=t.position||t.target.getAttribute("data-position"),t.changeMode=t.target.getAttribute("data-change-mode")||0,e)s.push(t.type),s.push(o),t.animation&&s.push("animation"),t.fixed&&s.push("fixed"),n=s.join(" "),i=`<div class="${this.prefix} ${n}"  data-tooltip-name="${t.name}"></div>`;else{var a="";t.padding&&(t.padding instanceof Array?a+="padding:"+t.padding.join("px ")+"px;":"number"==typeof t.padding&&(a+="padding:"+t.padding+";")),t.fontSize&&"number"==typeof t.fontSize&&(a+="font-size:"+t.fontSize+"px;"),i=`<div class="zw-tooltip${t.fixed?" fixed":""}" style="`+a+'">'+r+"</div>"}return document.createRange().createContextualFragment(i).firstElementChild}updatePos(){let e,t=this.options,n=this.options.target.getBoundingClientRect(),r=this.$zwtooltips.getBoundingClientRect();switch(t.position||t.target.attr("data-position")){case b.TooltipPosition.TOP_LEFT:e=n.width/2;break;case b.TooltipPosition.TOP_CENTER:e=r.width/2;break;case b.TooltipPosition.TOP_RIGHT:e=r.width-n.width/2;break;case b.TooltipPosition.BOTTOM_LEFT:e=n.width/2;break;case b.TooltipPosition.BOTTOM_CENTER:case b.TooltipPosition.BOTTOM_RIGHT:e=r.width/2}t.arrow&&this.$zwtooltips.insertAdjacentHTML("beforeend",`<div class="arrow" style="left:${e}px;"></div>`);let o=k(this.$zwtooltips,t);this.$zwtooltips.style.top=o.top+"px",this.$zwtooltips.style.left=o.left+"px"}}const R={offset:O,scrollToElement(e){if(!(e&&e instanceof Element))throw new TypeError("Parameter is not an Element");const t=O(e),n=A(T(e),!1),r=e.getBoundingClientRect();e.ownerDocument.documentElement.scrollTo(t.left-(n.width-r.width)/2,t.top-(n.height-r.height)/2)},getViewPortDimension:A,isInputEvent(e){if(!(e instanceof KeyboardEvent))return!1;let t=e.target;return t instanceof Element?"TEXTAREA"==t.tagName.toUpperCase()||"INPUT"==t.tagName.toUpperCase()&&"text"==t.type:e.isComposing||229===e.keyCode},isEventFromThisDoc(e){let t=e.target;return!!t&&(t instanceof Element&&t.ownerDocument==document||t instanceof Document&&t==document)},showTooltip:function(e,t,n=1e3){v.D.isBlank(e)?console.debug("Tooltip is blank"):new K(e,t,n)},showMessage:function(e,t,n=b.MessageLevel.INFO,r=4e3){E.EnumHelper.hasValue(b.MessageLevel,n)||(n=b.MessageLevel.INFO);let o=t.target;if(!o.className&&!o.attributes)throw new Error("[@blink-common/message] 传入 element 不是有效节点.");let i=o.ownerDocument,s=i.createDocumentFragment(),a=i.createElement("div");a.style.whiteSpace="pre",a.innerHTML='<span class="toast-text">'+e+"</span>",a.className="link-toast "+n+" "+(t.fixed?"fixed":""),i.querySelector("div.link-toast")?.remove(),s.appendChild(a),i.body.appendChild(s);let l=k(a,t);a.style.left=l.left+"px",a.style.top=l.top+"px",setTimeout((function(){a.className+=" out",setTimeout((function(){a.parentNode?a.parentNode.removeChild(a):a.remove()}),350)}),r)},downloadBlob:function(e,t){let n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=t,n.click(),URL.revokeObjectURL(n.href)},isFullscreen:()=>!!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement),isFullscreenEnabled:()=>v.D.getFirstTruthyMember(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document),getFullscreenElement(e=!1){var t=v.D.getFirstTruthyMember(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(e)for(;t&&t.shadowRoot;)t=t.shadowRoot.fullscreenElement;return t||null},requestFullscreen(e=document.documentElement){let t;if(e.requestFullscreen)t=e.requestFullscreen();else if(e.webkitRequestFullscreen)t=e.webkitRequestFullscreen();else if(e.mozRequestFullScreen)t=e.mozRequestFullScreen();else if(e.msRequestFullscreen)t=e.msRequestFullscreen();else{if(!e.webkitEnterFullscreen)return Promise.reject(Error("Fullscreen API unavailable"));t=e.webkitEnterFullscreen()}return t instanceof Promise?t:Promise.resolve()},exitFullscreen(){let e;if(document.exitFullscreen)e=document.exitFullscreen();else if(document.webkitExitFullscreen)e=document.webkitExitFullscreen();else if(document.mozCancelFullScreen)e=document.mozCancelFullScreen();else{if(!document.msExitFullscreen)return Promise.reject(Error("Exit fullscreen API unavailable"));e=document.msExitFullscreen()}return e instanceof Promise?e:Promise.resolve()},toggleFullscreen:(e=document.documentElement)=>R.isFullscreen()?R.exitFullscreen(e):R.requestFullscreen(e)}},232:(e,t,n)=>{n.d(t,{D:()=>l});var r=n(903),o=n(882),i=n(613);const s={零:0,一:1,二:2,两:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,百:100,千:1e3,万:1e4,亿:1e8};function a(e,t){t.forEach((t=>{if(!(t instanceof Map))throw new TypeError("Source is not a map");t.forEach(((t,n)=>e.set(n,t)))}))}let l={consoleOutput(e=o.DEFAULT_LOG_GROUP,t=i.ConsoleOutputLevel.DEBUG,...n){console.group(`[${e}]`);let r=[];for(let e=0;e<n.length;e++)r.push(l.isObject(n[e])?JSON.parse(JSON.stringify(n[e])):n[e]);switch(t){case i.ConsoleOutputLevel.DEBUG:console.debug(...r);break;case i.ConsoleOutputLevel.INFO:console.info(...r);break;case i.ConsoleOutputLevel.LOG:console.log(...r);break;case i.ConsoleOutputLevel.WARN:console.warn(...r);break;case i.ConsoleOutputLevel.ERROR:console.error(...r);break;default:console.debug(...r)}console.groupEnd()},get:function(e,t,n){return new Promise(((r,o)=>{let i=new XMLHttpRequest;if(i.responseType=n||"json",i.addEventListener("load",(function(){r(this.response||this.responseText)})),i.addEventListener("error",(function(){o(this)})),i.open("GET",e),t)for(let e in t)i.setRequestHeader(e,t[e]);i.send()}))},post:function(e,t={"Content-Type":"application/x-www-form-urlencoded"},n,r){return new Promise(((o,i)=>{let s=new XMLHttpRequest;s.responseType=r||"json",s.addEventListener("load",(function(){o(this.response||this.responseText)})),s.addEventListener("error",(function(){i(this)})),s.open("POST",e);for(let e in t)s.setRequestHeader(e,t[e]);s.send(n)}))},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let n=0,r=t.length;n<r;n++){let r=t[n].split("=");if(r[0]==e)return decodeURIComponent(r[1])}return""},getQueryParameter:function(e){for(let[t,n]of new URLSearchParams(window.location.search).entries())if(t===e)return n},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(s);for(const n of e)if(!t.includes(n))return!1;return!0},zh2Digits:function(e){if(l.isInteger(e))return parseInt(e);if(!this.isChineseDigits(e))return;let t=0,n=1;for(let r=e.length-1;r>=0;r--){let o=s[e[r]];o>=10&&0==r?o>n?(n=o,t+=o):n*=o:o>=10?o>n?n=o:n*=o:t+=n*o}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!l.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"],n=e.length;return 1==n?t[e]:2==n?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},getFirstTruthyMember:function(e,t){let n;return e.some((e=>(n=t[e],!!n)))?n:void 0},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)||e instanceof Object},isString:function(e){return e instanceof String||"string"==typeof e},isBlank:function(e){return l.isString(e)?""===e.trim():null==e},assignNotUndefined:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((n=>{let r=t[n];void 0!==r&&(e[n]=r)}))})),e},assignNotEmpty:function(e,t,n=!1,r=!1){if(!Array.isArray(t))throw new TypeError("Invalid sources");if(!l.isObject(e))throw new TypeError("Invalid target");return e instanceof Map&&a(e,t),t.forEach((t=>{if(!l.isObject(t))throw new TypeError("Invalid source");Object.keys(t).forEach((o=>{let i=t[o],s=e[o];if(null!=i&&!Object.is(NaN,i))if(Array.isArray(s)){if(!Array.isArray(i))throw new TypeError(`${o} of source is not an array`);r?i.forEach((e=>{s.includes(e)||s.push(e)})):e[o]=i}else if(s instanceof Map)n?a(s,[i]):e[o]=i;else if(l.isObject(s)){if(!l.isObject(i))throw new TypeError(`${o} of source is not an object`);n?l.assignNotEmpty(s,[i],n,r):e[o]=i}else e[o]=i}))})),e},isIterable:function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},isEqual:r._isEqual,formatDate:function(e,t="MM/dd/yyyy hh:mm:ss"){e instanceof Date||(e=new Date(e));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t}}},725:(e,t,n)=>{n.r(t),n.d(t,{UUID:()=>o,EnumHelper:()=>i});var r=n(232),o=n(614);class i{static#a(e){if(!r.D.isObject(e))throw new TypeError("Parameter is not an enum")}static hasValue(e,t){this.#a(e);for(let n in e)if(r.D.isEqual(e[n],t))return!0;return!1}static toValueArray(e,t="string"){this.#a(e);let n=[];for(let r in e)typeof e[r]==t&&n.push(e[r]);return n}}},286:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,'.link-toast {\r\n    position:absolute;\r\n    padding:8px 16px;\r\n    font-size:14px;\r\n    border-radius:8px;\r\n    white-space:pre;\r\n    color:#fff;\r\n    -webkit-animation:link-msg-move-in-top cubic-bezier(.22,.58,.12,.98) .4s;\r\n    animation:link-msg-move-in-top cubic-bezier(.22,.58,.12,.98) .4s;\r\n    z-index:10000;\r\n    pointer-events:none;\r\n\r\n    line-height: 1.15;\r\n    font-family:Arial,"Microsoft YaHei","Microsoft Sans Serif","Microsoft SanSerf","微软雅黑"!important;\r\n}\r\n.link-toast.fixed {\r\n    position:fixed\r\n}\r\n.link-toast.success {\r\n    background-color:#47d279;\r\n    box-shadow:0 .2em .1em .1em rgba(71,210,121,.2)\r\n}\r\n.link-toast.caution {\r\n    background-color:#ffb243;\r\n    box-shadow:0 .2em .1em .1em rgba(255,190,68,.2)\r\n}\r\n.link-toast.error {\r\n    background-color:#ff6464;\r\n    box-shadow:0 .2em 1em .1em rgba(255,100,100,.2)\r\n}\r\n.link-toast.info {\r\n    background-color:#48bbf8;\r\n    box-shadow:0 .2em .1em .1em rgba(72,187,248,.2)\r\n}\r\n.link-toast.out {\r\n    -webkit-animation:link-msg-fade-out cubic-bezier(.22,.58,.12,.98) .4s;\r\n    animation:link-msg-fade-out cubic-bezier(.22,.58,.12,.98) .4s\r\n}\r\n\r\n@-webkit-keyframes link-msg-move-in-top {\r\n    from {\r\n        opacity:0;\r\n        transform:translate(0,5em);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        transform:translate(0,0)\r\n    }\r\n}\r\n@keyframes link-msg-move-in-top {\r\n    from {\r\n        opacity:0;\r\n        transform:translate(0,5em)\r\n    }\r\n    to {\r\n        opacity:1;\r\n        transform:translate(0,0)\r\n    }\r\n}\r\n@-webkit-keyframes link-msg-fade-out {\r\n    from {\r\n        opacity:1\r\n    }\r\n    to {\r\n        opacity:0\r\n    }\r\n}\r\n@keyframes link-msg-fade-out {\r\n    from {\r\n        opacity:1\r\n    }\r\n    to {\r\n        opacity:0\r\n    }\r\n}',""]);const i=o},899:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".zw-player-tooltips {\r\n    position:absolute;\r\n    opacity:0;\r\n    z-index:-1;\r\n    top:-999px;\r\n    cursor:default;\r\n    pointer-events:none;\r\n}\r\n.zw-player-tooltips.fixed {\r\n    position:fixed;\r\n    opacity:0;\r\n    z-index:-1;\r\n    top:-999px;\r\n    cursor:default;\r\n    pointer-events:none;\r\n}\r\n.zw-player-tooltips {\r\n    text-align: left;\r\n    white-space: nowrap;\r\n\r\n    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;\r\n    line-height: 1;\r\n\r\n    color: #222;\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n    font-style: normal;\r\n    \r\n    -webkit-touch-callout:none;\r\n    -webkit-user-select:none;\r\n    -moz-user-select:none;\r\n    -ms-user-select:none;\r\n    user-select:none\r\n}\r\n.zw-player-tooltips.animation {\r\n    -webkit-transition:opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition:opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition:transform .3s ease-in-out,opacity .3s ease-in-out;\r\n    transition:transform .3s ease-in-out,opacity .3s ease-in-out,-webkit-transform .3s ease-in-out\r\n}\r\n.zw-player-tooltips.animation>.arrow,\r\n.zw-player-tooltips.animation>.zw-tooltip {\r\n    -webkit-transition:opacity .3s ease-in-out;\r\n    transition:opacity .3s ease-in-out\r\n}\r\n.zw-player-tooltips.center-center,\r\n.zw-player-tooltips.top-center,\r\n.zw-player-tooltips.top-left,\r\n.zw-player-tooltips.top-right {\r\n    -webkit-transform:translateY(10px);\r\n    transform:translateY(10px)\r\n}\r\n.zw-player-tooltips.bottom-center,\r\n.zw-player-tooltips.bottom-left,\r\n.zw-player-tooltips.bottom-right {\r\n    -webkit-transform:translateY(-10px);\r\n    transform:translateY(-10px)\r\n}\r\n.zw-player-tooltips.left-bottom,\r\n.zw-player-tooltips.left-center,\r\n.zw-player-tooltips.left-top {\r\n    -webkit-transform:translate(10px);\r\n    transform:translate(10px)\r\n}\r\n.zw-player-tooltips.right-bottom,\r\n.zw-player-tooltips.right-center,\r\n.zw-player-tooltips.right-top {\r\n    -webkit-transform:translate(-10px);\r\n    transform:translate(-10px)\r\n}\r\n.zw-player-tooltips.active,\r\n.zw-player-tooltips.center-center.active,\r\n.zw-player-tooltips.top-center.active,\r\n.zw-player-tooltips.top-left.active,\r\n.zw-player-tooltips.top-right.active {\r\n    -webkit-transform:translate(0);\r\n    transform:translate(0);\r\n    z-index:999999;\r\n    opacity:1\r\n}\r\n.zw-player-tooltips.active>.arrow,\r\n.zw-player-tooltips.active>.zw-tooltip {\r\n    opacity:1;\r\n    z-index:98\r\n}\r\n.zw-player-tooltips.tip .arrow {\r\n    position:absolute;\r\n    width:0;\r\n    height:0;\r\n    border:4px solid transparent;\r\n    opacity:1;\r\n    z-index:-1\r\n}\r\n.zw-player-tooltips.tip.top-center .arrow,\r\n.zw-player-tooltips.tip.top-left .arrow,\r\n.zw-player-tooltips.tip.top-right .arrow {\r\n    bottom:-8px;\r\n    margin-left:-4px;\r\n    border-top-color:rgba(0,0,0,.7)\r\n}\r\n.zw-player-tooltips.tip.bottom-center .arrow,\r\n.zw-player-tooltips.tip.bottom-left .arrow,\r\n.zw-player-tooltips.tip.bottom-right .arrow {\r\n    top:-8px;\r\n    margin-left:-4px;\r\n    border-bottom-color:rgba(0,0,0,.7)\r\n}\r\n.zw-player-tooltips>.zw-tooltip {\r\n    background:rgba(0,0,0,.7);\r\n    border-radius:4px;\r\n    color:#fff;\r\n    font-size:12px;\r\n    line-height: normal;\r\n    padding:6px 8px;\r\n    margin-top:5px;\r\n    opacity:0\r\n}\r\n.zw-player-tooltips>.zw-tooltip:first-child {\r\n    margin:0\r\n}\r\n.zw-player-tooltips.zw-tooltip-game>.zw-tooltip {\r\n    background:rgba(0,0,0,.8)\r\n}\r\ndiv.zw-player-tooltips::selection, div.zw-tooltip::selection {\r\n    background: #1890ff;\r\n    color: #fff;\r\n}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var l=e[a],c=r.base?l[0]+r.base:l[0],u=i[c]||0,p="".concat(c," ").concat(u);i[c]=u+1;var d=n(p),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==d?(t[d].references++,t[d].updater(f)):t.push({identifier:p,updater:o(f,r),references:1}),s.push(p)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var l=r(e,o),c=0;c<i.length;c++){var u=n(i[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},614:(e,t,n)=>{var r;n.r(t),n.d(t,{NIL:()=>z,parse:()=>g,stringify:()=>u,v1:()=>m,v3:()=>O,v4:()=>A,v5:()=>R,validate:()=>a,version:()=>N});var o=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a=function(e){return"string"==typeof e&&s.test(e)};for(var l=[],c=0;c<256;++c)l.push((c+256).toString(16).substr(1));const u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n};var p,d,f=0,h=0;const m=function(e,t,n){var r=t&&n||0,o=t||new Array(16),s=(e=e||{}).node||p,a=void 0!==e.clockseq?e.clockseq:d;if(null==s||null==a){var l=e.random||(e.rng||i)();null==s&&(s=p=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==a&&(a=d=16383&(l[6]<<8|l[7]))}var c=void 0!==e.msecs?e.msecs:Date.now(),m=void 0!==e.nsecs?e.nsecs:h+1,g=c-f+(m-h)/1e4;if(g<0&&void 0===e.clockseq&&(a=a+1&16383),(g<0||c>f)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");f=c,h=m,d=a;var y=(1e4*(268435455&(c+=122192928e5))+m)%4294967296;o[r++]=y>>>24&255,o[r++]=y>>>16&255,o[r++]=y>>>8&255,o[r++]=255&y;var w=c/4294967296*1e4&268435455;o[r++]=w>>>8&255,o[r++]=255&w,o[r++]=w>>>24&15|16,o[r++]=w>>>16&255,o[r++]=a>>>8|128,o[r++]=255&a;for(var b=0;b<6;++b)o[r+b]=s[b];return t||u(o)},g=function(e){if(!a(e))throw TypeError("Invalid UUID");var t,n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};function y(e,t,n){function r(e,r,o,i){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof r&&(r=g(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var s=new Uint8Array(16+e.length);if(s.set(r),s.set(e,r.length),(s=n(s))[6]=15&s[6]|t,s[8]=63&s[8]|128,o){i=i||0;for(var a=0;a<16;++a)o[i+a]=s[a];return o}return u(s)}try{r.name=e}catch(e){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function w(e){return 14+(e+64>>>9<<4)+1}function b(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function v(e,t,n,r,o,i){return b((s=b(b(t,e),b(r,i)))<<(a=o)|s>>>32-a,n);var s,a}function E(e,t,n,r,o,i,s){return v(t&n|~t&r,e,t,o,i,s)}function T(e,t,n,r,o,i,s){return v(t&r|n&~r,e,t,o,i,s)}function C(e,t,n,r,o,i,s){return v(t^n^r,e,t,o,i,s)}function x(e,t,n,r,o,i,s){return v(n^(t|~r),e,t,o,i,s)}const O=y("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){for(var t=[],n=32*e.length,r="0123456789abcdef",o=0;o<n;o+=8){var i=e[o>>5]>>>o%32&255,s=parseInt(r.charAt(i>>>4&15)+r.charAt(15&i),16);t.push(s)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[w(t)-1]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,s=0;s<e.length;s+=16){var a=n,l=r,c=o,u=i;n=E(n,r,o,i,e[s],7,-680876936),i=E(i,n,r,o,e[s+1],12,-389564586),o=E(o,i,n,r,e[s+2],17,606105819),r=E(r,o,i,n,e[s+3],22,-1044525330),n=E(n,r,o,i,e[s+4],7,-176418897),i=E(i,n,r,o,e[s+5],12,1200080426),o=E(o,i,n,r,e[s+6],17,-1473231341),r=E(r,o,i,n,e[s+7],22,-45705983),n=E(n,r,o,i,e[s+8],7,1770035416),i=E(i,n,r,o,e[s+9],12,-1958414417),o=E(o,i,n,r,e[s+10],17,-42063),r=E(r,o,i,n,e[s+11],22,-1990404162),n=E(n,r,o,i,e[s+12],7,1804603682),i=E(i,n,r,o,e[s+13],12,-40341101),o=E(o,i,n,r,e[s+14],17,-1502002290),n=T(n,r=E(r,o,i,n,e[s+15],22,1236535329),o,i,e[s+1],5,-165796510),i=T(i,n,r,o,e[s+6],9,-1069501632),o=T(o,i,n,r,e[s+11],14,643717713),r=T(r,o,i,n,e[s],20,-373897302),n=T(n,r,o,i,e[s+5],5,-701558691),i=T(i,n,r,o,e[s+10],9,38016083),o=T(o,i,n,r,e[s+15],14,-660478335),r=T(r,o,i,n,e[s+4],20,-405537848),n=T(n,r,o,i,e[s+9],5,568446438),i=T(i,n,r,o,e[s+14],9,-1019803690),o=T(o,i,n,r,e[s+3],14,-187363961),r=T(r,o,i,n,e[s+8],20,1163531501),n=T(n,r,o,i,e[s+13],5,-1444681467),i=T(i,n,r,o,e[s+2],9,-51403784),o=T(o,i,n,r,e[s+7],14,1735328473),n=C(n,r=T(r,o,i,n,e[s+12],20,-1926607734),o,i,e[s+5],4,-378558),i=C(i,n,r,o,e[s+8],11,-2022574463),o=C(o,i,n,r,e[s+11],16,1839030562),r=C(r,o,i,n,e[s+14],23,-35309556),n=C(n,r,o,i,e[s+1],4,-1530992060),i=C(i,n,r,o,e[s+4],11,1272893353),o=C(o,i,n,r,e[s+7],16,-155497632),r=C(r,o,i,n,e[s+10],23,-1094730640),n=C(n,r,o,i,e[s+13],4,681279174),i=C(i,n,r,o,e[s],11,-358537222),o=C(o,i,n,r,e[s+3],16,-722521979),r=C(r,o,i,n,e[s+6],23,76029189),n=C(n,r,o,i,e[s+9],4,-640364487),i=C(i,n,r,o,e[s+12],11,-421815835),o=C(o,i,n,r,e[s+15],16,530742520),n=x(n,r=C(r,o,i,n,e[s+2],23,-995338651),o,i,e[s],6,-198630844),i=x(i,n,r,o,e[s+7],10,1126891415),o=x(o,i,n,r,e[s+14],15,-1416354905),r=x(r,o,i,n,e[s+5],21,-57434055),n=x(n,r,o,i,e[s+12],6,1700485571),i=x(i,n,r,o,e[s+3],10,-1894986606),o=x(o,i,n,r,e[s+10],15,-1051523),r=x(r,o,i,n,e[s+1],21,-2054922799),n=x(n,r,o,i,e[s+8],6,1873313359),i=x(i,n,r,o,e[s+15],10,-30611744),o=x(o,i,n,r,e[s+6],15,-1560198380),r=x(r,o,i,n,e[s+13],21,1309151649),n=x(n,r,o,i,e[s+4],6,-145523070),i=x(i,n,r,o,e[s+11],10,-1120210379),o=x(o,i,n,r,e[s+2],15,718787259),r=x(r,o,i,n,e[s+9],21,-343485551),n=b(n,a),r=b(r,l),o=b(o,c),i=b(i,u)}return[n,r,o,i]}(function(e){if(0===e.length)return[];for(var t=8*e.length,n=new Uint32Array(w(t)),r=0;r<t;r+=8)n[r>>5]|=(255&e[r/8])<<r%32;return n}(e),8*e.length))})),A=function(e,t,n){var r=(e=e||{}).random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return u(r)};function k(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function K(e,t){return e<<t|e>>>32-t}const R=y("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var r=unescape(encodeURIComponent(e));e=[];for(var o=0;o<r.length;++o)e.push(r.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var i=e.length/4+2,s=Math.ceil(i/16),a=new Array(s),l=0;l<s;++l){for(var c=new Uint32Array(16),u=0;u<16;++u)c[u]=e[64*l+4*u]<<24|e[64*l+4*u+1]<<16|e[64*l+4*u+2]<<8|e[64*l+4*u+3];a[l]=c}a[s-1][14]=8*(e.length-1)/Math.pow(2,32),a[s-1][14]=Math.floor(a[s-1][14]),a[s-1][15]=8*(e.length-1)&4294967295;for(var p=0;p<s;++p){for(var d=new Uint32Array(80),f=0;f<16;++f)d[f]=a[p][f];for(var h=16;h<80;++h)d[h]=K(d[h-3]^d[h-8]^d[h-14]^d[h-16],1);for(var m=n[0],g=n[1],y=n[2],w=n[3],b=n[4],v=0;v<80;++v){var E=Math.floor(v/20),T=K(m,5)+k(E,g,y,w)+b+t[E]+d[v]>>>0;b=w,w=y,y=K(g,30)>>>0,g=m,m=T}n[0]=n[0]+m>>>0,n[1]=n[1]+g>>>0,n[2]=n[2]+y>>>0,n[3]=n[3]+w>>>0,n[4]=n[4]+b>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),z="00000000-0000-0000-0000-000000000000",N=function(e){if(!a(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{n.r(r),n.d(r,{Const:()=>e,Class:()=>t,Enum:()=>o,util:()=>i.D,ui:()=>s.ui,Utils:()=>a});var e=n(882),t=n(903),o=n(613),i=n(232),s=n(356),a=n(725)})(),r})()}));