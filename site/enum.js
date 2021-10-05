import { Site, VideoSite, VideoPortalSite, PlayerMetadata } from "./class";
/**
 * @enum {string}
 */
export const SiteCategories = {
    DATABASE: "Database",
    DICTIONARY: "Dictionary",
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
    YOUTUBE: "Youtube",
    YOUTUBE_EMBED: 'YOUTUBE_EMBED',
    /**
     * 
     * @param {string} value 
     * @returns 
     */
    hasValue(value) {
        for (let i in SiteIDs) {
            if (SiteIDs[i] === value) return true;
        }
        return false;
    }
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
    YOUTUBE: new Site({
        id: SiteIDs.YOUTUBE, origin: "https://www.youtube.com",
        siteCategories: [SiteCategories.VIDEO_SHARING]
    }),
    YOUTUBE_EMBED: new Site({
        id: SiteIDs.YOUTUBE_EMBED, origin: "https://www.youtube.com", hrefRegEx: /^https:\/\/www.youtube.com\/embed\/[\w-]+$/,
        siteCategories: [SiteCategories.VIDEO_SHARING],
        originWhitelist: ['https://www.nexusmods.com']
    }),
    /**
     * Get enum by site id.
     * @param {string} id 
     * @returns {Site|undefined}
     */
    get(id) {
        for (let i in Sites) {
            if (Sites[i].id === id) return Sites[i];
        }
    }
};

export const DefaultPlayerMetadatas = {
    AVLGE: new PlayerMetadata({
        containerSelector: "div#video-player", controlsSelector: "div.vjs-control-bar",
        playButtonSelector: "button.vjs-play-control",
        fullscreenButtonSelector: "button.vjs-fullscreen-control", topElementSelectors: [".vjs-related-carousel-holder"]
    }),
    DPLAYER: new PlayerMetadata({
        containerSelector: "div#dplayer, div#mvideo",
        playButtonSelector: "button.dplayer-play-icon", volumeButtonSelector: "button.dplayer-volume-icon",
        fullscreenButtonSelector: "button.dplayer-full-icon"
    }),
    JABLE: new PlayerMetadata({
        containerSelector: "div.plyr.plyr--video", controlsSelector: "div.plyr__controls",
        volumeButtonSelector: "button[data-plyr=mute]", fullscreenButtonSelector: "button[data-plyr=fullscreen]"
    }),
    /**
     * Get enum by key.
     * @param {string} key 
     * @returns {PlayerMetadata|undefined}
     */
    get(key) {
        for (let i in DefaultPlayerMetadatas) {
            if (i === key) return DefaultPlayerMetadatas[i];
        }
    }
}

/**
 * @enum {VideoSite} 
 */
export const VideoSites = {
    AVGLE: new VideoSite(Sites.AVGLE, DefaultPlayerMetadatas.AVLGE.copy()),
    AVGLE_EMBED: new VideoSite(Sites.AVGLE_EMBED, DefaultPlayerMetadatas.AVLGE.copy()),
    BILIBILI_VIDEO: new VideoSite(Sites.BILIBILI_VIDEO, new PlayerMetadata({
        containerSelector: "div.bilibili-player-video-wrap", controlsSelector: ".bilibili-player-video-control-wrap",
        playButtonSelector: "div.bilibili-player-video-btn-start", volumeButtonSelector: "button.bilibili-player-iconfont-volume",
        fullscreenButtonSelector: "div.bilibili-player-video-btn-fullscreen button", webFullscreenButtonSelector: "div.bilibili-player-video-web-fullscreen button"
    })),
    BILIBILI_BANGUMI: new VideoSite(Sites.BILIBILI_BANGUMI, new PlayerMetadata({
        containerSelector: "div.bpx-player-video-area", controlsSelector: ".bpx-player-control-wrap",
        playButtonSelector: "div.squirtle-video-start", volumeButtonSelector: "div.squirtle-volume-icon",
        fullscreenButtonSelector: "div.squirtle-video-fullscreen", webFullscreenButtonSelector: "div.squirtle-video-pagefullscreen"
    })),
    BUYCAR5: new VideoSite(Sites.BUYCAR5, DefaultPlayerMetadatas.DPLAYER.copy()),
    DIOUS: new VideoSite(Sites.DIOUS, DefaultPlayerMetadatas.DPLAYER.copy()),
    JABLE: new VideoSite(Sites.JABLE, DefaultPlayerMetadatas.JABLE.copy()),
    JX444662: new VideoSite(Sites.JX444662, new PlayerMetadata({
        containerSelector: "div#playerCnt", controlsSelector: "div.prism-controlbar"
    })),
    MM9842: new VideoSite(Sites.MM9842, new PlayerMetadata({
        containerSelector: "div.jw-wrapper", controlsSelector: "div.jw-controls",
        volumeButtonSelector: "div.jw-icon-volume", fullscreenButtonSelector: "div.jw-icon-fullscreen"
    })),
    QINGBEIBAN: new VideoSite(Sites.QINGBEIBAN, DefaultPlayerMetadatas.DPLAYER.copy()),
    QXWK: new VideoSite(Sites.QXWK, DefaultPlayerMetadatas.DPLAYER.copy()),
    YOUTUBE_EMBED: new VideoSite(Sites.YOUTUBE_EMBED, new PlayerMetadata({
        containerSelector: "div#player", controlsSelector: ".ytp-chrome-bottom", topElementSelectors: [".ytp-pause-overlay"],
        playButtonSelector: "button.ytp-play-button", volumeButtonSelector: "button.ytp-mute-button",
        fullscreenButtonSelector: "button.ytp-fullscreen-button"
    })),
    /**
     * Get enum by site id.
     * @param {string} id 
     * @returns {VideoSite|undefined}
     */
    get(id) {
        for (let i in VideoSites) {
            if (VideoSites[i].id === id) return VideoSites[i];
        }
    }
};
/** @enum {VideoPortalSite} */
export const VideoPortalSites = {
    "7MM": new VideoPortalSite(Sites["7MM"]),
    MEIJUBS: new VideoPortalSite(Sites.MEIJUBS),
    MEIJUTTB: new VideoPortalSite(Sites.MEIJUTTB),
    MINGTIAN6: new VideoPortalSite(Sites.MINGTIAN6),
    NEXUSMODS: new VideoPortalSite(Sites.NEXUSMODS)
};