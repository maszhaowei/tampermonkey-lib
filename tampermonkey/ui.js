import {Sites} from '../common/enum';
import {VideoSites} from './enum';
let site;
for (let s in Sites) {
    if (Sites[s].test()) site = Sites[s];
}
export const currentSite = site;
let videoSite;
for (let site in VideoSites) {
    if (VideoSites[site].test()) videoSite = VideoSites[site];
}
export const currentVideoSite = videoSite;