!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.commonlib=e():t.commonlib=e()}(self,(function(){return(()=>{var t={882:()=>{},899:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var o=i(645),n=i.n(o)()((function(t){return t[1]}));n.push([t.id,".zw-player-tooltips {\r\n    position: fixed;\r\n    opacity: 0;\r\n    z-index: -1;\r\n    top: -999px;\r\n    cursor: default;\r\n    pointer-events: none;\r\n\r\n    text-align: left;\r\n    white-space: nowrap;\r\n\r\n    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;\r\n    line-height: 1;\r\n\r\n    color: #222;\r\n}\r\n.zw-player-tooltips.active {\r\n    -webkit-transform: translate(0);\r\n    transform: translate(0);\r\n    z-index: 999999;\r\n    opacity: 1;\r\n}\r\n.zw-player-tooltips.center-center, .zw-player-tooltips.top-center, .zw-player-tooltips.top-left, .zw-player-tooltips.top-right {\r\n    -webkit-transform: translateY(10px);\r\n    transform: translateY(10px);\r\n}\r\n.zw-player-tooltips.animation {\r\n    -webkit-transition: opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition: opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n    transition: transform .3s ease-in-out,opacity .3s ease-in-out;\r\n    transition: transform .3s ease-in-out,opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\r\n}\r\n\r\n.zw-player-tooltips > .zw-tooltip:first-child {\r\n    margin: 0;\r\n}\r\n.zw-player-tooltips.active > .arrow, .zw-player-tooltips.active > .zw-tooltip {\r\n    opacity: 1;\r\n    z-index: 98;\r\n}\r\n.zw-player-tooltips.animation > .arrow, .zw-player-tooltips.animation > .zw-tooltip {\r\n    -webkit-transition: opacity .3s ease-in-out;\r\n    transition: opacity .3s ease-in-out;\r\n}\r\n.zw-player-tooltips > .zw-tooltip {\r\n    background: rgba(0,0,0,.7);\r\n    border-radius: 4px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    padding: 6px 8px;\r\n    line-height: normal;\r\n}\r\n\r\ndiv.zw-player-tooltips, div.zw-tooltip {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    vertical-align: baseline;\r\n    font-style: normal;\r\n\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\ndiv.zw-player-tooltips::selection, div.zw-tooltip::selection {\r\nbackground: #1890ff;\r\ncolor: #fff;\r\n}",""]);const r=n},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,o){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(o)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(n[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);o&&n[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),e.push(c))}},e}},379:t=>{"use strict";var e=[];function i(t){for(var i=-1,o=0;o<e.length;o++)if(e[o].identifier===t){i=o;break}return i}function o(t,o){for(var r={},s=[],a=0;a<t.length;a++){var c=t[a],p=o.base?c[0]+o.base:c[0],l=r[p]||0,u="".concat(p," ").concat(l);r[p]=l+1;var d=i(u),h={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(e[d].references++,e[d].updater(h)):e.push({identifier:u,updater:n(h,o),references:1}),s.push(u)}return s}function n(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i.update(t=e)}else i.remove()}}t.exports=function(t,n){var r=o(t=t||[],n=n||{});return function(t){t=t||[];for(var s=0;s<r.length;s++){var a=i(r[s]);e[a].references--}for(var c=o(t,n),p=0;p<r.length;p++){var l=i(r[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:t=>{"use strict";var e={};t.exports=function(t,i){var o=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(i)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,i)=>{"use strict";t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var o=i.css,n=i.media,r=i.sourceMap;n?t.setAttribute("media",n):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{"use strict";i.r(o),i.d(o,{Class:()=>t,Const:()=>r,Enum:()=>e,ui:()=>S,util:()=>l});var t={};i.r(t),i.d(t,{Site:()=>n});var e={};i.r(e),i.d(e,{KeyboardKeyCodes:()=>s,SiteCategories:()=>a,SiteIDs:()=>c,Sites:()=>p});class n{#t;get id(){return this.#t}#e;get origin(){return this.#e}#i;get hrefRegEx(){return this.#i}#o;get siteCategories(){return this.#o}get currentPageCategory(){let t=this.#o;if(Array.isArray(t)){if(1==t.length)return t[0];for(let e of t)if(e.titleRegEx&&e.titleRegEx.test(document.title))return e}}#n;get originWhitelist(){return this.#n}constructor(t,e,i,o,n=[]){this.#t=t,this.#e=e,this.#i=i,this.#o=o,this.#n=n}isMessageOriginAllowed(t){return!!t&&(t===window.location.origin||this.#n.includes(t))}test(){return this.#i?this.#i.test(window.location.href):this.#e?this.#e==window.location.origin:void 0}}var r=i(882);const s={Space:{code:"Space",key:" "},Enter:{code:"Enter",key:"Enter"},Escape:{code:"Escape",key:"Escape"},KeyC:{code:"KeyC",key:"c"},KeyD:{code:"KeyD",key:"d"},KeyF:{code:"KeyF",key:"f"},KeyG:{code:"KeyG",key:"g"},KeyI:{code:"KeyI",key:"i"},KeyQ:{code:"KeyQ",key:"q"},KeyR:{code:"KeyR",key:"r"},KeyS:{code:"KeyS",key:"s"},KeyV:{code:"KeyV",key:"v"},KeyW:{code:"KeyW",key:"w"},BracketLeft:{code:"BracketLeft",key:"["},BracketRight:{code:"BracketRight",key:"]"},ArrowLeft:{code:"ArrowLeft",key:"ArrowLeft"},ArrowRight:{code:"ArrowRight",key:"ArrowRight"},ArrowUp:{code:"ArrowUp",key:"ArrowUp"},ArrowDown:{code:"ArrowDown",key:"ArrowDown"},Numpad0:{code:"Numpad0",key:"0"},Numpad1:{code:"Numpad1",key:"1"},Numpad2:{code:"Numpad2",key:"2"},Numpad3:{code:"Numpad3",key:"3"},Numpad4:{code:"Numpad4",key:"4"},Numpad5:{code:"Numpad5",key:"5"},Numpad6:{code:"Numpad6",key:"6"},Numpad7:{code:"Numpad7",key:"7"},Numpad8:{code:"Numpad8",key:"8"},Numpad9:{code:"Numpad9",key:"9"},F8:{code:"F8",key:"F8"}},a={AV:{categoryName:"AV",titleRegEx:/([a-zA-Z]+-\d+)(-(\w+))?/},DB:{categoryName:"DB"},GAME:{categoryName:"Game"},IMAGE_HOSTING:{categoryName:"Image Hosting"},LIVE_STREAMING:{categoryName:"Live Streaming"},MODDING:{categoryName:"Modding"},MOVIE:{categoryName:"Movie"},TV_SERIES:{categoryName:"TV Series",titleRegEx:/([\u4e00-\u9fa5\w]+)第(.+)季.*第(.+)集/},VIDEO_HOSTING:{categoryName:"Video Hosting"},VIDEO_SHARING:{categoryName:"Video Sharing"}},c={"7MM":"7MM",AVGLE:"AVGLE",AVGLE_EMBED:"AVGLE_EMBED",BILIBILI:"BILIBILI",BILIBILI_VIDEO:"BILIBILI_VIDEO",BILIBILI_BANGUMI:"BILIBILI_BANGUMI",BILIBILI_LIVE:"BILIBILI_LIVE",BUYCAR5:"BUYCAR5",DIOUS:"DIOUS",JABLE:"JABLE",JAVLIBRARY:"JAVLIBRARY",JX444662:"JX444662",MEIJUBS:"MEIJUBS",MEIJUTTB:"MEIJUTTB",MINGTIAN6:"MINGTIAN6",MM9842:"MM9842",NEXUSMODS:"NEXUSMODS",QINGBEIBAN:"QINGBEIBAN",QXWK:"QXWK",STEAM_COMMUNITY_REVIEW:"STEAM_COMMUNITY_REVIEW",STEAM_STORE:"STEAM_STORE",WALLHAVEN:"WALLHAVEN",WUKONGMEIJU:"WUKONGMEIJU",YOUTUBE_EMBED:"YOUTUBE_EMBED"},p={"7MM":new n(c["7MM"],"https://7mmtv.tv",/^https:\/\/www\.bilibili\.com\/.*/,[a.AV],["https://mm9842.com","https://avgle.com"]),AVGLE:new n(c.AVGLE,"https://avgle.com",/^https:\/\/avgle\.com\/video\/\w+/,[a.AV],["https://7mmtv.tv"]),AVGLE_EMBED:new n(c.AVGLE_EMBED,"https://avgle.com",/^https:\/\/avgle\.com\/embed\/\w+$/,[a.AV],["https://7mmtv.tv"]),BILIBILI:new n(c.BILIBILI,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/.*/,[a.VIDEO_SHARING]),BILIBILI_BANGUMI:new n(c.BILIBILI_BANGUMI,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/,[a.VIDEO_SHARING]),BILIBILI_LIVE:new n(c.BILIBILI_LIVE,"https://live.bilibili.com",/^https:\/\/live\.bilibili\.com\/.*/,[a.LIVE_STREAMING]),BILIBILI_VIDEO:new n(c.BILIBILI_VIDEO,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/video\/.+/,[a.VIDEO_SHARING]),BUYCAR5:new n(c.BUYCAR5,"https://vod3.buycar5.cn",/^https:\/\/vod\d+\.buycar5\.cn/,[a.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),DIOUS:new n(c.DIOUS,"https://v7.dious.cc",/^https:\/\/v7.dious.cc/,[a.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),JABLE:new n(c.JABLE,"https://jable.tv",/^https:\/\/jable.tv/,[a.AV]),JAVLIBRARY:new n(c.JAVLIBRARY,"https://www.javlibrary.com",/^https:\/\/www\.javlibrary\.com\/.*/,[a.AV]),JX444662:new n(c.JX444662,"https://jx.444662.cn",/^https:\/\/jx.444662.cn/,[a.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),MEIJUBS:new n(c.MEIJUBS,"https://www.meijubs.com",void 0,[a.TV_SERIES],["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn","https://v7.dious.cc"]),MEIJUTTB:new n(c.MEIJUTTB,"https://www.meijuttb.com",void 0,[a.TV_SERIES],["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn"]),MINGTIAN6:new n(c.MINGTIAN6,"https://www.mingtian6.com",void 0,[a.TV_SERIES],["https://www.qingbeiban.com"]),MM9842:new n(c.MM9842,"https://mm9842.com",/^https:\/\/mm9842.com/,[a.AV],["https://7mmtv.tv"]),NEXUSMODS:new n(c.NEXUSMODS,"https://www.nexusmods.com",void 0,[a.MODDING],["https://www.youtube.com"]),QINGBEIBAN:new n(c.QINGBEIBAN,"https://www.qingbeiban.com",/^https:\/\/www.qingbeiban.com/,[a.VIDEO_HOSTING],["https://www.mingtian6.com"]),QXWK:new n(c.QXWK,"https://code.qxwk.net",/^https:\/\/code.qxwk.net/,[a.VIDEO_HOSTING],["https://m.wukongmeiju.com"]),STEAM_COMMUNITY_REVIEW:new n(c.STEAM_COMMUNITY_REVIEW,"https://steamcommunity.com",/^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/,[a.GAME]),STEAM_STORE:new n(c.STEAM_STORE,"https://store.steampowered.com",/^https:\/\/store\.steampowered\.com\/.*/,[a.GAME]),WALLHAVEN:new n(c.WALLHAVEN,"https://wallhaven.cc",/^https:\/\/wallhaven\.cc\/.*/,[a.IMAGE_HOSTING]),WUKONGMEIJU:new n(c.WUKONGMEIJU,"https://m.wukongmeiju.com",void 0,[a.TV_SERIES],["https://code.qxwk.net"]),YOUTUBE_EMBED:new n(c.YOUTUBE_EMBED,"https://www.youtube.com",/^https:\/\/www.youtube.com\/embed\/[\w-]+$/,[a.VIDEO_SHARING],["https://www.nexusmods.com"])};let l={printGroupDebug(t,...e){console.group(`[${t}]`),console.debug(...e),console.groupEnd()},getCookie(t){let e=document.cookie.replace(/\s/g,"").split(";");for(let i=0,o=e.length;i<o;i++){let o=e[i].split("=");if(o[0]==t)return decodeURIComponent(o[1])}return""},getQueryVariable(t){let e=window.location.search.substring(1).split("&");for(let i=0;i<e.length;i++){let o=e[i].split("=");if(o[0]==t)return o[1]}return!1},asyncDelayedFn:(t,e,i,o=0)=>new Promise(((n,r)=>setTimeout((()=>{void 0===i?n(e.apply(t)):Array.isArray(i)?n(e.apply(t,i)):r(i),n(!0)}),o))),isInteger(t){if(isNaN(t))return!1;let e=parseFloat(t);return(0|e)===e},isNumeric:t=>!isNaN(parseFloat(t))&&isFinite(t),isZH:t=>/^[\u4e00-\u9fa5]+$/.test(t),isChineseDigits(t){let e=Object.keys(this._common_used_numerals);for(const i of t)if(!e.includes(i))return!1;return!0},zh2Digits(t){if(l.isInteger(t))return t;if(!this.isChineseDigits(t))return;let e=0,i=1;for(let o=t.length-1;o>=0;o--){let n=this._common_used_numerals[t[o]];n>=10&&0==o?n>i?(i=n,e+=n):i*=n:n>=10?n>i?i=n:i*=n:e+=i*n}return e},digits2ZH(t){if(this.isZH(t))return t;if(!l.isInteger(t))return;let e=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"];var i=t.length;return 1==i?e[t]:2==i?10==t?e[t]:t>10&&t<20?"十"+e[t.charAt(1)]:e[t.charAt(0)]+"十"+e[t.charAt(1)].replace("零",""):void 0},isHttpSuccess:t=>!!t&&t>=200&&t<300};var u=i(379),d=i.n(u),h=i(795),m=i.n(h),w=i(569),f=i.n(w),g=i(565),y=i.n(g),E=i(216),I=i.n(E),v=i(589),b=i.n(v),A=i(899),M={};M.styleTagTransform=b(),M.setAttributes=y(),M.insert=f().bind(null,"head"),M.domAPI=m(),M.insertStyleElement=I(),d()(A.Z,M),A.Z&&A.Z.locals&&A.Z.locals;const S={offset2(t){let e={top:0,left:0};if(!t.getClientRects().length)return e;if("none"===window.getComputedStyle(t).display)return e;e=t.getBoundingClientRect();let i=t.ownerDocument.documentElement;return{top:e.top+window.pageYOffset-i.clientTop,left:e.left+window.pageXOffset-i.clientLeft}},scrollToElement(t){if(!t)return;let e=t.ownerDocument.documentElement;e.scrollTo(0,S.offset2(t).top-(e.clientHeight-t.getBoundingClientRect().height)/2)},isInputEvent:t=>!!t.target&&("TEXTAREA"==t.target.tagName.toUpperCase()||"INPUT"==t.target.tagName.toUpperCase()&&"text"==t.target.type||t.isComposing||229===t.keyCode),dispatchMouseEvent(t,e,i){i=i||{bubbles:!1,cancelable:!1};let o=document.createEvent("MouseEvent");o.initMouseEvent(e,i.bubbles,i.cancelable,unsafeWindow,0,i.screenX||0,i.screenY||0,i.clientX||0,i.clientY||0,i.ctrlKey||!1,i.altKey||!1,i.shiftKey||!1,i.metaKey||!1,i.button||0,i.relatedTarget||null),t.dispatchEvent(o)},dispatchClickEvent(t,e){S.dispatchMouseEvent(t,"click",e)},isEventFromThisDoc:t=>t.target&&t.target.getRootNode().isSameNode(document),hide(t,e=document){e.querySelectorAll(t).forEach((t=>S.hideElement(t)))},hideElement(t){t&&(t.style.display="none")},querySelectorFirst(t,e){if(e instanceof Element)return e.querySelector(t);for(let i of document.querySelectorAll(e)){let e=i.querySelector(t);if(e)return e}},getCurrentSite(){for(let t in p)if(p[t].test())return p[t]}};class N{constructor(t){this.options=Object.assign({name:"player-tooltip",target:document.body,type:"info",left:0,top:0,margin:0,arrow:!1,changeMode:0,singleMode:!0,animation:!0,supportShow:!0,autoShow:!0,autoHide:!0,hideTime:1e3,autoRemove:!0,game:!1,callback:function(){},onShow:function(){},onHide:function(){}},t),this.status=0,this.prefix="zw-player-tooltips",this.triggerClass=this.prefix+"-trigger","tip"===this.options.type&&(this.options.autoShow=!1,this.options.autoHide=!1,this.options.autoRemove=!0),this.initialize()}initialize(){this.options.target.classList.add(this.triggerClass),this.options.autoShow&&this.show(),"function"==typeof this.options.callback&&this.options.callback(),"tip"===this.options.type&&this.bindEvents()}bindEvents(){var t=this;this.options.target.addEventListener("mouseenter",(function(){t.options.supportShow&&t.show()})),this.options.target.addEventListener("mouseleave",(function(){t.hide()})),this.options.target.addEventListener("click",(function(e){var i=parseInt(t.options.changeMode+"",10);if(!isNaN(i))switch(i){case 1:{let i;for(i of e.target.parentElement.children)if(!i.isSameNode(e.target))return setTimeout((function(){i.hasClass(t.triggerClass)&&i.is(":visible")&&i.dispatchEvent(new MouseEvent("mouseenter"))}),0),!1;break}case 2:t.hide();break;case 3:t.options.target.dispatchEvent(new MouseEvent("mouseleave")),t.options.target.dispatchEvent(new MouseEvent("mouseenter"))}}))}toggle(t){this.status?this.hide():this.show(t)}show(){var t=this,e=200;"info"===this.options.type&&(e=0),this.status||(clearTimeout(this.timeOut),this.timeOut=window.setTimeout((function(){t.options.singleMode&&t.destroy(!0),t.create(),t.status=1,t.$zwtooltips.classList.add("active"),"function"==typeof t.options.onShow&&t.options.onShow(t),t.options.autoHide&&setTimeout((function(){t.hide()}),t.options.hideTime)}),e))}add(t){"string"==typeof t?t=Object.assign(this.options,{text:t}):"object"==typeof t&&(t=Object.assign(this.options,t));var e=this.template(!1,t);this.$zwtooltips.insertAdjacentElement("beforeend",e),this.updatePos(!0)}hide(){this.status=0,clearTimeout(this.timeOut),this.$zwtooltips&&this.$zwtooltips.classList.remove("active"),"function"==typeof this.options.onHide&&this.options.onHide(this),this.options.autoRemove&&this.destroy()}destroy(t){if(clearTimeout(this.timeOut),t){var e=document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]');e&&e.remove()}else this.$zwtooltips&&this.$zwtooltips.remove()}getElemPos(t){var e=S.offset2(t);let i=t.getBoundingClientRect();return{x:e.left,y:e.top,w:i.width,h:i.height}}create(){document.querySelector("."+this.prefix+'[data-tooltip-name="'+this.options.name+'"]')||(this.$zwtooltips=this.template(!0),this.options.game&&this.$zwtooltips.classList.add("tooltip-game"),this.options.target.insertAdjacentElement("beforeend",this.$zwtooltips)),this.$zwtooltips.insertAdjacentElement("beforeend",this.template()),this.updatePos()}template(t,e){var i,o,n,r="",s=[];if(o=(e=e||this.options).text||e.target.getAttribute("data-text"),n=e.position||e.target.getAttribute("data-position"),e.changeMode=e.target.getAttribute("data-change-mode")||0,t)s.push(e.type),s.push(n),e.animation&&s.push("animation"),i=s.join(" "),r='<div class="'+this.prefix+" "+i+'"  data-tooltip-name="'+e.name+'"></div>';else{var a="";e.padding&&(e.padding instanceof Array?a+="padding:"+e.padding.join("px ")+"px;":"number"==typeof e.padding&&(a+="padding:"+e.padding+";")),e.fontSize&&"number"==typeof e.fontSize&&(a+="font-size:"+e.fontSize+"px;"),r='<div class="zw-tooltip" style="'+a+'">'+o+"</div>"}return document.createRange().createContextualFragment(r).firstElementChild}updatePos(){var t,e,i,o=this.options,n=this.getElemPos(o.target),r=this.getElemPos(this.$zwtooltips);switch(o.position||o.target.getAttribute("data-position")){case"top-left":t=n.x,e=n.y-o.margin-r.h+10,i="left:"+n.w/2+"px;";break;case"top-center":t=n.x+n.w/2-r.w/2,e=n.y+o.margin+10,i="left:"+r.w/2+"px;";break;case"top-right":t=n.x+n.w-r.w,e=n.y-o.margin-r.h+10,i="left:"+(r.w-n.w/2)+"px;";break;case"bottom-left":t=n.x,e=n.y+n.h+o.margin-10,i="left:"+n.w/2+"px;";break;case"bottom-center":t=n.x+n.w/2-r.w/2,e=n.y+n.h+o.margin-10,i="left:"+r.w/2+"px;";break;case"bottom-right":t=n.x+n.w-r.w,e=n.y+n.h+o.margin-10,i="left:"+(r.w-n.w/2)+"px;";break;case"left-top":t=n.x-o.margin-r.w+10,e=n.y;break;case"left-center":t=n.x-o.margin-r.w+10,e=n.y+n.h/2-r.h/2;break;case"left-bottom":t=n.x-o.margin-r.w+10,e=n.y+n.h-r.h;break;case"right-top":t=n.x+o.margin+n.w-10,e=n.y;break;case"right-center":t=n.x+o.margin+n.w-10,e=n.y+n.h/2-r.h/2;break;case"right-bottom":t=n.x+o.margin+n.w-10,e=n.y+n.h-r.h;break;case"center-center":t=n.x+n.w/2-r.w/2,e=n.y+n.h/2-r.h/2+10}if(o.arrow){var s='<div class="arrow" style="'+i+'"></div>';this.$zwtooltips.insertAdjacentHTML("beforeend",s)}this.$zwtooltips.style.top=e+o.top+document.documentElement.clientTop-window.pageYOffset+"px",this.$zwtooltips.style.left=t+o.left+document.documentElement.clientLeft-window.pageXOffset+"px"}}S.showTooltip=function(t,e,{position:i="center-center",left:o=0,top:n=0}={}){t&&""!=t.trim()?new N({text:t,target:e,position:i,left:o,top:n}):console.debug("Tooltip is empty: "+t)}})(),o})()}));