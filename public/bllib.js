!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.bllib=t():e.bllib=t()}(self,(function(){return(()=>{"use strict";var e={903:(e,t,r)=>{r.d(t,{Couple:()=>a,CustomError:()=>l,KeyboardKeyCode:()=>i,_isEqual:()=>n});class o{equals(e){return this===e}}function n(e,t){if(e instanceof Array){if(!(t instanceof Array)||e.length!=t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}return!!Object.is(e,t)||(e instanceof o?e.equals(t):e===t)}class i{code;key;constructor(e,t){this.code=e,this.key=t}}class s extends o{#e;get size(){return this.#e.length}constructor(...e){super(),this.#e=e;for(let t=0;t<e.length;t++)Object.defineProperty(this,t,{configurable:!1,enumerable:!0,writable:!1,value:e[t]})}equals(e){if(!(e instanceof s))return!1;if(this.size!=e.size)return!1;for(let t=0;t<this.size;t++)if(!n(this[t],e[t]))return!1;return!0}}class a extends s{get 0(){return this[0]}get 1(){return this[1]}constructor(e,t){super(e,t)}equals(e){return e instanceof a&&super.equals(e)}}Map;class l extends Error{code;subErrors;constructor(e,t,r=[]){super(t),this.code=e,this.subErrors=r}appendSubError(e){this.subErrors.push(e)}static#t(e){let t={code:e.code,message:e.message,subErrors:[]};return e.subErrors.length>0&&(t.subErrors=e.subErrors.map((e=>this.#t(e)))),t}toPlainObject(){return l.#t(this)}}},882:(e,t,r)=>{r.d(t,{DEFAULT_LOG_GROUP:()=>o});const o="Common"},613:(e,t,r)=>{r.d(t,{ConsoleOutputLevel:()=>n,ErrorCode:()=>i});var o=r(903);new o.KeyboardKeyCode("Space"," "),new o.KeyboardKeyCode("Enter","Enter"),new o.KeyboardKeyCode("Escape","Escape"),new o.KeyboardKeyCode("KeyC","c"),new o.KeyboardKeyCode("KeyD","d"),new o.KeyboardKeyCode("KeyF","f"),new o.KeyboardKeyCode("KeyG","g"),new o.KeyboardKeyCode("KeyI","i"),new o.KeyboardKeyCode("KeyQ","q"),new o.KeyboardKeyCode("KeyR","r"),new o.KeyboardKeyCode("KeyS","s"),new o.KeyboardKeyCode("KeyV","v"),new o.KeyboardKeyCode("KeyW","w"),new o.KeyboardKeyCode("BracketLeft","["),new o.KeyboardKeyCode("BracketRight","]"),new o.KeyboardKeyCode("ArrowLeft","ArrowLeft"),new o.KeyboardKeyCode("ArrowRight","ArrowRight"),new o.KeyboardKeyCode("ArrowUp","ArrowUp"),new o.KeyboardKeyCode("ArrowDown","ArrowDown"),new o.KeyboardKeyCode("Digit0","0"),new o.KeyboardKeyCode("Digit1","1"),new o.KeyboardKeyCode("Digit2","2"),new o.KeyboardKeyCode("Digit3","3"),new o.KeyboardKeyCode("Numpad0","0"),new o.KeyboardKeyCode("Numpad1","1"),new o.KeyboardKeyCode("Numpad2","2"),new o.KeyboardKeyCode("Numpad3","3"),new o.KeyboardKeyCode("Numpad4","4"),new o.KeyboardKeyCode("Numpad5","5"),new o.KeyboardKeyCode("Numpad6","6"),new o.KeyboardKeyCode("Numpad7","7"),new o.KeyboardKeyCode("Numpad8","8"),new o.KeyboardKeyCode("Numpad9","9"),new o.KeyboardKeyCode("F8","F8");const n={DEBUG:"debug",INFO:"info",LOG:"log",WARN:"warn",ERROR:"error"},i={COMMON:-1e4,SUCCESS:0,EXCEED_MAX_RETRY:1e4}},232:(e,t,r)=>{r.d(t,{D:()=>l});var o=r(903),n=r(882),i=r(613);const s={零:0,一:1,二:2,两:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10,百:100,千:1e3,万:1e4,亿:1e8};function a(e,t){t.forEach((t=>{if(!(t instanceof Map))throw new TypeError("Source is not a map");t.forEach(((t,r)=>e.set(r,t)))}))}let l={consoleOutput(e=n.DEFAULT_LOG_GROUP,t=i.ConsoleOutputLevel.DEBUG,...r){console.group(`[${e}]`);let o=[];for(let e=0;e<r.length;e++)o.push(l.isObject(r[e])?JSON.parse(JSON.stringify(r[e])):r[e]);switch(t){case i.ConsoleOutputLevel.DEBUG:console.debug(...o);break;case i.ConsoleOutputLevel.INFO:console.info(...o);break;case i.ConsoleOutputLevel.LOG:console.log(...o);break;case i.ConsoleOutputLevel.WARN:console.warn(...o);break;case i.ConsoleOutputLevel.ERROR:console.error(...o);break;default:console.debug(...o)}console.groupEnd()},get:function(e,t,r){return new Promise(((o,n)=>{let i=new XMLHttpRequest;if(i.responseType=r||"json",i.addEventListener("load",(function(){o(this.response||this.responseText)})),i.addEventListener("error",(function(){n(this)})),i.open("GET",e),t)for(let e in t)i.setRequestHeader(e,t[e]);i.send()}))},post:function(e,t={"Content-Type":"application/x-www-form-urlencoded"},r,o){return new Promise(((n,i)=>{let s=new XMLHttpRequest;s.responseType=o||"json",s.addEventListener("load",(function(){n(this.response||this.responseText)})),s.addEventListener("error",(function(){i(this)})),s.open("POST",e);for(let e in t)s.setRequestHeader(e,t[e]);s.send(r)}))},getCookie:function(e){let t=document.cookie.replace(/\s/g,"").split(";");for(let r=0,o=t.length;r<o;r++){let o=t[r].split("=");if(o[0]==e)return decodeURIComponent(o[1])}return""},getQueryParameter:function(e){for(let[t,r]of new URLSearchParams(window.location.search).entries())if(t===e)return r},isInteger:function(e){if(isNaN(e))return!1;let t=parseFloat(e);return(0|t)===t},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},isZH:function(e){return/^[\u4e00-\u9fa5]+$/.test(e)},isChineseDigits:function(e){let t=Object.keys(s);for(const r of e)if(!t.includes(r))return!1;return!0},zh2Digits:function(e){if(l.isInteger(e))return parseInt(e);if(!this.isChineseDigits(e))return;let t=0,r=1;for(let o=e.length-1;o>=0;o--){let n=s[e[o]];n>=10&&0==o?n>r?(r=n,t+=n):r*=n:n>=10?n>r?r=n:r*=n:t+=r*n}return t},digits2ZH:function(e){if(this.isZH(e))return e;if(!l.isInteger(e))return;let t=["零","一","二","三","四","五","六","七","八","九","十","百","千","万","亿"],r=e.length;return 1==r?t[e]:2==r?10==e?t[e]:e>10&&e<20?"十"+t[e.charAt(1)]:t[e.charAt(0)]+"十"+t[e.charAt(1)].replace("零",""):void 0},isHttpSuccess:function(e){return!!e&&e>=200&&e<300},getFirstTruthyMember:function(e,t){let r;return e.some((e=>(r=t[e],!!r)))?r:void 0},isObject:function(e){return"[object Object]"===Object.prototype.toString.apply(e)||e instanceof Object},isString:function(e){return e instanceof String||"string"==typeof e},isBlank:function(e){return l.isString(e)?""===e.trim():null==e},assignNotUndefined:function(e,...t){return t.forEach((t=>{Object.keys(t).forEach((r=>{let o=t[r];void 0!==o&&(e[r]=o)}))})),e},assignNotEmpty:function(e,t,r=!1,o=!1){if(!Array.isArray(t))throw new TypeError("Invalid sources");if(!l.isObject(e))throw new TypeError("Invalid target");return e instanceof Map&&a(e,t),t.forEach((t=>{if(!l.isObject(t))throw new TypeError("Invalid source");Object.keys(t).forEach((n=>{let i=t[n],s=e[n];if(null!=i&&!Object.is(NaN,i))if(Array.isArray(s)){if(!Array.isArray(i))throw new TypeError(`${n} of source is not an array`);o?i.forEach((e=>{s.includes(e)||s.push(e)})):e[n]=i}else if(s instanceof Map)r?a(s,[i]):e[n]=i;else if(l.isObject(s)){if(!l.isObject(i))throw new TypeError(`${n} of source is not an object`);r?l.assignNotEmpty(s,[i],r,o):e[n]=i}else e[n]=i}))})),e},isIterable:function(e){return null!=e&&"function"==typeof e[Symbol.iterator]},isEqual:o._isEqual,formatDate:function(e,t="MM/dd/yyyy hh:mm:ss"){e instanceof Date||(e=new Date(e));var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return t},sleep:e=>new Promise((t=>setTimeout(t,e))),sleepUntil(e,t=window){let r=e-t.performance.now();return r>0?this.sleep(r):Promise.resolve()}}},719:(e,t,r)=>{r.d(t,{scriptName:()=>n});const o="undefined"==typeof GM_info?{name:"Tampermonkey"}:GM_info.script,n=o&&o.name},235:(e,t,r)=>{r.d(t,{EMOJIS:()=>o});const o={angry:[",,Ծ‸Ծ,,","(╯‵□′)╯︵┻━┻"],happy:["=‿=✧","●ω●","(/ ▽ \\)","(=・ω・=)","(●'◡'●)ﾉ♥","<(▰˘◡˘▰)>","(⁄ ⁄•⁄ω⁄•⁄ ⁄)","(ง,,• ᴗ •,,)ง ✧",">ㅂ<ﾉ ☆"],shock:["Σ( ° △ °|||)︴","┌( ಠ_ಠ)┘","(ﾟДﾟ≡ﾟдﾟ)!?","∑(っ °Д °;)っ"],sad:["＞︿＜","＞△＜","●︿●","(´；ω；`)"],helpless:["◐▽◑","ʅ（´◔౪◔）ʃ","_(:3 」∠)_","_(┐「ε:)_","(°▽°)ﾉ","←◡←","_(•̀ᴗ•́ 」∠ ❀)_","_φ(･ω･` )"],custom:["(`･ω･´)","(^_-)-☆","༼ つ ◕_◕ ༽つ","(☞ﾟヮﾟ)☞","( ͡° ͜ʖ ͡°)","(っ˘ڡ˘ς)","(⌐■_■)","( ͡~ ͜ʖ ͡°)","(╯°□°）╯︵ ┻━┻","(͡•_ ͡• )"]}},70:(e,t,r)=>{r.d(t,{D:()=>a});var o=r(719),n=r(235),i=r(232),s=r(613);const a={debug:function(...e){i.D.consoleOutput(o.scriptName,s.ConsoleOutputLevel.DEBUG,...e)},error:function(...e){i.D.consoleOutput(o.scriptName,s.ConsoleOutputLevel.ERROR,...e)},gmGet:function(e,t,r,o=!1){return new Promise(((n,i)=>{GM_xmlhttpRequest({method:"GET",url:e,headers:t,nocache:o,responseType:r||"json",onload:e=>{n(e.response||e.responseText)},onerror:e=>{i(e)}})}))},gmPost:function(e,t,r,o){return t=t||{"Content-Type":"application/x-www-form-urlencoded"},new Promise(((n,i)=>{GM_xmlhttpRequest({method:"POST",url:e,headers:t,data:r,responseType:o||"json",onload:e=>{n("blob"===o?e:e.response||e.responseText)},onerror:e=>{i(e)}})}))},gmOptions:function(e,t,r){return new Promise(((o,n)=>{GM_xmlhttpRequest({method:"OPTIONS",url:e,headers:t,responseType:r||"json",onload:e=>{o(e.response||e.responseText)},onerror:e=>{n(e)}})}))},printReceiveMessage:function(e){a.debug(`>>> From: ${e.origin}, To: ${window.location.origin}, Message:`,e.data)},printSendMessage:function(e,t){a.debug(`<<< To: ${e}, From: ${window.location.origin}, Message:`,t)},randomEmoji:{}};for(let e in n.EMOJIS)a.randomEmoji[e]=()=>n.EMOJIS[e][Math.floor(Math.random()*n.EMOJIS[e].length)]}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{r.r(o),r.d(o,{Utils:()=>e,util:()=>n});var e={};r.r(e),r.d(e,{BilibiliApiRequest:()=>d,BilibiliLiveApiRequest:()=>p});var t=r(232);const n={getBilibiliToken:function(){return t.D.getCookie("bili_jct")}};var i=r(903),s=r(613),a=r(70);async function l(e){const t=await e;if(0!==t.code)throw new i.CustomError(t.code,t.message);return t.data}class d{static#r(e,t){return t&&(e+="?"+t.toString()),a.D.gmGet(e)}static#o(e,t,r){return a.D.gmPost(e,t,r)}static getNotice(e){return l(this.#r(`https://api.bilibili.com/x/space/notice?mid=${e}&jsonp=jsonp`))}static getUserInfo(e){return l(this.#r(`https://api.bilibili.com/x/space/acc/info?mid=${e}&jsonp=jsonp`))}static getFollowings(e,t,r=50){return l(this.#r(`https://api.bilibili.com/x/relation/followings?vmid=${e}&pn=${t}&ps=${r}`))}static getNav(){return l(this.#r("https://api.bilibili.com/x/web-interface/nav"))}}class p{static#r(e,t){return t&&(e+="?"+t.toString()),a.D.gmGet(e)}static#o(e,t,r){return a.D.gmPost(e,t,r)}static getGiftConfig(e,t,r){let o=new URLSearchParams;return o.append("platform","pc"),o.append("room_id",e),o.append("area_parent_id",t),o.append("area_id",r),l(this.#r("https://api.live.bilibili.com/xlive/web-room/v1/giftPanel/giftConfig",o))}static getGiftBagList(e){let t=new URLSearchParams;return t.append("t",(new Date).getTime()),t.append("room_id",e),l(this.#r("https://api.live.bilibili.com/xlive/web-room/v1/gift/bag_list",t))}static sendBag(e,t,r,o,i,s,a){let d=n.getBilibiliToken(),p=new URLSearchParams;return p.append("uid",e),p.append("gift_id",t),p.append("ruid",r),p.append("send_ruid",0),p.append("gift_num",o),p.append("bag_id",i),p.append("platform","pc"),p.append("biz_code","Live"),p.append("biz_id",s),p.append("rnd",a),p.append("storm_beat_id",0),p.append("metadata",""),p.append("price",0),p.append("csrf_token",d),p.append("csrf",d),p.append("visit_id",""),l(this.#o("https://api.live.bilibili.com/xlive/revenue/v1/gift/sendBag",void 0,p.toString()))}static getWearedMedal(){return l(this.#r("https://api.live.bilibili.com/live_user/v1/UserInfo/get_weared_medal"))}static getMedalListInRoom(){return l(this.#r("https://api.live.bilibili.com/fans_medal/v1/FansMedal/get_list_in_room"))}static async#n(e){let t=1,r=0,o=[],n=0;do{let i=await l(this.#r(`https://api.live.bilibili.com/xlive/app-ucenter/v1/user/GetMyMedals?page=${t}&page_size=10&retry=${e}`));n=i.count,Array.isArray(i.items)&&i.items.forEach((e=>{let t=e;t.short_id=e.roomid,delete e.roomid,o.push(t)})),r=i.page_info.total_page,t++}while(t<=r);return new i.Couple(o,n)}static async getMedalCenterList(){let e=[],t=0,r=0,o=[];for(;r<=3;){let n=await this.#n(r);t=n[1];for(let r of n[0])if(!o.includes(r.target_id)&&(e.push(r),o.push(r.target_id),e.length==t))return e;r++}throw new i.CustomError(s.ErrorCode.EXCEED_MAX_RETRY,`超过最大重试次数，已获取${e.length}枚勋章，实际拥有${t}枚勋章`)}static async getExtendedMedalList(){let e=await this.getMedalCenterList(),t=[],r=[];return e.forEach((e=>{let o=e;t.push(o),e.short_id&&r.push(this.getBasicRoomInfo(e.short_id).then((e=>{for(let t in e.by_room_ids)return void(o.roomid=e.by_room_ids[t].room_id)})))})),Promise.all(r).then((()=>t))}static wearMedal(e){if(!e)throw new i.CustomError(s.ErrorCode.COMMON,"Invalid medalId: "+e);let t=n.getBilibiliToken();if(!t)throw new i.CustomError(s.ErrorCode.COMMON,"Failed to get bilibili token");let r=new URLSearchParams;return r.append("medal_id",e),r.append("csrf_token",t),r.append("csrf",t),l(this.#o("https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear",void 0,r.toString()))}static getMedalExpectation(e,t,r,o){let n=new URLSearchParams;return n.append("target_id",e),n.append("price",r),n.append("coin_type",o),n.append("gift_id",t),n.append("platform","pc"),l(this.#r("https://api.live.bilibili.com/xlive/app-ucenter/v1/fansMedal/room",n.toString()))}static getBasicRoomInfo(e){return l(this.#r(`https://api.live.bilibili.com/xlive/web-room/v1/index/getRoomBaseInfo?room_ids=${e}&req_biz=web_room_componet`))}static getInfoByRoom(e){return l(this.#r(`https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByUser?room_id=${e}`))}static sendDanmu(e,t,r){let o=n.getBilibiliToken();if(!o)throw new i.CustomError(s.ErrorCode.COMMON,"Failed to get bilibili token");let a={bubble:0,msg:e,color:5566168,mode:1,fontsize:25,rnd:t,roomid:r,csrf:o,csrf_token:o},d=new FormData;return Object.keys(a).forEach((e=>d.append(e,a[e]))),l(this.#o("https://api.live.bilibili.com/msg/send",{},d))}}})(),o})()}));