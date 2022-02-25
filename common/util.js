import { _isEqual } from "./class";
import { DEFAULT_LOG_GROUP } from "./const";
import { ConsoleOutputLevel } from "./enum";
const _common_used_numerals = { '零': 0, '一': 1, '二': 2, '两': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '十': 10, '百': 100, '千': 1000, '万': 10000, '亿': 100000000 };
/**
 * 
 * @param {Map} targetValue 
 * @param {Map[]} sourceValues 
 */
function mergeMap(targetValue, sourceValues) {
    sourceValues.forEach((sourceValue) => {
        if (!(sourceValue instanceof Map)) throw new TypeError(`Source is not a map`);
        sourceValue.forEach((value, key) => targetValue.set(key, value));
    });
}
export let util = {
    /**
     * Output message to web console in gourp {@link grouName}.
     * @param {string} grouName - Default to {@link DEFAULT_LOG_GROUP}.
     * @param {string} outputLevel - Default to {@link ConsoleOutputLevel.DEBUG}.
     * @param  {...any} objs - Multiple objects to output or msg [, subst1, ..., substN] using string substitutions. @see https://developer.mozilla.org/en-US/docs/Web/API/console#outputting_text_to_the_console
     */
    consoleOutput(grouName = DEFAULT_LOG_GROUP, outputLevel = ConsoleOutputLevel.DEBUG, ...objs) {
        console.group(`[${grouName}]`);
        let arr = [];
        for (let i = 0; i < objs.length; i++) {
            let obj = objs[i];
            // /** Prevent browsers to output live value of objs. {@link https://developer.mozilla.org/en-US/docs/Web/API/console/log#logging_objects} */
            // arr.push(util.isObject(obj) ? JSON.parse(JSON.stringify(obj)) : obj);
            arr.push(obj.toPlainObject ? obj.toPlainObject() : obj);
        }
        switch (outputLevel) {
            case ConsoleOutputLevel.DEBUG:
                console.debug(...arr);
                break;
            case ConsoleOutputLevel.INFO:
                console.info(...arr);
                break;
            case ConsoleOutputLevel.LOG:
                console.log(...arr);
                break;
            case ConsoleOutputLevel.WARN:
                console.warn(...arr);
                break;
            case ConsoleOutputLevel.ERROR:
                console.error(...arr);
                break;
            default:
                console.debug(...arr);
                break;
        }
        console.groupEnd();
    },
    /**
     * 
     * @param {string|URL} url 
     * @param {Object.<string,string>} [headers] 
     * @param {string} [responseType] - Default to "json".
     * @returns 
     */
    get: function (url, headers, responseType) {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            req.responseType = responseType || 'json';
            req.addEventListener("load", function () {
                resolve(this.response || this.responseText);
            });
            req.addEventListener("error", function () {
                reject(this);
            });
            req.open("GET", url);
            if (headers) {
                for (let i in headers) req.setRequestHeader(i, headers[i]);
            }
            req.send();
        });
    },
    /**
     * 
     * @param {string|URL} url 
     * @param {Object.<string,string>} [headers] - Default to { "Content-Type": "application/x-www-form-urlencoded" }.
     * @param {Document | XMLHttpRequestBodyInit} [data] 
     * @param {string} [responseType] - Default to "json".
     * @returns 
     */
    post: function (url, headers = { "Content-Type": "application/x-www-form-urlencoded" }, data, responseType) {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            req.responseType = responseType || 'json';
            req.addEventListener("load", function () {
                resolve(this.response || this.responseText);
            });
            req.addEventListener("error", function () {
                reject(this);
            });
            req.open("POST", url);
            for (let i in headers) req.setRequestHeader(i, headers[i]);
            req.send(data);
        });
    },
    /**
     * 
     * @param {string} name 
     * @returns 
     */
    getCookie: function (name) {
        let arr = document.cookie.replace(/\s/g, "").split(';');
        for (let i = 0, l = arr.length; i < l; i++) {
            let tempArr = arr[i].split('=');
            if (tempArr[0] == name) {
                return decodeURIComponent(tempArr[1]);
            }
        }
        return '';
    },
    /**
     * 
     * @param {string} key 
     * @returns 
     */
    getQueryParameter: function (key) {
        for (let [k, v] of new URLSearchParams(window.location.search).entries()) {
            if (k === key) return v;
        }
    },
    /**
     * 
     * @param {string} s 
     * @returns 
     */
    isInteger: function (s) {
        if (isNaN(s)) return false;
        let value = parseFloat(s);
        return (value | 0) === value;
    },
    /**
     * 
     * @param {string} s 
     * @returns 
     */
    isNumeric: function (s) {
        return !isNaN(parseFloat(s)) && isFinite(s);
    },
    /**
     * 
     * @param {string} str 
     * @returns 
     */
    isZH: function (str) {
        return /^[\u4e00-\u9fa5]+$/.test(str);
    },
    /**
     * 
     * @param {string} str 
     * @returns 
     */
    isChineseDigits: function (str) {
        let cDigits = Object.keys(_common_used_numerals);
        for (const s of str) {
            if (!cDigits.includes(s)) return false;
        }
        return true;
    },
    /**
     * 
     * @param {string} zhstr 
     * @returns {number|undefined}
     */
    zh2Digits: function (zhstr) {
        if (util.isInteger(zhstr)) return parseInt(zhstr);
        else if (!this.isChineseDigits(zhstr)) return;

        let total = 0, weight = 1;
        for (let i = zhstr.length - 1; i >= 0; i--) {
            let val = _common_used_numerals[zhstr[i]];
            if (val >= 10 && i == 0) {
                if (val > weight) {
                    weight = val;
                    total += val;
                }
                else weight *= val;
            }
            else if (val >= 10) {
                if (val > weight) weight = val;
                else weight *= val;
            }
            else total += weight * val;
        }
        return total;
    },
    /**
     * 
     * @param {string} digits 
     * @returns {(string|undefined)}
     */
    digits2ZH: function (digits) {
        if (this.isZH(digits)) return digits;
        else if (!util.isInteger(digits)) return;

        let zhNumber = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '亿'];
        let length = digits.length;
        if (length == 1) {
            return zhNumber[digits];
        } else if (length == 2) {
            if (digits == 10) {
                return zhNumber[digits];
            } else if (digits > 10 && digits < 20) {
                return '十' + zhNumber[digits.charAt(1)];
            } else {
                return zhNumber[digits.charAt(0)] + '十' + zhNumber[digits.charAt(1)].replace('零', '');
            }
        }
    },
    /**
     * 
     * @param {number} httpcode 
     * @returns 
     */
    isHttpSuccess: function (httpcode) {
        return !!httpcode && httpcode >= 200 && httpcode < 300;
    },
    /**
     * Return the first member of an object that is truthy.
     * @param {string[]} members 
     * @param {object} obj
     * @returns {*} 
     */
    getFirstTruthyMember: function (members, obj) {
        let value;
        let someResult = members.some((member) => {
            value = obj[member];
            return !!value;
        })
        return someResult ? value : undefined;
    },
    /**
     * Check if parameter is an instance of Object or an object literal.
     * @param {*} obj 
     * @returns 
     */
    isObject: function (obj) {
        return Object.prototype.toString.apply(obj) === "[object Object]" || obj instanceof Object;
    },
    isString: function (str) {
        return str instanceof String || typeof str === 'string';
    },
    /**
     * 
     * @param {string} str 
     * @returns 
     */
    isBlank: function (str) {
        if (util.isString(str)) {
            return str.trim() === '';
        }
        return str === undefined || str === null;
    },
    /**
     * Copies all values of enumerable own properties that are not undefined from one or more source objects to a target object.
     * @param {*} target 
     * @param  {...any} sources 
     * @returns The modified target object.
     */
    assignNotUndefined: function (target, ...sources) {
        sources.forEach((source) => {
            Object.keys(source).forEach((key) => {
                let value = source[key];
                if (value !== undefined) target[key] = value;
            })
        });
        return target;
    },
    /**
     * Copies all values of enumerable own properties that are not null, undefined, NaN from one or more source objects to a target object.
     * @param {object} target 
     * @param  {object[]} sources 
     * @param {boolean} [deep] - Default to false.
     * @param {boolean} [mergeArray] - Default to false.
     * @returns The target object.
     * @throws
     */
    assignNotEmpty: function (target, sources, deep = false, mergeArray = false) {
        if (!Array.isArray(sources)) throw new TypeError("Invalid sources");
        if (!util.isObject(target)) throw new TypeError("Invalid target");
        if (target instanceof Map) mergeMap(target, sources);
        sources.forEach((source) => {
            if (!util.isObject(source)) throw new TypeError("Invalid source");
            Object.keys(source).forEach((key) => {
                let sourceValue = source[key];
                let targetValue = target[key];
                if (sourceValue === undefined || sourceValue === null || Object.is(NaN, sourceValue)) return;
                else if (Array.isArray(targetValue)) {
                    if (!Array.isArray(sourceValue)) throw new TypeError(`${key} of source is not an array`);
                    if (mergeArray) {
                        sourceValue.forEach((v) => {
                            if (!targetValue.includes(v)) targetValue.push(v);
                        })
                    }
                    else target[key] = sourceValue;
                }
                else if (targetValue instanceof Map) {
                    if (deep) mergeMap(targetValue, [sourceValue]);
                    else target[key] = sourceValue;
                }
                else if (util.isObject(targetValue)) {
                    if (!util.isObject(sourceValue)) throw new TypeError(`${key} of source is not an object`);
                    if (deep) {
                        util.assignNotEmpty(targetValue, [sourceValue], deep, mergeArray);
                    }
                    else target[key] = sourceValue;
                }
                else target[key] = sourceValue;
            });
        })
        return target;
    },
    isIterable: function (obj) {
        if (obj == undefined) return false;
        return typeof obj[Symbol.iterator] === 'function';
    },
    /**
     * Based on sameValueZero algorithm and NaN equals NaN. This method will compare each element if the arguments are array and call equals method on any object that implements IEquatable.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality
     * @param {*} obj1 
     * @param {*} obj2 
     * @returns 
     */
    isEqual: _isEqual,
    /**
     * Convert datetime to specified format.
     * @param {Date|string|number} date 
     * @param {string} [format] - Format character: {M - Month, d - Day, h - Hour, m - Minute, s - Second, q - Quarter, S - Millisecond}. Repeat characters except millisecond to output long format.  Default to "MM/dd/yyyy hh:mm:ss". 
     * @returns 
     */
    formatDate: function (date, format = 'MM/dd/yyyy hh:mm:ss') {
        if (!(date instanceof Date)) date = new Date(date);
        var o = {
            "M+": date.getMonth() + 1, //month
            "d+": date.getDate(), //day
            "h+": date.getHours(), //hour
            "m+": date.getMinutes(), //minute
            "s+": date.getSeconds(), //second
            "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
            "S": date.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
        return format;
    },
    /**
     * 
     * @param {number} ms 
     * @returns 
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    /**
     * 
     * @param {number} deadline - The time elapsed since the time origin, measured in milliseconds. 
     * @param {WindowOrWorkerGlobalScope} [context] 
     */
    sleepUntil(deadline, context = window) {
        let ms = deadline - context.performance.now();
        return ms > 0 ? this.sleep(ms) : Promise.resolve();
    }
};