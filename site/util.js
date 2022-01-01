import { DefaultPlayerMetadatas, SearchSites, SiteCategories, SiteIDs, Sites, VideoCategories, VideoPortalSites, VideoSites } from './enum';
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
    tutil.debug('Can\'t find current site.');
}
export const util = {
    /**
     * Return the first non-base site that matches this window, otherwise return the first matching base site. This method is idempotent.
     */
    getCurrentSite: function () {
        return findCurrentSite(Sites);
    },
    /**
     * This method is idempotent.
     * @returns {VideoSite}
     */
    getCurrentVideoSite: function () {
        return findCurrentSite(VideoSites);
    },
    /**
     * This method is idempotent.
     * @returns {VideoPortalSite}
     */
    getCurrentVideoPortalSite: function () {
        return findCurrentSite(VideoPortalSites);
    },
    /**
     * 
     * @returns {import('./class').SearchSite}
     */
    getCurrentSearchSite: function () {
        for (let s in SearchSites) {
            const site = SearchSites[s];
            if (site instanceof Site && site.test()) return site;
        }
        tutil.debug('Can\'t find current site.');
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
                    siteCategories: site.siteCategories,
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
                if (!SiteIDs.hasValue(siteid)) {
                    errors.push(new Error(`Unable to find site id: ${siteid} in siteids`));
                    continue;
                }
                let playerMetadataTemplate;
                if (vs.playerMetadataTemplate) playerMetadataTemplate = DefaultPlayerMetadatas.get(vs.playerMetadataTemplate);
                let newPM = new PlayerMetadata({
                    containerSelector: vs.containerSelector, controlsSelector: vs.controlsSelector, delegateIgnoreSelectors: vs.delegateIgnoreSelectors,
                    playButtonSelector: vs.playButtonSelector, volumeButtonSelector: vs.volumeButtonSelector,
                    fullscreenButtonSelector: vs.fullscreenButtonSelector, webFullscreenButtonSelector: vs.webFullscreenButtonSelector
                });
                if (Array.isArray(vs.delegateIgnoreEvents)) {
                    let ignoreMap = new Map();
                    for (let ignoreEvent of vs.delegateIgnoreEvents) {
                        ignoreMap.set(ignoreEvent.selector, ignoreEvent.eventTypes);
                    }
                    newPM.delegateIgnoreMap = ignoreMap;
                }
                if (playerMetadataTemplate) newPM = cutil.assignNotEmpty(playerMetadataTemplate.copy(), [newPM], true, true);
                let oriVideoSite = VideoSites.get(siteid);
                let newVideoSite = new VideoSite({
                    id: vs.id, baseSiteId: vs.baseSiteId, hrefRegEx: vs.hrefRegEx ? new RegExp(vs.hrefRegEx) : undefined,
                    defaultPlayerMetadata: newPM, videoCategories: vs.videoCategories,
                    originWhitelist: vs.originWhitelist
                });
                if (oriVideoSite) {
                    cutil.assignNotEmpty(oriVideoSite.defaultPlayerMetadata, [newPM], true, true);
                    cutil.assignNotEmpty(oriVideoSite, [newVideoSite], true, true);
                }
                else VideoSites[siteid] = newVideoSite;
            }
        }
        else errors.push(new TypeError('Invalid format of videosites: ' + videosites));
        let portalsites = res['videoportalsites'];
        if (Array.isArray(portalsites)) {
            for (let ps of portalsites) {
                let siteid = ps.id;
                if (!SiteIDs.hasValue(siteid)) {
                    errors.push(new Error(`Unable to find site id: ${siteid} in siteids`));
                    continue;
                }
                let oriVideoPortalSite = VideoPortalSites.get(siteid);
                let newVideoPortalSite = new VideoPortalSite({
                    id: ps.id, baseSiteId: ps.baseSiteId, hrefRegEx: ps.hrefRegEx ? new RegExp(ps.hrefRegEx) : undefined,
                    videoCategories: ps.videoCategories,
                    originWhitelist: ps.originWhitelist, additionalInfo: ps.additionalInfo
                })
                if (oriVideoPortalSite) cutil.assignNotEmpty(oriVideoPortalSite, [newVideoPortalSite], true, true);
                else VideoPortalSites[siteid] = newVideoPortalSite;
            }
        }
        else errors.push(new TypeError('Invalid format of video portal sites: ' + portalsites));
        if (errors.length > 0) Promise.reject(errors);
        else return Promise.resolve();
    }
};
