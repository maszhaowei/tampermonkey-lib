/**
 * 
 * @param {string} selector 
 * @param {import('./class').ApplyMethodSignature} applySig 
 * @param {Array<import('./class').ApplyMethodSignature>} restSigs 
 * @param {number} interval 
 * @param {number} waitTimeout 
 * @returns {Promise<boolean>}
 */
function asyncRecursiveFn(applySig, restSigs, interval, waitTimeout) {
    let selector = applySig.contextSelector;
    return new Promise((resolve) => {
        document.arrive(selector, { existing: true, onceOnly: true }, function () {
            applySig.fn.apply(this, applySig.args);
            setTimeout(() => {
                if (restSigs.length > 0) {
                    asyncRecursiveFn(restSigs.shift(), restSigs, interval, waitTimeout).then((isSuccess) => resolve(isSuccess));
                }
                else resolve(true);
            }, interval);
        });
        setTimeout(() => {
            document.unbindArrive(selector);
            resolve(false);
        }, (restSigs.length + 1) * waitTimeout + restSigs.length * interval);
    })
}
export let util = {
    /**
     * Output message to web console in gourp {@link grouName}.
     * @param {string} grouName 
     * @param  {...any} objs 
     */
    printGroupDebug: function (grouName, ...objs) {
        console.group(`[${grouName}]`);
        let arr = [];
        for (let i = 0; i < objs.length; i++) {
            /** Prevent browsers to output live value of objs. {@link https://developer.mozilla.org/en-US/docs/Web/API/console/log#logging_objects} */
            arr.push(JSON.parse(JSON.stringify(objs[i])));
        }
        console.debug(...arr);
        console.groupEnd();
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
        var length = digits.length;
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
    isObject: function (obj) {
        return Object.prototype.toString.apply(obj) === "[object Object]"
    },
    /**
     * 
     * @param {Array<import('./class').ApplyMethodSignature>} sigs 
     * @param {number} interval - Interval(ms) between each operation. Default to be 0.
     * @param {number} waitTimeout - Wait timeout(ms) for each step of the operation. Default to be 2000.
     * @returns 
     */
    asyncChainFn: function (sigs, interval = 0, waitTimeout = 2000) {
        if (!Array.isArray(sigs) || sigs.length == 0) return;
        return asyncRecursiveFn(sigs.shift(), sigs, interval, waitTimeout);
    }
};