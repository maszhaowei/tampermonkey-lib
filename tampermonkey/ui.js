import { VideoSites } from './enum';
import '../css/video.css';
export const ui = {
    /**
     * 
     * @returns {import('./class').VideoSite}
     */
    getCurrentVideoSite() {
        for (let site in VideoSites) {
            if (VideoSites[site].test()) return VideoSites[site];
        }
        throw "No match for current video site";
    }
};