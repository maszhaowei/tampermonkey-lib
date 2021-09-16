import { VideoSites } from './enum';
import '../css/video.css';
export const ui = {
    getCurrentVideoSite() {
        for (let site in VideoSites) {
            if (VideoSites[site].test()) return VideoSites[site];
        }
    }
};