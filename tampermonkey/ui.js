import '../css/video.css';
import { VideoSites } from './enum';
import { SiteCategories } from '../common/enum';
export const ui = {
    /**
     * 
     * @returns {import('./class').VideoSite}
     * @throws
     */
    getCurrentVideoSite() {
        for (let site in VideoSites) {
            if (VideoSites[site].test()) return VideoSites[site];
        }
        throw 'No match for current video site';
    },
    /**
     * 
     * @param {import('./class').VideoSite} [site] 
     * @returns {import('../common/class').SiteCategory}
     * @throws
     */
    getCurrentPageCategory(site) {
        if(!site) site = ui.getCurrentVideoSite();
        let siteCategories = site.siteCategories;
        if (!Array.isArray(siteCategories) || siteCategories.length == 0) throw 'Init site categories is empty.';
        else if (siteCategories.length == 1) return siteCategories[0];
        else if (siteCategories.includes(SiteCategories.TV_SERIES) && SiteCategories.TV_SERIES.titleRegEx.test(document.title)) return siteCategories.TV_SERIES;
        else if (super.siteCategories && super.siteCategories.includes(SiteCategories.MOVIE)) return SiteCategories.MOVIE;
    }
};