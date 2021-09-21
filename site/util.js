import { SiteCategories, Sites, VideoPortalSites, VideoSites } from './enum';
/** @type {Map<import('./class').Site,(e)=>void>} */
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