/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tampermonkeyLib"] = factory();
	else
		root["tampermonkeyLib"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/const.js":
/*!**********************!*\
  !*** ./app/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KeyboardKeyCode\": () => (/* binding */ KeyboardKeyCode),\n/* harmony export */   \"VideoCategories\": () => (/* binding */ VideoCategories),\n/* harmony export */   \"SiteID\": () => (/* binding */ SiteID),\n/* harmony export */   \"SiteInfos\": () => (/* binding */ SiteInfos),\n/* harmony export */   \"MessageType\": () => (/* binding */ MessageType),\n/* harmony export */   \"CallbackType\": () => (/* binding */ CallbackType)\n/* harmony export */ });\n\r\n/**\r\n * @enum {object}\r\n */\r\nconst KeyboardKeyCode = {\r\n    Space: { code: 'Space', key: ' ' },\r\n    Enter: { code: 'Enter', key: 'Enter' },\r\n    Escape: { code: 'Escape', key: 'Escape' },\r\n    KeyD: { code: 'KeyD', key: 'd' },\r\n    KeyF: { code: 'KeyF', key: 'f' },\r\n    KeyG: { code: 'KeyG', key: 'g' },\r\n    KeyI: { code: 'KeyI', key: 'i' },\r\n    KeyQ: { code: 'KeyQ', key: 'q' },\r\n    KeyR: { code: 'KeyR', key: 'r' },\r\n    KeyS: { code: 'KeyS', key: 's' },\r\n    KeyV: { code: 'KeyV', key: 'v' },\r\n    KeyW: { code: 'KeyW', key: 'w' },\r\n    BracketLeft: { code: 'BracketLeft', key: '[' },\r\n    BracketRight: { code: 'BracketRight', key: ']' },\r\n    ArrowLeft: { code: 'ArrowLeft', key: 'ArrowLeft' },\r\n    ArrowRight: { code: 'ArrowRight', key: 'ArrowRight' },\r\n    ArrowUp: { code: 'ArrowUp', key: 'ArrowUp' },\r\n    ArrowDown: { code: 'ArrowDown', key: 'ArrowDown' },\r\n    Numpad0: { code: 'Numpad0', key: '0' },\r\n    Numpad1: { code: 'Numpad1', key: '1' },\r\n    Numpad2: { code: 'Numpad2', key: '2' },\r\n    Numpad3: { code: 'Numpad3', key: '3' },\r\n    Numpad4: { code: 'Numpad4', key: '4' },\r\n    Numpad5: { code: 'Numpad5', key: '5' },\r\n    Numpad6: { code: 'Numpad6', key: '6' },\r\n    Numpad7: { code: 'Numpad7', key: '7' },\r\n    Numpad8: { code: 'Numpad8', key: '8' },\r\n    Numpad9: { code: 'Numpad9', key: '9' }\r\n};\r\n/**\r\n * @enum {object}\r\n */\r\n const VideoCategories = {\r\n    TV_SERIES: {\r\n        categoryName: \"TV Series\",\r\n        titleRegEx: /([\\u4e00-\\u9fa5\\w]+)第(.+)季.*第(.+)集/\r\n    },\r\n    MOVIE: {\r\n        categoryName: \"Movie\"\r\n    },\r\n    AV: {\r\n        categoryName: \"AV\",\r\n        titleRegEx: /([a-zA-Z]+-\\d+)(-(\\w+))?/\r\n    },\r\n    VIDEO_SHARING: {\r\n        categoryName: \"Video Sharing\"\r\n    },\r\n    GAME: {\r\n        categoryName: \"Game\"\r\n    }\r\n};\r\n/**\r\n * @enum {string}\r\n */\r\n const SiteID = {\r\n    QINGBEIBAN: 'QINGBEIBAN',\r\n    QXWK: 'QXWK',\r\n    JABLE: 'JABLE',\r\n    MM9842: 'MM9842',\r\n    BUYCAR5: 'BUYCAR5',\r\n    JX444662: 'JX444662',\r\n    AVGLE: 'AVGLE',\r\n    AVGLE_EMBED: 'AVGLE_EMBED',\r\n    DIOUS: 'DIOUS',\r\n    YOUTUBE_EMBED: 'YOUTUBE_EMBED',\r\n    BILIBILI: 'BILIBILI',\r\n    BILIBILI_BANGUMI: 'BILIBILI_BANGUMI'\r\n};\r\n/**\r\n * containerSelector必须是video和controlsSelector的祖先元素,controlsSelector的层级必须比video高\r\n * @enum {object}\r\n */\r\n const SiteInfos = {\r\n    QINGBEIBAN: {\r\n        origin: \"https://www.qingbeiban.com\",\r\n        id: SiteID.QINGBEIBAN,\r\n        hrefRegEx: /^https:\\/\\/www.qingbeiban.com/,\r\n        videoCategory: VideoCategories.TV_SERIES,\r\n        containerSelector: \"div#dplayer,div#mvideo\",\r\n        topOriginWhitelist: [\"https://www.mingtian6.com\"]\r\n    },\r\n    QXWK: {\r\n        origin: \"https://code.qxwk.net\",\r\n        id: SiteID.QXWK,\r\n        hrefRegEx: /^https:\\/\\/code.qxwk.net/,\r\n        videoCategory: VideoCategories.TV_SERIES,\r\n        containerSelector: \"div#dplayer,div#mvideo\",\r\n        topOriginWhitelist: [\"https://m.wukongmeiju.com\"]\r\n    },\r\n    JABLE: {\r\n        origin: \"https://jable.tv\",\r\n        id: SiteID.JABLE,\r\n        hrefRegEx: /^https:\\/\\/jable.tv/,\r\n        videoCategory: VideoCategories.AV,\r\n        containerSelector: \"div.plyr.plyr--video\",\r\n        controlsSelector: \"div.plyr__controls\",\r\n        topOriginWhitelist: [\"https://jable.tv\"]\r\n    },\r\n    MM9842: {\r\n        origin: \"https://mm9842.com\",\r\n        id: SiteID.MM9842,\r\n        hrefRegEx: /^https:\\/\\/mm9842.com/,\r\n        videoCategory: VideoCategories.AV,\r\n        containerSelector: \"div.jw-wrapper\",\r\n        controlsSelector: \"div.jw-controls\",\r\n        topOriginWhitelist: [\"https://7mmtv.tv\"]\r\n    },\r\n    BUYCAR5: {\r\n        origin: \"https://vod3.buycar5.cn\",\r\n        id: SiteID.BUYCAR5,\r\n        hrefRegEx: /^https:\\/\\/vod\\d+\\.buycar5\\.cn/,\r\n        videoCategory: VideoCategories.TV_SERIES,\r\n        containerSelector: \"div#dplayer,div#mvideo\",\r\n        topOriginWhitelist: [\"https://www.meijuttb.com\", 'https://www.meijubs.com']\r\n    },\r\n    JX444662: {\r\n        origin: \"https://jx.444662.cn\",\r\n        id: SiteID.JX444662,\r\n        hrefRegEx: /^https:\\/\\/jx.444662.cn/,\r\n        videoCategory: VideoCategories.TV_SERIES,\r\n        containerSelector: \"div#playerCnt\",\r\n        controlsSelector: \"div.prism-controlbar\",\r\n        topOriginWhitelist: [\"https://www.meijuttb.com\", 'https://www.meijubs.com']\r\n    },\r\n    AVGLE: {\r\n        origin: \"https://avgle.com\",\r\n        id: SiteID.AVGLE,\r\n        hrefRegEx: /^https:\\/\\/avgle\\.com\\/video\\/\\w+/,\r\n        videoCategory: VideoCategories.AV,\r\n        containerSelector: \"div#video-player\",\r\n        controlsSelector: \"div.vjs-control-bar\",\r\n        topOriginWhitelist: [\"https://7mmtv.tv\"]\r\n    },\r\n    AVGLE_EMBED: {\r\n        origin: \"https://avgle.com\",\r\n        id: SiteID.AVGLE_EMBED,\r\n        hrefRegEx: /^https:\\/\\/avgle\\.com\\/embed\\/\\w+$/,\r\n        videoCategory: VideoCategories.AV,\r\n        containerSelector: \"div#video-player\",\r\n        controlsSelector: \"div.vjs-control-bar\",\r\n        topOriginWhitelist: [\"https://7mmtv.tv\"]\r\n    },\r\n    DIOUS: {\r\n        origin: \"https://v7.dious.cc\",\r\n        id: SiteID.DIOUS,\r\n        hrefRegEx: /^https:\\/\\/v7.dious.cc/,\r\n        videoCategory: VideoCategories.TV_SERIES,\r\n        containerSelector: \"div#mvideo\",\r\n        controlsSelector: '.dplayer-controller',\r\n        topOriginWhitelist: [\"https://www.meijuttb.com\", 'https://www.meijubs.com']\r\n    },\r\n    YOUTUBE_EMBED: {\r\n        origin: \"https://www.youtube.com\",\r\n        id: SiteID.YOUTUBE_EMBED,\r\n        hrefRegEx: /^https:\\/\\/www.youtube.com\\/embed\\/[\\w-]+$/,\r\n        videoCategory: VideoCategories.VIDEO_SHARING,\r\n        containerSelector: \"div#player\",\r\n        controlsSelector: '.ytp-chrome-bottom',\r\n        pauseOverlaySelector: '.ytp-pause-overlay',\r\n        topOriginWhitelist: ['https://www.nexusmods.com']\r\n    },\r\n    BILIBILI: {\r\n        origin: \"https://www.bilibili.com\",\r\n        id: SiteID.BILIBILI,\r\n        hrefRegEx: /^https:\\/\\/www\\.bilibili\\.com\\/video\\/.+/,\r\n        videoCategory: VideoCategories.VIDEO_SHARING,\r\n        containerSelector: \"div.bilibili-player-video-wrap\",\r\n        controlsSelector: '.bilibili-player-video-control-wrap'\r\n        // eventDelegateSelector: \"div.bilibili-player-dm-tip-wrap\"\r\n    },\r\n    BILIBILI_BANGUMI: {\r\n        origin: \"https://www.bilibili.com\",\r\n        id: SiteID.BILIBILI_BANGUMI,\r\n        hrefRegEx: /^https:\\/\\/www\\.bilibili\\.com\\/bangumi\\/play\\/.+/,\r\n        videoCategory: VideoCategories.VIDEO_SHARING,\r\n        containerSelector: \"div.bpx-player-video-area\",\r\n        controlsSelector: '.bpx-player-control-wrap'\r\n    }\r\n};\r\n/**\r\n * @enum {string}\r\n */\r\n const MessageType= {\r\n    SITE_INFO: 'site_info',\r\n    VIDEO_ATTR_INITIALIZED: 'video__attr_initialized',\r\n    VIDEO_READY: 'video_ready',\r\n    SWITCH_PLAYING_VIDEO: 'switch_playing_video',\r\n    READY_FOR_MESSAGE: 'ready_for_message',\r\n    REQUEST_WEBFULLSCREEN: 'request_webfullscreen',\r\n    EXIT_WEBFULLSCREEN: 'exit_webfullscreen',\r\n    KEYDOWN: 'keydown',\r\n    EVENT_DELEGATE_SELECTOR: 'event+delegate_selector'\r\n};\r\n/**\r\n * @readonly\r\n * @enum {string}\r\n */\r\n const CallbackType= {\r\n    VIDEO_ATTR_INITIALIZED: 'video__attr_initialized',\r\n    VIDEO_READY: 'video_ready',\r\n    PLAY: 'play',\r\n    KEYDOWN: 'keydown',\r\n    REQUEST_WEBFULLSCREEN: 'request_webfullscreen',\r\n    EXIT_WEBFULLSCREEN: 'exit_webfullscreen',\r\n    EVENT_DELEGATE_SELECTOR: 'event+delegate_selector'\r\n}\r\n\n\n//# sourceURL=webpack://tampermonkeyLib/./app/const.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"util\": () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_1__.util),\n/* harmony export */   \"Const\": () => (/* binding */ Const)\n/* harmony export */ });\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ \"./app/const.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./app/util.js\");\n\r\n\r\nconst Const = { KeyboardKeyCode: _const_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardKeyCode, VideoCategories: _const_js__WEBPACK_IMPORTED_MODULE_0__.VideoCategories, SiteID: _const_js__WEBPACK_IMPORTED_MODULE_0__.SiteID, SiteInfos: _const_js__WEBPACK_IMPORTED_MODULE_0__.SiteInfos, MessageType: _const_js__WEBPACK_IMPORTED_MODULE_0__.MessageType, CallbackType: _const_js__WEBPACK_IMPORTED_MODULE_0__.CallbackType };\n\n//# sourceURL=webpack://tampermonkeyLib/./app/index.js?");

/***/ }),

/***/ "./app/util.js":
/*!*********************!*\
  !*** ./app/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"util\": () => (/* binding */ util)\n/* harmony export */ });\nlet util = {\r\n    debug(grouName, ...c) {\r\n        console.group(`[${grouName}]`);\r\n        console.debug(...c);\r\n        console.groupEnd();\r\n    },\r\n    /**\r\n     * \r\n     * @param {MessageEvent} event \r\n     */\r\n    printReceiveMessage(event) {\r\n        util.debug(`From: ${event.origin}, To: ${window.location.origin}, Message:`, event.data);\r\n    },\r\n    printSendMessage(targetOrigin, message) {\r\n        util.debug(`To: ${targetOrigin}, From: ${window.location.origin}, Message:`, message);\r\n    },\r\n    getQueryVariable(variable)\r\n    {\r\n        let query = window.location.search.substring(1);\r\n        let vars = query.split(\"&\");\r\n        for (let i=0;i<vars.length;i++) {\r\n            let pair = vars[i].split(\"=\");\r\n            if(pair[0] == variable){return pair[1];}\r\n        }\r\n        return(false);\r\n    },\r\n    /**\r\n     * \r\n     * @param {object} context \r\n     * @param {Function} fn \r\n     * @param {Array} args \r\n     * @param {number} delay\r\n     * @returns \r\n     */\r\n    asyncDelayedFn(context, fn, args, delay=0) {\r\n        return new Promise((resolve, reject)=>setTimeout(()=>{\r\n            if(args === undefined) resolve(fn.apply(context));\r\n            else if(Array.isArray(args)) resolve(fn.apply(context, args));\r\n            else reject(args);\r\n            resolve(true);\r\n        }, delay));\r\n    },\r\n    /**\r\n     * \r\n     * @param {string} s \r\n     */\r\n    isInteger(s) {\r\n        if(isNaN(s)) return false;\r\n        let value = parseFloat(s);\r\n        return (value|0)===value;\r\n    },\r\n    /**\r\n     * \r\n     * @param {string} s \r\n     * @returns \r\n     */\r\n    isNumeric(s) {\r\n        return !isNaN(parseFloat(s)) && isFinite(s);\r\n    },\r\n    isZH(str) {\r\n        return /^[\\u4e00-\\u9fa5]+$/.test(str);\r\n    },\r\n    isChineseDigits(str) {\r\n        let cDigits = Object.keys(this._common_used_numerals);\r\n        for(const s of str) {\r\n            if(!cDigits.includes(s)) return false;\r\n        }\r\n        return true;\r\n    },\r\n    zh2Digits(zhstr) {\r\n        if(util.isInteger(zhstr)) return zhstr;\r\n        else if(!this.isChineseDigits(zhstr)) return;\r\n\r\n        let total = 0, weight = 1;\r\n        for(let i=zhstr.length-1;i>=0;i--) {\r\n            let val = this._common_used_numerals[zhstr[i]];\r\n            if(val >= 10 && i == 0) {\r\n                if(val > weight) {\r\n                    weight = val;\r\n                    total += val;\r\n                }\r\n                else weight *= val;\r\n            }\r\n            else if(val >= 10) {\r\n                if(val > weight) weight = val;\r\n                else weight *= val;\r\n            }\r\n            else total += weight * val;\r\n        }\r\n        return total;\r\n    },\r\n    digits2ZH(digits) {\r\n        if(this.isZH(digits)) return digits;\r\n        else if(!util.isInteger(digits)) return;\r\n\r\n        let zhNumber = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '亿'];\r\n        var length = digits.length;\r\n        if (length == 1){\r\n            return zhNumber[digits];\r\n        }else if(length == 2){\r\n            if (digits == 10) {\r\n                return zhNumber[digits];\r\n            } else if (digits > 10 && digits < 20) {\r\n                return '十' + zhNumber[digits.charAt(1)];\r\n            } else {\r\n                return zhNumber[digits.charAt(0)] + '十' + zhNumber[digits.charAt(1)].replace('零', '');\r\n            }\r\n        }\r\n    }\r\n};\n\n//# sourceURL=webpack://tampermonkeyLib/./app/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});