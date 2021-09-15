import {scriptName} from './const';
export const util = {
    debug(...c) {
        console.group(`[${scriptName}]`);
        console.debug(...c);
        console.groupEnd();
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
};