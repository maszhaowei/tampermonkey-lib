import { util } from "./util";
import { CustomError } from "./class";
import { ErrorCode } from "./enum";
export * as UUID from 'uuid';

export class EnumHelper {
    static #validateEnum(enumObject) {
        if (!util.isObject(enumObject)) throw new TypeError('Parameter is not an enum');
    }
    /**
     * 
     * @param {object} enumObject 
     * @param {*} value 
     */
    static hasValue(enumObject, value) {
        this.#validateEnum(enumObject);
        for (let i in enumObject) {
            if (util.isEqual(enumObject[i], value)) return true;
        }
        return false;
    }
    /**
     * 
     * @param {object} enumObject 
     * @param {string} enumType - Default to 'string'.
     */
    static toValueArray(enumObject, enumType = 'string') {
        this.#validateEnum(enumObject);
        let arr = [];
        for (let i in enumObject) {
            if (typeof enumObject[i] == enumType) arr.push(enumObject[i]);
        }
        return arr;
    }
}

export class ErrorUtils {
    /**
     * 
     * @param {*} e 
     * @param {number} [errorCode] - code used if {@link e} is not CustomError. Default to {@link ErrorCode.COMMON}
     * @returns 
     */
    static convertToCustomError(e, errorCode = ErrorCode.COMMON) {
        return e instanceof CustomError ? e : e instanceof Error ? new CustomError(errorCode, e.message) : new CustomError(errorCode, JSON.stringify(e));
    }
}
export class ArrayUtils {
    /**
     * Returns the first maximum element.
     * @param {T[]} array 
     * @param {(a:T,b:T)=>number} compareFn 
     * @returns {T|undefined}
     * @template T
     */
    static max(array, compareFn) {
        if (!Array.isArray(array) || array.length == 0) return;
        let maxEle = array[0];
        for (let i = 1; i < array.length; i++) {
            let curEle = array[i];
            if (compareFn(curEle, maxEle) > 0) maxEle = curEle;
        }
        return maxEle;
    }
    /**
     * Returns the first minimum element.
     * @param {T[]} array 
     * @param {(a:T,b:T)=>number} compareFn 
     * @returns {T|undefined}
     * @template T
     */
    static min(array, compareFn) {
        if (!Array.isArray(array) || array.length == 0) return;
        let minEle = array[0];
        for (let i = 1; i < array.length; i++) {
            let curEle = array[i];
            if (compareFn(curEle, minEle) < 0) minEle = curEle;
        }
        return minEle;
    }
}

export class StringUtils {
    /**
     * Replace line feed and trailing spaces of {@link s} with {@link replacement}.
     * @param {string} s 
     * @param {string} replacement - Default to empty string.
     * @returns A new string if {@link s} is a string, {@link s} itself otherwise.
     */
    static replaceLFTrailingSpaces(s, replacement = '') {
        return util.isString(s) ? s.replace(/\n\s*/g, replacement) : s;
    }
}