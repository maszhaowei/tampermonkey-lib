!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tampermonkeylib=t():e.tampermonkeylib=t()}(self,(function(){return(()=>{"use strict";var e={903:(e,t,r)=>{r.d(t,{ApplyMethodSignature:()=>u,Couple:()=>a,KeyboardKeyCode:()=>s,LooseMap:()=>l,_isEqual:()=>o});class n{equals(e){return this===e}}function o(e,t){if(e instanceof Array){if(!(t instanceof Array)||e.length!=t.length)return!1;for(let r=0;r<e.length;r++)if(!o(e[r],t[r]))return!1;return!0}return!!Object.is(e,t)||(e instanceof n?e.equals(t):e===t)}class s{code;key;constructor(e,t){this.code=e,this.key=t}}class i extends n{#e;get size(){return this.#e.length}constructor(...e){super(),this.#e=e;for(let t=0;t<e.length;t++)Object.defineProperty(this,t,{configurable:!1,enumerable:!0,writable:!1,value:e[t]})}equals(e){if(!(e instanceof i))return!1;if(this.size!=e.size)return!1;for(let t=0;t<this.size;t++)if(!o(this[t],e[t]))return!1;return!0}}class a extends i{get 0(){return this[0]}get 1(){return this[1]}constructor(e,t){super(e,t)}equals(e){return e instanceof a&&super.equals(e)}}class l extends Map{constructor(){super()}get(e){let t,r=this.entries();for(;!(t=r.next()).done;){let[r,n]=t.value;if(o(r,e))return n}}set(e,t){let r,n=this.keys();for(;!(r=n.next()).done;)if(o(r.value,e))return super.set(r.value,t);super.set(e,t)}has(e){let t,r=this.keys();for(;!(t=r.next()).done;)if(o(t.value,e))return!0;return!1}delete(e){let t,r=this.keys();for(;!(t=r.next()).done;)if(o(t.value,e))return super.delete(t.value)}}class u{thisArg;fn;args;constructor(e,t,r){this.fn=e,this.thisArg=t,this.args=r||[]}}},882:(e,t,r)=>{r.d(t,{DEFAULT_LOG_GROUP:()=>n});const n="Common"},613:(e,t,r)=>{r.d(t,{ConsoleOutputLevel:()=>o});var n=r(903);r(725),new n.KeyboardKeyCode("Space"," "),new n.KeyboardKeyCode("Enter","Enter"),new n.KeyboardKeyCode("Escape","Escape"),new n.KeyboardKeyCode("KeyC","c"),new n.KeyboardKeyCode("KeyD","d"),new n.KeyboardKeyCode("KeyF","f"),new n.KeyboardKeyCode("KeyG","g"),new n.KeyboardKeyCode("KeyI","i"),new n.KeyboardKeyCode("KeyQ","q"),new n.KeyboardKeyCode("KeyR","r"),new n.KeyboardKeyCode("KeyS","s"),new n.KeyboardKeyCode("KeyV","v"),new n.KeyboardKeyCode("KeyW","w"),new n.KeyboardKeyCode("BracketLeft","["),new n.KeyboardKeyCode("BracketRight","]"),new n.KeyboardKeyCode("ArrowLeft","ArrowLeft"),new n.KeyboardKeyCode("ArrowRight","ArrowRight"),new n.KeyboardKeyCode("ArrowUp","ArrowUp"),new n.KeyboardKeyCode("ArrowDown","ArrowDown"),new n.KeyboardKeyCode("Digit0","0"),new n.KeyboardKeyCode("Digit1","1"),new n.KeyboardKeyCode("Digit2","2"),new n.KeyboardKeyCode("Digit3","3"),new n.KeyboardKeyCode("Numpad0","0"),new n.KeyboardKeyCode("Numpad1","1"),new n.KeyboardKeyCode("Numpad2","2"),new n.KeyboardKeyCode("Numpad3","3"),new n.KeyboardKeyCode("Numpad4","4"),new n.KeyboardKeyCode("Numpad5","5"),new n.KeyboardKeyCode("Numpad6","6"),new n.KeyboardKeyCode("Numpad7","7"),new n.KeyboardKeyCode("Numpad8","8"),new n.KeyboardKeyCode("Numpad9","9"),new n.KeyboardKeyCode("F8","F8");const o={DEBUG:"debug",INFO:"info",LOG:"log",WARN:"warn",ERROR:"error"}},232:(e,t,r)=>{r.d(t,{D:()=>l});var n=r(903),o=r(882),s=r(613);const i={零:0,一:1,二:2,两:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,百:100,千:1e3,万:1e4,亿:1e8};function a(e,t){t.forEach((t=>{if(!(t instanceof Map))throw new TypeError("Source is not a map");t.forEach(((t,r)=>e.set(r,t)))}))}let l={consoleOutput(e=o.DEFAULT_LOG_GROUP,t=s.ConsoleOutputLevel.DEBUG,...r){console.group(`[${e}]`);let n=[];for(let e=0;e<r.length;e++)n.push(l.isObject(r[e])?JSON.parse(JSON.stringify(r[e])):r[e]);switch(t){case s.ConsoleOutputLevel.DEBUG:console.debug(...n);break;case s.ConsoleOutputLevel.INFO:console.info(...n);break;case s.ConsoleOutputLevel.LOG:console.log(...n);break;case s.ConsoleOutputLevel.WARN:console.warn(...n);break;case s.ConsoleOutputLevel.ERROR:console.error(...n);break;default:console.debug(...n)}console.groupEnd()},get:function(e,t,r){return new Promise(((n,o)=>{let s=new XMLHttpRequest;if(s.responseType=r||"json",s.addEventListener("load",(function(){n(this.response||this.responseText)})),s.addEventListener("error",(function(){o(this)})),s.open("GET",e),t)for(let e in t)s.setRequestHeader(e,t[e]);s.send()}))},post:function(e,t={"Content-Type":"application/x-www-form-urlencoded"},r,n){return new Promise(((o,s)=>{let i=new XMLHttpRequest;i.responseType=n||"json",i.addEventListener("load",(function(){o(this.response||this.responseText)})),i.addEventListener("error",(function(){s(this)})),i.open("POST",e);for(let e in t)i.setRequestHeader(e,t[e]);i.send(r)}))},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let r=0,n=t.length;r<n;r++){let n=t[r].split("=");if(n[0]==e)return decodeURIComponent(n[1])}return""},getQueryParameter:function(e){for(let[t,r]of new URLSearchParams(window.location.search).entries())if(t===e)return r},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(i);for(const r of e)if(!t.includes(r))return!1;return!0},zh2Digits:function(e){if(l.isInteger(e))return parseInt(e);if(!this.isChineseDigits(e))return;let t=0,r=1;for(let n=e.length-1;n>=0;n--){let o=i[e[n]];o>=10&&0==n?o>r?(r=o,t+=o):r*=o:o>=10?o>r?r=o:r*=o:t+=r*o}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!l.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"],r=e.length;return 1==r?t[e]:2==r?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},getFirstTruthyMember:function(e,t){let r;return e.some((e=>(r=t[e],!!r)))?r:void 0},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)||e instanceof Object},isString:function(e){return e instanceof String||"string"==typeof e},isBlank:function(e){return l.isString(e)?""===e.trim():null==e},assignNotUndefined:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((r=>{let n=t[r];void 0!==n&&(e[r]=n)}))})),e},assignNotEmpty:function(e,t,r=!1,n=!1){if(!Array.isArray(t))throw new TypeError("Invalid sources");if(!l.isObject(e))throw new TypeError("Invalid target");return e instanceof Map&&a(e,t),t.forEach((t=>{if(!l.isObject(t))throw new TypeError("Invalid source");Object.keys(t).forEach((o=>{let s=t[o],i=e[o];if(null!=s&&!Object.is(NaN,s))if(Array.isArray(i)){if(!Array.isArray(s))throw new TypeError(`${o} of source is not an array`);n?s.forEach((e=>{i.includes(e)||i.push(e)})):e[o]=s}else if(i instanceof Map)r?a(i,[s]):e[o]=s;else if(l.isObject(i)){if(!l.isObject(s))throw new TypeError(`${o} of source is not an object`);r?l.assignNotEmpty(i,[s],r,n):e[o]=s}else e[o]=s}))})),e},isIterable:function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},isEqual:n._isEqual,formatDate:function(e,t="MM/dd/yyyy hh:mm:ss"){e instanceof Date||(e=new Date(e));var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[n]:("00"+r[n]).substr((""+r[n]).length)));return t}}},725:(e,t,r)=>{r.d(t,{EnumHelper:()=>o});var n=r(232);class o{static#t(e){if(!n.D.isObject(e))throw new TypeError("Parameter is not an enum")}static hasValue(e,t){this.#t(e);for(let r in e)if(n.D.isEqual(e[r],t))return!0;return!1}static toValueArray(e,t="string"){this.#t(e);let r=[];for(let n in e)typeof e[n]==t&&r.push(e[n]);return r}}},136:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".zw-hidden {\r\n    display: none !important\r\n}",""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var s={},i=[],a=0;a<e.length;a++){var l=e[a],u=n.base?l[0]+n.base:l[0],c=s[u]||0,d="".concat(u," ").concat(c);s[u]=c+1;var p=r(d),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:d,updater:o(f,n),references:1}),i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var s=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=r(s[i]);t[a].references--}for(var l=n(e,o),u=0;u<s.length;u++){var c=r(s[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}s=l}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,o=r.media,s=r.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},719:(e,t,r)=>{r.r(t),r.d(t,{scriptInfo:()=>n,scriptName:()=>o,FORCE_HIDDEN_CLASSNAME:()=>s});const n="undefined"==typeof GM_info?{name:"Tampermonkey"}:GM_info.script,o=n&&n.name,s="zw-hidden"},235:(e,t,r)=>{r.r(t),r.d(t,{MessageTypes:()=>n,EMOJIS:()=>o});const n={GENERAL:"general",SITE_INFO:"site_info",VIDEO_ATTR_INITIALIZED:"video_attr_initialized",VIDEO_READY:"video_ready",SWITCH_PLAYING_VIDEO:"switch_playing_video",REMOVE_IFRAME:"remove_iframe",READY_FOR_MESSAGE:"ready_for_message",REQUEST_WEBFULLSCREEN:"request_webfullscreen",EXIT_WEBFULLSCREEN:"exit_webfullscreen",KEYDOWN:"keydown",VIEWPORT_DIMENSION:"viewport_dimension",hasValue:function(e){if(e===n.hasValue)return!1;for(let t in n)if(this[t]===e)return!0;return!1}},o={angry:[",,Ծ‸Ծ,,","(╯‵□′)╯︵┻━┻"],happy:["=‿=✧","●ω●","(/ ▽ \\)","(=・ω・=)","(●'◡'●)ﾉ♥","<(▰˘◡˘▰)>","(⁄ ⁄•⁄ω⁄•⁄ ⁄)","(ง,,• ᴗ •,,)ง ✧",">ㅂ<ﾉ ☆"],shock:["Σ( ° △ °|||)︴","┌( ಠ_ಠ)┘","(ﾟДﾟ≡ﾟдﾟ)!?","∑(っ °Д °;)っ"],sad:["＞︿＜","＞△＜","●︿●","(´；ω；`)"],helpless:["◐▽◑","ʅ（´◔౪◔）ʃ","_(:3 」∠)_","_(┐「ε:)_","(°▽°)ﾉ","←◡←","_(•̀ᴗ•́ 」∠ ❀)_","_φ(･ω･` )"],custom:["(`･ω･´)","(^_-)-☆","༼ つ ◕_◕ ༽つ","(☞ﾟヮﾟ)☞","( ͡° ͜ʖ ͡°)","(っ˘ڡ˘ς)","(⌐■_■)","( ͡~ ͜ʖ ͡°)","(╯°□°）╯︵ ┻━┻","(͡•_ ͡• )"]}},70:(e,t,r)=>{r.d(t,{D:()=>a});var n=r(719),o=r(235),s=r(232),i=r(613);const a={debug:function(...e){s.D.consoleOutput(n.scriptName,i.ConsoleOutputLevel.DEBUG,...e)},error:function(...e){s.D.consoleOutput(n.scriptName,i.ConsoleOutputLevel.ERROR,...e)},gmGet:function(e,t,r,n=!1){return new Promise(((o,s)=>{GM_xmlhttpRequest({method:"GET",url:e,headers:t,nocache:n,responseType:r||"json",onload:e=>{o(e.response||e.responseText)},onerror:e=>{s(e)}})}))},gmPost:function(e,t,r,n){return t=t||{"Content-Type":"application/x-www-form-urlencoded"},s.D.isObject(r)&&(r=JSON.stringify(r)),new Promise(((o,s)=>{GM_xmlhttpRequest({method:"POST",url:e,headers:t,data:r,responseType:n||"json",onload:e=>{o("blob"===n?e:e.response||e.responseText)},onerror:e=>{s(e)}})}))},gmOptions:function(e,t,r){return new Promise(((n,o)=>{GM_xmlhttpRequest({method:"OPTIONS",url:e,headers:t,responseType:r||"json",onload:e=>{n(e.response||e.responseText)},onerror:e=>{o(e)}})}))},printReceiveMessage:function(e){a.debug(`>>> From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage:function(e,t){a.debug(`<<< To: ${e}, From: ${window.location.origin}, Message:`,t)},randomEmoji:{}};for(let e in o.EMOJIS)a.randomEmoji[e]=()=>o.EMOJIS[e][Math.floor(Math.random()*o.EMOJIS[e].length)]},378:(e,t,r)=>{r.r(t),r.d(t,{ObjectCacheHelper:()=>s,CssCacheHelper:()=>i,GMStorageHelper:()=>a,FutureHelper:()=>l});var n=r(903),o=r(70);class s{static#r=new n.LooseMap;static saveCallback(e,t,r,o){this.#r.set(new n.Couple(e,t),new n.ApplyMethodSignature(r,e,o))}static restoreCallback(e,t,r=!1){let o=new n.Couple(e,t),s=this.#r.get(o);return!!s&&(s.fn.apply(s.thisArg,s.args),r&&this.#r.delete(o),!0)}}class i{static#n=new n.LooseMap;static save(e,t){this.#n.set(new n.Couple(e,t),window.getComputedStyle(e).getPropertyValue(t))}static restore(e,t,r=!1){let o=new n.Couple(e,t);return!!this.#n.has(o)&&(e.style[t]=this.#n.get(o),r&&this.#n.delete(o),!0)}}class a{static#o(e){return e&&void 0!==e.expireTime}static#s(e){return e>0?Date.now()+24*e*3600*1e3:0}static getValue(e,t){let r=GM_getValue(e,t);return this.#o(r)?(this.setValue(e,r.value,r.expireDays),r.value):r}static setValue(e,t,r){let n=GM_getValue(e);r=r??n?.expireDays??30;let o=this.#s(r);GM_setValue(e,{value:t,expireDays:r,expireTime:o})}static clearExpiredValues(){let e=GM_listValues(),t=0,r=Date.now();e.forEach((e=>{let n=GM_getValue(e);if(!this.#o(n))return;let o=n.expireTime;0!=o&&r>o&&(GM_deleteValue(e),t++)})),o.D.debug(`Deleted ${t} expired records of total ${e.length} records from storage.`)}static clearAll(){let e=GM_listValues(),t=0;e.forEach((e=>{GM_deleteValue(e),t++})),o.D.debug(`Deleted ${t} records from storage.`)}}class l{static arrive(e){return new Promise((t=>{document.arrive(e,{existing:!0},(function(){t(this)}))}))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={id:n,exports:{}};return e[n](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{Const:()=>e,Enum:()=>t,Utils:()=>E,ui:()=>M,util:()=>O.D});var e=r(719),t=r(235),o=r(232),s=r(903),i=r(379),a=r.n(i),l=r(795),u=r.n(l),c=r(569),d=r.n(c),p=r(565),f=r.n(p),h=r(216),y=r.n(h),g=r(589),m=r.n(g),b=r(136),w={};w.styleTagTransform=m(),w.setAttributes=f(),w.insert=d().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=y(),a()(b.Z,w),b.Z&&b.Z.locals&&b.Z.locals;var E=r(378);function v(t,r=!1){if(!t)return;let n=window.getComputedStyle(t).display;E.ObjectCacheHelper.saveCallback(t,"display",(()=>{t.classList.remove(e.FORCE_HIDDEN_CLASSNAME),t.style.display=n})),t.style.display="none",r&&t.classList.add(e.FORCE_HIDDEN_CLASSNAME)}function C(e){E.ObjectCacheHelper.restoreCallback(e,"display")}function K(e,t,r,n){let s=e.thisArg;return new Promise(((i,a)=>{o.D.isString(s)?document.arrive(s,{existing:!0,onceOnly:!0},(function(){e.fn.apply(this,e.args),t.length>0?setTimeout((()=>{K(t.shift(),t,r,n).then((e=>i([this].concat(e))),(e=>a(e)))}),r):i([this])})):(e.fn.apply(s,e.args),t.length>0?setTimeout((()=>{K(t.shift(),t,r,n).then((e=>i([s].concat(e))),(e=>a(e)))}),r):i([s])),setTimeout((()=>{document.unbindArrive(s),a(new Error(s))}),(t.length+1)*n+t.length*r)}))}const M={asyncChainFn:function(e,t=0,r=2e3){if(Array.isArray(e)&&0!=e.length)return K(e.shift(),e,t,r)},asyncChainClick:function(e,t=0,r=2e3){if(!Array.isArray(e))throw new TypeError("contexts is not an array.");return M.asyncChainFn(e.map((e=>new s.ApplyMethodSignature(HTMLElement.prototype.click,e))),t,r)},hide:function(e,t=!1,r=document){o.D.isString(e)?r.arrive(e,{existing:!0},(function(){v(this,t)})):e instanceof HTMLElement&&v(e,t)},hideParent(e,t,r=!1,n=document){o.D.isString(e)?n.arrive(e,{existing:!0},(function(){M.hide(this.closest(t),r)})):e instanceof HTMLElement&&M.hide(e.closest(t),r)},collapse(e,t=20,r,n){E.CssCacheHelper.save(e,"minHeight"),E.CssCacheHelper.save(e,"height");let o=t+"px";e.style.minHeight=o,e.style.height=o;let s=e.children;for(let e=0;e<s.length;e++)v(s[e],!0);r&&r(),e.addEventListener("mouseenter",(()=>{E.CssCacheHelper.restore(e,"minHeight"),E.CssCacheHelper.restore(e,"height");let t=e.children;for(let e=0;e<t.length;e++)C(t[e]);n&&n()})),e.addEventListener("mouseleave",(()=>{e.style.minHeight=o,e.style.height=o;let t=e.children;for(let e=0;e<t.length;e++)v(t[e],!0);r&&r()}))}};var O=r(70)})(),n})()}));