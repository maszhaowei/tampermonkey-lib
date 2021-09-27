import { scriptName } from './const';
import { EMOJIS } from './enum';
import { util as cutil } from '../common/util';
/**
 * @typedef {object} RandomEmoji
 * @property {()=>string} RandomEmoji.angry
 * @property {()=>string} RandomEmoji.happy
 * @property {()=>string} RandomEmoji.shock
 * @property {()=>string} RandomEmoji.sad
 * @property {()=>string} RandomEmoji.helpless
 * @property {()=>string} RandomEmoji.custom
 */
export const util = {
    /**
     * Output message to web console in gourp {@link scriptName}.
     * @param  {...any} objs 
     */
    debug: function (...objs) {
        cutil.printGroupDebug(scriptName, ...objs);
    },
    /**
     * 
     * @param {string|URL} url 
     * @param {Object.<string,string>} [headers] 
     * @param {string} [responseType] - Default to "json".
     * @param {boolean} [nocache] - Don't cache the resource. Default to false.
     * @returns 
     */
    gmGet: function (url, headers, responseType, nocache = false) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "GET", url, headers,
                nocache: nocache,
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
     * @param {string|URL} url 
     * @param {Object.<string,string>} [headers] - Default to { "Content-Type": "application/x-www-form-urlencoded" }.
     * @param {Document | XMLHttpRequestBodyInit} [data] 
     * @param {string} [responseType] - Default to "json".
     * @returns 
     */
    gmPost: function (url, headers, data, responseType) {
        headers = headers || { "Content-Type": "application/x-www-form-urlencoded" };
        if (cutil.isObject(data)) data = JSON.stringify(data);
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "POST", url, headers, data,
                responseType: responseType || 'json',
                onload: (res) => {
                    responseType === 'blob' ? resolve(res) : resolve(res.response || res.responseText);
                },
                onerror: (err) => {
                    reject(err);
                }
            });
        });
    },
    /**
     * 
     * @param {string|URL} url 
     * @param {Object.<string,string>} [headers] 
     * @param {string} [responseType] - Default to "json".
     * @returns 
     */
    gmOptions: function (url, headers, responseType) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "OPTIONS", url, headers,
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
    /** @type RandomEmoji */
    randomEmoji: {}
};
for (let i in EMOJIS) {
    util.randomEmoji[i] = () => EMOJIS[i][Math.floor(Math.random() * EMOJIS[i].length)];
}