let GM_info;
export const scriptInfo = GM_info && GM_info.script;
export const scriptName = scriptInfo && scriptInfo.name;
/**
 * @enum {object}
 */
 export const VideoCategories = {
    TV_SERIES: {
        categoryName: "TV Series",
        titleRegEx: /([\u4e00-\u9fa5\w]+)第(.+)季.*第(.+)集/
    },
    MOVIE: {
        categoryName: "Movie"
    },
    AV: {
        categoryName: "AV",
        titleRegEx: /([a-zA-Z]+-\d+)(-(\w+))?/
    },
    VIDEO_SHARING: {
        categoryName: "Video Sharing"
    },
    GAME: {
        categoryName: "Game"
    }
};
/**
 * @enum {string}
 */
 export const SiteID = {
    QINGBEIBAN: 'QINGBEIBAN',
    QXWK: 'QXWK',
    JABLE: 'JABLE',
    MM9842: 'MM9842',
    BUYCAR5: 'BUYCAR5',
    JX444662: 'JX444662',
    AVGLE: 'AVGLE',
    AVGLE_EMBED: 'AVGLE_EMBED',
    DIOUS: 'DIOUS',
    YOUTUBE_EMBED: 'YOUTUBE_EMBED',
    BILIBILI: 'BILIBILI',
    BILIBILI_BANGUMI: 'BILIBILI_BANGUMI'
};
/**
 * containerSelector必须是video和controlsSelector的祖先元素,controlsSelector的层级必须比video高
 * @enum {object}
 */
 export const SiteInfos = {
    QINGBEIBAN: {
        origin: "https://www.qingbeiban.com",
        id: SiteID.QINGBEIBAN,
        hrefRegEx: /^https:\/\/www.qingbeiban.com/,
        videoCategory: VideoCategories.TV_SERIES,
        containerSelector: "div#dplayer,div#mvideo",
        topOriginWhitelist: ["https://www.mingtian6.com"]
    },
    QXWK: {
        origin: "https://code.qxwk.net",
        id: SiteID.QXWK,
        hrefRegEx: /^https:\/\/code.qxwk.net/,
        videoCategory: VideoCategories.TV_SERIES,
        containerSelector: "div#dplayer,div#mvideo",
        topOriginWhitelist: ["https://m.wukongmeiju.com"]
    },
    JABLE: {
        origin: "https://jable.tv",
        id: SiteID.JABLE,
        hrefRegEx: /^https:\/\/jable.tv/,
        videoCategory: VideoCategories.AV,
        containerSelector: "div.plyr.plyr--video",
        controlsSelector: "div.plyr__controls",
        topOriginWhitelist: ["https://jable.tv"]
    },
    MM9842: {
        origin: "https://mm9842.com",
        id: SiteID.MM9842,
        hrefRegEx: /^https:\/\/mm9842.com/,
        videoCategory: VideoCategories.AV,
        containerSelector: "div.jw-wrapper",
        controlsSelector: "div.jw-controls",
        topOriginWhitelist: ["https://7mmtv.tv"]
    },
    BUYCAR5: {
        origin: "https://vod3.buycar5.cn",
        id: SiteID.BUYCAR5,
        hrefRegEx: /^https:\/\/vod\d+\.buycar5\.cn/,
        videoCategory: VideoCategories.TV_SERIES,
        containerSelector: "div#dplayer,div#mvideo",
        topOriginWhitelist: ["https://www.meijuttb.com", 'https://www.meijubs.com']
    },
    JX444662: {
        origin: "https://jx.444662.cn",
        id: SiteID.JX444662,
        hrefRegEx: /^https:\/\/jx.444662.cn/,
        videoCategory: VideoCategories.TV_SERIES,
        containerSelector: "div#playerCnt",
        controlsSelector: "div.prism-controlbar",
        topOriginWhitelist: ["https://www.meijuttb.com", 'https://www.meijubs.com']
    },
    AVGLE: {
        origin: "https://avgle.com",
        id: SiteID.AVGLE,
        hrefRegEx: /^https:\/\/avgle\.com\/video\/\w+/,
        videoCategory: VideoCategories.AV,
        containerSelector: "div#video-player",
        controlsSelector: "div.vjs-control-bar",
        topOriginWhitelist: ["https://7mmtv.tv"]
    },
    AVGLE_EMBED: {
        origin: "https://avgle.com",
        id: SiteID.AVGLE_EMBED,
        hrefRegEx: /^https:\/\/avgle\.com\/embed\/\w+$/,
        videoCategory: VideoCategories.AV,
        containerSelector: "div#video-player",
        controlsSelector: "div.vjs-control-bar",
        topOriginWhitelist: ["https://7mmtv.tv"]
    },
    DIOUS: {
        origin: "https://v7.dious.cc",
        id: SiteID.DIOUS,
        hrefRegEx: /^https:\/\/v7.dious.cc/,
        videoCategory: VideoCategories.TV_SERIES,
        containerSelector: "div#mvideo",
        controlsSelector: '.dplayer-controller',
        topOriginWhitelist: ["https://www.meijuttb.com", 'https://www.meijubs.com']
    },
    YOUTUBE_EMBED: {
        origin: "https://www.youtube.com",
        id: SiteID.YOUTUBE_EMBED,
        hrefRegEx: /^https:\/\/www.youtube.com\/embed\/[\w-]+$/,
        videoCategory: VideoCategories.VIDEO_SHARING,
        containerSelector: "div#player",
        controlsSelector: '.ytp-chrome-bottom',
        pauseOverlaySelector: '.ytp-pause-overlay',
        topOriginWhitelist: ['https://www.nexusmods.com']
    },
    BILIBILI: {
        origin: "https://www.bilibili.com",
        id: SiteID.BILIBILI,
        hrefRegEx: /^https:\/\/www\.bilibili\.com\/video\/.+/,
        videoCategory: VideoCategories.VIDEO_SHARING,
        containerSelector: "div.bilibili-player-video-wrap",
        controlsSelector: '.bilibili-player-video-control-wrap'
        // eventDelegateSelector: "div.bilibili-player-dm-tip-wrap"
    },
    BILIBILI_BANGUMI: {
        origin: "https://www.bilibili.com",
        id: SiteID.BILIBILI_BANGUMI,
        hrefRegEx: /^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/,
        videoCategory: VideoCategories.VIDEO_SHARING,
        containerSelector: "div.bpx-player-video-area",
        controlsSelector: '.bpx-player-control-wrap'
    }
};
/**
 * @enum {string}
 */
 export const MessageType= {
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
 export const CallbackType= {
    VIDEO_ATTR_INITIALIZED: 'video_attr_initialized',
    VIDEO_READY: 'video_ready',
    PLAY: 'play',
    KEYDOWN: 'keydown',
    REQUEST_WEBFULLSCREEN: 'request_webfullscreen',
    EXIT_WEBFULLSCREEN: 'exit_webfullscreen',
    EVENT_DELEGATE_SELECTOR: 'event+delegate_selector'
}
