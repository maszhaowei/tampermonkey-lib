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
    static convertToCustomError(e) {
        return e instanceof CustomError ? e : e instanceof Error ? new CustomError(ErrorCode.COMMON, e.message) : new CustomError(ErrorCode.COMMON, e);
    }
}