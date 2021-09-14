export let util = {
    printDebug(grouName, ...c) {
        console.group(`[${grouName}]`);
        console.debug(...c);
        console.groupEnd();
    },
    /**
     * 
     * @param {MessageEvent} event 
     */
    printReceiveMessage(event) {
        util.debug(`From: ${event.origin}, To: ${window.location.origin}, Message:`, event.data);
    },
    printSendMessage(targetOrigin, message) {
        util.debug(`To: ${targetOrigin}, From: ${window.location.origin}, Message:`, message);
    },
    getQueryVariable(variable)
    {
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i=0;i<vars.length;i++) {
            let pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    },
    /**
     * 
     * @param {object} context 
     * @param {Function} fn 
     * @param {Array} args 
     * @param {number} delay
     * @returns 
     */
    asyncDelayedFn(context, fn, args, delay=0) {
        return new Promise((resolve, reject)=>setTimeout(()=>{
            if(args === undefined) resolve(fn.apply(context));
            else if(Array.isArray(args)) resolve(fn.apply(context, args));
            else reject(args);
            resolve(true);
        }, delay));
    },
    /**
     * 
     * @param {string} s 
     */
    isInteger(s) {
        if(isNaN(s)) return false;
        let value = parseFloat(s);
        return (value|0)===value;
    },
    /**
     * 
     * @param {string} s 
     * @returns 
     */
    isNumeric(s) {
        return !isNaN(parseFloat(s)) && isFinite(s);
    },
    isZH(str) {
        return /^[\u4e00-\u9fa5]+$/.test(str);
    },
    isChineseDigits(str) {
        let cDigits = Object.keys(this._common_used_numerals);
        for(const s of str) {
            if(!cDigits.includes(s)) return false;
        }
        return true;
    },
    zh2Digits(zhstr) {
        if(util.isInteger(zhstr)) return zhstr;
        else if(!this.isChineseDigits(zhstr)) return;

        let total = 0, weight = 1;
        for(let i=zhstr.length-1;i>=0;i--) {
            let val = this._common_used_numerals[zhstr[i]];
            if(val >= 10 && i == 0) {
                if(val > weight) {
                    weight = val;
                    total += val;
                }
                else weight *= val;
            }
            else if(val >= 10) {
                if(val > weight) weight = val;
                else weight *= val;
            }
            else total += weight * val;
        }
        return total;
    },
    digits2ZH(digits) {
        if(this.isZH(digits)) return digits;
        else if(!util.isInteger(digits)) return;

        let zhNumber = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '亿'];
        var length = digits.length;
        if (length == 1){
            return zhNumber[digits];
        }else if(length == 2){
            if (digits == 10) {
                return zhNumber[digits];
            } else if (digits > 10 && digits < 20) {
                return '十' + zhNumber[digits.charAt(1)];
            } else {
                return zhNumber[digits.charAt(0)] + '十' + zhNumber[digits.charAt(1)].replace('零', '');
            }
        }
    }
};