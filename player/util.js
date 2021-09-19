import { VideoInstances } from './enum';
export const util = {
    /**
     * 
     * @param {HTMLVideoElement} video 
     * @param {Element} container 
     * @param {import('../site/class').PlayerMetadata} [playerMetadata]
     * @returns 
     * @throws
     */
    getVideoInstance(video, container, playerMetadata) {
        for (let name in VideoInstances) {
            /** @type {import('./class').VideoInstance} */
            let videoInstance = VideoInstances[name];
            if (videoInstance.test()) {
                let instance = videoInstance.clone();
                return instance.init(video, container, playerMetadata);
            }
        }
        throw 'No match for current video instance';
    }
};