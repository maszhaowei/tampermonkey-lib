!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.playerlib=t():e.playerlib=t()}(self,(function(){return(()=>{"use strict";var e={941:(e,t,n)=>{n.d(t,{KeyboardKeyCode:()=>i,TooltipOption:()=>o});class i{code;key;constructor(e,t){this.code=e,this.key=t}}new WeakMap;class o{name="player-tooltip";target=document.body;type="info";position;left=0;top=0;margin=0;arrow=!1;changeMode=0;singleMode=!0;animation=!0;supportShow=!0;autoShow=!0;autoHide=!0;hideTime=1e3;autoRemove=!0;game=!1;callback;onShow;onHide;constructor(e,t,n,i){this.text=e,this.target=t||document.body,this.position=n||"center-center",this.margin=i??0}}},613:(e,t,n)=>{n.d(t,{TooltipPosition:()=>o,MediaReadyState:()=>r,MediaEvents:()=>s,GlobalEvents:()=>l});var i=n(941);new i.KeyboardKeyCode("Space"," "),new i.KeyboardKeyCode("Enter","Enter"),new i.KeyboardKeyCode("Escape","Escape"),new i.KeyboardKeyCode("KeyC","c"),new i.KeyboardKeyCode("KeyD","d"),new i.KeyboardKeyCode("KeyF","f"),new i.KeyboardKeyCode("KeyG","g"),new i.KeyboardKeyCode("KeyI","i"),new i.KeyboardKeyCode("KeyQ","q"),new i.KeyboardKeyCode("KeyR","r"),new i.KeyboardKeyCode("KeyS","s"),new i.KeyboardKeyCode("KeyV","v"),new i.KeyboardKeyCode("KeyW","w"),new i.KeyboardKeyCode("BracketLeft","["),new i.KeyboardKeyCode("BracketRight","]"),new i.KeyboardKeyCode("ArrowLeft","ArrowLeft"),new i.KeyboardKeyCode("ArrowRight","ArrowRight"),new i.KeyboardKeyCode("ArrowUp","ArrowUp"),new i.KeyboardKeyCode("ArrowDown","ArrowDown"),new i.KeyboardKeyCode("Numpad0","0"),new i.KeyboardKeyCode("Numpad1","1"),new i.KeyboardKeyCode("Numpad2","2"),new i.KeyboardKeyCode("Numpad3","3"),new i.KeyboardKeyCode("Numpad4","4"),new i.KeyboardKeyCode("Numpad5","5"),new i.KeyboardKeyCode("Numpad6","6"),new i.KeyboardKeyCode("Numpad7","7"),new i.KeyboardKeyCode("Numpad8","8"),new i.KeyboardKeyCode("Numpad9","9"),new i.KeyboardKeyCode("F8","F8");const o={TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",LEFT_TOP:"left-top",LEFT_CENTER:"left-center",LEFT_BOTTOM:"left-bottom",RIGHT_TOP:"right-top",RIGHT_CENTER:"right-center",RIGHT_BOTTOM:"right-bottom",CENTER_CENTER:"center-center"},r={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},s={DURATION_CHANGE:"durationchange",LOADED_METADATA:"loadedmetadata",PAUSE:"pause",PLAY:"play",VOLUME_CHANGE:"volumechange"},l={WHEEL:"wheel",MOUSEDOWN:"mousedown",CLICK:"click",DBLCLICK:"dblclick"}},743:(e,t,n)=>{n.d(t,{ui:()=>y});var i=n(379),o=n.n(i),r=n(795),s=n.n(r),l=n(569),a=n.n(l),u=n(565),c=n.n(u),d=n(216),p=n.n(d),h=n(589),m=n.n(h),w=n(899),g={};g.styleTagTransform=m(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=p(),o()(w.Z,g),w.Z&&w.Z.locals&&w.Z.locals;var E=n(941),f=n(613),v=n(232);const y={offset2(e){let t={top:0,left:0};if(!e.getClientRects().length)return t;if("none"===window.getComputedStyle(e).display)return t;t=e.getBoundingClientRect();let n=e.ownerDocument.documentElement;return{top:t.top+window.pageYOffset-n.clientTop,left:t.left+window.pageXOffset-n.clientLeft}},scrollToElement(e){if(!e)return;let t=e.ownerDocument.documentElement;const n=y.offset2(e),i=e.getBoundingClientRect();t.scrollTo(n.left-(t.clientWidth-i.width)/2,n.top-(t.clientHeight-i.height)/2)},isInputEvent:e=>!!e.target&&("TEXTAREA"==e.target.tagName.toUpperCase()||"INPUT"==e.target.tagName.toUpperCase()&&"text"==e.target.type||e.isComposing||229===e.keyCode),isEventFromThisDoc:e=>e.target&&e.target.getRootNode()==document,hide(e,t=document){t.querySelectorAll(e).forEach((e=>y.hideElement(e)))},hideElement(e){e&&(e.style.display="none")},querySelectorFirst(e,...t){if(e)for(let n=0;n<t.length;n++){let i=t[n];if(i){if(i instanceof Element||i instanceof Document)return i.querySelector(e);for(let t of document.querySelectorAll(i)){let n=t.querySelector(e);if(n)return n}}}else v.D.printGroupDebug("Common","selector is empty")},showTooltip:(e,t,n,i)=>{console.debug(e,t,n,i)}};class b{constructor(e){this.options=v.D.assignNotUndefined(new E.TooltipOption,e),this.status=0,this.prefix="zw-player-tooltips",this.triggerClass=this.prefix+"-trigger","tip"===this.options.type&&(this.options.autoShow=!1,this.options.autoHide=!1,this.options.autoRemove=!0),this.initialize()}initialize(){this.options.target.classList.add(this.triggerClass),this.options.autoShow&&this.show(),"function"==typeof this.options.callback&&this.options.callback(),"tip"===this.options.type&&this.bindEvents()}bindEvents(){var e=this;this.options.target.addEventListener("mouseenter",(function(){e.options.supportShow&&e.show()})),this.options.target.addEventListener("mouseleave",(function(){e.hide()})),this.options.target.addEventListener("click",(function(t){var n=parseInt(e.options.changeMode+"",10);if(!isNaN(n))switch(n){case 1:{let n;for(n of t.target.parentElement.children)if(n!=t.target)return setTimeout((function(){n.hasClass(e.triggerClass)&&n.is(":visible")&&n.dispatchEvent(new MouseEvent("mouseenter"))}),0),!1;break}case 2:e.hide();break;case 3:e.options.target.dispatchEvent(new MouseEvent("mouseleave")),e.options.target.dispatchEvent(new MouseEvent("mouseenter"))}}))}toggle(e){this.status?this.hide():this.show(e)}show(){var e=this,t=200;"info"===this.options.type&&(t=0),this.status||(clearTimeout(this.timeOut),this.timeOut=window.setTimeout((function(){e.options.singleMode&&e.destroy(!0),e.create(),e.status=1,e.$zwtooltips.classList.add("active"),"function"==typeof e.options.onShow&&e.options.onShow(e),e.options.autoHide&&setTimeout((function(){e.hide()}),e.options.hideTime)}),t))}add(e){"string"==typeof e?e=Object.assign(this.options,{text:e}):"object"==typeof e&&(e=Object.assign(this.options,e));var t=this.template(!1,e);this.$zwtooltips.insertAdjacentElement("beforeend",t),this.updatePos(!0)}hide(){this.status=0,clearTimeout(this.timeOut),this.$zwtooltips&&this.$zwtooltips.classList.remove("active"),"function"==typeof this.options.onHide&&this.options.onHide(this),this.options.autoRemove&&this.destroy()}destroy(e){if(clearTimeout(this.timeOut),e){var t=document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]');t&&t.remove()}else this.$zwtooltips&&this.$zwtooltips.remove()}getElemPos(e){var t=y.offset2(e);let n=e.getBoundingClientRect();return{x:t.left,y:t.top,w:n.width,h:n.height}}create(){document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]')||(this.$zwtooltips=this.template(!0),this.options.game&&this.$zwtooltips.classList.add("tooltip-game"),this.options.target.insertAdjacentElement("beforeend",this.$zwtooltips)),this.$zwtooltips.insertAdjacentElement("beforeend",this.template()),this.updatePos()}template(e,t){var n,i,o,r="",s=[];if(i=(t=t||this.options).text||t.target.getAttribute("data-text"),o=t.position||t.target.getAttribute("data-position"),t.changeMode=t.target.getAttribute("data-change-mode")||0,e)s.push(t.type),s.push(o),t.animation&&s.push("animation"),n=s.join(" "),r='<div class="'+this.prefix+" "+n+'"  data-tooltip-name="'+t.name+'"></div>';else{var l="";t.padding&&(t.padding instanceof Array?l+="padding:"+t.padding.join("px ")+"px;":"number"==typeof t.padding&&(l+="padding:"+t.padding+";")),t.fontSize&&"number"==typeof t.fontSize&&(l+="font-size:"+t.fontSize+"px;"),r='<div class="zw-tooltip" style="'+l+'">'+i+"</div>"}return document.createRange().createContextualFragment(r).firstElementChild}updatePos(){var e,t,n=this.options,i=this.getElemPos(n.target),o=this.getElemPos(this.$zwtooltips);let r=n.position||n.target.getAttribute("data-position");e=i.x,t=i.y,r.startsWith("top")?(t+=n.margin,r.endsWith("center")&&(e+=i.w/2-o.w/2)):r.startsWith("bottom")?(t+=i.h-o.h-n.margin,r.endsWith("center")&&(e+=i.w/2-o.w/2)):r.startsWith("left")?(e+=n.margin,r.endsWith("center")&&(t+=i.h/2-o.h/2)):r.startsWith("right")?(e+=i.w-o.w-n.margin,r.endsWith("center")&&(t+=i.h/2-o.h/2)):r==f.TooltipPosition.CENTER_CENTER&&(e+=i.w/2-o.w/2,t+=i.h/2-o.h/2),r.endsWith("right")?e+=i.w-o.w:r.endsWith("bottom")&&(t+=i.h-o.h),n.arrow&&this.$zwtooltips.insertAdjacentHTML("beforeend",'<div class="arrow" style="undefined"></div>'),this.$zwtooltips.style.top=t+n.top+document.documentElement.clientTop-window.pageYOffset+"px",this.$zwtooltips.style.left=e+n.left+document.documentElement.clientLeft-window.pageXOffset+"px"}}y.showTooltip=function(e,t,n=E.TooltipOption.CENTER_CENTER,i=0){v.D.isBlank(e)?console.debug("Tooltip is blank"):new b(new E.TooltipOption(e,t,n,i))}},232:(e,t,n)=>{n.d(t,{D:()=>i});let i={printGroupDebug:function(e,...t){console.group(`[${e}]`);let n=[];for(let e=0;e<t.length;e++)n.push(i.isObject(t[e])?JSON.parse(JSON.stringify(t[e])):t[e]);console.debug(...n),console.groupEnd()},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let n=0,i=t.length;n<i;n++){let i=t[n].split("=");if(i[0]==e)return decodeURIComponent(i[1])}return""},getQueryVariable:function(e){let t=window.location.search.substring(1).split("&");for(let n=0;n<t.length;n++){let i=t[n].split("=");if(i[0]==e)return i[1]}return!1},asyncDelayedFn:function(e,t,n,i=0){return new Promise(((o,r)=>setTimeout((()=>{void 0===n?o(t.apply(e)):Array.isArray(n)?o(t.apply(e,n)):r(n),o(!0)}),i)))},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(this._common_used_numerals);for(const n of e)if(!t.includes(n))return!1;return!0},zh2Digits:function(e){if(i.isInteger(e))return e;if(!this.isChineseDigits(e))return;let t=0,n=1;for(let i=e.length-1;i>=0;i--){let o=this._common_used_numerals[e[i]];o>=10&&0==i?o>n?(n=o,t+=o):n*=o:o>=10?o>n?n=o:n*=o:t+=n*o}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!i.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"];var n=e.length;return 1==n?t[e]:2==n?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},anyMemberNotEmpty:function(e,t){let n;return e.some((e=>(n=t[e],!!n))),n},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)||e instanceof Object},isString:function(e){return e instanceof String||"string"==typeof e},isBlank:function(e){return i.isString(e)?""===e.trim():null==e},assignNotUndefined:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((n=>{let i=t[n];void 0!==i&&(e[n]=i)}))})),e}}},899:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(645),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,".zw-player-tooltips {\r\n    position: fixed;\r\n    opacity: 0;\r\n    z-index: -1;\r\n    top: -999px;\r\n    cursor: default;\r\n    pointer-events: none;\r\n\r\n    text-align: left;\r\n    white-space: nowrap;\r\n\r\n    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;\r\n    line-height: 1;\r\n\r\n    color: #222;\r\n}\r\n.zw-player-tooltips.active {\r\n    -webkit-transform: translate(0);\r\n    transform: translate(0);\r\n    z-index: 999999;\r\n    opacity: 1;\r\n}\r\n.zw-player-tooltips.center-center, .zw-player-tooltips.top-center, .zw-player-tooltips.top-left, .zw-player-tooltips.top-right {\r\n    -webkit-transform: translateY(10px);\r\n    transform: translateY(10px);\r\n}\r\n.zw-player-tooltips.animation {\r\n    -webkit-transition: opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition: opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition: transform .3s ease-in-out,opacity .3s ease-in-out;\r\n    transition: transform .3s ease-in-out,opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n}\r\n\r\n.zw-player-tooltips > .zw-tooltip:first-child {\r\n    margin: 0;\r\n}\r\n.zw-player-tooltips.active > .arrow, .zw-player-tooltips.active > .zw-tooltip {\r\n    opacity: 1;\r\n    z-index: 98;\r\n}\r\n.zw-player-tooltips.animation > .arrow, .zw-player-tooltips.animation > .zw-tooltip {\r\n    -webkit-transition: opacity .3s ease-in-out;\r\n    transition: opacity .3s ease-in-out;\r\n}\r\n.zw-player-tooltips > .zw-tooltip {\r\n    background: rgba(0,0,0,.7);\r\n    border-radius: 4px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    padding: 6px 8px;\r\n    line-height: normal;\r\n}\r\n\r\ndiv.zw-player-tooltips, div.zw-tooltip {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n    font-style: normal;\r\n\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\ndiv.zw-player-tooltips::selection, div.zw-tooltip::selection {\r\nbackground: #1890ff;\r\ncolor: #fff;\r\n}",""]);const r=o},167:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(645),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,".mode-fullscreen, .mode-webfullscreen {\r\n    position: fixed !important;\r\n    border-radius: 0;\r\n    z-index: 100000;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    margin: 0 auto !important;\r\n    padding: 0 !important;\r\n}\r\nbody.player-mode-webfullscreen {\r\n    position: fixed !important;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0\r\n}\r\n\r\niframe.player-fullscreen-fix {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    z-index: 100000;\r\n}\r\n\r\n.zw-event-delegate {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 98;\r\n}\r\n.zw-top-overlay {\r\n    z-index: 99 !important;\r\n}",""]);const r=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var a=[].concat(e[l]);i&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},s=[],l=0;l<e.length;l++){var a=e[l],u=i.base?a[0]+i.base:a[0],c=r[u]||0,d="".concat(u," ").concat(c);r[u]=c+1;var p=n(d),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(t[p].references++,t[p].updater(h)):t.push({identifier:d,updater:o(h,i),references:1}),s.push(d)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var l=n(r[s]);t[l].references--}for(var a=i(e,o),u=0;u<r.length;u++){var c=n(r[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=a}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},347:(e,t,n)=>{n.d(t,{SiteCategory:()=>o,PlayerMetadata:()=>r,Site:()=>s,VideoSite:()=>l});var i=n(70);class o{categoryName;titleRegEx;constructor(e,t){this.categoryName=e,this.titleRegEx=t}}class r{#e;get containerSelector(){return this.#e}#t;get controlsSelector(){return this.#t}#n;get topElementSelectors(){return this.#n}#i;get playButtonSelector(){return this.#i}#o;get fullscreenButtonSelector(){return this.#o}#r;get webFullscreenButtonSelector(){return this.#r}#s;get volumeButtonSelector(){return this.#s}constructor(e,t,n,i,o,r,s){this.#e=e,this.#t=t,this.#n=n,this.#i=i,this.#s=o,this.#o=r,this.#r=s}}class s{#l;get id(){return this.#l}#a;get origin(){return this.#a}#u;get hrefRegEx(){return this.#u}#c;get siteCategories(){return this.#c}#d;get originWhitelist(){return this.#d}constructor(e,t,n,i,o=[]){this.#l=e,this.#a=t,this.#u=n,this.#c=i,this.#d=o}isEmbedded(){return self!==top}isMessageOriginAllowed(e){return!!e&&(e===window.location.origin||this.#d.includes(e))}postMessage(e,t,n,o){if(!t)return;let r={type:t,content:n,src:window.location.href};i.D.printSendMessage(o,r),e.postMessage(r,o)}test(){return this.#u?this.#u.test(window.location.href):this.#a?this.#a==window.location.origin:void 0}}class l extends s{#p;get parent(){return this.#p}#h;get defaultPlayerMetadata(){return this.#h}constructor(e,t){super(e.id,e.origin,e.hrefRegEx,e.siteCategories,e.originWhitelist),this.#p=e,this.#h=t}}},425:(e,t,n)=>{n.d(t,{SiteCategories:()=>o,Sites:()=>r,VideoSites:()=>a});var i=n(347);const o={AV:new i.SiteCategory("AV",/([a-zA-Z]+-\d+)(-(\w+))?/),DB:new i.SiteCategory("DB"),GAME:new i.SiteCategory("Game"),IMAGE_HOSTING:new i.SiteCategory("Image Hosting"),LIVE_STREAMING:new i.SiteCategory("Live Streaming"),MODDING:new i.SiteCategory("Modding"),MOVIE:new i.SiteCategory("Movie"),TV_SERIES:new i.SiteCategory("TV Series",/([\u4e00-\u9fa5\w]+)第(.+)季.*第(.+)集/),VIDEO_HOSTING:new i.SiteCategory("Video Hosting"),VIDEO_SHARING:new i.SiteCategory("Video Sharing")},r={"7MM":new i.Site("7MM","https://7mmtv.tv",/^https:\/\/7mmtv\.tv\/.*/,[o.AV],["https://mm9842.com","https://avgle.com"]),AVGLE:new i.Site("AVGLE","https://avgle.com",/^https:\/\/avgle\.com\/video\/\w+/,[o.AV],["https://7mmtv.tv"]),AVGLE_EMBED:new i.Site("AVGLE_EMBED","https://avgle.com",/^https:\/\/avgle\.com\/embed\/\w+$/,[o.AV],["https://7mmtv.tv"]),BILIBILI:new i.Site("BILIBILI","https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/.*/,[o.VIDEO_SHARING]),BILIBILI_BANGUMI:new i.Site("BILIBILI_BANGUMI","https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/,[o.VIDEO_SHARING]),BILIBILI_LIVE:new i.Site("BILIBILI_LIVE","https://live.bilibili.com",/^https:\/\/live\.bilibili\.com\/.*/,[o.LIVE_STREAMING]),BILIBILI_VIDEO:new i.Site("BILIBILI_VIDEO","https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/video\/.+/,[o.VIDEO_SHARING]),BUYCAR5:new i.Site("BUYCAR5","https://vod3.buycar5.cn",/^https:\/\/vod\d+\.buycar5\.cn/,[o.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),DIOUS:new i.Site("DIOUS","https://v7.dious.cc",/^https:\/\/v7.dious.cc/,[o.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),JABLE:new i.Site("JABLE","https://jable.tv",/^https:\/\/jable.tv/,[o.AV]),JAVLIBRARY:new i.Site("JAVLIBRARY","https://www.javlibrary.com",/^https:\/\/www\.javlibrary\.com\/.*/,[o.AV]),JX444662:new i.Site("JX444662","https://jx.444662.cn",/^https:\/\/jx.444662.cn/,[o.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),MEIJUBS:new i.Site("MEIJUBS","https://www.meijubs.com",void 0,[o.TV_SERIES],["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn","https://v7.dious.cc"]),MEIJUTTB:new i.Site("MEIJUTTB","https://www.meijuttb.com",void 0,[o.TV_SERIES],["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn"]),MINGTIAN6:new i.Site("MINGTIAN6","https://www.mingtian6.com",void 0,[o.TV_SERIES],["https://www.qingbeiban.com"]),MM9842:new i.Site("MM9842","https://mm9842.com",/^https:\/\/mm9842.com/,[o.AV],["https://7mmtv.tv"]),NEXUSMODS:new i.Site("NEXUSMODS","https://www.nexusmods.com",void 0,[o.MODDING],["https://www.youtube.com"]),QINGBEIBAN:new i.Site("QINGBEIBAN","https://www.qingbeiban.com",/^https:\/\/www.qingbeiban.com/,[o.VIDEO_HOSTING],["https://www.mingtian6.com"]),QXWK:new i.Site("QXWK","https://code.qxwk.net",/^https:\/\/code.qxwk.net/,[o.VIDEO_HOSTING],["https://m.wukongmeiju.com"]),STEAM_COMMUNITY_REVIEW:new i.Site("STEAM_COMMUNITY_REVIEW","https://steamcommunity.com",/^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/,[o.GAME]),STEAM_STORE:new i.Site("STEAM_STORE","https://store.steampowered.com",/^https:\/\/store\.steampowered\.com\/.*/,[o.GAME]),WALLHAVEN:new i.Site("WALLHAVEN","https://wallhaven.cc",/^https:\/\/wallhaven\.cc\/.*/,[o.IMAGE_HOSTING]),WUKONGMEIJU:new i.Site("WUKONGMEIJU","https://m.wukongmeiju.com",void 0,[o.TV_SERIES],["https://code.qxwk.net"]),YOUTUBE_EMBED:new i.Site("YOUTUBE_EMBED","https://www.youtube.com",/^https:\/\/www.youtube.com\/embed\/[\w-]+$/,[o.VIDEO_SHARING],["https://www.nexusmods.com"])};let s=["div#video-player","div.vjs-control-bar",void 0,"button.vjs-play-control",void 0,"button.vjs-fullscreen-control"],l=["div#dplayer, div#mvideo",void 0,"button.dplayer-play-icon","button.dplayer-volume-icon","button.dplayer-full-icon"];const a={AVGLE:new i.VideoSite(r.AVGLE,new i.PlayerMetadata(...s)),AVGLE_EMBED:new i.VideoSite(r.AVGLE_EMBED,new i.PlayerMetadata(...s)),BILIBILI_VIDEO:new i.VideoSite(r.BILIBILI_VIDEO,new i.PlayerMetadata("div.bilibili-player-video-wrap",".bilibili-player-video-control-wrap",void 0,"div.bilibili-player-video-btn-start","button.bilibili-player-iconfont-volume","div.bilibili-player-video-btn-fullscreen button","div.bilibili-player-video-web-fullscreen button")),BILIBILI_BANGUMI:new i.VideoSite(r.BILIBILI_BANGUMI,new i.PlayerMetadata("div.bpx-player-video-area",".bpx-player-control-wrap",void 0,"div.squirtle-video-start","div.squirtle-volume-icon","div.squirtle-video-fullscreen","div.squirtle-video-pagefullscreen")),BUYCAR5:new i.VideoSite(r.BUYCAR5,new i.PlayerMetadata(...l)),DIOUS:new i.VideoSite(r.DIOUS,new i.PlayerMetadata(...l)),JABLE:new i.VideoSite(r.JABLE,new i.PlayerMetadata("div.plyr.plyr--video","div.plyr__controls",void 0,void 0,"button[data-plyr=mute]","button[data-plyr=fullscreen]")),JX444662:new i.VideoSite(r.JX444662,new i.PlayerMetadata("div#playerCnt","div.prism-controlbar",void 0)),MM9842:new i.VideoSite(r.MM9842,new i.PlayerMetadata("div.jw-wrapper","div.jw-controls",void 0,void 0,"div.jw-icon-volume","div.jw-icon-fullscreen")),QINGBEIBAN:new i.VideoSite(r.QINGBEIBAN,new i.PlayerMetadata(...l)),QXWK:new i.VideoSite(r.QXWK,new i.PlayerMetadata(...l)),YOUTUBE_EMBED:new i.VideoSite(r.YOUTUBE_EMBED,new i.PlayerMetadata("div#player",".ytp-chrome-bottom",[".ytp-pause-overlay"],"button.ytp-play-button","button.ytp-mute-button","button.ytp-fullscreen-button"))}},769:(e,t,n)=>{n.d(t,{D:()=>s});var i=n(425),o=n(70),r=n(790);const s={getCurrentSite:function(){for(let e in i.Sites){const t=i.Sites[e];if(t.test())return window.addEventListener("message",(e=>{e.data&&t.isMessageOriginAllowed(e.origin)&&r.Enum.MessageTypes.test(e.data.type)&&o.D.printReceiveMessage(e)})),t}throw"No match for current site"},getCurrentVideoSite:function(){for(let e in i.VideoSites){const t=i.VideoSites[e];if(t.test())return window.addEventListener("message",(e=>{e.data&&t.isMessageOriginAllowed(e.origin)&&r.Enum.MessageTypes.test(e.data.type)&&o.D.printReceiveMessage(e)})),t}throw"No match for current video site"},getCurrentPageCategory:function(e){let t=(e=e||s.getCurrentSite()).siteCategories;if(!Array.isArray(t)||0==t.length)throw"Site categories is empty.";return 1==t.length?t[0]:t.includes(i.SiteCategories.TV_SERIES)&&i.SiteCategories.TV_SERIES.titleRegEx.test(document.title)?t.TV_SERIES:t&&t.includes(i.SiteCategories.MOVIE)?i.SiteCategories.MOVIE:void 0}}},847:(e,t,n)=>{n.d(t,{ApplyMethodSignature:()=>i});class i{context;fn;args;constructor(e,t,n){this.context=e,this.fn=t,this.args=n||[]}}},719:(e,t,n)=>{n.d(t,{scriptName:()=>o});const i="undefined"==typeof GM_info?{name:"Tampermonkey"}:GM_info.script,o=i&&i.name},790:(e,t,n)=>{n.d(t,{Enum:()=>i});var i={};n.r(i),n.d(i,{MessageTypes:()=>o}),n(719);const o={GENERAL:"general",SITE_INFO:"site_info",VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",SWITCH_PLAYING_VIDEO:"switch_playing_video",READY_FOR_MESSAGE:"ready_for_message",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",KEYDOWN:"keydown",test:function(e){for(let t in o)if(this[t]===e)return!0;return!1}};n(232),n(847),n(70)},70:(e,t,n)=>{n.d(t,{D:()=>r});var i=n(719),o=n(232);const r={debug:function(...e){o.D.printGroupDebug(`[${i.scriptName}]`,...e)},get:function(e,t,n){return new Promise(((i,o)=>{GM_xmlhttpRequest({method:"GET",url:e,headers:t,responseType:n||"json",onload:e=>{i(e.response||e.responseText)},onerror:e=>{o(e)}})}))},post:function(e,t,n,i){return t=t||{"Content-Type":"application/x-www-form-urlencoded"},new Promise(((o,r)=>{GM_xmlhttpRequest({method:"POST",url:e,headers:t,data:n,responseType:i||"json",onload:e=>{o(e.response||e.responseText)},onerror:e=>{r(e)}})}))},printReceiveMessage:function(e){r.debug(`>>> From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage:function(e,t){r.debug(`<<< To: ${e}, From: ${window.location.origin}, Message:`,t)}}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{n.r(i),n.d(i,{Class:()=>o,Const:()=>e,Enum:()=>t,ui:()=>L,util:()=>G});var e={};n.r(e),n.d(e,{PROGRESS_STORAGE_KEY:()=>s,VOLUME_STORAGE_KEY:()=>r,bodyWebFullscreenClassName:()=>h,containerWebFullscreenClassName:()=>m,eventDelegateClassName:()=>l,eventDelegateSelector:()=>a,iframeFullscreenClassName:()=>u,iframeFullscreenSelector:()=>c,topOverlayClassName:()=>d,topOverlaySelector:()=>p});var t={};n.r(t),n.d(t,{VideoCustomEventTypes:()=>_});var o={};n.r(o),n.d(o,{VideoInstance:()=>V,VideoInstanceData:()=>D});const r="volume",s="progress",l="zw-event-delegate",a="."+l,u="player-fullscreen-fix",c="."+u,d="zw-top-overlay",p="."+d,h="player-mode-webfullscreen",m="mode-webfullscreen";var w=n(379),g=n.n(w),E=n(795),f=n.n(E),v=n(569),y=n.n(v),b=n(565),S=n.n(b),I=n(216),T=n.n(I),M=n(589),A=n.n(M),C=n(167),B={};B.styleTagTransform=A(),B.setAttributes=S(),B.insert=y().bind(null,"head"),B.domAPI=f(),B.insertStyleElement=T(),g()(C.Z,B),C.Z&&C.Z.locals&&C.Z.locals;const _={VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",PLAY:"play",PAUSE:"pause",VOLUME_CHANGE:"volume_change",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen"};var O=n(232);const L={isFullscreen:()=>!!(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement),isFullscreenEnabled:()=>O.D.anyMemberNotEmpty(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document),getFullscreenElement(e){e=void 0!==e&&e;var t=O.D.anyMemberNotEmpty(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(e)for(;t&&t.shadowRoot;)t=t.shadowRoot.fullscreenElement;return t||null},requestFullscreen(e=document.documentElement){let t;if(e.requestFullscreen)t=e.requestFullscreen();else if(e.webkitRequestFullscreen)t=e.webkitRequestFullscreen();else if(e.mozRequestFullScreen)t=e.mozRequestFullScreen();else if(e.msRequestFullscreen)t=e.msRequestFullscreen();else{if(!e.webkitEnterFullscreen)return Promise.reject(Error("Fullscreen API unavailable"));t=e.webkitEnterFullscreen()}return t instanceof Promise?t:Promise.resolve()},exitFullscreen(){let e;if(document.exitFullscreen)e=document.exitFullscreen();else if(document.webkitExitFullscreen)e=document.webkitExitFullscreen();else if(document.mozCancelFullScreen)e=document.mozCancelFullScreen();else{if(!document.msExitFullscreen)return Promise.reject(Error("Exit fullscreen API unavailable"));e=document.msExitFullscreen()}return e instanceof Promise?e:Promise.resolve()},toggleFullscreen:(e=document.documentElement)=>L.isFullscreen()?L.exitFullscreen(e):L.requestFullscreen(e)};var N=n(613),R=n(743),F=n(70);class x{#m;#n;#w;#g;#E=new Map;constructor(e,t,n){this.#w=e,this.#m=t,this.#n=n||[]}async createEventDelegate(){let e=this.#m;return(e?new Promise((t=>{let n=this.#n.join(",");document.arrive(e,{existing:!0},(function(){let e=this.parentElement.querySelector(a);e||(e=document.createElement("div"),e.classList.add(l),this.after(e),this.classList.add(d),n&&document.arrive(n,{existing:!0},(function(){this.classList.add(d)}))),t(e)}))})):Promise.resolve()).then((e=>{this.#g=e||this.#w;for(let e in N.GlobalEvents){let t=N.GlobalEvents[e],n=this.#E.get(t);n&&n.forEach((e=>{this.#g.addEventListener(t,e.handler)}))}}))}registerEventHandler(e,t){this.#E.has(e)?this.#E.get(e).push(t):this.#E.set(e,[t])}unregisterContext(e){this.#E.forEach((t=>{for(let n=0;n<t.length;n++){let i=t[n];if(i.context==e){for(let e in N.GlobalEvents)this.#g.removeEventListener(N.GlobalEvents[e],i.handler);t.splice(n,1),n--}}}))}clear(){this.#E.forEach(),this.#E.clear()}}class D{video;container;title;progress;volume;constructor(e,t,n,i,o){this.video=e,this.container=t,this.title=n,this.progress=i,this.volume=o}clean(){this.video=this.container=null}}class V{#f;#v;get playerMetadata(){return this.#v||this.#f.defaultPlayerMetadata}#y;#b;get playButton(){if(this.#b)return this.#b;let e=this.playerMetadata;return this.#b=R.ui.querySelectorFirst(e.playButtonSelector,e.controlsSelector,this.container)}#S;get volumeButton(){if(this.#S)return this.#S;let e=this.playerMetadata;return this.#S=R.ui.querySelectorFirst(e.volumeButtonSelector,e.controlsSelector,this.container)}#I;get fullscreenButton(){if(this.#I)return this.#I;let e=this.playerMetadata;return this.#I=R.ui.querySelectorFirst(e.fullscreenButtonSelector,e.controlsSelector,this.container)}#T;get webFullscreenButton(){if(this.#T)return this.#T;let e=this.playerMetadata;return this.#T=R.ui.querySelectorFirst(e.webFullscreenButtonSelector,e.controlsSelector,this.container)}get video(){return this.#y.video}get container(){return this.#y.container}videoDelegate;get tooltipWrap(){return this.container}constructor(e){this.#f=e}#M(e,t){this.#f.postMessage(window,e,t,window.location.origin)}#A(e,t){F.D.debug("CustomEvent:",e,t),this.video.dispatchEvent(new CustomEvent(e,{bubbles:!1,detail:t}))}#C(){let e=this.video;e.removeAttribute("autoplay"),this.#f.isEmbedded()&&(e.crossOrigin="anonymous");let t=this.#y;t.title&&this.showTooltip(t.title);let n=t.progress;null!=n&&(F.D.debug(`Restore saved progress(s): ${n}`),e.currentTime=n);let i=t.volume;null!=i&&(F.D.debug(`Set init volume: ${i}`),e.volume=i),this.#A(_.VIDEO_ATTR_INITIALIZED,{volume:i,progress:n})}async#B(){this.#C();let e=this.video;e.addEventListener(N.MediaEvents.VOLUME_CHANGE,(()=>this.#A(_.VOLUME_CHANGE,{volume:e.volume})));let t=new x(this.container,this.playerMetadata.controlsSelector,this.topElementSelectors);return this.videoDelegate=t,t.createEventDelegate().then((()=>this.#A(_.VIDEO_READY)))}async#_(){let e=this.video;return e.addEventListener(N.MediaEvents.PLAY,(()=>{this.showTooltip("播放",N.TooltipPosition.TOP_CENTER,15),this.#A(_.PLAY)}),!0),e.addEventListener(N.MediaEvents.PAUSE,(()=>{this.showTooltip("暂停",N.TooltipPosition.TOP_CENTER,15),this.#A(_.PAUSE)}),!0),new Promise((t=>{if(e.readyState>=N.MediaReadyState.HAVE_METADATA)return this.#B().then((()=>t()));e.addEventListener(N.MediaEvents.LOADED_METADATA,(()=>{this.#B().then((()=>t()))}),!0)}))}async init(e,t){return this.#y=e,this.#v=t,this.#_().then((()=>this))}showTooltip(e,t,n){R.ui.showTooltip(e,this.tooltipWrap,t,n)}changeVolume(e){let t,n=this.video;t=e>=0?Math.min(n.volume+e,1):Math.max(n.volume+e,0),n.volume=t.toFixed(2),this.showTooltip((n.muted?"静音":"音量")+Math.round(100*n.volume)+"%")}saveVideoFrame(e=document.title){let t=this.video,n=t.videoWidth,i=t.videoHeight,o=document.createElement("canvas");o.width=n,o.height=i,o.getContext("2d").drawImage(t,0,0,n,i),o.toBlob((function(t){let o=document.createElement("a");o.href=URL.createObjectURL(t),o.download=`${e}_${n}x${i}.png`,o.click(),URL.revokeObjectURL(o.href)}))}togglePlay(){this.playButton?this.playButton.click():this.video.paused?this.video.play():this.video.pause()}toggleMute(){this.volumeButton?this.volumeButton.click():this.video.muted=!this.video.muted}isVideoInWebFullScreen(){return document.body.classList.contains(h)}requestWebFullscreen(){!this.isVideoInWebFullScreen()&&this.webFullscreenButton?this.webFullscreenButton.click():(this.container.classList.add(m),document.body.classList.add(h)),this.#A(_.REQUEST_WEBFULLSCREEN)}exitWebFullscreen(){this.isVideoInWebFullScreen()&&this.webFullscreenButton?this.webFullscreenButton.click():(this.container.classList.remove(m),document.body.classList.remove(h)),this.#A(_.EXIT_WEBFULLSCREEN)}toggleWebFullscreen(){if(L.isFullscreen())return this.exitFullscreen(),this.requestWebFullscreen(),!0;{let e=this.isVideoInWebFullScreen();return this.webFullscreenButton?(this.webFullscreenButton.click(),e?this.#A(_.EXIT_WEBFULLSCREEN):this.#A(_.REQUEST_WEBFULLSCREEN)):e?this.exitWebFullscreen():this.requestWebFullscreen(),!e}}requestFullscreen(e=!0){return L.isFullscreen()?Promise.resolve():e&&this.fullscreenButton?(this.fullscreenButton.click(),Promise.resolve()):L.requestFullscreen(this.container)}exitFullscreen(e=!0){return L.isFullscreen()?e&&this.fullscreenButton?(this.fullscreenButton.click(),Promise.resolve()):L.exitFullscreen():Promise.resolve()}toggleFullscreen(){return this.fullscreenButton?(this.fullscreenButton.click(),Promise.resolve()):L.isFullscreen()?this.exitFullscreen(!1):this.requestFullscreen(!1)}}var K=n(769);const G={asyncGetVideoInstance:function(e,t=K.D.getCurrentVideoSite(),n){return new V(t).init(e,n)}}})(),i})()}));