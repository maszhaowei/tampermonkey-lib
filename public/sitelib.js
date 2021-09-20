!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sitelib=t():e.sitelib=t()}(self,(function(){return(()=>{"use strict";var e={232:(e,t,i)=>{i.d(t,{D:()=>o});let o={printGroupDebug:function(e,...t){console.group(`[${e}]`);let i=[];for(let e=0;e<t.length;e++)i.push(JSON.parse(JSON.stringify(t[e])));console.debug(...i),console.groupEnd()},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let i=0,o=t.length;i<o;i++){let o=t[i].split("=");if(o[0]==e)return decodeURIComponent(o[1])}return""},getQueryVariable:function(e){let t=window.location.search.substring(1).split("&");for(let i=0;i<t.length;i++){let o=t[i].split("=");if(o[0]==e)return o[1]}return!1},asyncDelayedFn:function(e,t,i,o=0){return new Promise(((n,r)=>setTimeout((()=>{void 0===i?n(t.apply(e)):Array.isArray(i)?n(t.apply(e,i)):r(i),n(!0)}),o)))},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(this._common_used_numerals);for(const i of e)if(!t.includes(i))return!1;return!0},zh2Digits:function(e){if(o.isInteger(e))return e;if(!this.isChineseDigits(e))return;let t=0,i=1;for(let o=e.length-1;o>=0;o--){let n=this._common_used_numerals[e[o]];n>=10&&0==o?n>i?(i=n,t+=n):i*=n:n>=10?n>i?i=n:i*=n:t+=i*n}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!o.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"];var i=e.length;return 1==i?t[e]:2==i?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},anyMemberNotEmpty:function(e,t){let i;return e.some((e=>(i=t[e],!!i))),i},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)}}},347:(e,t,i)=>{i.r(t),i.d(t,{SiteCategory:()=>n,PlayerMetadata:()=>r,Site:()=>s,VideoSite:()=>a});var o=i(70);class n{categoryName;titleRegEx;constructor(e,t){this.categoryName=e,this.titleRegEx=t}}class r{#e;get containerSelector(){return this.#e}#t;get controlsSelector(){return this.#t}#i;get topElementSelectors(){return this.#i}#o;get playButtonSelector(){return this.#o}#n;get fullscreenButtonSelector(){return this.#n}#r;get webFullscreenButtonSelector(){return this.#r}#s;get volumeButtonSelector(){return this.#s}constructor(e,t,i,o,n,r,s){this.#e=e,this.#t=t,this.#i=i,this.#o=o,this.#s=n,this.#n=r,this.#r=s}}class s{#a;get id(){return this.#a}#l;get origin(){return this.#l}#c;get hrefRegEx(){return this.#c}#u;get siteCategories(){return this.#u}#d;get originWhitelist(){return this.#d}constructor(e,t,i,o,n=[]){this.#a=e,this.#l=t,this.#c=i,this.#u=o,this.#d=n}isMessageOriginAllowed(e){return!!e&&(e===window.location.origin||this.#d.includes(e))}postMessage(e,t,i,n){if(!t)return;let r={type:t,content:i,src:window.location.href};o.D.printSendMessage(n,r),e.postMessage(r,n)}test(){return this.#c?this.#c.test(window.location.href):this.#l?this.#l==window.location.origin:void 0}}class a extends s{#I;get parent(){return this.#I}#p;get defaultPlayerMetadata(){return this.#p}constructor(e,t){super(e.id,e.origin,e.hrefRegEx,e.siteCategories,e.originWhitelist),this.#I=e,this.#p=t}}},425:(e,t,i)=>{i.r(t),i.d(t,{SiteCategories:()=>n,SiteIDs:()=>r,Sites:()=>s,VideoSites:()=>c});var o=i(347);const n={AV:new o.SiteCategory("AV",/([a-zA-Z]+-\d+)(-(\w+))?/),DB:new o.SiteCategory("DB"),GAME:new o.SiteCategory("Game"),IMAGE_HOSTING:new o.SiteCategory("Image Hosting"),LIVE_STREAMING:new o.SiteCategory("Live Streaming"),MODDING:new o.SiteCategory("Modding"),MOVIE:new o.SiteCategory("Movie"),TV_SERIES:new o.SiteCategory("TV Series",/([\u4e00-\u9fa5\w]+)第(.+)季.*第(.+)集/),VIDEO_HOSTING:new o.SiteCategory("Video Hosting"),VIDEO_SHARING:new o.SiteCategory("Video Sharing")},r={"7MM":"7MM",AVGLE:"AVGLE",AVGLE_EMBED:"AVGLE_EMBED",BILIBILI:"BILIBILI",BILIBILI_VIDEO:"BILIBILI_VIDEO",BILIBILI_BANGUMI:"BILIBILI_BANGUMI",BILIBILI_LIVE:"BILIBILI_LIVE",BUYCAR5:"BUYCAR5",DIOUS:"DIOUS",JABLE:"JABLE",JAVLIBRARY:"JAVLIBRARY",JX444662:"JX444662",MEIJUBS:"MEIJUBS",MEIJUTTB:"MEIJUTTB",MINGTIAN6:"MINGTIAN6",MM9842:"MM9842",NEXUSMODS:"NEXUSMODS",QINGBEIBAN:"QINGBEIBAN",QXWK:"QXWK",STEAM_COMMUNITY_REVIEW:"STEAM_COMMUNITY_REVIEW",STEAM_STORE:"STEAM_STORE",WALLHAVEN:"WALLHAVEN",WUKONGMEIJU:"WUKONGMEIJU",YOUTUBE_EMBED:"YOUTUBE_EMBED"},s={"7MM":new o.Site(r["7MM"],"https://7mmtv.tv",/^https:\/\/7mmtv\.tv\/.*/,[n.AV],["https://mm9842.com","https://avgle.com"]),AVGLE:new o.Site(r.AVGLE,"https://avgle.com",/^https:\/\/avgle\.com\/video\/\w+/,[n.AV],["https://7mmtv.tv"]),AVGLE_EMBED:new o.Site(r.AVGLE_EMBED,"https://avgle.com",/^https:\/\/avgle\.com\/embed\/\w+$/,[n.AV],["https://7mmtv.tv"]),BILIBILI:new o.Site(r.BILIBILI,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/.*/,[n.VIDEO_SHARING]),BILIBILI_BANGUMI:new o.Site(r.BILIBILI_BANGUMI,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/,[n.VIDEO_SHARING]),BILIBILI_LIVE:new o.Site(r.BILIBILI_LIVE,"https://live.bilibili.com",/^https:\/\/live\.bilibili\.com\/.*/,[n.LIVE_STREAMING]),BILIBILI_VIDEO:new o.Site(r.BILIBILI_VIDEO,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/video\/.+/,[n.VIDEO_SHARING]),BUYCAR5:new o.Site(r.BUYCAR5,"https://vod3.buycar5.cn",/^https:\/\/vod\d+\.buycar5\.cn/,[n.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),DIOUS:new o.Site(r.DIOUS,"https://v7.dious.cc",/^https:\/\/v7.dious.cc/,[n.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),JABLE:new o.Site(r.JABLE,"https://jable.tv",/^https:\/\/jable.tv/,[n.AV]),JAVLIBRARY:new o.Site(r.JAVLIBRARY,"https://www.javlibrary.com",/^https:\/\/www\.javlibrary\.com\/.*/,[n.AV]),JX444662:new o.Site(r.JX444662,"https://jx.444662.cn",/^https:\/\/jx.444662.cn/,[n.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),MEIJUBS:new o.Site(r.MEIJUBS,"https://www.meijubs.com",void 0,[n.TV_SERIES],["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn","https://v7.dious.cc"]),MEIJUTTB:new o.Site(r.MEIJUTTB,"https://www.meijuttb.com",void 0,[n.TV_SERIES],["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn"]),MINGTIAN6:new o.Site(r.MINGTIAN6,"https://www.mingtian6.com",void 0,[n.TV_SERIES],["https://www.qingbeiban.com"]),MM9842:new o.Site(r.MM9842,"https://mm9842.com",/^https:\/\/mm9842.com/,[n.AV],["https://7mmtv.tv"]),NEXUSMODS:new o.Site(r.NEXUSMODS,"https://www.nexusmods.com",void 0,[n.MODDING],["https://www.youtube.com"]),QINGBEIBAN:new o.Site(r.QINGBEIBAN,"https://www.qingbeiban.com",/^https:\/\/www.qingbeiban.com/,[n.VIDEO_HOSTING],["https://www.mingtian6.com"]),QXWK:new o.Site(r.QXWK,"https://code.qxwk.net",/^https:\/\/code.qxwk.net/,[n.VIDEO_HOSTING],["https://m.wukongmeiju.com"]),STEAM_COMMUNITY_REVIEW:new o.Site(r.STEAM_COMMUNITY_REVIEW,"https://steamcommunity.com",/^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/,[n.GAME]),STEAM_STORE:new o.Site(r.STEAM_STORE,"https://store.steampowered.com",/^https:\/\/store\.steampowered\.com\/.*/,[n.GAME]),WALLHAVEN:new o.Site(r.WALLHAVEN,"https://wallhaven.cc",/^https:\/\/wallhaven\.cc\/.*/,[n.IMAGE_HOSTING]),WUKONGMEIJU:new o.Site(r.WUKONGMEIJU,"https://m.wukongmeiju.com",void 0,[n.TV_SERIES],["https://code.qxwk.net"]),YOUTUBE_EMBED:new o.Site(r.YOUTUBE_EMBED,"https://www.youtube.com",/^https:\/\/www.youtube.com\/embed\/[\w-]+$/,[n.VIDEO_SHARING],["https://www.nexusmods.com"])};let a=["div#video-player","div.vjs-control-bar",void 0,"button.vjs-play-control",void 0,"button.vjs-fullscreen-control"],l=["div#dplayer, div#mvideo",void 0,"button.dplayer-play-icon","button.dplayer-volume-icon","button.dplayer-full-icon"];const c={AVGLE:new o.VideoSite(s.AVGLE,new o.PlayerMetadata(...a)),AVGLE_EMBED:new o.VideoSite(s.AVGLE_EMBED,new o.PlayerMetadata(...a)),BILIBILI_VIDEO:new o.VideoSite(s.BILIBILI_VIDEO,new o.PlayerMetadata("div.bilibili-player-video-wrap",".bilibili-player-video-control-wrap",void 0,"div.bilibili-player-video-btn-start","button.bilibili-player-iconfont-volume","div.bilibili-player-video-btn-fullscreen button","div.bilibili-player-video-web-fullscreen button")),BILIBILI_BANGUMI:new o.VideoSite(s.BILIBILI_BANGUMI,new o.PlayerMetadata("div.bpx-player-video-area",".bpx-player-control-wrap",void 0,"div.squirtle-video-start","div.squirtle-volume-icon","div.squirtle-video-fullscreen","div.squirtle-video-pagefullscreen")),BUYCAR5:new o.VideoSite(s.BUYCAR5,new o.PlayerMetadata(...l)),DIOUS:new o.VideoSite(s.DIOUS,new o.PlayerMetadata(...l)),JABLE:new o.VideoSite(s.JABLE,new o.PlayerMetadata("div.plyr.plyr--video","div.plyr__controls",void 0,void 0,"button[data-plyr=mute]","button[data-plyr=fullscreen]")),JX444662:new o.VideoSite(s.JX444662,new o.PlayerMetadata("div#playerCnt","div.prism-controlbar",void 0)),MM9842:new o.VideoSite(s.MM9842,new o.PlayerMetadata("div.jw-wrapper","div.jw-controls",void 0,void 0,"div.jw-icon-volume","div.jw-icon-fullscreen")),QINGBEIBAN:new o.VideoSite(s.QINGBEIBAN,new o.PlayerMetadata(...l)),QXWK:new o.VideoSite(s.QXWK,new o.PlayerMetadata(...l)),YOUTUBE_EMBED:new o.VideoSite(s.YOUTUBE_EMBED,new o.PlayerMetadata("div#player",".ytp-chrome-bottom",[".ytp-pause-overlay"],"button.ytp-play-button","button.ytp-mute-button","button.ytp-fullscreen-button"))}},847:(e,t,i)=>{i.d(t,{ApplyMethodSignature:()=>o});class o{context;fn;args;constructor(e,t,i){this.context=e,this.fn=t,this.args=i||[]}}},719:(e,t,i)=>{i.d(t,{scriptName:()=>r});const o="undefined"==typeof GM_info?{}:GM_info,n=o&&o.script,r=n&&n.name},790:(e,t,i)=>{i.d(t,{Enum:()=>o});var o={};i.r(o),i.d(o,{MessageTypes:()=>n}),i(719);const n={GENERAL:"general",SITE_INFO:"site_info",VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",SWITCH_PLAYING_VIDEO:"switch_playing_video",READY_FOR_MESSAGE:"ready_for_message",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",KEYDOWN:"keydown",test:function(e){for(let t in n)if(this[t]===e)return!0;return!1}};i(847),i(70)},70:(e,t,i)=>{i.d(t,{D:()=>r});var o=i(719),n=i(232);const r={debug:function(...e){n.D.printGroupDebug(`[${o.scriptName}]`,...e)},get:function(e,t,i){return new Promise(((o,n)=>{GM_xmlhttpRequest({method:"GET",url:e,headers:t,responseType:i||"json",onload:e=>{o(e.response||e.responseText)},onerror:e=>{n(e)}})}))},post:function(e,t,i,o){return t=t||{"Content-Type":"application/x-www-form-urlencoded"},new Promise(((n,r)=>{GM_xmlhttpRequest({method:"POST",url:e,headers:t,data:i,responseType:o||"json",onload:e=>{n(e.response||e.responseText)},onerror:e=>{r(e)}})}))},printReceiveMessage:function(e){r.debug(`>>> From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage:function(e,t){r.debug(`<<< To: ${e}, From: ${window.location.origin}, Message:`,t)}}}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,i),r.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{Class:()=>e,Enum:()=>t,util:()=>s});var e=i(347),t=i(425),n=i(70),r=i(790);const s={getCurrentSite:function(){for(let e in t.Sites){const i=t.Sites[e];if(i.test())return window.addEventListener("message",(e=>{e.data&&i.isMessageOriginAllowed(e.origin)&&r.Enum.MessageTypes.test(e.data.type)&&n.D.printReceiveMessage(e)})),i}throw"No match for current site"},getCurrentVideoSite:function(){for(let e in t.VideoSites){const i=t.VideoSites[e];if(i.test())return window.addEventListener("message",(e=>{e.data&&i.isMessageOriginAllowed(e.origin)&&r.Enum.MessageTypes.test(e.data.type)&&n.D.printReceiveMessage(e)})),i}throw"No match for current video site"},getCurrentPageCategory:function(e){let i=(e=e||s.getCurrentSite()).siteCategories;if(!Array.isArray(i)||0==i.length)throw"Site categories is empty.";return 1==i.length?i[0]:i.includes(t.SiteCategories.TV_SERIES)&&t.SiteCategories.TV_SERIES.titleRegEx.test(document.title)?i.TV_SERIES:i&&i.includes(t.SiteCategories.MOVIE)?t.SiteCategories.MOVIE:void 0}}})(),o})()}));