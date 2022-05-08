import { _VideoCustomEventTypes } from "./class"
/**
 * @enum {string}
 */
export const VideoCustomEventTypes = _VideoCustomEventTypes;
/**
 * @enum {string}
 */
export const CustomMessageTypes = {
    SITE_INFO: 'site_info',
    VIDEO_ATTR_INITIALIZED: 'video_attr_initialized',
    VIDEO_READY: 'video_ready',
    SWITCH_PLAYING_VIDEO: 'switch_playing_video',
    REMOVE_IFRAME: 'remove_iframe',
    READY_FOR_MESSAGE: 'ready_for_message',
    REQUEST_WEBFULLSCREEN: 'request_webfullscreen',
    EXIT_WEBFULLSCREEN: 'exit_webfullscreen',
} as const;