import { SiteCategories, Sites, VideoSites } from './enum';
import { util as tutil } from '../tampermonkey/util';
import { Enum } from '../tampermonkey/main';
export const util = {
    /**
     * 
     * @throws 
     */
    getCurrentSite: function () {
        for (let s in Sites) {
            /** @type {import('./class').Site}  */
            const site = Sites[s];
            if (site.test()) {
                /** @todo 重复调用 */
                window.addEventListener('message', (e) => {
                    if (e.data && site.isMessageOriginAllowed(e.origin) && Enum.MessageTypes.test(e.data.type)) {
                        tutil.printReceiveMessage(e);
                    }
                })
                return site;
            }
        }
        throw "No match for current site";
    },
    /**
     * 
     * @throws 
     */
    getCurrentVideoSite: function () {
        for (let s in VideoSites) {
            /** @type {import('./class').VideoSite} */
            const videoSite = VideoSites[s];
            if (videoSite.test()) {
                /** @todo 重复调用 */
                window.addEventListener('message', (e) => {
                    if (e.data && videoSite.isMessageOriginAllowed(e.origin) && Enum.MessageTypes.test(e.data.type)) {
                        tutil.printReceiveMessage(e);
                    }
                })
                return videoSite;
            }
        }
        throw "No match for current video site";
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