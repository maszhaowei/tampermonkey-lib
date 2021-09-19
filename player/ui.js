import { util } from '../common/util';
export const ui = {
    /* #region Fullscreen/Webfullscreen */
    isFullscreen() {
        return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
    },
    isFullscreenEnabled() {
        // return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
        return util.anyMemberNotEmpty(['fullscreenEnabled',
            'webkitFullscreenEnabled',
            'mozFullScreenEnabled',
            'msFullscreenEnabled'], document)
    },
    /**
     * Returns the Element that is currently being presented in full-screen mode in this document.
     * @param {boolean} [tryShadowRoot] - Whether or not to get full-screen element from ShadowRoot.
     * @returns {Element} 
     */
    getFullscreenElement(tryShadowRoot) {
        tryShadowRoot = void 0 === tryShadowRoot ? !1 : tryShadowRoot;
        /** @type {Element} */
        var fsEle = util.anyMemberNotEmpty(['fullscreenElement',
            'webkitFullscreenElement',
            'mozFullScreenElement',
            'msFullscreenElement'], document);
        if (tryShadowRoot) for (; fsEle && fsEle.shadowRoot;) fsEle = fsEle.shadowRoot.fullscreenElement;
        return fsEle ? fsEle : null;
    },
    /**
     * 
     * @param {Element} element 
     * @returns {Promise<undefined|Error>}
     */
    requestFullscreen(element = document.documentElement) {
        let p;
        if (element.requestFullscreen) p = element.requestFullscreen();
        else if (element.webkitRequestFullscreen) p = element.webkitRequestFullscreen();
        else if (element.mozRequestFullScreen) p = element.mozRequestFullScreen();
        else if (element.msRequestFullscreen) p = element.msRequestFullscreen();
        else if (element.webkitEnterFullscreen) p = element.webkitEnterFullscreen();
        else return Promise.reject(Error('Fullscreen API unavailable'));
        return p instanceof Promise ? p : Promise.resolve();
    },
    /**
     * 
     * @returns {Promise<undefined|Error>}
     */
    exitFullscreen() {
        let p;
        if (document.exitFullscreen) p = document.exitFullscreen();
        else if (document.webkitExitFullscreen) p = document.webkitExitFullscreen();
        else if (document.mozCancelFullScreen) p = document.mozCancelFullScreen();
        else if (document.msExitFullscreen) p = document.msExitFullscreen();
        else return Promise.reject(Error('Exit fullscreen API unavailable'));
        return p instanceof Promise ? p : Promise.resolve();
    },
    /**
     * 
     * @param {Element} element 
     */
    toggleFullscreen(element = document.documentElement) {
        if (ui.isFullscreen()) return ui.exitFullscreen(element);
        else return ui.requestFullscreen(element);
    }
    /* #endregion */
};