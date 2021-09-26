import { SiteCategories, SiteIDs, Sites, VideoCategories, VideoPortalSites, VideoSites } from './enum';
import { PlayerMetadata, Site, VideoPortalSite, VideoSite } from './class';
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
        const site = sites[s];
        if (site instanceof Site && site.test()) {
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
    updateEnum: async function () {
        const res = await cutil.get('https://raw.githubusercontent.com/maszhaowei/tampermonkey-lib/master/conf/site.json');
        if (cutil.isObject(res)) {
            let siteids = res['siteids'];
            if (cutil.isObject(siteids)) {
                for (let i in siteids) {
                    SiteIDs[i] = siteids[i];
                }
            }
            let sitecategories = res['sitecategories'];
            if (cutil.isObject(sitecategories)) {
                for (let i_1 in sitecategories) {
                    SiteCategories[i_1] = sitecategories[i_1];
                }
            }
            let videocategories = res['videocategories'];
            if (cutil.isObject(videocategories)) {
                for (let i_2 in videocategories) {
                    VideoCategories[i_2] = videocategories[i_2];
                }
            }
            let sites = res['sites'];
            if (cutil.isObject(sites)) {
                for (let i_3 in sites) {
                    let s = sites[i_3];
                    Sites[i_3] = new Site({
                        id: s.id, origin: s.origin, hrefRegEx: new RegExp(s.hrefRegEx),
                        siteCategories: s.siteCategories, subcategories: s.subcategories,
                        originWhitelist: s.originWhitelist, additionalInfo: s.additionalInfo
                    });
                }
            }
            let videosites = res['videosites'];
            if (cutil.isObject(videosites)) {
                for (let i_4 in videosites) {
                    let s_1 = videosites[i_4];
                    let siteid = s_1.siteid;
                    let site = Sites.get(siteid);
                    if (!site)
                        continue;
                    VideoSites[i_4] = new VideoSite(site,
                        new PlayerMetadata(s_1.containerSelector, s_1.controlsSelector, s_1.topElementSelectors,
                            s_1.playButtonSelector, s_1.volumeButtonSelector, s_1.fullscreenButtonSelector, s_1.webFullscreenButtonSelector));
                }
            }
            let portalsites = res['videoportalsites'];
            if (cutil.isObject(portalsites)) {
                for (let i_5 in portalsites) {
                    let s_2 = portalsites[i_5];
                    let siteid_1 = s_2.siteid;
                    let site_1 = Sites.get(siteid_1);
                    if (!site_1)
                        continue;
                    VideoPortalSites[i_5] = new VideoPortalSite(site_1);
                }
            }
        }
    }
};
