import { Site, VideoSite, VideoPortalSite, PlayerMetadata, _VideoCategories, SearchSite } from "./class";
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
export const VideoCategories = _VideoCategories;
/**
 * @enum {string}
 */
export const SiteIDs = {
    '7MM': '7MM',
    '7MM_VIDEO_PORTAL': '7MM_VIDEO',
    '7MM_SEARCH': '7MM_SEARCH',
    AVGLE: 'AVGLE',
    AVGLE_VIDEO: 'AVGLE_VIDEO',
    AVGLE_EMBED_VIDEO: 'AVGLE_EMBED',
    BILIBILI: 'BILIBILI',
    BILIBILI_VIDEO: 'BILIBILI_VIDEO',
    BILIBILI_BANGUMI_VIDEO: 'BILIBILI_BANGUMI',
    BILIBILI_LIVE: 'BILIBILI_LIVE',
    BUYCAR5: 'BUYCAR5',
    BUYCAR5_VIDEO: 'BUYCAR5_VIDEO',
    DIOUS: 'DIOUS',
    DIOUS_VIDEO: 'DIOUS_VIDEO',
    JABLE: 'JABLE',
    JABLE_SEARCH: 'JABLE_SEARCH',
    JABLE_VIDEO: 'JABLE_VIDEO',
    JAVLIBRARY: 'JAVLIBRARY',
    JAVTRAILERS: "JavTrailers",
    JAVTRAILERS_SEARCH: "JavTrailers_SEARCH",
    JX444662: 'JX444662',
    JX444662_VIDEO: 'JX444662_VIDEO',
    MEIJUBS: 'MEIJUBS',
    MEIJUBS_VIDEO_PORTAL: 'MEIJUBS_VIDEO',
    MEIJUTTB: 'MEIJUTTB',
    MINGTIAN6: 'MINGTIAN6',
    MM9842: 'MM9842',
    MM9842_VIDEO: 'MM9842_VIDEO',
    NEXUSMODS: 'NEXUSMODS',
    NEXUSMODS_VIDEO_PORTAL: 'NEXUSMODS_VIDEO_PORTAL',
    QINGBEIBAN: 'QINGBEIBAN',
    QXWK: 'QXWK',
    QXWK_VIDEO: 'QXWK_VIDEO',
    STEAM_COMMUNITY: 'STEAM_COMMUNITY',
    STEAM_COMMUNITY_REVIEW: 'STEAM_COMMUNITY_REVIEW',
    STEAM_STORE: 'STEAM_STORE',
    WALLHAVEN: 'WALLHAVEN',
    WUKONGMEIJU: 'WUKONGMEIJU',
    YOUTUBE: "Youtube",
    YOUTUBE_EMBED_VIDEO: 'YOUTUBE_EMBED',
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
        id: SiteIDs["7MM"], baseSiteId: SiteIDs["7MM"],
        origin: "https://7mmtv.tv", hrefRegEx: /^https:\/\/7mmtv\.tv\/.*/,
        siteCategories: [SiteCategories.JAV, SiteCategories.VIDEO_STREAMING]
    }),
    AVGLE: new Site({
        id: SiteIDs.AVGLE, baseSiteId: SiteIDs.AVGLE,
        origin: "https://avgle.com", hrefRegEx: /^https:\/\/avgle\.com\/video\/\w+/,
        siteCategories: [SiteCategories.JAV, SiteCategories.VIDEO_SHARING]
    }),
    BILIBILI: new Site({
        id: SiteIDs.BILIBILI, baseSiteId: SiteIDs.BILIBILI,
        origin: "https://www.bilibili.com", hrefRegEx: /^https:\/\/www\.bilibili\.com\/.*/,
        siteCategories: [SiteCategories.VIDEO_SHARING]
    }),
    BILIBILI_LIVE: new Site({
        id: SiteIDs.BILIBILI_LIVE, baseSiteId: SiteIDs.BILIBILI,
        origin: "https://live.bilibili.com", hrefRegEx: /^https:\/\/live\.bilibili\.com\/.*/,
        siteCategories: [SiteCategories.LIVE_STREAMING]
    }),
    BUYCAR5: new Site({
        id: SiteIDs.BUYCAR5, baseSiteId: SiteIDs.BUYCAR5,
        origin: "https://vod3.buycar5.cn", hrefRegEx: /^https:\/\/vod\d+\.buycar5\.cn/,
        siteCategories: [SiteCategories.VIDEO_HOSTING]
    }),
    DIOUS: new Site({
        id: SiteIDs.DIOUS, baseSiteId: SiteIDs.DIOUS,
        origin: "https://v7.dious.cc", hrefRegEx: /^https:\/\/v7.dious.cc/,
        siteCategories: [SiteCategories.VIDEO_HOSTING]
    }),
    JABLE: new Site({
        id: SiteIDs.JABLE, baseSiteId: SiteIDs.JABLE,
        origin: "https://jable.tv", hrefRegEx: /^https:\/\/jable.tv/,
        siteCategories: [SiteCategories.JAV, SiteCategories.VIDEO_SHARING]
    }),
    JAVLIBRARY: new Site({
        id: SiteIDs.JAVLIBRARY, baseSiteId: SiteIDs.JAVLIBRARY,
        origin: "https://www.javlibrary.com", hrefRegEx: /^https:\/\/www\.javlibrary\.com\/.*/,
        siteCategories: [SiteCategories.JAV, SiteCategories.DATABASE]
    }),
    JAVTRAILERS: new Site({
        id: SiteIDs.JAVTRAILERS, baseSiteId: SiteIDs.JAVTRAILERS,
        origin: "https://javtrailers.com",
        siteCategories: ["Database"]
    }),
    JX444662: new Site({
        id: SiteIDs.JX444662, baseSiteId: SiteIDs.JX444662,
        origin: "https://jx.444662.cn", hrefRegEx: /^https:\/\/jx.444662.cn/,
        siteCategories: [SiteCategories.VIDEO_HOSTING]
    }),
    MEIJUBS: new Site({
        id: SiteIDs.MEIJUBS, baseSiteId: SiteIDs.MEIJUBS,
        origin: "https://www.meijubs.com",
        siteCategories: [SiteCategories.VIDEO_STREAMING]
    }),
    MM9842: new Site({
        id: SiteIDs.MM9842, baseSiteId: SiteIDs.MM9842,
        origin: "https://mm9842.com", hrefRegEx: /^https:\/\/mm9842.com/,
        siteCategories: [SiteCategories.VIDEO_HOSTING]
    }),
    NEXUSMODS: new Site({
        id: SiteIDs.NEXUSMODS, baseSiteId: SiteIDs.NEXUSMODS,
        origin: "https://www.nexusmods.com",
        siteCategories: [SiteCategories.GAMING]
    }),
    QXWK: new Site({
        id: SiteIDs.QXWK, baseSiteId: SiteIDs.QXWK,
        origin: "https://code.qxwk.net", hrefRegEx: /^https:\/\/code.qxwk.net/,
        siteCategories: [SiteCategories.VIDEO_HOSTING]
    }),
    STEAM_COMMUNITY_REVIEW: new Site({
        id: SiteIDs.STEAM_COMMUNITY_REVIEW, baseSiteId: SiteIDs.STEAM_COMMUNITY,
        origin: "https://steamcommunity.com", hrefRegEx: /^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/,
        siteCategories: [SiteCategories.GAMING]
    }),
    STEAM_STORE: new Site({
        id: SiteIDs.STEAM_STORE, baseSiteId: SiteIDs.STEAM_STORE,
        origin: "https://store.steampowered.com", hrefRegEx: /^https:\/\/store\.steampowered\.com\/.*/,
        siteCategories: [SiteCategories.GAMING]
    }),
    WALLHAVEN: new Site({
        id: SiteIDs.WALLHAVEN, baseSiteId: SiteIDs.WALLHAVEN,
        origin: "https://wallhaven.cc", hrefRegEx: /^https:\/\/wallhaven\.cc\/.*/,
        siteCategories: [SiteCategories.IMAGE_HOSTING]
    }),
    WUKONGMEIJU: new Site({
        id: SiteIDs.WUKONGMEIJU, baseSiteId: SiteIDs.WUKONGMEIJU,
        origin: "https://m.wukongmeiju.com",
        siteCategories: [SiteCategories.VIDEO_STREAMING],
        originWhitelist: ["https://code.qxwk.net"]
    }),
    YOUTUBE: new Site({
        id: SiteIDs.YOUTUBE, baseSiteId: SiteIDs.YOUTUBE,
        origin: "https://www.youtube.com",
        siteCategories: [SiteCategories.VIDEO_SHARING]
    }),
    /**
     * Get enum by site id.
     * @param {string} id 
     * @returns {Site|undefined}
     */
    get(id) {
        let baseSiteCandidate;
        for (let i in Sites) {
            let site = Sites[i];
            if (!(site instanceof Site)) continue;
            if (site.id === id) {
                if (site.isBaseSite()) {
                    if (!baseSiteCandidate) baseSiteCandidate = site;
                }
                else return site;
            }
        }
        return baseSiteCandidate;
    }
};

export const DefaultPlayerMetadatas = {
    AVLGE: new PlayerMetadata({
        containerSelector: "div#video-player", controlsSelector: "div.vjs-control-bar",
        playButtonSelector: "button.vjs-play-control",
        fullscreenButtonSelector: "button.vjs-fullscreen-control", topElementSelectors: [".vjs-related-carousel-holder"]
    }),
    DPLAYER: new PlayerMetadata({
        containerSelector: "div#dplayer,div#mvideo,#dpplayer", controlsSelector: ".dplayer-controller",
        playButtonSelector: "button.dplayer-play-icon", volumeButtonSelector: "button.dplayer-volume-icon",
        fullscreenButtonSelector: "button.dplayer-full-icon", webFullscreenButtonSelector: ".dplayer-full-in-icon"
    }),
    JABLE: new PlayerMetadata({
        containerSelector: "div.plyr.plyr--video", controlsSelector: "div.plyr__controls",
        volumeButtonSelector: "button[data-plyr=mute]", fullscreenButtonSelector: "button[data-plyr=fullscreen]"
    }),
    PRISM: new PlayerMetadata({
        containerSelector: "#playerCnt", controlsSelector: ".prism-controlbar",
        playButtonSelector: ".prism-play-btn", fullscreenButtonSelector: ".prism-fullscreen-btn"
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
    AVGLE_VIDEO: new VideoSite({
        id: SiteIDs.AVGLE_VIDEO, baseSiteId: SiteIDs.AVGLE, hrefRegEx: /^https:\/\/avgle\.com\/video\/\w+/,
        defaultPlayerMetadata: DefaultPlayerMetadatas.AVLGE.copy(), videoCategories: [VideoCategories.JAV],
        originWhitelist: ["https://7mmtv.tv"]
    }),
    AVGLE_EMBED_VIDEO: new VideoSite({
        id: SiteIDs.AVGLE_EMBED_VIDEO, baseSiteId: SiteIDs.AVGLE, hrefRegEx: /^https:\/\/avgle\.com\/embed\/\w+$/,
        defaultPlayerMetadata: DefaultPlayerMetadatas.AVLGE.copy(), videoCategories: [VideoCategories.JAV],
        originWhitelist: ["https://7mmtv.tv"]
    }),
    BILIBILI_VIDEO: new VideoSite({
        id: SiteIDs.BILIBILI_VIDEO, baseSiteId: SiteIDs.BILIBILI, hrefRegEx: /^https:\/\/www\.bilibili\.com\/video\/.+/,
        defaultPlayerMetadata: new PlayerMetadata({
            containerSelector: "div.bilibili-player-video-wrap", controlsSelector: ".bilibili-player-video-control-wrap",
            playButtonSelector: "div.bilibili-player-video-btn-start", volumeButtonSelector: "button.bilibili-player-iconfont-volume",
            fullscreenButtonSelector: "div.bilibili-player-video-btn-fullscreen button", webFullscreenButtonSelector: "div.bilibili-player-video-web-fullscreen button"
        })
    }),
    BILIBILI_BANGUMI_VIDEO: new VideoSite({
        id: SiteIDs.BILIBILI_BANGUMI_VIDEO, baseSiteId: SiteIDs.BILIBILI, hrefRegEx: /^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/,
        defaultPlayerMetadata: new PlayerMetadata({
            containerSelector: "div.bpx-player-video-area", controlsSelector: ".bpx-player-control-wrap",
            playButtonSelector: "div.squirtle-video-start", volumeButtonSelector: "div.squirtle-volume-icon",
            fullscreenButtonSelector: "div.squirtle-video-fullscreen", webFullscreenButtonSelector: "div.squirtle-video-pagefullscreen"
        })
    }),
    BUYCAR5_VIDEO: new VideoSite({
        id: SiteIDs.BUYCAR5_VIDEO, baseSiteId: SiteIDs.BUYCAR5, hrefRegEx: /^https:\/\/vod\d+\.buycar5\.cn/,
        defaultPlayerMetadata: DefaultPlayerMetadatas.DPLAYER.copy(),
        originWhitelist: ["https://www.meijuttb.com", 'https://www.meijubs.com']
    }),
    DIOUS_VIDEO: new VideoSite({
        id: SiteIDs.DIOUS_VIDEO, baseSiteId: SiteIDs.DIOUS, hrefRegEx: /^https:\/\/v7.dious.cc/,
        defaultPlayerMetadata: DefaultPlayerMetadatas.DPLAYER.copy(),
        originWhitelist: ["https://www.meijuttb.com", 'https://www.meijubs.com']
    }),
    JABLE_VIDEO: new VideoSite({
        id: SiteIDs.JABLE_VIDEO, baseSiteId: SiteIDs.JABLE, hrefRegEx: /^https:\/\/jable.tv\/videos\/.+/,
        defaultPlayerMetadata: DefaultPlayerMetadatas.JABLE.copy(), videoCategories: [VideoCategories.JAV]
    }),
    JX444662_VIDEO: new VideoSite({
        id: SiteIDs.JX444662_VIDEO, baseSiteId: SiteIDs.JX444662, hrefRegEx: /^https:\/\/jx.444662.cn/,
        defaultPlayerMetadata: new PlayerMetadata({
            containerSelector: "div#playerCnt", controlsSelector: "div.prism-controlbar"
        }),
        originWhitelist: ["https://www.meijuttb.com", 'https://www.meijubs.com']
    }),
    MM9842_VIDEO: new VideoSite({
        id: SiteIDs.MM9842_VIDEO, baseSiteId: SiteIDs.MM9842, hrefRegEx: /^https:\/\/mm9842.com/,
        defaultPlayerMetadata: new PlayerMetadata({
            containerSelector: "div.jw-wrapper", controlsSelector: "div.jw-controls",
            volumeButtonSelector: "div.jw-icon-volume", fullscreenButtonSelector: "div.jw-icon-fullscreen"
        }),
        originWhitelist: ["https://7mmtv.tv"]
    }),
    QXWK_VIDEO: new VideoSite({
        id: SiteIDs.QXWK_VIDEO, baseSiteId: SiteIDs.QXWK, hrefRegEx: /^https:\/\/code.qxwk.net/,
        defaultPlayerMetadata: DefaultPlayerMetadatas.DPLAYER.copy(),
        originWhitelist: ["https://m.wukongmeiju.com"]
    }),
    YOUTUBE_EMBED_VIDEO: new VideoSite({
        id: SiteIDs.YOUTUBE_EMBED_VIDEO, baseSiteId: SiteIDs.YOUTUBE, hrefRegEx: /^https:\/\/www.youtube.com\/embed\/[\w-]+$/,
        defaultPlayerMetadata: new PlayerMetadata({
            containerSelector: "div#player", controlsSelector: ".ytp-chrome-bottom", topElementSelectors: [".ytp-pause-overlay"],
            playButtonSelector: "button.ytp-play-button", volumeButtonSelector: "button.ytp-mute-button",
            fullscreenButtonSelector: "button.ytp-fullscreen-button"
        }),
        originWhitelist: ['https://www.nexusmods.com']
    }),
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
    "7MM_VIDEO_PORTAL": new VideoPortalSite({
        id: SiteIDs["7MM_VIDEO_PORTAL"], baseSiteId: SiteIDs["7MM"], hrefRegEx: /^https:\/\/7mmtv\.tv\/.+/,
        videoCategories: [VideoCategories.JAV],
        originWhitelist: ["https://mm9842.com", "https://avgle.com"]
    }),
    MEIJUBS_VIDEO_PORTAL: new VideoPortalSite({
        id: SiteIDs.MEIJUBS_VIDEO_PORTAL, baseSiteId: SiteIDs.MEIJUBS, hrefRegEx: /^https:\/\/www\.meijubs\.com\/play\/.+/,
        videoCategories: [VideoCategories.TV_SERIES],
        originWhitelist: ["https://vod3.buycar5.cn", "https://jx.444662.cn", "https://vod4.buycar5.cn", "https://v7.dious.cc"]
    }),
    NEXUSMODS_VIDEO_PORTAL: new VideoPortalSite({
        id: SiteIDs.NEXUSMODS_VIDEO_PORTAL, baseSiteId: SiteIDs.NEXUSMODS, hrefRegEx: /^https:\/\/www\.nexusmods\.com\/[^/]+\/mods\/\d+/,
        videoCategories: [SiteCategories.GAMING],
        originWhitelist: ["https://www.youtube.com"]
    }),
    /**
     * Get enum by site id.
     * @param {string} id 
     * @returns {VideoPortalSite|undefined}
     */
    get(id) {
        for (let i in VideoPortalSites) {
            if (VideoPortalSites[i].id === id) return VideoPortalSites[i];
        }
    }
};
/** @enum {SearchSite} */
export const SearchSites = {
    '7MM_SEARCH': new SearchSite(SiteIDs['7MM_SEARCH'], SiteIDs['7MM'], /^https:\/\/7mmtv\.tv\/\w+\/\w+_search\/all\/([^/]+)/,
        '.breadcrumb-heading-row li:last-child a'),
    JABLE_SEARCH: new SearchSite(SiteIDs.JABLE_SEARCH, SiteIDs.JABLE, /^https:\/\/jable\.tv\/search\/([^/]+)/),
    JAVTRAILERS_SEARCH: new SearchSite(SiteIDs.JAVTRAILERS_SEARCH, SiteIDs.JAVTRAILERS, /^https:\/\/javtrailers\.com\/search\/([^/]+)/)
}