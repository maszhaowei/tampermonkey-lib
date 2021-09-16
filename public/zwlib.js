!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.zwlib=t():e.zwlib=t()}(self,(function(){return(()=>{var e={899:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var i=o(645),n=o.n(i)()((function(e){return e[1]}));n.push([e.id,".zw-player-tooltips {\r\n    position: fixed;\r\n    opacity: 0;\r\n    z-index: -1;\r\n    top: -999px;\r\n    cursor: default;\r\n    pointer-events: none;\r\n\r\n    text-align: left;\r\n    white-space: nowrap;\r\n\r\n    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;\r\n    line-height: 1;\r\n\r\n    color: #222;\r\n}\r\n.zw-player-tooltips.active {\r\n    -webkit-transform: translate(0);\r\n    transform: translate(0);\r\n    z-index: 999999;\r\n    opacity: 1;\r\n}\r\n.zw-player-tooltips.center-center, .zw-player-tooltips.top-center, .zw-player-tooltips.top-left, .zw-player-tooltips.top-right {\r\n    -webkit-transform: translateY(10px);\r\n    transform: translateY(10px);\r\n}\r\n.zw-player-tooltips.animation {\r\n    -webkit-transition: opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition: opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition: transform .3s ease-in-out,opacity .3s ease-in-out;\r\n    transition: transform .3s ease-in-out,opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n}\r\n\r\n.zw-player-tooltips > .zw-tooltip:first-child {\r\n    margin: 0;\r\n}\r\n.zw-player-tooltips.active > .arrow, .zw-player-tooltips.active > .zw-tooltip {\r\n    opacity: 1;\r\n    z-index: 98;\r\n}\r\n.zw-player-tooltips.animation > .arrow, .zw-player-tooltips.animation > .zw-tooltip {\r\n    -webkit-transition: opacity .3s ease-in-out;\r\n    transition: opacity .3s ease-in-out;\r\n}\r\n.zw-player-tooltips > .zw-tooltip {\r\n    background: rgba(0,0,0,.7);\r\n    border-radius: 4px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    padding: 6px 8px;\r\n    line-height: normal;\r\n}\r\n\r\ndiv.zw-player-tooltips, div.zw-tooltip {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n    font-style: normal;\r\n\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\ndiv.zw-player-tooltips::selection, div.zw-tooltip::selection {\r\nbackground: #1890ff;\r\ncolor: #fff;\r\n}",""]);const r=n},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,i){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(n[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);i&&n[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),t.push(c))}},t}},379:e=>{"use strict";var t=[];function o(e){for(var o=-1,i=0;i<t.length;i++)if(t[i].identifier===e){o=i;break}return o}function i(e,i){for(var r={},s=[],a=0;a<e.length;a++){var c=e[a],p=i.base?c[0]+i.base:c[0],l=r[p]||0,d="".concat(p," ").concat(l);r[p]=l+1;var u=o(d),h={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(t[u].references++,t[u].updater(h)):t.push({identifier:d,updater:n(h,i),references:1}),s.push(d)}return s}function n(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o.update(e=t)}else o.remove()}}e.exports=function(e,n){var r=i(e=e||[],n=n||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var a=o(r[s]);t[a].references--}for(var c=i(e,n),p=0;p<r.length;p++){var l=o(r[p]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=c}}},569:e=>{"use strict";var t={};e.exports=function(e,o){var i=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(o)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,o)=>{"use strict";e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var i=o.css,n=o.media,r=o.sourceMap;n?e.setAttribute("media",n):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},573:()=>{}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";o.r(i),o.d(i,{Const:()=>U,ui:()=>C,util:()=>G});var e={};o.r(e),o.d(e,{KeyboardKeyCode:()=>n});var t={};o.r(t),o.d(t,{CallbackType:()=>E,MessageType:()=>f,SiteCategories:()=>p,SiteID:()=>c,currentSite:()=>u,currentVideoSite:()=>g,scriptInfo:()=>s,scriptName:()=>a});const n={Space:{code:"Space",key:" "},Enter:{code:"Enter",key:"Enter"},Escape:{code:"Escape",key:"Escape"},KeyC:{code:"KeyC",key:"c"},KeyD:{code:"KeyD",key:"d"},KeyF:{code:"KeyF",key:"f"},KeyG:{code:"KeyG",key:"g"},KeyI:{code:"KeyI",key:"i"},KeyQ:{code:"KeyQ",key:"q"},KeyR:{code:"KeyR",key:"r"},KeyS:{code:"KeyS",key:"s"},KeyV:{code:"KeyV",key:"v"},KeyW:{code:"KeyW",key:"w"},BracketLeft:{code:"BracketLeft",key:"["},BracketRight:{code:"BracketRight",key:"]"},ArrowLeft:{code:"ArrowLeft",key:"ArrowLeft"},ArrowRight:{code:"ArrowRight",key:"ArrowRight"},ArrowUp:{code:"ArrowUp",key:"ArrowUp"},ArrowDown:{code:"ArrowDown",key:"ArrowDown"},Numpad0:{code:"Numpad0",key:"0"},Numpad1:{code:"Numpad1",key:"1"},Numpad2:{code:"Numpad2",key:"2"},Numpad3:{code:"Numpad3",key:"3"},Numpad4:{code:"Numpad4",key:"4"},Numpad5:{code:"Numpad5",key:"5"},Numpad6:{code:"Numpad6",key:"6"},Numpad7:{code:"Numpad7",key:"7"},Numpad8:{code:"Numpad8",key:"8"},Numpad9:{code:"Numpad9",key:"9"}},r="undefined"==typeof GM_info?{}:GM_info,s=r&&r.script,a=s&&s.name,c={"7MM":"7MM",AVGLE:"AVGLE",AVGLE_EMBED:"AVGLE_EMBED",BILIBILI:"BILIBILI",BILIBILI_VIDEO:"BILIBILI_VIDEO",BILIBILI_BANGUMI:"BILIBILI_BANGUMI",BILIBILI_LIVE:"BILIBILI_LIVE",BUYCAR5:"BUYCAR5",DIOUS:"DIOUS",JABLE:"JABLE",JAVLIBRARY:"JAVLIBRARY",JX444662:"JX444662",MEIJUBS:"MEIJUBS",MEIJUTTB:"MEIJUTTB",MINGTIAN6:"MINGTIAN6",MM9842:"MM9842",NEXUSMODS:"NEXUSMODS",QINGBEIBAN:"QINGBEIBAN",QXWK:"QXWK",STEAM_COMMUNITY_REVIEW:"STEAM_COMMUNITY_REVIEW",STEAM_STORE:"STEAM_STORE",WALLHAVEN:"WALLHAVEN",WUKONGMEIJU:"WUKONGMEIJU",YOUTUBE_EMBED:"YOUTUBE_EMBED"},p={AV:{categoryName:"AV",titleRegEx:/([a-zA-Z]+-\d+)(-(\w+))?/},DB:{categoryName:"DB"},GAME:{categoryName:"Game"},IMAGE_HOSTING:{categoryName:"Image Hosting"},LIVE_STREAMING:{categoryName:"Live Streaming"},MODDING:{categoryName:"Modding"},MOVIE:{categoryName:"Movie"},TV_SERIES:{categoryName:"TV Series",titleRegEx:/([\u4e00-\u9fa5\w]+)第(.+)季.*第(.+)集/},VIDEO_HOSTING:{categoryName:"Video Hosting"},VIDEO_SHARING:{categoryName:"Video Sharing"}};class l{#e;get id(){return this.#e}#t;get origin(){return this.#t}#o;get hrefRegEx(){return this.#o}#i;get siteCategories(){return this.#i}#n;get originWhitelist(){return this.#n}constructor(e,t,o,i,n=[]){this.#e=e,this.#t=t,this.#o=o,this.#i=i,this.#n=n}isMessageOriginAllowed(e){return!!e&&(e===window.location.origin||this.#n.includes(e))}test(){return this.#o&&this.#o.test(window.location.href)||this.#t&&this.#t==window.location.origin}}const d={"7MM":new l(c["7MM"],"https://7mmtv.tv",/^https:\/\/www\.bilibili\.com\/.*/,[p.AV],["https://mm9842.com","https://avgle.com"]),AVGLE:new l(c.AVGLE,"https://avgle.com",/^https:\/\/avgle\.com\/video\/\w+/,[p.AV],["https://7mmtv.tv"]),AVGLE_EMBED:new l(c.AVGLE_EMBED,"https://avgle.com",/^https:\/\/avgle\.com\/embed\/\w+$/,[p.AV],["https://7mmtv.tv"]),BILIBILI:new l(c.BILIBILI,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/.*/,[p.VIDEO_SHARING]),BILIBILI_BANGUMI:new l(c.BILIBILI_BANGUMI,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/,[p.VIDEO_SHARING]),BILIBILI_LIVE:new l(c.BILIBILI_LIVE,"https://live.bilibili.com",/^https:\/\/live\.bilibili\.com\/.*/,[p.LIVE_STREAMING]),BILIBILI_VIDEO:new l(c.BILIBILI_VIDEO,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/video\/.+/,[p.VIDEO_SHARING]),BUYCAR5:new l(c.BUYCAR5,"https://vod3.buycar5.cn",/^https:\/\/vod\d+\.buycar5\.cn/,[p.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),DIOUS:new l(c.DIOUS,"https://v7.dious.cc",/^https:\/\/v7.dious.cc/,[p.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),JABLE:new l(c.JABLE,"https://jable.tv",/^https:\/\/jable.tv/,[p.AV]),JAVLIBRARY:new l(c.JAVLIBRARY,"https://www.javlibrary.com",/^https:\/\/www\.javlibrary\.com\/.*/,[p.AV]),JX444662:new l(c.JX444662,"https://jx.444662.cn",/^https:\/\/jx.444662.cn/,[p.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),MEIJUBS:new l(c.MEIJUBS,"https://www.meijubs.com",void 0,[p.TV_SERIES],["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn","https://v7.dious.cc"]),MEIJUTTB:new l(c.MEIJUTTB,"https://www.meijuttb.com",void 0,[p.TV_SERIES],["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn"]),MINGTIAN6:new l(c.MINGTIAN6,"https://www.mingtian6.com",void 0,[p.TV_SERIES],["https://www.qingbeiban.com"]),MM9842:new l(c.MM9842,"https://mm9842.com",/^https:\/\/mm9842.com/,[p.AV],["https://7mmtv.tv"]),NEXUSMODS:new l(c.NEXUSMODS,"https://www.nexusmods.com",void 0,[p.MODDING],["https://www.youtube.com"]),QINGBEIBAN:new l(c.QINGBEIBAN,"https://www.qingbeiban.com",/^https:\/\/www.qingbeiban.com/,[p.VIDEO_HOSTING],["https://www.mingtian6.com"]),QXWK:new l(c.QXWK,"https://code.qxwk.net",/^https:\/\/code.qxwk.net/,[p.VIDEO_HOSTING],["https://m.wukongmeiju.com"]),STEAM_COMMUNITY_REVIEW:new l(c.STEAM_COMMUNITY_REVIEW,"https://steamcommunity.com",/^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/,[p.GAME]),STEAM_STORE:new l(c.STEAM_STORE,"https://store.steampowered.com",/^https:\/\/store\.steampowered\.com\/.*/,[p.GAME]),WALLHAVEN:new l(c.WALLHAVEN,"https://wallhaven.cc",/^https:\/\/wallhaven\.cc\/.*/,[p.IMAGE_HOSTING]),WUKONGMEIJU:new l(c.WUKONGMEIJU,"https://m.wukongmeiju.com",void 0,[p.TV_SERIES],["https://code.qxwk.net"]),YOUTUBE_EMBED:new l(c.YOUTUBE_EMBED,"https://www.youtube.com",/^https:\/\/www.youtube.com\/embed\/[\w-]+$/,[p.VIDEO_SHARING],["https://www.nexusmods.com"])};for(let e in d)d[e].test()&&(e=d[e]);const u=void 0;class h extends l{#r;get containerSelector(){return this.#r}#s;get controlsSelector(){return this.#s}#a;get topOverlaySelector(){return this.#a}get currentPageCategory(){let e=super.siteCategories;if(Array.isArray(e)){if(1==e.length)return e[0];for(let t of e)if(t.titleRegEx&&t.titleRegEx.test(document.title))return t;return e.includes(p.MOVIE)?p.MOVIE:void 0}}constructor(e,t,o,i){super(e.id,e.origin,e.hrefRegEx,e.siteCategories,e.originWhitelist),this.#r=t,this.#s=o,this.#a=i}}const m={AVGLE:new h(d.AVGLE,"div#video-player","div.vjs-control-bar"),AVGLE_EMBED:new h(d.AVGLE_EMBED,"div#video-player","div.vjs-control-bar"),BILIBILI_VIDEO:new h(d.BILIBILI_VIDEO,"div.bilibili-player-video-wrap",".bilibili-player-video-control-wrap"),BILIBILI_BANGUMI:new h(d.BILIBILI_BANGUMI,"div.bpx-player-video-area",".bpx-player-control-wrap"),BUYCAR5:new h(d.BUYCAR5,"div#dplayer,div#mvideo"),DIOUS:new h(d.DIOUS,"div#mvideo",".dplayer-controller"),JABLE:new h(d.JABLE,"div.plyr.plyr--video","div.plyr__controls"),JX444662:new h(d.JX444662,"div#playerCnt","div.prism-controlbar"),MM9842:new h(d.MM9842,"div.jw-wrapper","div.jw-controls"),QINGBEIBAN:new h(d.QINGBEIBAN,"div#dplayer,div#mvideo"),QXWK:new h(d.QXWK,"div#dplayer,div#mvideo"),YOUTUBE_EMBED:new h(d.YOUTUBE_EMBED,"div#player",".ytp-chrome-bottom",".ytp-pause-overlay")};let w;for(let e in m)m[e].test()&&(w=m[e]);const g=w,f={SITE_INFO:"site_info",VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",SWITCH_PLAYING_VIDEO:"switch_playing_video",READY_FOR_MESSAGE:"ready_for_message",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",KEYDOWN:"keydown",EVENT_DELEGATE_SELECTOR:"event+delegate_selector"},E={VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",PLAY:"play",KEYDOWN:"keydown",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",EVENT_DELEGATE_SELECTOR:"event+delegate_selector"};let y={printGroupDebug(e,...t){console.group(`[${e}]`),console.debug(...t),console.groupEnd()},getCookie(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let o=0,i=t.length;o<i;o++){let i=t[o].split("=");if(i[0]==e)return decodeURIComponent(i[1])}return""},getQueryVariable(e){let t=window.location.search.substring(1).split("&");for(let o=0;o<t.length;o++){let i=t[o].split("=");if(i[0]==e)return i[1]}return!1},asyncDelayedFn:(e,t,o,i=0)=>new Promise(((n,r)=>setTimeout((()=>{void 0===o?n(t.apply(e)):Array.isArray(o)?n(t.apply(e,o)):r(o),n(!0)}),i))),isInteger(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:e=>!isNaN(parseFloat(e))&&isFinite(e),isZH:e=>/^[\u4e00-\u9fa5]+$/.test(e),isChineseDigits(e){let t=Object.keys(this._common_used_numerals);for(const o of e)if(!t.includes(o))return!1;return!0},zh2Digits(e){if(y.isInteger(e))return e;if(!this.isChineseDigits(e))return;let t=0,o=1;for(let i=e.length-1;i>=0;i--){let n=this._common_used_numerals[e[i]];n>=10&&0==i?n>o?(o=n,t+=n):o*=n:n>=10?n>o?o=n:o*=n:t+=o*n}return t},digits2ZH(e){if(this.isZH(e))return e;if(!y.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"];var o=e.length;return 1==o?t[e]:2==o?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0}};const I={debug(...e){console.group(`[${a}]`),console.debug(...e),console.groupEnd()},get:(e,t,o)=>new Promise(((i,n)=>{GM_xmlhttpRequest({method:"GET",url:e,headers:t,responseType:o||"json",onload:e=>{i(e.response||e.responseText)},onerror:e=>{n(e)}})})),post:(e,t,o,i)=>(t=t||{"Content-Type":"application/x-www-form-urlencoded"},new Promise(((n,r)=>{GM_xmlhttpRequest({method:"POST",url:e,headers:t,data:o,responseType:i||"json",onload:e=>{n(e.response||e.responseText)},onerror:e=>{r(e)}})}))),printReceiveMessage(e){I.debug(`From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage(e,t){I.debug(`To: ${e}, From: ${window.location.origin}, Message:`,t)}};var v=o(379),b=o.n(v),A=o(795),S=o.n(A),M=o(569),N=o.n(M),B=o(565),T=o.n(B),_=o(216),L=o.n(_),O=o(589),x=o.n(O),R=o(899),k={};k.styleTagTransform=x(),k.setAttributes=T(),k.insert=N().bind(null,"head"),k.domAPI=S(),k.insertStyleElement=L(),b()(R.Z,k),R.Z&&R.Z.locals&&R.Z.locals;const V={offset2(e){let t={top:0,left:0};if(!e.getClientRects().length)return t;if("none"===window.getComputedStyle(e).display)return t;t=e.getBoundingClientRect();let o=e.ownerDocument.documentElement;return{top:t.top+window.pageYOffset-o.clientTop,left:t.left+window.pageXOffset-o.clientLeft}},scrollToElement(e){if(!e)return;let t=e.ownerDocument.documentElement;t.scrollTo(0,V.offset2(e).top-(t.clientHeight-e.getBoundingClientRect().height)/2)},isInputEvent:e=>!!e.target&&("TEXTAREA"==e.target.tagName.toUpperCase()||"INPUT"==e.target.tagName.toUpperCase()&&"text"==e.target.type||e.isComposing||229===e.keyCode),dispatchMouseEvent(e,t,o){o=o||{bubbles:!1,cancelable:!1};let i=document.createEvent("MouseEvent");i.initMouseEvent(t,o.bubbles,o.cancelable,unsafeWindow,0,o.screenX||0,o.screenY||0,o.clientX||0,o.clientY||0,o.ctrlKey||!1,o.altKey||!1,o.shiftKey||!1,o.metaKey||!1,o.button||0,o.relatedTarget||null),e.dispatchEvent(i)},dispatchClickEvent(e,t){V.dispatchMouseEvent(e,"click",t)},isEventFromThisDoc:e=>e.target&&e.target.getRootNode().isSameNode(document),hide(e,t=document){t.querySelectorAll(e).forEach((e=>V.hideElement(e)))},hideElement(e){e&&(e.style.display="none")},querySelectorFirst(e,t){if(t instanceof Element)return t.querySelector(e);for(let o of document.querySelectorAll(t)){let t=o.querySelector(e);if(t)return t}},Tooltip:function(){function e(e){this.options=Object.assign({name:"player-tooltip",target:document.body,type:"info",left:0,top:0,margin:0,arrow:!1,changeMode:0,singleMode:!0,animation:!0,supportShow:!0,autoShow:!0,autoHide:!0,hideTime:1e3,autoRemove:!0,game:!1,callback:function(){},onShow:function(){},onHide:function(){}},e),this.status=0,this.prefix="zw-player-tooltips",this.triggerClass=this.prefix+"-trigger","tip"===this.options.type&&(this.options.autoShow=!1,this.options.autoHide=!1,this.options.autoRemove=!0),this.initialize()}return e.prototype.initialize=function(){this.options.target.classList.add(this.triggerClass),this.options.autoShow&&this.show(),"function"==typeof this.options.callback&&this.options.callback(),"tip"===this.options.type&&this.bindEvents()},e.prototype.bindEvents=function(){var e=this;this.options.target.addEventListener("mouseenter",(function(){e.options.supportShow&&e.show()})),this.options.target.addEventListener("mouseleave",(function(){e.hide()})),this.options.target.addEventListener("click",(function(t){var o=parseInt(e.options.changeMode+"",10);if(!isNaN(o))switch(o){case 1:{let o;for(o of t.target.parentElement.children)if(!o.isSameNode(t.target))return setTimeout((function(){o.hasClass(e.triggerClass)&&o.is(":visible")&&o.dispatchEvent(new MouseEvent("mouseenter"))}),0),!1;break}case 2:e.hide();break;case 3:e.options.target.dispatchEvent(new MouseEvent("mouseleave")),e.options.target.dispatchEvent(new MouseEvent("mouseenter"))}}))},e.prototype.toggle=function(e){this.status?this.hide():this.show(e)},e.prototype.show=function(){var e=this,t=200;"info"===this.options.type&&(t=0),this.status||(clearTimeout(this.timeOut),this.timeOut=window.setTimeout((function(){e.options.singleMode&&e.destroy(!0),e.create(),e.status=1,e.$zwtooltips.classList.add("active"),"function"==typeof e.options.onShow&&e.options.onShow(e),e.options.autoHide&&setTimeout((function(){e.hide()}),e.options.hideTime)}),t))},e.prototype.add=function(e){"string"==typeof e?e=Object.assign(this.options,{text:e}):"object"==typeof e&&(e=Object.assign(this.options,e));var t=this.template(!1,e);this.$zwtooltips.insertAdjacentElement("beforeend",t),this.updatePos(!0)},e.prototype.hide=function(){this.status=0,clearTimeout(this.timeOut),this.$zwtooltips&&this.$zwtooltips.classList.remove("active"),"function"==typeof this.options.onHide&&this.options.onHide(this),this.options.autoRemove&&this.destroy()},e.prototype.destroy=function(e){if(clearTimeout(this.timeOut),e){var t=document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]');t&&t.remove()}else this.$zwtooltips&&this.$zwtooltips.remove()},e.prototype.getElemPos=function(e){var t=V.offset2(e);let o=e.getBoundingClientRect();return{x:t.left,y:t.top,w:o.width,h:o.height}},e.prototype.create=function(){document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]')||(this.$zwtooltips=this.template(!0),this.options.game&&this.$zwtooltips.classList.add("tooltip-game"),this.options.target.insertAdjacentElement("beforeend",this.$zwtooltips)),this.$zwtooltips.insertAdjacentElement("beforeend",this.template()),this.updatePos()},e.prototype.template=function(e,t){var o,i,n,r="",s=[];if(i=(t=t||this.options).text||t.target.getAttribute("data-text"),n=t.position||t.target.getAttribute("data-position"),t.changeMode=t.target.getAttribute("data-change-mode")||0,e)s.push(t.type),s.push(n),t.animation&&s.push("animation"),o=s.join(" "),r='<div class="'+this.prefix+" "+o+'"  data-tooltip-name="'+t.name+'"></div>';else{var a="";t.padding&&(t.padding instanceof Array?a+="padding:"+t.padding.join("px ")+"px;":"number"==typeof t.padding&&(a+="padding:"+t.padding+";")),t.fontSize&&"number"==typeof t.fontSize&&(a+="font-size:"+t.fontSize+"px;"),r='<div class="zw-tooltip" style="'+a+'">'+i+"</div>"}return document.createRange().createContextualFragment(r).firstElementChild},e.prototype.updatePos=function(){var e,t,o,i=this.options,n=this.getElemPos(i.target),r=this.getElemPos(this.$zwtooltips);switch(i.position||i.target.getAttribute("data-position")){case"top-left":e=n.x,t=n.y-i.margin-r.h+10,o="left:"+n.w/2+"px;";break;case"top-center":e=n.x+n.w/2-r.w/2,t=n.y+i.margin+10,o="left:"+r.w/2+"px;";break;case"top-right":e=n.x+n.w-r.w,t=n.y-i.margin-r.h+10,o="left:"+(r.w-n.w/2)+"px;";break;case"bottom-left":e=n.x,t=n.y+n.h+i.margin-10,o="left:"+n.w/2+"px;";break;case"bottom-center":e=n.x+n.w/2-r.w/2,t=n.y+n.h+i.margin-10,o="left:"+r.w/2+"px;";break;case"bottom-right":e=n.x+n.w-r.w,t=n.y+n.h+i.margin-10,o="left:"+(r.w-n.w/2)+"px;";break;case"left-top":e=n.x-i.margin-r.w+10,t=n.y;break;case"left-center":e=n.x-i.margin-r.w+10,t=n.y+n.h/2-r.h/2;break;case"left-bottom":e=n.x-i.margin-r.w+10,t=n.y+n.h-r.h;break;case"right-top":e=n.x+i.margin+n.w-10,t=n.y;break;case"right-center":e=n.x+i.margin+n.w-10,t=n.y+n.h/2-r.h/2;break;case"right-bottom":e=n.x+i.margin+n.w-10,t=n.y+n.h-r.h;break;case"center-center":e=n.x+n.w/2-r.w/2,t=n.y+n.h/2-r.h/2+10}if(i.arrow){var s='<div class="arrow" style="'+o+'"></div>';this.$zwtooltips.insertAdjacentHTML("beforeend",s)}this.$zwtooltips.style.top=t+i.top+document.documentElement.clientTop-window.pageYOffset+"px",this.$zwtooltips.style.left=e+i.left+document.documentElement.clientLeft-window.pageXOffset+"px"},e}(),showTooltip(e,t,{position:o="center-center",left:i=0,top:n=0}={}){e&&""!=e.trim()?new V.Tooltip({text:e,target:t,position:o,left:i,top:n}):console.debug("Tooltip is empty: "+e)}};var D=o(573);const U=Object.assign({},e,t),G=Object.assign({},y,I),C=Object.assign({},V,D.ui)})(),i})()}));