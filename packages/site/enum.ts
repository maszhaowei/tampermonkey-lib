import { Site, VideoSite, VideoPortalSite, SearchSite } from "./class";

export const SiteCategories = {
    COMPUTER_HARDWARE: "Computer Hardware",
    DATABASE: "Database",
    DICTIONARY: "Dictionary",
    GAMING: "Gaming",
    IMAGE_HOSTING: "Image Hosting",
    JAV: "JAV",
    LIVE_STREAMING: "Live Streaming",
    VIDEO_HOSTING: "Video Hosting",
    VIDEO_SHARING: "Video Sharing",
    VIDEO_STREAMING: "Video Streaming",
    WIKI: "Wiki"
} as const;
export const VideoCategories = {
    GAMING: "Gaming",
    JAV: "JAV",
    TV_SERIES: "TV Series",
    MOVIE: "Movie",
    TRAILERS: "Trailers",
    PORNOGRAPHIC_FILM: "Pornographic Film"
} as const;

export const SiteIDs = {
    '18COMIC': '18comic',
    '7MM': '7MM',
    '7MM_VIDEO_PORTAL': '7MM_VIDEO',
    '7MM_SEARCH': '7MM_SEARCH',
    APP_SAMPLE: 'APP_SAMPLE',
    APP_SAMPLE_GI_MAP: 'APP_SAMPLE_GI_MAP',
    AVGLE: 'AVGLE',
    AVGLE_VIDEO: 'AVGLE_VIDEO',
    AVGLE_EMBED_VIDEO: 'AVGLE_EMBED',
    aoxtv_八戒云: 'aoxtv',
    BILIBILI: 'BILIBILI',
    BILIBILI_VIDEO: 'BILIBILI_VIDEO',
    BILIBILI_BANGUMI_VIDEO: 'BILIBILI_BANGUMI_VIDEO',
    BILIBILI_LIVE: 'BILIBILI_LIVE',
    BILIBILI_LIVE_LOTTERY: 'BILIBILI_LIVE_LOTTERY',
    BILIBILI_MEDAL_CENTER: 'BILIBILI_MEDAL_CENTER',
    BILIBILI_SPACE: 'Bilibili Space',
    bunediy_小度云: 'bunediy',
    BUYCAR5: 'BUYCAR5',
    BUYCAR5_VIDEO: 'BUYCAR5_VIDEO',
    BWIKI: 'BWIKI',
    DIOUS: 'DIOUS',
    DIOUS_VIDEO: 'DIOUS_VIDEO',
    FANDOM: 'FANDOM',
    FANDOM_VIDEO_PORTAL: 'FANDOM_VIDEO_PORTAL',
    FANDOM_WIKI: 'Fandom Wiki',
    HACG: 'hacg',
    HACG_BLOG: 'Hacg Blog',
    hongniujiexi_红牛云: 'hongniujiexi',
    huishij_天空云: 'huishij',
    JABLE: 'JABLE',
    JABLE_SEARCH: 'JABLE_SEARCH',
    JABLE_VIDEO: 'JABLE_VIDEO',
    JAVLIBRARY: 'JAVLIBRARY',
    JAVTRAILERS: 'JavTrailers',
    JAVTRAILERS_SEARCH: 'JavTrailers_SEARCH',
    JAVTRAILERS_VIDEO: 'JAVTRAILERS_VIDEO',
    JX444662: 'JX444662',
    JX444662_VIDEO: 'JX444662_VIDEO',
    jxbdzyw_百度云: 'jxbdzyw',
    kuaibofang_大度云: 'kuaibofang_大度云',
    MEIJUBS: 'MEIJUBS',
    MEIJUBS_VIDEO_PORTAL: 'MEIJUBS_VIDEO_PORTAL',
    MEIJUTTB: 'MEIJUTTB',
    MINGTIAN6: 'MINGTIAN6',
    MIHOYO: 'MIHOYO',
    MIHOYO_YS_MAP: 'MIHOYO_YS_MAP',
    MM9842: 'MM9842',
    MM9842_VIDEO: 'MM9842_VIDEO',
    MSI: 'MSI',
    MSI_MOTHERBOARD_SUPPORT: 'MSI Motherboard Support',
    NEXUSMODS: 'NEXUSMODS',
    NEXUSMODS_VIDEO_PORTAL: 'NEXUSMODS_VIDEO_PORTAL',
    QINGBEIBAN: 'QINGBEIBAN',
    QXWK: 'QXWK',
    QXWK_VIDEO: 'QXWK_VIDEO',
    STEAM_COMMUNITY: 'STEAM_COMMUNITY',
    STEAM_COMMUNITY_REVIEW: 'STEAM_COMMUNITY_REVIEW',
    STEAM_STORE: 'STEAM_STORE',
    STREAMTAPE: 'Streamtape',
    STREAMTAPE_VIDEO: 'Streamtape',
    WALLHAVEN: 'WALLHAVEN',
    wnacg: 'wnacg',
    WUKONGMEIJU: 'WUKONGMEIJU',
    YOUTUBE: 'Youtube',
    YOUTUBE_EMBED_VIDEO: 'YOUTUBE_EMBED',
    YOUDAO: 'Youdao',
    YOUDAO_DICT: 'Youdao Dictionary'
} as const;

export const Sites: Partial<Record<keyof typeof SiteIDs, Site>> = {
    '18COMIC': new Site({
        id: SiteIDs["18COMIC"],
        baseSiteId: SiteIDs["18COMIC"],
        hrefRegEx: /^https:\/\/18comic\.(org|vip)\/.*/,
        additionalInfo: {
            paginationInfo: {
                prevBtnSelector: 'ul.pagination li:nth-child(1) a',
                nextBtnSelector: 'ul.pagination a.prevnext'
            }
        }
    }),
    '7MM': new Site({
        id: SiteIDs['7MM'], baseSiteId: SiteIDs['7MM'],
        origin: 'https://7mmtv.tv', hrefRegEx: /^https:\/\/7mmtv\.tv\/.*/,
        additionalInfo: {
            paginationInfo: {
                prevBtnSelector: 'li.previous-next:first-child a,li.previous-next:nth-child(2) a',
                nextBtnSelector: 'li.current+li a'
            }
        },
        siteCategories: [SiteCategories.JAV, SiteCategories.VIDEO_STREAMING]
    }),
    APP_SAMPLE: new Site({
        id: SiteIDs.APP_SAMPLE, baseSiteId: SiteIDs.APP_SAMPLE,
        origin: 'https://www.appsample.com', hrefRegEx: /^https:\/\/www\.appsample\.com/
    }),
    APP_SAMPLE_GI_MAP: new Site({
        id: SiteIDs.APP_SAMPLE_GI_MAP, baseSiteId: SiteIDs.APP_SAMPLE,
        hrefRegEx: /^https:\/\/genshin-impact-map.appsample.com\//
    }),
    AVGLE: new Site({
        id: SiteIDs.AVGLE, baseSiteId: SiteIDs.AVGLE,
        origin: 'https://avgle.com', hrefRegEx: /^https:\/\/avgle\.com\/video\/\w+/,
        siteCategories: [SiteCategories.JAV, SiteCategories.VIDEO_SHARING]
    }),
    BILIBILI: new Site({
        id: SiteIDs.BILIBILI, baseSiteId: SiteIDs.BILIBILI,
        origin: 'https://www.bilibili.com', hrefRegEx: /^https:\/\/www\.bilibili\.com\/.*/,
        siteCategories: [SiteCategories.VIDEO_SHARING]
    }),
    BILIBILI_LIVE: new Site({
        id: SiteIDs.BILIBILI_LIVE, baseSiteId: SiteIDs.BILIBILI,
        origin: 'https://live.bilibili.com', hrefRegEx: /^https:\/\/live\.bilibili\.com\/\d+/,
        siteCategories: [SiteCategories.LIVE_STREAMING]
    }),
    BILIBILI_LIVE_LOTTERY: new Site({
        id: SiteIDs.BILIBILI_LIVE_LOTTERY, baseSiteId: SiteIDs.BILIBILI,
        origin: 'https://live.bilibili.com', hrefRegEx: /^https:\/\/live\.bilibili\.com\/p\/html\/live-lottery\/anchor-join\.html/
    }),
    BILIBILI_MEDAL_CENTER: new Site({
        id: SiteIDs.BILIBILI_MEDAL_CENTER, baseSiteId: SiteIDs.BILIBILI,
        hrefRegEx: /^https:\/\/link\.bilibili\.com\/.+\/user-center\/wearing-center\/my-medal/,
        additionalInfo: {
            paginationInfo: {
                currentBtnSelector: '.link-panigation li.selected'
            }
        }
    }),
    BILIBILI_SPACE: new Site({
        id: SiteIDs.BILIBILI_SPACE,
        baseSiteId: 'BILIBILI',
        hrefRegEx: /^https:\/\/space\.bilibili\.com\/\d+/
    }),
    BUYCAR5: new Site({
        id: SiteIDs.BUYCAR5, baseSiteId: SiteIDs.BUYCAR5,
        origin: 'https://vod3.buycar5.cn', hrefRegEx: /^https:\/\/vod\d+\.buycar5\.cn/,
        siteCategories: [SiteCategories.VIDEO_HOSTING]
    }),
    BWIKI: new Site({
        id: SiteIDs.BWIKI, baseSiteId: SiteIDs.BWIKI,
        hrefRegEx: /^https:\/\/wiki\.biligame\.com\/.+/,
        additionalInfo: {
            paginationInfo: {
                currentBtnSelector: 'span[current]'
            }
        }
    }),
    DIOUS: new Site({
        id: SiteIDs.DIOUS, baseSiteId: SiteIDs.DIOUS,
        origin: 'https://v7.dious.cc', hrefRegEx: /^https:\/\/v7.dious.cc/,
        siteCategories: [SiteCategories.VIDEO_HOSTING]
    }),
    FANDOM_WIKI: new Site({
        id: SiteIDs.FANDOM_WIKI, baseSiteId: SiteIDs.FANDOM,
        hrefRegEx: /^https:\/\/\w+\.fandom\.com\/wiki\/.+/
    }),
    HACG_BLOG: new Site({
        id: 'Hacg Blog',
        baseSiteId: 'hacg',
        hrefRegEx: /^https:\/\/(www\.)?hacg\.[a-z]+\/wp\/.+/,
        additionalInfo: {
            paginationInfo: {
                prevBtnSelector: 'a.previouspostslink',
                nextBtnSelector: 'a.nextpostslink',
                lastBtnSelector: 'a.last'
            }
        }
    }),
    JABLE: new Site({
        id: SiteIDs.JABLE, baseSiteId: SiteIDs.JABLE,
        origin: 'https://jable.tv', hrefRegEx: /^https:\/\/jable.tv/,
        siteCategories: [SiteCategories.JAV, SiteCategories.VIDEO_SHARING],
        additionalInfo: {
            paginationInfo: {
                currentBtnSelector: '.pagination span.active',
                currentWrapperSelector: 'li',
                currentWrapperDescendantSelector: 'a',
                firstBtnSelector: '.pagination li:first-child a',
                lastBtnSelector: '.pagination li:last-child a'
            }
        }
    }),
    JAVLIBRARY: new Site({
        id: SiteIDs.JAVLIBRARY, baseSiteId: SiteIDs.JAVLIBRARY,
        origin: 'https://www.javlibrary.com', hrefRegEx: /^https:\/\/www\.javlibrary\.com\/.*/,
        siteCategories: [SiteCategories.JAV, SiteCategories.DATABASE],
        additionalInfo: {
            paginationInfo: {
                firstBtnSelector: 'a.first',
                prevBtnSelector: 'a.prev',
                nextBtnSelector: 'a.next',
                lastBtnSelector: 'a.last'
            }
        }
    }),
    JAVTRAILERS: new Site({
        id: SiteIDs.JAVTRAILERS, baseSiteId: SiteIDs.JAVTRAILERS,
        origin: 'https://javtrailers.com', hrefRegEx: /^https:\/\/javtrailers\.com/,
        siteCategories: ['Database']
    }),
    JX444662: new Site({
        id: SiteIDs.JX444662, baseSiteId: SiteIDs.JX444662,
        origin: 'https://jx.444662.cn', hrefRegEx: /^https:\/\/jx.444662.cn/,
        siteCategories: [SiteCategories.VIDEO_HOSTING]
    }),
    MEIJUBS: new Site({
        id: SiteIDs.MEIJUBS, baseSiteId: SiteIDs.MEIJUBS,
        origin: 'https://www.meijubs.com', hrefRegEx: /^https:\/\/www.meijubs.com/,
        siteCategories: [SiteCategories.VIDEO_STREAMING]
    }),
    MIHOYO: new Site({
        id: SiteIDs.MIHOYO, baseSiteId: SiteIDs.MIHOYO,
        origin: 'https://www.mihoyo.com', hrefRegEx: /https:\/\/www.mihoyo.com/
    }),
    MIHOYO_YS_MAP: new Site({
        id: SiteIDs.MIHOYO_YS_MAP, baseSiteId: SiteIDs.MIHOYO,
        hrefRegEx: /https:\/\/webstatic-sea.mihoyo.com\/app\/ys-map-sea\//
    }),
    MM9842: new Site({
        id: SiteIDs.MM9842, baseSiteId: SiteIDs.MM9842,
        origin: 'https://mm9842.com', hrefRegEx: /^https:\/\/mm9842.com/,
        siteCategories: [SiteCategories.VIDEO_HOSTING]
    }),
    MSI_MOTHERBOARD_SUPPORT: new Site({
        id: SiteIDs.MSI_MOTHERBOARD_SUPPORT, baseSiteId: 'MSI',
        hrefRegEx: /^https:\/\/\w+.msi.com\/Motherboard\/[^/]+\/support/
    }),
    NEXUSMODS: new Site({
        id: SiteIDs.NEXUSMODS, baseSiteId: SiteIDs.NEXUSMODS,
        origin: 'https://www.nexusmods.com', hrefRegEx: /https:\/\/www.nexusmods.com/,
        siteCategories: [SiteCategories.GAMING],
        additionalInfo: {
            paginationInfo: {
                currentBtnSelector: 'a.page-selected',
                currentWrapperSelector: 'li',
                currentWrapperDescendantSelector: 'a'
            }
        }
    }),
    QXWK: new Site({
        id: SiteIDs.QXWK, baseSiteId: SiteIDs.QXWK,
        origin: 'https://code.qxwk.net', hrefRegEx: /^https:\/\/code.qxwk.net/,
        siteCategories: [SiteCategories.VIDEO_HOSTING]
    }),
    STEAM_COMMUNITY_REVIEW: new Site({
        id: SiteIDs.STEAM_COMMUNITY_REVIEW, baseSiteId: SiteIDs.STEAM_COMMUNITY,
        origin: 'https://steamcommunity.com', hrefRegEx: /^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/,
        siteCategories: [SiteCategories.GAMING]
    }),
    STEAM_STORE: new Site({
        id: SiteIDs.STEAM_STORE, baseSiteId: SiteIDs.STEAM_STORE,
        origin: 'https://store.steampowered.com', hrefRegEx: /^https:\/\/store\.steampowered\.com\/.*/,
        siteCategories: [SiteCategories.GAMING]
    }),
    WALLHAVEN: new Site({
        id: SiteIDs.WALLHAVEN, baseSiteId: SiteIDs.WALLHAVEN,
        origin: 'https://wallhaven.cc', hrefRegEx: /^https:\/\/wallhaven\.cc\/.*/,
        siteCategories: [SiteCategories.IMAGE_HOSTING]
    }),
    wnacg: new Site({
        id: SiteIDs.wnacg,
        baseSiteId: 'wnacg',
        hrefRegEx: /https:\/\/www\.wnacg\.com/,
        additionalInfo: {
            paginationInfo: {
                prevBtnSelector: '.newpage .btntuzao:first-child,span.prev a',
                nextBtnSelector: '.newpage .btntuzao:last-child,span.next a'
            }
        }
    }),
    WUKONGMEIJU: new Site({
        id: SiteIDs.WUKONGMEIJU, baseSiteId: SiteIDs.WUKONGMEIJU,
        origin: 'https://m.wukongmeiju.com', hrefRegEx: /https:\/\/m.wukongmeiju.com/,
        siteCategories: [SiteCategories.VIDEO_STREAMING],
        originWhitelist: ['https://code.qxwk.net']
    }),
    YOUDAO_DICT: new Site({
        id: SiteIDs.YOUDAO_DICT,
        baseSiteId: SiteIDs.YOUDAO,
        hrefRegEx: /^https:\/\/www\.youdao\.com\/w\/.+/,
        siteCategories: [
            'Dictionary'
        ],
        additionalInfo: {
            inputFieldSelector: '#query'
        }
    }),
    YOUTUBE: new Site({
        id: SiteIDs.YOUTUBE, baseSiteId: SiteIDs.YOUTUBE,
        origin: 'https://www.youtube.com', hrefRegEx: /https:\/\/www\.youtube\.com/,
        siteCategories: [SiteCategories.VIDEO_SHARING]
    })
};

export const DefaultPlayerMetadatas = {
    VJS: {
        containerSelector: "div.video-js", controlsSelector: "div.vjs-control-bar",
        playButtonSelector: "button.vjs-play-control",
        fullscreenButtonSelector: "button.vjs-fullscreen-control", delegateIgnoreSelectors: [".vjs-related-carousel-holder"]
    },
    DPLAYER: {
        containerSelector: "div.dplayer", controlsSelector: ".dplayer-controller",
        playButtonSelector: "button.dplayer-play-icon", muteButtonSelector: "button.dplayer-volume-icon",
        fullscreenButtonSelector: "button.dplayer-full-icon", webFullscreenButtonSelector: ".dplayer-full-in-icon"
    },
    JABLE: {
        containerSelector: "div.plyr.plyr--video", controlsSelector: "div.plyr__controls",
        muteButtonSelector: "button[data-plyr=mute]", fullscreenButtonSelector: "button[data-plyr=fullscreen]"
    },
    PRISM: {
        containerSelector: ".prism-player", controlsSelector: ".prism-controlbar",
        playButtonSelector: ".prism-play-btn", fullscreenButtonSelector: ".prism-fullscreen-btn"
    }
}

/**
 * @enum {VideoSite} 
 */
export const VideoSites: Partial<Record<keyof typeof SiteIDs, VideoSite>> = {
    aoxtv_八戒云: new VideoSite({
        id: SiteIDs.aoxtv_八戒云, baseSiteId: SiteIDs.aoxtv_八戒云,
        hrefRegEx: /https:\/\/zy.aoxtv.com/,
        originWhitelist: [
            'https://www.meijubs.com'
        ], playerMetadata: DefaultPlayerMetadatas.PRISM
    }),
    AVGLE_VIDEO: new VideoSite({
        id: SiteIDs.AVGLE_VIDEO, baseSiteId: SiteIDs.AVGLE, hrefRegEx: /^https:\/\/avgle\.com\/video\/\w+/,
        playerMetadata: DefaultPlayerMetadatas.VJS, videoCategories: [VideoCategories.JAV],
        originWhitelist: ["https://7mmtv.tv"]
    }),
    AVGLE_EMBED_VIDEO: new VideoSite({
        id: SiteIDs.AVGLE_EMBED_VIDEO, baseSiteId: SiteIDs.AVGLE, hrefRegEx: /^https:\/\/avgle\.com\/embed\/\w+$/,
        playerMetadata: DefaultPlayerMetadatas.VJS, videoCategories: [VideoCategories.JAV],
        originWhitelist: ["https://7mmtv.tv"]
    }),
    BILIBILI_VIDEO: new VideoSite({
        id: SiteIDs.BILIBILI_VIDEO, baseSiteId: SiteIDs.BILIBILI, hrefRegEx: /^https:\/\/www\.bilibili\.com\/video\/.+/,
        playerMetadata: {
            containerSelector: "div.bilibili-player-video-wrap", controlsSelector: ".bilibili-player-video-control-wrap",
            playButtonSelector: "div.bilibili-player-video-btn-start", muteButtonSelector: "button.bilibili-player-iconfont-volume",
            fullscreenButtonSelector: "div.bilibili-player-video-btn-fullscreen button", webFullscreenButtonSelector: "div.bilibili-player-video-web-fullscreen button",
            delegateIgnoreSelectors: [
                '.bilibili - player - hotkey - panel - container.active',
                '.bilibili - player - video - info - container.active',
                '.bilibili - player - drag - mask - close',
                '.bilibili - player - video - top',
                '.bilibili - player - dm - tip - wrap~div'
            ]
        },
    }),
    BILIBILI_BANGUMI_VIDEO: new VideoSite({
        id: SiteIDs.BILIBILI_BANGUMI_VIDEO, baseSiteId: SiteIDs.BILIBILI, hrefRegEx: /^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/,
        playerMetadata: {
            containerSelector: "div.bpx-player-video-area", controlsSelector: ".bpx-player-control-wrap",
            playButtonSelector: "div.squirtle-video-start", muteButtonSelector: "div.squirtle-volume-icon",
            fullscreenButtonSelector: "div.squirtle-video-fullscreen", webFullscreenButtonSelector: "div.squirtle-video-pagefullscreen",
            delegateIgnoreSelectors: [
                '.bpx - player - top - wrap',
                '.bpx - player - dialog - wrap~div'
            ],
            delegateIgnoreEvents: [
                {
                    selector: '.bpx-player-video-perch',
                    eventTypes: ['contextmenu']
                }
            ]
        }
    }),
    bunediy_小度云: new VideoSite({
        id: SiteIDs.bunediy_小度云, baseSiteId: SiteIDs.bunediy_小度云,
        hrefRegEx: /^https:\/\/sod\.bunediy\.com/,
        originWhitelist: [
            'https://www.meijubs.com'
        ],
        playerMetadata: DefaultPlayerMetadatas.DPLAYER
    }),
    BUYCAR5_VIDEO: new VideoSite({
        id: SiteIDs.BUYCAR5_VIDEO, baseSiteId: SiteIDs.BUYCAR5, hrefRegEx: /^https:\/\/vod\d+\.buycar5\.cn/,
        playerMetadata: DefaultPlayerMetadatas.DPLAYER,
        originWhitelist: ["https://www.meijuttb.com", 'https://www.meijubs.com']
    }),
    DIOUS_VIDEO: new VideoSite({
        id: SiteIDs.DIOUS_VIDEO, baseSiteId: SiteIDs.DIOUS, hrefRegEx: /^https:\/\/v7.dious.cc/,
        playerMetadata: DefaultPlayerMetadatas.DPLAYER,
        originWhitelist: ["https://www.meijuttb.com", 'https://www.meijubs.com']
    }),
    hongniujiexi_红牛云: new VideoSite({
        id: SiteIDs.hongniujiexi_红牛云, baseSiteId: SiteIDs.hongniujiexi_红牛云,
        hrefRegEx: /https:\/\/www.hongniujiexi.com/,
        originWhitelist: [
            'https://www.meijubs.com'
        ], playerMetadata: DefaultPlayerMetadatas.DPLAYER
    }),
    huishij_天空云: new VideoSite({
        id: SiteIDs.huishij_天空云, baseSiteId: SiteIDs.huishij_天空云,
        hrefRegEx: /https:\/\/jx.huishij.com/,
        originWhitelist: [
            'https://www.meijubs.com'
        ],
        playerMetadata: DefaultPlayerMetadatas.PRISM
    }),
    JABLE_VIDEO: new VideoSite({
        id: SiteIDs.JABLE_VIDEO, baseSiteId: SiteIDs.JABLE, hrefRegEx: /^https:\/\/jable.tv\/videos\/.+/,
        playerMetadata: DefaultPlayerMetadatas.JABLE, videoCategories: [VideoCategories.JAV]
    }),
    JAVTRAILERS_VIDEO: new VideoSite({
        id: SiteIDs.JAVTRAILERS_VIDEO, baseSiteId: SiteIDs.JAVTRAILERS,
        hrefRegEx: /^https:\/\/javtrailers\.com\/video\/[^/]+/, playerMetadata: DefaultPlayerMetadatas.VJS,
        videoCategories: [
            VideoCategories.JAV,
            VideoCategories.TRAILERS
        ]
    }),
    JX444662_VIDEO: new VideoSite({
        id: SiteIDs.JX444662_VIDEO, baseSiteId: SiteIDs.JX444662, hrefRegEx: /^https:\/\/jx.444662.cn/,
        playerMetadata: {
            containerSelector: "div#playerCnt", controlsSelector: "div.prism-controlbar"
        },
        originWhitelist: ["https://www.meijuttb.com", 'https://www.meijubs.com']
    }),
    jxbdzyw_百度云: new VideoSite({
        id: SiteIDs.jxbdzyw_百度云, baseSiteId: SiteIDs.jxbdzyw_百度云,
        hrefRegEx: /^https:\/\/jx\.jxbdzyw\.com/,
        originWhitelist: [
            'https://www.meijubs.com'
        ],
        playerMetadata: DefaultPlayerMetadatas.PRISM
    }),
    kuaibofang_大度云: new VideoSite({
        id: SiteIDs.kuaibofang_大度云, baseSiteId: SiteIDs.kuaibofang_大度云,
        hrefRegEx: /https:\/\/hls.kuaibofang.com/,
        originWhitelist: [
            'https://www.meijubs.com'
        ], playerMetadata: DefaultPlayerMetadatas.PRISM
    }),
    MM9842_VIDEO: new VideoSite({
        id: SiteIDs.MM9842_VIDEO, baseSiteId: SiteIDs.MM9842, hrefRegEx: /^https:\/\/mm9842.com/,
        playerMetadata: {
            containerSelector: "div.jw-wrapper", controlsSelector: "div.jw-controls"
        },
        originWhitelist: ["https://7mmtv.tv"]
    }),
    QXWK_VIDEO: new VideoSite({
        id: SiteIDs.QXWK_VIDEO, baseSiteId: SiteIDs.QXWK, hrefRegEx: /^https:\/\/code.qxwk.net/,
        playerMetadata: DefaultPlayerMetadatas.DPLAYER,
        originWhitelist: ["https://m.wukongmeiju.com"]
    }),
    STREAMTAPE_VIDEO: new VideoSite({
        id: SiteIDs.STREAMTAPE_VIDEO, baseSiteId: SiteIDs.STREAMTAPE,
        hrefRegEx: /https:\/\/streamtape\.com/,
        originWhitelist: [
            'https://7mmtv.tv'
        ],
        playerMetadata: DefaultPlayerMetadatas.JABLE
    }),
    YOUTUBE_EMBED_VIDEO: new VideoSite({
        id: SiteIDs.YOUTUBE_EMBED_VIDEO, baseSiteId: SiteIDs.YOUTUBE, hrefRegEx: /^https:\/\/www.youtube.com\/embed\/[\w-]+/,
        playerMetadata: {
            containerSelector: "div#player", controlsSelector: ".ytp-chrome-bottom",
            playButtonSelector: "button.ytp-play-button", muteButtonSelector: "button.ytp-mute-button",
            fullscreenButtonSelector: "button.ytp-fullscreen-button",
            delegateIgnoreSelectors: [
                '.ytp-pause-overlay',
                '.ytp - impression - link',
                '.ytp - caption - window - container'
            ]
        },
        originWhitelist: ['https://www.nexusmods.com', 'https://genshin-impact-map.appsample.com', 'https://genshin-impact.fandom.com']
    })
};
export const VideoPortalSites: Partial<Record<keyof typeof SiteIDs, VideoPortalSite>> = {
    "7MM_VIDEO_PORTAL": new VideoPortalSite({
        id: SiteIDs["7MM_VIDEO_PORTAL"], baseSiteId: SiteIDs["7MM"], hrefRegEx: /^https:\/\/7mmtv\.tv\/.+/,
        videoCategories: [VideoCategories.PORNOGRAPHIC_FILM],
        originWhitelist: ["https://mm9842.com", "https://avgle.com", "https://streamtape.com"]
    }),
    APP_SAMPLE_GI_MAP: new VideoPortalSite({
        id: SiteIDs.APP_SAMPLE_GI_MAP, baseSiteId: SiteIDs.APP_SAMPLE,
        hrefRegEx: /^https:\/\/genshin-impact-map.appsample.com\//,
        videoCategories: [VideoCategories.GAMING],
        originWhitelist: ["https://www.youtube.com"]
    }),
    FANDOM_VIDEO_PORTAL: new VideoPortalSite({
        id: SiteIDs.FANDOM_VIDEO_PORTAL, baseSiteId: SiteIDs.FANDOM, hrefRegEx: /^https:\/\/.+\.fandom\.com\/wiki\/.+/,
        originWhitelist: ["https://www.youtube.com"]
    }),
    MEIJUBS_VIDEO_PORTAL: new VideoPortalSite({
        id: SiteIDs.MEIJUBS_VIDEO_PORTAL, baseSiteId: SiteIDs.MEIJUBS, hrefRegEx: /^https:\/\/www\.meijubs\.com\/play\/.+/,
        videoCategories: [VideoCategories.TV_SERIES], pathIframeSelectors: ['iframe#cciframe'],
        originWhitelist: ["https://vod3.buycar5.cn", "https://jx.444662.cn", "https://vod4.buycar5.cn", "https://v7.dious.cc",
            "https://jx.jxbdzyw.com",
            "https://sod.bunediy.com",
            "https://jx.huishij.com",
            "https://zy.aoxtv.com",
            "https://www.hongniujiexi.com",
            "https://hls.kuaibofang.com"],
        prevEpisodeSelector: "i.icon-rewind1",
        nextEpisodeSelector: "i.icon-fastforward"
    }),
    NEXUSMODS_VIDEO_PORTAL: new VideoPortalSite({
        id: SiteIDs.NEXUSMODS_VIDEO_PORTAL, baseSiteId: SiteIDs.NEXUSMODS, hrefRegEx: /^https:\/\/www\.nexusmods\.com\/[^/]+\/mods\/\d+/,
        videoCategories: [VideoCategories.GAMING],
        originWhitelist: ["https://www.youtube.com"]
    })
};
export const SearchSites: Partial<Record<keyof typeof SiteIDs, SearchSite>> = {
    "7MM_SEARCH": new SearchSite(SiteIDs['7MM_SEARCH'], SiteIDs['7MM'], /^https:\/\/7mmtv\.tv\/\w+\/\w+_search\/all\/([^/]+)/,
        '.breadcrumb-heading-row li:last-child a'),
    JABLE_SEARCH: new SearchSite(SiteIDs.JABLE_SEARCH, SiteIDs.JABLE, /^https:\/\/jable\.tv\/search\/([^/]+)/),
    JAVTRAILERS_SEARCH: new SearchSite(SiteIDs.JAVTRAILERS_SEARCH, SiteIDs.JAVTRAILERS, /^https:\/\/javtrailers\.com\/search\/([^/]+)/)
}