!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sitelib=t():e.sitelib=t()}(self,(function(){return(()=>{"use strict";var e={882:(e,t,i)=>{i.d(t,{DEFAULT_LOG_GROUP:()=>o});const o="Common"},25:(e,t,i)=>{i.d(t,{g:()=>o});class o{equals(e){return this===e}}},232:(e,t,i)=>{i.d(t,{D:()=>n});var o=i(882),r=i(25);let n={printGroupDebug:function(e=o.DEFAULT_LOG_GROUP,...t){console.group(`[${e}]`);let i=[];for(let e=0;e<t.length;e++)i.push(n.isObject(t[e])?JSON.parse(JSON.stringify(t[e])):t[e]);console.debug(...i),console.groupEnd()},get:function(e,t,i){return new Promise(((o,r)=>{let n=new XMLHttpRequest;if(n.responseType=i||"json",n.addEventListener("load",(function(){o(this.response||this.responseText)})),n.addEventListener("error",(function(){r(this)})),n.open("GET",e),t)for(let e in t)n.setRequestHeader(e,t[e]);n.send()}))},post:function(e,t={"Content-Type":"application/x-www-form-urlencoded"},i,o){return new Promise(((r,n)=>{let s=new XMLHttpRequest;s.responseType=o||"json",s.addEventListener("load",(function(){r(this.response||this.responseText)})),s.addEventListener("error",(function(){n(this)})),s.open("POST",e);for(let e in t)s.setRequestHeader(e,t[e]);s.send(i)}))},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let i=0,o=t.length;i<o;i++){let o=t[i].split("=");if(o[0]==e)return decodeURIComponent(o[1])}return""},getQueryVariable:function(e){let t=window.location.search.substring(1).split("&");for(let i=0;i<t.length;i++){let o=t[i].split("=");if(o[0]==e)return o[1]}return!1},asyncDelayedFn:function(e,t,i,o=0){return new Promise(((r,n)=>setTimeout((()=>{void 0===i?r(t.apply(e)):Array.isArray(i)?r(t.apply(e,i)):n(i),r(!0)}),o)))},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(this._common_used_numerals);for(const i of e)if(!t.includes(i))return!1;return!0},zh2Digits:function(e){if(n.isInteger(e))return e;if(!this.isChineseDigits(e))return;let t=0,i=1;for(let o=e.length-1;o>=0;o--){let r=this._common_used_numerals[e[o]];r>=10&&0==o?r>i?(i=r,t+=r):i*=r:r>=10?r>i?i=r:i*=r:t+=i*r}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!n.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"],i=e.length;return 1==i?t[e]:2==i?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},anyMemberNotEmpty:function(e,t){let i;return e.some((e=>(i=t[e],!!i))),i},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)||e instanceof Object},isString:function(e){return e instanceof String||"string"==typeof e},isBlank:function(e){return n.isString(e)?""===e.trim():null==e},assignNotUndefined:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((i=>{let o=t[i];void 0!==o&&(e[i]=o)}))})),e},isIterable:function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},isEqual(e,t){if(e instanceof Array){if(!(t instanceof Array)||e.length!=t.length)return!1;for(let i=0;i<e.length;i++)if(!n.isEqual(e[i],t[i]))return!1;return!0}return!!Object.is(e,t)||(e instanceof r.g?e.equals(t):e===t)}}},347:(e,t,i)=>{i.r(t),i.d(t,{PlayerMetadata:()=>n,Site:()=>s,VideoSite:()=>a,VideoPortalSite:()=>l});var o=i(235),r=i(70);class n{#e;get containerSelector(){return this.#e}#t;get controlsSelector(){return this.#t}#i;get topElementSelectors(){return this.#i}#o;get playButtonSelector(){return this.#o}#r;get fullscreenButtonSelector(){return this.#r}#n;get webFullscreenButtonSelector(){return this.#n}#s;get volumeButtonSelector(){return this.#s}constructor(e,t,i,o,r,n,s){this.#e=e,this.#t=t,this.#i=i,this.#o=o,this.#s=r,this.#r=n,this.#n=s}}class s{#a;get id(){return this.#a}#l;get origin(){return this.#l}#c;get hrefRegEx(){return this.#c}#u;get siteCategories(){return this.#u}#d;get subcategories(){return this.#d}#g;get originWhitelist(){return this.#g}#I;get additionalInfo(){return this.#I}constructor({id:e,origin:t,hrefRegEx:i,siteCategories:o=[],subcategories:r=[],originWhitelist:n=[],additionalInfo:s={}}){this.#a=e,this.#l=t,this.#c=i,this.#u=o,this.#d=r,this.#g=n,this.#I=s}isEmbedded(){return self!==top}isMessageOriginAllowed(e){return!(!e||e!==window.location.origin&&!this.#g?.includes(e))}postMessage(e,t,i,o,n=!1){if(!t||!n&&e===self)return;let s={type:t,content:i,src:window.location.href};r.D.printSendMessage(o,s),e.postMessage(s,o)}test(){return this.#c?this.#c.test(window.location.href):this.#l?this.#l==window.location.origin:void 0}isFromTampermonkey(e){return e.data&&o.MessageTypes.test(e.data.type)}}class a extends s{#E;get parent(){return this.#E}#p;get defaultPlayerMetadata(){return this.#p}constructor(e,t){super({id:e.id,origin:e.origin,hrefRegEx:e.hrefRegEx,siteCategories:e.siteCategories,subcategories:e.subcategories,originWhitelist:e.originWhitelist}),this.#E=e,this.#p=t}}class l extends s{constructor(e){super({id:e.id,origin:e.origin,hrefRegEx:e.hrefRegEx,siteCategories:e.siteCategories,subcategories:e.subcategories,originWhitelist:e.originWhitelist})}}},425:(e,t,i)=>{i.r(t),i.d(t,{SiteCategories:()=>r,VideoCategories:()=>n,SiteIDs:()=>s,Sites:()=>a,VideoSites:()=>u,VideoPortalSites:()=>d});var o=i(347);const r={DATABASE:"Database",DICTIONARY:"Dictionary",GAMING:"Gaming",IMAGE_HOSTING:"Image Hosting",JAV:"JAV",LIVE_STREAMING:"Live Streaming",VIDEO_HOSTING:"Video Hosting",VIDEO_SHARING:"Video Sharing",VIDEO_STREAMING:"Video Streaming"},n={JAV:"JAV",TV_SERIES:"TV Series",MOVIE:"Movie"},s={"7MM":"7MM",AVGLE:"AVGLE",AVGLE_EMBED:"AVGLE_EMBED",BILIBILI:"BILIBILI",BILIBILI_VIDEO:"BILIBILI_VIDEO",BILIBILI_BANGUMI:"BILIBILI_BANGUMI",BILIBILI_LIVE:"BILIBILI_LIVE",BUYCAR5:"BUYCAR5",DIOUS:"DIOUS",JABLE:"JABLE",JAVLIBRARY:"JAVLIBRARY",JX444662:"JX444662",MEIJUBS:"MEIJUBS",MEIJUTTB:"MEIJUTTB",MINGTIAN6:"MINGTIAN6",MM9842:"MM9842",NEXUSMODS:"NEXUSMODS",QINGBEIBAN:"QINGBEIBAN",QXWK:"QXWK",STEAM_COMMUNITY_REVIEW:"STEAM_COMMUNITY_REVIEW",STEAM_STORE:"STEAM_STORE",WALLHAVEN:"WALLHAVEN",WUKONGMEIJU:"WUKONGMEIJU",YOUTUBE_EMBED:"YOUTUBE_EMBED"},a={"7MM":new o.Site({id:s["7MM"],origin:"https://7mmtv.tv",hrefRegEx:/^https:\/\/7mmtv\.tv\/.*/,siteCategories:[r.JAV,r.VIDEO_STREAMING],subcategories:[n.JAV],originWhitelist:["https://mm9842.com","https://avgle.com"]}),AVGLE:new o.Site({id:s.AVGLE,origin:"https://avgle.com",hrefRegEx:/^https:\/\/avgle\.com\/video\/\w+/,siteCategories:[r.JAV,r.VIDEO_SHARING],subcategories:[n.JAV],originWhitelist:["https://7mmtv.tv"]}),AVGLE_EMBED:new o.Site({id:s.AVGLE_EMBED,origin:"https://avgle.com",hrefRegEx:/^https:\/\/avgle\.com\/embed\/\w+$/,siteCategories:[r.JAV,r.VIDEO_SHARING],subcategories:[n.JAV],originWhitelist:["https://7mmtv.tv"]}),BILIBILI:new o.Site({id:s.BILIBILI,origin:"https://www.bilibili.com",hrefRegEx:/^https:\/\/www\.bilibili\.com\/.*/,siteCategories:[r.VIDEO_SHARING]}),BILIBILI_BANGUMI:new o.Site({id:s.BILIBILI_BANGUMI,origin:"https://www.bilibili.com",hrefRegEx:/^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/,siteCategories:[r.VIDEO_SHARING]}),BILIBILI_LIVE:new o.Site({id:s.BILIBILI_LIVE,origin:"https://live.bilibili.com",hrefRegEx:/^https:\/\/live\.bilibili\.com\/.*/,siteCategories:[r.LIVE_STREAMING]}),BILIBILI_VIDEO:new o.Site({id:s.BILIBILI_VIDEO,origin:"https://www.bilibili.com",hrefRegEx:/^https:\/\/www\.bilibili\.com\/video\/.+/,siteCategories:[r.VIDEO_SHARING]}),BUYCAR5:new o.Site({id:s.BUYCAR5,origin:"https://vod3.buycar5.cn",hrefRegEx:/^https:\/\/vod\d+\.buycar5\.cn/,siteCategories:[r.VIDEO_HOSTING],originWhitelist:["https://www.meijuttb.com","https://www.meijubs.com"]}),DIOUS:new o.Site({id:s.DIOUS,origin:"https://v7.dious.cc",hrefRegEx:/^https:\/\/v7.dious.cc/,siteCategories:[r.VIDEO_HOSTING],originWhitelist:["https://www.meijuttb.com","https://www.meijubs.com"]}),JABLE:new o.Site({id:s.JABLE,origin:"https://jable.tv",hrefRegEx:/^https:\/\/jable.tv/,siteCategories:[r.JAV,r.VIDEO_SHARING],subcategories:[n.JAV]}),JAVLIBRARY:new o.Site({id:s.JAVLIBRARY,origin:"https://www.javlibrary.com",hrefRegEx:/^https:\/\/www\.javlibrary\.com\/.*/,siteCategories:[r.JAV,r.DATABASE]}),JX444662:new o.Site({id:s.JX444662,origin:"https://jx.444662.cn",hrefRegEx:/^https:\/\/jx.444662.cn/,siteCategories:[r.VIDEO_HOSTING],originWhitelist:["https://www.meijuttb.com","https://www.meijubs.com"]}),MEIJUBS:new o.Site({id:s.MEIJUBS,origin:"https://www.meijubs.com",siteCategories:[r.VIDEO_STREAMING],subcategories:[n.TV_SERIES],originWhitelist:["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn","https://v7.dious.cc"]}),MEIJUTTB:new o.Site({id:s.MEIJUTTB,origin:"https://www.meijuttb.com",siteCategories:[r.VIDEO_STREAMING],subcategories:[n.TV_SERIES],originWhitelist:["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn"]}),MINGTIAN6:new o.Site({id:s.MINGTIAN6,origin:"https://www.mingtian6.com",siteCategories:[r.VIDEO_STREAMING],subcategories:[n.TV_SERIES,n.MOVIE],originWhitelist:["https://www.qingbeiban.com"]}),MM9842:new o.Site({id:s.MM9842,origin:"https://mm9842.com",hrefRegEx:/^https:\/\/mm9842.com/,siteCategories:[r.VIDEO_HOSTING],originWhitelist:["https://7mmtv.tv"]}),NEXUSMODS:new o.Site({id:s.NEXUSMODS,origin:"https://www.nexusmods.com",siteCategories:[r.GAMING],originWhitelist:["https://www.youtube.com"]}),QINGBEIBAN:new o.Site({id:s.QINGBEIBAN,origin:"https://www.qingbeiban.com",hrefRegEx:/^https:\/\/www.qingbeiban.com/,siteCategories:[r.VIDEO_HOSTING],originWhitelist:["https://www.mingtian6.com"]}),QXWK:new o.Site({id:s.QXWK,origin:"https://code.qxwk.net",hrefRegEx:/^https:\/\/code.qxwk.net/,siteCategories:[r.VIDEO_HOSTING],originWhitelist:["https://m.wukongmeiju.com"]}),STEAM_COMMUNITY_REVIEW:new o.Site({id:s.STEAM_COMMUNITY_REVIEW,origin:"https://steamcommunity.com",hrefRegEx:/^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/,siteCategories:[r.GAMING]}),STEAM_STORE:new o.Site({id:s.STEAM_STORE,origin:"https://store.steampowered.com",hrefRegEx:/^https:\/\/store\.steampowered\.com\/.*/,siteCategories:[r.GAMING]}),WALLHAVEN:new o.Site({id:s.WALLHAVEN,origin:"https://wallhaven.cc",hrefRegEx:/^https:\/\/wallhaven\.cc\/.*/,siteCategories:[r.IMAGE_HOSTING]}),WUKONGMEIJU:new o.Site({id:s.WUKONGMEIJU,origin:"https://m.wukongmeiju.com",siteCategories:[r.VIDEO_STREAMING],subcategories:[n.TV_SERIES],originWhitelist:["https://code.qxwk.net"]}),YOUTUBE_EMBED:new o.Site({id:s.YOUTUBE_EMBED,origin:"https://www.youtube.com",hrefRegEx:/^https:\/\/www.youtube.com\/embed\/[\w-]+$/,siteCategories:[r.VIDEO_SHARING],originWhitelist:["https://www.nexusmods.com"]}),get(e){for(let t in a)if(t===e)return a[t]}};let l=["div#video-player","div.vjs-control-bar",void 0,"button.vjs-play-control",void 0,"button.vjs-fullscreen-control"],c=["div#dplayer, div#mvideo",void 0,"button.dplayer-play-icon","button.dplayer-volume-icon","button.dplayer-full-icon"];const u={AVGLE:new o.VideoSite(a.AVGLE,new o.PlayerMetadata(...l)),AVGLE_EMBED:new o.VideoSite(a.AVGLE_EMBED,new o.PlayerMetadata(...l)),BILIBILI_VIDEO:new o.VideoSite(a.BILIBILI_VIDEO,new o.PlayerMetadata("div.bilibili-player-video-wrap",".bilibili-player-video-control-wrap",void 0,"div.bilibili-player-video-btn-start","button.bilibili-player-iconfont-volume","div.bilibili-player-video-btn-fullscreen button","div.bilibili-player-video-web-fullscreen button")),BILIBILI_BANGUMI:new o.VideoSite(a.BILIBILI_BANGUMI,new o.PlayerMetadata("div.bpx-player-video-area",".bpx-player-control-wrap",void 0,"div.squirtle-video-start","div.squirtle-volume-icon","div.squirtle-video-fullscreen","div.squirtle-video-pagefullscreen")),BUYCAR5:new o.VideoSite(a.BUYCAR5,new o.PlayerMetadata(...c)),DIOUS:new o.VideoSite(a.DIOUS,new o.PlayerMetadata(...c)),JABLE:new o.VideoSite(a.JABLE,new o.PlayerMetadata("div.plyr.plyr--video","div.plyr__controls",void 0,void 0,"button[data-plyr=mute]","button[data-plyr=fullscreen]")),JX444662:new o.VideoSite(a.JX444662,new o.PlayerMetadata("div#playerCnt","div.prism-controlbar",void 0)),MM9842:new o.VideoSite(a.MM9842,new o.PlayerMetadata("div.jw-wrapper","div.jw-controls",void 0,void 0,"div.jw-icon-volume","div.jw-icon-fullscreen")),QINGBEIBAN:new o.VideoSite(a.QINGBEIBAN,new o.PlayerMetadata(...c)),QXWK:new o.VideoSite(a.QXWK,new o.PlayerMetadata(...c)),YOUTUBE_EMBED:new o.VideoSite(a.YOUTUBE_EMBED,new o.PlayerMetadata("div#player",".ytp-chrome-bottom",[".ytp-pause-overlay"],"button.ytp-play-button","button.ytp-mute-button","button.ytp-fullscreen-button"))},d={"7MM":new o.VideoPortalSite(a["7MM"]),MEIJUBS:new o.VideoPortalSite(a.MEIJUBS),MEIJUTTB:new o.VideoPortalSite(a.MEIJUTTB),MINGTIAN6:new o.VideoPortalSite(a.MINGTIAN6),NEXUSMODS:new o.VideoPortalSite(a.NEXUSMODS)}},769:(e,t,i)=>{i.d(t,{D:()=>c});var o=i(425),r=i(347),n=i(232),s=i(70);let a=new WeakMap;function l(e){for(let t in e){const i=e[t];if(i.test()){let e;return a.has(i)?e=a.get(i):(e=e=>{i.isMessageOriginAllowed(e.origin)&&i.isFromTampermonkey(e)&&s.D.printReceiveMessage(e)},a.set(i,e)),window.addEventListener("message",e),i}}throw"No match for current site"}const c={getCurrentSite:function(){return l(o.Sites)},getCurrentVideoSite:function(){return l(o.VideoSites)},getCurrentVideoPortalSite:function(){return l(o.VideoPortalSites)}};n.D.get("https://raw.githubusercontent.com/maszhaowei/tampermonkey-lib/master/conf/site.json").then((e=>{if(n.D.isObject(e)){let t=e.siteids;if(n.D.isObject(t))for(let e in t)o.SiteIDs[e]=t[e];let i=e.sitecategories;if(n.D.isObject(i))for(let e in i)o.SiteCategories[e]=i[e];let s=e.videocategories;if(n.D.isObject(s))for(let e in s)o.VideoCategories[e]=s[e];let a=e.sites;if(n.D.isObject(a))for(let e in a){let t=a[e];o.Sites[e]=new r.Site({id:t.id,origin:t.origin,hrefRegEx:new RegExp(t.hrefRegEx),siteCategories:t.siteCategories,subcategories:t.subcategories,originWhitelist:t.originWhitelist})}let l=e.videosites;if(n.D.isObject(l))for(let e in l){let t=l[e],i=t.siteid,n=o.Sites.get(i);n&&(o.VideoSites[e]=new r.VideoSite(n,new r.PlayerMetadata(t.containerSelector,t.controlsSelector,t.topElementSelectors,t.playButtonSelector,t.volumeButtonSelector,t.fullscreenButtonSelector,t.webFullscreenButtonSelector)))}let c=e.videoportalsites;if(n.D.isObject(c))for(let e in c){let t=c[e].siteid,i=o.Sites.get(t);i&&(o.VideoPortalSites[e]=new r.VideoPortalSite(i))}}}))},719:(e,t,i)=>{i.d(t,{scriptName:()=>r});const o="undefined"==typeof GM_info?{name:"Tampermonkey"}:GM_info.script,r=o&&o.name},235:(e,t,i)=>{i.d(t,{MessageTypes:()=>o,EMOJIS:()=>r});const o={GENERAL:"general",SITE_INFO:"site_info",VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",SWITCH_PLAYING_VIDEO:"switch_playing_video",READY_FOR_MESSAGE:"ready_for_message",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",KEYDOWN:"keydown",VIEWPORT_DIMENSION:"viewport_dimension",test:function(e){if(e===o.test)return!1;for(let t in o)if(this[t]===e)return!0;return!1}},r={angry:[",,Ծ‸Ծ,,","(╯‵□′)╯︵┻━┻"],happy:["=‿=✧","●ω●","(/ ▽ \\)","(=・ω・=)","(●'◡'●)ﾉ♥","<(▰˘◡˘▰)>","(⁄ ⁄•⁄ω⁄•⁄ ⁄)","(ง,,• ᴗ •,,)ง ✧",">ㅂ<ﾉ ☆"],shock:["Σ( ° △ °|||)︴","┌( ಠ_ಠ)┘","(ﾟДﾟ≡ﾟдﾟ)!?","∑(っ °Д °;)っ"],sad:["＞︿＜","＞△＜","●︿●","(´；ω；`)"],helpless:["◐▽◑","ʅ（´◔౪◔）ʃ","_(:3 」∠)_","_(┐「ε:)_","(°▽°)ﾉ","←◡←","_(•̀ᴗ•́ 」∠ ❀)_","_φ(･ω･` )"],custom:["(`･ω･´)","(^_-)-☆","༼ つ ◕_◕ ༽つ","(☞ﾟヮﾟ)☞","( ͡° ͜ʖ ͡°)","(っ˘ڡ˘ς)","(⌐■_■)","( ͡~ ͜ʖ ͡°)","(╯°□°）╯︵ ┻━┻","(͡•_ ͡• )"]}},70:(e,t,i)=>{i.d(t,{D:()=>s});var o=i(719),r=i(235),n=i(232);const s={debug:function(...e){n.D.printGroupDebug(o.scriptName,...e)},gmGet:function(e,t,i){return new Promise(((o,r)=>{GM_xmlhttpRequest({method:"GET",url:e,headers:t,responseType:i||"json",onload:e=>{o(e.response||e.responseText)},onerror:e=>{r(e)}})}))},gmPost:function(e,t,i,o){return t=t||{"Content-Type":"application/x-www-form-urlencoded"},n.D.isObject(i)&&(i=JSON.stringify(i)),new Promise(((r,n)=>{GM_xmlhttpRequest({method:"POST",url:e,headers:t,data:i,responseType:o||"json",onload:e=>{r("blob"===o?e:e.response||e.responseText)},onerror:e=>{n(e)}})}))},printReceiveMessage:function(e){s.debug(`>>> From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage:function(e,t){s.debug(`<<< To: ${e}, From: ${window.location.origin}, Message:`,t)},randomEmoji:{}};for(let e in r.EMOJIS)s.randomEmoji[e]=()=>r.EMOJIS[e][Math.floor(Math.random()*r.EMOJIS[e].length)]}},t={};function i(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{Class:()=>e,Enum:()=>t,util:()=>r.D});var e=i(347),t=i(425),r=i(769)})(),o})()}));