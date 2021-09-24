import { SiteCategories, SiteIDs, Sites, VideoPortalSites, VideoSites } from './enum';
import { PlayerMetadata, Site, SiteCategory, VideoPortalSite, VideoSite } from './class';
import { util as cutil } from '../common/util';
import { util as tutil } from '../tampermonkey/util';
/** @type {WeakMap<import('./class').Site,(e:MessageEvent)=>void)>} */
let messageHandlerMap = new WeakMap();
/**
 * 
 * @param {Site[]} sites 
 * @returns 
 * @throws
 */
function findCurrentSite(sites) {
    for (let s in sites) {
        /** @type {import('./class').Site}  */
        const site = sites[s];
        if (site.test()) {
            let handler;
            if (messageHandlerMap.has(site)) handler = messageHandlerMap.get(site);
            else {
                handler = (e) => {
                    if (site.isMessageOriginAllowed(e.origin) && site.isFromTampermonkey(e)) {
                        tutil.printReceiveMessage(e);
                    }
                };
                messageHandlerMap.set(site, handler);
            }
            window.addEventListener('message', handler);
            return site;
        }
    }
    throw "No match for current site";
}
export const util = {
    /**
     * 
     * @throws 
     */
    getCurrentSite: function () {
        return findCurrentSite(Sites);
    },
    /**
     * 
     * @throws 
     */
    getCurrentVideoSite: function () {
        return findCurrentSite(VideoSites);
    },
    /**
     * 
     * @throws 
     */
    getCurrentVideoPortalSite: function () {
        return findCurrentSite(VideoPortalSites);
    },
    /**
     * 
     * @param {import('./class').Site} [site] 
     * @returns {import('./class').SiteCategory|undefined} 返回页面分类或undefine(无法确定)
     * @throws
     */
    getCurrentPageCategory: function (site) {
        site = site || util.getCurrentSite();
        let siteCategories = site.siteCategories;
        if (!Array.isArray(siteCategories) || siteCategories.length == 0) throw 'Site categories is empty.';
        else if (siteCategories.length == 1) return siteCategories[0];
        else if (siteCategories.includes(SiteCategories.TV_SERIES) && SiteCategories.TV_SERIES.titleRegEx.test(document.title)) return siteCategories.TV_SERIES;
        else if (siteCategories && siteCategories.includes(SiteCategories.MOVIE)) return SiteCategories.MOVIE;
    }
};
cutil.get('https://raw.githubusercontent.com/maszhaowei/tampermonkey-lib/master/conf/site.json').then((res) => {
    if (cutil.isObject(res)) {
        let siteids = res['siteids'];
        if (cutil.isObject(siteids)) {
            for (let i in siteids) {
                SiteIDs[i] = siteids[i];
            }
        }
        let sitecategories = res['sitecategories'];
        if (cutil.isObject(sitecategories)) {
            for (let i in sitecategories) {
                let s = sitecategories[i];
                SiteCategories[i] = new SiteCategory(s.categoryName, new RegExp(s.titleRegEx));
            }
        }
        let sites = res['sites'];
        if (cutil.isObject(sites)) {
            for (let i in sites) {
                let s = sites[i];
                Sites[i] = new Site(s.id, s.origin, new RegExp(s.hrefRegEx), s.siteCategories, s.originWhitelist);
            }
        }
        let videosites = res['videosites'];
        if (cutil.isObject(videosites)) {
            for (let i in videosites) {
                let s = videosites[i];
                let siteid = s.siteid;
                let site = Sites.get(siteid);
                if (!site) continue;
                VideoSites[i] = new VideoSite(site,
                    new PlayerMetadata(s.containerSelector, s.controlsSelector, s.topElementSelectors,
                        s.playButtonSelector, s.volumeButtonSelector, s.fullscreenButtonSelector, s.webFullscreenButtonSelector));
            }
        }
        let portalsites = res['videoportalsites'];
        if (cutil.isObject(portalsites)) {
            for (let i in portalsites) {
                let s = portalsites[i];
                let siteid = s.siteid;
                let site = Sites.get(siteid);
                if (!site) continue;
                VideoPortalSites[i] = new VideoPortalSite(site);
            }
        }
    }
});