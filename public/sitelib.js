!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sitelib=t():e.sitelib=t()}(self,(function(){return(()=>{"use strict";var e={882:(e,t,i)=>{i.d(t,{DEFAULT_LOG_GROUP:()=>r});const r="Common"},25:(e,t,i)=>{i.d(t,{g:()=>r});class r{equals(e){return this===e}}},232:(e,t,i)=>{i.d(t,{D:()=>s});var r=i(882),o=i(25);const n={零:0,一:1,二:2,两:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,百:100,千:1e3,万:1e4,亿:1e8};let s={printGroupDebug:function(e=r.DEFAULT_LOG_GROUP,...t){console.group(`[${e}]`);let i=[];for(let e=0;e<t.length;e++)i.push(s.isObject(t[e])?JSON.parse(JSON.stringify(t[e])):t[e]);console.debug(...i),console.groupEnd()},get:function(e,t,i){return new Promise(((r,o)=>{let n=new XMLHttpRequest;if(n.responseType=i||"json",n.addEventListener("load",(function(){r(this.response||this.responseText)})),n.addEventListener("error",(function(){o(this)})),n.open("GET",e),t)for(let e in t)n.setRequestHeader(e,t[e]);n.send()}))},post:function(e,t={"Content-Type":"application/x-www-form-urlencoded"},i,r){return new Promise(((o,n)=>{let s=new XMLHttpRequest;s.responseType=r||"json",s.addEventListener("load",(function(){o(this.response||this.responseText)})),s.addEventListener("error",(function(){n(this)})),s.open("POST",e);for(let e in t)s.setRequestHeader(e,t[e]);s.send(i)}))},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let i=0,r=t.length;i<r;i++){let r=t[i].split("=");if(r[0]==e)return decodeURIComponent(r[1])}return""},getQueryParameter:function(e){for(let[t,i]of new URLSearchParams(window.location.search).entries())if(t===e)return i},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(n);for(const i of e)if(!t.includes(i))return!1;return!0},zh2Digits:function(e){if(s.isInteger(e))return parseInt(e);if(!this.isChineseDigits(e))return;let t=0,i=1;for(let r=e.length-1;r>=0;r--){let o=n[e[r]];o>=10&&0==r?o>i?(i=o,t+=o):i*=o:o>=10?o>i?i=o:i*=o:t+=i*o}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!s.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"],i=e.length;return 1==i?t[e]:2==i?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},getFirstTruthyMember:function(e,t){let i;return e.some((e=>(i=t[e],!!i)))?i:void 0},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)||e instanceof Object},isString:function(e){return e instanceof String||"string"==typeof e},isBlank:function(e){return s.isString(e)?""===e.trim():null==e},assignNotUndefined:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((i=>{let r=t[i];void 0!==r&&(e[i]=r)}))})),e},assignNotEmpty:function(e,t,i=!1,r=!1){if(!Array.isArray(t))throw new TypeError("Invalid sources");return t.forEach((t=>{Object.keys(t).forEach((o=>{let n=t[o],a=e[o];if(null!=n&&!Object.is(NaN,n))if(Array.isArray(a)){if(!Array.isArray(n))throw new TypeError(`${o} of source is not an array`);r?n.forEach((e=>{a.includes(e)||a.push(e)})):e[o]=n}else if(s.isObject(a)){if(!s.isObject(n))throw new TypeError(`${o} of source is not an object`);i?s.assignNotEmpty(a,[n],i,r):e[o]=n}else e[o]=n}))})),e},isIterable:function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},isEqual:function(e,t){if(e instanceof Array){if(!(t instanceof Array)||e.length!=t.length)return!1;for(let i=0;i<e.length;i++)if(!s.isEqual(e[i],t[i]))return!1;return!0}return!!Object.is(e,t)||(e instanceof o.g?e.equals(t):e===t)},formatDate:function(e,t="MM/dd/yyyy hh:mm:ss"){e instanceof Date||(e=new Date(e));var i={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),i)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[r]:("00"+i[r]).substr((""+i[r]).length)));return t}}},725:(e,t,i)=>{i.d(t,{UUID:()=>r}),i(232);var r=i(614)},614:(e,t,i)=>{var r;i.r(t),i.d(t,{NIL:()=>L,parse:()=>E,stringify:()=>u,v1:()=>g,v3:()=>M,v4:()=>B,v5:()=>_,validate:()=>a,version:()=>R});var o=new Uint8Array(16);function n(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a=function(e){return"string"==typeof e&&s.test(e)};for(var l=[],c=0;c<256;++c)l.push((c+256).toString(16).substr(1));const u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!a(i))throw TypeError("Stringified UUID is invalid");return i};var d,I,f=0,p=0;const g=function(e,t,i){var r=t&&i||0,o=t||new Array(16),s=(e=e||{}).node||d,a=void 0!==e.clockseq?e.clockseq:I;if(null==s||null==a){var l=e.random||(e.rng||n)();null==s&&(s=d=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==a&&(a=I=16383&(l[6]<<8|l[7]))}var c=void 0!==e.msecs?e.msecs:Date.now(),g=void 0!==e.nsecs?e.nsecs:p+1,E=c-f+(g-p)/1e4;if(E<0&&void 0===e.clockseq&&(a=a+1&16383),(E<0||c>f)&&void 0===e.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");f=c,p=g,I=a;var h=(1e4*(268435455&(c+=122192928e5))+g)%4294967296;o[r++]=h>>>24&255,o[r++]=h>>>16&255,o[r++]=h>>>8&255,o[r++]=255&h;var S=c/4294967296*1e4&268435455;o[r++]=S>>>8&255,o[r++]=255&S,o[r++]=S>>>24&15|16,o[r++]=S>>>16&255,o[r++]=a>>>8|128,o[r++]=255&a;for(var w=0;w<6;++w)o[r+w]=s[w];return t||u(o)},E=function(e){if(!a(e))throw TypeError("Invalid UUID");var t,i=new Uint8Array(16);return i[0]=(t=parseInt(e.slice(0,8),16))>>>24,i[1]=t>>>16&255,i[2]=t>>>8&255,i[3]=255&t,i[4]=(t=parseInt(e.slice(9,13),16))>>>8,i[5]=255&t,i[6]=(t=parseInt(e.slice(14,18),16))>>>8,i[7]=255&t,i[8]=(t=parseInt(e.slice(19,23),16))>>>8,i[9]=255&t,i[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,i[11]=t/4294967296&255,i[12]=t>>>24&255,i[13]=t>>>16&255,i[14]=t>>>8&255,i[15]=255&t,i};function h(e,t,i){function r(e,r,o,n){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],i=0;i<e.length;++i)t.push(e.charCodeAt(i));return t}(e)),"string"==typeof r&&(r=E(r)),16!==r.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var s=new Uint8Array(16+e.length);if(s.set(r),s.set(e,r.length),(s=i(s))[6]=15&s[6]|t,s[8]=63&s[8]|128,o){n=n||0;for(var a=0;a<16;++a)o[n+a]=s[a];return o}return u(s)}try{r.name=e}catch(e){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function S(e){return 14+(e+64>>>9<<4)+1}function w(e,t){var i=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}function m(e,t,i,r,o,n){return w((s=w(w(t,e),w(r,n)))<<(a=o)|s>>>32-a,i);var s,a}function b(e,t,i,r,o,n,s){return m(t&i|~t&r,e,t,o,n,s)}function v(e,t,i,r,o,n,s){return m(t&r|i&~r,e,t,o,n,s)}function y(e,t,i,r,o,n,s){return m(t^i^r,e,t,o,n,s)}function A(e,t,i,r,o,n,s){return m(i^(t|~r),e,t,o,n,s)}const M=h("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var i=0;i<t.length;++i)e[i]=t.charCodeAt(i)}return function(e){for(var t=[],i=32*e.length,r="0123456789abcdef",o=0;o<i;o+=8){var n=e[o>>5]>>>o%32&255,s=parseInt(r.charAt(n>>>4&15)+r.charAt(15&n),16);t.push(s)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[S(t)-1]=t;for(var i=1732584193,r=-271733879,o=-1732584194,n=271733878,s=0;s<e.length;s+=16){var a=i,l=r,c=o,u=n;i=b(i,r,o,n,e[s],7,-680876936),n=b(n,i,r,o,e[s+1],12,-389564586),o=b(o,n,i,r,e[s+2],17,606105819),r=b(r,o,n,i,e[s+3],22,-1044525330),i=b(i,r,o,n,e[s+4],7,-176418897),n=b(n,i,r,o,e[s+5],12,1200080426),o=b(o,n,i,r,e[s+6],17,-1473231341),r=b(r,o,n,i,e[s+7],22,-45705983),i=b(i,r,o,n,e[s+8],7,1770035416),n=b(n,i,r,o,e[s+9],12,-1958414417),o=b(o,n,i,r,e[s+10],17,-42063),r=b(r,o,n,i,e[s+11],22,-1990404162),i=b(i,r,o,n,e[s+12],7,1804603682),n=b(n,i,r,o,e[s+13],12,-40341101),o=b(o,n,i,r,e[s+14],17,-1502002290),i=v(i,r=b(r,o,n,i,e[s+15],22,1236535329),o,n,e[s+1],5,-165796510),n=v(n,i,r,o,e[s+6],9,-1069501632),o=v(o,n,i,r,e[s+11],14,643717713),r=v(r,o,n,i,e[s],20,-373897302),i=v(i,r,o,n,e[s+5],5,-701558691),n=v(n,i,r,o,e[s+10],9,38016083),o=v(o,n,i,r,e[s+15],14,-660478335),r=v(r,o,n,i,e[s+4],20,-405537848),i=v(i,r,o,n,e[s+9],5,568446438),n=v(n,i,r,o,e[s+14],9,-1019803690),o=v(o,n,i,r,e[s+3],14,-187363961),r=v(r,o,n,i,e[s+8],20,1163531501),i=v(i,r,o,n,e[s+13],5,-1444681467),n=v(n,i,r,o,e[s+2],9,-51403784),o=v(o,n,i,r,e[s+7],14,1735328473),i=y(i,r=v(r,o,n,i,e[s+12],20,-1926607734),o,n,e[s+5],4,-378558),n=y(n,i,r,o,e[s+8],11,-2022574463),o=y(o,n,i,r,e[s+11],16,1839030562),r=y(r,o,n,i,e[s+14],23,-35309556),i=y(i,r,o,n,e[s+1],4,-1530992060),n=y(n,i,r,o,e[s+4],11,1272893353),o=y(o,n,i,r,e[s+7],16,-155497632),r=y(r,o,n,i,e[s+10],23,-1094730640),i=y(i,r,o,n,e[s+13],4,681279174),n=y(n,i,r,o,e[s],11,-358537222),o=y(o,n,i,r,e[s+3],16,-722521979),r=y(r,o,n,i,e[s+6],23,76029189),i=y(i,r,o,n,e[s+9],4,-640364487),n=y(n,i,r,o,e[s+12],11,-421815835),o=y(o,n,i,r,e[s+15],16,530742520),i=A(i,r=y(r,o,n,i,e[s+2],23,-995338651),o,n,e[s],6,-198630844),n=A(n,i,r,o,e[s+7],10,1126891415),o=A(o,n,i,r,e[s+14],15,-1416354905),r=A(r,o,n,i,e[s+5],21,-57434055),i=A(i,r,o,n,e[s+12],6,1700485571),n=A(n,i,r,o,e[s+3],10,-1894986606),o=A(o,n,i,r,e[s+10],15,-1051523),r=A(r,o,n,i,e[s+1],21,-2054922799),i=A(i,r,o,n,e[s+8],6,1873313359),n=A(n,i,r,o,e[s+15],10,-30611744),o=A(o,n,i,r,e[s+6],15,-1560198380),r=A(r,o,n,i,e[s+13],21,1309151649),i=A(i,r,o,n,e[s+4],6,-145523070),n=A(n,i,r,o,e[s+11],10,-1120210379),o=A(o,n,i,r,e[s+2],15,718787259),r=A(r,o,n,i,e[s+9],21,-343485551),i=w(i,a),r=w(r,l),o=w(o,c),n=w(n,u)}return[i,r,o,n]}(function(e){if(0===e.length)return[];for(var t=8*e.length,i=new Uint32Array(S(t)),r=0;r<t;r+=8)i[r>>5]|=(255&e[r/8])<<r%32;return i}(e),8*e.length))})),B=function(e,t,i){var r=(e=e||{}).random||(e.rng||n)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){i=i||0;for(var o=0;o<16;++o)t[i+o]=r[o];return t}return u(r)};function O(e,t,i,r){switch(e){case 0:return t&i^~t&r;case 1:return t^i^r;case 2:return t&i^t&r^i&r;case 3:return t^i^r}}function T(e,t){return e<<t|e>>>32-t}const _=h("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],i=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var r=unescape(encodeURIComponent(e));e=[];for(var o=0;o<r.length;++o)e.push(r.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var n=e.length/4+2,s=Math.ceil(n/16),a=new Array(s),l=0;l<s;++l){for(var c=new Uint32Array(16),u=0;u<16;++u)c[u]=e[64*l+4*u]<<24|e[64*l+4*u+1]<<16|e[64*l+4*u+2]<<8|e[64*l+4*u+3];a[l]=c}a[s-1][14]=8*(e.length-1)/Math.pow(2,32),a[s-1][14]=Math.floor(a[s-1][14]),a[s-1][15]=8*(e.length-1)&4294967295;for(var d=0;d<s;++d){for(var I=new Uint32Array(80),f=0;f<16;++f)I[f]=a[d][f];for(var p=16;p<80;++p)I[p]=T(I[p-3]^I[p-8]^I[p-14]^I[p-16],1);for(var g=i[0],E=i[1],h=i[2],S=i[3],w=i[4],m=0;m<80;++m){var b=Math.floor(m/20),v=T(g,5)+O(b,E,h,S)+w+t[b]+I[m]>>>0;w=S,S=h,h=T(E,30)>>>0,E=g,g=v}i[0]=i[0]+g>>>0,i[1]=i[1]+E>>>0,i[2]=i[2]+h>>>0,i[3]=i[3]+S>>>0,i[4]=i[4]+w>>>0}return[i[0]>>24&255,i[0]>>16&255,i[0]>>8&255,255&i[0],i[1]>>24&255,i[1]>>16&255,i[1]>>8&255,255&i[1],i[2]>>24&255,i[2]>>16&255,i[2]>>8&255,255&i[2],i[3]>>24&255,i[3]>>16&255,i[3]>>8&255,255&i[3],i[4]>>24&255,i[4]>>16&255,i[4]>>8&255,255&i[4]]})),L="00000000-0000-0000-0000-000000000000",R=function(e){if(!a(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}},719:(e,t,i)=>{i.d(t,{scriptName:()=>o});const r="undefined"==typeof GM_info?{name:"Tampermonkey"}:GM_info.script,o=r&&r.name},235:(e,t,i)=>{i.d(t,{MessageTypes:()=>r,EMOJIS:()=>o});const r={GENERAL:"general",SITE_INFO:"site_info",VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",SWITCH_PLAYING_VIDEO:"switch_playing_video",REMOVE_IFRAME:"remove_iframe",READY_FOR_MESSAGE:"ready_for_message",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",KEYDOWN:"keydown",VIEWPORT_DIMENSION:"viewport_dimension",test:function(e){if(e===r.test)return!1;for(let t in r)if(this[t]===e)return!0;return!1}},o={angry:[",,Ծ‸Ծ,,","(╯‵□′)╯︵┻━┻"],happy:["=‿=✧","●ω●","(/ ▽ \\)","(=・ω・=)","(●'◡'●)ﾉ♥","<(▰˘◡˘▰)>","(⁄ ⁄•⁄ω⁄•⁄ ⁄)","(ง,,• ᴗ •,,)ง ✧",">ㅂ<ﾉ ☆"],shock:["Σ( ° △ °|||)︴","┌( ಠ_ಠ)┘","(ﾟДﾟ≡ﾟдﾟ)!?","∑(っ °Д °;)っ"],sad:["＞︿＜","＞△＜","●︿●","(´；ω；`)"],helpless:["◐▽◑","ʅ（´◔౪◔）ʃ","_(:3 」∠)_","_(┐「ε:)_","(°▽°)ﾉ","←◡←","_(•̀ᴗ•́ 」∠ ❀)_","_φ(･ω･` )"],custom:["(`･ω･´)","(^_-)-☆","༼ つ ◕_◕ ༽つ","(☞ﾟヮﾟ)☞","( ͡° ͜ʖ ͡°)","(っ˘ڡ˘ς)","(⌐■_■)","( ͡~ ͜ʖ ͡°)","(╯°□°）╯︵ ┻━┻","(͡•_ ͡• )"]}},70:(e,t,i)=>{i.d(t,{D:()=>s});var r=i(719),o=i(235),n=i(232);const s={debug:function(...e){n.D.printGroupDebug(r.scriptName,...e)},gmGet:function(e,t,i,r=!1){return new Promise(((o,n)=>{GM_xmlhttpRequest({method:"GET",url:e,headers:t,nocache:r,responseType:i||"json",onload:e=>{o(e.response||e.responseText)},onerror:e=>{n(e)}})}))},gmPost:function(e,t,i,r){return t=t||{"Content-Type":"application/x-www-form-urlencoded"},n.D.isObject(i)&&(i=JSON.stringify(i)),new Promise(((o,n)=>{GM_xmlhttpRequest({method:"POST",url:e,headers:t,data:i,responseType:r||"json",onload:e=>{o("blob"===r?e:e.response||e.responseText)},onerror:e=>{n(e)}})}))},gmOptions:function(e,t,i){return new Promise(((r,o)=>{GM_xmlhttpRequest({method:"OPTIONS",url:e,headers:t,responseType:i||"json",onload:e=>{r(e.response||e.responseText)},onerror:e=>{o(e)}})}))},printReceiveMessage:function(e){s.debug(`>>> From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage:function(e,t){s.debug(`<<< To: ${e}, From: ${window.location.origin}, Message:`,t)},randomEmoji:{}};for(let e in o.EMOJIS)s.randomEmoji[e]=()=>o.EMOJIS[e][Math.floor(Math.random()*o.EMOJIS[e].length)]}},t={};function i(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{i.r(r),i.d(r,{Class:()=>e,Enum:()=>t,util:()=>b});var e={};i.r(e),i.d(e,{PlayerMetadata:()=>l,Site:()=>c,VideoPortalSite:()=>d,VideoSite:()=>u});var t={};i.r(t),i.d(t,{DefaultPlayerMetadatas:()=>E,SiteCategories:()=>I,SiteIDs:()=>p,Sites:()=>g,VideoCategories:()=>f,VideoPortalSites:()=>S,VideoSites:()=>h});var o=i(232),n=i(725),s=i(235),a=i(70);class l{containerSelector;controlsSelector;topElementSelectors;playButtonSelector;fullscreenButtonSelector;webFullscreenButtonSelector;volumeButtonSelector;constructor({containerSelector:e,controlsSelector:t,topElementSelectors:i=[],playButtonSelector:r,volumeButtonSelector:o,fullscreenButtonSelector:n,webFullscreenButtonSelector:s}){this.containerSelector=e,this.controlsSelector=t,this.topElementSelectors=i,this.playButtonSelector=r,this.volumeButtonSelector=o,this.fullscreenButtonSelector=n,this.webFullscreenButtonSelector=s}copy(){let e=new l({});return o.D.assignNotEmpty(e,[this]),e}}class c{id;baseSiteId;#e;origin;hrefRegEx;siteCategories;subcategories;originWhitelist;additionalInfo;constructor({id:e,baseSiteId:t,origin:i,hrefRegEx:r,siteCategories:o=[],subcategories:s=[],originWhitelist:a=[],additionalInfo:l={}}){this.id=e,this.baseSiteId=t,this.#e=n.UUID.v4(),this.origin=i,this.hrefRegEx=r,this.siteCategories=o,this.subcategories=s,this.originWhitelist=a,this.additionalInfo=l}isEmbedded(){return self!==top}isBaseSite(){return this.baseSiteId===this.id}validateMessage(e){let t=e.data;if(!(t&&t.type&&t.src&&t.tag))return!1;let i=e.origin;return(i===window.location.origin||!!this.originWhitelist?.includes(i))&&s.MessageTypes.test(t.type)&&(t.allowSelf||t.tag!==this.#e)}postMessage(e,t,i,r,o=!1){let n={type:i,content:r,src:window.location.href,tag:this.#e,allowSelf:o};a.D.printSendMessage(t,n),e.postMessage(n,t)}test(){return this.hrefRegEx?this.hrefRegEx.test(window.location.href):!!this.origin&&this.origin==window.location.origin}}class u extends c{#t;get defaultPlayerMetadata(){return this.#t}constructor(e,t){super({id:e.id,baseSiteId:e.baseSiteId,origin:e.origin,hrefRegEx:e.hrefRegEx,siteCategories:e.siteCategories,subcategories:e.subcategories,originWhitelist:e.originWhitelist,additionalInfo:e.additionalInfo}),this.#t=t}}class d extends c{additionalInfo;constructor(e,t={}){super({id:e.id,baseSiteId:e.baseSiteId,origin:e.origin,hrefRegEx:e.hrefRegEx,siteCategories:e.siteCategories,subcategories:e.subcategories,originWhitelist:e.originWhitelist,additionalInfo:e.additionalInfo}),this.additionalInfo=t}}const I={DATABASE:"Database",DICTIONARY:"Dictionary",GAMING:"Gaming",IMAGE_HOSTING:"Image Hosting",JAV:"JAV",LIVE_STREAMING:"Live Streaming",VIDEO_HOSTING:"Video Hosting",VIDEO_SHARING:"Video Sharing",VIDEO_STREAMING:"Video Streaming"},f={JAV:"JAV",TV_SERIES:"TV Series",MOVIE:"Movie"},p={"7MM":"7MM",AVGLE:"AVGLE",AVGLE_VIDEO:"AVGLE_VIDEO",AVGLE_EMBED:"AVGLE_EMBED",BILIBILI:"BILIBILI",BILIBILI_VIDEO:"BILIBILI_VIDEO",BILIBILI_BANGUMI:"BILIBILI_BANGUMI",BILIBILI_LIVE:"BILIBILI_LIVE",BUYCAR5:"BUYCAR5",DIOUS:"DIOUS",JABLE:"JABLE",JAVLIBRARY:"JAVLIBRARY",JX444662:"JX444662",MEIJUBS:"MEIJUBS",MEIJUTTB:"MEIJUTTB",MINGTIAN6:"MINGTIAN6",MM9842:"MM9842",NEXUSMODS:"NEXUSMODS",QINGBEIBAN:"QINGBEIBAN",QXWK:"QXWK",STEAM_COMMUNITY:"STEAM_COMMUNITY",STEAM_COMMUNITY_REVIEW:"STEAM_COMMUNITY_REVIEW",STEAM_STORE:"STEAM_STORE",WALLHAVEN:"WALLHAVEN",WUKONGMEIJU:"WUKONGMEIJU",YOUTUBE:"Youtube",YOUTUBE_EMBED:"YOUTUBE_EMBED",hasValue(e){for(let t in p)if(p[t]===e)return!0;return!1}},g={"7MM":new c({id:p["7MM"],baseSiteId:p["7MM"],origin:"https://7mmtv.tv",hrefRegEx:/^https:\/\/7mmtv\.tv\/.*/,siteCategories:[I.JAV,I.VIDEO_STREAMING],subcategories:[f.JAV],originWhitelist:["https://mm9842.com","https://avgle.com"]}),AVGLE_VIDEO:new c({id:p.AVGLE_VIDEO,baseSiteId:p.AVGLE,origin:"https://avgle.com",hrefRegEx:/^https:\/\/avgle\.com\/video\/\w+/,siteCategories:[I.JAV,I.VIDEO_SHARING],subcategories:[f.JAV],originWhitelist:["https://7mmtv.tv"]}),AVGLE_EMBED:new c({id:p.AVGLE_EMBED,baseSiteId:p.AVGLE,origin:"https://avgle.com",hrefRegEx:/^https:\/\/avgle\.com\/embed\/\w+$/,siteCategories:[I.JAV,I.VIDEO_SHARING],subcategories:[f.JAV],originWhitelist:["https://7mmtv.tv"]}),BILIBILI:new c({id:p.BILIBILI,baseSiteId:p.BILIBILI,origin:"https://www.bilibili.com",hrefRegEx:/^https:\/\/www\.bilibili\.com\/.*/,siteCategories:[I.VIDEO_SHARING]}),BILIBILI_BANGUMI:new c({id:p.BILIBILI_BANGUMI,baseSiteId:p.BILIBILI,origin:"https://www.bilibili.com",hrefRegEx:/^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/,siteCategories:[I.VIDEO_SHARING]}),BILIBILI_LIVE:new c({id:p.BILIBILI_LIVE,baseSiteId:p.BILIBILI,origin:"https://live.bilibili.com",hrefRegEx:/^https:\/\/live\.bilibili\.com\/.*/,siteCategories:[I.LIVE_STREAMING]}),BILIBILI_VIDEO:new c({id:p.BILIBILI_VIDEO,baseSiteId:p.BILIBILI,origin:"https://www.bilibili.com",hrefRegEx:/^https:\/\/www\.bilibili\.com\/video\/.+/,siteCategories:[I.VIDEO_SHARING]}),BUYCAR5:new c({id:p.BUYCAR5,baseSiteId:p.BUYCAR5,origin:"https://vod3.buycar5.cn",hrefRegEx:/^https:\/\/vod\d+\.buycar5\.cn/,siteCategories:[I.VIDEO_HOSTING],originWhitelist:["https://www.meijuttb.com","https://www.meijubs.com"]}),DIOUS:new c({id:p.DIOUS,baseSiteId:p.DIOUS,origin:"https://v7.dious.cc",hrefRegEx:/^https:\/\/v7.dious.cc/,siteCategories:[I.VIDEO_HOSTING],originWhitelist:["https://www.meijuttb.com","https://www.meijubs.com"]}),JABLE:new c({id:p.JABLE,baseSiteId:p.JABLE,origin:"https://jable.tv",hrefRegEx:/^https:\/\/jable.tv/,siteCategories:[I.JAV,I.VIDEO_SHARING],subcategories:[f.JAV]}),JAVLIBRARY:new c({id:p.JAVLIBRARY,baseSiteId:p.JAVLIBRARY,origin:"https://www.javlibrary.com",hrefRegEx:/^https:\/\/www\.javlibrary\.com\/.*/,siteCategories:[I.JAV,I.DATABASE]}),JX444662:new c({id:p.JX444662,baseSiteId:p.JX444662,origin:"https://jx.444662.cn",hrefRegEx:/^https:\/\/jx.444662.cn/,siteCategories:[I.VIDEO_HOSTING],originWhitelist:["https://www.meijuttb.com","https://www.meijubs.com"]}),MEIJUBS:new c({id:p.MEIJUBS,baseSiteId:p.MEIJUBS,origin:"https://www.meijubs.com",siteCategories:[I.VIDEO_STREAMING],subcategories:[f.TV_SERIES],originWhitelist:["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn","https://v7.dious.cc"]}),MEIJUTTB:new c({id:p.MEIJUTTB,baseSiteId:p.MEIJUTTB,origin:"https://www.meijuttb.com",siteCategories:[I.VIDEO_STREAMING],subcategories:[f.TV_SERIES],originWhitelist:["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn"]}),MINGTIAN6:new c({id:p.MINGTIAN6,baseSiteId:p.MINGTIAN6,origin:"https://www.mingtian6.com",siteCategories:[I.VIDEO_STREAMING],subcategories:[f.TV_SERIES,f.MOVIE],originWhitelist:["https://www.qingbeiban.com"]}),MM9842:new c({id:p.MM9842,baseSiteId:p.MM9842,origin:"https://mm9842.com",hrefRegEx:/^https:\/\/mm9842.com/,siteCategories:[I.VIDEO_HOSTING],originWhitelist:["https://7mmtv.tv"]}),NEXUSMODS:new c({id:p.NEXUSMODS,baseSiteId:p.NEXUSMODS,origin:"https://www.nexusmods.com",siteCategories:[I.GAMING],originWhitelist:["https://www.youtube.com"]}),QINGBEIBAN:new c({id:p.QINGBEIBAN,baseSiteId:p.QINGBEIBAN,origin:"https://www.qingbeiban.com",hrefRegEx:/^https:\/\/www.qingbeiban.com/,siteCategories:[I.VIDEO_HOSTING],originWhitelist:["https://www.mingtian6.com"]}),QXWK:new c({id:p.QXWK,baseSiteId:p.QXWK,origin:"https://code.qxwk.net",hrefRegEx:/^https:\/\/code.qxwk.net/,siteCategories:[I.VIDEO_HOSTING],originWhitelist:["https://m.wukongmeiju.com"]}),STEAM_COMMUNITY_REVIEW:new c({id:p.STEAM_COMMUNITY_REVIEW,baseSiteId:p.STEAM_COMMUNITY,origin:"https://steamcommunity.com",hrefRegEx:/^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/,siteCategories:[I.GAMING]}),STEAM_STORE:new c({id:p.STEAM_STORE,baseSiteId:p.STEAM_STORE,origin:"https://store.steampowered.com",hrefRegEx:/^https:\/\/store\.steampowered\.com\/.*/,siteCategories:[I.GAMING]}),WALLHAVEN:new c({id:p.WALLHAVEN,baseSiteId:p.WALLHAVEN,origin:"https://wallhaven.cc",hrefRegEx:/^https:\/\/wallhaven\.cc\/.*/,siteCategories:[I.IMAGE_HOSTING]}),WUKONGMEIJU:new c({id:p.WUKONGMEIJU,baseSiteId:p.WUKONGMEIJU,origin:"https://m.wukongmeiju.com",siteCategories:[I.VIDEO_STREAMING],subcategories:[f.TV_SERIES],originWhitelist:["https://code.qxwk.net"]}),YOUTUBE:new c({id:p.YOUTUBE,baseSiteId:p.YOUTUBE,origin:"https://www.youtube.com",siteCategories:[I.VIDEO_SHARING]}),YOUTUBE_EMBED:new c({id:p.YOUTUBE_EMBED,baseSiteId:p.YOUTUBE,origin:"https://www.youtube.com",hrefRegEx:/^https:\/\/www.youtube.com\/embed\/[\w-]+$/,siteCategories:[I.VIDEO_SHARING],originWhitelist:["https://www.nexusmods.com"]}),get(e){let t;for(let i in g){let r=g[i];if(r instanceof c&&r.id===e){if(!r.isBaseSite()||t)return r;t=r}}return t}},E={AVLGE:new l({containerSelector:"div#video-player",controlsSelector:"div.vjs-control-bar",playButtonSelector:"button.vjs-play-control",fullscreenButtonSelector:"button.vjs-fullscreen-control",topElementSelectors:[".vjs-related-carousel-holder"]}),DPLAYER:new l({containerSelector:"div#dplayer, div#mvideo",controlsSelector:".dplayer-controller",playButtonSelector:"button.dplayer-play-icon",volumeButtonSelector:"button.dplayer-volume-icon",fullscreenButtonSelector:"button.dplayer-full-icon",webFullscreenButtonSelector:".dplayer-full-in-icon"}),JABLE:new l({containerSelector:"div.plyr.plyr--video",controlsSelector:"div.plyr__controls",volumeButtonSelector:"button[data-plyr=mute]",fullscreenButtonSelector:"button[data-plyr=fullscreen]"}),get(e){for(let t in E)if(t===e)return E[t]}},h={AVGLE:new u(g.AVGLE_VIDEO,E.AVLGE.copy()),AVGLE_EMBED:new u(g.AVGLE_EMBED,E.AVLGE.copy()),BILIBILI_VIDEO:new u(g.BILIBILI_VIDEO,new l({containerSelector:"div.bilibili-player-video-wrap",controlsSelector:".bilibili-player-video-control-wrap",playButtonSelector:"div.bilibili-player-video-btn-start",volumeButtonSelector:"button.bilibili-player-iconfont-volume",fullscreenButtonSelector:"div.bilibili-player-video-btn-fullscreen button",webFullscreenButtonSelector:"div.bilibili-player-video-web-fullscreen button"})),BILIBILI_BANGUMI:new u(g.BILIBILI_BANGUMI,new l({containerSelector:"div.bpx-player-video-area",controlsSelector:".bpx-player-control-wrap",playButtonSelector:"div.squirtle-video-start",volumeButtonSelector:"div.squirtle-volume-icon",fullscreenButtonSelector:"div.squirtle-video-fullscreen",webFullscreenButtonSelector:"div.squirtle-video-pagefullscreen"})),BUYCAR5:new u(g.BUYCAR5,E.DPLAYER.copy()),DIOUS:new u(g.DIOUS,E.DPLAYER.copy()),JABLE:new u(g.JABLE,E.JABLE.copy()),JX444662:new u(g.JX444662,new l({containerSelector:"div#playerCnt",controlsSelector:"div.prism-controlbar"})),MM9842:new u(g.MM9842,new l({containerSelector:"div.jw-wrapper",controlsSelector:"div.jw-controls",volumeButtonSelector:"div.jw-icon-volume",fullscreenButtonSelector:"div.jw-icon-fullscreen"})),QINGBEIBAN:new u(g.QINGBEIBAN,E.DPLAYER.copy()),QXWK:new u(g.QXWK,E.DPLAYER.copy()),YOUTUBE_EMBED:new u(g.YOUTUBE_EMBED,new l({containerSelector:"div#player",controlsSelector:".ytp-chrome-bottom",topElementSelectors:[".ytp-pause-overlay"],playButtonSelector:"button.ytp-play-button",volumeButtonSelector:"button.ytp-mute-button",fullscreenButtonSelector:"button.ytp-fullscreen-button"})),get(e){for(let t in h)if(h[t].id===e)return h[t]}},S={"7MM":new d(g["7MM"]),MEIJUBS:new d(g.MEIJUBS),MEIJUTTB:new d(g.MEIJUTTB),MINGTIAN6:new d(g.MINGTIAN6),NEXUSMODS:new d(g.NEXUSMODS)};let w=new WeakMap;function m(e){for(let t in e){const i=e[t];if(i instanceof c&&i.test()){let e;return w.has(i)?e=w.get(i):(e=e=>{i.validateMessage(e)&&a.D.printReceiveMessage(e)},w.set(i,e)),window.addEventListener("message",e),i}}throw"No match for current site"}const b={getCurrentSite:function(){return m(g)},getCurrentVideoSite:function(){return m(h)},getCurrentVideoPortalSite:function(){return m(S)},updateEnum:async function(e="master"){if("dev"!=e&&"master"!=e)return Promise.reject("Invalid branch");const t=await a.D.gmGet(`https://raw.githubusercontent.com/maszhaowei/tampermonkey-lib/${e}/conf/site.json`,void 0,void 0,!0);let i=[];if(!o.D.isObject(t))return Promise.reject("json content is not an object");let r=t.siteids;if(o.D.isObject(r))for(let e in r)p[e]=r[e];else i.push(new TypeError("Invalid format of siteids: "+r));let n=t.sitecategories;if(o.D.isObject(n))for(let e in n)I[e]=n[e];else i.push(new TypeError("Invalid format of sitecategories: "+n));let s=t.videocategories;if(o.D.isObject(s))for(let e in s)f[e]=s[e];else i.push(new TypeError("Invalid format of videocategories: "+s));let w=t.sites;if(Array.isArray(w))for(let e of w){let t=e.id;if(!p.hasValue(t)){i.push(new Error(`Unable to find site id: ${t} in siteids`));continue}let r=new c({id:e.id,baseSiteId:e.baseSiteId,origin:e.origin,hrefRegEx:e.hrefRegEx?new RegExp(e.hrefRegEx):void 0,siteCategories:e.siteCategories,subcategories:e.subcategories,originWhitelist:e.originWhitelist,additionalInfo:e.additionalInfo}),n=g.get(t);n?o.D.assignNotEmpty(n,[r],!0,!0):g[t]=r}else i.push(new TypeError("Invalid format of sites: "+w));let m=t.videosites;if(Array.isArray(m))for(let e of m){let t=e.id,r=g.get(t);if(!r){i.push(new Error("Unable to find site: "+t));continue}let n,s=h.get(t);e.defaultPlayerMetadata&&(n=E.get(e.defaultPlayerMetadata));let a=new l({containerSelector:e.containerSelector,controlsSelector:e.controlsSelector,topElementSelectors:e.topElementSelectors,playButtonSelector:e.playButtonSelector,volumeButtonSelector:e.volumeButtonSelector,fullscreenButtonSelector:e.fullscreenButtonSelector,webFullscreenButtonSelector:e.webFullscreenButtonSelector});n&&(a=o.D.assignNotEmpty(n.copy(),[a],!0,!0)),s?o.D.assignNotEmpty(s.defaultPlayerMetadata,[a],!0,!0):h[t]=new u(r,a)}else i.push(new TypeError("Invalid format of videosites: "+m));let b=t.videoportalsites;if(Array.isArray(b))for(let e of b){let t=e.id,r=g.get(t);r?S[t]=new d(r,e.additionalInfo):i.push(new Error("Unable to find site: "+t))}else i.push(new TypeError("Invalid format of portalsites: "+b));if(!(i.length>0))return Promise.resolve();Promise.reject(i)}}})(),r})()}));