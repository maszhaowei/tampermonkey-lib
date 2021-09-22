import { SiteCategories, SiteIDs, Sites, VideoPortalSites, VideoSites } from './enum';
import { util as ctuil } from '../common/util';
import { util as tutil } from '../tampermonkey/util';
import { PlayerMetadata, Site, SiteCategory, VideoPortalSite, VideoSite } from './class';
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
tutil.get('https://raw.githubusercontent.com/maszhaowei/tampermonkey-lib/master/conf/site.json').then((res) => {
    if (ctuil.isObject(res)) {
        let siteids = res['siteids'];
        if (ctuil.isObject(siteids)) {
            for (let i in siteids) {
                SiteIDs[i] = siteids[i];
            }
        }
        let sitecategories = res['sitecategories'];
        if (ctuil.isObject(sitecategories)) {
            for (let i in sitecategories) {
                let s = sitecategories[i];
                SiteCategories[i] = new SiteCategory(s.categoryName, new RegExp(s.titleRegEx));
            }
        }
        let sites = res['sites'];
        if (ctuil.isObject(sites)) {
            for (let i in sites) {
                let s = sites[i];
                Sites[i] = new Site(s.id, s.origin, s.hrefRegEx, s.siteCategories, s.originWhitelist);
            }
        }
        let videosites = res['videosites'];
        if (ctuil.isObject(videosites)) {
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
        if (ctuil.isObject(portalsites)) {
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