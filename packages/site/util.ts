import { SearchSites, Sites, VideoPortalSites, VideoSites } from './enum';
import type { SearchSite, Site, VideoPortalSite, SiteMessageData, VideoSite } from './class';
import { util as tutil } from '../tampermonkey/util';

let messageHandlerMap: WeakMap<Site, (e: MessageEvent) => void> = new WeakMap();

function bindMessageHandler(site: Site) {
    let handler: (e: MessageEvent) => void;
    if (messageHandlerMap.has(site)) handler = messageHandlerMap.get(site) as (e: MessageEvent) => void;
    else {
        handler = (e: MessageEvent<SiteMessageData<unknown>>) => {
            if (site.validateMessage(e)) tutil.printReceiveMessage(e);
        };
        messageHandlerMap.set(site, handler);
    }
    window.addEventListener('message', handler);
}
function findCurrentSite<T extends Site>(sites: Record<string, T>) {
    let baseSiteCandidate;
    for (let s in sites) {
        const site = sites[s] as T;
        if (!site.test()) continue;
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
    tutil.debug(`Can't find current site: ${window.location.href}.`);
    return;
}
export const util = {
    getCurrentSite: function () {
        return findCurrentSite(Sites);
    },
    getCurrentVideoSite: function () {
        return findCurrentSite<VideoSite>(VideoSites);
    },
    getCurrentVideoPortalSite: function () {
        return findCurrentSite<VideoPortalSite>(VideoPortalSites);
    },
    getCurrentSearchSite: function () {
        findCurrentSite<SearchSite>(SearchSites);
    }
};
