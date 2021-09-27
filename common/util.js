import { DEFAULT_LOG_GROUP } from "./const";
import { IEquatable } from "./interface";
export let util = {
    /**
     * Output message to web console in gourp {@link grouName}.
     * @param {string} grouName 
     * @param  {...any} objs 
     */
    printGroupDebug: function (grouName = DEFAULT_LOG_GROUP, ...objs) {
        console.group(`[${grouName}]`);
        let arr = [];
        for (let i = 0; i < objs.length; i++) {
            /** Prevent browsers to output live value of objs. {@link https://developer.mozilla.org/en-US/docs/Web/API/console/log#logging_objects} */
            arr.push(util.isObject(objs[i]) ? JSON.parse(JSON.stringify(objs[i])) : objs[i]);
        }
        console.debug(...arr);
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
     * @param {string} variable 
     * @returns 
     */
    getQueryVariable: function (variable) {
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
    },
    /**
     * 
     * @param {object} context 
     * @param {function} fn 
     * @param {Array} args 
     * @param {number} delay
     * @returns 
     */
    asyncDelayedFn: function (context, fn, args, delay = 0) {
        return new Promise((resolve, reject) => setTimeout(() => {
            if (args === undefined) resolve(fn.apply(context));
            else if (Array.isArray(args)) resolve(fn.apply(context, args));
            else reject(args);
            resolve(true);
        }, delay));
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
        let cDigits = Object.keys(this._common_used_numerals);
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
        if (util.isInteger(zhstr)) return zhstr;
        else if (!this.isChineseDigits(zhstr)) return;

        let total = 0, weight = 1;
        for (let i = zhstr.length - 1; i >= 0; i--) {
            let val = this._common_used_numerals[zhstr[i]];
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
     * 返回{obj}的{members}中第一个trueable成员，否则返回最后一个成员
     * @param {string[]} members 
     * @param {object} obj
     * @returns {object} 
     */
    anyMemberNotEmpty: function (members, obj) {
        let value;
        members.some((member) => {
            value = obj[member];
            return !!value;
        })
        return value;
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
     * Copies all values of enumerable own properties that are not null, undefined, NaN or empty array from one or more source objects to a target object.
     * @param {*} target 
     * @param  {...any} sources 
     * @returns The modified target object.
     */
    assignNotEmpty: function (target, ...sources) {
        sources.forEach((source) => {
            Object.keys(source).forEach((key) => {
                let value = source[key];
                if (value === undefined || value === null || Object.is(NaN, value) || (Array.isArray(value) && value.length == 0)) return;
                else target[key] = value;
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
    isEqual: function (obj1, obj2) {
        if (obj1 instanceof Array) {
            if (!(obj2 instanceof Array) || obj1.length != obj2.length) return false;
            for (let i = 0; i < obj1.length; i++) {
                if (!util.isEqual(obj1[i], obj2[i])) return false;
            }
            return true;
        }
        return Object.is(obj1, obj2) ? true : obj1 instanceof IEquatable ? obj1.equals(obj2) : obj1 === obj2;
    },
    /**
     * Convert a Date object to specified format.
     * @param {Date} date 
     * @param {string} [format] - Format character: {M - Month, d - Day, h - Hour, m - Minute, s - Second, q - Quarter, S - Millisecond}. Repeat characters except millisecond to output long format.  Default to "MM/dd/yyyy hh:mm:ss". 
     * @returns 
     */
    formatDate: function (date, format = 'MM/dd/yyyy hh:mm:ss') {
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
    }
};