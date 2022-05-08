import { v4, validate as uuidValidate } from "uuid";
import { util as tutil } from "../tampermonkey/util";
import type { SiteIDs, SiteCategories, VideoCategories } from './enum';
export interface PlayerMetadata {
    containerSelector: string,
    controlsSelector: string,
    playButtonSelector?: string,
    fullscreenButtonSelector?: string,
    webFullscreenButtonSelector?: string,
    muteButtonSelector?: string,
    delegateIgnoreSelectors?: string[],
    delegateIgnoreEvents?: Array<{ selector: string, eventTypes: Array<keyof HTMLElementEventMap> }>
}
interface SiteCtorOptions {
    id: ValueOf<typeof SiteIDs>,
    baseSiteId: ValueOf<typeof SiteIDs>,
    origin?: string,
    hrefRegEx: RegExp,
    siteCategories?: ValueOf<typeof SiteCategories>[],
    originWhitelist?: string[],
    additionalInfo?: {
        paginationInfo?: {
            firstBtnSelector?: string,
            prevBtnSelector?: string,
            nextBtnSelector?: string,
            lastBtnSelector?: string,
            currentBtnSelector?: string,
            currentWrapperSelector?: string,
            currentWrapperDescendantSelector?: string
        },
        inputFieldSelector?: string
    }
}
export interface SiteMessageData<T> {
    type: string,
    content: T,
    src: string,
    srcSiteTag: string,
    targetSiteTag?: string | undefined
}
export class Site {
    id;
    baseSiteId;
    #uuid;
    get uuid() { return this.#uuid }
    origin;
    hrefRegEx;
    siteCategories;
    originWhitelist;
    additionalInfo;
    /**
     * [origin] and [hrefRegEx] can't both be empty. [hrefRegex] has higher priority than origin in {@link test} function.
     * @hideconstructor
     */
    constructor({ id, baseSiteId, origin, hrefRegEx, siteCategories = [], originWhitelist = [], additionalInfo = {} }: SiteCtorOptions) {
        this.id = id;
        this.baseSiteId = baseSiteId;
        this.#uuid = v4();
        this.origin = origin;
        this.hrefRegEx = hrefRegEx;
        this.siteCategories = siteCategories;
        this.originWhitelist = originWhitelist;
        this.additionalInfo = additionalInfo;
    }
    isEmbedded() {
        return self !== top;
    }
    isBaseSite() {
        return this.baseSiteId === this.id;
    }
    /**
     * Validate if {@link e} is from a valid script of another {@link Site}.
     */
    validateMessage<T>(e: MessageEvent<SiteMessageData<T>>) {
        let data = e.data;
        if (!data || !data.type || !data.src || !uuidValidate(data.srcSiteTag)) return false;
        let srcOrigin = e.origin;
        return (srcOrigin === window.location.origin || !!this.originWhitelist?.includes(srcOrigin))
            && (!data.targetSiteTag || data.targetSiteTag == this.#uuid);
    }
    /**
     * 
     * @param {Window} targetWindow 
     * @param {string} targetOrigin 
     * @param {object} MessageDataOptions
     * @param {string} MessageDataOptions.type 
     * @param {*} [MessageDataOptions.content] 
     * @param {string} [MessageDataOptions.targetSiteTag]
     * @returns 
     */
    postMessage<T>(targetWindow: Window, targetOrigin: string, { type, content, targetSiteTag }: SiteMessageData<T>) {
        let message: SiteMessageData<T> = {
            type: type, content: content, src: window.location.href,
            srcSiteTag: this.#uuid, targetSiteTag: targetSiteTag
        };
        tutil.printSendMessage(targetOrigin, message);
        targetWindow.postMessage(message, targetOrigin);
    }
    /**
     * Check if {@link href} matches this site's hrefRegEx or origin (if hrefRegEx is not specified).
     * @param {string} [href] 
     * @returns 
     */
    test(href?: string) {
        return this.hrefRegEx.test(href || window.location.href);
    }
}
interface VideoSiteCtorOptions extends SiteCtorOptions {
    playerMetadata: PlayerMetadata,
    videoCategories?: ValueOf<typeof VideoCategories>[]
}
/**
 * 
 * @extends Site
 * {@link Site} 
 */
export class VideoSite extends Site {
    #playerMetadata;
    get playerMetadata() { return this.#playerMetadata }
    videoCategories;
    constructor({ id, baseSiteId, hrefRegEx, playerMetadata: playerMetadata, videoCategories = [], originWhitelist = [] }: VideoSiteCtorOptions) {
        super({ id, baseSiteId, hrefRegEx, originWhitelist });
        this.#playerMetadata = playerMetadata;
        this.videoCategories = videoCategories;
    }
}
interface VideoPortalSiteCtorOptions extends SiteCtorOptions {
    videoCategories?: ValueOf<typeof VideoCategories>[],
    pathIframeSelectors?: string[],
    prevEpisodeSelector?: string,
    nextEpisodeSelector?: string
}
/**
 * 
 * @extends Site
 * {@link Site} 
 */
export class VideoPortalSite extends Site {
    videoCategories;
    pathIframeSelectors;
    prevEpisodeSelector;
    nextEpisodeSelector;
    constructor({ id, baseSiteId, hrefRegEx, videoCategories = [], originWhitelist = [], pathIframeSelectors = [],
        prevEpisodeSelector, nextEpisodeSelector, additionalInfo = {} }: VideoPortalSiteCtorOptions) {
        super({ id, baseSiteId, hrefRegEx, originWhitelist, additionalInfo });
        this.videoCategories = videoCategories;
        this.pathIframeSelectors = pathIframeSelectors;
        this.prevEpisodeSelector = prevEpisodeSelector;
        this.nextEpisodeSelector = nextEpisodeSelector;
    }
}
export class SearchSite extends Site {
    #searchFieldSelector;
    get searchKeyword() {
        if (this.#searchFieldSelector) {
            let searchField = document.querySelector(this.#searchFieldSelector);
            return (searchField instanceof HTMLInputElement && searchField.value) || searchField?.textContent;
        }
        else {
            let urlMatch = window.location.href.match(this.hrefRegEx);
            if (urlMatch) return urlMatch[1];
        }
        return;
    }
    constructor(id: ValueOf<typeof SiteIDs>, baseSiteId: ValueOf<typeof SiteIDs>, hrefRegEx: RegExp, searchFieldSelector?: string) {
        super({ id, baseSiteId, hrefRegEx });
        this.#searchFieldSelector = searchFieldSelector;
    }
}