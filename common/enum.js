import { Site } from "./class";
/** typedef KeyboardKeyCode
 * @typedef {object} KeyboardKeyCode
 * @property {string} code
 * @property {string} key
 */
/**
 * @enum {KeyboardKeyCode}
 */
 export const KeyboardKeyCodes = {
    Space: { code: 'Space', key: ' ' },
    Enter: { code: 'Enter', key: 'Enter' },
    Escape: { code: 'Escape', key: 'Escape' },
    KeyC: { code: 'KeyC', key: 'c' },
    KeyD: { code: 'KeyD', key: 'd' },
    KeyF: { code: 'KeyF', key: 'f' },
    KeyG: { code: 'KeyG', key: 'g' },
    KeyI: { code: 'KeyI', key: 'i' },
    KeyQ: { code: 'KeyQ', key: 'q' },
    KeyR: { code: 'KeyR', key: 'r' },
    KeyS: { code: 'KeyS', key: 's' },
    KeyV: { code: 'KeyV', key: 'v' },
    KeyW: { code: 'KeyW', key: 'w' },
    BracketLeft: { code: 'BracketLeft', key: '[' },
    BracketRight: { code: 'BracketRight', key: ']' },
    ArrowLeft: { code: 'ArrowLeft', key: 'ArrowLeft' },
    ArrowRight: { code: 'ArrowRight', key: 'ArrowRight' },
    ArrowUp: { code: 'ArrowUp', key: 'ArrowUp' },
    ArrowDown: { code: 'ArrowDown', key: 'ArrowDown' },
    Numpad0: { code: 'Numpad0', key: '0' },
    Numpad1: { code: 'Numpad1', key: '1' },
    Numpad2: { code: 'Numpad2', key: '2' },
    Numpad3: { code: 'Numpad3', key: '3' },
    Numpad4: { code: 'Numpad4', key: '4' },
    Numpad5: { code: 'Numpad5', key: '5' },
    Numpad6: { code: 'Numpad6', key: '6' },
    Numpad7: { code: 'Numpad7', key: '7' },
    Numpad8: { code: 'Numpad8', key: '8' },
    Numpad9: { code: 'Numpad9', key: '9' },
    F8: { code: 'F8', key: 'F8' }
};
/** typedef SiteCategory
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
 * @typedef {object} Site
 * @property {string} id 
 * @property {string} origin
 * @property {RegExp} hrefRegEx
 * @property {SiteCategory[]} siteCategories
 * @property {SiteCategory} currentPageCategory
 * @property {string[]} originWhitelist
 * @property {function} isMessageOriginAllowed
 */
/** 
 * @enum {Site} 
 */
export const Sites = {
    "7MM": new Site(SiteIDs["7MM"], "https://7mmtv.tv", /^https:\/\/www\.bilibili\.com\/.*/, [SiteCategories.AV], ["https://mm9842.com", "https://avgle.com"]),
    AVGLE: new Site(SiteIDs.AVGLE, "https://avgle.com", /^https:\/\/avgle\.com\/video\/\w+/, [SiteCategories.AV], ["https://7mmtv.tv"]),
    AVGLE_EMBED: new Site(SiteIDs.AVGLE_EMBED, "https://avgle.com", /^https:\/\/avgle\.com\/embed\/\w+$/, [SiteCategories.AV], ["https://7mmtv.tv"]),
    BILIBILI: new Site(SiteIDs.BILIBILI, "https://www.bilibili.com", /^https:\/\/www\.bilibili\.com\/.*/, [SiteCategories.VIDEO_SHARING]),
    BILIBILI_BANGUMI: new Site(SiteIDs.BILIBILI_BANGUMI, "https://www.bilibili.com", /^https:\/\/www\.bilibili\.com\/bangumi\/play\/.+/, [SiteCategories.VIDEO_SHARING]),
    BILIBILI_LIVE: new Site(SiteIDs.BILIBILI_LIVE, "https://live.bilibili.com", /^https:\/\/live\.bilibili\.com\/.*/, [SiteCategories.LIVE_STREAMING]),
    BILIBILI_VIDEO: new Site(SiteIDs.BILIBILI_VIDEO, "https://www.bilibili.com", /^https:\/\/www\.bilibili\.com\/video\/.+/, [SiteCategories.VIDEO_SHARING]),
    BUYCAR5: new Site(SiteIDs.BUYCAR5, "https://vod3.buycar5.cn", /^https:\/\/vod\d+\.buycar5\.cn/, [SiteCategories.VIDEO_HOSTING], ["https://www.meijuttb.com", 'https://www.meijubs.com']),
    DIOUS: new Site(SiteIDs.DIOUS, "https://v7.dious.cc", /^https:\/\/v7.dious.cc/, [SiteCategories.VIDEO_HOSTING], ["https://www.meijuttb.com", 'https://www.meijubs.com']),
    JABLE: new Site(SiteIDs.JABLE, "https://jable.tv", /^https:\/\/jable.tv/, [SiteCategories.AV]),
    JAVLIBRARY: new Site(SiteIDs.JAVLIBRARY, "https://www.javlibrary.com", /^https:\/\/www\.javlibrary\.com\/.*/, [SiteCategories.AV]),
    JX444662: new Site(SiteIDs.JX444662, "https://jx.444662.cn", /^https:\/\/jx.444662.cn/, [SiteCategories.VIDEO_HOSTING], ["https://www.meijuttb.com", 'https://www.meijubs.com']),
    MEIJUBS: new Site(SiteIDs.MEIJUBS, "https://www.meijubs.com", undefined, [SiteCategories.TV_SERIES], ["https://vod3.buycar5.cn", "https://jx.444662.cn", "https://vod4.buycar5.cn", "https://v7.dious.cc"]),
    MEIJUTTB: new Site(SiteIDs.MEIJUTTB, "https://www.meijuttb.com", undefined, [SiteCategories.TV_SERIES], ["https://vod3.buycar5.cn", "https://jx.444662.cn", "https://vod4.buycar5.cn"]),
    MINGTIAN6: new Site(SiteIDs.MINGTIAN6, "https://www.mingtian6.com", undefined, [SiteCategories.TV_SERIES], ["https://www.qingbeiban.com"]),
    MM9842: new Site(SiteIDs.MM9842, "https://mm9842.com", /^https:\/\/mm9842.com/, [SiteCategories.AV], ["https://7mmtv.tv"]),
    NEXUSMODS: new Site(SiteIDs.NEXUSMODS, "https://www.nexusmods.com", undefined, [SiteCategories.MODDING], ["https://www.youtube.com"]),
    QINGBEIBAN: new Site(SiteIDs.QINGBEIBAN, "https://www.qingbeiban.com", /^https:\/\/www.qingbeiban.com/, [SiteCategories.VIDEO_HOSTING], ["https://www.mingtian6.com"]),
    QXWK: new Site(SiteIDs.QXWK, "https://code.qxwk.net", /^https:\/\/code.qxwk.net/, [SiteCategories.VIDEO_HOSTING], ["https://m.wukongmeiju.com"]),
    STEAM_COMMUNITY_REVIEW: new Site(SiteIDs.STEAM_COMMUNITY_REVIEW, "https://steamcommunity.com", /^https:\/\/steamcommunity\.com\/app\/\d+\/reviews\/.+/, [SiteCategories.GAME]),
    STEAM_STORE: new Site(SiteIDs.STEAM_STORE, "https://store.steampowered.com", /^https:\/\/store\.steampowered\.com\/.*/, [SiteCategories.GAME]),
    WALLHAVEN: new Site(SiteIDs.WALLHAVEN, "https://wallhaven.cc", /^https:\/\/wallhaven\.cc\/.*/, [SiteCategories.IMAGE_HOSTING]),
    WUKONGMEIJU: new Site(SiteIDs.WUKONGMEIJU, "https://m.wukongmeiju.com", undefined, [SiteCategories.TV_SERIES], ["https://code.qxwk.net"]),
    YOUTUBE_EMBED: new Site(SiteIDs.YOUTUBE_EMBED, "https://www.youtube.com", /^https:\/\/www.youtube.com\/embed\/[\w-]+$/, [SiteCategories.VIDEO_SHARING], ['https://www.nexusmods.com'])
};