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
                for (let sid in siteids) {
                    SiteIDs[sid] = siteids[sid];
                }
            }
            let sitecategories = res['sitecategories'];
            if (cutil.isObject(sitecategories)) {
                for (let sc in sitecategories) {
                    SiteCategories[sc] = sitecategories[sc];
                }
            }
            let videocategories = res['videocategories'];
            if (cutil.isObject(videocategories)) {
                for (let vc in videocategories) {
                    VideoCategories[vc] = videocategories[vc];
                }
            }
            let sites = res['sites'];
            if (Array.isArray(sites)) {
                for (let site of sites) {
                    let siteid = site.id;
                    let newSite = new Site({
                        id: site.id, origin: site.origin, hrefRegEx: site.hrefRegEx ? new RegExp(site.hrefRegEx) : undefined,
                        siteCategories: site.siteCategories, subcategories: site.subcategories,
                        originWhitelist: site.originWhitelist, additionalInfo: site.additionalInfo
                    });
                    let oriSite = Sites.get(siteid);
                    if (oriSite) cutil.assignNotEmpty(oriSite, newSite);
                    else Sites[siteid] = newSite;
                }
            }
            let videosites = res['videosites'];
            if (Array.isArray(videosites)) {
                for (let vs of videosites) {
                    let siteid = vs.id;
                    let site = Sites.get(siteid);
                    if (!site) continue;
                    VideoSites[siteid] = new VideoSite(site,
                        new PlayerMetadata(vs.containerSelector, vs.controlsSelector, vs.topElementSelectors,
                            vs.playButtonSelector, vs.volumeButtonSelector, vs.fullscreenButtonSelector, vs.webFullscreenButtonSelector));
                }
            }
            let portalsites = res['videoportalsites'];
            if (Array.isArray(portalsites)) {
                for (let ps of portalsites) {
                    let siteid = ps.id;
                    let site = Sites.get(siteid);
                    if (!site) continue;
                    VideoPortalSites[siteid] = new VideoPortalSite(site);
                }
            }
        }
    }
};
