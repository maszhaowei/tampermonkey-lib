import { VideoSites } from './enum';
let videoSite;
for (let site in VideoSites) {
    if (VideoSites[site].test()) videoSite = VideoSites[site];
}
export const ui = { currentVideoSite: videoSite };