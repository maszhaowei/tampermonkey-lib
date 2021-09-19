import { VideoInstance } from "./class";
import { VideoSites } from '../site/enum';
/**
 * @enum {VideoInstance}
 */
export const VideoInstances = {
    AVGLE: new VideoInstance(VideoSites.AVGLE),
    AVGLE_EMBED: new VideoInstance(VideoSites.AVGLE_EMBED),
    BILIBILI: new VideoInstance(VideoSites.BILIBILI_VIDEO),
    BILIBILI_BANGUMI: new VideoInstance(VideoSites.BILIBILI_BANGUMI),
    BUYCAR5: new VideoInstance(VideoSites.BUYCAR5),
    DIOUS: new VideoInstance(VideoSites.DIOUS),
    JABLE: new VideoInstance(VideoSites.JABLE),
    JX444662: new VideoInstance(VideoSites.JX444662),
    MM9842: new VideoInstance(VideoSites.MM9842),
    QINGBEIBAN: new VideoInstance(VideoSites.QINGBEIBAN),
    QXWK: new VideoInstance(VideoSites.QXWK),
    YOUTUBE_EMBED: new VideoInstance(VideoSites.YOUTUBE_EMBED),
};