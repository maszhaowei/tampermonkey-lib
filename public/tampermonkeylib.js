!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tampermonkeylib=t():e.tampermonkeylib=t()}(self,(function(){return(()=>{"use strict";var e={941:(e,t,n)=>{n.d(t,{ApplyMethodSignature:()=>o,Tuple:()=>s,LooseMap:()=>a});var r=n(25),i=n(232);class o{context;fn;args;constructor(e,t,n){this.fn=e,this.context=t,this.args=n||[]}}class s extends r.g{#e;get size(){return this.#e.length}constructor(...e){super(),this.#e=e;for(let t=0;t<e.length;t++)this[t]=e[t]}equals(e){if(!(e instanceof s))return!1;if(this.size!=e.size)return!1;for(let t=0;t<this.size;t++){let n=this[t],i=e[t];if(n instanceof r.g&&!n.equals(i))return!1;if(n!==i)return!1}return!0}}class a extends Map{get(e){let t,n=this.entries();for(;!(t=n.next()).done;){let[n,r]=t.value;if(i.D.isEqual(n,e))return r}}set(e,t){let n,r=this.keys();for(;!(n=r.next()).done;)if(i.D.isEqual(n.value,e))return super.set(n.value,t);super.set(e,t)}has(e){let t,n=this.keys();for(;!(t=n.next()).done;)if(i.D.isEqual(t.value,e))return!0;return!1}delete(e){let t,n=this.keys();for(;!(t=n.next()).done;)if(i.D.isEqual(t.value,e))return super.delete(t.value)}}},882:(e,t,n)=>{n.d(t,{DEFAULT_LOG_GROUP:()=>r});const r="Common"},25:(e,t,n)=>{n.d(t,{g:()=>r});class r{equals(e){return this===e}}},232:(e,t,n)=>{n.d(t,{D:()=>o});var r=n(882),i=n(25);let o={printGroupDebug:function(e=r.DEFAULT_LOG_GROUP,...t){console.group(`[${e}]`);let n=[];for(let e=0;e<t.length;e++)n.push(o.isObject(t[e])?JSON.parse(JSON.stringify(t[e])):t[e]);console.debug(...n),console.groupEnd()},get:function(e,t,n){return new Promise(((r,i)=>{let o=new XMLHttpRequest;if(o.responseType=n||"json",o.addEventListener("load",(function(){r(this.response||this.responseText)})),o.addEventListener("error",(function(){i(this)})),o.open("GET",e),t)for(let e in t)o.setRequestHeader(e,t[e]);o.send()}))},post:function(e,t={"Content-Type":"application/x-www-form-urlencoded"},n,r){return new Promise(((i,o)=>{let s=new XMLHttpRequest;s.responseType=r||"json",s.addEventListener("load",(function(){i(this.response||this.responseText)})),s.addEventListener("error",(function(){o(this)})),s.open("POST",e);for(let e in t)s.setRequestHeader(e,t[e]);s.send(n)}))},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let n=0,r=t.length;n<r;n++){let r=t[n].split("=");if(r[0]==e)return decodeURIComponent(r[1])}return""},getQueryVariable:function(e){let t=window.location.search.substring(1).split("&");for(let n=0;n<t.length;n++){let r=t[n].split("=");if(r[0]==e)return r[1]}return!1},asyncDelayedFn:function(e,t,n,r=0){return new Promise(((i,o)=>setTimeout((()=>{void 0===n?i(t.apply(e)):Array.isArray(n)?i(t.apply(e,n)):o(n),i(!0)}),r)))},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(this._common_used_numerals);for(const n of e)if(!t.includes(n))return!1;return!0},zh2Digits:function(e){if(o.isInteger(e))return e;if(!this.isChineseDigits(e))return;let t=0,n=1;for(let r=e.length-1;r>=0;r--){let i=this._common_used_numerals[e[r]];i>=10&&0==r?i>n?(n=i,t+=i):n*=i:i>=10?i>n?n=i:n*=i:t+=n*i}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!o.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"],n=e.length;return 1==n?t[e]:2==n?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},anyMemberNotEmpty:function(e,t){let n;return e.some((e=>(n=t[e],!!n))),n},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)||e instanceof Object},isString:function(e){return e instanceof String||"string"==typeof e},isBlank:function(e){return o.isString(e)?""===e.trim():null==e},assignNotUndefined:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((n=>{let r=t[n];void 0!==r&&(e[n]=r)}))})),e},assignNotEmpty:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((n=>{let r=t[n];null==r||Object.is(NaN,r)||Array.isArray(r)&&0==r.length||(e[n]=r)}))})),e},isIterable:function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},isEqual:function(e,t){if(e instanceof Array){if(!(t instanceof Array)||e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!o.isEqual(e[n],t[n]))return!1;return!0}return!!Object.is(e,t)||(e instanceof i.g?e.equals(t):e===t)},formatDate:function(e,t="MM/dd/yyyy hh:mm:ss"){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t}}},136:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,".zw-hidden {\r\n    display: none !important\r\n}",""]);const o=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],a=0;a<e.length;a++){var u=e[a],c=r.base?u[0]+r.base:u[0],l=o[c]||0,f="".concat(c," ").concat(l);o[c]=l+1;var p=n(f),d={css:u[1],media:u[2],sourceMap:u[3]};-1!==p?(t[p].references++,t[p].updater(d)):t.push({identifier:f,updater:i(d,r),references:1}),s.push(f)}return s}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var a=n(o[s]);t[a].references--}for(var u=r(e,i),c=0;c<o.length;c++){var l=n(o[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},719:(e,t,n)=>{n.r(t),n.d(t,{scriptInfo:()=>r,scriptName:()=>i,FORCE_HIDDEN_CLASSNAME:()=>o});const r="undefined"==typeof GM_info?{name:"Tampermonkey"}:GM_info.script,i=r&&r.name,o="zw-hidden"},235:(e,t,n)=>{n.r(t),n.d(t,{MessageTypes:()=>r,EMOJIS:()=>i});const r={GENERAL:"general",SITE_INFO:"site_info",VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",SWITCH_PLAYING_VIDEO:"switch_playing_video",REMOVE_IFRAME:"remove_iframe",READY_FOR_MESSAGE:"ready_for_message",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",KEYDOWN:"keydown",VIEWPORT_DIMENSION:"viewport_dimension",test:function(e){if(e===r.test)return!1;for(let t in r)if(this[t]===e)return!0;return!1}},i={angry:[",,Ծ‸Ծ,,","(╯‵□′)╯︵┻━┻"],happy:["=‿=✧","●ω●","(/ ▽ \\)","(=・ω・=)","(●'◡'●)ﾉ♥","<(▰˘◡˘▰)>","(⁄ ⁄•⁄ω⁄•⁄ ⁄)","(ง,,• ᴗ •,,)ง ✧",">ㅂ<ﾉ ☆"],shock:["Σ( ° △ °|||)︴","┌( ಠ_ಠ)┘","(ﾟДﾟ≡ﾟдﾟ)!?","∑(っ °Д °;)っ"],sad:["＞︿＜","＞△＜","●︿●","(´；ω；`)"],helpless:["◐▽◑","ʅ（´◔౪◔）ʃ","_(:3 」∠)_","_(┐「ε:)_","(°▽°)ﾉ","←◡←","_(•̀ᴗ•́ 」∠ ❀)_","_φ(･ω･` )"],custom:["(`･ω･´)","(^_-)-☆","༼ つ ◕_◕ ༽つ","(☞ﾟヮﾟ)☞","( ͡° ͜ʖ ͡°)","(っ˘ڡ˘ς)","(⌐■_■)","( ͡~ ͜ʖ ͡°)","(╯°□°）╯︵ ┻━┻","(͡•_ ͡• )"]}},70:(e,t,n)=>{n.d(t,{D:()=>s});var r=n(719),i=n(235),o=n(232);const s={debug:function(...e){o.D.printGroupDebug(r.scriptName,...e)},gmGet:function(e,t,n){return new Promise(((r,i)=>{GM_xmlhttpRequest({method:"GET",url:e,headers:t,responseType:n||"json",onload:e=>{r(e.response||e.responseText)},onerror:e=>{i(e)}})}))},gmPost:function(e,t,n,r){return t=t||{"Content-Type":"application/x-www-form-urlencoded"},o.D.isObject(n)&&(n=JSON.stringify(n)),new Promise(((i,o)=>{GM_xmlhttpRequest({method:"POST",url:e,headers:t,data:n,responseType:r||"json",onload:e=>{i("blob"===r?e:e.response||e.responseText)},onerror:e=>{o(e)}})}))},printReceiveMessage:function(e){s.debug(`>>> From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage:function(e,t){s.debug(`<<< To: ${e}, From: ${window.location.origin}, Message:`,t)},randomEmoji:{}};for(let e in i.EMOJIS)s.randomEmoji[e]=()=>i.EMOJIS[e][Math.floor(Math.random()*i.EMOJIS[e].length)]},378:(e,t,n)=>{n.r(t),n.d(t,{CssCacheHelper:()=>i});var r=n(941);class i{static#t=new r.LooseMap;constructor(){}static save(e,t,n,i){this.#t.set(new r.Tuple(e,t),new r.ApplyMethodSignature(n,e,i))}static restore(e,t,n=!1){let i=new r.Tuple(e,t),o=this.#t.get(i);return!!o&&(o.fn.apply(o.context,o.args),n&&this.#t.delete(i),!0)}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{n.r(r),n.d(r,{Const:()=>e,Enum:()=>t,Utils:()=>S,ui:()=>M,util:()=>T.D});var e=n(719),t=n(235),i=n(232),o=n(941),s=n(379),a=n.n(s),u=n(795),c=n.n(u),l=n(569),f=n.n(l),p=n(565),d=n.n(p),h=n(216),g=n.n(h),m=n(589),y=n.n(m),E=n(136),v={};function b(t,n=!1){t&&(t.style.display="none",n&&t.classList.add(e.FORCE_HIDDEN_CLASSNAME))}function _(e,t,n,r){let o=e.context;return new Promise(((s,a)=>{i.D.isString(o)?document.arrive(o,{existing:!0,onceOnly:!0},(function(){e.fn.apply(this,e.args),setTimeout((()=>{t.length>0?_(t.shift(),t,n,r).then((e=>s([this].concat(e))),(e=>a(e))):s([this])}),n)})):(e.fn.apply(o,e.args),setTimeout((()=>{t.length>0?_(t.shift(),t,n,r).then((e=>s([o].concat(e))),(e=>a(e))):s([o])}),n)),setTimeout((()=>{document.unbindArrive(o),a(new Error(o))}),(t.length+1)*r+t.length*n)}))}v.styleTagTransform=y(),v.setAttributes=d(),v.insert=f().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=g(),a()(E.Z,v),E.Z&&E.Z.locals&&E.Z.locals;const M={asyncChainFn:function(e,t=0,n=2e3){if(Array.isArray(e)&&0!=e.length)return _(e.shift(),e,t,n)},asyncChainClick:function(e,t=0,n=2e3){if(!Array.isArray(e))throw new TypeError("contexts is not an array.");return M.asyncChainFn(e.map((e=>new o.ApplyMethodSignature(HTMLElement.prototype.click,e))),t,n)},hide:function(e,t=!1,n=document){i.D.isString(e)?n.arrive(e,{existing:!0},(function(){b(this,t)})):e instanceof HTMLElement&&b(e,t)},hideParent(e,t,n=!1,r=document){i.D.isString(e)?r.arrive(e,{existing:!0},(function(){M.hide(this.closest(t),n)})):e instanceof HTMLElement&&M.hide(e.closest(t),n)}};var T=n(70),S=n(378)})(),r})()}));