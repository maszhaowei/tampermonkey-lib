import { scriptName } from './const';
import { EMOJIS } from './enum';
import { util as cutil } from '../common/util';
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
     * @param {MessageEvent} event 
     */
    printReceiveMessage: function (event) {
        util.debug(`>>> From: ${event.origin}, To: ${window.location.origin}, Message:`, event.data);
    },
    printSendMessage: function (targetOrigin, message) {
        util.debug(`<<< To: ${targetOrigin}, From: ${window.location.origin}, Message:`, message);
    },
    randomEmoji: {}
};
for (let i in EMOJIS) {
    util.randomEmoji[i] = () => EMOJIS[i][Math.floor(Math.random() * EMOJIS[i].length)];
}