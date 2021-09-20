import { scriptName } from './const';
import { util as cutil } from '../common/util';
export const util = {
    /**
     * Output message to web console in gourp {@link scriptName}.
     * @param  {...any} objs 
     */
    debug: function (...objs) {
        cutil.printGroupDebug(`[${scriptName}]`, ...objs)
    },
    get: function (url, headers, responseType) {
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
    post: function (url, headers, data, responseType) {
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
    /**
     * 
     * @param {MessageEvent} event 
     */
    printReceiveMessage: function (event) {
        util.debug(`>>> From: ${event.origin}, To: ${window.location.origin}, Message:`, event.data);
    },
    printSendMessage: function (targetOrigin, message) {
        util.debug(`<<< To: ${targetOrigin}, From: ${window.location.origin}, Message:`, message);
    },
};