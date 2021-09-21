import { VideoInstance } from './class';
import { util as sutil } from '../site/util';
export const util = {
    /**
     * 
     * @param {import('./class').VideoInstanceData} initData 
     * @param {import('../site/class').VideoSite} [site]
     * @param {import('../site/class').PlayerMetadata} [playerMetadata]
     * @returns 
     * @throws
     */
    asyncGetVideoInstance: function (initData, site = sutil.getCurrentVideoSite(), playerMetadata) {
        let videoInstance = new VideoInstance(site);
        return videoInstance.init(initData, playerMetadata);
    }
};