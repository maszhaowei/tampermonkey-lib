import { DefaultPlayerMetadatas, SiteCategories, SiteIDs, Sites, VideoCategories, VideoPortalSites, VideoSites } from './enum';
import { PlayerMetadata, Site, VideoPortalSite, VideoSite } from './class';
import { util as cutil } from '../common/util';
import { util as tutil } from '../tampermonkey/util';
/** @type {WeakMap<Site,(e:MessageEvent)=>void)>} */
let messageHandlerMap = new WeakMap();
/**
 * 
 * @param {Site} site 
 */
function bindMessageHandler(site) {
    /** @type {(e:MessageEvent)=>void} */
    let handler;
    if (messageHandlerMap.has(site)) handler = messageHandlerMap.get(site);
    else {
        handler = (e) => {
            if (site.validateMessage(e)) tutil.printReceiveMessage(e);
        };
        messageHandlerMap.set(site, handler);
    }
    window.addEventListener('message', handler);
}
/**
 * 
 * @param {Site[]} sites 
 * @returns 
 * @throws
 */
function findCurrentSite(sites) {
    let baseSiteCandidate;
    for (let s in sites) {
        const site = sites[s];
        if (!(site instanceof Site) || !site.test()) continue;
        if (site.isBaseSite()) {
            if (!baseSiteCandidate) baseSiteCandidate = site;
        }
        else {
            bindMessageHandler(site);
            return site;
        }
    }
    if (baseSiteCandidate) {
        bindMessageHandler(baseSiteCandidate);
        return baseSiteCandidate;
    }
    throw "No match for current site";
}
export const util = {
    /**
     * Return the first non-base site that matches this window, otherwise return the first matching base site. This method is idempotent.
     * @throws 
     */
    getCurrentSite: function () {
        return findCurrentSite(Sites);
    },
    /**
     * This method is idempotent.
     * @returns {VideoSite}
     * @throws 
     */
    getCurrentVideoSite: function () {
        return findCurrentSite(VideoSites);
    },
    /**
     * This method is idempotent.
     * @returns {VideoPortalSite}
     * @throws 
     */
    getCurrentVideoPortalSite: function () {
        return findCurrentSite(VideoPortalSites);
    },
    /**
     * Update Enums from remote json. Dependency: GM_xmlhttpRequest and CORS whitelist: raw.githubusercontent.com.
     * @param {'dev'|'master'} branch - Branch. Default to master.
     */
    updateRemoteSiteConfig: async function (branch = 'master') {
        if (branch != 'dev' && branch != 'master') return Promise.reject('Invalid branch');
        const res = await tutil.gmGet(`https://raw.githubusercontent.com/maszhaowei/tampermonkey-lib/${branch}/conf/site.json`, undefined, undefined, true);
        /** @type {Error[]} */
        let errors = [];
        if (!cutil.isObject(res)) return Promise.reject('json content is not an object');
        let siteids = res['siteids'];
        if (cutil.isObject(siteids)) {
            for (let sid in siteids) {
                SiteIDs[sid] = siteids[sid];
            }
        }
        else errors.push(new TypeError('Invalid format of siteids: ' + siteids));
        let sitecategories = res['sitecategories'];
        if (cutil.isObject(sitecategories)) {
            for (let sc in sitecategories) {
                SiteCategories[sc] = sitecategories[sc];
            }
        }
        else errors.push(new TypeError('Invalid format of sitecategories: ' + sitecategories));
        let videocategories = res['videocategories'];
        if (cutil.isObject(videocategories)) {
            for (let vc in videocategories) {
                VideoCategories[vc] = videocategories[vc];
            }
        }
        else errors.push(new TypeError('Invalid format of videocategories: ' + videocategories));
        let sites = res['sites'];
        if (Array.isArray(sites)) {
            for (let site of sites) {
                let siteid = site.id;
                if (!SiteIDs.hasValue(siteid)) {
                    errors.push(new Error(`Unable to find site id: ${siteid} in siteids`));
                    continue;
                }
                let newSite = new Site({
                    id: site.id, baseSiteId: site.baseSiteId,
                    origin: site.origin, hrefRegEx: site.hrefRegEx ? new RegExp(site.hrefRegEx) : undefined,
                    siteCategories: site.siteCategories, contentCategories: site.contentCategories,
                    originWhitelist: site.originWhitelist, additionalInfo: site.additionalInfo
                });
                let oriSite = Sites.get(siteid);
                if (oriSite) cutil.assignNotEmpty(oriSite, [newSite], true, true);
                else Sites[siteid] = newSite;
            }
        }
        else errors.push(new TypeError('Invalid format of sites: ' + sites));
        let videosites = res['videosites'];
        if (Array.isArray(videosites)) {
            for (let vs of videosites) {
                let siteid = vs.id;
                let site = Sites.get(siteid);
                if (!site) {
                    errors.push(new Error('Unable to find site: ' + siteid));
                    continue;
                }
                let oriVideoSite = VideoSites.get(siteid);
                let defaultPM;
                if (vs.defaultPlayerMetadata) defaultPM = DefaultPlayerMetadatas.get(vs.defaultPlayerMetadata);
                let newPM = new PlayerMetadata({
                    containerSelector: vs.containerSelector, controlsSelector: vs.controlsSelector, topElementSelectors: vs.topElementSelectors,
                    playButtonSelector: vs.playButtonSelector, volumeButtonSelector: vs.volumeButtonSelector,
                    fullscreenButtonSelector: vs.fullscreenButtonSelector, webFullscreenButtonSelector: vs.webFullscreenButtonSelector
                });
                if (defaultPM) newPM = cutil.assignNotEmpty(defaultPM.copy(), [newPM], true, true);
                if (oriVideoSite) cutil.assignNotEmpty(oriVideoSite.defaultPlayerMetadata, [newPM], true, true);
                else VideoSites[siteid] = new VideoSite(site, newPM);
            }
        }
        else errors.push(new TypeError('Invalid format of videosites: ' + videosites));
        let portalsites = res['videoportalsites'];
        if (Array.isArray(portalsites)) {
            for (let ps of portalsites) {
                let siteid = ps.id;
                let site = Sites.get(siteid);
                if (!site) {
                    errors.push(new Error('Unable to find site: ' + siteid));
                    continue;
                }
                VideoPortalSites[siteid] = new VideoPortalSite(site, ps.additionalInfo);
            }
        }
        else errors.push(new TypeError('Invalid format of portalsites: ' + portalsites));
        if (errors.length > 0) Promise.reject(errors);
        else return Promise.resolve();
    }
};
