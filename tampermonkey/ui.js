import { VideoSites } from './enum';
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
    }
};