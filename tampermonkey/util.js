import {scriptName} from './const';
import {util as commonUtil} from '../common/util';
export const util = {
    debug(...c) {
        commonUtil.printDebug(scriptName, ...c);
    },
    get(url, headers, responseType) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "GET", url, headers,
                responseType: responseType || 'json',
                onload: (res) => {
                    resolve(res.response || res.responseText);
                },
                onerror: (err) => {
                    reject(err);
                }
            });
        });
    },
    post(url, headers, data, responseType) {
        headers = headers || { "Content-Type": "application/x-www-form-urlencoded" };
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "POST", url, headers, data,
                responseType: responseType || 'json',
                onload: (res) => {
                    resolve(res.response || res.responseText);
                },
                onerror: (err) => {
                    reject(err);
                }
            });
        });
    },
};