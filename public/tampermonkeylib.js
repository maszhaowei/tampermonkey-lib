!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tampermonkeylib=t():e.tampermonkeylib=t()}(self,(function(){return(()=>{"use strict";var e={232:(e,t,n)=>{n.d(t,{D:()=>r});let r={printGroupDebug:function(e,...t){console.group(`[${e}]`);let n=[];for(let e=0;e<t.length;e++)n.push(JSON.parse(JSON.stringify(t[e])));console.debug(...n),console.groupEnd()},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let n=0,r=t.length;n<r;n++){let r=t[n].split("=");if(r[0]==e)return decodeURIComponent(r[1])}return""},getQueryVariable:function(e){let t=window.location.search.substring(1).split("&");for(let n=0;n<t.length;n++){let r=t[n].split("=");if(r[0]==e)return r[1]}return!1},asyncDelayedFn:function(e,t,n,r=0){return new Promise(((o,i)=>setTimeout((()=>{void 0===n?o(t.apply(e)):Array.isArray(n)?o(t.apply(e,n)):i(n),o(!0)}),r)))},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(this._common_used_numerals);for(const n of e)if(!t.includes(n))return!1;return!0},zh2Digits:function(e){if(r.isInteger(e))return e;if(!this.isChineseDigits(e))return;let t=0,n=1;for(let r=e.length-1;r>=0;r--){let o=this._common_used_numerals[e[r]];o>=10&&0==r?o>n?(n=o,t+=o):n*=o:o>=10?o>n?n=o:n*=o:t+=n*o}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!r.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"];var n=e.length;return 1==n?t[e]:2==n?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},anyMemberNotEmpty:function(e,t){let n;return e.some((e=>(n=t[e],!!n))),n},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)}}},847:(e,t,n)=>{n.r(t),n.d(t,{ApplyMethodSignature:()=>r});class r{context;fn;args;constructor(e,t,n){this.context=e,this.fn=t,this.args=n||[]}}},719:(e,t,n)=>{n.r(t),n.d(t,{scriptInfo:()=>o,scriptName:()=>i});const r="undefined"==typeof GM_info?{}:GM_info,o=r&&r.script,i=o&&o.name},70:(e,t,n)=>{n.d(t,{D:()=>i});var r=n(719),o=n(232);const i={debug:function(...e){o.D.printGroupDebug(`[${r.scriptName}]`,...e)},get:function(e,t,n){return new Promise(((r,o)=>{GM_xmlhttpRequest({method:"GET",url:e,headers:t,responseType:n||"json",onload:e=>{r(e.response||e.responseText)},onerror:e=>{o(e)}})}))},post:function(e,t,n,r){return t=t||{"Content-Type":"application/x-www-form-urlencoded"},new Promise(((o,i)=>{GM_xmlhttpRequest({method:"POST",url:e,headers:t,data:n,responseType:r||"json",onload:e=>{o(e.response||e.responseText)},onerror:e=>{i(e)}})}))},printReceiveMessage:function(e){i.debug(`>>> From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage:function(e,t){i.debug(`<<< To: ${e}, From: ${window.location.origin}, Message:`,t)}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{n.r(r),n.d(r,{Class:()=>t,Const:()=>o,Enum:()=>e,ui:()=>u,util:()=>c.D});var e={};n.r(e),n.d(e,{MessageTypes:()=>i});var t=n(847),o=n(719);const i={GENERAL:"general",SITE_INFO:"site_info",VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",SWITCH_PLAYING_VIDEO:"switch_playing_video",READY_FOR_MESSAGE:"ready_for_message",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",KEYDOWN:"keydown",test:function(e){for(let t in i)if(this[t]===e)return!0;return!1}};function s(e,t,n,r){let o=e.context;return new Promise(((i,u)=>{o instanceof String||"string"==typeof o?document.arrive(o,{existing:!0,onceOnly:!0},(function(){e.fn.apply(this,e.args),setTimeout((()=>{t.length>0?s(t.shift(),t,n,r).then((e=>i([this].concat(e))),(e=>u(e))):i([this])}),n)})):(e.fn.apply(o,e.args),setTimeout((()=>{t.length>0?s(t.shift(),t,n,r).then((e=>i([o].concat(e))),(e=>u(e))):i([o])}),n)),setTimeout((()=>{document.unbindArrive(o),u(new Error(o))}),(t.length+1)*r+t.length*n)}))}const u={asyncChainFn:function(e,t=0,n=2e3){if(Array.isArray(e)&&0!=e.length)return s(e.shift(),e,t,n)},asyncChainClick:function(e,n=0,r=2e3){return u.asyncChainFn(e.map((e=>new t.ApplyMethodSignature(e,HTMLElement.prototype.click))),n,r)}};var c=n(70)})(),r})()}));