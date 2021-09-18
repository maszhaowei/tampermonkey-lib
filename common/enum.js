import { KeyboardKeyCode, Site, SiteCategory } from "./class";

export const KeyboardKeyCodes = {
    Space: new KeyboardKeyCode('Space', ' '),
    Enter: new KeyboardKeyCode('Enter', 'Enter'),
    Escape: new KeyboardKeyCode('Escape', 'Escape'),
    KeyC: new KeyboardKeyCode('KeyC', 'c'),
    KeyD: new KeyboardKeyCode('KeyD', 'd'),
    KeyF: new KeyboardKeyCode('KeyF', 'f'),
    KeyG: new KeyboardKeyCode('KeyG', 'g'),
    KeyI: new KeyboardKeyCode('KeyI', 'i'),
    KeyQ: new KeyboardKeyCode('KeyQ', 'q'),
    KeyR: new KeyboardKeyCode('KeyR', 'r'),
    KeyS: new KeyboardKeyCode('KeyS', 's'),
    KeyV: new KeyboardKeyCode('KeyV', 'v'),
    KeyW: new KeyboardKeyCode('KeyW', 'w'),
    BracketLeft: new KeyboardKeyCode('BracketLeft', '['),
    BracketRight: new KeyboardKeyCode('BracketRight', ']'),
    ArrowLeft: new KeyboardKeyCode('ArrowLeft', 'ArrowLeft'),
    ArrowRight: new KeyboardKeyCode('ArrowRight', 'ArrowRight'),
    ArrowUp: new KeyboardKeyCode('ArrowUp', 'ArrowUp'),
    ArrowDown: new KeyboardKeyCode('ArrowDown', 'ArrowDown'),
    Numpad0: new KeyboardKeyCode('Numpad0', '0'),
    Numpad1: new KeyboardKeyCode('Numpad1', '1'),
    Numpad2: new KeyboardKeyCode('Numpad2', '2'),
    Numpad3: new KeyboardKeyCode('Numpad3', '3'),
    Numpad4: new KeyboardKeyCode('Numpad4', '4'),
    Numpad5: new KeyboardKeyCode('Numpad5', '5'),
    Numpad6: new KeyboardKeyCode('Numpad6', '6'),
    Numpad7: new KeyboardKeyCode('Numpad7', '7'),
    Numpad8: new KeyboardKeyCode('Numpad8', '8'),
    Numpad9: new KeyboardKeyCode('Numpad9', '9'),
    F8: new KeyboardKeyCode('F8', 'F8')
};
/**
 * @enum {SiteCategory}
 */
export const SiteCategories = {
    AV: new SiteCategory("AV", /([a-zA-Z]+-\d+)(-(\w+))?/),
    DB: new SiteCategory("DB"),
    GAME: new SiteCategory("Game"),
    IMAGE_HOSTING: new SiteCategory("Image Hosting"),
    LIVE_STREAMING: new SiteCategory("Live Streaming"),
    MODDING: new SiteCategory("Modding"),
    MOVIE: new SiteCategory("Movie"),
    TV_SERIES: new SiteCategory("TV Series", /([\u4e00-\u9fa5\w]+)第(.+)季.*第(.+)集/),
    VIDEO_HOSTING: new SiteCategory("Video Hosting"),
    VIDEO_SHARING: new SiteCategory("Video Sharing")
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
    "7MM": new Site(SiteIDs["7MM"], "https://7mmtv.tv", /^https:\/\/7mmtv\.tv\/.*/, [SiteCategories.AV], ["https://mm9842.com", "https://avgle.com"]),
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
/**
 * @enum {string}
 */
export const TooltipPosition = {
    TOP_LEFT: 'top-left',
    TOP_CENTER: 'top-center',
    TOP_RIGHT: 'top-right',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_CENTER: 'bottom-center',
    BOTTOM_RIGHT: 'bottom-right',
    LEFT_TOP: 'left-top',
    LEFT_CENTER: 'left-center',
    LEFT_BOTTOM: 'left-bottom',
    RIGHT_TOP: 'right-top',
    RIGHT_CENTER: 'right-center',
    RIGHT_BOTTOM: 'right-bottom',
    CENTER_CENTER: 'center-center',
}