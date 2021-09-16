// eslint-disable-next-line no-use-before-define
const gmInfo = (typeof GM_info === 'undefined'?{}:GM_info);
export const scriptInfo = gmInfo && gmInfo.script;
export const scriptName = scriptInfo && scriptInfo.name;

/**
 * @enum {string}
 */
export const SiteID = {
    '7MM': '7MM',
    AVGLE: 'AVGLE',
    AVGLE_EMBED: 'AVGLE_EMBED',
    BILIBILI: 'BILIBILI',
    BILIBILI_VIDEO: 'BILIBILI_VIDEO',
    BILIBILI_BANGUMI: 'BILIBILI_BANGUMI',
    BILIBILI_LIVE: 'BILIBILI_LIVE',
    BUYCAR5: 'BUYCAR5',
    DIOUS: 'DIOUS',
    JABLE: 'JABLE',
    JAVLIBRARY: 'JAVLIBRARY',
    JX444662: 'JX444662',
    MEIJUBS: 'MEIJUBS',
    MEIJUTTB: 'MEIJUTTB',
    MINGTIAN6: 'MINGTIAN6',
    MM9842: 'MM9842',
    NEXUSMODS: 'NEXUSMODS',
    QINGBEIBAN: 'QINGBEIBAN',
    QXWK: 'QXWK',
    STEAM_COMMUNITY_REVIEW: 'STEAM_COMMUNITY_REVIEW',
    STEAM_STORE: 'STEAM_STORE',
    WALLHAVEN: 'WALLHAVEN',
    WUKONGMEIJU: 'WUKONGMEIJU',
    YOUTUBE_EMBED: 'YOUTUBE_EMBED'
};
/**
 * @typedef {object} SiteCategory 
 * @property {string} categoryName 
 * @property {RegExp} [titleRegEx] 
 */
/**
 * @enum {SiteCategory}
 */
export const SiteCategories = {
    AV: {
        categoryName: "AV",
        titleRegEx: /([a-zA-Z]+-\d+)(-(\w+))?/
    },
    DB: { categoryName: "DB" },
    GAME: { categoryName: "Game" },
    IMAGE_HOSTING: { categoryName: "Image Hosting" },
    LIVE_STREAMING: { categoryName: "Live Streaming" },
    MODDING: { categoryName: "Modding" },
    MOVIE: { categoryName: "Movie" },
    TV_SERIES: {
        categoryName: "TV Series",
        titleRegEx: /([\u4e00-\u9fa5\w]+)第(.+)季.*第(.+)集/
    },
    VIDEO_HOSTING: { categoryName: "Video Hosting" },
    VIDEO_SHARING: { categoryName: "Video Sharing" }
};
class Site {
    #id;
    get id() { return this.#id }
    #origin;
    get origin() { return this.#origin }
    #hrefRegEx;
    get hrefRegEx() { return this.#hrefRegEx }
    #siteCategories;
    get siteCategories() { return this.#siteCategories }
    #originWhitelist;
    get originWhitelist() { return this.#originWhitelist }
    /**
     * 
     * @param {string} id 
     * @param {string} origin 
     * @param {RegExp} [hrefRegEx] 
     * @param {SiteCategory[]} siteCategories 
     * @param {string[]} originWhitelist 
     */
    constructor(id, origin, hrefRegEx, siteCategories, originWhitelist = []) {
        this.#id = id;
        this.#origin = origin;
        this.#hrefRegEx = hrefRegEx;
        this.#siteCategories = siteCategories;
        this.#originWhitelist = originWhitelist;
    }
    isMessageOriginAllowed(targetOrigin) {
        if (!targetOrigin) return false;
        if (targetOrigin === window.location.origin) return true;
        return this.#originWhitelist.includes(targetOrigin);
    }
    /**
     * Check if current site matches this.
     * @returns {boolean} 
     */
    test() {
        return (this.#hrefRegEx && this.#hrefRegEx.test(window.location.href)) || (this.#origin && this.#origin == window.location.origin);
    }
}
/** @enum {Site} */
const Sites = {
    "7MM": new Site(SiteID["7MM"], "https://7mmtv.tv", /^https:\/\/www\.bilibili\.com\/.*/, [SiteCategories.AV], ["https://mm9842.com", "https://avgle.com"]),
    AVGLE: new Site(SiteID.AVGLE, "https://avgle.com", /^https:\/\/avgle\.com\/video\/\w+/, [SiteCategories.AV], ["https://7mmtv.tv"]),
    AVGLE_EMBED: new Site(SiteID.AVGLE_EMBED, "https://avgle.com", /^https:\/\/avgle\.com\/embed\/\w+$/, [SiteCategories.AV], ["https://7mmtv.tv"]),
    BILIBILI: new Site(SiteID.BILIBILI, "https://www.bilibili.com", /^https:\/\/www\.bilibili\.com\/.*/, [SiteCategories.VIDEO_SHARING]),
    BILIBILI_BANGUMI: new Site(SiteID.BILIBILI_BANGUMI, "https://www.bilibili.com", /^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/, [SiteCategories.VIDEO_SHARING]),
    BILIBILI_LIVE: new Site(SiteID.BILIBILI_LIVE, "https://live.bilibili.com", /^https:\/\/live\.bilibili\.com\/.*/, [SiteCategories.LIVE_STREAMING]),
    BILIBILI_VIDEO: new Site(SiteID.BILIBILI_VIDEO, "https://www.bilibili.com", /^https:\/\/www\.bilibili\.com\/video\/.+/, [SiteCategories.VIDEO_SHARING]),
    BUYCAR5: new Site(SiteID.BUYCAR5, "https://vod3.buycar5.cn", /^https:\/\/vod\d+\.buycar5\.cn/, [SiteCategories.VIDEO_HOSTING], ["https://www.meijuttb.com", 'https://www.meijubs.com']),
    DIOUS: new Site(SiteID.DIOUS, "https://v7.dious.cc", /^https:\/\/v7.dious.cc/, [SiteCategories.VIDEO_HOSTING], ["https://www.meijuttb.com", 'https://www.meijubs.com']),
    JABLE: new Site(SiteID.JABLE, "https://jable.tv", /^https:\/\/jable.tv/, [SiteCategories.AV]),
    JAVLIBRARY: new Site(SiteID.JAVLIBRARY, "https://www.javlibrary.com", /^https:\/\/www\.javlibrary\.com\/.*/, [SiteCategories.AV]),
    JX444662: new Site(SiteID.JX444662, "https://jx.444662.cn", /^https:\/\/jx.444662.cn/, [SiteCategories.VIDEO_HOSTING], ["https://www.meijuttb.com", 'https://www.meijubs.com']),
    MEIJUBS: new Site(SiteID.MEIJUBS, "https://www.meijubs.com", undefined, [SiteCategories.TV_SERIES], ["https://vod3.buycar5.cn", "https://jx.444662.cn", "https://vod4.buycar5.cn", "https://v7.dious.cc"]),
    MEIJUTTB: new Site(SiteID.MEIJUTTB, "https://www.meijuttb.com", undefined, [SiteCategories.TV_SERIES], ["https://vod3.buycar5.cn", "https://jx.444662.cn", "https://vod4.buycar5.cn"]),
    MINGTIAN6: new Site(SiteID.MINGTIAN6, "https://www.mingtian6.com", undefined, [SiteCategories.TV_SERIES], ["https://www.qingbeiban.com"]),
    MM9842: new Site(SiteID.MM9842, "https://mm9842.com", /^https:\/\/mm9842.com/, [SiteCategories.AV], ["https://7mmtv.tv"]),
    NEXUSMODS: new Site(SiteID.NEXUSMODS,"https://www.nexusmods.com",undefined,[SiteCategories.MODDING],["https://www.youtube.com"]),
    QINGBEIBAN: new Site(SiteID.QINGBEIBAN, "https://www.qingbeiban.com", /^https:\/\/www.qingbeiban.com/, [SiteCategories.VIDEO_HOSTING], ["https://www.mingtian6.com"]),
    QXWK: new Site(SiteID.QXWK, "https://code.qxwk.net", /^https:\/\/code.qxwk.net/, [SiteCategories.VIDEO_HOSTING], ["https://m.wukongmeiju.com"]),
    STEAM_COMMUNITY_REVIEW: new Site(SiteID.STEAM_COMMUNITY_REVIEW, "https://steamcommunity.com", /^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/, [SiteCategories.GAME]),
    STEAM_STORE: new Site(SiteID.STEAM_STORE, "https://store.steampowered.com", /^https:\/\/store\.steampowered\.com\/.*/, [SiteCategories.GAME]),
    WALLHAVEN: new Site(SiteID.WALLHAVEN, "https://wallhaven.cc", /^https:\/\/wallhaven\.cc\/.*/, [SiteCategories.IMAGE_HOSTING]),
    WUKONGMEIJU: new Site(SiteID.WUKONGMEIJU, "https://m.wukongmeiju.com", undefined, [SiteCategories.TV_SERIES], ["https://code.qxwk.net"]),
    YOUTUBE_EMBED: new Site(SiteID.YOUTUBE_EMBED, "https://www.youtube.com", /^https:\/\/www.youtube.com\/embed\/[\w-]+$/, [SiteCategories.VIDEO_SHARING], ['https://www.nexusmods.com'])
};
let site;
for(let site in Sites) {
    if(Sites[site].test()) site = Sites[site];
}
export const currentSite = site;
/**
 * containerSelector必须是video和controlsSelector的祖先元素,controlsSelector的层级必须比video高
 */
class VideoSite extends Site {
    #containerSelector;
    get containerSelector() { return this.#containerSelector }
    #controlsSelector;
    get controlsSelector() { return this.#controlsSelector }
    #topOverlaySelector;
    get topOverlaySelector() { return this.#topOverlaySelector }
    get currentPageCategory() {
        let siteCategories = super.siteCategories;
        if(!Array.isArray(siteCategories)) return;
        else if(siteCategories.length == 1) return siteCategories[0];
        else {
            for(let siteCategory of siteCategories) {
                if(siteCategory.titleRegEx && siteCategory.titleRegEx.test(document.title)) return siteCategory;
            }
            if(siteCategories.includes(SiteCategories.MOVIE)) return SiteCategories.MOVIE;
        }
    }
    /**
     * 
     * @param {Site} site 
     * @param {string} containerSelector 
     * @param {string} controlsSelector 
     * @param {string} [topOverlaySelector] 
     */
    constructor(site, containerSelector, controlsSelector, topOverlaySelector) {
        super(site.id, site.origin, site.hrefRegEx, site.siteCategories, site.originWhitelist);
        this.#containerSelector = containerSelector;
        this.#controlsSelector = controlsSelector;
        this.#topOverlaySelector = topOverlaySelector;
    }
}
/**
 * @enum {VideoSite} 
 */
const VideoSites = {
    AVGLE: new VideoSite(Sites.AVGLE, "div#video-player","div.vjs-control-bar"),
    AVGLE_EMBED: new VideoSite(Sites.AVGLE_EMBED,"div#video-player","div.vjs-control-bar"),
    BILIBILI_VIDEO: new VideoSite(Sites.BILIBILI_VIDEO,"div.bilibili-player-video-wrap",".bilibili-player-video-control-wrap"),
    BILIBILI_BANGUMI: new VideoSite(Sites.BILIBILI_BANGUMI,"div.bpx-player-video-area",".bpx-player-control-wrap"),
    BUYCAR5: new VideoSite(Sites.BUYCAR5,"div#dplayer,div#mvideo"),
    DIOUS: new VideoSite(Sites.DIOUS,"div#mvideo",".dplayer-controller"),
    JABLE: new VideoSite(Sites.JABLE,"div.plyr.plyr--video","div.plyr__controls"),
    JX444662: new VideoSite(Sites.JX444662,"div#playerCnt","div.prism-controlbar"),
    MM9842: new VideoSite(Sites.MM9842,"div.jw-wrapper","div.jw-controls"),
    QINGBEIBAN: new VideoSite(Sites.QINGBEIBAN,"div#dplayer,div#mvideo"),
    QXWK: new VideoSite(Sites.QXWK,"div#dplayer,div#mvideo"),
    YOUTUBE_EMBED: new VideoSite(Sites.YOUTUBE_EMBED,"div#player",".ytp-chrome-bottom",".ytp-pause-overlay"),
};
let videoSite;
for(let site in VideoSites) {
    if(VideoSites[site].test()) videoSite = VideoSites[site];
}
export const currentVideoSite = videoSite;
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
