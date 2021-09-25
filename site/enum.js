import { Site, VideoSite, VideoPortalSite, PlayerMetadata } from "./class";
/**
 * @enum {string}
 */
export const SiteCategories = {
    DATABASE: "Database",
    GAMING: "Gaming",
    IMAGE_HOSTING: "Image Hosting",
    JAV: "JAV",
    LIVE_STREAMING: "Live Streaming",
    VIDEO_HOSTING: "Video Hosting",
    VIDEO_SHARING: "Video Sharing",
    VIDEO_STREAMING: "Video Streaming",
};
/**
 * @enum {string}
 */
export const VideoCategories = {
    JAV: "JAV",
    TV_SERIES: "TV Series",
    MOVIE: "Movie"
};
/**
 * @enum {string}
 */
export const SiteIDs = {
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
 * @enum {Site} 
 */
export const Sites = {
    "7MM": new Site({
        id: SiteIDs["7MM"], origin: "https://7mmtv.tv", hrefRegEx: /^https:\/\/7mmtv\.tv\/.*/,
        siteCategories: [SiteCategories.JAV, SiteCategories.VIDEO_STREAMING], subcategories: [VideoCategories.JAV],
        originWhitelist: ["https://mm9842.com", "https://avgle.com"]
    }),
    AVGLE: new Site({
        id: SiteIDs.AVGLE, origin: "https://avgle.com", hrefRegEx: /^https:\/\/avgle\.com\/video\/\w+/,
        siteCategories: [SiteCategories.JAV, SiteCategories.VIDEO_SHARING], subcategories: [VideoCategories.JAV],
        originWhitelist: ["https://7mmtv.tv"]
    }),
    AVGLE_EMBED: new Site({
        id: SiteIDs.AVGLE_EMBED, origin: "https://avgle.com", hrefRegEx: /^https:\/\/avgle\.com\/embed\/\w+$/,
        siteCategories: [SiteCategories.JAV, SiteCategories.VIDEO_SHARING], subcategories: [VideoCategories.JAV],
        originWhitelist: ["https://7mmtv.tv"]
    }),
    BILIBILI: new Site({
        id: SiteIDs.BILIBILI, origin: "https://www.bilibili.com", hrefRegEx: /^https:\/\/www\.bilibili\.com\/.*/,
        siteCategories: [SiteCategories.VIDEO_SHARING]
    }),
    BILIBILI_BANGUMI: new Site({
        id: SiteIDs.BILIBILI_BANGUMI, origin: "https://www.bilibili.com", hrefRegEx: /^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/,
        siteCategories: [SiteCategories.VIDEO_SHARING]
    }),
    BILIBILI_LIVE: new Site({
        id: SiteIDs.BILIBILI_LIVE, origin: "https://live.bilibili.com", hrefRegEx: /^https:\/\/live\.bilibili\.com\/.*/,
        siteCategories: [SiteCategories.LIVE_STREAMING]
    }),
    BILIBILI_VIDEO: new Site({
        id: SiteIDs.BILIBILI_VIDEO, origin: "https://www.bilibili.com", hrefRegEx: /^https:\/\/www\.bilibili\.com\/video\/.+/,
        siteCategories: [SiteCategories.VIDEO_SHARING]
    }),
    BUYCAR5: new Site({
        id: SiteIDs.BUYCAR5, origin: "https://vod3.buycar5.cn", hrefRegEx: /^https:\/\/vod\d+\.buycar5\.cn/,
        siteCategories: [SiteCategories.VIDEO_HOSTING],
        originWhitelist: ["https://www.meijuttb.com", 'https://www.meijubs.com']
    }),
    DIOUS: new Site({
        id: SiteIDs.DIOUS, origin: "https://v7.dious.cc", hrefRegEx: /^https:\/\/v7.dious.cc/,
        siteCategories: [SiteCategories.VIDEO_HOSTING],
        originWhitelist: ["https://www.meijuttb.com", 'https://www.meijubs.com']
    }),
    JABLE: new Site({
        id: SiteIDs.JABLE, origin: "https://jable.tv", hrefRegEx: /^https:\/\/jable.tv/,
        siteCategories: [SiteCategories.JAV, SiteCategories.VIDEO_SHARING], subcategories: [VideoCategories.JAV]
    }),
    JAVLIBRARY: new Site({
        id: SiteIDs.JAVLIBRARY, origin: "https://www.javlibrary.com", hrefRegEx: /^https:\/\/www\.javlibrary\.com\/.*/,
        siteCategories: [SiteCategories.JAV, SiteCategories.DATABASE]
    }),
    JX444662: new Site({
        id: SiteIDs.JX444662, origin: "https://jx.444662.cn", hrefRegEx: /^https:\/\/jx.444662.cn/,
        siteCategories: [SiteCategories.VIDEO_HOSTING],
        originWhitelist: ["https://www.meijuttb.com", 'https://www.meijubs.com']
    }),
    MEIJUBS: new Site({
        id: SiteIDs.MEIJUBS, origin: "https://www.meijubs.com",
        siteCategories: [SiteCategories.VIDEO_STREAMING], subcategories: [VideoCategories.TV_SERIES],
        originWhitelist: ["https://vod3.buycar5.cn", "https://jx.444662.cn", "https://vod4.buycar5.cn", "https://v7.dious.cc"]
    }),
    MEIJUTTB: new Site({
        id: SiteIDs.MEIJUTTB, origin: "https://www.meijuttb.com",
        siteCategories: [SiteCategories.VIDEO_STREAMING], subcategories: [VideoCategories.TV_SERIES],
        originWhitelist: ["https://vod3.buycar5.cn", "https://jx.444662.cn", "https://vod4.buycar5.cn"]
    }),
    MINGTIAN6: new Site({
        id: SiteIDs.MINGTIAN6, origin: "https://www.mingtian6.com",
        siteCategories: [SiteCategories.VIDEO_STREAMING], subcategories: [VideoCategories.TV_SERIES, VideoCategories.MOVIE],
        originWhitelist: ["https://www.qingbeiban.com"]
    }),
    MM9842: new Site({
        id: SiteIDs.MM9842, origin: "https://mm9842.com", hrefRegEx: /^https:\/\/mm9842.com/,
        siteCategories: [SiteCategories.VIDEO_HOSTING],
        originWhitelist: ["https://7mmtv.tv"]
    }),
    NEXUSMODS: new Site({
        id: SiteIDs.NEXUSMODS, origin: "https://www.nexusmods.com",
        siteCategories: [SiteCategories.GAMING],
        originWhitelist: ["https://www.youtube.com"]
    }),
    QINGBEIBAN: new Site({
        id: SiteIDs.QINGBEIBAN, origin: "https://www.qingbeiban.com", hrefRegEx: /^https:\/\/www.qingbeiban.com/,
        siteCategories: [SiteCategories.VIDEO_HOSTING],
        originWhitelist: ["https://www.mingtian6.com"]
    }),
    QXWK: new Site({
        id: SiteIDs.QXWK, origin: "https://code.qxwk.net", hrefRegEx: /^https:\/\/code.qxwk.net/,
        siteCategories: [SiteCategories.VIDEO_HOSTING],
        originWhitelist: ["https://m.wukongmeiju.com"]
    }),
    STEAM_COMMUNITY_REVIEW: new Site({
        id: SiteIDs.STEAM_COMMUNITY_REVIEW, origin: "https://steamcommunity.com", hrefRegEx: /^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/,
        siteCategories: [SiteCategories.GAMING]
    }),
    STEAM_STORE: new Site({
        id: SiteIDs.STEAM_STORE, origin: "https://store.steampowered.com", hrefRegEx: /^https:\/\/store\.steampowered\.com\/.*/,
        siteCategories: [SiteCategories.GAMING]
    }),
    WALLHAVEN: new Site({
        id: SiteIDs.WALLHAVEN, origin: "https://wallhaven.cc", hrefRegEx: /^https:\/\/wallhaven\.cc\/.*/,
        siteCategories: [SiteCategories.IMAGE_HOSTING]
    }),
    WUKONGMEIJU: new Site({
        id: SiteIDs.WUKONGMEIJU, origin: "https://m.wukongmeiju.com",
        siteCategories: [SiteCategories.VIDEO_STREAMING], subcategories: [VideoCategories.TV_SERIES],
        originWhitelist: ["https://code.qxwk.net"]
    }),
    YOUTUBE_EMBED: new Site({
        id: SiteIDs.YOUTUBE_EMBED, origin: "https://www.youtube.com", hrefRegEx: /^https:\/\/www.youtube.com\/embed\/[\w-]+$/,
        siteCategories: [SiteCategories.VIDEO_SHARING],
        originWhitelist: ['https://www.nexusmods.com']
    }),
    /**
     * 
     * @param {string} key 
     * @returns {Site|undefined}
     */
    get(key) {
        for (let i in Sites) {
            if (i === key) return Sites[i];
        }
    }
};
let avgleMetadata = ["div#video-player", "div.vjs-control-bar", undefined, "button.vjs-play-control", undefined, "button.vjs-fullscreen-control"];
let dplayerMetadata = ["div#dplayer, div#mvideo", undefined, "button.dplayer-play-icon", "button.dplayer-volume-icon", "button.dplayer-full-icon"];
/**
 * @enum {VideoSite} 
 */
export const VideoSites = {
    AVGLE: new VideoSite(Sites.AVGLE, new PlayerMetadata(...avgleMetadata)),
    AVGLE_EMBED: new VideoSite(Sites.AVGLE_EMBED, new PlayerMetadata(...avgleMetadata)),
    BILIBILI_VIDEO: new VideoSite(Sites.BILIBILI_VIDEO, new PlayerMetadata("div.bilibili-player-video-wrap", ".bilibili-player-video-control-wrap", undefined, "div.bilibili-player-video-btn-start", "button.bilibili-player-iconfont-volume",
        "div.bilibili-player-video-btn-fullscreen button", "div.bilibili-player-video-web-fullscreen button")),
    BILIBILI_BANGUMI: new VideoSite(Sites.BILIBILI_BANGUMI, new PlayerMetadata("div.bpx-player-video-area", ".bpx-player-control-wrap", undefined, "div.squirtle-video-start", "div.squirtle-volume-icon",
        "div.squirtle-video-fullscreen", "div.squirtle-video-pagefullscreen")),
    BUYCAR5: new VideoSite(Sites.BUYCAR5, new PlayerMetadata(...dplayerMetadata)),
    DIOUS: new VideoSite(Sites.DIOUS, new PlayerMetadata(...dplayerMetadata)),
    JABLE: new VideoSite(Sites.JABLE, new PlayerMetadata("div.plyr.plyr--video", "div.plyr__controls", undefined, undefined, "button[data-plyr=mute]", "button[data-plyr=fullscreen]")),
    JX444662: new VideoSite(Sites.JX444662, new PlayerMetadata("div#playerCnt", "div.prism-controlbar", undefined)),
    MM9842: new VideoSite(Sites.MM9842, new PlayerMetadata("div.jw-wrapper", "div.jw-controls", undefined, undefined, "div.jw-icon-volume", "div.jw-icon-fullscreen")),
    QINGBEIBAN: new VideoSite(Sites.QINGBEIBAN, new PlayerMetadata(...dplayerMetadata)),
    QXWK: new VideoSite(Sites.QXWK, new PlayerMetadata(...dplayerMetadata)),
    YOUTUBE_EMBED: new VideoSite(Sites.YOUTUBE_EMBED, new PlayerMetadata("div#player", ".ytp-chrome-bottom", [".ytp-pause-overlay"],
        "button.ytp-play-button", "button.ytp-mute-button", "button.ytp-fullscreen-button")),
};
/** @enum {VideoPortalSite} */
export const VideoPortalSites = {
    "7MM": new VideoPortalSite(Sites["7MM"]),
    MEIJUBS: new VideoPortalSite(Sites.MEIJUBS),
    MEIJUTTB: new VideoPortalSite(Sites.MEIJUTTB),
    MINGTIAN6: new VideoPortalSite(Sites.MINGTIAN6),
    NEXUSMODS: new VideoPortalSite(Sites.NEXUSMODS)
};