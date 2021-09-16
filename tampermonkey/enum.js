import { VideoSite } from './class';
import { Sites } from '../common/enum';
/**
 * @enum {VideoSite} 
 */
export const VideoSites = {
    AVGLE: new VideoSite(Sites.AVGLE, "div#video-player", "div.vjs-control-bar"),
    AVGLE_EMBED: new VideoSite(Sites.AVGLE_EMBED, "div#video-player", "div.vjs-control-bar"),
    BILIBILI_VIDEO: new VideoSite(Sites.BILIBILI_VIDEO, "div.bilibili-player-video-wrap", ".bilibili-player-video-control-wrap"),
    BILIBILI_BANGUMI: new VideoSite(Sites.BILIBILI_BANGUMI, "div.bpx-player-video-area", ".bpx-player-control-wrap"),
    BUYCAR5: new VideoSite(Sites.BUYCAR5, "div#dplayer,div#mvideo"),
    DIOUS: new VideoSite(Sites.DIOUS, "div#mvideo", ".dplayer-controller"),
    JABLE: new VideoSite(Sites.JABLE, "div.plyr.plyr--video", "div.plyr__controls"),
    JX444662: new VideoSite(Sites.JX444662, "div#playerCnt", "div.prism-controlbar"),
    MM9842: new VideoSite(Sites.MM9842, "div.jw-wrapper", "div.jw-controls"),
    QINGBEIBAN: new VideoSite(Sites.QINGBEIBAN, "div#dplayer,div#mvideo"),
    QXWK: new VideoSite(Sites.QXWK, "div#dplayer,div#mvideo"),
    YOUTUBE_EMBED: new VideoSite(Sites.YOUTUBE_EMBED, "div#player", ".ytp-chrome-bottom", ".ytp-pause-overlay"),
};
/**
 * @enum {string}
 */
export const MessageType = {
    SITE_INFO: 'site_info',
    VIDEO_ATTR_INITIALIZED: 'video_attr_initialized',
    VIDEO_READY: 'video_ready',
    SWITCH_PLAYING_VIDEO: 'switch_playing_video',
    READY_FOR_MESSAGE: 'ready_for_message',
    REQUEST_WEBFULLSCREEN: 'request_webfullscreen',
    EXIT_WEBFULLSCREEN: 'exit_webfullscreen',
    KEYDOWN: 'keydown',
    EVENT_DELEGATE_SELECTOR: 'event+delegate_selector'
};
/**
 * @readonly
 * @enum {string}
 */
export const CallbackType = {
    VIDEO_ATTR_INITIALIZED: 'video_attr_initialized',
    VIDEO_READY: 'video_ready',
    PLAY: 'play',
    KEYDOWN: 'keydown',
    REQUEST_WEBFULLSCREEN: 'request_webfullscreen',
    EXIT_WEBFULLSCREEN: 'exit_webfullscreen',
    EVENT_DELEGATE_SELECTOR: 'event+delegate_selector'
}