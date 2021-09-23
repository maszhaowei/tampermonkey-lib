!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sitelib=t():e.sitelib=t()}(self,(function(){return(()=>{"use strict";var e={882:(e,t,i)=>{i.d(t,{DEFAULT_LOG_GROUP:()=>o});const o="Common"},25:(e,t,i)=>{i.d(t,{g:()=>o});class o{equals(e){return this===e}}},232:(e,t,i)=>{i.d(t,{D:()=>r});var o=i(882),n=i(25);let r={printGroupDebug:function(e=o.DEFAULT_LOG_GROUP,...t){console.group(`[${e}]`);let i=[];for(let e=0;e<t.length;e++)i.push(r.isObject(t[e])?JSON.parse(JSON.stringify(t[e])):t[e]);console.debug(...i),console.groupEnd()},get:function(e,t,i){return new Promise(((o,n)=>{var r=new XMLHttpRequest;if(r.responseType=i||"json",r.addEventListener("load",(e=>{o(e.response||e.responseText)})),r.addEventListener("error",(e=>{n(e)})),r.open("GET",e),t)for(let e in t)r.setRequestHeader(e,t[e]);r.send()}))},post:function(e,t={"Content-Type":"application/x-www-form-urlencoded"},i,o){return new Promise(((n,r)=>{var s=new XMLHttpRequest;s.responseType=o||"json",s.addEventListener("load",(e=>{n(e.response||e.responseText)})),s.addEventListener("error",(e=>{r(e)})),s.open("POST",e);for(let e in t)s.setRequestHeader(e,t[e]);s.send(i)}))},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let i=0,o=t.length;i<o;i++){let o=t[i].split("=");if(o[0]==e)return decodeURIComponent(o[1])}return""},getQueryVariable:function(e){let t=window.location.search.substring(1).split("&");for(let i=0;i<t.length;i++){let o=t[i].split("=");if(o[0]==e)return o[1]}return!1},asyncDelayedFn:function(e,t,i,o=0){return new Promise(((n,r)=>setTimeout((()=>{void 0===i?n(t.apply(e)):Array.isArray(i)?n(t.apply(e,i)):r(i),n(!0)}),o)))},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(this._common_used_numerals);for(const i of e)if(!t.includes(i))return!1;return!0},zh2Digits:function(e){if(r.isInteger(e))return e;if(!this.isChineseDigits(e))return;let t=0,i=1;for(let o=e.length-1;o>=0;o--){let n=this._common_used_numerals[e[o]];n>=10&&0==o?n>i?(i=n,t+=n):i*=n:n>=10?n>i?i=n:i*=n:t+=i*n}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!r.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"];var i=e.length;return 1==i?t[e]:2==i?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},anyMemberNotEmpty:function(e,t){let i;return e.some((e=>(i=t[e],!!i))),i},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)||e instanceof Object},isString:function(e){return e instanceof String||"string"==typeof e},isBlank:function(e){return r.isString(e)?""===e.trim():null==e},assignNotUndefined:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((i=>{let o=t[i];void 0!==o&&(e[i]=o)}))})),e},isIterable:function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},isEqual(e,t){if(e instanceof Array){if(!(t instanceof Array)||e.length!=t.length)return!1;for(let i=0;i<e.length;i++)if(!r.isEqual(e[i],t[i]))return!1;return!0}return isNaN(e)?isNaN(t):e instanceof n.g?e.equals(t):e===t}}},347:(e,t,i)=>{i.r(t),i.d(t,{SiteCategory:()=>r,PlayerMetadata:()=>s,Site:()=>l,VideoSite:()=>a,VideoPortalSite:()=>c});var o=i(235),n=i(70);class r{categoryName;titleRegEx;constructor(e,t){this.categoryName=e,this.titleRegEx=t}}class s{#e;get containerSelector(){return this.#e}#t;get controlsSelector(){return this.#t}#i;get topElementSelectors(){return this.#i}#o;get playButtonSelector(){return this.#o}#n;get fullscreenButtonSelector(){return this.#n}#r;get webFullscreenButtonSelector(){return this.#r}#s;get volumeButtonSelector(){return this.#s}constructor(e,t,i,o,n,r,s){this.#e=e,this.#t=t,this.#i=i,this.#o=o,this.#s=n,this.#n=r,this.#r=s}}class l{#l;get id(){return this.#l}#a;get origin(){return this.#a}#c;get hrefRegEx(){return this.#c}#u;get siteCategories(){return this.#u}#d;get originWhitelist(){return this.#d}constructor(e,t,i,o,r=[]){this.#l=e,this.#a=t,this.#c=i,this.#u=o,this.#d=r,window.addEventListener("message",(e=>{this.isMessageOriginAllowed(e.origin)&&this.isFromTampermonkey(e)&&n.D.printReceiveMessage(e)}))}isEmbedded(){return self!==top}isMessageOriginAllowed(e){return!(!e||e!==window.location.origin&&!this.#d?.includes(e))}postMessage(e,t,i,o,r=!1){if(!t||!r&&e===self)return;let s={type:t,content:i,src:window.location.href};n.D.printSendMessage(o,s),e.postMessage(s,o)}test(){return this.#c?this.#c.test(window.location.href):this.#a?this.#a==window.location.origin:void 0}isFromTampermonkey(e){return e.data&&o.MessageTypes.test(e.data.type)}}class a extends l{#I;get parent(){return this.#I}#p;get defaultPlayerMetadata(){return this.#p}constructor(e,t){super(e.id,e.origin,e.hrefRegEx,e.siteCategories,e.originWhitelist),this.#I=e,this.#p=t}}class c extends l{constructor(e){super(e.id,e.origin,e.hrefRegEx,e.siteCategories,e.originWhitelist)}}},425:(e,t,i)=>{i.r(t),i.d(t,{SiteCategories:()=>n,SiteIDs:()=>r,Sites:()=>s,VideoSites:()=>c,VideoPortalSites:()=>u});var o=i(347);const n={AV:new o.SiteCategory("AV",/([a-zA-Z]+-\d+)(-(\w+))?/),DB:new o.SiteCategory("DB"),GAME:new o.SiteCategory("Game"),IMAGE_HOSTING:new o.SiteCategory("Image Hosting"),LIVE_STREAMING:new o.SiteCategory("Live Streaming"),MODDING:new o.SiteCategory("Modding"),MOVIE:new o.SiteCategory("Movie"),TV_SERIES:new o.SiteCategory("TV Series",/([\u4e00-\u9fa5\w]+)第(.+)季.*第(.+)集/),VIDEO_HOSTING:new o.SiteCategory("Video Hosting"),VIDEO_SHARING:new o.SiteCategory("Video Sharing")},r={"7MM":"7MM",AVGLE:"AVGLE",AVGLE_EMBED:"AVGLE_EMBED",BILIBILI:"BILIBILI",BILIBILI_VIDEO:"BILIBILI_VIDEO",BILIBILI_BANGUMI:"BILIBILI_BANGUMI",BILIBILI_LIVE:"BILIBILI_LIVE",BUYCAR5:"BUYCAR5",DIOUS:"DIOUS",JABLE:"JABLE",JAVLIBRARY:"JAVLIBRARY",JX444662:"JX444662",MEIJUBS:"MEIJUBS",MEIJUTTB:"MEIJUTTB",MINGTIAN6:"MINGTIAN6",MM9842:"MM9842",NEXUSMODS:"NEXUSMODS",QINGBEIBAN:"QINGBEIBAN",QXWK:"QXWK",STEAM_COMMUNITY_REVIEW:"STEAM_COMMUNITY_REVIEW",STEAM_STORE:"STEAM_STORE",WALLHAVEN:"WALLHAVEN",WUKONGMEIJU:"WUKONGMEIJU",YOUTUBE_EMBED:"YOUTUBE_EMBED"},s={"7MM":new o.Site(r["7MM"],"https://7mmtv.tv",/^https:\/\/7mmtv\.tv\/.*/,[n.AV],["https://mm9842.com","https://avgle.com"]),AVGLE:new o.Site(r.AVGLE,"https://avgle.com",/^https:\/\/avgle\.com\/video\/\w+/,[n.AV],["https://7mmtv.tv"]),AVGLE_EMBED:new o.Site(r.AVGLE_EMBED,"https://avgle.com",/^https:\/\/avgle\.com\/embed\/\w+$/,[n.AV],["https://7mmtv.tv"]),BILIBILI:new o.Site(r.BILIBILI,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/.*/,[n.VIDEO_SHARING]),BILIBILI_BANGUMI:new o.Site(r.BILIBILI_BANGUMI,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/,[n.VIDEO_SHARING]),BILIBILI_LIVE:new o.Site(r.BILIBILI_LIVE,"https://live.bilibili.com",/^https:\/\/live\.bilibili\.com\/.*/,[n.LIVE_STREAMING]),BILIBILI_VIDEO:new o.Site(r.BILIBILI_VIDEO,"https://www.bilibili.com",/^https:\/\/www\.bilibili\.com\/video\/.+/,[n.VIDEO_SHARING]),BUYCAR5:new o.Site(r.BUYCAR5,"https://vod3.buycar5.cn",/^https:\/\/vod\d+\.buycar5\.cn/,[n.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),DIOUS:new o.Site(r.DIOUS,"https://v7.dious.cc",/^https:\/\/v7.dious.cc/,[n.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),JABLE:new o.Site(r.JABLE,"https://jable.tv",/^https:\/\/jable.tv/,[n.AV]),JAVLIBRARY:new o.Site(r.JAVLIBRARY,"https://www.javlibrary.com",/^https:\/\/www\.javlibrary\.com\/.*/,[n.AV]),JX444662:new o.Site(r.JX444662,"https://jx.444662.cn",/^https:\/\/jx.444662.cn/,[n.VIDEO_HOSTING],["https://www.meijuttb.com","https://www.meijubs.com"]),MEIJUBS:new o.Site(r.MEIJUBS,"https://www.meijubs.com",void 0,[n.TV_SERIES],["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn","https://v7.dious.cc"]),MEIJUTTB:new o.Site(r.MEIJUTTB,"https://www.meijuttb.com",void 0,[n.TV_SERIES],["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn"]),MINGTIAN6:new o.Site(r.MINGTIAN6,"https://www.mingtian6.com",void 0,[n.TV_SERIES],["https://www.qingbeiban.com"]),MM9842:new o.Site(r.MM9842,"https://mm9842.com",/^https:\/\/mm9842.com/,[n.AV],["https://7mmtv.tv"]),NEXUSMODS:new o.Site(r.NEXUSMODS,"https://www.nexusmods.com",void 0,[n.MODDING],["https://www.youtube.com"]),QINGBEIBAN:new o.Site(r.QINGBEIBAN,"https://www.qingbeiban.com",/^https:\/\/www.qingbeiban.com/,[n.VIDEO_HOSTING],["https://www.mingtian6.com"]),QXWK:new o.Site(r.QXWK,"https://code.qxwk.net",/^https:\/\/code.qxwk.net/,[n.VIDEO_HOSTING],["https://m.wukongmeiju.com"]),STEAM_COMMUNITY_REVIEW:new o.Site(r.STEAM_COMMUNITY_REVIEW,"https://steamcommunity.com",/^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/,[n.GAME]),STEAM_STORE:new o.Site(r.STEAM_STORE,"https://store.steampowered.com",/^https:\/\/store\.steampowered\.com\/.*/,[n.GAME]),WALLHAVEN:new o.Site(r.WALLHAVEN,"https://wallhaven.cc",/^https:\/\/wallhaven\.cc\/.*/,[n.IMAGE_HOSTING]),WUKONGMEIJU:new o.Site(r.WUKONGMEIJU,"https://m.wukongmeiju.com",void 0,[n.TV_SERIES],["https://code.qxwk.net"]),YOUTUBE_EMBED:new o.Site(r.YOUTUBE_EMBED,"https://www.youtube.com",/^https:\/\/www.youtube.com\/embed\/[\w-]+$/,[n.VIDEO_SHARING],["https://www.nexusmods.com"]),get(e){for(let t in s)if(t===e)return s[t]}};let l=["div#video-player","div.vjs-control-bar",void 0,"button.vjs-play-control",void 0,"button.vjs-fullscreen-control"],a=["div#dplayer, div#mvideo",void 0,"button.dplayer-play-icon","button.dplayer-volume-icon","button.dplayer-full-icon"];const c={AVGLE:new o.VideoSite(s.AVGLE,new o.PlayerMetadata(...l)),AVGLE_EMBED:new o.VideoSite(s.AVGLE_EMBED,new o.PlayerMetadata(...l)),BILIBILI_VIDEO:new o.VideoSite(s.BILIBILI_VIDEO,new o.PlayerMetadata("div.bilibili-player-video-wrap",".bilibili-player-video-control-wrap",void 0,"div.bilibili-player-video-btn-start","button.bilibili-player-iconfont-volume","div.bilibili-player-video-btn-fullscreen button","div.bilibili-player-video-web-fullscreen button")),BILIBILI_BANGUMI:new o.VideoSite(s.BILIBILI_BANGUMI,new o.PlayerMetadata("div.bpx-player-video-area",".bpx-player-control-wrap",void 0,"div.squirtle-video-start","div.squirtle-volume-icon","div.squirtle-video-fullscreen","div.squirtle-video-pagefullscreen")),BUYCAR5:new o.VideoSite(s.BUYCAR5,new o.PlayerMetadata(...a)),DIOUS:new o.VideoSite(s.DIOUS,new o.PlayerMetadata(...a)),JABLE:new o.VideoSite(s.JABLE,new o.PlayerMetadata("div.plyr.plyr--video","div.plyr__controls",void 0,void 0,"button[data-plyr=mute]","button[data-plyr=fullscreen]")),JX444662:new o.VideoSite(s.JX444662,new o.PlayerMetadata("div#playerCnt","div.prism-controlbar",void 0)),MM9842:new o.VideoSite(s.MM9842,new o.PlayerMetadata("div.jw-wrapper","div.jw-controls",void 0,void 0,"div.jw-icon-volume","div.jw-icon-fullscreen")),QINGBEIBAN:new o.VideoSite(s.QINGBEIBAN,new o.PlayerMetadata(...a)),QXWK:new o.VideoSite(s.QXWK,new o.PlayerMetadata(...a)),YOUTUBE_EMBED:new o.VideoSite(s.YOUTUBE_EMBED,new o.PlayerMetadata("div#player",".ytp-chrome-bottom",[".ytp-pause-overlay"],"button.ytp-play-button","button.ytp-mute-button","button.ytp-fullscreen-button"))},u={"7MM":new o.VideoPortalSite(s["7MM"]),MEIJUBS:new o.VideoPortalSite(s.MEIJUBS),MEIJUTTB:new o.VideoPortalSite(s.MEIJUTTB),MINGTIAN6:new o.VideoPortalSite(s.MINGTIAN6),NEXUSMODS:new o.VideoPortalSite(s.NEXUSMODS)}},769:(e,t,i)=>{i.d(t,{D:()=>l});var o=i(425),n=i(232),r=i(347);function s(e){for(let t in e){const i=e[t];if(i.test())return i}throw"No match for current site"}const l={getCurrentSite:function(){return s(o.Sites)},getCurrentVideoSite:function(){return s(o.VideoSites)},getCurrentVideoPortalSite:function(){return s(o.VideoPortalSites)},getCurrentPageCategory:function(e){let t=(e=e||l.getCurrentSite()).siteCategories;if(!Array.isArray(t)||0==t.length)throw"Site categories is empty.";return 1==t.length?t[0]:t.includes(o.SiteCategories.TV_SERIES)&&o.SiteCategories.TV_SERIES.titleRegEx.test(document.title)?t.TV_SERIES:t&&t.includes(o.SiteCategories.MOVIE)?o.SiteCategories.MOVIE:void 0}};n.D.get("https://raw.githubusercontent.com/maszhaowei/tampermonkey-lib/master/conf/site.json").then((e=>{if(n.D.isObject(e)){let t=e.siteids;if(n.D.isObject(t))for(let e in t)o.SiteIDs[e]=t[e];let i=e.sitecategories;if(n.D.isObject(i))for(let e in i){let t=i[e];o.SiteCategories[e]=new r.SiteCategory(t.categoryName,new RegExp(t.titleRegEx))}let s=e.sites;if(n.D.isObject(s))for(let e in s){let t=s[e];o.Sites[e]=new r.Site(t.id,t.origin,new RegExp(t.hrefRegEx),t.siteCategories,t.originWhitelist)}let l=e.videosites;if(n.D.isObject(l))for(let e in l){let t=l[e],i=t.siteid,n=o.Sites.get(i);n&&(o.VideoSites[e]=new r.VideoSite(n,new r.PlayerMetadata(t.containerSelector,t.controlsSelector,t.topElementSelectors,t.playButtonSelector,t.volumeButtonSelector,t.fullscreenButtonSelector,t.webFullscreenButtonSelector)))}let a=e.videoportalsites;if(n.D.isObject(a))for(let e in a){let t=a[e].siteid,i=o.Sites.get(t);i&&(o.VideoPortalSites[e]=new r.VideoPortalSite(i))}}}))},719:(e,t,i)=>{i.d(t,{scriptName:()=>n});const o="undefined"==typeof GM_info?{name:"Tampermonkey"}:GM_info.script,n=o&&o.name},235:(e,t,i)=>{i.d(t,{MessageTypes:()=>o,EMOJIS:()=>n});const o={GENERAL:"general",SITE_INFO:"site_info",VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",SWITCH_PLAYING_VIDEO:"switch_playing_video",READY_FOR_MESSAGE:"ready_for_message",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",KEYDOWN:"keydown",test:function(e){if(e===o.test)return!1;for(let t in o)if(this[t]===e)return!0;return!1}},n={angry:[",,Ծ‸Ծ,,","(╯‵□′)╯︵┻━┻"],happy:["=‿=✧","●ω●","(/ ▽ \\)","(=・ω・=)","(●'◡'●)ﾉ♥","<(▰˘◡˘▰)>","(⁄ ⁄•⁄ω⁄•⁄ ⁄)","(ง,,• ᴗ •,,)ง ✧",">ㅂ<ﾉ ☆"],shock:["Σ( ° △ °|||)︴","┌( ಠ_ಠ)┘","(ﾟДﾟ≡ﾟдﾟ)!?","∑(っ °Д °;)っ"],sad:["＞︿＜","＞△＜","●︿●","(´；ω；`)"],helpless:["◐▽◑","ʅ（´◔౪◔）ʃ","_(:3 」∠)_","_(┐「ε:)_","(°▽°)ﾉ","←◡←","_(•̀ᴗ•́ 」∠ ❀)_","_φ(･ω･` )"],custom:["(`･ω･´)","(^_-)-☆","༼ つ ◕_◕ ༽つ","(☞ﾟヮﾟ)☞","( ͡° ͜ʖ ͡°)","(っ˘ڡ˘ς)","(⌐■_■)","( ͡~ ͜ʖ ͡°)","(╯°□°）╯︵ ┻━┻","(͡•_ ͡• )"]}},70:(e,t,i)=>{i.d(t,{D:()=>s});var o=i(719),n=i(235),r=i(232);const s={debug:function(...e){r.D.printGroupDebug(o.scriptName,...e)},printReceiveMessage:function(e){s.debug(`>>> From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage:function(e,t){s.debug(`<<< To: ${e}, From: ${window.location.origin}, Message:`,t)},randomEmoji:{}};for(let e in n.EMOJIS)s.randomEmoji[e]=()=>n.EMOJIS[e][Math.floor(Math.random()*n.EMOJIS[e].length)]}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,i),r.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{Class:()=>e,Enum:()=>t,util:()=>n.D});var e=i(347),t=i(425),n=i(769)})(),o})()}));