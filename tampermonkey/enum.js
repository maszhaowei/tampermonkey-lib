/**
 * @enum {string}
 */
export const MessageTypes = {
    GENERAL: 'general',
    SITE_INFO: 'site_info',
    VIDEO_ATTR_INITIALIZED: 'video_attr_initialized',
    VIDEO_READY: 'video_ready',
    SWITCH_PLAYING_VIDEO: 'switch_playing_video',
    READY_FOR_MESSAGE: 'ready_for_message',
    REQUEST_WEBFULLSCREEN: 'request_webfullscreen',
    EXIT_WEBFULLSCREEN: 'exit_webfullscreen',
    KEYDOWN: 'keydown',
    test: function (value) {
        for (let i in MessageTypes) {
            if (this[i] === value) return true;
        }
        return false;
    }
};