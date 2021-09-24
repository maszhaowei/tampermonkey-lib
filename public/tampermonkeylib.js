!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tampermonkeylib=t():e.tampermonkeylib=t()}(self,(function(){return(()=>{"use strict";var e={941:(e,t,n)=>{n.d(t,{ApplyMethodSignature:()=>s,Tuple:()=>o,LooseMap:()=>u});var r=n(25),i=n(232);class s{context;fn;args;constructor(e,t,n){this.fn=e,this.context=t,this.args=n||[]}}class o extends r.g{#e;get size(){return this.#e.length}constructor(...e){super(),this.#e=e;for(let t=0;t<e.length;t++)this[t]=e[t]}equals(e){if(!(e instanceof o))return!1;if(this.size!=e.size)return!1;for(let t=0;t<this.size;t++){let n=this[t],i=e[t];if(n instanceof r.g&&!n.equals(i))return!1;if(n!==i)return!1}return!0}}class u extends Map{get(e){let t,n=this.entries();for(;!(t=n.next()).done;){let[n,r]=t.value;if(i.D.isEqual(n,e))return r}}set(e,t){let n,r=this.keys();for(;!(n=r.next()).done;)if(i.D.isEqual(n.value,e))return super.set(n.value,t);super.set(e,t)}has(e){let t,n=this.keys();for(;!(t=n.next()).done;)if(i.D.isEqual(t.value,e))return!0;return!1}delete(e){let t,n=this.keys();for(;!(t=n.next()).done;)if(i.D.isEqual(t.value,e))return super.delete(t.value)}}},882:(e,t,n)=>{n.d(t,{DEFAULT_LOG_GROUP:()=>r});const r="Common"},25:(e,t,n)=>{n.d(t,{g:()=>r});class r{equals(e){return this===e}}},232:(e,t,n)=>{n.d(t,{D:()=>s});var r=n(882),i=n(25);let s={printGroupDebug:function(e=r.DEFAULT_LOG_GROUP,...t){console.group(`[${e}]`);let n=[];for(let e=0;e<t.length;e++)n.push(s.isObject(t[e])?JSON.parse(JSON.stringify(t[e])):t[e]);console.debug(...n),console.groupEnd()},get:function(e,t,n){return new Promise(((r,i)=>{let s=new XMLHttpRequest;if(s.responseType=n||"json",s.addEventListener("load",(function(){r(this.response||this.responseText)})),s.addEventListener("error",(function(){i(this)})),s.open("GET",e),t)for(let e in t)s.setRequestHeader(e,t[e]);s.send()}))},post:function(e,t={"Content-Type":"application/x-www-form-urlencoded"},n,r){return new Promise(((i,s)=>{let o=new XMLHttpRequest;o.responseType=r||"json",o.addEventListener("load",(function(){i(this.response||this.responseText)})),o.addEventListener("error",(function(){s(this)})),o.open("POST",e);for(let e in t)o.setRequestHeader(e,t[e]);o.send(n)}))},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let n=0,r=t.length;n<r;n++){let r=t[n].split("=");if(r[0]==e)return decodeURIComponent(r[1])}return""},getQueryVariable:function(e){let t=window.location.search.substring(1).split("&");for(let n=0;n<t.length;n++){let r=t[n].split("=");if(r[0]==e)return r[1]}return!1},asyncDelayedFn:function(e,t,n,r=0){return new Promise(((i,s)=>setTimeout((()=>{void 0===n?i(t.apply(e)):Array.isArray(n)?i(t.apply(e,n)):s(n),i(!0)}),r)))},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(this._common_used_numerals);for(const n of e)if(!t.includes(n))return!1;return!0},zh2Digits:function(e){if(s.isInteger(e))return e;if(!this.isChineseDigits(e))return;let t=0,n=1;for(let r=e.length-1;r>=0;r--){let i=this._common_used_numerals[e[r]];i>=10&&0==r?i>n?(n=i,t+=i):n*=i:i>=10?i>n?n=i:n*=i:t+=n*i}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!s.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"],n=e.length;return 1==n?t[e]:2==n?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},anyMemberNotEmpty:function(e,t){let n;return e.some((e=>(n=t[e],!!n))),n},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)||e instanceof Object},isString:function(e){return e instanceof String||"string"==typeof e},isBlank:function(e){return s.isString(e)?""===e.trim():null==e},assignNotUndefined:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((n=>{let r=t[n];void 0!==r&&(e[n]=r)}))})),e},isIterable:function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},isEqual(e,t){if(e instanceof Array){if(!(t instanceof Array)||e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!s.isEqual(e[n],t[n]))return!1;return!0}return isNaN(e)?isNaN(t):e instanceof i.g?e.equals(t):e===t}}},847:(e,t,n)=>{n.r(t),n.d(t,{CssCacheHelper:()=>i});var r=n(941);class i{static#t=new r.LooseMap;constructor(){}static save(e,t,n,i){this.#t.set(new r.Tuple(e,t),new r.ApplyMethodSignature(n,e,i))}static restore(e,t,n=!1){let i=new r.Tuple(e,t),s=this.#t.get(i);return!!s&&(s.fn.apply(s.context,s.args),n&&this.#t.delete(i),!0)}}},719:(e,t,n)=>{n.r(t),n.d(t,{scriptInfo:()=>r,scriptName:()=>i});const r="undefined"==typeof GM_info?{name:"Tampermonkey"}:GM_info.script,i=r&&r.name},235:(e,t,n)=>{n.r(t),n.d(t,{MessageTypes:()=>r,EMOJIS:()=>i});const r={GENERAL:"general",SITE_INFO:"site_info",VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",SWITCH_PLAYING_VIDEO:"switch_playing_video",READY_FOR_MESSAGE:"ready_for_message",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",KEYDOWN:"keydown",test:function(e){if(e===r.test)return!1;for(let t in r)if(this[t]===e)return!0;return!1}},i={angry:[",,Ծ‸Ծ,,","(╯‵□′)╯︵┻━┻"],happy:["=‿=✧","●ω●","(/ ▽ \\)","(=・ω・=)","(●'◡'●)ﾉ♥","<(▰˘◡˘▰)>","(⁄ ⁄•⁄ω⁄•⁄ ⁄)","(ง,,• ᴗ •,,)ง ✧",">ㅂ<ﾉ ☆"],shock:["Σ( ° △ °|||)︴","┌( ಠ_ಠ)┘","(ﾟДﾟ≡ﾟдﾟ)!?","∑(っ °Д °;)っ"],sad:["＞︿＜","＞△＜","●︿●","(´；ω；`)"],helpless:["◐▽◑","ʅ（´◔౪◔）ʃ","_(:3 」∠)_","_(┐「ε:)_","(°▽°)ﾉ","←◡←","_(•̀ᴗ•́ 」∠ ❀)_","_φ(･ω･` )"],custom:["(`･ω･´)","(^_-)-☆","༼ つ ◕_◕ ༽つ","(☞ﾟヮﾟ)☞","( ͡° ͜ʖ ͡°)","(っ˘ڡ˘ς)","(⌐■_■)","( ͡~ ͜ʖ ͡°)","(╯°□°）╯︵ ┻━┻","(͡•_ ͡• )"]}},70:(e,t,n)=>{n.d(t,{D:()=>o});var r=n(719),i=n(235),s=n(232);const o={debug:function(...e){s.D.printGroupDebug(r.scriptName,...e)},printReceiveMessage:function(e){o.debug(`>>> From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage:function(e,t){o.debug(`<<< To: ${e}, From: ${window.location.origin}, Message:`,t)},randomEmoji:{}};for(let e in i.EMOJIS)o.randomEmoji[e]=()=>i.EMOJIS[e][Math.floor(Math.random()*i.EMOJIS[e].length)]}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{n.r(r),n.d(r,{Class:()=>t,Const:()=>e,Enum:()=>i,ui:()=>a,util:()=>l.D});var e=n(719),t=n(847),i=n(235),s=n(232),o=n(941);function u(e,t,n,r){let i=e.context;return new Promise(((o,a)=>{s.D.isString(i)?document.arrive(i,{existing:!0,onceOnly:!0},(function(){e.fn.apply(this,e.args),setTimeout((()=>{t.length>0?u(t.shift(),t,n,r).then((e=>o([this].concat(e))),(e=>a(e))):o([this])}),n)})):(e.fn.apply(i,e.args),setTimeout((()=>{t.length>0?u(t.shift(),t,n,r).then((e=>o([i].concat(e))),(e=>a(e))):o([i])}),n)),setTimeout((()=>{document.unbindArrive(i),a(new Error(i))}),(t.length+1)*r+t.length*n)}))}const a={asyncChainFn:function(e,t=0,n=2e3){if(Array.isArray(e)&&0!=e.length)return u(e.shift(),e,t,n)},asyncChainClick:function(e,t=0,n=2e3){return a.asyncChainFn(e.map((e=>new o.ApplyMethodSignature(HTMLElement.prototype.click,e))),t,n)}};var l=n(70)})(),r})()}));