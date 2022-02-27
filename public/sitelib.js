!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sitelib=t():e.sitelib=t()}(self,(function(){return(()=>{"use strict";var e={903:(e,t,r)=>{function o(e,t){if(e instanceof Array){if(!(t instanceof Array)||e.length!=t.length)return!1;for(let r=0;r<e.length;r++)if(!o(e[r],t[r]))return!1;return!0}return!!Object.is(e,t)||(e instanceof class{equals(e){return this===e}}?e.equals(t):e===t)}r.d(t,{KeyboardKeyCode:()=>i,_isEqual:()=>o});class i{code;key;constructor(e,t){this.code=e,this.key=t}}Map,Error},882:(e,t,r)=>{r.d(t,{DEFAULT_LOG_GROUP:()=>o});const o="Common"},613:(e,t,r)=>{r.d(t,{ConsoleOutputLevel:()=>i});var o=r(903);new o.KeyboardKeyCode("Space"," "),new o.KeyboardKeyCode("Enter","Enter"),new o.KeyboardKeyCode("Escape","Escape"),new o.KeyboardKeyCode("KeyC","c"),new o.KeyboardKeyCode("KeyD","d"),new o.KeyboardKeyCode("KeyF","f"),new o.KeyboardKeyCode("KeyG","g"),new o.KeyboardKeyCode("KeyI","i"),new o.KeyboardKeyCode("KeyQ","q"),new o.KeyboardKeyCode("KeyR","r"),new o.KeyboardKeyCode("KeyS","s"),new o.KeyboardKeyCode("KeyV","v"),new o.KeyboardKeyCode("KeyW","w"),new o.KeyboardKeyCode("BracketLeft","["),new o.KeyboardKeyCode("BracketRight","]"),new o.KeyboardKeyCode("ArrowLeft","ArrowLeft"),new o.KeyboardKeyCode("ArrowRight","ArrowRight"),new o.KeyboardKeyCode("ArrowUp","ArrowUp"),new o.KeyboardKeyCode("ArrowDown","ArrowDown"),new o.KeyboardKeyCode("Digit0","0"),new o.KeyboardKeyCode("Digit1","1"),new o.KeyboardKeyCode("Digit2","2"),new o.KeyboardKeyCode("Digit3","3"),new o.KeyboardKeyCode("Numpad0","0"),new o.KeyboardKeyCode("Numpad1","1"),new o.KeyboardKeyCode("Numpad2","2"),new o.KeyboardKeyCode("Numpad3","3"),new o.KeyboardKeyCode("Numpad4","4"),new o.KeyboardKeyCode("Numpad5","5"),new o.KeyboardKeyCode("Numpad6","6"),new o.KeyboardKeyCode("Numpad7","7"),new o.KeyboardKeyCode("Numpad8","8"),new o.KeyboardKeyCode("Numpad9","9"),new o.KeyboardKeyCode("F8","F8");const i={DEBUG:"debug",INFO:"info",LOG:"log",WARN:"warn",ERROR:"error"}},232:(e,t,r)=>{r.d(t,{D:()=>l});var o=r(903),i=r(882),n=r(613);const s={零:0,一:1,二:2,两:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,百:100,千:1e3,万:1e4,亿:1e8};function a(e,t){t.forEach((t=>{if(!(t instanceof Map))throw new TypeError("Source is not a map");t.forEach(((t,r)=>e.set(r,t)))}))}let l={consoleOutput(e=i.DEFAULT_LOG_GROUP,t=n.ConsoleOutputLevel.DEBUG,...r){console.group(`[${e}]`);let o=[];for(let e=0;e<r.length;e++){let t=r[e];o.push(l.isObject(t)&&t.toPlainObject?t.toPlainObject():t)}switch(t){case n.ConsoleOutputLevel.DEBUG:console.debug(...o);break;case n.ConsoleOutputLevel.INFO:console.info(...o);break;case n.ConsoleOutputLevel.LOG:console.log(...o);break;case n.ConsoleOutputLevel.WARN:console.warn(...o);break;case n.ConsoleOutputLevel.ERROR:console.error(...o);break;default:console.debug(...o)}console.groupEnd()},get:function(e,t,r){return new Promise(((o,i)=>{let n=new XMLHttpRequest;if(n.responseType=r||"json",n.addEventListener("load",(function(){o(this.response||this.responseText)})),n.addEventListener("error",(function(){i(this)})),n.open("GET",e),t)for(let e in t)n.setRequestHeader(e,t[e]);n.send()}))},post:function(e,t={"Content-Type":"application/x-www-form-urlencoded"},r,o){return new Promise(((i,n)=>{let s=new XMLHttpRequest;s.responseType=o||"json",s.addEventListener("load",(function(){i(this.response||this.responseText)})),s.addEventListener("error",(function(){n(this)})),s.open("POST",e);for(let e in t)s.setRequestHeader(e,t[e]);s.send(r)}))},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let r=0,o=t.length;r<o;r++){let o=t[r].split("=");if(o[0]==e)return decodeURIComponent(o[1])}return""},getQueryParameter:function(e){for(let[t,r]of new URLSearchParams(window.location.search).entries())if(t===e)return r},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(s);for(const r of e)if(!t.includes(r))return!1;return!0},zh2Digits:function(e){if(l.isInteger(e))return parseInt(e);if(!this.isChineseDigits(e))return;let t=0,r=1;for(let o=e.length-1;o>=0;o--){let i=s[e[o]];i>=10&&0==o?i>r?(r=i,t+=i):r*=i:i>=10?i>r?r=i:r*=i:t+=r*i}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!l.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"],r=e.length;return 1==r?t[e]:2==r?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},getFirstTruthyMember:function(e,t){let r;return e.some((e=>(r=t[e],!!r)))?r:void 0},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)||e instanceof Object},isString:function(e){return e instanceof String||"string"==typeof e},isBlank:function(e){return l.isString(e)?""===e.trim():null==e},assignNotUndefined:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((r=>{let o=t[r];void 0!==o&&(e[r]=o)}))})),e},assignNotEmpty:function(e,t,r=!1,o=!1){if(!Array.isArray(t))throw new TypeError("Invalid sources");if(!l.isObject(e))throw new TypeError("Invalid target");return e instanceof Map&&a(e,t),t.forEach((t=>{if(!l.isObject(t))throw new TypeError("Invalid source");Object.keys(t).forEach((i=>{let n=t[i],s=e[i];if(null!=n&&!Object.is(NaN,n))if(Array.isArray(s)){if(!Array.isArray(n))throw new TypeError(`${i} of source is not an array`);o?n.forEach((e=>{s.includes(e)||s.push(e)})):e[i]=n}else if(s instanceof Map)r?a(s,[n]):e[i]=n;else if(l.isObject(s)){if(!l.isObject(n))throw new TypeError(`${i} of source is not an object`);r?l.assignNotEmpty(s,[n],r,o):e[i]=n}else e[i]=n}))})),e},isIterable:function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},isEqual:o._isEqual,formatDate:function(e,t="MM/dd/yyyy hh:mm:ss"){e instanceof Date||(e=new Date(e));var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return t},sleep:e=>new Promise((t=>setTimeout(t,e))),sleepUntil(e,t=window){let r=e-t.performance.now();return r>0?this.sleep(r):Promise.resolve()}}},725:(e,t,r)=>{r.d(t,{UUID:()=>o}),r(232),r(903),r(613);var o=r(614)},614:(e,t,r)=>{var o;r.r(t),r.d(t,{NIL:()=>B,parse:()=>g,stringify:()=>c,v1:()=>p,v3:()=>O,v4:()=>M,v5:()=>D,validate:()=>a,version:()=>L});var i=new Uint8Array(16);function n(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(i)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a=function(e){return"string"==typeof e&&s.test(e)};for(var l=[],d=0;d<256;++d)l.push((d+256).toString(16).substr(1));const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!a(r))throw TypeError("Stringified UUID is invalid");return r};var u,I,E=0,f=0;const p=function(e,t,r){var o=t&&r||0,i=t||new Array(16),s=(e=e||{}).node||u,a=void 0!==e.clockseq?e.clockseq:I;if(null==s||null==a){var l=e.random||(e.rng||n)();null==s&&(s=u=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==a&&(a=I=16383&(l[6]<<8|l[7]))}var d=void 0!==e.msecs?e.msecs:Date.now(),p=void 0!==e.nsecs?e.nsecs:f+1,g=d-E+(p-f)/1e4;if(g<0&&void 0===e.clockseq&&(a=a+1&16383),(g<0||d>E)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");E=d,f=p,I=a;var h=(1e4*(268435455&(d+=122192928e5))+p)%4294967296;i[o++]=h>>>24&255,i[o++]=h>>>16&255,i[o++]=h>>>8&255,i[o++]=255&h;var S=d/4294967296*1e4&268435455;i[o++]=S>>>8&255,i[o++]=255&S,i[o++]=S>>>24&15|16,i[o++]=S>>>16&255,i[o++]=a>>>8|128,i[o++]=255&a;for(var w=0;w<6;++w)i[o+w]=s[w];return t||c(i)},g=function(e){if(!a(e))throw TypeError("Invalid UUID");var t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r};function h(e,t,r){function o(e,o,i,n){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof o&&(o=g(o)),16!==o.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var s=new Uint8Array(16+e.length);if(s.set(o),s.set(e,o.length),(s=r(s))[6]=15&s[6]|t,s[8]=63&s[8]|128,i){n=n||0;for(var a=0;a<16;++a)i[n+a]=s[a];return i}return c(s)}try{o.name=e}catch(e){}return o.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",o.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",o}function S(e){return 14+(e+64>>>9<<4)+1}function w(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function y(e,t,r,o,i,n){return w((s=w(w(t,e),w(o,n)))<<(a=i)|s>>>32-a,r);var s,a}function b(e,t,r,o,i,n,s){return y(t&r|~t&o,e,t,i,n,s)}function m(e,t,r,o,i,n,s){return y(t&o|r&~o,e,t,i,n,s)}function v(e,t,r,o,i,n,s){return y(t^r^o,e,t,i,n,s)}function A(e,t,r,o,i,n,s){return y(r^(t|~o),e,t,i,n,s)}const O=h("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var r=0;r<t.length;++r)e[r]=t.charCodeAt(r)}return function(e){for(var t=[],r=32*e.length,o="0123456789abcdef",i=0;i<r;i+=8){var n=e[i>>5]>>>i%32&255,s=parseInt(o.charAt(n>>>4&15)+o.charAt(15&n),16);t.push(s)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[S(t)-1]=t;for(var r=1732584193,o=-271733879,i=-1732584194,n=271733878,s=0;s<e.length;s+=16){var a=r,l=o,d=i,c=n;r=b(r,o,i,n,e[s],7,-680876936),n=b(n,r,o,i,e[s+1],12,-389564586),i=b(i,n,r,o,e[s+2],17,606105819),o=b(o,i,n,r,e[s+3],22,-1044525330),r=b(r,o,i,n,e[s+4],7,-176418897),n=b(n,r,o,i,e[s+5],12,1200080426),i=b(i,n,r,o,e[s+6],17,-1473231341),o=b(o,i,n,r,e[s+7],22,-45705983),r=b(r,o,i,n,e[s+8],7,1770035416),n=b(n,r,o,i,e[s+9],12,-1958414417),i=b(i,n,r,o,e[s+10],17,-42063),o=b(o,i,n,r,e[s+11],22,-1990404162),r=b(r,o,i,n,e[s+12],7,1804603682),n=b(n,r,o,i,e[s+13],12,-40341101),i=b(i,n,r,o,e[s+14],17,-1502002290),r=m(r,o=b(o,i,n,r,e[s+15],22,1236535329),i,n,e[s+1],5,-165796510),n=m(n,r,o,i,e[s+6],9,-1069501632),i=m(i,n,r,o,e[s+11],14,643717713),o=m(o,i,n,r,e[s],20,-373897302),r=m(r,o,i,n,e[s+5],5,-701558691),n=m(n,r,o,i,e[s+10],9,38016083),i=m(i,n,r,o,e[s+15],14,-660478335),o=m(o,i,n,r,e[s+4],20,-405537848),r=m(r,o,i,n,e[s+9],5,568446438),n=m(n,r,o,i,e[s+14],9,-1019803690),i=m(i,n,r,o,e[s+3],14,-187363961),o=m(o,i,n,r,e[s+8],20,1163531501),r=m(r,o,i,n,e[s+13],5,-1444681467),n=m(n,r,o,i,e[s+2],9,-51403784),i=m(i,n,r,o,e[s+7],14,1735328473),r=v(r,o=m(o,i,n,r,e[s+12],20,-1926607734),i,n,e[s+5],4,-378558),n=v(n,r,o,i,e[s+8],11,-2022574463),i=v(i,n,r,o,e[s+11],16,1839030562),o=v(o,i,n,r,e[s+14],23,-35309556),r=v(r,o,i,n,e[s+1],4,-1530992060),n=v(n,r,o,i,e[s+4],11,1272893353),i=v(i,n,r,o,e[s+7],16,-155497632),o=v(o,i,n,r,e[s+10],23,-1094730640),r=v(r,o,i,n,e[s+13],4,681279174),n=v(n,r,o,i,e[s],11,-358537222),i=v(i,n,r,o,e[s+3],16,-722521979),o=v(o,i,n,r,e[s+6],23,76029189),r=v(r,o,i,n,e[s+9],4,-640364487),n=v(n,r,o,i,e[s+12],11,-421815835),i=v(i,n,r,o,e[s+15],16,530742520),r=A(r,o=v(o,i,n,r,e[s+2],23,-995338651),i,n,e[s],6,-198630844),n=A(n,r,o,i,e[s+7],10,1126891415),i=A(i,n,r,o,e[s+14],15,-1416354905),o=A(o,i,n,r,e[s+5],21,-57434055),r=A(r,o,i,n,e[s+12],6,1700485571),n=A(n,r,o,i,e[s+3],10,-1894986606),i=A(i,n,r,o,e[s+10],15,-1051523),o=A(o,i,n,r,e[s+1],21,-2054922799),r=A(r,o,i,n,e[s+8],6,1873313359),n=A(n,r,o,i,e[s+15],10,-30611744),i=A(i,n,r,o,e[s+6],15,-1560198380),o=A(o,i,n,r,e[s+13],21,1309151649),r=A(r,o,i,n,e[s+4],6,-145523070),n=A(n,r,o,i,e[s+11],10,-1120210379),i=A(i,n,r,o,e[s+2],15,718787259),o=A(o,i,n,r,e[s+9],21,-343485551),r=w(r,a),o=w(o,l),i=w(i,d),n=w(n,c)}return[r,o,i,n]}(function(e){if(0===e.length)return[];for(var t=8*e.length,r=new Uint32Array(S(t)),o=0;o<t;o+=8)r[o>>5]|=(255&e[o/8])<<o%32;return r}(e),8*e.length))})),M=function(e,t,r){var o=(e=e||{}).random||(e.rng||n)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){r=r||0;for(var i=0;i<16;++i)t[r+i]=o[i];return t}return c(o)};function R(e,t,r,o){switch(e){case 0:return t&r^~t&o;case 1:return t^r^o;case 2:return t&r^t&o^r&o;case 3:return t^r^o}}function _(e,t){return e<<t|e>>>32-t}const D=h("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var o=unescape(encodeURIComponent(e));e=[];for(var i=0;i<o.length;++i)e.push(o.charCodeAt(i))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var n=e.length/4+2,s=Math.ceil(n/16),a=new Array(s),l=0;l<s;++l){for(var d=new Uint32Array(16),c=0;c<16;++c)d[c]=e[64*l+4*c]<<24|e[64*l+4*c+1]<<16|e[64*l+4*c+2]<<8|e[64*l+4*c+3];a[l]=d}a[s-1][14]=8*(e.length-1)/Math.pow(2,32),a[s-1][14]=Math.floor(a[s-1][14]),a[s-1][15]=8*(e.length-1)&4294967295;for(var u=0;u<s;++u){for(var I=new Uint32Array(80),E=0;E<16;++E)I[E]=a[u][E];for(var f=16;f<80;++f)I[f]=_(I[f-3]^I[f-8]^I[f-14]^I[f-16],1);for(var p=r[0],g=r[1],h=r[2],S=r[3],w=r[4],y=0;y<80;++y){var b=Math.floor(y/20),m=_(p,5)+R(b,g,h,S)+w+t[b]+I[y]>>>0;w=S,S=h,h=_(g,30)>>>0,g=p,p=m}r[0]=r[0]+p>>>0,r[1]=r[1]+g>>>0,r[2]=r[2]+h>>>0,r[3]=r[3]+S>>>0,r[4]=r[4]+w>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]})),B="00000000-0000-0000-0000-000000000000",L=function(e){if(!a(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}},719:(e,t,r)=>{r.d(t,{scriptName:()=>i});const o="undefined"==typeof GM_info?{name:"Tampermonkey"}:GM_info.script,i=o&&o.name},235:(e,t,r)=>{r.d(t,{MessageTypes:()=>o,EMOJIS:()=>i});const o={GENERAL:"general",SITE_INFO:"site_info",VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",SWITCH_PLAYING_VIDEO:"switch_playing_video",REMOVE_IFRAME:"remove_iframe",READY_FOR_MESSAGE:"ready_for_message",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",KEYDOWN:"keydown",KEYUP:"keyup",VIEWPORT_DIMENSION:"viewport_dimension",hasValue:function(e){if(e===o.hasValue)return!1;for(let t in o)if(this[t]===e)return!0;return!1}},i={angry:[",,Ծ‸Ծ,,","(╯‵□′)╯︵┻━┻"],happy:["=‿=✧","●ω●","(/ ▽ \\)","(=・ω・=)","(●'◡'●)ﾉ♥","<(▰˘◡˘▰)>","(⁄ ⁄•⁄ω⁄•⁄ ⁄)","(ง,,• ᴗ •,,)ง ✧",">ㅂ<ﾉ ☆"],shock:["Σ( ° △ °|||)︴","┌( ಠ_ಠ)┘","(ﾟДﾟ≡ﾟдﾟ)!?","∑(っ °Д °;)っ"],sad:["＞︿＜","＞△＜","●︿●","(´；ω；`)"],helpless:["◐▽◑","ʅ（´◔౪◔）ʃ","_(:3 」∠)_","_(┐「ε:)_","(°▽°)ﾉ","←◡←","_(•̀ᴗ•́ 」∠ ❀)_","_φ(･ω･` )"],custom:["(`･ω･´)","(^_-)-☆","༼ つ ◕_◕ ༽つ","(☞ﾟヮﾟ)☞","( ͡° ͜ʖ ͡°)","(っ˘ڡ˘ς)","(⌐■_■)","( ͡~ ͜ʖ ͡°)","(╯°□°）╯︵ ┻━┻","(͡•_ ͡• )"]}},70:(e,t,r)=>{r.d(t,{D:()=>a});var o=r(719),i=r(235),n=r(232),s=r(613);const a={debug:function(...e){n.D.consoleOutput(o.scriptName,s.ConsoleOutputLevel.DEBUG,...e)},info:function(...e){n.D.consoleOutput(o.scriptName,s.ConsoleOutputLevel.INFO,...e)},log:function(...e){n.D.consoleOutput(o.scriptName,s.ConsoleOutputLevel.LOG,...e)},warn:function(...e){n.D.consoleOutput(o.scriptName,s.ConsoleOutputLevel.WARN,...e)},error:function(...e){n.D.consoleOutput(o.scriptName,s.ConsoleOutputLevel.ERROR,...e)},gmGet:function(e,t,r,o=!1){return new Promise(((i,n)=>{GM_xmlhttpRequest({method:"GET",url:e,headers:t,nocache:o,responseType:r||"json",onload:e=>{i(e.response||e.responseText)},onerror:e=>{n(e)}})}))},gmPost:function(e,t,r,o){return t=t||{"Content-Type":"application/x-www-form-urlencoded"},new Promise(((i,n)=>{GM_xmlhttpRequest({method:"POST",url:e,headers:t,data:r,responseType:o||"json",onload:e=>{i("blob"===o?e:e.response||e.responseText)},onerror:e=>{n(e)}})}))},gmOptions:function(e,t,r){return new Promise(((o,i)=>{GM_xmlhttpRequest({method:"OPTIONS",url:e,headers:t,responseType:r||"json",onload:e=>{o(e.response||e.responseText)},onerror:e=>{i(e)}})}))},printReceiveMessage:function(e){a.debug(`>>> From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage:function(e,t){a.debug(`<<< To: ${e}, From: ${window.location.origin}, Message:`,t)},randomEmoji:{}};for(let e in i.EMOJIS)a.randomEmoji[e]=()=>i.EMOJIS[e][Math.floor(Math.random()*i.EMOJIS[e].length)]}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{r.r(o),r.d(o,{Class:()=>e,Enum:()=>t,util:()=>O});var e={};r.r(e),r.d(e,{PlayerMetadata:()=>d,SearchSite:()=>E,Site:()=>c,VideoPortalSite:()=>I,VideoSite:()=>u,_VideoCategories:()=>l});var t={};r.r(t),r.d(t,{DefaultPlayerMetadatas:()=>S,SearchSites:()=>b,SiteCategories:()=>f,SiteIDs:()=>g,Sites:()=>h,VideoCategories:()=>p,VideoPortalSites:()=>y,VideoSites:()=>w});var i=r(232),n=r(725),s=r(235),a=r(70);const l={JAV:"JAV",TV_SERIES:"TV Series",MOVIE:"Movie",TRAILERS:"Trailers",PORNOGRAPHIC_FILM:"Pornographic Film"};class d{containerSelector;controlsSelector;delegateIgnoreSelectors;playButtonSelector;fullscreenButtonSelector;webFullscreenButtonSelector;volumeButtonSelector;delegateIgnoreMap;constructor({containerSelector:e,controlsSelector:t,delegateIgnoreSelectors:r=[],playButtonSelector:o,volumeButtonSelector:i,fullscreenButtonSelector:n,webFullscreenButtonSelector:s,delegateIgnoreMap:a=new Map}){this.containerSelector=e,this.controlsSelector=t,this.delegateIgnoreSelectors=r,this.playButtonSelector=o,this.volumeButtonSelector=i,this.fullscreenButtonSelector=n,this.webFullscreenButtonSelector=s,this.delegateIgnoreMap=a}copy(){let e=new d({});return i.D.assignNotEmpty(e,[this]),e}}class c{id;baseSiteId;#e;get uuid(){return this.#e}origin;hrefRegEx;siteCategories;originWhitelist;additionalInfo;constructor({id:e,baseSiteId:t,origin:r,hrefRegEx:o,siteCategories:i=[],originWhitelist:s=[],additionalInfo:a={}}){this.id=e,this.baseSiteId=t,this.#e=n.UUID.v4(),this.origin=r,this.hrefRegEx=o,this.siteCategories=i,this.originWhitelist=s,this.additionalInfo=a}isEmbedded(){return self!==top}isBaseSite(){return this.baseSiteId===this.id}validateMessage(e){let t=e.data;if(!(t&&t.type&&t.src&&t.srcSiteTag))return!1;let r=e.origin;return(r===window.location.origin||!!this.originWhitelist?.includes(r))&&s.MessageTypes.hasValue(t.type)&&(!t.targetSiteTag||t.targetSiteTag==this.#e)}postMessage(e,t,{type:r,content:o,targetSiteTag:i}){let n={type:r,content:o,src:window.location.href,srcSiteTag:this.#e,targetSiteTag:i};a.D.printSendMessage(t,n),e.postMessage(n,t)}test(){return this.hrefRegEx?this.hrefRegEx.test(window.location.href):!!this.origin&&this.origin==window.location.origin}}class u extends c{#t;get defaultPlayerMetadata(){return this.#t}videoCategories;constructor({id:e,baseSiteId:t,hrefRegEx:r,defaultPlayerMetadata:o,videoCategories:i=[],originWhitelist:n=[]}){super({id:e,baseSiteId:t,hrefRegEx:r,originWhitelist:n}),this.#t=o,this.videoCategories=i}getCurrentPageCategories(){return this.videoCategories}}class I extends c{videoCategories;additionalInfo;constructor({id:e,baseSiteId:t,hrefRegEx:r,videoCategories:o=[],originWhitelist:i=[],additionalInfo:n={}}){super({id:e,baseSiteId:t,hrefRegEx:r,originWhitelist:i}),this.videoCategories=o,this.additionalInfo=n}getCurrentPageCategories(){return this.videoCategories}}class E extends c{#r;get searchKeyword(){if(this.#r){let e=document.querySelector(this.#r);return e.value||e.textContent}{let e=window.location.href.match(this.hrefRegEx);if(e)return e[1]}}constructor(e,t,r,o){super({id:e,baseSiteId:t,hrefRegEx:r}),this.#r=o}}const f={COMPUTER_HARDWARE:"Computer Hardware",DATABASE:"Database",DICTIONARY:"Dictionary",GAMING:"Gaming",IMAGE_HOSTING:"Image Hosting",JAV:"JAV",LIVE_STREAMING:"Live Streaming",VIDEO_HOSTING:"Video Hosting",VIDEO_SHARING:"Video Sharing",VIDEO_STREAMING:"Video Streaming",WIKI:"Wiki"},p=l,g={"7MM":"7MM","7MM_VIDEO_PORTAL":"7MM_VIDEO","7MM_SEARCH":"7MM_SEARCH",AVGLE:"AVGLE",AVGLE_VIDEO:"AVGLE_VIDEO",AVGLE_EMBED_VIDEO:"AVGLE_EMBED",BILIBILI:"BILIBILI",BILIBILI_VIDEO:"BILIBILI_VIDEO",BILIBILI_BANGUMI_VIDEO:"BILIBILI_BANGUMI_VIDEO",BILIBILI_LIVE:"BILIBILI_LIVE",BILIBILI_MEDAL_CENTER:"BILIBILI_MEDAL_CENTER",BUYCAR5:"BUYCAR5",BUYCAR5_VIDEO:"BUYCAR5_VIDEO",BWIKI:"BWIKI",DIOUS:"DIOUS",DIOUS_VIDEO:"DIOUS_VIDEO",FANDOM:"FANDOM",FANDOM_VIDEO_PORTAL:"FANDOM_VIDEO_PORTAL",JABLE:"JABLE",JABLE_SEARCH:"JABLE_SEARCH",JABLE_VIDEO:"JABLE_VIDEO",JAVLIBRARY:"JAVLIBRARY",JAVTRAILERS:"JavTrailers",JAVTRAILERS_SEARCH:"JavTrailers_SEARCH",JX444662:"JX444662",JX444662_VIDEO:"JX444662_VIDEO",MEIJUBS:"MEIJUBS",MEIJUBS_VIDEO_PORTAL:"MEIJUBS_VIDEO_PORTAL",MEIJUTTB:"MEIJUTTB",MINGTIAN6:"MINGTIAN6",MM9842:"MM9842",MM9842_VIDEO:"MM9842_VIDEO",NEXUSMODS:"NEXUSMODS",NEXUSMODS_VIDEO_PORTAL:"NEXUSMODS_VIDEO_PORTAL",QINGBEIBAN:"QINGBEIBAN",QXWK:"QXWK",QXWK_VIDEO:"QXWK_VIDEO",STEAM_COMMUNITY:"STEAM_COMMUNITY",STEAM_COMMUNITY_REVIEW:"STEAM_COMMUNITY_REVIEW",STEAM_STORE:"STEAM_STORE",WALLHAVEN:"WALLHAVEN",WUKONGMEIJU:"WUKONGMEIJU",YOUTUBE:"Youtube",YOUTUBE_EMBED_VIDEO:"YOUTUBE_EMBED",hasValue(e){for(let t in g)if(g[t]===e)return!0;return!1}},h={"7MM":new c({id:g["7MM"],baseSiteId:g["7MM"],origin:"https://7mmtv.tv",hrefRegEx:/^https:\/\/7mmtv\.tv\/.*/,siteCategories:[f.JAV,f.VIDEO_STREAMING]}),AVGLE:new c({id:g.AVGLE,baseSiteId:g.AVGLE,origin:"https://avgle.com",hrefRegEx:/^https:\/\/avgle\.com\/video\/\w+/,siteCategories:[f.JAV,f.VIDEO_SHARING]}),BILIBILI:new c({id:g.BILIBILI,baseSiteId:g.BILIBILI,origin:"https://www.bilibili.com",hrefRegEx:/^https:\/\/www\.bilibili\.com\/.*/,siteCategories:[f.VIDEO_SHARING]}),BILIBILI_LIVE:new c({id:g.BILIBILI_LIVE,baseSiteId:g.BILIBILI,origin:"https://live.bilibili.com",hrefRegEx:/^https:\/\/live\.bilibili\.com\/.*/,siteCategories:[f.LIVE_STREAMING]}),BUYCAR5:new c({id:g.BUYCAR5,baseSiteId:g.BUYCAR5,origin:"https://vod3.buycar5.cn",hrefRegEx:/^https:\/\/vod\d+\.buycar5\.cn/,siteCategories:[f.VIDEO_HOSTING]}),DIOUS:new c({id:g.DIOUS,baseSiteId:g.DIOUS,origin:"https://v7.dious.cc",hrefRegEx:/^https:\/\/v7.dious.cc/,siteCategories:[f.VIDEO_HOSTING]}),JABLE:new c({id:g.JABLE,baseSiteId:g.JABLE,origin:"https://jable.tv",hrefRegEx:/^https:\/\/jable.tv/,siteCategories:[f.JAV,f.VIDEO_SHARING]}),JAVLIBRARY:new c({id:g.JAVLIBRARY,baseSiteId:g.JAVLIBRARY,origin:"https://www.javlibrary.com",hrefRegEx:/^https:\/\/www\.javlibrary\.com\/.*/,siteCategories:[f.JAV,f.DATABASE]}),JAVTRAILERS:new c({id:g.JAVTRAILERS,baseSiteId:g.JAVTRAILERS,origin:"https://javtrailers.com",siteCategories:["Database"]}),JX444662:new c({id:g.JX444662,baseSiteId:g.JX444662,origin:"https://jx.444662.cn",hrefRegEx:/^https:\/\/jx.444662.cn/,siteCategories:[f.VIDEO_HOSTING]}),MEIJUBS:new c({id:g.MEIJUBS,baseSiteId:g.MEIJUBS,origin:"https://www.meijubs.com",siteCategories:[f.VIDEO_STREAMING]}),MM9842:new c({id:g.MM9842,baseSiteId:g.MM9842,origin:"https://mm9842.com",hrefRegEx:/^https:\/\/mm9842.com/,siteCategories:[f.VIDEO_HOSTING]}),NEXUSMODS:new c({id:g.NEXUSMODS,baseSiteId:g.NEXUSMODS,origin:"https://www.nexusmods.com",siteCategories:[f.GAMING]}),QXWK:new c({id:g.QXWK,baseSiteId:g.QXWK,origin:"https://code.qxwk.net",hrefRegEx:/^https:\/\/code.qxwk.net/,siteCategories:[f.VIDEO_HOSTING]}),STEAM_COMMUNITY_REVIEW:new c({id:g.STEAM_COMMUNITY_REVIEW,baseSiteId:g.STEAM_COMMUNITY,origin:"https://steamcommunity.com",hrefRegEx:/^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/,siteCategories:[f.GAMING]}),STEAM_STORE:new c({id:g.STEAM_STORE,baseSiteId:g.STEAM_STORE,origin:"https://store.steampowered.com",hrefRegEx:/^https:\/\/store\.steampowered\.com\/.*/,siteCategories:[f.GAMING]}),WALLHAVEN:new c({id:g.WALLHAVEN,baseSiteId:g.WALLHAVEN,origin:"https://wallhaven.cc",hrefRegEx:/^https:\/\/wallhaven\.cc\/.*/,siteCategories:[f.IMAGE_HOSTING]}),WUKONGMEIJU:new c({id:g.WUKONGMEIJU,baseSiteId:g.WUKONGMEIJU,origin:"https://m.wukongmeiju.com",siteCategories:[f.VIDEO_STREAMING],originWhitelist:["https://code.qxwk.net"]}),YOUTUBE:new c({id:g.YOUTUBE,baseSiteId:g.YOUTUBE,origin:"https://www.youtube.com",siteCategories:[f.VIDEO_SHARING]}),get(e){let t;for(let r in h){let o=h[r];if(o instanceof c&&o.id===e){if(!o.isBaseSite())return o;t||(t=o)}}return t}},S={VJS:new d({containerSelector:"div.video-js",controlsSelector:"div.vjs-control-bar",playButtonSelector:"button.vjs-play-control",fullscreenButtonSelector:"button.vjs-fullscreen-control",delegateIgnoreSelectors:[".vjs-related-carousel-holder"]}),DPLAYER:new d({containerSelector:"div.dplayer",controlsSelector:".dplayer-controller",playButtonSelector:"button.dplayer-play-icon",volumeButtonSelector:"button.dplayer-volume-icon",fullscreenButtonSelector:"button.dplayer-full-icon",webFullscreenButtonSelector:".dplayer-full-in-icon"}),JABLE:new d({containerSelector:"div.plyr.plyr--video",controlsSelector:"div.plyr__controls",volumeButtonSelector:"button[data-plyr=mute]",fullscreenButtonSelector:"button[data-plyr=fullscreen]"}),PRISM:new d({containerSelector:".prism-player",controlsSelector:".prism-controlbar",playButtonSelector:".prism-play-btn",fullscreenButtonSelector:".prism-fullscreen-btn"}),get(e){for(let t in S)if(t===e)return S[t]}},w={AVGLE_VIDEO:new u({id:g.AVGLE_VIDEO,baseSiteId:g.AVGLE,hrefRegEx:/^https:\/\/avgle\.com\/video\/\w+/,defaultPlayerMetadata:S.VJS.copy(),videoCategories:[p.JAV],originWhitelist:["https://7mmtv.tv"]}),AVGLE_EMBED_VIDEO:new u({id:g.AVGLE_EMBED_VIDEO,baseSiteId:g.AVGLE,hrefRegEx:/^https:\/\/avgle\.com\/embed\/\w+$/,defaultPlayerMetadata:S.VJS.copy(),videoCategories:[p.JAV],originWhitelist:["https://7mmtv.tv"]}),BILIBILI_VIDEO:new u({id:g.BILIBILI_VIDEO,baseSiteId:g.BILIBILI,hrefRegEx:/^https:\/\/www\.bilibili\.com\/video\/.+/,defaultPlayerMetadata:new d({containerSelector:"div.bilibili-player-video-wrap",controlsSelector:".bilibili-player-video-control-wrap",playButtonSelector:"div.bilibili-player-video-btn-start",volumeButtonSelector:"button.bilibili-player-iconfont-volume",fullscreenButtonSelector:"div.bilibili-player-video-btn-fullscreen button",webFullscreenButtonSelector:"div.bilibili-player-video-web-fullscreen button"})}),BILIBILI_BANGUMI_VIDEO:new u({id:g.BILIBILI_BANGUMI_VIDEO,baseSiteId:g.BILIBILI,hrefRegEx:/^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/,defaultPlayerMetadata:new d({containerSelector:"div.bpx-player-video-area",controlsSelector:".bpx-player-control-wrap",playButtonSelector:"div.squirtle-video-start",volumeButtonSelector:"div.squirtle-volume-icon",fullscreenButtonSelector:"div.squirtle-video-fullscreen",webFullscreenButtonSelector:"div.squirtle-video-pagefullscreen"})}),BUYCAR5_VIDEO:new u({id:g.BUYCAR5_VIDEO,baseSiteId:g.BUYCAR5,hrefRegEx:/^https:\/\/vod\d+\.buycar5\.cn/,defaultPlayerMetadata:S.DPLAYER.copy(),originWhitelist:["https://www.meijuttb.com","https://www.meijubs.com"]}),DIOUS_VIDEO:new u({id:g.DIOUS_VIDEO,baseSiteId:g.DIOUS,hrefRegEx:/^https:\/\/v7.dious.cc/,defaultPlayerMetadata:S.DPLAYER.copy(),originWhitelist:["https://www.meijuttb.com","https://www.meijubs.com"]}),JABLE_VIDEO:new u({id:g.JABLE_VIDEO,baseSiteId:g.JABLE,hrefRegEx:/^https:\/\/jable.tv\/videos\/.+/,defaultPlayerMetadata:S.JABLE.copy(),videoCategories:[p.JAV]}),JX444662_VIDEO:new u({id:g.JX444662_VIDEO,baseSiteId:g.JX444662,hrefRegEx:/^https:\/\/jx.444662.cn/,defaultPlayerMetadata:new d({containerSelector:"div#playerCnt",controlsSelector:"div.prism-controlbar"}),originWhitelist:["https://www.meijuttb.com","https://www.meijubs.com"]}),MM9842_VIDEO:new u({id:g.MM9842_VIDEO,baseSiteId:g.MM9842,hrefRegEx:/^https:\/\/mm9842.com/,defaultPlayerMetadata:new d({containerSelector:"div.jw-wrapper",controlsSelector:"div.jw-controls",volumeButtonSelector:"div.jw-icon-volume",fullscreenButtonSelector:"div.jw-icon-fullscreen"}),originWhitelist:["https://7mmtv.tv"]}),QXWK_VIDEO:new u({id:g.QXWK_VIDEO,baseSiteId:g.QXWK,hrefRegEx:/^https:\/\/code.qxwk.net/,defaultPlayerMetadata:S.DPLAYER.copy(),originWhitelist:["https://m.wukongmeiju.com"]}),YOUTUBE_EMBED_VIDEO:new u({id:g.YOUTUBE_EMBED_VIDEO,baseSiteId:g.YOUTUBE,hrefRegEx:/^https:\/\/www.youtube.com\/embed\/[\w-]+/,defaultPlayerMetadata:new d({containerSelector:"div#player",controlsSelector:".ytp-chrome-bottom",delegateIgnoreSelectors:[".ytp-pause-overlay"],playButtonSelector:"button.ytp-play-button",volumeButtonSelector:"button.ytp-mute-button",fullscreenButtonSelector:"button.ytp-fullscreen-button"}),originWhitelist:["https://www.nexusmods.com"]}),get(e){for(let t in w)if(w[t].id===e)return w[t]}},y={"7MM_VIDEO_PORTAL":new I({id:g["7MM_VIDEO_PORTAL"],baseSiteId:g["7MM"],hrefRegEx:/^https:\/\/7mmtv\.tv\/.+/,videoCategories:[p.PORNOGRAPHIC_FILM],originWhitelist:["https://mm9842.com","https://avgle.com"]}),FANDOM_VIDEO_PORTAL:new I({id:g.FANDOM_VIDEO_PORTAL,baseSiteId:g.FANDOM,hrefRegEx:/^https:\/\/.+\.fandom\.com\/wiki\/.+/,videoCategories:[f.WIKI],originWhitelist:["https://www.youtube.com"]}),MEIJUBS_VIDEO_PORTAL:new I({id:g.MEIJUBS_VIDEO_PORTAL,baseSiteId:g.MEIJUBS,hrefRegEx:/^https:\/\/www\.meijubs\.com\/play\/.+/,videoCategories:[p.TV_SERIES],originWhitelist:["https://vod3.buycar5.cn","https://jx.444662.cn","https://vod4.buycar5.cn","https://v7.dious.cc"]}),NEXUSMODS_VIDEO_PORTAL:new I({id:g.NEXUSMODS_VIDEO_PORTAL,baseSiteId:g.NEXUSMODS,hrefRegEx:/^https:\/\/www\.nexusmods\.com\/[^/]+\/mods\/\d+/,videoCategories:[f.GAMING],originWhitelist:["https://www.youtube.com"]}),get(e){for(let t in y)if(y[t].id===e)return y[t]}},b={"7MM_SEARCH":new E(g["7MM_SEARCH"],g["7MM"],/^https:\/\/7mmtv\.tv\/\w+\/\w+_search\/all\/([^/]+)/,".breadcrumb-heading-row li:last-child a"),JABLE_SEARCH:new E(g.JABLE_SEARCH,g.JABLE,/^https:\/\/jable\.tv\/search\/([^/]+)/),JAVTRAILERS_SEARCH:new E(g.JAVTRAILERS_SEARCH,g.JAVTRAILERS,/^https:\/\/javtrailers\.com\/search\/([^/]+)/)};let m=new WeakMap;function v(e){let t;m.has(e)?t=m.get(e):(t=t=>{e.validateMessage(t)&&a.D.printReceiveMessage(t)},m.set(e,t)),window.addEventListener("message",t)}function A(e){let t;for(let r in e){const o=e[r];if(o instanceof c&&o.test()){if(!o.isBaseSite())return v(o),o;t||(t=o)}}if(t)return v(t),t;a.D.debug(`Can't find current site: ${window.location.href}.`)}const O={getCurrentSite:function(){return A(h)},getCurrentVideoSite:function(){return A(w)},getCurrentVideoPortalSite:function(){return A(y)},getCurrentSearchSite:function(){for(let e in b){const t=b[e];if(t instanceof c&&t.test())return t}a.D.debug(`Can't find current search site: ${window.location.href}.`)},updateRemoteSiteConfig:async function(e="master"){if("dev"!=e&&"master"!=e)return Promise.reject("Invalid branch");const t=await a.D.gmGet(`https://raw.githack.com/maszhaowei/tampermonkey-lib/${e}/conf/site.json`,void 0,void 0,!0);let r=[];if(!i.D.isObject(t))return Promise.reject("json content is not an object");let o=t.siteids;if(i.D.isObject(o))for(let e in o)g[e]=o[e];else r.push(new TypeError("Invalid format of siteids: "+o));let n=t.sitecategories;if(i.D.isObject(n))for(let e in n)f[e]=n[e];else r.push(new TypeError("Invalid format of sitecategories: "+n));let s=t.videocategories;if(i.D.isObject(s))for(let e in s)p[e]=s[e];else r.push(new TypeError("Invalid format of videocategories: "+s));let l=t.sites;if(Array.isArray(l))for(let e of l){let t=e.id;if(!g.hasValue(t)){r.push(new Error(`Unable to find site id: ${t} in siteids`));continue}let o=new c({id:e.id,baseSiteId:e.baseSiteId,origin:e.origin,hrefRegEx:e.hrefRegEx?new RegExp(e.hrefRegEx):void 0,siteCategories:e.siteCategories,originWhitelist:e.originWhitelist,additionalInfo:e.additionalInfo}),n=h.get(t);n?i.D.assignNotEmpty(n,[o],!0,!0):h[t]=o}else r.push(new TypeError("Invalid format of sites: "+l));let E=t.videosites;if(Array.isArray(E))for(let e of E){let t,o=e.id;if(!g.hasValue(o)){r.push(new Error(`Unable to find site id: ${o} in siteids`));continue}e.playerMetadataTemplate&&(t=S.get(e.playerMetadataTemplate));let n=new d({containerSelector:e.containerSelector,controlsSelector:e.controlsSelector,delegateIgnoreSelectors:e.delegateIgnoreSelectors,playButtonSelector:e.playButtonSelector,volumeButtonSelector:e.volumeButtonSelector,fullscreenButtonSelector:e.fullscreenButtonSelector,webFullscreenButtonSelector:e.webFullscreenButtonSelector});if(Array.isArray(e.delegateIgnoreEvents)){let t=new Map;for(let r of e.delegateIgnoreEvents)t.set(r.selector,r.eventTypes);n.delegateIgnoreMap=t}t&&(n=i.D.assignNotEmpty(t.copy(),[n],!0,!0));let s=w.get(o),a=new u({id:e.id,baseSiteId:e.baseSiteId,hrefRegEx:e.hrefRegEx?new RegExp(e.hrefRegEx):void 0,defaultPlayerMetadata:n,videoCategories:e.videoCategories,originWhitelist:e.originWhitelist});s?(i.D.assignNotEmpty(s.defaultPlayerMetadata,[n],!0,!0),i.D.assignNotEmpty(s,[a],!0,!0)):w[o]=a}else r.push(new TypeError("Invalid format of videosites: "+E));let b=t.videoportalsites;if(Array.isArray(b))for(let e of b){let t=e.id;if(!g.hasValue(t)){r.push(new Error(`Unable to find site id: ${t} in siteids`));continue}let o=y.get(t),n=new I({id:e.id,baseSiteId:e.baseSiteId,hrefRegEx:e.hrefRegEx?new RegExp(e.hrefRegEx):void 0,videoCategories:e.videoCategories,originWhitelist:e.originWhitelist,additionalInfo:e.additionalInfo});o?i.D.assignNotEmpty(o,[n],!0,!0):y[t]=n}else r.push(new TypeError("Invalid format of video portal sites: "+b));if(!(r.length>0))return Promise.resolve();Promise.reject(r)}}})(),o})()}));