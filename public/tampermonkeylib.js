!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tampermonkeylib=t():e.tampermonkeylib=t()}(self,(function(){return(()=>{var e={719:(e,t,i)=>{"use strict";i.r(t),i.d(t,{scriptInfo:()=>r,scriptName:()=>s,SiteID:()=>n,SiteCategories:()=>I,currentSite:()=>a,currentVideoSite:()=>p,MessageType:()=>d,CallbackType:()=>m});const o=o||{},r=o&&o.script,s=r&&r.name,n={"7MM":"7MM",AVGLE:"AVGLE",AVGLE_EMBED:"AVGLE_EMBED",BILIBILI:"BILIBILI",BILIBILI_VIDEO:"BILIBILI_VIDEO",BILIBILI_BANGUMI:"BILIBILI_BANGUMI",BILIBILI_LIVE:"BILIBILI_LIVE",BUYCAR5:"BUYCAR5",DIOUS:"DIOUS",JABLE:"JABLE",JAVLIBRARY:"JAVLIBRARY",JX444662:"JX444662",MEIJUBS:"MEIJUBS",MEIJUTTB:"MEIJUTTB",MINGTIAN6:"MINGTIAN6",MM9842:"MM9842",NEXUSMODS:"NEXUSMODS",QINGBEIBAN:"QINGBEIBAN",QXWK:"QXWK",STEAM_COMMUNITY_REVIEW:"STEAM_COMMUNITY_REVIEW",STEAM_STORE:"STEAM_STORE",WALLHAVEN:"WALLHAVEN",WUKONGMEIJU:"WUKONGMEIJU",YOUTUBE_EMBED:"YOUTUBE_EMBED"},I={AV:{categoryName:"AV",titleRegEx:/([a-zA-Z]+-\d+)(-(\w+))?/},DB:{categoryName:"DB"},GAME:{categoryName:"Game"},IMAGE_HOSTING:{categoryName:"Image Hosting"},LIVE_STREAMING:{categoryName:"Live Streaming"},MODDING:{categoryName:"Modding"},MOVIE:{categoryName:"Movie"},TV_SERIES:{categoryName:"TV Series",titleRegEx:/([\u4e00-\u9fa5\w]+)第(.+)季.*第(.+)集/},VIDEO_HOSTING:{categoryName:"Video Hosting"},VIDEO_SHARING:{categoryName:"Video Sharing"}},E={"7MM":new c(n["7MM"],"https://7mmtv.tv",/^https:\/\/www\.bilibili\.com\/.*/,[I.AV],["https://mm9842.com","https://avgle.com"]),AVGLE:new c(n.AVGLE,"https://avgle.com",/^https:\/\/avgle\.com\/video\/\w+/,[I.AV],["https://7mmtv.tv"]),AVGLE_EMBED:new c(n.AVGLE_EMBED,"https://avgle.com",/^https:\/\/avgle\.com\/embed\/\w+$/,[I.AV],["https://7mmtv.tv"]),BILIBILI:new c(n.BILIBILI,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/.*/,[I.VIDEO_SHARING]),BILIBILI_BANGUMI:new c(n.BILIBILI_BANGUMI,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/,[I.VIDEO_SHARING]),BILIBILI_LIVE:new c(n.BILIBILI_LIVE,"https://live.bilibili.com",/^https:\/\/live\.bilibili\.com\/.*/,[I.LIVE_STREAMING]),BILIBILI_VIDEO:new c(n.BILIBILI_VIDEO,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/video\/.+/,[I.VIDEO_SHARING]),BUYCAR5:new c(n.BUYCAR5,"https://vod3.buycar5.cn",/^https:\/\/vod\d+\.buycar5\.cn/,[I.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),DIOUS:new c(n.DIOUS,"https://v7.dious.cc",/^https:\/\/v7.dious.cc/,[I.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),JABLE:new c(n.JABLE,"https://jable.tv",/^https:\/\/jable.tv/,[I.AV]),JAVLIBRARY:new c(n.JAVLIBRARY,"https://www.javlibrary.com",/^https:\/\/www\.javlibrary\.com\/.*/,[I.AV]),JX444662:new c(n.JX444662,"https://jx.444662.cn",/^https:\/\/jx.444662.cn/,[I.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),MEIJUBS:new c(n.MEIJUBS,"https://www.meijubs.com",void 0,[I.TV_SERIES],["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn","https://v7.dious.cc"]),MEIJUTTB:new c(n.MEIJUTTB,"https://www.meijuttb.com",void 0,[I.TV_SERIES],["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn"]),MINGTIAN6:new c(n.MINGTIAN6,"https://www.mingtian6.com",void 0,[I.TV_SERIES],["https://www.qingbeiban.com"]),MM9842:new c(n.MM9842,"https://mm9842.com",/^https:\/\/mm9842.com/,[I.AV],["https://7mmtv.tv"]),NEXUSMODS:new c(n.NEXUSMODS,"https://www.nexusmods.com",void 0,[I.MODDING],["https://www.youtube.com"]),QINGBEIBAN:new c(n.QINGBEIBAN,"https://www.qingbeiban.com",/^https:\/\/www.qingbeiban.com/,[I.VIDEO_HOSTING],["https://www.mingtian6.com"]),QXWK:new c(n.QXWK,"https://code.qxwk.net",/^https:\/\/code.qxwk.net/,[I.VIDEO_HOSTING],["https://m.wukongmeiju.com"]),STEAM_COMMUNITY_REVIEW:new c(n.STEAM_COMMUNITY_REVIEW,"https://steamcommunity.com",/^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/,[I.GAME]),STEAM_STORE:new c(n.STEAM_STORE,"https://store.steampowered.com",/^https:\/\/store\.steampowered\.com\/.*/,[I.GAME]),WALLHAVEN:new c(n.WALLHAVEN,"https://wallhaven.cc",/^https:\/\/wallhaven\.cc\/.*/,[I.IMAGE_HOSTING]),WUKONGMEIJU:new c(n.WUKONGMEIJU,"https://m.wukongmeiju.com",void 0,[I.TV_SERIES],["https://code.qxwk.net"]),YOUTUBE_EMBED:new c(n.YOUTUBE_EMBED,"https://www.youtube.com",/^https:\/\/www.youtube.com\/embed\/[\w-]+$/,[I.VIDEO_SHARING],["https://www.nexusmods.com"])};class c{#e;get id(){return this.#e}#t;get origin(){return this.#t}#i;get hrefRegEx(){return this.#i}#o;get siteCategories(){return this.#o}#r;get originWhitelist(){return this.#r}constructor(e,t,i,o,r=[]){this.#e=e,this.#t=t,this.#i=i,this.#o=o,this.#r=r}isMessageOriginAllowed(e){return!!e&&(e===window.location.origin||this.#r.includes(e))}test(){return this.#i&&this.#i.test(window.location.href)||this.#t&&this.#t==window.location.origin}static getSite(){for(let e in E)if(E[e].test())return E[e]}}const a=c.getSite(),w={AVGLE:new l(E.AVGLE,"div#video-player","div.vjs-control-bar"),AVGLE_EMBED:new l(E.AVGLE_EMBED,"div#video-player","div.vjs-control-bar"),BILIBILI_VIDEO:new l(E.BILIBILI_VIDEO,"div.bilibili-player-video-wrap",".bilibili-player-video-control-wrap"),BILIBILI_BANGUMI:new l(E.BILIBILI_BANGUMI,"div.bpx-player-video-area",".bpx-player-control-wrap"),BUYCAR5:new l(E.BUYCAR5,"div#dplayer,div#mvideo"),DIOUS:new l(E.DIOUS,"div#mvideo",".dplayer-controller"),JABLE:new l(E.JABLE,"div.plyr.plyr--video","div.plyr__controls"),JX444662:new l(E.JX444662,"div#playerCnt","div.prism-controlbar"),MM9842:new l(E.MM9842,"div.jw-wrapper","div.jw-controls"),QINGBEIBAN:new l(E.QINGBEIBAN,"div#dplayer,div#mvideo"),QXWK:new l(E.QXWK,"div#dplayer,div#mvideo"),YOUTUBE_EMBED:new l(E.YOUTUBE_EMBED,"div#player",".ytp-chrome-bottom",".ytp-pause-overlay")};class l extends c{#s;get containerSelector(){return this.#s}#n;get controlsSelector(){return this.#n}#I;get topOverlaySelector(){return this.#I}get currentPageCategory(){let e=super.siteCategories;if(Array.isArray(e)){if(1==e.length)return e[0];for(let t of e)if(t.titleRegEx&&t.titleRegEx.test(document.title))return t;return e.includes(I.MOVIE)?I.MOVIE:void 0}}constructor(e,t,i,o){super(e.id,e.origin,e.hrefRegEx,e.siteCategories,e.originWhitelist),this.#s=t,this.#n=i,this.#I=o}static getSite(){for(let e in w)if(w[e].test())return w[e]}}const p=l.getSite(),d={SITE_INFO:"site_info",VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",SWITCH_PLAYING_VIDEO:"switch_playing_video",READY_FOR_MESSAGE:"ready_for_message",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",KEYDOWN:"keydown",EVENT_DELEGATE_SELECTOR:"event+delegate_selector"},m={VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",PLAY:"play",KEYDOWN:"keydown",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",EVENT_DELEGATE_SELECTOR:"event+delegate_selector"}},573:()=>{},70:(e,t,i)=>{"use strict";i.d(t,{D:()=>r});var o=i(719);const r={debug(...e){console.group(`[${o.scriptName}]`),console.debug(...e),console.groupEnd()},get:(e,t,i)=>new Promise(((o,r)=>{GM_xmlhttpRequest({method:"GET",url:e,headers:t,responseType:i||"json",onload:e=>{o(e.response||e.responseText)},onerror:e=>{r(e)}})})),post:(e,t,i,o)=>(t=t||{"Content-Type":"application/x-www-form-urlencoded"},new Promise(((r,s)=>{GM_xmlhttpRequest({method:"POST",url:e,headers:t,data:i,responseType:o||"json",onload:e=>{r(e.response||e.responseText)},onerror:e=>{s(e)}})}))),printReceiveMessage(e){r.debug(`From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage(e,t){r.debug(`To: ${e}, From: ${window.location.origin}, Message:`,t)}}}},t={};function i(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,i),s.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";i.r(o),i.d(o,{Const:()=>e,util:()=>t.D});var e=i(719),t=i(70),r=i(573),s={};for(const e in r)["default","Const","util"].indexOf(e)<0&&(s[e]=()=>r[e]);i.d(o,s)})(),o})()}));